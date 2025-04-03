import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import BlogCards from "./BlogCards";

function Blog() {
  const articles = [
    {
      title: "Bienvenue sur mon blog",
      description: "Introduction à mon espace de réflexion",
      content: "Je partagerai ici mes réflexions et idées sur différents sujets qui me passionnent. Restez à l'écoute pour de nouveaux articles !",
      date: "2024-04-03"
    },
    {
      title: "L'Intelligence Artificielle : Révolution ou Évolution ?",
      description: "Réflexions sur l'impact de l'IA dans notre société",
      content: "L'intelligence artificielle transforme notre monde à une vitesse sans précédent. De l'apprentissage automatique aux réseaux de neurones profonds, les avancées technologiques ouvrent de nouvelles perspectives fascinantes. Dans cet article, j'explore comment l'IA influence notre quotidien et ce que l'avenir pourrait nous réserver.",
      date: "2024-04-04"
    }
  ];

  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container>
        <h1 className="blog-heading">
          Mon <strong className="purple">Blog</strong>
        </h1>
        <p style={{ color: "white" }}>
          Découvrez mes réflexions et idées sur différents sujets qui me passionnent.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {articles.map((article, index) => (
            <Col md={4} className="blog-card" key={index}>
              <BlogCards
                title={article.title}
                description={article.description}
                content={article.content}
                date={article.date}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Blog; 