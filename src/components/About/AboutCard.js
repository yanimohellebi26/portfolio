import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour ! Je suis <span className="purple">Yani Mohellebi</span>,
            étudiant en dernière année de <span className="purple">Licence Informatique</span>
            à l'<span className="purple">Université de Bourgogne</span>, Dijon, France.
            <br /><br />
            Spécialisé dans le traitement des données et l'intelligence artificielle, je développe des solutions web complètes qui intègrent analyse de données, modèles d'IA et interfaces utilisateur modernes. Mes projets couvrent un large éventail de domaines : analyse de vidéos, recommandation de contenu, nutrition intelligente, et bien d'autres, démontrant ma capacité à m'adapter à différents contextes et besoins.
            <br /><br />
            Mes domaines d'expertise incluent :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Analyse et traitement de données avec Python/Pandas
            </li>
            <li className="about-activity">
              <ImPointRight /> Développement de modèles d'IA (NLP, Computer Vision)
            </li>
            <li className="about-activity">
              <ImPointRight /> Développement full-stack (FastAPI, React, Svelte)
            </li>
            <li className="about-activity">
              <ImPointRight /> Déploiement et orchestration (Docker, CI/CD)
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }}>
            « Transformer les données en solutions intelligentes et accessibles »
          </p>
          <footer className="blockquote-footer">Yani Mohellebi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
