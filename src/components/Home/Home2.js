import React from "react";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";
import myImg from "../../Assets/moi.png";
import { useLanguage } from "../../context/LanguageContext";
import "../GlobalFuturistic.css";

function Home2({ language: languageOverride }) {
  const { language: contextLanguage } = useLanguage();
  const language = languageOverride || contextLanguage || "en";
  const isFrench = language === "fr";
  const socials = [
    {
      href: "https://github.com/yanimohellebi26",
      label: "GitHub",
      icon: <AiFillGithub />,
    },
    {
      href: "https://twitter.com/56740yani",
      label: "Twitter",
      icon: <AiOutlineTwitter />,
    },
    {
      href: "https://www.linkedin.com/in/yani-m/",
      label: "LinkedIn",
      icon: <FaLinkedinIn />,
    },
    {
      href: "https://www.instagram.com/yani._.mb",
      label: "Instagram",
      icon: <AiFillInstagram />,
    },
    {
      href: "mailto:yanimohellebi@gmail.com",
      label: "Email",
      icon: <AiOutlineMail />,
    },
  ];

  return (
    <div id="about" className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 lg:px-8">
      <div className="grid items-start gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-8 text-base leading-relaxed">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            {isFrench ? "À propos de " : "About "}
            <span className="text-brand-accent">
              {isFrench ? "moi" : "me"}
            </span>
          </h2>

          {/* Vision et mission */}
          <p className="text-lg text-brand-text/90 leading-relaxed">
            {isFrench ? (
              <>
                Passionné par l'intersection entre <span className="text-brand-accent font-medium">recherche académique</span> et <span className="text-brand-accent font-medium">applications industrielles</span>, 
                je travaille à créer des systèmes d'IA qui ne sont pas seulement techniquement avancés, mais qui résolvent de vrais problèmes.
              </>
            ) : (
              <>
                Passionate about the intersection between <span className="text-brand-accent font-medium">academic research</span> and <span className="text-brand-accent font-medium">industrial applications</span>, 
                I work to create AI systems that are not only technically advanced, but solve real problems.
              </>
            )}
          </p>

          {/* Domaines d'expertise */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
              <span className="text-brand-accent">⚡</span>
              {isFrench ? "Expertise technique" : "Technical expertise"}
            </h3>
            <ul className="grid gap-3 text-sm text-brand-text/80 sm:grid-cols-2">
              {isFrench ? (
                <>
                  <li className="flex items-start gap-3">
                    <ImPointRight className="mt-1 flex-shrink-0 text-brand-accent" />
                    <span>Machine Learning & Deep Learning avancés</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ImPointRight className="mt-1 flex-shrink-0 text-brand-accent" />
                    <span>Architectures d'agents intelligents (LangChain, LangGraph)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ImPointRight className="mt-1 flex-shrink-0 text-brand-accent" />
                    <span>NLP & Computer Vision pour l'industrie</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ImPointRight className="mt-1 flex-shrink-0 text-brand-accent" />
                    <span>Développement full-stack & APIs REST</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-start gap-3">
                    <ImPointRight className="mt-1 flex-shrink-0 text-brand-accent" />
                    <span>Advanced Machine Learning & Deep Learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ImPointRight className="mt-1 flex-shrink-0 text-brand-accent" />
                    <span>Intelligent agent architectures (LangChain, LangGraph)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ImPointRight className="mt-1 flex-shrink-0 text-brand-accent" />
                    <span>NLP & Computer Vision for industry</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ImPointRight className="mt-1 flex-shrink-0 text-brand-accent" />
                    <span>Full-stack development & REST APIs</span>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Approche */}
          <div className="space-y-4 rounded-lg border-l-4 border-brand-accent/40 bg-gradient-to-r from-brand-accent/5 to-transparent pl-6 py-4">
            <p className="text-sm leading-relaxed text-brand-muted">
              <span className="text-brand-accent font-semibold">
                {isFrench ? "Mon approche :" : "My approach:"}
              </span>{" "}
              {isFrench
                ? "Je crois en l'importance de la rigueur technique combinée à une vision pragmatique. Chaque ligne de code doit servir un objectif concret et apporter de la valeur."
                : "I believe in the importance of technical rigor combined with a pragmatic vision. Every line of code must serve a concrete purpose and bring value."}
            </p>
          </div>

          {/* Citation */}
          <blockquote className="relative rounded-xl border border-brand-accent/20 bg-gradient-to-br from-brand-accent/5 to-transparent p-6 italic text-brand-accent/90">
            <div className="absolute -left-2 -top-2 text-5xl text-brand-accent/20">"</div>
            <p className="relative z-10 text-base">
              {isFrench
                ? "L'intelligence artificielle n'est pas une fin en soi, mais un moyen de résoudre les défis de demain."
                : "Artificial intelligence is not an end in itself, but a means to solve tomorrow's challenges."}
            </p>
          </blockquote>
        </div>

        {/* Photo et réseaux sociaux */}
        <div className="flex flex-col items-center justify-start gap-8 md:pl-8 lg:sticky lg:top-24">
          <Tilt className="w-full max-w-xs">
            <div className="relative">
              <div
                className="absolute -inset-7 -z-10 rounded-full bg-gradient-to-br from-brand-accent/25 via-transparent to-cyan-400/25 blur-2xl"
                aria-hidden="true"
              />
              <img
                src={myImg}
                alt="Yani Mohellebi"
                className="w-full rounded-[32px] object-cover shadow-[0_35px_80px_rgba(16,8,40,0.55)]"
              />
            </div>
          </Tilt>
          <div className="w-full space-y-3">
            <h3 className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">
              {isFrench ? "Retrouvez-moi" : "Let’s connect"}
            </h3>
            <ul className="flex flex-wrap justify-center gap-3 text-lg text-brand-text">
              {socials.map(({ href, label, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white transition hover:border-brand-accent/40 hover:bg-brand-accent/15 hover:text-brand-accent"
                  >
                    <span className="sr-only">{label}</span>
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;
