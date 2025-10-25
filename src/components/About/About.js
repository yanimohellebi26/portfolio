import React from "react";
import Engagements from "./Engagements";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { useLanguage } from "../../context/LanguageContext";
import "../GlobalFuturistic.css";

function About() {
  const { language } = useLanguage();

  const copy = {
    en: {
      heading: { lead: "WHO", highlight: "AM I?" },
      skills: { lead: "Professional", highlight: "Skills" },
      tools: { lead: "Tools", tail: "I use" },
    },
    fr: {
      heading: { lead: "QUI", highlight: "SUIS JE?" },
      skills: { lead: "Compétences", highlight: "Professionnelles" },
      tools: { lead: "Outils", tail: "que j'utilise" },
    },
  };

  const { heading, skills, tools } = copy[language] || copy.en;

  return (
    <section id="about" className="section-futuristic">
      {/* Lumières flottantes */}
      <div className="floating-light floating-light-1" />
      <div className="floating-light floating-light-2" />
      <div className="floating-light floating-light-3" />
      <div className="cyber-grid-bg" />
      
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        {/* Carte principale avec animation */}
        <div className="glass-card-futuristic relative overflow-hidden border px-8 py-14 sm:px-12 lg:px-16 animate-fade-in">
          <div
            className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-brand-accent/20 blur-3xl animate-float"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-24 -bottom-10 h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl animate-float"
            style={{ animationDelay: '2s' }}
            aria-hidden="true"
          />
          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <h1 className="text-3xl font-semibold text-white sm:text-4xl">
                {heading.lead} <span className="text-gradient-futuristic">{heading.highlight}</span>
              </h1>
              <AboutCard />
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="image-container-futuristic relative w-full max-w-sm">
                <div
                  className="absolute -inset-10 -z-10 rounded-[36px] bg-gradient-to-br from-brand-accent/30 via-purple-500/20 to-cyan-400/25 blur-[90px] animate-float"
                  aria-hidden="true"
                />
                <img
                  src={laptopImg}
                  alt="Developer workspace illustration"
                  className="relative z-10 w-full rounded-[32px] object-cover shadow-[0_45px_120px_rgba(199,112,240,0.4)] border border-white/10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sections des compétences avec animations */}
        <div className="mt-20 space-y-16">
          <div className="space-y-6 animate-fade-in-delay">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              {skills.lead} <span className="text-gradient-futuristic">{skills.highlight}</span>
            </h2>
            <Techstack />
          </div>

          <div className="space-y-6 animate-fade-in-delay" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              <span className="text-gradient-futuristic">{tools.lead}</span> {tools.tail}
            </h2>
            <Toolstack />
          </div>

          <div className="animate-fade-in-delay" style={{ animationDelay: '0.4s' }}>
            <Engagements />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
