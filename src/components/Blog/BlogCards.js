import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function BlogCards(props) {
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
    <Card className="blog-card-view" style={{
      background: "linear-gradient(135deg, rgba(89, 37, 192, 0.8) 0%, rgba(50, 30, 70, 0.8) 100%)",
      border: "1px solid rgba(145, 77, 161, 0.3)",
      backdropFilter: "blur(10px)",
      borderRadius: "15px"
    }}>
      <Card.Body>
        <Card.Title style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}>{props.title}</Card.Title>
        <Card.Text style={{ color: "white", textAlign: "justify", marginTop: "1rem" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ color: "white", textAlign: "justify", marginTop: "1rem" }}>
          {linkInfo ? linkInfo.content : props.content}
        </Card.Text>
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
              marginTop: "1rem",
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
        <Card.Text style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.8rem", marginTop: "1rem" }}>
          Publié le: {props.date}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BlogCards; 