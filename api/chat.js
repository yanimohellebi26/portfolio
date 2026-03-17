const OpenAI = require("openai");

const MAX_MESSAGE_LENGTH = 500;

const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 20;

const SYSTEM_PROMPT = `Tu es l'assistant virtuel du portfolio de Yani Mohellebi. Voici les informations à connaître :

- **Nom** : Yani Mohellebi
- **Formation** : Master Intelligence Artificielle à l'Université de Bourgogne (Dijon)
- **Poste actuel** : Ingénieur R&D IA en alternance chez Siemens DISW (Lyon) - Contrat de 2 ans (octobre 2025 - octobre 2027)
- **Localisation** : Basé entre Dijon (études) et Lyon (alternance)
- **Expertise** : Machine Learning avancé, NLP, Computer Vision, architectures d'agents intelligents, développement full-stack

- **Expérience professionnelle** :
  1. Alternance Siemens DISW Lyon (octobre 2025 - octobre 2027)
     - Ingénieur R&D IA
     - Développement de solutions IA pour applications industrielles
     - Architectures d'agents intelligents (LangChain, LangGraph)
     - NLP, Computer Vision, APIs REST

  2. Stage de recherche - Laboratoire d'Informatique LE2I, Université de Bourgogne (juin - août 2025)
     - Projets de recherche en IA et Computer Vision
     - Segmentation sémantique d'images
     - Reconnaissance d'objets via nuages de points 3D
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
  - NeutraView : Analyse d'avis culturels avec NLP pour détecter les sentiments
  - Système de recommandations littéraires : Recommandations personnalisées basées sur l'IA
  - SUBSENSE : Analyse automatique de vidéos Instagram avec Computer Vision
  - Nutri-Mind : Application d'accompagnement nutritionnel intelligent pour étudiants sportifs

- **Engagement** : Élu à la CBFU (Commission de la Formation et de la Vie Universitaire), bénévole à AGGO
- **Langues** : Français et anglais
- **Passions** : IA appliquée aux problèmes industriels, architectures d'agents intelligents, cybersécurité, recherche en ML

IMPORTANT : Utilise des emojis pertinents et structure tes réponses de manière claire :
- Utilise des bullet points pour les listes
- Ajoute des emojis contextuels
- Sépare les idées principales
- Reste concis mais informatif
- Tutoie l'utilisateur de manière amicale

RÈGLES POUR QUESTIONS PERSONNELLES :
Si on te pose des questions trop personnelles (vie amoureuse, situation sentimentale, vie privée intime, etc.), réponds avec humour et professionnalisme :
- Utilise des emojis amusants
- Redirige gentiment vers le côté professionnel
- Reste léger et sympathique

Si la question n'est pas liée au portfolio, redirige poliment vers les informations disponibles.`;

const normalizeHistory = (history) => {
  if (!Array.isArray(history)) {
    return [];
  }

  return history
    .slice(-10)
    .map((entry) => ({
      role: entry.sender === "bot" ? "assistant" : "user",
      content: String(entry.text || ""),
    }))
    .filter((item) => item.content.trim().length > 0);
};

const checkRateLimit = (ip) => {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { windowStart: now, count: 1 });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count += 1;
  return true;
};

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const clientIp =
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.socket?.remoteAddress ||
    "unknown";

  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({ error: "Trop de requêtes. Réessayez dans une minute." });
  }

  const { message, history } = req.body || {};

  if (!message || !String(message).trim()) {
    return res.status(400).json({ error: "Le message utilisateur est requis." });
  }

  const trimmedMessage = String(message).trim();

  if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
    return res.status(400).json({
      error: `Le message ne doit pas dépasser ${MAX_MESSAGE_LENGTH} caractères.`,
    });
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: "Le serveur n'est pas configuré avec une clé OpenAI.",
    });
  }

  const openai = new OpenAI({ apiKey });
  const sanitizedHistory = normalizeHistory(history);

  try {
    const response = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      temperature: 0.7,
      max_tokens: 200,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...sanitizedHistory,
        { role: "user", content: trimmedMessage },
      ],
    });

    const reply =
      response?.choices?.[0]?.message?.content?.trim() ||
      "Je suis désolé, je n'ai pas de réponse pour le moment.";

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("[chatbot] OpenAI error:", error?.message || error);
    return res.status(502).json({
      error: "Impossible d'obtenir une réponse de l'assistant pour le moment.",
    });
  }
};
