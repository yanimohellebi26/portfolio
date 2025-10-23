import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/moi.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";

function Home2() {
  const { language } = useLanguage();
  const t = translations[language].home;

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t.welcomeTitle} <span className="purple">{t.portfolio}</span>
            </h1>
            <p className="home-about-body">
              {t.aboutBody1}
              <br />
              <br />
              {t.aboutBody2}
              <b className="purple"> {t.values}</b>
              <br />
              {t.aboutBody3} <b className="purple">{t.domains}</b>.
              <br />
              <br />
              {t.aboutBody4}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Yani Mohellebi" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{t.findMe}</h1>
            <p>
              {t.social}
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a href="https://github.com/yanimohellebi26" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://twitter.com/56740yani" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.linkedin.com/in/yani-m/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.instagram.com/yani._.mb" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a href="mailto:yanimohellebi@gmail.com" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
