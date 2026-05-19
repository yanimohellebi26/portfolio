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
          At <span className="text-brand-accent">Siemens Digital Industries Software</span> in Lyon,
          I independently designed and shipped <span className="text-brand-accent">AI GitLab Review</span> — a multi-agent
          code review system built with LangGraph, TypeScript, and MCP — now used by
          <span className="text-brand-accent"> 103 engineers across 14 teams</span>.
          I own the full product lifecycle: architecture, prompt engineering, CI/CD, deployment, and roadmap.
        </>),
        (<>My areas of expertise include:</>),
      ],
      skills: [
        "Multi-agent AI systems (LangGraph, LangChain, MCP, structured output with Zod)",
        "Deep Learning & Computer Vision (PyTorch, PointNet, 3D point clouds)",
        "Full-stack TypeScript/Node.js & Python (FastAPI, React, Docker)",
        "Production AI: trust scoring, model tiering, prompt engineering, LangSmith tracing",
      ],
      quote: "I build AI systems that ship to production — not just prototypes that work in demos",
      footer: "Yani Mohellebi - Siemens DISW, Lyon",
    },
    fr: {
      paragraphs: [
        (<>
          Bonjour ! Je suis <span className="text-brand-accent">Yani Mohellebi</span>, étudiant
          en <span className="text-brand-accent">Master Intelligence Artificielle</span> à
          l'<span className="text-brand-accent">Université de Bourgogne</span>, Dijon, France.
        </>),
        (<>
          Chez <span className="text-brand-accent">Siemens Digital Industries Software</span> à Lyon,
          j'ai conçu et déployé en autonomie complète <span className="text-brand-accent">AI GitLab Review</span> — un système
          multi-agents de revue de code construit avec LangGraph, TypeScript et MCP — utilisé par
          <span className="text-brand-accent"> 103 ingénieurs répartis sur 14 équipes</span>.
          Je gère l'intégralité du cycle produit : architecture, prompt engineering, CI/CD, déploiement et roadmap.
        </>),
        (<>Mes domaines d'expertise incluent :</>),
      ],
      skills: [
        "Systèmes IA multi-agents (LangGraph, LangChain, MCP, structured output avec Zod)",
        "Deep Learning & Computer Vision (PyTorch, PointNet, nuages de points 3D)",
        "Full-stack TypeScript/Node.js & Python (FastAPI, React, Docker)",
        "IA en production : trust scoring, model tiering, prompt engineering, tracing LangSmith",
      ],
      quote: "Je construis des systèmes IA qui vont en production — pas des prototypes qui marchent en démo",
      footer: "Yani Mohellebi - Siemens DISW, Lyon",
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
