import React from "react";
import { ImOffice, ImUsers } from "react-icons/im";
import { useLanguage } from "../../context/LanguageContext";

function Engagements() {
  const { language } = useLanguage();

  const copy = {
    en: {
      heading: { lead: "My", highlight: "Commitments" },
      items: [
        {
          title: (
            <>
              <ImOffice /> Elected to the <span className="text-brand-accent">CBFU</span>
            </>
          ),
          description:
            "As an elected member of the Commission on Training and University Life (CBFU), I contribute to academic decisions and initiatives that improve everyday student life.",
        },
        {
          title: (
            <>
              <ImUsers /> Volunteer at <span className="text-brand-accent">AGGO</span>
            </>
          ),
          description:
            "Through my volunteering with AGGO, I help organize events and coordinate food distributions for students who need daily support.",
        },
      ],
    },
    fr: {
      heading: { lead: "Mes", highlight: "Engagements" },
      items: [
        {
          title: (
            <>
              <ImOffice /> Élu à la <span className="text-brand-accent">CBFU</span>
            </>
          ),
          description:
            "En tant qu’élu à la Commission de la Formation et de la Vie Universitaire (CBFU), je contribue aux décisions académiques et à l'amélioration de la vie étudiante.",
        },
        {
          title: (
            <>
              <ImUsers /> Bénévole à <span className="text-brand-accent">AGGO</span>
            </>
          ),
          description:
            "À travers mon bénévolat à AGGO, je participe à l’organisation d'événements et à des distributions alimentaires pour soutenir les étudiants en difficulté.",
        },
      ],
    },
  };

  const { heading, items } = copy[language] || copy.en;

  return (
    <div className="space-y-8">
      <h2 className="text-center text-2xl font-semibold text-white sm:text-3xl">
        <span className="text-brand-accent">{heading.lead}</span> {heading.highlight}
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item, index) => (
          <div key={index} className="glass-card h-full p-8 text-brand-text/85">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Engagements;
