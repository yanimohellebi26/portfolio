import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaComments, FaPaperPlane, FaTimes } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import { normalizeMessage, KNOWLEDGE_BASE } from "./chatbotKnowledge";
import "./Chatbot.css";

/* ── i18n copy ── */
const UI_COPY = {
  fr: {
    welcome:
      "👋 Bonjour ! Je suis l'assistant virtuel du portfolio de Yani.\n\n💬 Pose-moi des questions sur :\n• 🎓 Sa formation\n• 💼 Ses projets\n• 💻 Ses compétences\n• 📧 Comment le contacter",
    header: "Assistant Portfolio",
    subheader: "En ligne",
    placeholder: "Pose ta question ici...",
    inputAriaLabel: "Zone de saisie de la question",
    sendAriaLabel: "Envoyer le message",
    closeAriaLabel: "Fermer la discussion",
    openAriaLabel: "Ouvrir la discussion",
    fallback:
      "Merci pour ta question ! Je n'ai pas encore la réponse, mais tu peux consulter les sections de mon portfolio ou m'envoyer un message via le formulaire de contact.",
    suggestions: ["Quels sont tes projets ?", "Stack technique ?", "Expérience pro ?", "Contact"],
  },
  en: {
    welcome:
      "👋 Hi! I'm Yani's portfolio virtual assistant.\n\n💬 Ask me about:\n• 🎓 His education\n• 💼 His projects\n• 💻 His skills\n• 📧 How to contact him",
    header: "Portfolio Assistant",
    subheader: "Online",
    placeholder: "Ask your question here...",
    inputAriaLabel: "Question input area",
    sendAriaLabel: "Send message",
    closeAriaLabel: "Close chat",
    openAriaLabel: "Open chat",
    fallback:
      "Thanks for your question! I don't have the answer yet, but you can browse the portfolio sections or send a message via the contact form.",
    suggestions: ["What are your projects?", "Tech stack?", "Experience?", "Contact"],
  },
};

/* ── Format bot messages (bold **text** and links) ── */
const formatMessage = (msg) => {
  const lines = msg.split("\n");
  return lines.map((line, i) => {
    // Parse **bold** segments and links
    const parts = line.split(/(\*\*[^*]+\*\*|https?:\/\/[^\s]+)/g);
    const rendered = parts.map((part, j) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={j}>{part.slice(2, -2)}</strong>;
      }
      if (/^https?:\/\//.test(part)) {
        return (
          <a key={j} href={part} target="_blank" rel="noopener noreferrer" className="chatbot__link">
            {part.replace(/^https?:\/\//, "")}
          </a>
        );
      }
      return part;
    });
    return (
      <span key={i}>
        {rendered}
        {i < lines.length - 1 && <br />}
      </span>
    );
  });
};

/* ── Typing indicator ── */
const TypingIndicator = () => (
  <div className="chatbot__message chatbot__message--bot chatbot__typing">
    <span className="chatbot__dot" />
    <span className="chatbot__dot" />
    <span className="chatbot__dot" />
  </div>
);

