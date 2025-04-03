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
              description={`Développement d'une version multijoueur du jeu The Mind avec une communication réseau optimisée. Utilisation des sockets TCP pour la connexion des joueurs et gestion de la synchronisation via mutex. IA entraînée sur 10 000 parties avec XGBoost pour prédire le moment optimal de jeu. Interface réalisée en SDL2.

              Technologies utilisées : C, XGBoost, PyTorch, Sockets TCP, Mutex, SDL2`}
              ghLink="https://github.com/yanimohellebi26/the_mind"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spamImg}
              isBlog={false}
              title="Détecteur de Spam avec IA"
              description={`Création d'un bot Telegram intelligent pour filtrer les spams. Implémentation d'un modèle de régression logistique et vectorisation TF-IDF pour classifier les messages. Nettoyage et traitement des données, validation croisée et analyse des performances avec précision, rappel, et F1-score.

              Technologies utilisées : Python, Scikit-learn, Pandas, TF-IDF, Telegram API`}
              ghLink="https://github.com/yanimohellebi26/detecteur-spam.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drollImg}
              isBlog={false}
              title="Modernisation du Jeu DROL"
              description={`Refonte du jeu DROL avec mode multijoueur coopératif et compétitif. Gestion du réseau avec UDP pour assurer la fluidité et la synchronisation des états de jeu. Développement en Java sous GNU/Linux, avec optimisation de l'interface et de la gestion des événements.

              Technologies utilisées : Java, Swing, UDP, Linux`}
              ghLink="https://github.com/yanimohellebi26/DROL-GAME"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flowersImg}
              isBlog={false}
              title="Boutique en Ligne de Fleurs"
              description={`Développement d'un site e-commerce pour la vente de fleurs avec gestion des utilisateurs et vendeurs via une base de données SQLite. Projet réalisé dans le cadre du génie logiciel avec gestion collaborative sur GitLab, planification des tâches en équipe et réunions hebdomadaires pour suivre l'avancement.

              Technologies utilisées : HTML, CSS, PHP, SQLite, GitLab`}
              ghLink="https://github.com/yanimohellebi26/boutique-roses.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cheatImg}
              isBlog={false}
              title="Détection de triche aux examens (vidéo)"
              description={`Création d'un système de détection de triche aux examens basé sur la vidéo. Utilisation de modèles de détection de mouvement et d'analyse d'activité visuelle pour repérer les comportements suspects. Système extensible avec une future intégration de la détection audio. Déployable via une interface web.
              
              Technologies utilisées : OpenCV, PyTorch, FastAPI, JavaScript, HTML`}
              ghLink="https://github.com/yanimohellebi26/detection_triche.git"
              collabLink="https://github.com/yanimohellebi26/detection_triche/issues/new?assignees=&labels=collaboration&template=collaboration_request.md"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={neutraviewImg}
              isBlog={false}
              title="NeutraView - Analyse Neutre d'Avis Culturels"
              description={`Développement complet d'une plateforme web pour analyser les avis de livres, films ou séries. Le système intègre des modules d'IA pour effectuer des résumés objectifs, détecter les sentiments, et établir un profil psychologique des utilisateurs à partir de leurs anciens avis. L'architecture est modulaire et documentée, avec gestion des appels via un proxy Vite/React et déploiement en conteneurs.

              Technologies utilisées : FastAPI, React, OpenAI API, Hugging Face Transformers, PyTorch, PostgreSQL, Docker`}
              ghLink="https://github.com/yanimohellebi26/NeutraView.git"
              collabLink="https://github.com/yanimohellebi26/NeutraView/issues/new?assignees=&labels=collaboration&template=collaboration_request.md"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={livreRecoImg}
              isBlog={false}
              title="Recommandation Intelligente de Livres"
              description={`Développement d'un site de recommandation littéraire personnalisé où l'utilisateur entre le titre d'un livre et ce qu'il a préféré dedans. L'IA analyse les émotions transmises par l'œuvre, le profil du personnage principal et propose des recommandations personnalisées.

              Technologies utilisées : React, OpenAI API, Emotion Detection, Tailwind CSS`}
              demoLink="https://recommendation-livre.vercel.app/"
              ghLink="https://github.com/yanimohellebi26/recommendation-livre.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={subsenseImg}
              isBlog={false}
              title="SUBSENSE - Analyse Intelligente de Vidéos Instagram"
              description={`SUBSENSE est une application web complète pour analyser en profondeur des vidéos Instagram. L'utilisateur fournit un lien vidéo et la langue parlée ; l'IA télécharge la vidéo, en extrait l'audio, puis génère une transcription fidèle et multilingue. Ensuite, des modèles de traitement du langage naturel évaluent les personnalités des interlocuteurs et le contenu de la vidéo.

              Technologies utilisées : FastAPI, React, Whisper, FFmpeg, yt-dlp, GPT-4, PyTorch, SentenceTransformer`}
              ghLink="https://github.com/yanimohellebi26/instagram-video.git"
              collabLink="https://github.com/yanimohellebi26/instagram-video/issues/new?assignees=&labels=collaboration&template=collaboration_request.md"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nutrimindImg}
              isBlog={false}
              title="NUTRI-MIND – IA Nutritionnelle pour la Musculation Étudiante"
              description={`Développement d'une application complète destinée aux pratiquants de musculation avec budget serré. Le système calcule les besoins journaliers en macros à partir de paramètres individuels puis génère automatiquement un menu hebdomadaire optimisé, une liste de courses adaptée au budget, et des recettes simples.

              Technologies utilisées : FastAPI, React, Python, Pydantic, MVC, PostgreSQL, Docker`}
              ghLink="https://github.com/yanimohellebi26/muscule_ia.git"
              collabLink="https://github.com/yanimohellebi26/muscule_ia/issues/new?assignees=&labels=collaboration&template=collaboration_request.md"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rawviewImg}
              isBlog={false}
              title="RAWVIEW – Interface Philosophique d'Avis Déconnectés"
              description={`RAWVIEW est une application web conçue pour offrir une expérience d'avis déconnectée de toute influence sociale. L'architecture repose sur un backend FastAPI connecté à une base PostgreSQL, le tout orchestré via Docker. Le système utilise des modules personnalisés en NLP pour analyser le langage des utilisateurs et détecter les biais cognitifs.

              Technologies utilisées : SvelteKit, FastAPI, PostgreSQL, HuggingFace Transformers, PyTorch, Docker, Radix UI`}
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
