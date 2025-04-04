import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import "./BlogCards.css";

function BlogCards(props) {
  // Fonction pour formater le texte avec style particulier pour les phrases entre **
  const formatContent = (content) => {
    // Diviser le contenu en parties (texte normal et phrases entre **)
    const parts = content.split(/(\*\*[^*]+\*\*)/g);
    
    return parts.map((part, index) => {
      // Si la partie est entre **, enlever les ** et appliquer le style
      if (part.startsWith('**') && part.endsWith('**')) {
        const text = part.slice(2, -2); // Enlever les **
        return (
          <span
            key={index}
            style={{
              fontWeight: "bold",
              fontStyle: "italic"
            }}
          >
            {text}
          </span>
        );
      }
      // Sinon, retourner le texte normal
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
        content: content.replace(linkRegex, '').trim()
      };
    }
    return null;
  };

  const linkInfo = extractLink(props.content);

  return (
    <Card 
      className="blog-card-view" 
      style={{
        background: "linear-gradient(135deg, rgba(89, 37, 192, 0.8) 0%, rgba(50, 30, 70, 0.8) 100%)",
        border: "1px solid rgba(145, 77, 161, 0.3)",
        borderRadius: "15px",
      }}
    >
      <div className="card-img-container">
        <Card.Img 
          variant="top" 
          src={props.imgPath} 
          style={{ 
            height: "200px", 
            objectFit: "cover",
          }} 
        />
      </div>
      <Card.Body>
        <Card.Title className="card-title" style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}>
          {props.title}
        </Card.Title>
        <Card.Text className="card-description" style={{ color: "white", textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div className="card-content">
          <Card.Text style={{ 
            color: "white", 
            textAlign: "justify", 
            marginBottom: "1rem"
          }}>
            {formatContent(props.content)}
          </Card.Text>
          <div className="card-buttons d-flex gap-2">
            {linkInfo && (
              <Button
                href={linkInfo.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%)",
                  border: "none",
                  borderRadius: "25px",
                  padding: "10px 20px",
                  color: "white",
                  fontWeight: "bold",
                  transition: "transform 0.2s ease-in-out",
                  boxShadow: "0 4px 15px rgba(255, 107, 107, 0.3)"
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                {linkInfo.text}
              </Button>
            )}
            {props.ghLink && (
              <Button
                href={props.ghLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "linear-gradient(135deg, #333 0%, #555 100%)",
                  border: "none",
                  borderRadius: "25px",
                  padding: "10px 20px",
                  color: "white",
                  fontWeight: "bold",
                  transition: "transform 0.2s ease-in-out",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)"
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <BsGithub /> &nbsp; GitHub
              </Button>
            )}
          </div>
          <Card.Text style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.8rem", marginTop: "1rem" }}>
            Publié le: {props.date}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BlogCards; 