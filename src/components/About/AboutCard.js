import React from "react";
import { ImPointRight } from "react-icons/im";
import { useLanguage } from "../../context/LanguageContext";

function AboutCard() {
  const { language } = useLanguage();

  const copy = {
    en: {
      paragraphs: [
        (<>
          Hello! I'm <span className="text-brand-accent">Yani Mohellebi</span>, a
          <span className="text-brand-accent"> Master's student in Artificial Intelligence</span> at the
          <span className="text-brand-accent"> University of Burgundy</span> in Dijon, France.
        </>),
        (<>
          Currently working as an <span className="text-brand-accent">AI R&D Engineer Apprentice at Siemens DISW</span> in Lyon,
          I split my time between cutting-edge AI research and academic excellence.
          I develop end-to-end AI solutions combining advanced machine learning, NLP, Computer Vision,
          and intelligent agent architectures to solve complex industrial challenges.
        </>),
        (<>My areas of expertise include:</>),
      ],
      skills: [
        "Advanced AI/ML with TensorFlow, PyTorch, LangChain, LangGraph",
        "NLP & Computer Vision for industrial applications",
        "Full-stack development (FastAPI, React, Docker, REST APIs)",
        "Database management (SQL, Cypher, Flyway) and DevOps (Postman, OCaml)",
      ],
      quote: "Building intelligent systems that bridge AI research and real-world impact",
      footer: "Yani Mohellebi - Siemens DISW",
    },
    fr: {
      paragraphs: [
        (<>
          Bonjour ! Je suis <span className="text-brand-accent">Yani Mohellebi</span>, étudiant
          en <span className="text-brand-accent">Master Intelligence Artificielle</span> à
          l'<span className="text-brand-accent">Université de Bourgogne</span>, Dijon, France.
        </>),
        (<>
          Actuellement <span className="text-brand-accent">Ingénieur R&D IA en alternance chez Siemens DISW</span> à Lyon,
          je partage mon temps entre recherche en IA de pointe et excellence académique.
          Je développe des solutions d'IA complètes combinant machine learning avancé, NLP, Computer Vision
          et architectures d'agents intelligents pour résoudre des défis industriels complexes.
        </>),
        (<>Mes domaines d'expertise incluent :</>),
      ],
      skills: [
        "IA/ML avancée avec TensorFlow, PyTorch, LangChain, LangGraph",
        "NLP & Computer Vision pour applications industrielles",
        "Développement full-stack (FastAPI, React, Docker, REST APIs)",
        "Gestion de bases de données (SQL, Cypher, Flyway) et DevOps (Postman, OCaml)",
      ],
      quote: "Construire des systèmes intelligents qui relient recherche en IA et impact réel",
      footer: "Yani Mohellebi - Siemens DISW",
    },
  };

  const { paragraphs, skills, quote, footer } = copy[language] || copy.en;

  return (
    <div className="space-y-6 text-sm leading-relaxed text-brand-text/90 sm:text-base">
      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <React.Fragment key={index}>{paragraph}</React.Fragment>
        ))}
      </div>
      <ul className="grid gap-3 text-brand-text/80 sm:grid-cols-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-start gap-3">
            <ImPointRight className="mt-1 text-brand-accent" aria-hidden="true" />
            <span>{skill}</span>
          </li>
        ))}
      </ul>
      <p className="text-brand-accent/85">
        « {quote} »
      </p>
      <footer className="text-xs uppercase tracking-[0.45em] text-brand-muted/80">
        {footer}
      </footer>
    </div>
  );
}

export default AboutCard;
