import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiLinux,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { id: "vscode", icon: <SiVisualstudiocode /> },
    { id: "postman", icon: <SiPostman /> },
    { id: "heroku", icon: <SiHeroku /> },
    { id: "linux", icon: <SiLinux /> },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool) => (
        <Col xs={4} md={2} className="tech-icons" key={tool.id}>
          {tool.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
