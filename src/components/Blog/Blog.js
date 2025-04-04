import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import BlogCards from "./BlogCards";
import "./BlogCards.css";

function Blog() {
  const articles = [
      {
        title: "NeutraView : Des avis objectifs pour des choix éclairés",
        description: "Un outil intelligent qui filtre les biais et révèle l'essence des œuvres",
        content: `Aujourd'hui, les plateformes débordent d'avis d'utilisateurs sur les livres, films et séries. Mais un problème majeur persiste : la majorité de ces critiques sont biaisées — influencées par les goûts personnels, les croyances, les tendances du moment ou le besoin d'aller dans le sens de la hype. Pourtant, quand on cherche à savoir si une œuvre mérite notre attention, on ne veut pas savoir si elle a "plu", mais **comment elle est écrite, structurée et pensée**.
    
    C'est là qu'intervient NeutraView.
    
    NeutraView a été conçu pour proposer une analyse réellement neutre d'une œuvre. En collectant des critiques issues de plusieurs sources, en détectant les tendances objectives qui reviennent (style d'écriture, profondeur des personnages, richesse du scénario...), et surtout en étudiant le **profil psychologique des utilisateurs** derrière chaque avis, la plateforme est capable de générer un **résumé intelligent et impartial**. Un résumé **sans spoilers**, qui vous donne envie de lire ou regarder sans rien gâcher.
    
    Mais ce n'est pas tout.
    
    NeutraView répond aussi à un second besoin trop souvent ignoré : **retrouver une œuvre qu'on a en tête mais dont on a oublié le nom**. Un livre, un anime ou un film avec "un héros qui devient méchant", "une histoire d'amour post-apocalyptique", ou "une autrice qui parle de reconstruction intérieure après un drame"... Tapez simplement cette idée dans notre moteur intelligent, et NeutraView vous proposera les œuvres correspondantes, avec un contexte, une ambiance, et ce que la communauté en pense.
    
    NeutraView n'est pas un simple moteur de recherche. C'est un **assistant culturel intelligent** qui respecte votre curiosité, valorise la qualité, et fait briller ce qui mérite vraiment d'être découvert.`,
        date: "2025-04-02",
        ghLink: "https://github.com/yanimohellebi26/NeutraView.git",
        imgPath: "/src/Assets/Blog/Bneutralview.png"
      },
      {
        title: "Recommandation Littéraire Intelligente : combler le vide après un bon livre",
        description: "Un programme qui comprend ce que vous avez aimé, pour mieux le retrouver ailleurs",
        content: `Tu refermes le dernier chapitre. Tu poses le livre. Et puis ce vide s'installe. Comme si tu venais de quitter un monde, des personnages, une ambiance… quelque chose qui comptait vraiment. Ce moment-là, on le connaît tous. C'est ce **besoin silencieux** de retrouver ce que l'on vient de perdre — pas un simple genre, ni un titre, mais **une sensation**.
    
    C'est pour répondre à ce manque que j'ai créé ce programme de recommandation de livres intelligent.
    
    Il ne te demande pas seulement le nom du livre. Il te demande aussi **ce que tu as aimé dedans** : l'univers ? le style ? le rythme ? un personnage en particulier ? Cette **couche de profondeur émotionnelle** est ce qui rend les recommandations vraiment pertinentes. Car parfois, ce n'est pas l'histoire elle-même qui nous touche, mais **la manière dont elle est racontée**.
    
    Ce que mon site te propose ensuite :
    - Une œuvre **populaire**, connue, qui ressemble à ton livre (pour te réancrer).
    - Une œuvre **moins connue**, mais qui colle **exactement à ce que tu as ressenti**.
    - Une recommandation basée sur **le personnage que tu as préféré**, en analysant sa **personnalité**, et en te proposant une autre œuvre avec un personnage très similaire.
    
    Ce n'est pas de la magie. C'est une forme de lecture augmentée, où l'intelligence artificielle ne remplace pas le lecteur — elle l'accompagne avec sensibilité.
    
    📚 Teste-le ici : [https://recommendation-livre.vercel.app/](https://recommendation-livre.vercel.app/)
    PS:ça prend un peu de temps à charger, mais ça vaut le coup.`,
        date: "2025-04-02",
        ghLink: "https://github.com/yanimohellebi26/recommendation-livre.git",
        imgPath: "/src/Assets/Blog/Brecommendation.png"
      },
      {
        title: "RAWVIEW : Repenser l'avis à l'ère de l'influence",
        description: "Un projet qui recentre l'utilisateur sur son ressenti pur, sans bruit social",
        content: `Sur la majorité des plateformes aujourd'hui, donner son avis sur une œuvre, c'est souvent jouer un rôle. 
    On veut être pertinent, drôle, populaire… ou simplement dans le ton de la majorité. 
    Mais cette dynamique sociale fausse tout. Car dès qu'un film est à la mode, il devient automatiquement "bon", 
    et dès qu'il passe sous les radars, il semble "oubliable". On se retrouve à aimer… ou à détester… 
    des choses qu'on n'a même pas encore expérimentées.
    
    RAWVIEW naît de ce constat.
    
    Ce projet a été pensé comme une expérience radicalement différente. 
    Ici, vous êtes confronté à une œuvre **sans aucun titre**, **sans aucun nom**, **sans aucune note**. 
    Vous ne savez pas si elle est adorée, haïe, tendance ou oubliée. Et c'est justement ce vide social qui permet 
    à votre avis d'exister de manière pure, authentique, **déconnectée du reste du monde**.
    
    Le but ? Vous faire retrouver **le plaisir brut du ressenti personnel**.
    
    Mais RAWVIEW ne s'arrête pas là. Après avoir donné votre avis, la plateforme vous dévoile ceux des autres — 
    non pas en fonction de leur popularité, mais de leur **diversité**. 
    Les opinions minoritaires mais intéressantes sont mises en avant. Les critiques trop influencées sont détectées. 
    Et surtout, un moteur d'analyse IA propose un **score de sincérité**, un **matching émotionnel**, 
    et un accès aux œuvres "sous-estimées" par la foule mais précieuses individuellement.
    
    RAWVIEW, c'est un projet philosophique autant que technique.  
    C'est une tentative de briser **l'effet bandwagon**, de redonner sa place à **la subjectivité consciente**, 
    et de faire de chaque avis un miroir intérieur, et non un écho collectif.
    
    L'expérience est immersive, silencieuse, presque intime.
    
    Et dans ce silence... c'est vous qui parlez.`,
        date: "2025-04-02",
        ghLink: "https://github.com/yanimohellebi26/review.git",
        imgPath: "/src/Assets/Blog/Brawview.png"
      },
      {
        title: "NUTRI-MIND : Manger pour progresser, même avec 30€",
        description: "Une IA conçue pour les pratiquants de musculation qui veulent gagner en masse sans perdre en budget ni en temps",
        content: `La plupart des applications nutritionnelles d'aujourd'hui savent compter : calories, protéines, glucides, lipides.  
      Elles vous donnent des chiffres… mais vous laissent seul face à un frigo vide, un budget limité, et zéro idée de repas.
      
      Et pourtant, **c'est là que les vrais problèmes commencent**.  
      Quand on est étudiant, motivé par ses objectifs en musculation, mais qu'on doit gérer les galères du quotidien :  
      peu de temps, peu d'argent, pas forcément l'envie ou les compétences pour cuisiner tous les jours.
      
      C'est à ce moment précis que NUTRI-MIND intervient.
      
      Ce projet ne se contente pas de vous dire combien de protéines vous devez manger.  
      Il **construit pour vous** une semaine complète de repas intelligents, optimisés pour vos besoins, vos goûts, vos contraintes…  
      et surtout **votre budget**. Vous avez 35€ pour la semaine ? Pas de souci.  
      L'IA vous propose une liste de courses personnalisée qui maximise vos apports macros — sans superflu, sans oubli, sans ruine.
      
      Chaque recette proposée est pensée pour être :
      - Simple à réaliser
      - Adaptée à vos intolérances
      - Équilibrée selon vos objectifs (prise de masse, sèche, maintien)
      - Réutilisable en meal prep
      
      NUTRI-MIND n'est pas un coach numérique. C'est un **partenaire stratégique** qui vous aide à progresser, même quand les conditions sont loin d'être idéales.
      
      Le but ?  
      Permettre à chaque pratiquant, qu'il soit débutant ou confirmé, de s'alimenter **efficacement**, **intelligemment**, **réaliste-ment**.  
      Sans excuses. Sans stress. Et avec des résultats.
      
      Parce qu'en musculation, on sait que l'effort à la salle ne sert à rien sans l'assiette qui va avec.  
      Et que manger bien, c'est aussi une compétence à développer.
      
      **NUTRI-MIND, c'est muscu + bouffe + cerveau.**  
      Et ça change tout.`,
        date: "2025-04-02",
        ghLink: "https://github.com/yanimohellebi26/muscule_ia.git",
        imgPath: "/src/Assets/Blog/Bnutri_mind.png"
      },
      {
        title: "SUBSENSE : Comprendre ce que disent les vidéos, vraiment.",
        description: "Une IA qui transcrit, analyse et résume les vidéos Instagram pour en extraire le sens profond et l'essentiel.",
        content: `Les réseaux sont pleins de vidéos qui parlent, expliquent, dénoncent, motivent.  
      Mais combien d'entre elles disent vraiment quelque chose d'utile ?
      
      SUBSENSE est une interface web qui vous permet de coller le lien d'une vidéo Instagram, de préciser la langue parlée…  
      et d'en obtenir **une analyse complète et intelligente**.
      
      Pas juste une transcription bête de ce qui a été dit.  
      Mais une vraie **lecture en profondeur** du contenu.
      
      - Une retranscription propre, fidèle, horodatée.
      - Un résumé du but de la vidéo : informer ? convaincre ? divertir ?
      - Une estimation de la **valeur informative réelle** (sous forme de pourcentage)
      - Une **analyse psychologique des interlocuteurs**, basée sur ce qu'ils expriment et comment ils le font
      
      SUBSENSE ne regarde pas une vidéo comme un humain pressé.  
      Il la **lit**, il la **décrypte**, il **met en lumière ce qu'il y a derrière les mots**.
      
      C'est un outil pour ceux qui veulent :
      - Gagner du temps sur des vidéos longues ou floues
      - Savoir si une vidéo vaut la peine d'être regardée
      - Étudier des débats, discours, interviews
      - Analyser la personnalité des créateurs de contenu
      
      Ce projet s'adresse autant aux curieux qu'aux chercheurs, aux créateurs de contenu qu'aux coachs, aux éducateurs qu'aux simples observateurs du monde numérique.
      
      **SUBSENSE, c'est l'œil critique de l'IA sur la vidéo brute.**  
      Pour comprendre ce qu'on regarde. Et mieux choisir ce qu'on écoute.`,
        date: "2025-04-02",
        ghLink: "https://github.com/yanimohellebi26/instagram-video.git",
        imgPath: "/src/Assets/Blog/Bsubsense.png"
      }
    ];
    

  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container>
        <h1 className="blog-heading" style={{ marginTop: "80px" }}>
          Mon <strong className="purple">Blog</strong>
        </h1>
        <div className="blog-container">
          {articles.map((article, index) => (
            <BlogCards
              key={index}
              title={article.title}
              description={article.description}
              content={article.content}
              date={article.date}
              ghLink={article.ghLink}
              imgPath={article.imgPath}
            />
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Blog; 