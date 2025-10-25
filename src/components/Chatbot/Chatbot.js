import React, { useEffect, useRef, useState } from "react";
import OpenAI from "openai";
import { FaComments, FaPaperPlane, FaTimes } from "react-icons/fa";
import "./Chatbot.css";

// Initialisation du client OpenAI uniquement si la clé API est disponible
const openai = process.env.REACT_APP_OPENAI_API_KEY 
  ? new OpenAI({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true // Nécessaire pour utiliser l'API côté client
    })
  : null;

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
- **Formation** : Master Intelligence Artificielle à l'Université de Bourgogne (Dijon)
- **Poste actuel** : Ingénieur R&D IA en alternance chez Siemens DISW (Lyon) - Contrat de 2 ans (octobre 2025 - octobre 2027)
- **Localisation** : Basé entre Dijon (études) et Lyon (alternance)
- **Expertise** : Machine Learning avancé, NLP, Computer Vision, architectures d'agents intelligents, développement full-stack

- **Expérience professionnelle** :
  1. 🏢 Alternance Siemens DISW Lyon (octobre 2025 - octobre 2027)
     - Ingénieur R&D IA
     - Développement de solutions IA pour applications industrielles
     - Architectures d'agents intelligents (LangChain, LangGraph)
     - NLP, Computer Vision, APIs REST
  
  2. 🔬 Stage de recherche - Laboratoire d'Informatique LE2I, Université de Bourgogne (juin - août 2025)
     - Projets de recherche en IA et Computer Vision
     - Segmentation sémantique d'images
     - Reconnaissance d'objets via nuages de points 3D
     - 3 projets de recherche publiés sur GitHub :
       * github.com/yanimohellebi26/segmentation-semantique
       * github.com/yanimohellebi26/reconnaissance_maison-nuage-de-points
     - Technologies : PyTorch, TensorFlow, OpenCV, Point Cloud Library

- **Technologies principales** :
  - IA/ML : TensorFlow, PyTorch, LangChain, LangGraph
  - Backend : FastAPI, REST APIs, Python
  - Frontend : React, Svelte, JavaScript
  - DevOps : Docker, Postman, Flyway
  - Bases de données : PostgreSQL, MongoDB, SQL, Cypher (Neo4j)
  - Gestion de projet : Jira, Confluence, OpenProject
  - Autres : OCaml, Pandas, Git

- **Projets portfolio** : 
  - 🎭 NeutraView : Analyse d'avis culturels avec NLP pour détecter les sentiments
  - 📚 Système de recommandations littéraires : Recommandations personnalisées basées sur l'IA
  - 📱 SUBSENSE : Analyse automatique de vidéos Instagram avec Computer Vision
  - 🏃 Nutri-Mind : Application d'accompagnement nutritionnel intelligent pour étudiants sportifs

- **Engagement** : Élu à la CBFU (Commission de la Formation et de la Vie Universitaire), bénévole à AGGO
- **Langues** : Français et anglais
- **Passions** : IA appliquée aux problèmes industriels, architectures d'agents intelligents, cybersécurité, recherche en ML

IMPORTANT : Utilise des emojis pertinents et structure tes réponses de manière claire :
- Utilise des bullet points (•) pour les listes
- Ajoute des emojis contextuels (🎯 💡 🚀 📊 🤖 💻 🏢 🔬 etc.)
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
