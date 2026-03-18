import React, { useEffect, useRef, useState } from "react";
import { FaComments, FaPaperPlane, FaTimes } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import "./Chatbot.css";

const normalizeMessage = (text) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const KNOWLEDGE_BASE = [
  {
    keywords: ["nom", "appelle", "qui es", "yani"],
    answer:
      "Je suis Yani Mohellebi, étudiant en Master IA à l'Université de Bourgogne et Ingénieur R&D IA en alternance chez Siemens DISW à Lyon."
  },
  {
    keywords: ["formation", "universite", "etudiant", "master", "licence"],
    answer:
      "Je suis actuellement en Master Intelligence Artificielle à l'Université de Bourgogne à Dijon, où je me spécialise en machine learning avancé, NLP et Computer Vision."
  },
  {
    keywords: ["ou vis", "localisation", "ville", "dijon", "lyon"],
    answer: "Je suis basé entre Dijon (pour mes études à l'université) et Lyon (pour mon alternance chez Siemens DISW). Je fais mes cours à l'Université de Bourgogne et mon alternance à Lyon."
  },
  {
    keywords: ["siemens", "alternance", "travail", "entreprise", "disw"],
    answer:
      "🏢 Je suis Ingénieur R&D IA en alternance chez Siemens DISW à Lyon pour une durée de 2 ans. Je travaille sur des projets d'intelligence artificielle appliquée aux défis industriels, en utilisant des technologies de pointe comme LangChain, TensorFlow et PyTorch."
  },
  {
    keywords: ["specialite", "expertise", "domaine", "ia", "donnees"],
    answer:
      "Mes domaines d'expertise incluent le machine learning avancé, le NLP, la Computer Vision, les architectures d'agents intelligents et le développement full-stack. Je développe des solutions d'IA de bout en bout pour des applications industrielles."
  },
  {
    keywords: ["competence", "technologie", "stack", "outil", "langchain", "langgraph"],
    answer:
      "🚀 Technologies que je maîtrise :\n\n💡 IA/ML : TensorFlow, PyTorch, LangChain, LangGraph\n💻 Backend : FastAPI, REST APIs, Python\n🎨 Frontend : React, Svelte, JavaScript\n🐳 DevOps : Docker, Postman, Flyway\n📊 Databases : PostgreSQL, MongoDB, SQL, Cypher (Neo4j)\n🔧 Autres : OCaml, Pandas, Git"
  },
  {
    keywords: ["projet", "realisation", "portfolio"],
    answer:
      "Je mène plusieurs projets autour de l'IA appliquée : analyse d'avis culturels avec NeutraView, recommandations littéraires intelligentes, analyse de vidéos Instagram avec SUBSENSE ou encore Nutri-Mind pour l'accompagnement nutritionnel des étudiants sportifs."
  },
  {
    keywords: ["experience", "freelance", "mission", "disponible", "professionnel"],
    answer:
      "💼 Expériences professionnelles :\n\n🏢 Alternance Siemens DISW Lyon (oct 2025 - oct 2027)\n• Ingénieur R&D IA\n• Solutions IA industrielles\n\n🔬 Stage Recherche LE2I Dijon (juin - août 2025)\n• Segmentation sémantique\n• Nuages de points 3D\n• 3 projets publiés sur GitHub\n\n💻 Missions freelance et projets académiques avancés en IA"
  },
  {
    keywords: ["stage", "recherche", "le2i", "libiub", "laboratoire", "dijon", "segmentation"],
    answer:
      "🔬 Stage de recherche au Laboratoire d'Informatique de l'Université de Bourgogne (LE2I) - juin à août 2025\n\n📊 Projets réalisés :\n1️⃣ Segmentation Sémantique 🎯\n   → Algorithmes d'analyse d'images\n   → GitHub : github.com/yanimohellebi26/segmentation-semantique\n\n2️⃣ Reconnaissance Maison - Nuage de Points 🏠\n   → Classification d'objets 3D architecturaux\n   → GitHub : github.com/yanimohellebi26/reconnaissance_maison-nuage-de-points\n\n💡 Technologies : PyTorch, TensorFlow, OpenCV, Point Cloud Library"
  },
  {
    keywords: ["siemens", "alternance", "travail", "entreprise", "disw"],
    answer:
      "🏢 Ingénieur R&D IA en alternance chez Siemens DISW à Lyon (octobre 2025 - octobre 2027)\n\n🚀 Missions principales :\n• Développement de solutions IA pour applications industrielles\n• Architectures d'agents intelligents (LangChain, LangGraph)\n• NLP & Computer Vision\n• APIs REST et intégrations système\n\n💻 Stack : LangChain, PyTorch, TensorFlow, Docker, SQL, Cypher, Jira, Confluence"
  },
  {
    keywords: ["engagement", "benevole", "cbfu", "aggo"],
    answer:
      "Je suis élu à la Commission de la Formation et de la Vie Universitaire (CBFU) et bénévole à AGGO pour soutenir les étudiants en organisant des événements et des distributions alimentaires."
  },
  {
    keywords: ["langue", "parle", "anglais", "francais"],
    answer:
      "Je parle français et anglais, ce qui me permet de travailler avec des équipes locales et internationales."
  },
  {
    keywords: ["contact", "email", "joindre", "message"],
    answer:
      "Tu peux me contacter via le formulaire de contact du portfolio ou en m'écrivant directement à l'adresse indiquée dans mon CV."
  },
  {
    keywords: ["cv", "curriculum", "resume"],
    answer:
      "Mon CV est disponible dans la section Résumé du site ; tu peux le visualiser en ligne ou le télécharger grâce au bouton 'Télécharger CV'."
  },
  {
    keywords: ["passion", "motivation", "centre d'interet"],
    answer:
      "Je suis passionné par l'impact des données sur la prise de décision, la cybersécurité et le partage de connaissances au sein des communautés tech."
  },
  {
    keywords: ["celibataire", "copine", "petite amie", "amoureux", "relation", "couple", "marie"],
    answer:
      "😅 Haha ! Je suis un chatbot, pas un magazine people ! Cette info est privée 🔒\n\nParlons plutôt de choses professionnelles :\n• 💼 Ses projets innovants\n• 💻 Ses compétences techniques\n• 🚀 Ses ambitions dans la tech"
  },
  {
    keywords: ["salaire", "combien gagne", "argent", "revenu", "paye"],
    answer:
      "🤖 Beep boop ! Information classée confidentielle ! 🔒\n\nCe que je peux te dire :\n• 💼 Il fait du freelance\n• 🎓 Il est étudiant en informatique\n• 🚀 Il est ouvert aux collaborations\n\nTu veux en savoir plus sur ses compétences ?"
  },
  {
    keywords: ["vie privee", "personnel", "intime", "secret"],
    answer:
      "😄 Désolé, je suis programmé pour parler de code, pas de vie privée !\n\n💡 Je peux t'aider avec :\n• 🎯 Ses domaines d'expertise\n• 📚 Ses projets tech\n• 📧 Comment le contacter professionnellement"
  }
].map((item) => ({
  ...item,
  keywords: item.keywords.map((keyword) => normalizeMessage(keyword))
}));

