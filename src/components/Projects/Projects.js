import React from "react";
import ProjectCard from "./ProjectCards";
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
      id: "mind",
      imgPath: mindImg,
      title: {
        en: "The Mind - AI and Network Communication",
        fr: "The Mind - IA et Communication Réseau",
      },
      description: {
        en: "Built a multiplayer edition of The Mind with optimized network communication. Player connections rely on TCP sockets with mutex-protected synchronization. Trained an AI on 10,000 games using XGBoost to predict the optimal time to play each card. Interface delivered with SDL2.\n\n**Tech stack:** C, XGBoost, PyTorch, TCP sockets, Mutexes, SDL2",
        fr: "Développement d'une version multijoueur du jeu The Mind avec une communication réseau optimisée. Utilisation des sockets TCP pour la connexion des joueurs et gestion de la synchronisation via mutex. IA entraînée sur 10 000 parties avec XGBoost pour prédire le moment optimal de jeu. Interface réalisée en SDL2.\n\n**Technologies utilisées :** C, XGBoost, PyTorch, Sockets TCP, Mutex, SDL2",
      },
      ghLink: "https://github.com/yanimohellebi26/the_mind",
    },
    {
      id: "spam",
      imgPath: spamImg,
      title: {
        en: "AI-Powered Spam Detector",
        fr: "Détecteur de Spam avec IA",
      },
      description: {
        en: "Built an intelligent Telegram bot that filters spam messages. Implemented logistic regression with TF-IDF vectorisation to classify texts, coupled with data cleaning, cross-validation, and metrics such as precision, recall, and F1-score.\n\n**Tech stack:** Python, Scikit-learn, Pandas, TF-IDF, Telegram API",
        fr: "Création d'un bot Telegram intelligent pour filtrer les spams. Implémentation d'un modèle de régression logistique et vectorisation TF-IDF pour classifier les messages. Nettoyage et traitement des données, validation croisée et analyse des performances avec précision, rappel, et F1-score.\n\n**Technologies utilisées :** Python, Scikit-learn, Pandas, TF-IDF, Telegram API",
      },
      ghLink: "https://github.com/yanimohellebi26/detecteur-spam.git",
    },
    {
      id: "drol",
      imgPath: drollImg,
      title: {
        en: "Modernising the DROL Game",
        fr: "Modernisation du Jeu DROL",
      },
      description: {
        en: "Rebuilt DROL with both cooperative and competitive multiplayer modes. Network traffic is managed with UDP to keep gameplay responsive while synchronising player states. Developed in Java on GNU/Linux with an overhauled interface and event system.\n\n**Tech stack:** Java, Swing, UDP, Linux",
        fr: "Refonte du jeu DROL avec mode multijoueur coopératif et compétitif. Gestion du réseau avec UDP pour assurer la fluidité et la synchronisation des états de jeu. Développement en Java sous GNU/Linux, avec optimisation de l'interface et de la gestion des événements.\n\n**Technologies utilisées :** Java, Swing, UDP, Linux",
      },
      ghLink: "https://github.com/yanimohellebi26/DROL-GAME",
    },
    {
      id: "flowers",
      imgPath: flowersImg,
      title: {
        en: "Online Flower Shop",
        fr: "Boutique en Ligne de Fleurs",
      },
      description: {
        en: "Developed an e-commerce site for flower sales with dedicated flows for customers and vendors backed by SQLite. Built as a software engineering project with collaborative GitLab management, task planning, and weekly follow-ups.\n\n**Tech stack:** HTML, CSS, PHP, SQLite, GitLab",
        fr: "Développement d'un site e-commerce pour la vente de fleurs avec gestion des utilisateurs et vendeurs via une base de données SQLite. Projet réalisé dans le cadre du génie logiciel avec gestion collaborative sur GitLab, planification des tâches en équipe et réunions hebdomadaires pour suivre l'avancement.\n\n**Technologies utilisées :** HTML, CSS, PHP, SQLite, GitLab",
      },
      ghLink: "https://github.com/yanimohellebi26/boutique-roses.git",
    },
    {
      id: "cheat",
      imgPath: cheatImg,
      title: {
        en: "Video-Based Exam Cheating Detection",
        fr: "Détection de triche aux examens (vidéo)",
      },
      description: {
        en: "Created a video-based system that flags suspicious behaviour during exams. Combined motion detection and activity analysis models to surface anomalies, with an architecture ready for future audio detection. Ships with a deployable web interface.\n\n**Tech stack:** OpenCV, PyTorch, FastAPI, JavaScript, HTML",
        fr: "Création d'un système de détection de triche aux examens basé sur la vidéo. Utilisation de modèles de détection de mouvement et d'analyse d'activité visuelle pour repérer les comportements suspects. Système extensible avec une future intégration de la détection audio. Déployable via une interface web.\n\n**Technologies utilisées :** OpenCV, PyTorch, FastAPI, JavaScript, HTML",
      },
      ghLink: "https://github.com/yanimohellebi26/detection_triche.git",
      collabLink:
        "https://github.com/yanimohellebi26/detection_triche/issues/new?assignees=&labels=collaboration&template=collaboration_request.md",
    },
    {
      id: "neutraview",
      imgPath: neutraviewImg,
      title: {
        en: "NeutraView - Neutral Cultural Reviews",
        fr: "NeutraView - Analyse Neutre d'Avis Culturels",
      },
      description: {
        en: "Delivered a full web platform that analyses reviews of books, films, and series. AI modules produce objective summaries, sentiment detection, and psychological profiles based on past reviews. The modular architecture is thoroughly documented, proxied through Vite/React, and packaged with containers.\n\n**Tech stack:** FastAPI, React, OpenAI API, Hugging Face Transformers, PyTorch, PostgreSQL, Docker",
        fr: "Développement complet d'une plateforme web pour analyser les avis de livres, films ou séries. Le système intègre des modules d'IA pour effectuer des résumés objectifs, détecter les sentiments, et établir un profil psychologique des utilisateurs à partir de leurs anciens avis. L'architecture est modulaire et documentée, avec gestion des appels via un proxy Vite/React et déploiement en conteneurs.\n\n**Technologies utilisées :** FastAPI, React, OpenAI API, Hugging Face Transformers, PyTorch, PostgreSQL, Docker",
      },
      ghLink: "https://github.com/yanimohellebi26/NeutraView.git",
      collabLink:
        "https://github.com/yanimohellebi26/NeutraView/issues/new?assignees=&labels=collaboration&template=collaboration_request.md",
    },
    {
      id: "book-rec",
      imgPath: livreRecoImg,
      title: {
        en: "Smart Book Recommendation",
        fr: "Recommandation Intelligente de Livres",
      },
      description: {
        en: "Built a personalised literary recommendation site where readers share their favourite book and what they loved about it. The AI analyses conveyed emotions, the main character profile, and returns tailored suggestions.\n\n**Tech stack:** React, OpenAI API, Emotion Detection, Tailwind CSS",
        fr: "Développement d'un site de recommandation littéraire personnalisé où l'utilisateur entre le titre d'un livre et ce qu'il a préféré dedans. L'IA analyse les émotions transmises par l'œuvre, le profil du personnage principal et propose des recommandations personnalisées.\n\n**Technologies utilisées :** React, OpenAI API, Emotion Detection, Tailwind CSS",
      },
      demoLink: "https://recommendation-livre.vercel.app/",
      ghLink: "https://github.com/yanimohellebi26/recommendation-livre.git",
    },
    {
      id: "subsense",
      imgPath: subsenseImg,
      title: {
        en: "SUBSENSE - Intelligent Instagram Video Analysis",
        fr: "SUBSENSE - Analyse Intelligente de Vidéos Instagram",
      },
      description: {
        en: "SUBSENSE is a full web application for deep analysis of Instagram videos. Users provide a video link and spoken language; the AI downloads the video, extracts audio, and produces a faithful multilingual transcript. Natural language models then evaluate speaker personalities and the underlying content.\n\n**Tech stack:** FastAPI, React, Whisper, FFmpeg, yt-dlp, GPT-4, PyTorch, SentenceTransformer",
        fr: "SUBSENSE est une application web complète pour analyser en profondeur des vidéos Instagram. L'utilisateur fournit un lien vidéo et la langue parlée ; l'IA télécharge la vidéo, en extrait l'audio, puis génère une transcription fidèle et multilingue. Ensuite, des modèles de traitement du langage naturel évaluent les personnalités des interlocuteurs et le contenu de la vidéo.\n\n**Technologies utilisées :** FastAPI, React, Whisper, FFmpeg, yt-dlp, GPT-4, PyTorch, SentenceTransformer",
      },
      ghLink: "https://github.com/yanimohellebi26/instagram-video.git",
      collabLink:
        "https://github.com/yanimohellebi26/instagram-video/issues/new?assignees=&labels=collaboration&template=collaboration_request.md",
    },
    {
      id: "nutrimind",
      imgPath: nutrimindImg,
      title: {
        en: "NUTRI-MIND - Nutrition AI for Student Lifters",
        fr: "NUTRI-MIND – IA Nutritionnelle pour la Musculation Étudiante",
      },
      description: {
        en: "Developed an end-to-end application for budget-conscious strength athletes. The system computes daily macro targets from personal inputs, then automatically generates a weekly meal plan, a budget-aware shopping list, and straightforward recipes.\n\n**Tech stack:** FastAPI, React, Python, Pydantic, MVC, PostgreSQL, Docker",
        fr: "Développement d'une application complète destinée aux pratiquants de musculation avec budget serré. Le système calcule les besoins journaliers en macros à partir de paramètres individuels puis génère automatiquement un menu hebdomadaire optimisé, une liste de courses adaptée au budget, et des recettes simples.\n\n**Technologies utilisées :** FastAPI, React, Python, Pydantic, MVC, PostgreSQL, Docker",
      },
      ghLink: "https://github.com/yanimohellebi26/muscule_ia.git",
      collabLink:
        "https://github.com/yanimohellebi26/muscule_ia/issues/new?assignees=&labels=collaboration&template=collaboration_request.md",
    },
    {
      id: "rawview",
      imgPath: rawviewImg,
      title: {
        en: "RAWVIEW - A Disconnected Review Interface",
        fr: "RAWVIEW – Interface Philosophique d'Avis Déconnectés",
      },
      description: {
        en: "RAWVIEW delivers a review experience free from social influence. The architecture relies on a FastAPI backend tied to PostgreSQL and orchestrated with Docker. Custom NLP modules analyse user language to surface cognitive biases.\n\n**Tech stack:** SvelteKit, FastAPI, PostgreSQL, Hugging Face Transformers, PyTorch, Docker, Radix UI",
        fr: "RAWVIEW est une application web conçue pour offrir une expérience d'avis déconnectée de toute influence sociale. L'architecture repose sur un backend FastAPI connecté à une base PostgreSQL, le tout orchestré via Docker. Le système utilise des modules personnalisés en NLP pour analyser le langage des utilisateurs et détecter les biais cognitifs.\n\n**Technologies utilisées :** SvelteKit, FastAPI, PostgreSQL, HuggingFace Transformers, PyTorch, Docker, Radix UI",
      },
      ghLink: "https://github.com/yanimohellebi26/review.git",
      collabLink:
        "https://github.com/yanimohellebi26/review/issues/new?assignees=&labels=collaboration&template=collaboration_request.md",
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
