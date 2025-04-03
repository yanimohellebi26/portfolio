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
  SiFastapi,
  SiDjango,
  SiFlask,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiAws,
  SiGooglecloud,
  SiTensorflow,
  SiPytorch,
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
    { id: "fastapi", icon: <SiFastapi />, name: "FastAPI" },
    { id: "django", icon: <SiDjango />, name: "Django" },
    { id: "flask", icon: <SiFlask />, name: "Flask" },
    { id: "nodejs", icon: <SiNodedotjs />, name: "Node.js" },
    { id: "express", icon: <SiExpress />, name: "Express" },
    { id: "postgresql", icon: <SiPostgresql />, name: "PostgreSQL" },
    { id: "redis", icon: <SiRedis />, name: "Redis" },
    { id: "docker", icon: <SiDocker />, name: "Docker" },
    { id: "kubernetes", icon: <SiKubernetes />, name: "Kubernetes" },
    { id: "aws", icon: <SiAws />, name: "AWS" },
    { id: "gcp", icon: <SiGooglecloud />, name: "Google Cloud" },
    { id: "tensorflow", icon: <SiTensorflow />, name: "TensorFlow" },
    { id: "pytorch", icon: <SiPytorch />, name: "PyTorch" },
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
