import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { BsPlayFill } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>
        <div className="d-flex gap-2">
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp; GitHub
            </Button>
          )}
          {props.demoLink && (
            <Button 
              variant="success" 
              href={props.demoLink} 
              target="_blank"
              style={{
                background: "linear-gradient(135deg, #28a745 0%, #20c997 100%)",
                border: "none",
                boxShadow: "0 4px 15px rgba(40, 167, 69, 0.3)"
              }}
            >
              <BsPlayFill /> &nbsp; Voir la démo
            </Button>
          )}
          {props.collabLink && (
            <Button variant="info" href={props.collabLink} target="_blank">
              🤝 Collaborer
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
