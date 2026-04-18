import React, { useState } from "react";
import ProjectCard from "./ProjectCards";
/* ── existing images ── */
import mindImg from "../../Assets/Projects/mind.png";
import spamImg from "../../Assets/Projects/spam.jpg";
import drollImg from "../../Assets/Projects/droll.png";
import cheatImg from "../../Assets/Projects/cheat-gemini.png";
import neutraviewImg from "../../Assets/Projects/neutraview-gemini.png";
import livreRecoImg from "../../Assets/Projects/recommendation.png";
import subsenseImg from "../../Assets/Projects/subsense.png";
import nutrimindImg from "../../Assets/Projects/nutrimand.png";
import rawviewImg from "../../Assets/Projects/rawview-gemini.png";
import ragImg from "../../Assets/Projects/rag-master.png";
import segUrbanImg from "../../Assets/Projects/reconnaissance-maison.png";
import ecommerceImg from "../../Assets/Projects/ecommerce.png";
/* ── new images ── */
import angryGeoImg from "../../Assets/Projects/angry-men-geopol.png";
import angryReproImg from "../../Assets/Projects/angry-men-repro.png";
import barsLyonImg from "../../Assets/Projects/bars-lyon.png";
import bucketSortImg from "../../Assets/Projects/bucket-sort.png";
import cineAgentImg from "../../Assets/Projects/cine-agent.png";
import graphColorImg from "../../Assets/Projects/graph-coloring.png";
import legendesImg from "../../Assets/Projects/legendes-amazighes.png";
import linkedinImg from "../../Assets/Projects/linkedin-chatbot.png";
import movieCardImg from "../../Assets/Projects/movie-card.png";
import movieQuotesImg from "../../Assets/Projects/movie-quotes.png";
import hackathonImg from "../../Assets/Projects/hackathon-mistral.png";
import poissonImg from "../../Assets/Projects/poisson-opengl.png";
import question2Img from "../../Assets/Projects/question2-ml.png";
import recoMaisonImg from "../../Assets/Projects/reco-maison.png";
import segCubeImg from "../../Assets/Projects/seg-face-cube.png";
import aportfolioImg from "../../Assets/Projects/aportfolio.png";
import { useLanguage } from "../../context/LanguageContext";
import "./ProjectsFuturistic.css";

/* ── categories ── */
const CATEGORIES = [
  { id: "all",      icon: "🔥", en: "All",          fr: "Tous" },
  { id: "featured", icon: "⭐", en: "Featured",     fr: "Favoris" },
  { id: "ai",       icon: "🧠", en: "AI & ML",      fr: "IA & ML" },
  { id: "web",      icon: "🌐", en: "Web",           fr: "Web" },
  { id: "game",     icon: "🎮", en: "Game",          fr: "Jeu" },
  { id: "3d",       icon: "🔮", en: "3D & Vision",   fr: "3D & Vision" },
  { id: "data",     icon: "📊", en: "Data & Algo",   fr: "Data & Algo" },
];

