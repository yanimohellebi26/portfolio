import React from "react";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
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
      <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-6 text-base leading-relaxed text-brand-muted">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            {isFrench ? "Bienvenue sur mon " : "Welcome to my "}
            <span className="text-brand-accent">
              {isFrench ? "Portfolio" : "Portfolio"}
            </span>
          </h2>
          <p className="text-lg text-brand-text/90">
            {isFrench
              ? "En tant que développeur, je cherche à concevoir des expériences qui améliorent concrètement le quotidien."
              : "As a developer, I focus on creating experiences that genuinely elevate the way people live and learn."}
          </p>
          <div className="space-y-4 border-l border-white/10 pl-6 text-sm leading-relaxed text-brand-muted">
            {isFrench ? (
              <>
                <p>
                  En tant que développeur, je crois en l'importance de créer des solutions qui ont un impact réel sur la vie des gens.
                </p>
                <p>
                  Mon approche du développement est guidée par la <span className="text-brand-accent">simplicité</span>, l'<span className="text-brand-accent">efficacité</span> et l'<span className="text-brand-accent">accessibilité</span>.
                  Je m'efforce de rendre la technologie plus humaine et intuitive, en particulier dans des domaines comme l'éducation, la santé et le bien-être.
                </p>
                <p>
                  Au-delà du code, je m'intéresse à la philosophie des technologies émergentes et à leur impact sur la société. Participer à des hackathons et événements tech nourrit mon envie de partager, transmettre et innover collectivement.
                </p>
              </>
            ) : (
              <>
                <p>
                  I believe meaningful products emerge when technology meets empathy. Every project I touch aims to simplify complex workflows and deliver real value.
                </p>
                <p>
                  I champion <span className="text-brand-accent">simplicity</span>, <span className="text-brand-accent">efficiency</span>, and <span className="text-brand-accent">accessibility</span> and I concentrate on bringing humane experiences to education, health, and wellbeing ecosystems.
                </p>
                <p>
                  Beyond engineering, I explore the philosophy of emerging tech and regularly join hackathons to exchange ideas, experiment with daring concepts, and collaborate with inspiring people.
                </p>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 md:pl-8">
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
