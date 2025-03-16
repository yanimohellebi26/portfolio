import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { ImOffice, ImUsers } from "react-icons/im";

function Engagements() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="purple">Mes Engagements</strong>
      </h1>

      <Col md={6}>
        <Card className="quote-card-view">
          <Card.Body>
            <h3>
              <ImOffice /> Élu à la <span className="purple">CBFU</span>
            </h3>
            <p>
              En tant qu’élu à la Commission de la Formation et de la Vie Universitaire (CBFU),
              je contribue aux décisions académiques et à l'amélioration de la vie étudiante.
            </p>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6}>
        <Card className="quote-card-view">
          <Card.Body>
            <h3>
              <ImUsers /> Bénévole à <span className="purple">AGGO</span>
            </h3>
            <p>
              À travers mon bénévolat à AGGO, je participe à l’organisation 
              d'événements, ainsi qu'à des <strong>distributions alimentaires</strong> pour les étudiants en difficulté,
              afin de les soutenir dans leur quotidien.
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Engagements;
