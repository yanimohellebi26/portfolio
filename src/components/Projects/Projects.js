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
              description="Développement d'une version multijoueur du jeu The Mind avec une communication réseau optimisée. Utilisation des **sockets TCP** pour la connexion des joueurs et gestion de la synchronisation via **mutex**. IA entraînée sur 10 000 parties avec **XGBoost** pour prédire le moment optimal de jeu. Interface réalisée en **SDL2**."
              ghLink="https://github.com/yanimohellebi26/the_mind"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spamImg}
              isBlog={false}
              title="Détecteur de Spam avec IA"
              description="Création d'un **bot Telegram** intelligent pour filtrer les spams. Implémentation d'un modèle de **régression logistique** et vectorisation **TF-IDF** pour classifier les messages. Nettoyage et traitement des données, validation croisée et analyse des performances avec **précision, rappel, et F1-score**."
              ghLink="https://github.com/yanimohellebi26/detecteur-spam.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drollImg}
              isBlog={false}
              title="Modernisation du Jeu DROL"
              description="Refonte du jeu DROL avec **mode multijoueur coopératif et compétitif**. Gestion du réseau avec **UDP** pour assurer la fluidité et la synchronisation des états de jeu. Développement en **Java (Swing, UDP)** sous GNU/Linux, avec optimisation de l’interface et de la gestion des événements."
              ghLink="https://github.com/yanimohellebi26/DROL-GAME"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flowersImg}
              isBlog={false}
              title="Boutique en Ligne de Fleurs"
              description="Développement d'un site e-commerce pour la vente de fleurs avec gestion des **utilisateurs et vendeurs via une base de données SQLite**. Projet réalisé dans le cadre du **génie logiciel** avec **gestion collaborative sur GitLab**, planification des tâches en équipe et **réunions hebdomadaires** pour suivre l'avancement."
              ghLink="https://github.com/yanimohellebi26/boutique-roses.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cheatImg}
              isBlog={false}
              title="Détection de triche aux examens (vidéo)"
              description="Création d’un système de détection de triche aux examens basé sur la **vidéo**. Utilisation de **modèles de détection de mouvement** et d’analyse d’activité visuelle pour repérer les comportements suspects. Système extensible avec une future intégration de la **détection audio**. Déployable via une interface web."
              ghLink="https://github.com/yanimohellebi26/detection_triche.git"
              collabLink="https://github.com/yanimohellebi26/detection_triche/issues/new?assignees=&labels=collaboration&template=collaboration_request.md"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={neutraviewImg}
              isBlog={false}
              title="NeutraView - Analyse Neutre d'Avis Culturels"
              description="Développement complet d’une plateforme web utilisant **FastAPI, React et Docker** pour analyser les avis de livres, films ou séries. Le système intègre des modules d’**IA (OpenAI + Transformers)** pour effectuer des résumés objectifs, détecter les sentiments, et établir un **profil psychologique des utilisateurs** à partir de leurs anciens avis. L’architecture est modulaire et documentée, avec gestion des appels via un **proxy Vite/React** et déploiement prévu en conteneurs. Le frontend est dynamique et interagit avec des endpoints intelligents pour synthétiser et recommander des œuvres de manière contextualisée."
              ghLink="https://github.com/yanimohellebi26/NeutraView.git"
              collabLink="https://github.com/yanimohellebi26/NeutraView/issues/new?assignees=&labels=collaboration&template=collaboration_request.md"
           />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={livreRecoImg}
            isBlog={false}
            title="Recommandation Intelligente de Livres"
            description="Développement d’un site de **recommandation littéraire personnalisé** où l’utilisateur entre le **titre d’un livre et ce qu’il a préféré dedans**. L’IA analyse les émotions transmises par l’œuvre, le profil du personnage principal et propose : une œuvre populaire similaire, une œuvre moins connue qui correspond parfaitement au ressenti, et un personnage littéraire proche de celui aimé. Ce projet met en avant la **dimension émotionnelle de la lecture** via une interface minimaliste et efficace."
            demoLink="https://recommendation-livre.vercel.app/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
