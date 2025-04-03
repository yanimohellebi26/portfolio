import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
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

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets Récents</strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mindImg}
              isBlog={false}
              title="The Mind - IA et Communication Réseau"
              description={`Développement d'une version multijoueur du jeu The Mind avec une communication réseau optimisée. Utilisation des **sockets TCP** pour la connexion des joueurs et gestion de la synchronisation via **mutex**. IA entraînée sur 10 000 parties avec **XGBoost** pour prédire le moment optimal de jeu. Interface réalisée en **SDL2**.<br /><strong style={{ color: '#FFD700' }}>Technologies :</strong> C, XGBoost, PyTorch, Sockets TCP, Mutex, SDL2.`}
              ghLink="https://github.com/yanimohellebi26/the_mind"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spamImg}
              isBlog={false}
              title="Détecteur de Spam avec IA"
              description={`Création d'un **bot Telegram** intelligent pour filtrer les spams. Implémentation d'un modèle de **régression logistique** et vectorisation **TF-IDF** pour classifier les messages. Nettoyage et traitement des données, validation croisée et analyse des performances avec **précision, rappel, et F1-score**.<br /><strong style={{ color: '#FFD700' }}>Technologies :</strong> Python, Scikit-learn, Pandas, TF-IDF, Telegram API.`}
              ghLink="https://github.com/yanimohellebi26/detecteur-spam.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drollImg}
              isBlog={false}
              title="Modernisation du Jeu DROL"
              description={`Refonte du jeu DROL avec **mode multijoueur coopératif et compétitif**. Gestion du réseau avec **UDP** pour assurer la fluidité et la synchronisation des états de jeu. Développement en **Java (Swing, UDP)** sous GNU/Linux, avec optimisation de l’interface et de la gestion des événements.<br /><strong style={{ color: '#FFD700' }}>Technologies :</strong> Java, Swing, UDP, Linux.`}
              ghLink="https://github.com/yanimohellebi26/DROL-GAME"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flowersImg}
              isBlog={false}
              title="Boutique en Ligne de Fleurs"
              description={`Développement d'un site e-commerce pour la vente de fleurs avec gestion des **utilisateurs et vendeurs via une base de données SQLite**. Projet réalisé dans le cadre du **génie logiciel** avec **gestion collaborative sur GitLab**, planification des tâches en équipe et **réunions hebdomadaires** pour suivre l'avancement.<br /><strong style={{ color: '#FFD700' }}>Technologies :</strong> HTML, CSS, PHP, SQLite, GitLab.`}
              ghLink="https://github.com/yanimohellebi26/boutique-roses.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cheatImg}
              isBlog={false}
              title="Détection de triche aux examens (vidéo)"
              description={`Création d’un système de détection de triche aux examens basé sur la **vidéo**. Utilisation de **modèles de détection de mouvement** et d’analyse d’activité visuelle pour repérer les comportements suspects. Système extensible avec une future intégration de la **détection audio**. Déployable via une interface web.<br /><strong style={{ color: '#FFD700' }}>Technologies :</strong> OpenCV, PyTorch, FastAPI, JavaScript, HTML.`}
              ghLink="https://github.com/yanimohellebi26/detection_triche.git"
              collabLink="https://github.com/yanimohellebi26/detection_triche/issues/new?assignees=&labels=collaboration&template=collaboration_request.md"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={neutraviewImg}
              isBlog={false}
              title="NeutraView - Analyse Neutre d'Avis Culturels"
              description={`Développement complet d’une plateforme web utilisant **FastAPI, React et Docker** pour analyser les avis de livres, films ou séries. Le système intègre des modules d’**IA (OpenAI + Transformers)** pour effectuer des résumés objectifs, détecter les sentiments, et établir un **profil psychologique des utilisateurs** à partir de leurs anciens avis. L’architecture est modulaire et documentée, avec gestion des appels via un **proxy Vite/React** et déploiement prévu en conteneurs. Le frontend est dynamique et interagit avec des endpoints intelligents pour synthétiser et recommander des œuvres de manière contextualisée.<br /><strong style={{ color: '#FFD700' }}>Technologies :</strong> FastAPI, React, OpenAI API, Hugging Face Transformers, PyTorch, PostgreSQL, Docker.`}
              ghLink="https://github.com/yanimohellebi26/NeutraView.git"
              collabLink="https://github.com/yanimohellebi26/NeutraView/issues/new?assignees=&labels=collaboration&template=collaboration_request.md"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={livreRecoImg}
              isBlog={false}
              title="Recommandation Intelligente de Livres"
              description={`Développement d’un site de **recommandation littéraire personnalisé** où l’utilisateur entre le **titre d’un livre et ce qu’il a préféré dedans**. L’IA analyse les émotions transmises par l’œuvre, le profil du personnage principal et propose : une œuvre populaire similaire, une œuvre moins connue qui correspond parfaitement au ressenti, et un personnage littéraire proche de celui aimé. Ce projet met en avant la **dimension émotionnelle de la lecture** via une interface minimaliste et efficace.<br /><strong style={{ color: '#FFD700' }}>Technologies :</strong> React, OpenAI API, Emotion Detection, Tailwind CSS.`}
              demoLink="https://recommendation-livre.vercel.app/"
              ghLink="https://github.com/yanimohellebi26/recommendation-livre.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={subsenseImg}
              isBlog={false}
              title="SUBSENSE - Analyse Intelligente de Vidéos Instagram"
              description={`SUBSENSE est une application web complète développée avec **FastAPI, React et Whisper** pour analyser en profondeur des vidéos Instagram. L’utilisateur fournit un lien vidéo et la langue parlée ; l’IA télécharge la vidéo via **yt-dlp**, en extrait l’audio avec **FFmpeg**, puis génère une **transcription fidèle et multilingue** grâce à **Whisper (OpenAI)**. Ensuite, des modèles de **traitement du langage naturel (GPT-4 + SentenceTransformer)** évaluent les personnalités des interlocuteurs, le but de la vidéo, et son **taux de valeur informative**. L’architecture est modulaire, orientée API, avec un front dynamique qui interagit avec le back-end pour chaque étape du pipeline IA.<br /><strong style={{ color: '#FFD700' }}>Technologies :</strong> FastAPI, React, Whisper, FFmpeg, yt-dlp, GPT-4, PyTorch, SentenceTransformer.`}
              ghLink="https://github.com/yanimohellebi26/instagram-video.git"
              collabLink="https://github.com/yanimohellebi26/instagram-video/issues/new?assignees=&labels=collaboration&template=collaboration_request.md"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nutrimindImg}
              isBlog={false}
              title="NUTRI-MIND – IA Nutritionnelle pour la Musculation Étudiante"
              description={`Développement d’une **application complète (FastAPI + React)** destinée aux pratiquants de musculation avec budget serré. Le système calcule les **besoins journaliers en macros** (TDEE, protéines, glucides, lipides) à partir de paramètres individuels (âge, poids, taille, objectif, intolérances) puis génère automatiquement :  • un **menu hebdomadaire optimisé**,  • une **liste de courses adaptée au budget**,  • et des **recettes simples** basées sur ces aliments.  L’architecture est construite en **modèle MVC**, avec un backend Python/FastAPI modulaire, une API REST, des modèles Pydantic pour la validation des entrées, et un système de génération dynamique de menus via des services personnalisés.  Le front React est relié via Axios avec gestion d’états et vue tableau. Un futur déploiement Docker + hébergement sur Vercel/Render est prévu.<br /><strong style={{ color: '#FFD700' }}>Technologies :</strong> FastAPI, React, Python, Pydantic, MVC, PostgreSQL, Docker.`}
              ghLink="https://github.com/yanimohellebi26/muscule_ia.git"
              collabLink="https://github.com/yanimohellebi26/muscule_ia/issues/new?assignees=&labels=collaboration&template=collaboration_request.md"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rawviewImg}
              isBlog={false}
              title="RAWVIEW – Interface Philosophique d'Avis Déconnectés"
              description={`RAWVIEW est une application web conçue avec **SvelteKit** pour offrir une expérience d’avis déconnectée de toute influence sociale. L’architecture repose sur un backend **FastAPI** connecté à une base **PostgreSQL**, le tout orchestré via **Docker**. Côté IA, le système utilise des modules personnalisés en **NLP (Transformers)** pour analyser le langage des utilisateurs, détecter les biais cognitifs, et proposer un **score de sincérité**. Les pages sont dynamiques, pensées autour de l’introspection, avec une UI immersive stylisée sans Tailwind, combinant **Radix UI** et animations Svelte. Le projet est fullstack, modulaire, avec une communication API fluide entre le front et le back, et prêt à être déployé sur des services comme **Render** ou **Railway**.<br /><strong style={{ color: '#FFD700' }}>Technologies :</strong> SvelteKit, FastAPI, PostgreSQL, HuggingFace Transformers, PyTorch, Docker, Radix UI.`}
              ghLink="https://github.com/yanimohellebi26/review.git"
              collabLink="https://github.com/yanimohellebi26/review/issues/new?assignees=&labels=collaboration&template=collaboration_request.md"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