const UI_COPY = {
  fr: {
    welcome:
      "👋 Bonjour ! Je suis l'assistant virtuel du portfolio de Yani.\n\n💬 Pose-moi des questions sur :\n• 🎓 Sa formation\n• 💼 Ses projets\n• 💻 Ses compétences\n• 📧 Comment le contacter",
    header: "Assistant Portfolio",
    placeholder: "Pose ta question ici...",
    inputAriaLabel: "Zone de saisie de la question",
    sendAriaLabel: "Envoyer le message",
    closeAriaLabel: "Fermer la discussion",
    openAriaLabel: "Ouvrir la discussion",
    typing: "Assistant en train d'écrire\u2026",
    fallback:
      "Merci pour ta question ! Je n'ai pas encore la réponse, mais tu peux consulter les sections de mon portfolio ou m'envoyer un message via le formulaire de contact. Tu peux aussi me demander : \"Quelle est ta formation ?\", \"Quels sont tes projets ?\" ou \"Dans quelles technologies travailles-tu ?\"",
  },
  en: {
    welcome:
      "👋 Hi! I'm Yani's portfolio virtual assistant.\n\n💬 Ask me about:\n• 🎓 His education\n• 💼 His projects\n• 💻 His skills\n• 📧 How to contact him",
    header: "Portfolio Assistant",
    placeholder: "Ask your question here...",
    inputAriaLabel: "Question input area",
    sendAriaLabel: "Send message",
    closeAriaLabel: "Close chat",
    openAriaLabel: "Open chat",
    typing: "Assistant is typing\u2026",
    fallback:
      "Thanks for your question! I don't have the answer yet, but you can browse the portfolio sections or send a message via the contact form. You can also ask: \"What is your education?\", \"What are your projects?\" or \"What technologies do you use?\"",
  },
};

