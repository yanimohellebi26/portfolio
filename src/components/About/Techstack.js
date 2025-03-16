import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiC,
  SiPython,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiMysql,
  SiGit,
} from "react-icons/si";

function Techstack() {
  const techs = [
    { id: "c", icon: <SiC /> },
    { id: "python", icon: <SiPython /> },
    { id: "javascript", icon: <SiJavascript /> },
    { id: "react", icon: <SiReact /> },
    { id: "mongodb", icon: <SiMongodb /> },
    { id: "mysql", icon: <SiMysql /> },
    { id: "git", icon: <SiGit /> },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech) => (
        <Col xs={4} md={2} className="tech-icons" key={tech.id}>
          {tech.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
