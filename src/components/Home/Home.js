import React from "react";
import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./Home2";
import Type from "./Type";
import { useLanguage } from "../../context/LanguageContext";
import "../GlobalFuturistic.css";

function Home() {
  const { language, toggleLanguage } = useLanguage();

  const copy = {
    en: {
      greeting: "Hello!",
      intro: "I AM",
      alt: "Home illustration",
      toggle: "Switch to French",
      toggleAria: "Switch language to French",
    },
    fr: {
      greeting: "Bonjour !",
      intro: "JE SUIS",
      alt: "Illustration Accueil",
      toggle: "Passer en anglais",
      toggleAria: "Changer la langue en anglais",
    },
  };

  const { greeting, intro, alt, toggle, toggleAria } = copy[language];

  return (
    <section id="home" className="section-futuristic relative overflow-hidden">
      {/* Lumières flottantes en arrière-plan */}
      <div className="floating-light floating-light-1" />
      <div className="floating-light floating-light-2" />
      <div className="cyber-grid-bg" />
      
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-32 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Contenu principal avec animations */}
          <div className="space-y-10 animate-fade-in">
            <div className="flex items-center justify-between gap-4">
              <p className="font-display text-xs uppercase tracking-[0.45em] text-brand-muted">
                {greeting}
                <span className="wave ml-3" role="img" aria-label="wave">
                  👋🏻
                </span>
              </p>
              <button
                type="button"
                className="btn-futuristic-global inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.3em]"
                onClick={toggleLanguage}
                aria-label={toggleAria}
                title={toggleAria}
              >
                <span aria-hidden="true" className="text-base">🌐</span>
                {toggle}
              </button>
            </div>

            <div className="space-y-6 text-left">
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                {intro}{" "}
                <span className="text-gradient-futuristic inline-block">
                  YANI MOHELLEBI
                </span>
              </h1>
              <div className="glass-card-futuristic border-l-4 border-brand-accent/60 bg-transparent backdrop-blur-sm pl-6 py-4">
                <Type language={language} />
              </div>
              <p className="max-w-xl text-sm text-brand-text/80 sm:text-base leading-relaxed">
                {language === "fr"
                  ? "Je conçois des expériences numériques qui relient l'intelligence artificielle aux besoins humains, avec une attention particulière aux détails et à l'accessibilité."
                  : "I craft digital experiences that connect thoughtful AI to real human needs, with a focus on detail and accessibility."}
              </p>
            </div>
          </div>

          {/* Image avec effets futuristes */}
          <div className="relative flex justify-center lg:justify-end animate-slide-in-right">
            <div className="image-container-futuristic relative w-full max-w-md md:max-w-lg">
              <div
                className="absolute -inset-12 -z-10 rounded-[40px] bg-gradient-to-br from-brand-accent/40 via-purple-500/30 to-cyan-400/30 opacity-80 blur-3xl animate-float"
                aria-hidden="true"
              />
              <div
                className="absolute -top-20 right-0 hidden h-40 w-40 rounded-full bg-brand-accent/40 blur-3xl lg:block animate-float"
                style={{ animationDelay: '1s' }}
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-20 left-8 hidden h-44 w-44 rounded-full bg-cyan-300/30 blur-3xl md:block animate-float"
                style={{ animationDelay: '2s' }}
                aria-hidden="true"
              />
              <img
                src={homeLogo}
                alt={alt}
                className="relative z-10 w-full rounded-[34px] object-cover shadow-[0_40px_120px_rgba(199,112,240,0.35)] border border-white/10"
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
