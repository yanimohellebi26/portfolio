import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Engagements from "./Engagements";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";

function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              {t.title} <strong className="purple">{t.titleHighlight}</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          {t.skills} <strong className="purple">{t.skillsHighlight}</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">{t.tools}</strong> {t.toolsText}
        </h1>
        <Toolstack />

        <Engagements />
      </Container>
    </Container>
  );
}

export default About;
