"use strict";

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const OpenAI = require("openai");
const rateLimit = require("express-rate-limit");
const SYSTEM_PROMPT = require("../shared/systemPrompt");

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;
const apiKey = process.env.OPENAI_API_KEY || process.env.openIAapi;
const allowedOrigin = process.env.CLIENT_ORIGIN || null;

const MAX_MESSAGE_LENGTH = 500;

let openaiClient = null;
if (apiKey) {
  openaiClient = new OpenAI({ apiKey });
} else {
  console.warn(
    "[chatbot] OpenAI API key is not defined. Set OPENAI_API_KEY in your environment to enable AI responses."
  );
}

app.use(
  cors(
    allowedOrigin
      ? {
          origin: allowedOrigin,
          credentials: false
        }
      : undefined
  )
);
app.use(express.json({ limit: "1mb" }));

const chatLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Trop de requêtes. Réessayez dans une minute." }
});

const normalizeHistory = (history = []) => {
  if (!Array.isArray(history)) {
    return [];
  }

  return history
    .slice(-10)
    .map((entry) => {
      const role = entry.sender === "bot" ? "assistant" : "user";
      return {
        role,
        content: String(entry.text || "")
      };
    })
    .filter((item) => item.content.trim().length > 0);
};

app.post("/api/chat", chatLimiter, async (req, res) => {
  const { message, history } = req.body || {};

  if (!message || !String(message).trim()) {
    return res.status(400).json({ error: "Le message utilisateur est requis." });
  }

  const trimmedMessage = String(message).trim();

  if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
    return res.status(400).json({
      error: `Le message ne doit pas dépasser ${MAX_MESSAGE_LENGTH} caractères.`
    });
  }

  if (!openaiClient) {
    return res.status(500).json({
      error:
        "Le serveur n'est pas configuré avec une clé OpenAI. Ajoutez OPENAI_API_KEY dans votre fichier .env."
    });
  }

  const sanitizedHistory = normalizeHistory(history);

  try {
    const response = await openaiClient.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      temperature: 0.7,
      max_tokens: 200,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...sanitizedHistory,
        { role: "user", content: trimmedMessage }
      ]
    });

    const reply =
      response?.choices?.[0]?.message?.content?.trim() ||
      "Je suis désolé, je n'ai pas de réponse pour le moment.";

    return res.json({ reply });
  } catch (error) {
    console.error("[chatbot] OpenAI error:", error?.response?.data || error?.message || error);
    return res
      .status(502)
      .json({ error: "Impossible d'obtenir une réponse de l'assistant pour le moment." });
  }
});

app.listen(port, () => {
  console.log(`[chatbot] Serveur IA prêt sur http://localhost:${port}`);
});

