import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import BlogCards from "./BlogCards";

function Blog() {
  const articles = [
      {
        title: "NeutraView : Des avis objectifs pour des choix éclairés",
        description: "Un outil intelligent qui filtre les biais et révèle l'essence des œuvres",
        content: `Aujourd’hui, les plateformes débordent d’avis d’utilisateurs sur les livres, films et séries. Mais un problème majeur persiste : la majorité de ces critiques sont biaisées — influencées par les goûts personnels, les croyances, les tendances du moment ou le besoin d'aller dans le sens de la hype. Pourtant, quand on cherche à savoir si une œuvre mérite notre attention, on ne veut pas savoir si elle a "plu", mais **comment elle est écrite, structurée et pensée**.
    
    C’est là qu’intervient NeutraView.
    
    NeutraView a été conçu pour proposer une analyse réellement neutre d’une œuvre. En collectant des critiques issues de plusieurs sources, en détectant les tendances objectives qui reviennent (style d’écriture, profondeur des personnages, richesse du scénario...), et surtout en étudiant le **profil psychologique des utilisateurs** derrière chaque avis, la plateforme est capable de générer un **résumé intelligent et impartial**. Un résumé **sans spoilers**, qui vous donne envie de lire ou regarder sans rien gâcher.
    
    Mais ce n’est pas tout.
    
    NeutraView répond aussi à un second besoin trop souvent ignoré : **retrouver une œuvre qu’on a en tête mais dont on a oublié le nom**. Un livre, un anime ou un film avec "un héros qui devient méchant", "une histoire d’amour post-apocalyptique", ou "une autrice qui parle de reconstruction intérieure après un drame"... Tapez simplement cette idée dans notre moteur intelligent, et NeutraView vous proposera les œuvres correspondantes, avec un contexte, une ambiance, et ce que la communauté en pense.
    
    NeutraView n’est pas un simple moteur de recherche. C’est un **assistant culturel intelligent** qui respecte votre curiosité, valorise la qualité, et fait briller ce qui mérite vraiment d’être découvert.`,
        date: "2025-04-02"
      },
      {
        title: "Recommandation Littéraire Intelligente : combler le vide après un bon livre",
        description: "Un programme qui comprend ce que vous avez aimé, pour mieux le retrouver ailleurs",
        content: `Tu refermes le dernier chapitre. Tu poses le livre. Et puis ce vide s’installe. Comme si tu venais de quitter un monde, des personnages, une ambiance… quelque chose qui comptait vraiment. Ce moment-là, on le connaît tous. C’est ce **besoin silencieux** de retrouver ce que l’on vient de perdre — pas un simple genre, ni un titre, mais **une sensation**.
    
    C’est pour répondre à ce manque que j’ai créé ce programme de recommandation de livres intelligent.
    
    Il ne te demande pas seulement le nom du livre. Il te demande aussi **ce que tu as aimé dedans** : l’univers ? le style ? le rythme ? un personnage en particulier ? Cette **couche de profondeur émotionnelle** est ce qui rend les recommandations vraiment pertinentes. Car parfois, ce n’est pas l’histoire elle-même qui nous touche, mais **la manière dont elle est racontée**.
    
    Ce que mon site te propose ensuite :
    - Une œuvre **populaire**, connue, qui ressemble à ton livre (pour te réancrer).
    - Une œuvre **moins connue**, mais qui colle **exactement à ce que tu as ressenti**.
    - Une recommandation basée sur **le personnage que tu as préféré**, en analysant sa **personnalité**, et en te proposant une autre œuvre avec un personnage très similaire.
    
    Ce n’est pas de la magie. C’est une forme de lecture augmentée, où l’intelligence artificielle ne remplace pas le lecteur — elle l’accompagne avec sensibilité.
    
    📚 Teste-le ici : [https://recommendation-livre.vercel.app/](https://recommendation-livre.vercel.app/)
    PS:ça prend un peu de temps à charger, mais ça vaut le coup.`,
    
        date: "2025-04-02"
      }
    ];
    

  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container>
        <h1 className="blog-heading" style={{ marginTop: "80px" }}>
          Mon <strong className="purple">Blog</strong>
        </h1>
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