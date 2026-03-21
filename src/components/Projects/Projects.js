import React from "react";
import ProjectCard from "./ProjectCards";
import ragImg from "../../Assets/Projects/rag-master.png";
import mindImg from "../../Assets/Projects/mind.png";
import spamImg from "../../Assets/Projects/spam.jpg";
import drollImg from "../../Assets/Projects/droll.png";
import flowersImg from "../../Assets/Projects/flowers.png";
import cheatImg from "../../Assets/Projects/cheat.webp";
import neutraviewImg from "../../Assets/Projects/neutralview.png";
import livreRecoImg from "../../Assets/Projects/recommendation.png";
import subsenseImg from "../../Assets/Projects/subsense.png";
import nutrimindImg from "../../Assets/Projects/nutrimand.png";
import rawviewImg from "../../Assets/Projects/rawview.png";
import segmentationImg from "../../Assets/Projects/reconnaissance-maison.png";
import { useLanguage } from "../../context/LanguageContext";
import "./ProjectsFuturistic.css";

function Projects() {
  const { language } = useLanguage();

  const copy = {
    en: {
      heading: { lead: "My", highlight: "Recent Projects" },
      subtitle: "Here are a few projects I've been working on lately.",
    },
    fr: {
      heading: { lead: "Mes", highlight: "Projets Récents" },
      subtitle: "Voici quelques projets sur lesquels j'ai travaillé récemment.",
    },
  };

  const text = copy[language] || copy.en;

  const projects = [
    {
      id: "rag-master",
      imgPath: ragImg,
      title: {
        en: "RAG-Master1 - AI Teaching Assistant",
        fr: "RAG-Master1 - Assistant Pédagogique IA",
      },
      description: {
        en: "Full-stack RAG-based teaching assistant for Master 1 Computer Science courses. Features a conversational chat with query rewriting, hybrid search (BM25 + semantic), re-ranking, and source traceability. Includes a Copilot Tools panel (quizzes, flashcards, mind maps, charts) and MCP server integration for YouTube transcript indexing.\n\n**Tech stack:** Python, Flask, React, OpenAI API, ChromaDB, GitHub Copilot SDK, MCP, BM25",
        fr: "Assistant pédagogique RAG complet pour les cours de Master 1 Informatique. Chat conversationnel avec réécriture de requêtes, recherche hybride (BM25 + sémantique), re-ranking et traçabilité des sources. Panneau Copilot Tools (quiz, flashcards, mind maps, graphiques) et intégration de serveurs MCP pour l'indexation de transcriptions YouTube.\n\n**Technologies utilisées :** Python, Flask, React, OpenAI API, ChromaDB, GitHub Copilot SDK, MCP, BM25",
      },
      ghLink: "https://github.com/yanimohellebi26/RAG-Master1",
    },
    {
      id: "neutraview",
      imgPath: neutraviewImg,
      title: {
        en: "NeutraView - Neutral Cultural Reviews",
        fr: "NeutraView - Analyse Neutre d'Avis Culturels",
      },
      description: {
        en: "Full web platform that analyses reviews of books, films, and series. AI modules produce objective summaries, sentiment detection, and psychological profiles based on past reviews. Modular architecture with a Vite/React frontend, FastAPI backend, and containerised deployment.\n\n**Tech stack:** FastAPI, React, Vite, TypeScript, OpenAI API, Hugging Face Transformers, Docker",
        fr: "Plateforme web complète pour analyser les avis de livres, films ou séries. Modules d'IA pour résumés objectifs, détection de sentiments et profils psychologiques des utilisateurs. Architecture modulaire avec frontend React/Vite, backend FastAPI et déploiement en conteneurs.\n\n**Technologies utilisées :** FastAPI, React, Vite, TypeScript, OpenAI API, Hugging Face Transformers, Docker",
      },
      ghLink: "https://github.com/yanimohellebi26/NeutraView",
      collabLink:
        "https://github.com/yanimohellebi26/NeutraView/issues/new?assignees=&labels=collaboration&template=collaboration_request.md",
    },
    {
      id: "subsense",
      imgPath: subsenseImg,
      title: {
        en: "SUBSENSE - Intelligent Instagram Video Analysis",
        fr: "SUBSENSE - Analyse Intelligente de Vidéos Instagram",
      },
      description: {
        en: "Web application for deep analysis of Instagram videos. Users provide a video link and spoken language; the backend downloads the video via yt-dlp, extracts audio with FFmpeg, and produces a multilingual transcript using Whisper. OpenAI then evaluates speaker personalities and content.\n\n**Tech stack:** Python, React, Vite, Whisper, FFmpeg, yt-dlp, OpenAI API",
        fr: "Application web pour l'analyse en profondeur de vidéos Instagram. L'utilisateur fournit un lien vidéo et la langue parlée ; le backend télécharge la vidéo via yt-dlp, extrait l'audio avec FFmpeg et génère une transcription multilingue avec Whisper. OpenAI évalue ensuite les personnalités et le contenu.\n\n**Technologies utilisées :** Python, React, Vite, Whisper, FFmpeg, yt-dlp, OpenAI API",
      },
      ghLink: "https://github.com/yanimohellebi26/instagram-video",
      collabLink:
        "https://github.com/yanimohellebi26/instagram-video/issues/new?assignees=&labels=collaboration&template=collaboration_request.md",
    },
    {
      id: "rawview",
      imgPath: rawviewImg,
      title: {
        en: "RAWVIEW - A Disconnected Review Interface",
        fr: "RAWVIEW – Interface d'Avis sans Influence Sociale",
      },
      description: {
        en: "A review platform designed to eliminate social influence bias. SvelteKit frontend with a FastAPI backend orchestrated via Docker. Custom NLP modules (sentiment analysis, bias detection, clustering, recommendations) analyse user language to surface cognitive biases.\n\n**Tech stack:** SvelteKit, FastAPI, Python, NLP, Docker",
        fr: "Plateforme d'avis conçue pour éliminer les biais d'influence sociale. Frontend SvelteKit avec backend FastAPI orchestré via Docker. Modules NLP personnalisés (analyse de sentiment, détection de biais, clustering, recommandations) pour analyser le langage des utilisateurs.\n\n**Technologies utilisées :** SvelteKit, FastAPI, Python, NLP, Docker",
      },
      ghLink: "https://github.com/yanimohellebi26/review",
      collabLink:
        "https://github.com/yanimohellebi26/review/issues/new?assignees=&labels=collaboration&template=collaboration_request.md",
    },
    {
      id: "mind",
      imgPath: mindImg,
      title: {
        en: "The Mind - AI and Network Communication",
        fr: "The Mind - IA et Communication Réseau",
      },
      description: {
        en: "Multiplayer edition of The Mind with optimised network communication. Player connections rely on TCP sockets with mutex-protected synchronisation. AI trained on 10,000 games using XGBoost to predict the optimal moment to play each card. Interface delivered with SDL2.\n\n**Tech stack:** C, Python, XGBoost, TCP Sockets, Mutexes, SDL2, Shell",
        fr: "Version multijoueur du jeu The Mind avec communication réseau optimisée. Connexion des joueurs via sockets TCP et synchronisation protégée par mutex. IA entraînée sur 10 000 parties avec XGBoost pour prédire le moment optimal de jeu. Interface réalisée en SDL2.\n\n**Technologies utilisées :** C, Python, XGBoost, Sockets TCP, Mutex, SDL2, Shell",
      },
      ghLink: "https://github.com/yanimohellebi26/the_mind",
    },
    {
      id: "cheat",
      imgPath: cheatImg,
      title: {
        en: "Video-Based Exam Cheating Detection",
        fr: "Détection de Triche aux Examens par Vidéo",
      },
      description: {
        en: "Video-based system that flags suspicious behaviour during exams. Combines motion detection and activity analysis to surface anomalies, with an architecture ready for future audio detection. Ships with a deployable web interface.\n\n**Tech stack:** Python, OpenCV, JavaScript, HTML",
        fr: "Système de détection de triche aux examens basé sur la vidéo. Détection de mouvement et analyse d'activité visuelle pour repérer les comportements suspects. Architecture extensible avec future intégration audio. Interface web déployable.\n\n**Technologies utilisées :** Python, OpenCV, JavaScript, HTML",
      },
      ghLink: "https://github.com/yanimohellebi26/detection_triche",
      collabLink:
        "https://github.com/yanimohellebi26/detection_triche/issues/new?assignees=&labels=collaboration&template=collaboration_request.md",
    },
    {
      id: "segmentation",
      imgPath: segmentationImg,
      title: {
        en: "3D Semantic Segmentation of Urban Scenes",
        fr: "Segmentation Sémantique 3D de Scènes Urbaines",
      },
      description: {
        en: "Deep learning pipeline for 3D semantic segmentation of urban scenes from point clouds (PLY format). Implements PointNet and PointNet++ architectures with custom dataset preparation, training, inference, and scene reconstruction from segmented blocks.\n\n**Tech stack:** Python, PyTorch, PointNet, PointNet++, NumPy, Open3D",
        fr: "Pipeline de deep learning pour la segmentation sémantique 3D de scènes urbaines à partir de nuages de points (format PLY). Implémentation des architectures PointNet et PointNet++ avec préparation de dataset, entraînement, inférence et reconstruction de scènes à partir de blocs segmentés.\n\n**Technologies utilisées :** Python, PyTorch, PointNet, PointNet++, NumPy, Open3D",
      },
      ghLink: "https://github.com/yanimohellebi26/segmentation-semantique",
    },
    {
      id: "book-rec",
      imgPath: livreRecoImg,
      title: {
        en: "Smart Book Recommendation",
        fr: "Recommandation Intelligente de Livres",
      },
      description: {
        en: "Personalised literary recommendation site where readers share their favourite book and what they loved about it. Flask backend queries OpenAI and the Open Library API to analyse conveyed emotions and return tailored suggestions. React frontend with Vite.\n\n**Tech stack:** Flask, React, Vite, Python, OpenAI API, Open Library API",
        fr: "Site de recommandation littéraire personnalisé. L'utilisateur entre le titre d'un livre et ce qu'il a préféré. Le backend Flask interroge OpenAI et l'API Open Library pour analyser les émotions et proposer des recommandations. Frontend React avec Vite.\n\n**Technologies utilisées :** Flask, React, Vite, Python, OpenAI API, Open Library API",
      },
      demoLink: "https://recommendation-livre.vercel.app/",
      ghLink: "https://github.com/yanimohellebi26/recommendation-livre",
    },
    {
      id: "nutrimind",
      imgPath: nutrimindImg,
      title: {
        en: "NUTRI-MIND - Nutrition Planner for Student Lifters",
        fr: "NUTRI-MIND – Planificateur Nutritionnel pour Étudiants Sportifs",
      },
      description: {
        en: "React application for budget-conscious strength athletes. Computes daily macro targets from personal inputs, then generates a weekly meal plan, a budget-aware shopping list, and straightforward recipes. Features a dashboard, progress tracking, and recipe library.\n\n**Tech stack:** React, JavaScript, CSS",
        fr: "Application React pour les pratiquants de musculation avec budget serré. Calcul des besoins journaliers en macros à partir de paramètres individuels, puis génération d'un menu hebdomadaire, d'une liste de courses adaptée au budget et de recettes simples. Dashboard, suivi de progression et bibliothèque de recettes.\n\n**Technologies utilisées :** React, JavaScript, CSS",
      },
      ghLink: "https://github.com/yanimohellebi26/muscule_ia",
      collabLink:
        "https://github.com/yanimohellebi26/muscule_ia/issues/new?assignees=&labels=collaboration&template=collaboration_request.md",
    },
    {
      id: "drol",
      imgPath: drollImg,
      title: {
        en: "Modernising the DROL Game",
        fr: "Modernisation du Jeu DROL",
      },
      description: {
        en: "Rebuilt DROL with both cooperative and competitive multiplayer modes. Network traffic is managed with UDP to keep gameplay responsive while synchronising player states. Developed in Java on GNU/Linux with an overhauled interface and event system.\n\n**Tech stack:** Java, Swing, UDP Sockets, Linux",
        fr: "Refonte du jeu DROL avec mode multijoueur coopératif et compétitif. Gestion du réseau avec UDP pour assurer la fluidité et la synchronisation des états de jeu. Développement en Java sous GNU/Linux, avec optimisation de l'interface et de la gestion des événements.\n\n**Technologies utilisées :** Java, Swing, Sockets UDP, Linux",
      },
      ghLink: "https://github.com/yanimohellebi26/DROL-GAME",
    },
    {
      id: "spam",
      imgPath: spamImg,
      title: {
        en: "AI-Powered Spam Detector",
        fr: "Détecteur de Spam avec IA",
      },
      description: {
        en: "Intelligent Telegram bot that filters spam messages. Logistic regression with TF-IDF vectorisation to classify texts, coupled with data cleaning, cross-validation, and metrics such as precision, recall, and F1-score.\n\n**Tech stack:** Python, Scikit-learn, Pandas, TF-IDF, Telegram API",
        fr: "Bot Telegram intelligent pour filtrer les spams. Régression logistique avec vectorisation TF-IDF pour classifier les messages. Nettoyage de données, validation croisée et analyse des performances avec précision, rappel et F1-score.\n\n**Technologies utilisées :** Python, Scikit-learn, Pandas, TF-IDF, Telegram API",
      },
      ghLink: "https://github.com/yanimohellebi26/detecteur-spam",
    },
    {
      id: "flowers",
      imgPath: flowersImg,
      title: {
        en: "Online Flower Shop",
        fr: "Boutique en Ligne de Fleurs",
      },
      description: {
        en: "E-commerce site for flower sales with dedicated flows for customers and vendors. Built as a software engineering project with collaborative GitLab management, task planning, and weekly follow-ups.\n\n**Tech stack:** Java, Swing, SQLite, GitLab",
        fr: "Site e-commerce pour la vente de fleurs avec gestion des utilisateurs et vendeurs. Projet réalisé dans le cadre du génie logiciel avec gestion collaborative sur GitLab, planification des tâches en équipe et réunions hebdomadaires.\n\n**Technologies utilisées :** Java, Swing, SQLite, GitLab",
      },
      ghLink: "https://github.com/yanimohellebi26/boutique-roses",
    },
  ];

  return (
    <section className="section-shell projects-section-futuristic" id="projects">
      {/* Effet de grille futuriste en arrière-plan */}
      <div className="cyber-grid" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* En-tête avec animation */}
        <div className="mx-auto max-w-3xl space-y-6 text-center mb-16">
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

        {/* Grille de projets avec animations échelonnées */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard
                imgPath={project.imgPath}
                title={project.title[language] || project.title.en}
                description={project.description[language] || project.description.en}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                collabLink={project.collabLink}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
