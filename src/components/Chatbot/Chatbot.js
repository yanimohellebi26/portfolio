import React, { useEffect, useRef, useState } from "react";
import { FaComments, FaPaperPlane, FaTimes } from "react-icons/fa";
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
      "Je suis Yani Mohellebi, développeur logiciel et étudiant en Licence Informatique à l'Université de Bourgogne."
  },
  {
    keywords: ["formation", "universite", "etudiant", "licence"],
    answer:
      "Je termine actuellement ma Licence Informatique à l'Université de Bourgogne où je me spécialise en traitement de données et intelligence artificielle."
  },
  {
    keywords: ["ou vis", "localisation", "ville", "dijon"],
    answer: "Je suis basé à Dijon, en France, où j'étudie et je développe la plupart de mes projets."
  },
  {
    keywords: ["specialite", "expertise", "domaine", "ia", "donnees"],
    answer:
      "Mes domaines d'expertise couvrent l'analyse et le traitement de données, le développement de modèles d'IA (NLP et Computer Vision) ainsi que le développement web full-stack."
  },
  {
    keywords: ["competence", "technologie", "stack", "outil"],
    answer:
      "Je travaille avec Python, C, JavaScript, React, FastAPI, Svelte, Docker, PostgreSQL, MongoDB, TensorFlow et PyTorch, entre autres technologies."
  },
  {
    keywords: ["projet", "realisation", "portfolio"],
    answer:
      "Je mène plusieurs projets autour de l'IA appliquée : analyse d'avis culturels avec NeutraView, recommandations littéraires intelligentes, analyse de vidéos Instagram avec SUBSENSE ou encore Nutri-Mind pour l'accompagnement nutritionnel des étudiants sportifs."
  },
  {
    keywords: ["experience", "freelance", "mission", "disponible"],
    answer:
      "Je réalise des missions freelance et je suis ouvert aux collaborations sur des projets de data, d'IA ou de développement web."
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
  }
].map((item) => ({
  ...item,
  keywords: item.keywords.map((keyword) => normalizeMessage(keyword))
}));

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Bonjour ! Je suis l'assistant virtuel de ton portfolio. Pose-moi une question pour en savoir plus sur moi."
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const knowledgeBase = KNOWLEDGE_BASE;

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const toggleChat = () => setIsOpen((prev) => !prev);

  const getBotResponse = (message) => {
    const normalizedMessage = normalizeMessage(message);
    const entry = knowledgeBase.find((item) =>
      item.keywords.some((keyword) => normalizedMessage.includes(keyword))
    );

    if (entry) {
      return entry.answer;
    }

    return "Merci pour ta question ! Je n'ai pas encore la réponse, mais tu peux consulter les sections de mon portfolio ou m'envoyer un message via le formulaire de contact. Tu peux aussi me demander : \"Quelle est ta formation ?\", \"Quels sont tes projets ?\" ou \"Dans quelles technologies travailles-tu ?\"";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) {
      return;
    }

    const newMessage = { sender: "user", text: inputValue.trim() };
    const response = getBotResponse(inputValue.trim());
    setMessages((prev) => [...prev, newMessage, { sender: "bot", text: response }]);
    setInputValue("");
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
              <strong> Assistant Portfolio</strong>
            </div>
            <button
              type="button"
              className="chatbot__close"
              onClick={toggleChat}
              aria-label="Fermer la discussion"
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
                <span>{message.text}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot__input">
            <textarea
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Pose ta question ici..."
              aria-label="Zone de saisie de la question"
              rows={2}
            />
            <button type="button" onClick={handleSendMessage} aria-label="Envoyer le message">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
      <button
        type="button"
        className="chatbot__toggle"
        onClick={toggleChat}
        aria-label={isOpen ? "Fermer la discussion" : "Ouvrir la discussion"}
      >
        {isOpen ? <FaTimes /> : <FaComments />}
      </button>
    </div>
  );
};

export default Chatbot;