const Chatbot = () => {
  const { language } = useLanguage();
  const text = UI_COPY[language] || UI_COPY.en;

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: text.welcome }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const prevLangRef = useRef(language);

  const knowledgeBase = KNOWLEDGE_BASE;

  // Reset welcome message when language changes
  useEffect(() => {
    if (prevLangRef.current !== language) {
      prevLangRef.current = language;
      const currentText = UI_COPY[language] || UI_COPY.en;
      setMessages([{ sender: "bot", text: currentText.welcome }]);
    }
  }, [language]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const toggleChat = () => setIsOpen((prev) => !prev);

  // Fonction pour formater le texte avec des sauts de ligne et des emojis
  const formatMessage = (text) => {
    return text
      .split('\n')
      .map((line, i) => (
        <span key={i}>
          {line}
          {i < text.split('\n').length - 1 && <br />}
        </span>
      ));
  };

  const getBotResponse = (message) => {
    const normalizedMessage = normalizeMessage(message);
    const entry = knowledgeBase.find((item) =>
      item.keywords.some((keyword) => normalizedMessage.includes(keyword))
    );

    if (entry) {
      return entry.answer;
    }

    return text.fallback;
  };

  const handleSendMessage = async () => {
    const trimmedMessage = inputValue.trim();
    if (!trimmedMessage || isLoading) {
      return;
    }

    const userMessage = { sender: "user", text: trimmedMessage };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmedMessage,
          history: messages.slice(-10),
        }),
      });

      if (!res.ok) {
        throw new Error(`Server responded with ${res.status}`);
      }

      const data = await res.json();

      if (data.reply) {
        setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
      } else {
        throw new Error("Empty reply from server");
      }
    } catch (error) {
      console.error("[chatbot] Error:", error);
      const fallbackResponse = getBotResponse(trimmedMessage);
      setMessages((prev) => [...prev, { sender: "bot", text: fallbackResponse }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={`chatbot ${isOpen ? "chatbot--open" : ""}`}>
      {isOpen && (
        <div className="chatbot__window">
          <header className="chatbot__header">
            <div>
              <span role="img" aria-label="assistant">
                🤖
              </span>
              <strong> {text.header}</strong>
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
              <div key={index} className={`chatbot__message chatbot__message--${message.sender}`}>
                {message.sender === "bot" ? formatMessage(message.text) : <span>{message.text}</span>}
              </div>
            ))}
            {isLoading && (
              <div className="chatbot__message chatbot__message--bot">
                <span>{text.typing}</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot__input">
            <textarea
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={text.placeholder}
              aria-label={text.inputAriaLabel}
              rows={2}
            />
            <button
              type="button"
              onClick={handleSendMessage}
              aria-label={text.sendAriaLabel}
              disabled={isLoading}
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
      <button
        type="button"
        className="chatbot__toggle"
        onClick={toggleChat}
        aria-label={isOpen ? text.closeAriaLabel : text.openAriaLabel}
      >
        {isOpen ? <FaTimes /> : <FaComments />}
      </button>
    </div>
  );
};

export default Chatbot;
