const OpenAI = require("openai");
const SYSTEM_PROMPT = require("../shared/systemPrompt");

const MAX_MESSAGE_LENGTH = 500;

const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 20;

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
