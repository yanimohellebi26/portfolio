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
  SiPytorch,
  SiTensorflow,
  SiFastapi,
  SiSvelte,
  SiDocker,
  SiPostgresql,
  SiPandas,
} from "react-icons/si";

function Techstack() {
  const techs = [
    { id: "c", icon: <SiC />, name: "C" },
    { id: "python", icon: <SiPython />, name: "Python" },
    { id: "javascript", icon: <SiJavascript />, name: "JavaScript" },
    { id: "react", icon: <SiReact />, name: "React" },
    { id: "mongodb", icon: <SiMongodb />, name: "MongoDB" },
    { id: "mysql", icon: <SiMysql />, name: "MySQL" },
    { id: "git", icon: <SiGit />, name: "Git" },
    { id: "pytorch", icon: <SiPytorch />, name: "PyTorch" },
    { id: "tensorflow", icon: <SiTensorflow />, name: "TensorFlow" },
    { id: "fastapi", icon: <SiFastapi />, name: "FastAPI" },
    { id: "svelte", icon: <SiSvelte />, name: "Svelte" },
    { id: "docker", icon: <SiDocker />, name: "Docker" },
    { id: "postgresql", icon: <SiPostgresql />, name: "PostgreSQL" },
    { id: "pandas", icon: <SiPandas />, name: "Pandas" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech) => (
        <Col xs={4} md={2} className="tech-icons" key={tech.id}>
          {tech.icon}
          <p className="tech-name">{tech.name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
