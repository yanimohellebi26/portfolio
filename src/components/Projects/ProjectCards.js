import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank" className="mb-2">
            <BsGithub /> &nbsp; GitHub
          </Button>
        )}
        {props.title === "Détection de triche aux examens (vidéo)" && (
          <Button variant="success" href="https://github.com/yanimohellebi26/detection_triche/issues/new?assignees=&labels=collaboration&template=collaboration_request.md" target="_blank" className="mb-2 ms-2">
            🤝 Collaborer sur GitHub
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
