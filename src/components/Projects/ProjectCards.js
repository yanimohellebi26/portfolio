import React from "react";
import { BsGithub, BsPlayFill } from "react-icons/bs";
import { useLanguage } from "../../context/LanguageContext";

function ProjectCards({ imgPath, title, description, ghLink, demoLink, collabLink }) {
  const { language } = useLanguage();

  const labels = {
    en: {
      github: "GitHub",
      demo: "View demo",
      collaborate: "🤝 Collaborate",
    },
    fr: {
      github: "GitHub",
      demo: "Voir la démo",
      collaborate: "🤝 Collaborer",
    },
  };

  const text = labels[language] || labels.en;

  // Fonction pour formater le texte avec style particulier pour les phrases entre **
  const formatContent = (content) => {
    // Diviser le contenu en parties (texte normal et phrases entre **)
    const parts = content.split(/(\*\*[^*]+\*\*)/g);
    
    return parts.map((part, index) => {
      // Si la partie est entre **, enlever les ** et appliquer le style
      if (part.startsWith('**') && part.endsWith('**')) {
        const text = part.slice(2, -2); // Enlever les **
        return (
          <span
            key={index}
            className="font-semibold italic bg-gradient-to-r from-brand-accent to-purple-400 bg-clip-text text-transparent"
          >
            {text}
          </span>
        );
      }
      // Sinon, retourner le texte normal
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <article className="project-card-futuristic group">
      <div className="project-card-inner">
        {/* Image avec effet de parallax au hover */}
        <div className="relative overflow-hidden rounded-t-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 mix-blend-overlay" />
          <img
            src={imgPath}
            alt={title}
            className="h-52 w-full object-cover object-center transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b22] via-[#0f0b22]/50 to-transparent opacity-60" />
          
          {/* Effet de scan lumineux */}
          <div className="scan-line" />
        </div>

        {/* Contenu de la carte */}
        <div className="flex flex-1 flex-col gap-4 p-6 relative z-10">
          {/* Titre avec effet holographique */}
          <h3 className="text-xl font-bold text-white relative inline-block w-fit">
            <span className="relative z-10">{title}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/30 to-purple-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </h3>

          {/* Description */}
          <p className="flex-1 whitespace-pre-line text-sm leading-relaxed text-gray-300/90">
            {formatContent(description)}
          </p>

          {/* Boutons avec effets néon */}
          <div className="flex flex-wrap gap-3 pt-2">
            {ghLink && (
              <a
                href={ghLink}
                target="_blank"
                rel="noreferrer"
                className="btn-futuristic btn-primary-glow group/btn"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <BsGithub className="text-lg" /> {text.github}
                </span>
              </a>
            )}
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noreferrer"
                className="btn-futuristic btn-success-glow group/btn"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <BsPlayFill className="text-xl" /> {text.demo}
                </span>
              </a>
            )}
            {collabLink && (
              <a
                href={collabLink}
                target="_blank"
                rel="noreferrer"
                className="btn-futuristic btn-collab-glow group/btn"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {text.collaborate}
                </span>
              </a>
            )}
          </div>
        </div>

        {/* Effet de bordure animée */}
        <div className="card-border-glow" />
      </div>
    </article>
  );
}

export default ProjectCards;
