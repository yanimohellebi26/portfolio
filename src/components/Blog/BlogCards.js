import React from "react";
import Card from "react-bootstrap/Card";

function BlogCards(props) {
  return (
    <Card className="blog-card-view">
      <Card.Body>
        <Card.Title style={{ color: "white" }}>{props.title}</Card.Title>
        <Card.Text style={{ color: "white", textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ color: "white", textAlign: "justify" }}>
          {props.content}
        </Card.Text>
        <Card.Text style={{ color: "white", fontSize: "0.8rem" }}>
          Publié le: {props.date}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BlogCards; 