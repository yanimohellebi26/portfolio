import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiLinux,
  SiDocker,
  SiGit,
  SiGithub,
  SiGitlab,
  SiJira,
  SiTrello,
  SiSlack,
  SiDiscord,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { id: "vscode", icon: <SiVisualstudiocode />, name: "VS Code" },
    { id: "postman", icon: <SiPostman />, name: "Postman" },
    { id: "heroku", icon: <SiHeroku />, name: "Heroku" },
    { id: "linux", icon: <SiLinux />, name: "Linux" },
    { id: "docker", icon: <SiDocker />, name: "Docker" },
    { id: "git", icon: <SiGit />, name: "Git" },
    { id: "github", icon: <SiGithub />, name: "GitHub" },
    { id: "gitlab", icon: <SiGitlab />, name: "GitLab" },
    { id: "jira", icon: <SiJira />, name: "Jira" },
    { id: "trello", icon: <SiTrello />, name: "Trello" },
    { id: "slack", icon: <SiSlack />, name: "Slack" },
    { id: "discord", icon: <SiDiscord />, name: "Discord" },
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