function Projects() {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const copy = {
    en: {
      heading: { lead: "My", highlight: "Projects" },
      subtitle: "A complete overview of everything I've built — filter by domain or explore my favourites.",
      count: (n) => `${n} project${n > 1 ? "s" : ""}`,
    },
    fr: {
      heading: { lead: "Mes", highlight: "Projets" },
      subtitle: "Vue d'ensemble de tout ce que j'ai construit — filtrez par domaine ou explorez mes favoris.",
      count: (n) => `${n} projet${n > 1 ? "s" : ""}`,
    },
  };

  const text = copy[language] || copy.en;

  /* ══════════════════════════════════════════════
     PROJECT DATA — 28 projects, 7 categories
     ══════════════════════════════════════════════ */
  const projects = [
    /* ── AI & ML ────────────────────────────── */
    {
      id: "angry-geopol",
      imgPath: angryGeoImg,
      category: "ai",
      featured: true,
      title: {
        en: "12 Angry Agents — Geopolitical Debate Simulator",
        fr: "12 Angry Agents — Simulateur de Débat Géopolitique",
      },
      description: {
        en: "Multi-agent geopolitical debate with 12 AI agents from 7 providers. Real-time media corpus scraping (60+ sources), 3-layer RAG pipeline, and a live dashboard tracking convergence, polarisation, entropy, and influence graphs.\n\n**Tech stack:** Python, FastAPI, React, Next.js, PostgreSQL, Redis, Qdrant, Scrapy, Playwright, LiteLLM, D3.js",
        fr: "Débat géopolitique multi-agents avec 12 IA de 7 fournisseurs. Scraping de corpus médiatique en temps réel (60+ sources), pipeline RAG à 3 couches, et dashboard live mesurant convergence, polarisation, entropie et graphes d'influence.\n\n**Technologies utilisées :** Python, FastAPI, React, Next.js, PostgreSQL, Redis, Qdrant, Scrapy, Playwright, LiteLLM, D3.js",
      },
      ghLink: "https://github.com/yanimohellebi26/12_angry_man_geopol",
    },
    {
      id: "angry-repro",
      imgPath: angryReproImg,
      category: "ai",
      title: {
        en: "12 Angry Men — Computational Jury Reproduction",
        fr: "12 Angry Men — Reproduction Computationnelle du Jury",
      },
      description: {
        en: "Computational reproduction of jury dynamics from the film '12 Angry Men' using LLM agents. Tests different models and configurations, measures fidelity via DTW/Spearman correlation, and detects persuasion tipping points.\n\n**Tech stack:** Python, FastAPI, PostgreSQL, LangGraph, NumPy, NetworkX, SciPy",
        fr: "Reproduction computationnelle de la dynamique du jury du film '12 Angry Men' avec des agents LLM. Teste différents modèles, mesure la fidélité via DTW/Spearman et détecte les points de basculement de persuasion.\n\n**Technologies utilisées :** Python, FastAPI, PostgreSQL, LangGraph, NumPy, NetworkX, SciPy",
      },
      ghLink: "https://github.com/yanimohellebi26/12_angry_man_reproduction",
    },
    {
      id: "rag",
      imgPath: ragImg,
      category: "ai",
      featured: true,
      title: {
        en: "RAG-Master1 — AI Teaching Assistant",
        fr: "RAG-Master1 — Assistant Pédagogique IA",
      },
      description: {
        en: "Full-stack RAG-based teaching assistant for Master 1 Computer Science courses. Features conversational chat with query rewriting, hybrid search (BM25 + semantic), re-ranking, and source traceability. Includes a Copilot Tools panel (quizzes, flashcards, mind maps) and MCP server integration.\n\n**Tech stack:** Python, FastAPI, React, OpenAI API, ChromaDB, BM25, MCP",
        fr: "Assistant pédagogique RAG full-stack pour les cours de Master 1 Informatique. Chat conversationnel avec query rewriting, recherche hybride (BM25 + sémantique), re-ranking et traçabilité des sources. Panneau Copilot Tools et intégration serveurs MCP.\n\n**Technologies utilisées :** Python, FastAPI, React, OpenAI API, ChromaDB, BM25, MCP",
      },
      ghLink: "https://github.com/yanimohellebi26/RAG-Master1",
    },
    {
      id: "cine-agent",
      imgPath: cineAgentImg,
      category: "ai",
      featured: true,
      title: {
        en: "CineAgent — AI Alternate Film Endings",
        fr: "CineAgent — Fins Alternatives de Films par IA",
      },
      description: {
        en: "AI-powered platform generating alternate film endings. Multi-agent backend (LangGraph) analyses narrative structure and generates endings in creative modes: Butterfly Effect, Genre Swap, and more. Full-stack with FastAPI + Next.js.\n\n**Tech stack:** Python, FastAPI, LangGraph, PostgreSQL, Celery, Redis, Next.js 14, Tailwind, Tavily",
        fr: "Plateforme IA générant des fins de films alternatives. Backend multi-agents (LangGraph) analysant la structure narrative pour produire des fins en modes créatifs : Effet Papillon, Genre Swap, etc. Full-stack FastAPI + Next.js.\n\n**Technologies utilisées :** Python, FastAPI, LangGraph, PostgreSQL, Celery, Redis, Next.js 14, Tailwind, Tavily",
      },
      ghLink: "https://github.com/yanimohellebi26/cineAgent",
    },
    {
      id: "neutraview",
      imgPath: neutraviewImg,
      category: "ai",
      featured: true,
      title: {
        en: "NeutraView — Neutral Cultural Reviews",
        fr: "NeutraView — Analyse Neutre d'Avis Culturels",
      },
      description: {
        en: "Web platform for bias-free analysis of book, film, and series reviews. AI modules generate objective summaries, detect sentiment, and build psychological profiles of works. Modular architecture with a React frontend proxied through Vite, containerised with Docker.\n\n**Tech stack:** FastAPI, React, OpenAI API, Hugging Face, PyTorch, PostgreSQL, Docker",
        fr: "Plateforme web pour analyser les avis culturels (livres, films, séries) sans biais. Modules IA pour résumés objectifs, détection de sentiments et profils psychologiques. Architecture modulaire avec frontend React via Vite, déploiement Docker.\n\n**Technologies utilisées :** FastAPI, React, OpenAI API, Hugging Face, PyTorch, PostgreSQL, Docker",
      },
      ghLink: "https://github.com/yanimohellebi26/NeutraView.git",
      collabLink: "https://github.com/yanimohellebi26/NeutraView/issues/new?assignees=&labels=collaboration&template=collaboration_request.md",
    },
    {
      id: "spam",
      imgPath: spamImg,
      category: "ai",
      title: {
        en: "AI-Powered Spam Detector",
        fr: "Détecteur de Spam avec IA",
      },
      description: {
        en: "Intelligent Telegram bot that filters spam messages. Logistic regression with TF-IDF vectorisation, data cleaning, cross-validation, and full performance metrics.\n\n**Tech stack:** Python, Scikit-learn, Pandas, TF-IDF, Telegram API",
        fr: "Bot Telegram intelligent filtrant les spams. Régression logistique + TF-IDF, nettoyage de données, validation croisée et analyse complète des performances.\n\n**Technologies utilisées :** Python, Scikit-learn, Pandas, TF-IDF, Telegram API",
      },
      ghLink: "https://github.com/yanimohellebi26/detecteur-spam.git",
    },
    {
      id: "cheat",
      imgPath: cheatImg,
      category: "ai",
      title: {
        en: "Video-Based Exam Cheating Detection",
        fr: "Détection de Triche aux Examens (vidéo)",
      },
      description: {
        en: "Video-based system that flags suspicious behaviour during exams. Combines motion detection and activity analysis to surface anomalies, with architecture ready for future audio detection.\n\n**Tech stack:** OpenCV, PyTorch, FastAPI, JavaScript, HTML",
        fr: "Système de détection de triche basé sur la vidéo. Détection de mouvement et analyse d'activité pour repérer les comportements suspects, extensible pour l'audio.\n\n**Technologies utilisées :** OpenCV, PyTorch, FastAPI, JavaScript, HTML",
      },
      ghLink: "https://github.com/yanimohellebi26/detection_triche.git",
      collabLink: "https://github.com/yanimohellebi26/detection_triche/issues/new?assignees=&labels=collaboration&template=collaboration_request.md",
    },
    {
      id: "subsense",
      imgPath: subsenseImg,
      category: "ai",
      title: {
        en: "SUBSENSE — Instagram Video Analysis",
        fr: "SUBSENSE — Analyse de Vidéos Instagram",
      },
      description: {
        en: "Full web app for deep analysis of Instagram videos. Extracts audio, generates multilingual transcripts with Whisper, then evaluates speaker personalities and content with NLP models.\n\n**Tech stack:** FastAPI, React, Whisper, FFmpeg, yt-dlp, GPT-4, PyTorch, SentenceTransformer",
        fr: "Application web pour l'analyse approfondie de vidéos Instagram. Extraction audio, transcription multilingue Whisper, puis évaluation des personnalités et du contenu par NLP.\n\n**Technologies utilisées :** FastAPI, React, Whisper, FFmpeg, yt-dlp, GPT-4, PyTorch, SentenceTransformer",
      },
      ghLink: "https://github.com/yanimohellebi26/instagram-video.git",
      collabLink: "https://github.com/yanimohellebi26/instagram-video/issues/new?assignees=&labels=collaboration&template=collaboration_request.md",
    },
    {
      id: "nutrimind",
      imgPath: nutrimindImg,
      category: "ai",
      title: {
        en: "NUTRI-MIND — Nutrition AI for Student Lifters",
        fr: "NUTRI-MIND — IA Nutritionnelle Musculation Étudiante",
      },
      description: {
        en: "End-to-end app for budget-conscious strength athletes. Computes daily macros, generates a weekly meal plan, a budget-aware shopping list, and simple recipes.\n\n**Tech stack:** FastAPI, React, Python, Pydantic, MVC, PostgreSQL, Docker",
        fr: "Application complète pour pratiquants de musculation à petit budget. Calcul de macros, menu hebdomadaire, liste de courses budgétée et recettes simples.\n\n**Technologies utilisées :** FastAPI, React, Python, Pydantic, MVC, PostgreSQL, Docker",
      },
      ghLink: "https://github.com/yanimohellebi26/muscule_ia.git",
      collabLink: "https://github.com/yanimohellebi26/muscule_ia/issues/new?assignees=&labels=collaboration&template=collaboration_request.md",
    },
    {
      id: "rawview",
      imgPath: rawviewImg,
      category: "ai",
      title: {
        en: "RAWVIEW — Disconnected Review Interface",
        fr: "RAWVIEW — Interface d'Avis Déconnectés",
      },
      description: {
        en: "Platform for leaving reviews free from social influence — no visible ratings, no follower counts. Custom NLP modules scan the text to surface cognitive biases. Backend FastAPI + PostgreSQL orchestrated with Docker.\n\n**Tech stack:** SvelteKit, FastAPI, PostgreSQL, Hugging Face, PyTorch, Docker, Radix UI",
        fr: "Plateforme pour publier des avis sans influence sociale — pas de notes visibles, pas de compteurs. Modules NLP sur mesure pour détecter les biais cognitifs. Backend FastAPI + PostgreSQL orchestré avec Docker.\n\n**Technologies utilisées :** SvelteKit, FastAPI, PostgreSQL, Hugging Face, PyTorch, Docker, Radix UI",
      },
      ghLink: "https://github.com/yanimohellebi26/review.git",
      collabLink: "https://github.com/yanimohellebi26/review/issues/new?assignees=&labels=collaboration&template=collaboration_request.md",
    },
    {
      id: "book-rec",
      imgPath: livreRecoImg,
      category: "ai",
      featured: true,
      title: {
        en: "BookBot — Smart Book Recommendation",
        fr: "BookBot — Recommandation Intelligente de Livres",
      },
      description: {
        en: "Deployed literary recommendation app. Describe what you loved about a book — BookBot analyses your emotions and reader profile to suggest 3 personalised picks (Popular, Deep, Character-driven) via GPT.\n\n**Tech stack:** Python, FastAPI, React, OpenAI API, Open Library API, Vercel",
        fr: "Application de recommandation littéraire déployée. Décrivez ce que vous avez aimé dans un livre — BookBot analyse vos émotions et votre profil de lecteur pour proposer 3 suggestions personnalisées via GPT.\n\n**Technologies utilisées :** Python, FastAPI, React, OpenAI API, Open Library API, Vercel",
      },
      demoLink: "https://recommendation-livre.vercel.app/",
      ghLink: "https://github.com/yanimohellebi26/recommendation-livre.git",
    },
    /* books-ai removed — same project as book-rec (Smart Book Recommendation) */
    {
      id: "linkedin-chat",
      imgPath: linkedinImg,
      category: "ai",
      title: {
        en: "LinkedIn AI Chatbot",
        fr: "Chatbot IA LinkedIn",
      },
      description: {
        en: "AI assistant for LinkedIn users to craft personalised connection requests, follow-ups, and engagement posts. LLM maintains professional tone with real-time streaming dialogue.\n\n**Tech stack:** Python, FastAPI, React, Vite, OpenAI API, LLM Prompt Engineering",
        fr: "Assistant IA pour LinkedIn : demandes de connexion, relances et publications personnalisées. LLM avec ton professionnel et dialogue en streaming temps réel.\n\n**Technologies utilisées :** Python, FastAPI, React, Vite, OpenAI API, Prompt Engineering",
      },
      ghLink: "https://github.com/yanimohellebi26/linkedin-ai-chatbot",
    },
    /* ── Web ────────────────────────────── */
    {
      id: "lyon",
      imgPath: barsLyonImg,
      category: "web",
      featured: true,
      title: {
        en: "LyonByNight — Interactive Nightlife PWA",
        fr: "LyonByNight — PWA de Découverte Nocturne",
      },
      description: {
        en: "Progressive Web App for discovering Lyon's nightlife — bars, clubs, and live events on an interactive Mapbox map with an AI chat assistant. Supports offline mode, bilingual (FR/EN), and group planning with social voting.\n\n**Tech stack:** Next.js 16, TypeScript, Tailwind CSS v4, shadcn/ui, Supabase, Mapbox, OpenAI, PWA",
        fr: "PWA pour découvrir la vie nocturne lyonnaise — bars, clubs et événements sur une carte Mapbox interactive avec un assistant IA. Mode hors-ligne, bilingue FR/EN et planification de soirée en groupe.\n\n**Technologies utilisées :** Next.js 16, TypeScript, Tailwind CSS v4, shadcn/ui, Supabase, Mapbox, OpenAI, PWA",
      },
      ghLink: "https://github.com/yanimohellebi26/LyonByNight",
      demoLink: "https://lyon-inky.vercel.app/fr",
    },
    /* bars-lyon removed — same project as LyonByNight */
    /* paris nightlife removed */
    {
      id: "ecommerce",
      imgPath: ecommerceImg,
      category: "web",
      title: {
        en: "Multi-Role E-Commerce Platform",
        fr: "Plateforme E-Commerce Multi-Rôles",
      },
      description: {
        en: "Full PHP e-commerce platform with three user roles — customer, vendor, admin — each with dashboards. Custom MVC in vanilla PHP/MySQL with role-based access and order tracking.\n\n**Tech stack:** PHP, MySQL, PDO, JavaScript, jQuery, CSS, MVC",
        fr: "Plateforme e-commerce PHP avec trois rôles (client, vendeur, admin). Architecture MVC en PHP/MySQL avec contrôle d'accès et suivi des commandes.\n\n**Technologies utilisées :** PHP, MySQL, PDO, JavaScript, jQuery, CSS, MVC",
      },
      ghLink: "https://github.com/yanimohellebi26/e-commerce",
    },
    /* flowers removed — covered by multi-role e-commerce */
    {
      id: "movie-card",
      imgPath: movieCardImg,
      category: "web",
      title: {
        en: "MovieCard — Film Card Generator",
        fr: "MovieCard — Générateur de Fiches Film",
      },
      description: {
        en: "Movie card generation app with Supabase backend. Animated Next.js frontend with automatic metadata extraction, search, and shareable card layouts.\n\n**Tech stack:** Next.js 16, React 19, TypeScript, Supabase, Framer Motion, Lucide Icons",
        fr: "Application de génération de fiches film avec backend Supabase. Frontend Next.js animé avec extraction automatique de métadonnées et mise en page partageable.\n\n**Technologies utilisées :** Next.js 16, React 19, TypeScript, Supabase, Framer Motion, Lucide Icons",
      },
      ghLink: "https://github.com/yanimohellebi26/MovieCard",
      demoLink: "https://moviecard-seven.vercel.app/",
    },
    {
      id: "movie-quotes",
      imgPath: movieQuotesImg,
      category: "web",
      title: {
        en: "MovieQuotes — Quote Capture Extension",
        fr: "MovieQuotes — Extension Capture de Citations",
      },
      description: {
        en: "Chrome extension + companion app for capturing movie quotes from video players. AI-powered speech-to-text with Whisper, multi-phase roadmap: extension → desktop (Rust) → mobile → hardware.\n\n**Tech stack:** TypeScript, Next.js, Vercel Serverless, PostgreSQL (Neon), Whisper, Gemini",
        fr: "Extension Chrome + app compagnon pour capturer des citations de films. Speech-to-text IA avec Whisper, roadmap multi-phases : extension → desktop (Rust) → mobile.\n\n**Technologies utilisées :** TypeScript, Next.js, Vercel Serverless, PostgreSQL (Neon), Whisper, Gemini",
      },
      ghLink: "https://github.com/yanimohellebi26/MovieQuotes",
    },
    {
      id: "aportfolio",
      imgPath: aportfolioImg,
      category: "web",
      title: {
        en: "Aportfolio — Static Portfolio",
        fr: "Aportfolio — Portfolio Statique",
      },
      description: {
        en: "Personal portfolio website built from scratch with vanilla HTML, CSS, and JavaScript. Clean responsive design showcasing projects and skills.\n\n**Tech stack:** HTML, CSS, JavaScript",
        fr: "Portfolio personnel créé de zéro en HTML, CSS et JavaScript. Design responsive épuré présentant projets et compétences.\n\n**Technologies utilisées :** HTML, CSS, JavaScript",
      },
      ghLink: "https://github.com/yanimohellebi26/Aportfolio",
    },
    /* ── Game ────────────────────────────── */
    {
      id: "hackathon",
      imgPath: hackathonImg,
      category: "game",
      title: {
        en: "Amazigh Odyssey — AI RPG with Mistral",
        fr: "Amazigh Odyssey — RPG IA avec Mistral",
      },
      description: {
        en: "AI RPG game set in mythical Numidia using Mistral AI as Game Master. MCP servers for world state, combat, inventory, lore. Tifinagh-based magic system with 10+ glyphs and spell combinations.\n\n**Tech stack:** Python, Mistral AI, MCP Servers, QLoRA Fine-tuning, W&B, Rich TUI, Tamazight",
        fr: "Jeu RPG IA dans la Numidie mythique avec Mistral AI comme Maître du Jeu. Serveurs MCP pour état du monde, combat, inventaire. Système magique basé sur le Tifinagh.\n\n**Technologies utilisées :** Python, Mistral AI, Serveurs MCP, QLoRA, W&B, Rich TUI, Tamazight",
      },
      ghLink: "https://github.com/yanimohellebi26/hackathon_mistral",
    },
    {
      id: "mind",
      imgPath: mindImg,
      category: "game",
      title: {
        en: "The Mind — AI & Network Communication",
        fr: "The Mind — IA et Communication Réseau",
      },
      description: {
        en: "Multiplayer edition of The Mind with TCP sockets and mutex-protected sync. AI trained on 10,000 games with XGBoost to predict optimal card timing. Interface in SDL2.\n\n**Tech stack:** C, XGBoost, PyTorch, TCP sockets, Mutexes, SDL2",
        fr: "Version multijoueur de The Mind avec sockets TCP et mutex. IA entraînée sur 10 000 parties (XGBoost) pour prédire le timing optimal. Interface SDL2.\n\n**Technologies utilisées :** C, XGBoost, PyTorch, Sockets TCP, Mutex, SDL2",
      },
      ghLink: "https://github.com/yanimohellebi26/the_mind",
    },
    {
      id: "drol",
      imgPath: drollImg,
      category: "game",
      title: {
        en: "Modernising the DROL Game",
        fr: "Modernisation du Jeu DROL",
      },
      description: {
        en: "Rebuilt DROL with cooperative and competitive multiplayer. UDP networking for responsive gameplay and player state sync. Developed in Java on GNU/Linux.\n\n**Tech stack:** Java, Swing, UDP, Linux",
        fr: "Refonte de DROL en multijoueur coopératif et compétitif. Réseau UDP pour une synchronisation fluide. Java sous GNU/Linux.\n\n**Technologies utilisées :** Java, Swing, UDP, Linux",
      },
      ghLink: "https://github.com/yanimohellebi26/DROL-GAME",
    },
    /* ── 3D & Vision ────────────────────── */
    {
      id: "seg-urban",
      imgPath: segUrbanImg,
      category: "3d",
      title: {
        en: "3D Semantic Segmentation — Urban Scenes",
        fr: "Segmentation Sémantique 3D — Scènes Urbaines",
      },
      description: {
        en: "Deep learning pipeline for 3D semantic segmentation of urban point clouds (PLY). PointNet & PointNet++ with real Paris-Lille-Dijon lidar scans, block training, and colour-coded reconstruction.\n\n**Tech stack:** Python, PyTorch, PointNet, PointNet++, NumPy, Open3D, CloudCompare",
        fr: "Pipeline de deep learning pour segmentation sémantique 3D de nuages de points urbains. PointNet & PointNet++ sur scans lidar réels, entraînement par blocs et reconstruction colorée.\n\n**Technologies utilisées :** Python, PyTorch, PointNet, PointNet++, NumPy, Open3D, CloudCompare",
      },
      ghLink: "https://github.com/yanimohellebi26/segmentation-semantique",
    },
    {
      id: "reco-maison",
      imgPath: recoMaisonImg,
      category: "3d",
      title: {
        en: "House Style Recognition from Point Clouds",
        fr: "Reconnaissance de Styles de Maisons en 3D",
      },
      description: {
        en: "Deep learning pipeline recognising architectural house styles from 3D point clouds using PointNet/PointNet++ trained on procedural synthetic data.\n\n**Tech stack:** Python, PyTorch, PointNet, PointNet++, NumPy, Matplotlib",
        fr: "Pipeline de deep learning reconnaissant les styles architecturaux de maisons à partir de nuages de points 3D, entraîné sur données synthétiques.\n\n**Technologies utilisées :** Python, PyTorch, PointNet, PointNet++, NumPy, Matplotlib",
      },
      ghLink: "https://github.com/yanimohellebi26/reconnaissance_maison-nuage-de-points",
    },
    {
      id: "seg-cube",
      imgPath: segCubeImg,
      category: "3d",
      title: {
        en: "3D Cube Face Segmentation",
        fr: "Segmentation de Faces de Cube 3D",
      },
      description: {
        en: "PointNet and KPConv trained to identify cube faces in 3D point clouds. Synthetic testbed validating segmentation architectures with known ground truth.\n\n**Tech stack:** Python, PyTorch, PointNet, KPConv, NumPy",
        fr: "PointNet et KPConv entraînés pour identifier les faces de cubes en nuages de points 3D. Banc d'essai synthétique avec vérité terrain connue.\n\n**Technologies utilisées :** Python, PyTorch, PointNet, KPConv, NumPy",
      },
      ghLink: "https://github.com/yanimohellebi26/segmentation-face-cube",
    },
    {
      id: "poisson-gl",
      imgPath: poissonImg,
      category: "3d",
      title: {
        en: "3D Fish — OpenGL Rendering",
        fr: "Poisson 3D — Rendu OpenGL",
      },
      description: {
        en: "3D fish model demonstrating OpenGL fundamentals: geometry, texturing, Phong shading, and real-time camera control with transformations.\n\n**Tech stack:** C++, OpenGL, GLUT (freeglut), Texture Mapping, Phong Shading",
        fr: "Modèle de poisson 3D illustrant les fondamentaux OpenGL : géométrie, textures, éclairage Phong et contrôle caméra temps réel.\n\n**Technologies utilisées :** C++, OpenGL, GLUT (freeglut), Texture Mapping, Phong Shading",
      },
      ghLink: "https://github.com/yanimohellebi26/poisson-OPENGL",
    },
    {
      id: "legendes",
      imgPath: legendesImg,
      category: "3d",
      title: {
        en: "Légendes Amazighes — AR/VR Experience",
        fr: "Légendes Amazighes — Expérience AR/VR",
      },
      description: {
        en: "Augmented and virtual reality interactive experience about Amazigh legends and mythology built in Unity. Spatial storytelling with immersive 3D environments.\n\n**Tech stack:** Unity, C#, AR/VR, Spatial Design",
        fr: "Expérience interactive en réalité augmentée et virtuelle sur les légendes et la mythologie amazighes. Narration spatiale dans des environnements 3D immersifs.\n\n**Technologies utilisées :** Unity, C#, AR/VR, Design Spatial",
      },
      ghLink: "https://github.com/yanimohellebi26/Legendes_Amazighes",
    },
    /* ── Data & Algo ────────────────────── */
    {
      id: "bucket-sort",
      imgPath: bucketSortImg,
      category: "data",
      title: {
        en: "Distributed Bucket Sort — MPI",
        fr: "Bucket Sort Distribué — MPI",
      },
      description: {
        en: "Distributed implementation of Bucket Sort using MPI for parallel processing. Includes benchmarked Top-K extraction and performance comparison across process counts.\n\n**Tech stack:** C, MPI, OpenMPI, Python, Matplotlib, Bash",
        fr: "Implémentation distribuée du Bucket Sort via MPI. Extraction Top-K benchmarkée et comparaison de performances selon le nombre de processus.\n\n**Technologies utilisées :** C, MPI, OpenMPI, Python, Matplotlib, Bash",
      },
      ghLink: "https://github.com/yanimohellebi26/Bucket_Sort",
    },
    {
      id: "graph-color",
      imgPath: graphColorImg,
      category: "data",
      title: {
        en: "Graph Colouring — Greedy vs DSatur",
        fr: "Coloration de Graphes — Greedy vs DSatur",
      },
      description: {
        en: "Comparative study of graph colouring algorithms: Greedy vs DSatur. Empirical benchmarks across different graph types with performance visualisations.\n\n**Tech stack:** Java, Graph Theory, DSatur, Greedy, CSV Benchmarking",
        fr: "Étude comparative d'algorithmes de coloration : Greedy vs DSatur. Benchmarks empiriques sur différents types de graphes avec visualisations.\n\n**Technologies utilisées :** Java, Théorie des Graphes, DSatur, Greedy, Benchmarks CSV",
      },
      ghLink: "https://github.com/yanimohellebi26/coloration-tons-graph",
    },
    {
      id: "question2",
      imgPath: question2Img,
      category: "data",
      title: {
        en: "ML Package & API — Python Pipeline",
        fr: "Package ML & API — Pipeline Python",
      },
      description: {
        en: "Complete Python ML walkthrough: custom OLS regression as pip-installable package, exposed via REST API, and containerised with Docker for reproducible deployment.\n\n**Tech stack:** Python, FastAPI, Docker, scikit-learn, Pydantic, pip Packaging",
        fr: "Parcours ML complet : régression OLS packagée pip, exposée via API REST et conteneurisée Docker pour un déploiement reproductible.\n\n**Technologies utilisées :** Python, FastAPI, Docker, scikit-learn, Pydantic, pip Packaging",
      },
      ghLink: "https://github.com/yanimohellebi26/question2_project",
    },
  ];

  /* ── filter logic ── */
  const filtered = activeFilter === "all"
    ? projects
    : activeFilter === "featured"
    ? projects.filter((p) => p.featured)
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="section-shell projects-section-futuristic" id="projects">
      {/* Effet de grille futuriste en arrière-plan */}
      <div className="cyber-grid" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* En-tête */}
        <div className="mx-auto max-w-3xl space-y-6 text-center mb-12">
          <div className="relative inline-block">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl animate-fade-in">
              {text.heading.lead}{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-brand-accent via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                  {text.heading.highlight}
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent animate-pulse" />
              </span>
            </h1>
          </div>
          <p className="text-lg text-gray-400 animate-fade-in-delay">{text.subtitle}</p>

          {/* Ligne décorative */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-brand-accent animate-expand" />
            <div className="h-2 w-2 rounded-full bg-brand-accent animate-pulse" />
            <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-brand-accent animate-expand" />
          </div>
        </div>

        {/* ── Filter bar ── */}
        <div className="filter-bar-wrapper">
          <div className="filter-bar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${activeFilter === cat.id ? "filter-btn-active" : ""}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                <span className="filter-icon">{cat.icon}</span>
                <span>{cat[language] || cat.en}</span>
              </button>
            ))}
          </div>
          <p className="project-count">{text.count(filtered.length)}</p>
        </div>

        {/* ── Project grid ── */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <ProjectCard
                imgPath={project.imgPath}
                title={project.title[language] || project.title.en}
                description={project.description[language] || project.description.en}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                collabLink={project.collabLink}
                category={
                  CATEGORIES.find((c) => c.id === project.category)?.[language] ||
                  CATEGORIES.find((c) => c.id === project.category)?.en
                }
                featured={project.featured}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
