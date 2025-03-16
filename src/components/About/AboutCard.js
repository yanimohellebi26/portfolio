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
            Passionné par le développement en général, particulièrement par l'intelligence artificielle et la cybersécurité,
            je m'implique également dans la vie associative et étudiante : je suis élu à la
            <span className="purple"> CFVU (Commission de la Formation et de la Vie Universitaire)</span> et
            bénévole actif à l'<span className="purple">la FEBIA (Association étudiante de l'Université de Bourgogne)</span>.
            <br /><br />
            Quand je ne suis pas en train d'étudier ou de m'investir dans mes engagements associatifs, j'aime :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Lecture de livres et de blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Écriture et publication sur substack
            </li>
            <li className="about-activity">
              <ImPointRight /> Sport: Course à pied et Natation
            </li>
            <li className="about-activity">
              <ImPointRight /> participation à des hackathons et des CTF
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }}>
             « Toujours apprendre, partager et évoluer ! »
          </p>
          <footer className="blockquote-footer">Yani Mohellebi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
