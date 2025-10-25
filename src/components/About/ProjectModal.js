import React from "react";
import { FaTimes, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

function ProjectModal({ project, onClose }) {
  const { language } = useLanguage();

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/10 bg-brand-bg p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-white/5 p-2 text-brand-muted transition-colors hover:bg-white/10 hover:text-brand-accent"
          aria-label="Close modal"
        >
          <FaTimes className="text-xl" />
        </button>

        {/* Content */}
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h2 className="mb-2 text-2xl font-bold text-brand-accent sm:text-3xl">
              {language === "fr" ? project.name.fr : project.name.en}
            </h2>
            <p className="text-brand-text/80">
              {language === "fr"
                ? project.description.fr
                : project.description.en}
            </p>
          </div>

          {/* Image */}
          {project.image && (
            <div className="overflow-hidden rounded-xl border border-white/10">
              <img
                src={project.image}
                alt={language === "fr" ? project.name.fr : project.name.en}
                className="h-auto w-full object-cover"
              />
            </div>
          )}

          {/* Detailed Description */}
          {project.detailedDescription && (
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="mb-3 text-lg font-semibold text-brand-text">
                {language === "fr" ? "Description détaillée" : "Detailed Description"}
              </h3>
              <p className="leading-relaxed text-brand-text/70">
                {language === "fr"
                  ? project.detailedDescription.fr
                  : project.detailedDescription.en}
              </p>
            </div>
          )}

          {/* Key Features */}
          {project.features && (
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="mb-3 text-lg font-semibold text-brand-text">
                {language === "fr" ? "Caractéristiques Techniques" : "Technical Features"}
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-brand-text/80"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-accent" />
                    <span className="leading-relaxed">
                      {language === "fr" ? feature.fr : feature.en}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {project.technologies && (
            <div>
              <h3 className="mb-3 text-lg font-semibold text-brand-text">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg border border-brand-accent/20 bg-brand-accent/10 px-3 py-1.5 text-sm font-medium text-brand-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Results/Achievements */}
          {project.results && (
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="mb-3 text-lg font-semibold text-brand-text">
                {language === "fr" ? "Résultats & Performance" : "Results & Performance"}
              </h3>
              <p className="leading-relaxed text-brand-text/80">
                {language === "fr" ? project.results.fr : project.results.en}
              </p>
            </div>
          )}

          {/* Key Learnings - Expanded section for detailed insights */}
          {project.keyLearnings && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-brand-text">
                {language === "fr" ? "Apprentissages Clés & Défis Techniques" : "Key Learnings & Technical Challenges"}
              </h3>
              {(language === "fr" ? project.keyLearnings.fr : project.keyLearnings.en).map((learning, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-brand-accent/20 hover:bg-white/[0.04]"
                >
                  <h4 className="mb-2 font-semibold text-brand-accent">
                    {learning.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-brand-text/70">
                    {learning.content}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-accent/20 px-4 py-2 font-semibold text-brand-accent transition-all hover:bg-brand-accent/30 hover:shadow-lg"
              >
                <FaGithub className="text-lg" />
                {language === "fr" ? "Voir sur GitHub" : "View on GitHub"}
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 font-semibold text-brand-text transition-all hover:bg-white/10 hover:shadow-lg"
              >
                <FaExternalLinkAlt className="text-sm" />
                {language === "fr" ? "Démo en ligne" : "Live Demo"}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
