import React, { useEffect, useRef, useState } from "react";
import OpenAI from "openai";
import { FaComments, FaPaperPlane, FaTimes } from "react-icons/fa";
import "./Chatbot.css";

// Initialisation du client OpenAI
const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Nécessaire pour utiliser l'API côté client
});

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

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Bonjour ! Je suis l'assistant virtuel du portfolio de Yani.\n\n💬 Pose-moi des questions sur :\n• 🎓 Sa formation\n• 💼 Ses projets\n• 💻 Ses compétences\n• 📧 Comment le contacter"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const knowledgeBase = KNOWLEDGE_BASE;

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

    return "Merci pour ta question ! Je n'ai pas encore la réponse, mais tu peux consulter les sections de mon portfolio ou m'envoyer un message via le formulaire de contact. Tu peux aussi me demander : \"Quelle est ta formation ?\", \"Quels sont tes projets ?\" ou \"Dans quelles technologies travailles-tu ?\"";
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
      // Créer le contexte avec les informations du portfolio
      const systemPrompt = `Tu es l'assistant virtuel du portfolio de Yani Mohellebi. Voici les informations à connaître :

- **Nom** : Yani Mohellebi
- **Formation** : Licence Informatique à l'Université de Bourgogne, spécialisé en traitement de données et intelligence artificielle
- **Localisation** : Dijon, France
- **Expertise** : Analyse et traitement de données, développement de modèles d'IA (NLP et Computer Vision), développement web full-stack
- **Technologies** : Python, C, JavaScript, React, FastAPI, Svelte, Docker, PostgreSQL, MongoDB, TensorFlow, PyTorch
- **Projets** : 
  - 🎭 NeutraView : Analyse d'avis culturels avec NLP pour détecter les sentiments
  - 📚 Système de recommandations littéraires : Recommandations personnalisées basées sur l'IA
  - 📱 SUBSENSE : Analyse automatique de vidéos Instagram avec Computer Vision
  - 🏃 Nutri-Mind : Application d'accompagnement nutritionnel intelligent pour étudiants sportifs
- **Expérience** : Missions freelance, ouvert aux collaborations sur des projets de data, d'IA ou de développement web
- **Engagement** : Élu à la CBFU (Commission de la Formation et de la Vie Universitaire), bénévole à AGGO
- **Langues** : Français et anglais
- **Passions** : Impact des données sur la prise de décision, cybersécurité, partage de connaissances

IMPORTANT : Utilise des emojis pertinents et structure tes réponses de manière claire :
- Utilise des bullet points (•) pour les listes
- Ajoute des emojis contextuels (🎯 💡 🚀 📊 🤖 💻 etc.)
- Sépare les idées principales
- Reste concis mais informatif
- Tutoie l'utilisateur de manière amicale

RÈGLES POUR QUESTIONS PERSONNELLES :
Si on te pose des questions trop personnelles (vie amoureuse, situation sentimentale, vie privée intime, etc.), réponds avec humour et professionnalisme :
- Utilise des emojis amusants (😅 🤖 💼 🔒)
- Redirige gentiment vers le côté professionnel
- Reste léger et sympathique
- Exemples de réponses :
  "😅 Haha, je suis un chatbot, je n'ai pas accès à ce genre d'infos ! Parlons plutôt de ses projets tech 💻"
  "🤖 Beep boop ! Cette information est classée confidentielle 🔒 Mais je peux te parler de ses compétences professionnelles !"
  "😄 Désolé, je suis programmé pour parler de code, pas de cœur ! Intéresse-toi plutôt à ses projets 🚀"

Si la question n'est pas liée au portfolio, redirige poliment vers les informations disponibles.`;

      // Appel à l'API OpenAI avec GPT-4o-mini (plus rapide et moins cher)
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages.slice(-5).map(msg => ({
            role: msg.sender === "user" ? "user" : "assistant",
            content: msg.text
          })),
          { role: "user", content: trimmedMessage }
        ],
        temperature: 0.7,
        max_tokens: 200
      });

      const botReply = completion.choices[0]?.message?.content?.trim();
      
      if (botReply) {
        setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
      } else {
        throw new Error("Réponse vide reçue de l'API");
      }
    } catch (error) {
      console.error("[chatbot] Erreur lors de l'appel OpenAI:", error);
      
      // Fallback sur la base de connaissances locale
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
                {message.sender === "bot" ? formatMessage(message.text) : <span>{message.text}</span>}
              </div>
            ))}
            {isLoading && (
              <div className="chatbot__message chatbot__message--bot">
                <span>Assistant en train d'écrire&hellip;</span>
              </div>
            )}
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
            <button
              type="button"
              onClick={handleSendMessage}
              aria-label="Envoyer le message"
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
        aria-label={isOpen ? "Fermer la discussion" : "Ouvrir la discussion"}
      >
        {isOpen ? <FaTimes /> : <FaComments />}
      </button>
    </div>
  );
};

export default Chatbot;
