import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/moi.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Bienvenue sur mon <span className="purple"> Portfolio</span>
            </h1>
            <p className="home-about-body">
              En tant que développeur, je crois en l'importance de créer des solutions qui ont un impact réel sur la vie des gens. 
              <br />
              <br />
              Mon approche du développement est guidée par :
              <b className="purple"> la simplicité, l'efficacité et l'accessibilité</b>
              <br />
              Je m'efforce de rendre la technologie plus humaine et intuitive, en particulier dans des domaines comme <b className="purple">l'éducation, la santé et le bien-être</b>.
              <br />
              <br />
              Au-delà du code, je m'intéresse à la philosophie des technologies émergentes et à leur impact sur la société. Je participe activement à des hackathons et des événements tech pour échanger des idées et collaborer sur des projets innovants.
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
            <h1>Retrouvez-moi sur</h1>
            <p>
              Je suis toujours ouvert aux discussions sur l'innovation technologique et les projets collaboratifs !
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
