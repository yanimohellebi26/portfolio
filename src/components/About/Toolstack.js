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
    { id: "vscode", icon: <SiVisualstudiocode />, name: "VS Code" },
    { id: "postman", icon: <SiPostman />, name: "Postman" },
    { id: "heroku", icon: <SiHeroku />, name: "Heroku" },
    { id: "linux", icon: <SiLinux />, name: "Linux" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool) => (
        <Col xs={4} md={2} className="tech-icons" key={tool.id}>
          {tool.icon}
          <p className="tech-name">{tool.name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
