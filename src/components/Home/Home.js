import React from "react";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import pdf from "../../Assets/CV.pdf";
import Home2 from "./Home2";
import Type from "./Type";
import { useLanguage } from "../../context/LanguageContext";
import "../GlobalFuturistic.css";

function Home() {
  const { language } = useLanguage();
  const isFrench = language === "fr";

  return (
    <section id="home" className="section-futuristic relative overflow-hidden">
      <div className="floating-light floating-light-1" />
      <div className="cyber-grid-bg" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-28 lg:px-8 lg:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Hero content — staggered entrance */}
          <div className="space-y-8">
            {/* Role tag */}
            <p
              className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-brand-accent/25 bg-brand-accent/[0.07] px-4 py-1.5 text-xs font-medium tracking-wide text-brand-accent backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              {isFrench
                ? "Ingénieur R&D IA @ Siemens DISW"
                : "AI R&D Engineer @ Siemens DISW"}
            </p>

            {/* Name — the hero */}
            <h1
              className="animate-fade-in font-display text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "0.15s" }}
            >
              Yani{" "}
              <span className="text-gradient-futuristic inline-block">
                Mohellebi
              </span>
            </h1>

            {/* Typewriter — standalone, no box */}
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Type language={language} />
            </div>

            {/* Description — higher contrast */}
            <p
              className="animate-fade-in max-w-lg text-base leading-relaxed text-brand-text/90"
              style={{ animationDelay: "0.45s" }}
            >
              {isFrench
                ? "Étudiant en Master IA à l'Université de Bourgogne. Je développe des solutions d'intelligence artificielle innovantes qui transforment les défis complexes en opportunités concrètes."
                : "Master's student in AI at the University of Burgundy. I develop innovative artificial intelligence solutions that transform complex challenges into concrete opportunities."}
            </p>

            {/* CTA buttons */}
            <div
              className="animate-fade-in flex flex-wrap gap-4"
              style={{ animationDelay: "0.6s" }}
            >
              <Link to="/project" className="btn-gradient">
                {isFrench ? "Voir mes projets" : "View Projects"}
              </Link>
              <a
                href={pdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-brand-text backdrop-blur-sm transition hover:border-brand-accent/40 hover:bg-brand-accent/10 hover:text-white"
              >
                {isFrench ? "Télécharger le CV" : "Download CV"}
              </a>
            </div>
          </div>

          {/* Illustration — cleaner with single glow */}
          <div
            className="relative flex justify-center lg:justify-end animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative w-full max-w-md md:max-w-lg">
              <div
                className="absolute -inset-10 -z-10 rounded-[40px] bg-gradient-to-br from-brand-accent/30 via-purple-500/20 to-cyan-400/20 blur-3xl animate-float"
                aria-hidden="true"
              />
              <img
                src={homeLogo}
                alt={isFrench ? "Illustration IA" : "AI illustration"}
                fetchPriority="high"
                className="relative z-10 w-full rounded-[34px] object-cover shadow-[0_40px_100px_rgba(199,112,240,0.3)] border border-white/10"
              />
            </div>
          </div>
        </div>
      </div>
      <Home2 />
    </section>
  );
}

export default Home;
