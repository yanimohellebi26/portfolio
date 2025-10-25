import React from "react";
import { ImPointRight } from "react-icons/im";
import { useLanguage } from "../../context/LanguageContext";

function AboutCard() {
  const { language } = useLanguage();

  const copy = {
    en: {
      paragraphs: [
        (<>
          Hello! I'm <span className="text-brand-accent">Yani Mohellebi</span>, a final-year
          Computer Science undergraduate at the
          <span className="text-brand-accent"> University of Burgundy</span> in Dijon, France.
        </>),
        (<>
          I specialize in data processing and artificial intelligence, and I build
          end-to-end web solutions that combine data pipelines, AI models, and
          polished user experiences. My projects span video analytics, smart
          recommendations, student nutrition coaching, and more - all showcasing
          my ability to adapt to new contexts and needs.
        </>),
        (<>My areas of expertise include:</>),
      ],
      skills: [
        "Data analysis and processing with Python and Pandas",
        "Designing AI models (NLP, Computer Vision)",
        "Full-stack development (FastAPI, React, Svelte)",
        "Deployment and orchestration (Docker, CI/CD)",
      ],
      quote: "Turning data into intelligent and accessible solutions",
      footer: "Yani Mohellebi",
    },
    fr: {
      paragraphs: [
        (<>
          Bonjour ! Je suis <span className="text-brand-accent">Yani Mohellebi</span>, étudiant
          en dernière année de <span className="text-brand-accent">Licence Informatique</span> à
          l'<span className="text-brand-accent">Université de Bourgogne</span>, Dijon, France.
        </>),
        (<>
          Spécialisé dans le traitement des données et l'intelligence artificielle,
          je développe des solutions web complètes qui intègrent analyse de données,
          modèles d'IA et interfaces utilisateur modernes. Mes projets couvrent un
          large éventail de domaines : analyse de vidéos, recommandation de contenu,
          nutrition intelligente, et bien d'autres, démontrant ma capacité à
          m'adapter à différents contextes et besoins.
        </>),
        (<>Mes domaines d'expertise incluent :</>),
      ],
      skills: [
        "Analyse et traitement de données avec Python/Pandas",
        "Développement de modèles d'IA (NLP, Computer Vision)",
        "Développement full-stack (FastAPI, React, Svelte)",
        "Déploiement et orchestration (Docker, CI/CD)",
      ],
      quote: "Transformer les données en solutions intelligentes et accessibles",
      footer: "Yani Mohellebi",
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
