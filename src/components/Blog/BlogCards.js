import React from "react";
import Card from "react-bootstrap/Card";

function BlogCards(props) {
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
          {props.content}
        </Card.Text>
        <Card.Text style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.8rem", marginTop: "1rem" }}>
          Publié le: {props.date}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BlogCards; 