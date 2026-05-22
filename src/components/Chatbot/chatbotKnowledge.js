const normalizeMessage = (text) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const KNOWLEDGE_BASE = [
  {
    keywords: ["nom", "appelle", "qui es", "yani", "name", "who", "yourself"],
    answer: {
      fr: "Je suis Yani Mohellebi, étudiant en Master IA à l'Université de Bourgogne et Ingénieur R&D IA en alternance chez Siemens Digital Industries Software à Lyon. Je gère en autonomie complète le projet AI GitLab Review, déployé auprès de 103 utilisateurs.",
      en: "I'm Yani Mohellebi, Master's student in AI at the University of Burgundy and AI R&D Engineer Apprentice at Siemens Digital Industries Software in Lyon. I independently manage the AI GitLab Review project, deployed to 103 users.",
    }
  },
  {
    keywords: ["formation", "universite", "etudiant", "master", "licence", "education", "university", "student", "degree", "study", "school"],
    answer: {
      fr: "🎓 Je suis en Master Intelligence Artificielle à l'Université de Bourgogne (Dijon). Ma formation couvre le deep learning, le NLP, la vision par ordinateur, la théorie des graphes et les systèmes multi-agents.",
      en: "🎓 I'm pursuing a Master's in Artificial Intelligence at the University of Burgundy (Dijon, France). My curriculum covers deep learning, NLP, computer vision, graph theory, and multi-agent systems.",
    }
  },
  {
    keywords: ["ou vis", "localisation", "ville", "dijon", "lyon", "where", "location", "city", "based", "live"],
    answer: {
      fr: "📍 Basé entre Dijon (études à l'Université de Bourgogne) et Lyon (alternance chez Siemens, 19 Bd Jules Carteret, 69007).",
      en: "📍 Based between Dijon (studies at the University of Burgundy) and Lyon (apprenticeship at Siemens, 19 Bd Jules Carteret, 69007).",
    }
  },
  {
    keywords: ["siemens", "alternance", "travail", "entreprise", "disw", "work", "job", "company", "apprentice", "employer", "position", "role"],
    answer: {
      fr: "🏢 Ingénieur R&D IA en alternance chez Siemens Digital Industries Software à Lyon (oct. 2025 – sept. 2027).\n\n🚀 Projet principal : **AI GitLab Review**\n• Système multi-agents orchestré par LangGraph\n• 4 agents spécialisés (sécurité, défauts logiques, error handling, qualité)\n• Trust scoring + self-review + déduplication sémantique\n• Publication via MCP sur GitLab\n• Déployé à 14 équipes, 103 utilisateurs actifs\n\n💡 Je gère ce projet en autonomie complète : architecture, prompt engineering, CI/CD, roadmap produit.",
      en: "🏢 AI R&D Engineer Apprentice at Siemens Digital Industries Software in Lyon (Oct 2025 – Sep 2027).\n\n🚀 Main project: **AI GitLab Review**\n• Multi-agent system orchestrated by LangGraph\n• 4 specialized agents (security, logic defects, error handling, quality)\n• Trust scoring + self-review + semantic deduplication\n• Publishing via MCP on GitLab\n• Deployed to 14 teams, 103 active users\n\n💡 I manage this project fully autonomously: architecture, prompt engineering, CI/CD, product roadmap.",
    }
  },
  {
    keywords: ["projet", "realisation", "portfolio", "project", "built", "made", "created", "work on", "fait"],
    answer: {
      fr: "🚀 Mes projets principaux :\n\n🤖 **AI GitLab Review** (Siemens) — Système multi-agents LangGraph pour revue de code automatisée, 103 utilisateurs\n📚 **RAG-M1** — Workspace IA centralisé avec MCP (YouTube, ArXiv, Drive, Gmail)\n🎬 **CineAgent** — Agent IA multi-sources pour recommandations cinéma\n🧠 **Segmentation 3D** — PointNet/KPConv sur nuages de points urbains (stage recherche)\n📊 **NeutraView** — Analyse NLP d'avis culturels objectifs\n🏠 **Book Recommendations** — Système de recommandation littéraire déployé\n🔐 **Pontifex** — Chiffre Solitaire avec RAG + Streamlit\n🌍 **LyonByNight** — Guide touristique Lyon avec carte interactive\n\n💼 35 projets au total sur mon portfolio !",
      en: "🚀 My main projects:\n\n🤖 **AI GitLab Review** (Siemens) — Multi-agent LangGraph system for automated code review, 103 users\n📚 **RAG-M1** — Centralized AI workspace with MCP (YouTube, ArXiv, Drive, Gmail)\n🎬 **CineAgent** — Multi-source AI agent for movie recommendations\n🧠 **3D Segmentation** — PointNet/KPConv on urban point clouds (research internship)\n📊 **NeutraView** — NLP analysis of objective cultural reviews\n🏠 **Book Recommendations** — Deployed literary recommendation system\n🔐 **Pontifex** — Solitaire cipher with RAG + Streamlit\n🌍 **LyonByNight** — Lyon tourist guide with interactive map\n\n💼 35 projects total on my portfolio!",
    }
  },
  {
    keywords: ["competence", "technologie", "stack", "outil", "langchain", "langgraph", "skill", "technology", "tech", "use", "tools", "technologies"],
    answer: {
      fr: "🛠️ Stack technique :\n\n🤖 IA/Agents : LangGraph, LangChain, MCP, Zod (structured output)\n🧠 ML/DL : PyTorch, TensorFlow, PointNet\n💻 Backend : TypeScript, Node.js, Python, FastAPI\n🎨 Frontend : React, Streamlit\n☁️ Cloud/LLM : Azure OpenAI (GPT-5.4, Codex), LangSmith\n🐳 DevOps : Docker, GitLab CI/CD, ESLint, Vitest\n📊 Données : PostgreSQL, MongoDB, Neo4j/Cypher\n📋 Gestion : Jira, Confluence",
      en: "🛠️ Tech stack:\n\n🤖 AI/Agents: LangGraph, LangChain, MCP, Zod (structured output)\n🧠 ML/DL: PyTorch, TensorFlow, PointNet\n💻 Backend: TypeScript, Node.js, Python, FastAPI\n🎨 Frontend: React, Streamlit\n☁️ Cloud/LLM: Azure OpenAI (GPT-5.4, Codex), LangSmith\n🐳 DevOps: Docker, GitLab CI/CD, ESLint, Vitest\n📊 Data: PostgreSQL, MongoDB, Neo4j/Cypher\n📋 Management: Jira, Confluence",
    }
  },
  {
    keywords: ["experience", "professionnel", "parcours", "career", "background", "professional"],
    answer: {
      fr: "💼 Parcours professionnel :\n\n🏢 Siemens DISW Lyon (oct. 2025 – sept. 2027)\n• Ingénieur R&D IA en alternance\n• AI GitLab Review : multi-agents, 103 utilisateurs\n• Autonomie complète sur le projet\n\n🔬 Stage Recherche LE2I Dijon (juin – août 2025)\n• Segmentation 3D avec PointNet/KPConv\n• Nuages de points urbains (Paris-Lille-3D)\n• 3 projets publiés sur GitHub",
      en: "💼 Professional experience:\n\n🏢 Siemens DISW Lyon (Oct 2025 – Sep 2027)\n• AI R&D Engineer Apprentice\n• AI GitLab Review: multi-agent system, 103 users\n• Full autonomy on the project\n\n🔬 Research Internship LE2I Dijon (Jun – Aug 2025)\n• 3D segmentation with PointNet/KPConv\n• Urban point clouds (Paris-Lille-3D)\n• 3 projects published on GitHub",
    }
  },
  {
    keywords: ["stage", "recherche", "le2i", "laboratoire", "segmentation", "pointnet", "3d", "nuage", "point cloud", "internship", "research", "lab"],
    answer: {
      fr: "🔬 Stage de recherche au LE2I, Université de Bourgogne (juin – août 2025)\n\n📊 Projets :\n1️⃣ Segmentation urbaine avec PointNet (Paris-Lille-3D) — 89% accuracy\n2️⃣ Segmentation faces de cube — 83.71% accuracy\n3️⃣ Reconnaissance éléments architecturaux (murs/ouvertures) — 88.96% val accuracy\n4️⃣ Exploration KPConv (comparaison architectures)\n\n💡 Technologies : PyTorch, PointNet, CUDA, NumPy, Open3D, Blender\n🔗 github.com/yanimohellebi26/segmentation-semantique",
      en: "🔬 Research internship at LE2I, University of Burgundy (Jun – Aug 2025)\n\n📊 Projects:\n1️⃣ Urban segmentation with PointNet (Paris-Lille-3D) — 89% accuracy\n2️⃣ Cube face segmentation — 83.71% accuracy\n3️⃣ Architectural element recognition (walls/openings) — 88.96% val accuracy\n4️⃣ KPConv exploration (architecture comparison)\n\n💡 Technologies: PyTorch, PointNet, CUDA, NumPy, Open3D, Blender\n🔗 github.com/yanimohellebi26/segmentation-semantique",
    }
  },
  {
    keywords: ["ai gitlab", "review", "code review", "multi-agent", "multi agent", "revue"],
    answer: {
      fr: "🤖 **AI GitLab Review** — Mon projet principal chez Siemens\n\n🏗️ Architecture :\n• Orchestrateur LangGraph (machine à états)\n• Classificateur de diffs → routage vers 4 agents spécialisés\n• Agents : Sécurité, Défauts logiques, Error handling, Qualité\n• Synthétiseur avec déduplication sémantique\n• Publication MCP sur GitLab (commentaires inline)\n\n⚙️ Stack : TypeScript, Node.js, LangGraph 1.3, Zod, Azure OpenAI (GPT-5.4 Mini + GPT-5.4 + Codex), Docker, Vitest, ESLint, LangSmith\n\n📈 Impact : 14 équipes, 103 utilisateurs actifs\n💡 Trust scoring : seuils 80/50 avec self-review indépendant",
      en: "🤖 **AI GitLab Review** — My main project at Siemens\n\n🏗️ Architecture:\n• LangGraph orchestrator (state machine)\n• Diff classifier → routing to 4 specialized agents\n• Agents: Security, Logic defects, Error handling, Quality\n• Synthesizer with semantic deduplication\n• MCP publishing on GitLab (inline comments)\n\n⚙️ Stack: TypeScript, Node.js, LangGraph 1.3, Zod, Azure OpenAI (GPT-5.4 Mini + GPT-5.4 + Codex), Docker, Vitest, ESLint, LangSmith\n\n📈 Impact: 14 teams, 103 active users\n💡 Trust scoring: 80/50 thresholds with independent self-review",
    }
  },
  {
    keywords: ["rag", "mcp", "chatbot", "assistant", "workspace"],
    answer: {
      fr: "📚 **RAG-M1** — Mon workspace IA centralisé\n\nUn système RAG avec serveurs MCP qui connecte une IA à :\n• YouTube (explications de cours)\n• ArXiv (papers de recherche)\n• Google Drive (notes)\n• Gmail (résumés)\n\nMême pattern architectural que AI GitLab Review (agents spécialisés + orchestrateur + MCP) appliqué à la vie étudiante.\n\n🔗 github.com/yanimohellebi26/RAG-M1",
      en: "📚 **RAG-M1** — My centralized AI workspace\n\nA RAG system with MCP servers connecting AI to:\n• YouTube (lecture explanations)\n• ArXiv (research papers)\n• Google Drive (notes)\n• Gmail (summaries)\n\nSame architectural pattern as AI GitLab Review (specialized agents + orchestrator + MCP) applied to student life.\n\n🔗 github.com/yanimohellebi26/RAG-M1",
    }
  },
  {
    keywords: ["engagement", "benevole", "cbfu", "aggo", "volunteer", "community"],
    answer: {
      fr: "🤝 Élu à la CBFU (Commission de la Formation et de la Vie Universitaire) et bénévole à AGGO pour soutenir les étudiants via événements et distributions alimentaires.",
      en: "🤝 Elected to the CBFU (University Training and Life Commission) and volunteer at AGGO supporting students through events and food distributions.",
    }
  },
  {
    keywords: ["langue", "parle", "anglais", "francais", "language", "speak", "english", "french"],
    answer: {
      fr: "🌍 Français (natif) et anglais (professionnel), ce qui me permet de travailler avec des équipes internationales chez Siemens.",
      en: "🌍 French (native) and English (professional), enabling me to work with international teams at Siemens.",
    }
  },
  {
    keywords: ["contact", "email", "joindre", "message", "reach", "hire", "available"],
    answer: {
      fr: "📧 Tu peux me contacter via le formulaire de contact du portfolio ou consulter la section Contact pour mes coordonnées.",
      en: "📧 You can reach me through the portfolio's contact form or check the Contact section for my details.",
    }
  },
  {
    keywords: ["cv", "curriculum", "resume", "download"],
    answer: {
      fr: "📄 Mon CV est disponible dans la section Résumé — tu peux le visualiser en ligne ou le télécharger.",
      en: "📄 My resume is available in the Resume section — you can view it online or download it.",
    }
  },
  {
    keywords: ["autonomie", "seul", "independant", "gere", "autonomous", "independent", "solo", "own", "manage"],
    answer: {
      fr: "💪 Chez Siemens, je gère AI GitLab Review en **autonomie complète** :\n• Architecture logicielle (design patterns, state machine)\n• Prompt engineering (chain-of-thought, few-shot)\n• Pipeline CI/CD (Docker, GitLab)\n• Roadmap produit et priorisation\n• Communication avec les 14 équipes utilisatrices\n\nMon tuteur supervise mais je suis le seul développeur du projet.",
      en: "💪 At Siemens, I manage AI GitLab Review with **full autonomy**:\n• Software architecture (design patterns, state machine)\n• Prompt engineering (chain-of-thought, few-shot)\n• CI/CD pipeline (Docker, GitLab)\n• Product roadmap and prioritization\n• Communication with 14 user teams\n\nMy tutor oversees but I'm the sole developer on the project.",
    }
  },
  {
    keywords: ["celibataire", "copine", "petite amie", "amoureux", "relation", "couple", "marie", "girlfriend", "single", "dating", "married"],
    answer: {
      fr: "😅 Haha ! Info classée confidentielle ! 🔒\n\nParlons plutôt de :\n• 🤖 AI GitLab Review (103 utilisateurs !)\n• 💻 Ses compétences en IA\n• 🚀 Ses projets",
      en: "😅 Haha! That's classified information! 🔒\n\nLet's talk about:\n• 🤖 AI GitLab Review (103 users!)\n• 💻 His AI skills\n• 🚀 His projects",
    }
  },
  {
    keywords: ["salaire", "combien gagne", "argent", "revenu", "salary", "money", "earn", "paid"],
    answer: {
      fr: "🔒 Information confidentielle !\n\nCe que je peux te dire :\n• 🏢 Alternance R&D chez Siemens (2 ans)\n• 🚀 Gère un produit déployé à 103 utilisateurs\n• 💡 Ouvert aux collaborations",
      en: "🔒 Classified information!\n\nWhat I can tell you:\n• 🏢 R&D apprenticeship at Siemens (2 years)\n• 🚀 Manages a product deployed to 103 users\n• 💡 Open to collaborations",
    }
  },
  {
    keywords: ["passion", "motivation", "interet", "hobby", "interest", "passionate", "enjoy"],
    answer: {
      fr: "🔥 Passionné par :\n• Les systèmes multi-agents et l'IA en production\n• Le prompt engineering et les architectures LLM\n• La recherche en deep learning (3D, graphes)\n• L'impact concret de l'IA sur les workflows développeurs",
      en: "🔥 Passionate about:\n• Multi-agent systems and production AI\n• Prompt engineering and LLM architectures\n• Deep learning research (3D, graphs)\n• Concrete AI impact on developer workflows",
    }
  },
].map((item) => ({
  ...item,
  keywords: item.keywords.map((keyword) => normalizeMessage(keyword))
}));

export { normalizeMessage, KNOWLEDGE_BASE };
