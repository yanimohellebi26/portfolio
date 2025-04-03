import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiLinux,
  SiDocker,
  SiGithub,
  SiGitlab,
  SiJupyter,
  SiAnaconda,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { id: "vscode", icon: <SiVisualstudiocode />, name: "VS Code" },
    { id: "postman", icon: <SiPostman />, name: "Postman" },
    { id: "heroku", icon: <SiHeroku />, name: "Heroku" },
    { id: "linux", icon: <SiLinux />, name: "Linux" },
    { id: "docker", icon: <SiDocker />, name: "Docker" },
    { id: "github", icon: <SiGithub />, name: "GitHub" },
    { id: "gitlab", icon: <SiGitlab />, name: "GitLab" },
    { id: "jupyter", icon: <SiJupyter />, name: "Jupyter" },
    { id: "anaconda", icon: <SiAnaconda />, name: "Anaconda" },
    { id: "vercel", icon: <SiVercel />, name: "Vercel" },
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
