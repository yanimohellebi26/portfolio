export const translations = {
  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      resume: "CV",
      blog: "Blog",
      contact: "Contact"
    },

    // Page d'accueil
    home: {
      greeting: "Bonjour !",
      iAm: "JE SUIS",
      name: "YANI MOHELLEBI",
      titles: [
        "Étudiant en Master IA",
        "Ingénieur R&D IA en Alternance chez Siemens DISW",
        "Passionné d'IA et de Cybersécurité",
        "Développeur Full Stack"
      ],
      altImage: "Illustration Accueil",

      // Section About
      welcomeTitle: "Bienvenue sur mon",
      portfolio: "Portfolio",
      aboutBody1: "En tant que développeur, je crois en l'importance de créer des solutions qui ont un impact réel sur la vie des gens.",
      aboutBody2: "Mon approche du développement est guidée par :",
      values: "la simplicité, l'efficacité et l'accessibilité",
      aboutBody3: "Je m'efforce de rendre la technologie plus humaine et intuitive, en particulier dans des domaines comme",
      domains: "l'éducation, la santé et le bien-être",
      aboutBody4: "Au-delà du code, je m'intéresse à la philosophie des technologies émergentes et à leur impact sur la société. Je participe activement à des hackathons et des événements tech pour échanger des idées et collaborer sur des projets innovants.",

      // Réseaux sociaux
      findMe: "Retrouvez-moi sur",
      social: "Je suis toujours ouvert aux discussions sur l'innovation technologique et les projets collaboratifs !"
    },

    // Page About
    about: {
      title: "QUI",
      titleHighlight: "SUIS JE?",
      skills: "Compétences",
      skillsHighlight: "Professionnelles",
      tools: "Outils",
      toolsText: "que j'utilise"
    },

    // Page Projects
    projects: {
      title: "Mes",
      titleHighlight: "Projets Récents",
      subtitle: "Voici quelques projets sur lesquels j'ai travaillé récemment."
    }
  },

  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      resume: "Resume",
      blog: "Blog",
      contact: "Contact"
    },

    // Home page
    home: {
      greeting: "Hello!",
      iAm: "I AM",
      name: "YANI MOHELLEBI",
      titles: [
        "Master's Student in Artificial Intelligence",
        "AI R&D Engineer Apprentice at Siemens DISW",
        "AI & Cybersecurity Enthusiast",
        "Full Stack Developer"
      ],
      altImage: "Home Illustration",

      // About section
      welcomeTitle: "Welcome to my",
      portfolio: "Portfolio",
      aboutBody1: "As a developer, I believe in the importance of creating solutions that have a real impact on people's lives.",
      aboutBody2: "My approach to development is guided by:",
      values: "simplicity, efficiency and accessibility",
      aboutBody3: "I strive to make technology more human and intuitive, especially in areas such as",
      domains: "education, health and wellness",
      aboutBody4: "Beyond code, I'm interested in the philosophy of emerging technologies and their impact on society. I actively participate in hackathons and tech events to exchange ideas and collaborate on innovative projects.",

      // Social networks
      findMe: "Find me on",
      social: "I'm always open to discussions about technological innovation and collaborative projects!"
    },

    // About page
    about: {
      title: "WHO",
      titleHighlight: "AM I?",
      skills: "Professional",
      skillsHighlight: "Skills",
      tools: "Tools",
      toolsText: "I use"
    },

    // Projects page
    projects: {
      title: "My Recent",
      titleHighlight: "Projects",
      subtitle: "Here are some projects I've been working on recently."
    }
  }
};

export const getTranslation = (language, key) => {
  const keys = key.split('.');
  let value = translations[language];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
};
