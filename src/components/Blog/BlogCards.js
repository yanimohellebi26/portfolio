import React from "react";
import { BsGithub } from "react-icons/bs";
import { useLanguage } from "../../context/LanguageContext";

function BlogCards({ title, description, content, date, ghLink, imgPath }) {
  const { language } = useLanguage();

  const labels = {
    en: {
      published: "Published on:",
      github: "GitHub",
    },
    fr: {
      published: "Publié le:",
      github: "GitHub",
    },
  };

  const text = labels[language] || labels.en;

  // Fonction pour formater le texte avec style particulier pour les phrases entre **
  const formatContent = (content) => {
    const parts = content.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        const styledText = part.slice(2, -2);
        return (
          <span key={index} className="font-semibold italic text-brand-accent">
            {styledText}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  // Fonction pour extraire le lien du contenu
  const extractLink = (content) => {
    const linkRegex = /\[(.*?)\]\((.*?)\)/;
    const match = content.match(linkRegex);
    if (match) {
      return {
        text: match[1],
        url: match[2],
        content: content.replace(linkRegex, "").trim(),
      };
    }
    return null;
  };

  const linkInfo = extractLink(content);

  return (
    <article className="glass-card flex h-full flex-col overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imgPath}
          alt={title}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/85 via-brand-bg/10 to-transparent" aria-hidden="true" />
      </div>
      <div className="flex flex-1 flex-col gap-5 p-6">
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm text-brand-text/70">{description}</p>
        </div>
        <p className="flex-1 whitespace-pre-line text-sm leading-relaxed text-brand-text/85">
          {formatContent(linkInfo ? linkInfo.content : content)}
        </p>
        <div className="flex flex-wrap items-center gap-3 text-xs text-brand-muted">
          <span>
            {text.published} {date}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {linkInfo && (
            <a
              href={linkInfo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient"
            >
              {linkInfo.text}
            </a>
          )}
          {ghLink && (
            <a
              href={ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient"
            >
              <BsGithub /> {text.github}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default BlogCards;