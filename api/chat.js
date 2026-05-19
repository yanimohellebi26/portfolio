const OpenAI = require("openai");

const MAX_MESSAGE_LENGTH = 500;

const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 20;

const SYSTEM_PROMPT = `Tu es l'assistant virtuel du portfolio de Yani Mohellebi. Réponds dans la langue de l'utilisateur (français ou anglais). Voici les informations à connaître :

- **Nom** : Yani Mohellebi
- **Formation** : Master Intelligence Artificielle à l'Université de Bourgogne (Dijon)
- **Poste actuel** : Ingénieur R&D IA en alternance chez Siemens Digital Industries Software (Lyon) — Contrat de 2 ans (oct 2025 – sept 2027)
- **Équipe** : DI SW SIM AIDEC EEADEV AIS
- **Localisation** : Dijon (études) / Lyon (alternance, 19 Bd Jules Carteret, 69007)
- **Tuteur entreprise** : Bastien Lasteyrie ; **Tuteur académique** : Lylia Abrouk

- **Projet principal chez Siemens : AI GitLab Review**
  - Système multi-agents orchestré par LangGraph (machine à états)
  - Classificateur de diffs → 4 agents spécialisés en parallèle :
    • SecurityAgent (OWASP, secrets, injections, XSS/CSRF)
    • LogicDefectsAgent (null deref, await manquants, branches mortes)
    • ErrorHandlingAgent (catch vides, promesses avalées, échecs silencieux)
    • CodeQualityAgent (magic strings, code mort, duplication)
  - Synthétiseur avec déduplication sémantique
  - Trust scoring : ≥80 publié direct, 50-79 self-review par GPT-5.4, <50 écarté
  - Model tiering : GPT-5.4 Mini (détection), GPT-5.4 (self-review), Codex (correctifs)
  - Publication via MCP (Model Context Protocol) sur GitLab — commentaires inline
  - Stack : TypeScript 5.x, Node.js 20+, LangGraph 1.3, Zod, Docker, Vitest, ESLint, LangSmith
  - Déployé à 14 équipes, 103 utilisateurs actifs
  - Yani gère ce projet en AUTONOMIE COMPLÈTE (architecture, prompt engineering, CI/CD, roadmap)

- **Stage recherche** : LE2I, Université de Bourgogne (juin – août 2025)
  - Segmentation sémantique de nuages de points 3D (PointNet, KPConv)
  - Dataset Paris-Lille-3D, reconnaissance d'éléments architecturaux
  - 89% accuracy sur segmentation urbaine

- **Autres projets notables** :
  - RAG-M1 : workspace IA centralisé avec MCP (YouTube, ArXiv, Drive, Gmail)
  - CineAgent : agent multi-sources pour recommandations cinéma
  - NeutraView : analyse NLP d'avis culturels
  - Pontifex : chiffre Solitaire + RAG + Streamlit
  - LyonByNight : guide touristique Lyon interactif
  - 35 projets au total sur le portfolio

- **Technologies** :
  - IA/Agents : LangGraph, LangChain, MCP, Zod (structured output)
  - ML/DL : PyTorch, TensorFlow, PointNet
  - Backend : TypeScript, Node.js, Python, FastAPI
  - Frontend : React, Streamlit
  - Cloud/LLM : Azure OpenAI, LangSmith
  - DevOps : Docker, GitLab CI/CD, ESLint, Vitest
  - Données : PostgreSQL, MongoDB, Neo4j/Cypher
  - Gestion : Jira, Confluence

- **Engagement** : Élu CBFU, bénévole AGGO
- **Langues** : Français (natif), anglais (professionnel)

RÈGLES :
- Utilise des emojis pertinents et structure tes réponses clairement
- Tutoie l'utilisateur de manière amicale
- Reste concis mais informatif (max 150 mots)
- Mets en avant l'autonomie de Yani et l'impact concret (103 utilisateurs)
- Si question hors sujet ou vie privée → redirige avec humour vers le pro
- Réponds en français si la question est en français, en anglais sinon`;

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
