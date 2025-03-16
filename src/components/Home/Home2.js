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
              Passionné par l'informatique, je m’intéresse aux technologies émergentes et à leur impact.  
              <br />
              <br />
              Je développe des solutions principalement en utilisant :
              <b className="purple">JavaScript, React, Node.js, Python, Java, C, C++, SQL.</b>
              <br />
              Mon objectif est de **concevoir des systèmes performants et sécurisés** tout en approfondissant mon expertise en 
              <b className="purple"> intelligence artificielle et cybersécurité.</b>  
              <br />
              <br />
              Curieux et rigoureux, j’aime explorer de nouveaux outils et frameworks pour **optimiser mes projets et innover**.
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
              Contactez-moi et suivons-nous sur les réseaux !
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
