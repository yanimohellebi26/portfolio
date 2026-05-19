import React, { useState } from "react";
import ProjectCard from "./ProjectCards";
/* ── existing images ── */
import mindImg from "../../Assets/Projects/mind.png";
import spamImg from "../../Assets/Projects/spam.jpg";
import drollImg from "../../Assets/Projects/droll.png";
import cheatImg from "../../Assets/Projects/cheat-gemini.png";
import neutraviewImg from "../../Assets/Projects/neutraview-gemini.png";
import livreRecoImg from "../../Assets/Projects/books-ai.png";
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
/* ── additional images ── */
import flowersImg from "../../Assets/Projects/flowers.png";
import { useLanguage } from "../../context/LanguageContext";
import "./ProjectsFuturistic.css";

/* ── categories ── */
const CATEGORIES = [
  { id: "all",       icon: "🔥", en: "All",               fr: "Tous" },
  { id: "featured",  icon: "⭐", en: "Favorites",          fr: "Favoris" },
  { id: "academic",  icon: "🎓", en: "Academic",          fr: "Académique" },
  { id: "deployed",  icon: "🚀", en: "Deployed",          fr: "Déployé" },
  { id: "agentic",   icon: "🤖", en: "Agentic Workflow",  fr: "Agentic Workflow" },
  { id: "ml",        icon: "🧠", en: "ML & Data",         fr: "Machine Learning & Data" },
  { id: "else",      icon: "🎮", en: "Games & Creative",  fr: "Jeux & Créatif" },
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
     PROJECT DATA — 38 projects, 5 categories
     ══════════════════════════════════════════════ */
  const projects = [
    /* ── Agentic Workflow ────────────────────── */
    {
      id: "angry-geopol",
      imgPath: angryGeoImg,
      category: "agentic",
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
      category: "agentic",
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
      category: "agentic",
      featured: true,
      title: {
        en: "RAG-Master1 — AI Teaching Assistant",
        fr: "RAG-Master1 — Assistant Pédagogique IA",
      },
      description: {
        en: "Full-stack RAG chatbot for Master 1 CS students at Université de Bourgogne. Hybrid BM25 + semantic search, conversational interface with source tracing, quiz generation, flashcard tools, and MCP server integration via GitHub Copilot Extensions SDK.\n\n**Tech stack:** Python, Flask, React/Vite, ChromaDB, OpenAI gpt-4o-mini, GitHub Copilot SDK, MCP",
        fr: "Chatbot RAG full-stack pour les étudiants de Master 1 Informatique à l'Université de Bourgogne. Recherche hybride BM25 + sémantique, interface conversationnelle avec traçabilité des sources, génération de quiz, flashcards et intégration MCP via GitHub Copilot Extensions SDK.\n\n**Technologies utilisées :** Python, Flask, React/Vite, ChromaDB, OpenAI gpt-4o-mini, GitHub Copilot SDK, MCP",
      },
      ghLink: "https://github.com/yanimohellebi26/RAG-Master1",
    },
    {
      id: "cine-agent",
      imgPath: cineAgentImg,
      category: "agentic",
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
      category: "ml",
      title: {
        en: "NeutraView — Neutral Cultural Reviews",
        fr: "NeutraView — Analyse Neutre d'Avis Culturels",
      },
      description: {
        en: "Neutral review aggregation platform for films and cultural works. BERT/TextBlob sentiment analysis, T5/BART spoiler-free summaries, and a conversational \"Find your story\" recommendation feature. All via OpenAI GPT-4o.\n\n**Tech stack:** FastAPI, React, OpenAI GPT-4o, BERT, TextBlob, T5/BART, MongoDB, Docker",
        fr: "Plateforme d'agrégation d'avis neutres pour films et œuvres culturelles. Analyse de sentiment BERT/TextBlob, résumés sans spoiler via T5/BART, et fonctionnalité conversationnelle \"Trouve ton histoire\". Propulsé par OpenAI GPT-4o.\n\n**Technologies utilisées :** FastAPI, React, OpenAI GPT-4o, BERT, TextBlob, T5/BART, MongoDB, Docker",
      },
      ghLink: "https://github.com/yanimohellebi26/NeutraView.git",
      collabLink: "https://github.com/yanimohellebi26/NeutraView/issues/new?assignees=&labels=collaboration&template=collaboration_request.md",
    },
    {
      id: "spam",
      imgPath: spamImg,
      category: "ml",
      title: {
        en: "AI-Powered Spam Detector",
        fr: "Détecteur de Spam avec IA",
      },
      description: {
        en: "ML spam classifier trained on French SMS/email data with a Telegram bot interface for real-time classification. Logistic regression with TF-IDF, cross-validation, full performance metrics, and an additional R model variant.\n\n**Tech stack:** Python, Scikit-learn, Pandas, TF-IDF, Telegram Bot API, R",
        fr: "Classifieur de spam entraîné sur des données SMS/e-mail en français avec une interface bot Telegram pour la classification temps réel. Régression logistique + TF-IDF, validation croisée, métriques complètes et variante en R.\n\n**Technologies utilisées :** Python, Scikit-learn, Pandas, TF-IDF, Telegram Bot API, R",
      },
      ghLink: "https://github.com/yanimohellebi26/detecteur-spam.git",
    },
    {
      id: "cheat",
      imgPath: cheatImg,
      category: "ml",
      title: {
        en: "Video-Based Exam Cheating Detection",
        fr: "Détection de Triche aux Examens (vidéo)",
      },
      description: {
        en: "Full-stack academic cheating and plagiarism detection app with an ML model training pipeline, backend REST API, frontend UI, and Docker Compose deployment. Video motion analysis flags suspicious exam behaviour.\n\n**Tech stack:** Python, OpenCV, PyTorch, FastAPI, React, Docker Compose",
        fr: "Application full-stack de détection de triche et plagiat avec pipeline d'entraînement ML, API backend, frontend et déploiement Docker Compose. Analyse vidéo par détection de mouvement pour signaler les comportements suspects aux examens.\n\n**Technologies utilisées :** Python, OpenCV, PyTorch, FastAPI, React, Docker Compose",
      },
      ghLink: "https://github.com/yanimohellebi26/detection_triche.git",
      collabLink: "https://github.com/yanimohellebi26/detection_triche/issues/new?assignees=&labels=collaboration&template=collaboration_request.md",
    },
    {
      id: "subsense",
      imgPath: subsenseImg,
      category: "ml",
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
      category: "ml",
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
      category: "ml",
      title: {
        en: "RAWVIEW — Disconnected Review Interface",
        fr: "RAWVIEW — Interface d'Avis Déconnectés",
      },
      description: {
        en: "Blind cultural review platform: discover a work (film, book, music) without knowing what it is, submit anonymous reviews, and let AI analyse sincerity, subjectivity, and social bias. Includes review matching and \"guess the work\" challenges.\n\n**Tech stack:** React, FastAPI, PostgreSQL, HuggingFace Transformers, spaCy, Sentence Transformers, Docker Compose",
        fr: "Plateforme de critique culturelle en aveugle : découvrez une œuvre sans savoir ce que c'est, soumettez un avis anonyme, et laissez l'IA analyser sincérité, subjectivité et biais social. Inclut le matching d'avis et des défis 'devine l'œuvre'.\n\n**Technologies utilisées :** React, FastAPI, PostgreSQL, HuggingFace Transformers, spaCy, Sentence Transformers, Docker Compose",
      },
      ghLink: "https://github.com/yanimohellebi26/review.git",
      collabLink: "https://github.com/yanimohellebi26/review/issues/new?assignees=&labels=collaboration&template=collaboration_request.md",
    },
    {
      id: "book-rec",
      imgPath: livreRecoImg,
      category: "deployed",
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
      category: "agentic",
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
    /* ── Deployed ──────────────────────────── */
    {
      id: "lyon",
      imgPath: barsLyonImg,
      category: "deployed",
      title: {
        en: "LyonByNight — Interactive Nightlife PWA",
        fr: "LyonByNight — PWA de Découverte Nocturne",
      },
      description: {
        en: "Interactive nightlife guide for Lyon with 183 geocoded venues on a clustered Mapbox map. Features an AI chatbot (RAG + GPT-4o), event calendar, 4-way venue comparator, and bilingual FR/EN support.\n\n**Tech stack:** Next.js 16, TypeScript, Tailwind CSS v4, shadcn/ui, Supabase, Mapbox GL JS, OpenAI GPT-4o, next-intl, Vitest",
        fr: "Guide de la vie nocturne lyonnaise avec 183 lieux géocodés sur une carte Mapbox avec clustering. Chatbot IA (RAG + GPT-4o), calendrier d'événements, comparateur de 4 lieux simultanés et support bilingue FR/EN.\n\n**Technologies utilisées :** Next.js 16, TypeScript, Tailwind CSS v4, shadcn/ui, Supabase, Mapbox GL JS, OpenAI GPT-4o, next-intl, Vitest",
      },
      ghLink: "https://github.com/yanimohellebi26/LyonByNight",
      demoLink: "https://lyon-inky.vercel.app/fr",
    },
    /* bars-lyon removed — same project as LyonByNight */
    /* paris nightlife removed */
    {
      id: "ecommerce",
      imgPath: ecommerceImg,
      category: "academic",
      title: {
        en: "Multi-Role E-Commerce Platform",
        fr: "Plateforme E-Commerce Multi-Rôles",
      },
      description: {
        en: "Group PHP MVC e-commerce platform with three user roles (customer, vendor, admin), each with dedicated dashboards. Custom MVC in vanilla PHP/MySQL with role-based access, shopping cart, and order tracking.\n\n**Tech stack:** PHP, MySQL, PDO, JavaScript, jQuery, CSS, MVC",
        fr: "Plateforme e-commerce PHP MVC réalisée en groupe, avec trois rôles (client, vendeur, admin) et tableaux de bord dédiés. Architecture MVC en PHP/MySQL avec contrôle d'accès, panier et suivi des commandes.\n\n**Technologies utilisées :** PHP, MySQL, PDO, JavaScript, jQuery, CSS, MVC",
      },
      ghLink: "https://github.com/yanimohellebi26/e-commerce",
      demoLink: "https://youtu.be/t0eva3XYQFA",
    },
    /* flowers removed — covered by multi-role e-commerce */
    {
      id: "movie-card",
      imgPath: movieCardImg,
      category: "deployed",
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
      category: "else",
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
      category: "deployed",
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
    /* ── Agentic Workflow (cont.) ──────────── */
    {
      id: "hackathon",
      imgPath: hackathonImg,
      category: "agentic",
      featured: true,
      title: {
        en: "Amazigh Odyssey — AI RPG with Mistral",
        fr: "Amazigh Odyssey — RPG IA avec Mistral",
      },
      description: {
        en: "AI narrative RPG set in mythologised North Africa (Numidia). Mistral AI acts as Game Master with MCP servers for world state, combat, inventory, and lore. Tifinagh-based magic system, Amazigh mythology pantheon, and QLoRA fine-tuning on Amazigh lore. Built for Mistral Hackathon 2026.\n\n**Tech stack:** Python, Mistral AI, Godot, MCP Servers, QLoRA (HuggingFace TRL), W&B, Tamazight",
        fr: "RPG narratif IA dans une Numidie mythologisée. Mistral AI est Maître du Jeu avec des serveurs MCP pour l'état du monde, le combat, l'inventaire et le lore. Système magique en Tifinagh, panthéon amazigh et fine-tuning QLoRA sur le folklore amazigh. Réalisé pour le Mistral Hackathon 2026.\n\n**Technologies utilisées :** Python, Mistral AI, Godot, Serveurs MCP, QLoRA (HuggingFace TRL), W&B, Tamazight",
      },
      ghLink: "https://github.com/yanimohellebi26/hackathon_mistral",
    },
    {
      id: "mind",
      imgPath: mindImg,
      category: "academic",
      title: {
        en: "The Mind — AI & Network Communication",
        fr: "The Mind — IA et Communication Réseau",
      },
      description: {
        en: "Dual implementation of The Mind cooperative card game (players silently play numbered cards 1–100 in order): a Java web application (WAR/servlet) and a C/C++ native version with a Python scripting layer.\n\n**Tech stack:** Java (Servlet/WAR), C/C++, Python, Makefile",
        fr: "Double implémentation du jeu coopératif The Mind (jouer en silence des cartes 1–100 dans l'ordre) : application web Java (WAR/servlet) et version native C/C++ avec couche scripting Python.\n\n**Technologies utilisées :** Java (Servlet/WAR), C/C++, Python, Makefile",
      },
      ghLink: "https://github.com/yanimohellebi26/the_mind",
    },
    {
      id: "drol",
      imgPath: drollImg,
      category: "academic",
      title: {
        en: "Modernising the DROL Game",
        fr: "Modernisation du Jeu DROL",
      },
      description: {
        en: "Pirate-themed remake of the 90s Droll arcade game with a 3-level solo campaign. Partial network multiplayer implementation. Developed in Java on GNU/Linux.\n\n**Tech stack:** Java, Swing, UDP, Linux",
        fr: "Refonte du jeu d'arcade DROL des années 90 sur le thème des pirates, avec une campagne solo de 3 niveaux. Multijoueur réseau partiellement implémenté. Java sous GNU/Linux.\n\n**Technologies utilisées :** Java, Swing, UDP, Linux",
      },
      ghLink: "https://github.com/yanimohellebi26/DROL-GAME",
    },
    /* ── ML & Data ──────────────────────── */
    {
      id: "seg-urban",
      imgPath: segUrbanImg,
      category: "ml",
      featured: true,
      title: {
        en: "3D Semantic Segmentation — Urban Scenes",
        fr: "Segmentation Sémantique 3D — Scènes Urbaines",
      },
      description: {
        en: "Full pipeline for 3D semantic segmentation of urban scenes from .ply point clouds (Paris & Lille lidar scans). Block-based training with PointNet and PointNet++, followed by colour-coded reconstruction and visualisation.\n\n**Tech stack:** Python, PyTorch, PointNet, PointNet++, NumPy, .ply format",
        fr: "Pipeline complet de segmentation sémantique 3D de scènes urbaines à partir de nuages de points .ply (scans lidar de Paris et Lille). Entraînement par blocs avec PointNet et PointNet++, puis reconstruction et visualisation colorée.\n\n**Technologies utilisées :** Python, PyTorch, PointNet, PointNet++, NumPy, format .ply",
      },
      ghLink: "https://github.com/yanimohellebi26/segmentation-semantique",
    },
    {
      id: "reco-maison",
      imgPath: recoMaisonImg,
      category: "ml",
      title: {
        en: "House Style Recognition from Point Clouds",
        fr: "Reconnaissance de Styles de Maisons en 3D",
      },
      description: {
        en: "Semantic segmentation of 3D house floor plans from point clouds, classifying architectural elements (walls, doors, windows) using PointNet/PointNet++. Dataset procedurally generated with Blender. Developed during an architecture shape-recognition internship.\n\n**Tech stack:** Python, PyTorch, PointNet, PointNet++, Blender (Python API), NumPy, Matplotlib",
        fr: "Segmentation sémantique de plans de maisons 3D depuis des nuages de points, classifiant les éléments architecturaux (murs, portes, fenêtres) avec PointNet/PointNet++. Jeu de données généré procéduralement avec Blender. Développé lors d'un stage en reconnaissance de formes architecturales.\n\n**Technologies utilisées :** Python, PyTorch, PointNet, PointNet++, Blender (API Python), NumPy, Matplotlib",
      },
      ghLink: "https://github.com/yanimohellebi26/reconnaissance_maison-nuage-de-points",
    },
    {
      id: "seg-cube",
      imgPath: segCubeImg,
      category: "ml",
      title: {
        en: "3D Cube Face Segmentation",
        fr: "Segmentation de Faces de Cube 3D",
      },
      description: {
        en: "Pipeline segmenting all 6 faces of synthetic 3D point-cloud cubes using PointNet (with T-Net spatial transformer) and KPConv. Dataset procedurally generated with Gaussian noise and random rotations for a known ground truth testbed.\n\n**Tech stack:** Python, PyTorch, PointNet (T-Net), KPConv, torch-points3d, NumPy",
        fr: "Pipeline segmentant les 6 faces de cubes synthétiques en nuages de points 3D via PointNet (avec transformateur spatial T-Net) et KPConv. Jeu de données généré procéduralement avec bruit gaussien et rotations aléatoires.\n\n**Technologies utilisées :** Python, PyTorch, PointNet (T-Net), KPConv, torch-points3d, NumPy",
      },
      ghLink: "https://github.com/yanimohellebi26/segmentation-face-cube",
    },
    {
      id: "poisson-gl",
      imgPath: poissonImg,
      category: "academic",
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
      category: "else",
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
    /* ── Academic ─────────────────────────── */
    {
      id: "bucket-sort",
      imgPath: bucketSortImg,
      category: "academic",
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
      category: "academic",
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
      category: "ml",
      title: {
        en: "ML Package & API — Python Pipeline",
        fr: "Package ML & API — Pipeline Python",
      },
      description: {
        en: "Complete Python ML walkthrough: custom OLS regression as a pip-installable package, exposed via a Flask REST API, served with Gunicorn, and containerised with Docker for reproducible deployment.\n\n**Tech stack:** Python, Flask, Gunicorn, Docker, scikit-learn, NumPy, Matplotlib, pip Packaging",
        fr: "Parcours ML complet : régression OLS packagée pip, exposée via une API REST Flask, servie avec Gunicorn et conteneurisée Docker pour un déploiement reproductible.\n\n**Technologies utilisées :** Python, Flask, Gunicorn, Docker, scikit-learn, NumPy, Matplotlib, pip Packaging",
      },
      ghLink: "https://github.com/yanimohellebi26/question2_project",
    },
    /* ── Additional projects from MD ── */
    {
      id: "rag-m1",
      imgPath: ragImg,
      category: "agentic",
      title: {
        en: "RAG-M1 — Multi-Agent RAG System",
        fr: "RAG-M1 — Système RAG Multi-Agent",
      },
      description: {
        en: "Multi-agent RAG system with 6 specialised agents on 139 M1 course files. Pipeline: PDF/ZIP/TXT → Qdrant → BGE-M3 reranking. Agents for RAG, Notes, Exercises, Memory, Web search, and Research.\n\n**Tech stack:** Python, LlamaIndex, Qdrant, BGE-M3, FastAPI, PyMuPDF, MCP, Docker",
        fr: "Système RAG multi-agent avec 6 agents spécialisés sur 139 fichiers de cours M1. Pipeline : PDF/ZIP/TXT → Qdrant → BGE-M3 reranking. Agents pour RAG, Notes, Exercices, Mémoire, Web et Recherche.\n\n**Technologies utilisées :** Python, LlamaIndex, Qdrant, BGE-M3, FastAPI, PyMuPDF, MCP, Docker",
      },
      ghLink: "https://github.com/yanimohellebi26/RAG-M1",
    },
    {
      id: "pontifex",
      imgPath: aportfolioImg,
      category: "deployed",
      title: {
        en: "Pontifex — Solitaire Cipher + RAG Assistant",
        fr: "Pontifex — Chiffre de Solitaire + Assistant RAG",
      },
      description: {
        en: "Complete Solitaire cipher implementation with a Streamlit UI, a RAG-powered crypto assistant (ChromaDB + Gemini), vulnerability demonstrations, and card visualisations.\n\n**Tech stack:** Python, Streamlit, Google Gemini, ChromaDB, Sentence-Transformers, Plotly, NumPy, SciPy",
        fr: "Implémentation complète du chiffre de Solitaire avec UI Streamlit, assistant RAG crypto (ChromaDB + Gemini), démonstrations de vulnérabilités et visualisation de cartes.\n\n**Technologies utilisées :** Python, Streamlit, Google Gemini, ChromaDB, Sentence-Transformers, Plotly, NumPy, SciPy",
      },
      ghLink: "https://github.com/yanimohellebi26/crypto",
      demoLink: "https://crypto-master1.streamlit.app/",
    },
    {
      id: "boutique-fleurs",
      imgPath: flowersImg,
      category: "academic",
      title: {
        en: "Flower Shop — Desktop Java E-Commerce",
        fr: "Boutique de Fleurs — E-Commerce Desktop Java",
      },
      description: {
        en: "Desktop Java e-commerce application with MVC/DAO/Observer design patterns. 21 domain classes (flowers, bouquets), 9 Swing views, unit tests + UI tests. Collaborative project.\n\n**Tech stack:** Java 21, Swing, SQLite, Maven, JUnit 5, Mockito, AssertJ Swing",
        fr: "Application e-commerce desktop Java avec patterns MVC/DAO/Observer. 21 classes domaine (fleurs, bouquets), 9 vues Swing, tests unitaires + UI. Projet collaboratif.\n\n**Technologies utilisées :** Java 21, Swing, SQLite, Maven, JUnit 5, Mockito, AssertJ Swing",
      },
      ghLink: "https://github.com/yanimohellebi26/boutique-roses",
    },
    {
      id: "oracle-bd",
      imgPath: aportfolioImg,
      category: "academic",
      title: {
        en: "Oracle Execution Plans — Query Optimisation",
        fr: "Plans d'Exécution Oracle — Optimisation de Requêtes",
      },
      description: {
        en: "In-depth study of the Oracle optimiser: index vs full table scan thresholds, B-Tree vs Bitmap, multi-criteria AND/OR predicates. 20+ SQL scripts with cold-read protocol.\n\n**Tech stack:** Oracle Database, PL/SQL, SQL*Plus, AUTOTRACE, DBMS_STATS, DBMS_XPLAN, Bash",
        fr: "Étude approfondie de l'optimiseur Oracle : seuils index vs full table scan, B-Tree vs Bitmap, prédicats AND/OR multi-critères. 20+ scripts SQL avec protocole cold-read.\n\n**Technologies utilisées :** Oracle Database, PL/SQL, SQL*Plus, AUTOTRACE, DBMS_STATS, DBMS_XPLAN, Bash",
      },
      ghLink: "https://github.com/yanimohellebi26/BD",
    },
    {
      id: "ais",
      imgPath: aportfolioImg,
      category: "academic",
      featured: true,
      title: {
        en: "AIS — Full-Stack Data Platform",
        fr: "AIS — Plateforme Data Full-Stack",
      },
      description: {
        en: "Full-stack data platform with a Vite+React frontend served by Nginx, a Spring Boot 3 (Java 17) backend, a Python ETL pipeline, and PostgreSQL 16. All services orchestrated with Docker Compose.\n\n**Tech stack:** Java 17, Spring Boot 3, React, Vite, Python, PostgreSQL 16, Docker Compose, Nginx",
        fr: "Plateforme data full-stack avec frontend Vite+React servi par Nginx, backend Spring Boot 3 (Java 17), pipeline ETL Python et PostgreSQL 16. Tous les services orchestrés via Docker Compose.\n\n**Technologies utilisées :** Java 17, Spring Boot 3, React, Vite, Python, PostgreSQL 16, Docker Compose, Nginx",
      },
      ghLink: "https://github.com/yanimohellebi26/ais",
    },
    {
      id: "bowling",
      imgPath: aportfolioImg,
      category: "else",
      title: {
        en: "Strike du Destin — Cinematic Interactive Experience",
        fr: "Strike du Destin — Expérience Interactive Cinématique",
      },
      description: {
        en: "Cinematic interactive web experience with AI voice narration (ElevenLabs), multi-act structure, confetti system, and PDF ticket generation via Canvas.\n\n**Tech stack:** HTML5, CSS3, JavaScript, Web Audio API, Canvas, html2canvas, jsPDF, ElevenLabs",
        fr: "Expérience web interactive cinématique avec narration vocale IA (ElevenLabs), structure multi-actes, système confetti et génération PDF tickets via Canvas.\n\n**Technologies utilisées :** HTML5, CSS3, JavaScript, Web Audio API, Canvas, html2canvas, jsPDF, ElevenLabs",
      },
      ghLink: "https://github.com/yanimohellebi26/bowling",
    },
    {
      id: "date-game",
      imgPath: aportfolioImg,
      category: "else",
      title: {
        en: "Lapine & Bonbons — 2D Cross-Platform Game",
        fr: "Lapine & Bonbons — Jeu 2D Cross-Platform",
      },
      description: {
        en: "2D cross-platform mini-game built with LibGDX (desktop + HTML5). Character controller with candy collection, 6 thematic modals, emoji particles, and multi-platform builds.\n\n**Tech stack:** Java, LibGDX, Gradle, FreeType, SpriteBatch, GWT",
        fr: "Mini-jeu 2D cross-platform avec LibGDX (desktop + HTML5). Character controller avec collecte de bonbons, 6 modals thématiques, particules emoji et builds multi-plateformes.\n\n**Technologies utilisées :** Java, LibGDX, Gradle, FreeType, SpriteBatch, GWT",
      },
      ghLink: "https://github.com/yanimohellebi26/date",
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