/* ── Main Component ── */
const Chatbot = () => {
  const { language } = useLanguage();
  const text = UI_COPY[language] || UI_COPY.en;

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    // Restore from sessionStorage if available
    try {
      const saved = sessionStorage.getItem("chatbot-messages");
      if (saved) return JSON.parse(saved);
    } catch { /* ignore */ }
    return [{ sender: "bot", text: (UI_COPY[language] || UI_COPY.en).welcome, ts: Date.now() }];
  });
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const prevLangRef = useRef(language);

  // Persist messages to sessionStorage
  useEffect(() => {
    try { sessionStorage.setItem("chatbot-messages", JSON.stringify(messages)); } catch { /* ignore */ }
  }, [messages]);

  // Reset welcome message when language changes
  useEffect(() => {
    if (prevLangRef.current !== language) {
      prevLangRef.current = language;
      const currentText = UI_COPY[language] || UI_COPY.en;
      setMessages([{ sender: "bot", text: currentText.welcome, ts: Date.now() }]);
      setShowSuggestions(true);
    }
  }, [language]);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (messagesEndRef.current?.scrollIntoView) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  // Focus textarea when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  const toggleChat = () => setIsOpen((prev) => !prev);

  const getBotResponse = useCallback((message) => {
    const normalizedMessage = normalizeMessage(message);
    // Score-based matching: prioritize entries with more keyword hits
    let bestEntry = null;
    let bestScore = 0;
    for (const item of KNOWLEDGE_BASE) {
      const score = item.keywords.reduce(
        (acc, kw) => acc + (normalizedMessage.includes(kw) ? 1 : 0),
        0
      );
      if (score > bestScore) {
        bestScore = score;
        bestEntry = item;
      }
    }

    if (bestEntry) {
      if (typeof bestEntry.answer === "object") {
        return bestEntry.answer[language] || bestEntry.answer.en;
      }
      return bestEntry.answer;
    }

    return text.fallback;
  }, [language, text.fallback]);

  const sendMessage = useCallback(async (messageText) => {
    const trimmedMessage = messageText.trim();
    if (!trimmedMessage || isLoading) return;

    setMessages((prev) => [...prev, { sender: "user", text: trimmedMessage, ts: Date.now() }]);
    setInputValue("");
    setIsLoading(true);
    setShowSuggestions(false);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmedMessage,
          history: messages.slice(-10),
        }),
      });

      if (!res.ok) throw new Error(`Server responded with ${res.status}`);
      const data = await res.json();
      if (!data.reply) throw new Error("Empty reply from server");

      setMessages((prev) => [...prev, { sender: "bot", text: data.reply, ts: Date.now() }]);
    } catch (error) {
      console.error("[chatbot] Error:", error);
      const fallbackResponse = getBotResponse(trimmedMessage);
      setMessages((prev) => [...prev, { sender: "bot", text: fallbackResponse, ts: Date.now() }]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, messages, getBotResponse]);

  const handleSendMessage = () => sendMessage(inputValue);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestion = (suggestion) => {
    sendMessage(suggestion);
  };

  return (
    <div className={`chatbot ${isOpen ? "chatbot--open" : ""}`}>
      {/* Chat window */}
      <div className={`chatbot__window ${isOpen ? "chatbot__window--visible" : ""}`} aria-hidden={!isOpen}>
        <header className="chatbot__header">
          <div className="chatbot__header-info">
            <div className="chatbot__avatar">🤖</div>
            <div>
              <strong>{text.header}</strong>
              <span className="chatbot__status">
                <span className="chatbot__status-dot" />
                {text.subheader}
              </span>
            </div>
          </div>
          <button
            type="button"
            className="chatbot__close"
            onClick={toggleChat}
            aria-label={text.closeAriaLabel}
          >
            <FaTimes />
          </button>
        </header>

        <div
          className="chatbot__messages"
          role="log"
          aria-live="polite"
          aria-relevant="additions"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chatbot__message chatbot__message--${message.sender}`}
            >
              {message.sender === "bot" && <div className="chatbot__msg-avatar">🤖</div>}
              <div className="chatbot__msg-content">
                {message.sender === "bot" ? formatMessage(message.text) : <span>{message.text}</span>}
              </div>
            </div>
          ))}

          {isLoading && <TypingIndicator />}

          {/* Quick reply suggestions */}
          {showSuggestions && messages.length <= 1 && !isLoading && (
            <div className="chatbot__suggestions">
              {text.suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  className="chatbot__suggestion-btn"
                  onClick={() => handleSuggestion(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="chatbot__input">
          <textarea
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={text.placeholder}
            aria-label={text.inputAriaLabel}
            rows={1}
            maxLength={500}
          />
          <button
            type="button"
            onClick={handleSendMessage}
            aria-label={text.sendAriaLabel}
            disabled={isLoading || !inputValue.trim()}
            className={inputValue.trim() ? "chatbot__send--active" : ""}
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>

      {/* Toggle button */}
      <button
        type="button"
        className="chatbot__toggle"
        onClick={toggleChat}
        aria-label={isOpen ? text.closeAriaLabel : text.openAriaLabel}
      >
        <span className={`chatbot__toggle-icon ${isOpen ? "chatbot__toggle-icon--close" : ""}`}>
          {isOpen ? <FaTimes /> : <FaComments />}
        </span>
        {!isOpen && <span className="chatbot__badge" />}
      </button>
    </div>
  );
};

export default Chatbot;
