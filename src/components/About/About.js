import React from "react";
import Engagements from "./Engagements";
import Techstack from "./Techstack";
import Experience from "./Experience";
import Toolstack from "./Toolstack";
import { useLanguage } from "../../context/LanguageContext";
import "../GlobalFuturistic.css";

function About() {
  const { language } = useLanguage();

  const copy = {
    en: {
      skills: { lead: "Professional", highlight: "Skills" },
      tools: { lead: "Tools", tail: "I use" },
    },
    fr: {
      skills: { lead: "Compétences", highlight: "Professionnelles" },
      tools: { lead: "Outils", tail: "que j'utilise" },
    },
  };

  const { skills, tools } = copy[language] || copy.en;

  return (
    <section id="about" className="section-futuristic">
      {/* Lumières flottantes */}
      <div className="floating-light floating-light-1" />
      <div className="floating-light floating-light-2" />
      <div className="floating-light floating-light-3" />
      <div className="cyber-grid-bg" />
      
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        {/* Sections avec animations */}
        <div className="space-y-16">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              {skills.lead} <span className="text-gradient-futuristic">{skills.highlight}</span>
            </h2>
            <Techstack />
          </div>

          <div className="space-y-6 animate-fade-in-delay" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              <span className="text-gradient-futuristic">{tools.lead}</span> {tools.tail}
            </h2>
            <Toolstack />
          </div>

          <div className="space-y-6 animate-fade-in-delay" style={{ animationDelay: '0.2s' }}>
            <Experience />
          </div>

          <div className="animate-fade-in-delay" style={{ animationDelay: '0.3s' }}>
            <Engagements />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
