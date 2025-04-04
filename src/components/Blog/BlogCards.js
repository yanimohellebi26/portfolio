import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import "./BlogCards.css";

function BlogCards(props) {
  // Fonction pour formater le texte avec style particulier pour les phrases entre **
  const formatContent = (content) => {
    const parts = content.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        const text = part.slice(2, -2); // Enlever les **
        return (
          <span
            key={index}
            style={{
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            {text}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  // Fonction pour extraire le lien du contenu
  const extractLink = (content) => {
    const linkRegex = /\[(.*?)\]\((.*?)\)/;
    const match = content.match(linkRegex);
    if (match) {
      return {
        text: match[1],
        url: match[2],
        content: content.replace(linkRegex, "").trim(),
      };
    }
    return null;
  };

  const linkInfo = extractLink(props.content);

  return (
    <Card
      className="blog-card-view hover-effect"
      style={{
        background: "linear-gradient(135deg, rgba(89, 37, 192, 0.8), rgba(50, 30, 70, 0.8))",
        border: "1px solid rgba(145, 77, 161, 0.3)",
        borderRadius: "15px",
      }}
    >
      <div className="card-img-container">
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt={props.title}
        />
      </div>
      <Card.Body>
        <Card.Title className="card-title">{props.title}</Card.Title>
        <Card.Text className="card-description">{props.description}</Card.Text>
        {/* Contenu détaillé masqué par défaut */}
        <div className="card-content">
          <Card.Text style={{ marginBottom: "1rem" }}>
            {formatContent(props.content)}
          </Card.Text>
          <div className="card-buttons d-flex gap-2">
            {linkInfo && (
              <Button
                href={linkInfo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-btn"
              >
                {linkInfo.text}
              </Button>
            )}
            {props.ghLink && (
              <Button
                href={props.ghLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                <BsGithub /> GitHub
              </Button>
            )}
          </div>
          <Card.Text className="publication-date">Publié le: {props.date}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BlogCards;