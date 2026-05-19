import React from "react";
import BlogCards from "./BlogCards";
import BstageLabImg from "../../Assets/Projects/reco-maison.png";
import BcryptoImg from "../../Assets/Projects/aportfolio.png";
import BalternanceImg from "../../Assets/Projects/rag-master.png";
import { useLanguage } from "../../context/LanguageContext";

function Blog() {
  const { language } = useLanguage();

  const copy = {
    en: {
      heading: { lead: "Research &", highlight: "Insights" },
      subtitle: "My journey into research â€” from lab internships to R&D engineering.",
    },
    fr: {
      heading: { lead: "Recherche &", highlight: "RÃ©flexions" },
      subtitle: "Mon parcours en recherche â€” du stage en laboratoire Ã  l'ingÃ©nierie R&D.",
    },
  };

  const articles = [
    {
      id: "stage-lab",
      imgPath: BstageLabImg,
      title: {
        en: "Research Internship: 3D Deep Learning at the University Lab",
        fr: "Stage de Recherche : Deep Learning 3D au Laboratoire Universitaire",
      },
      description: {
        en: "Exploring PointNet architectures for architectural shape recognition from 3D point clouds",
        fr: "Explorer les architectures PointNet pour la reconnaissance de formes architecturales depuis des nuages de points 3D",
      },
      content: {
        en: `Before this internship, I had never worked on a problem where the ground truth had to be *generated*. In most ML courses, you download a dataset, train a model, evaluate. Clean. Controlled. Predictable.

At the lab, the first challenge was not training a neural network â€” it was **creating the data itself**.

My project focused on classifying architectural styles (standard, complex, Italian) from 3D point clouds using PointNet and PointNet++. But no public dataset of procedurally generated houses with labelled architectural elements existed. So I built one â€” using Blender's Python API to procedurally generate thousands of synthetic house point clouds, each with known ground truth labels for walls, doors, windows, and roofs.

**That experience changed how I think about research.**

In coursework, the problem is always well-defined. In a lab, you spend weeks just *formulating* the right question. What granularity of labels makes sense? How many points per sample? How do you handle class imbalance between a massive roof surface and a tiny door frame? These decisions shape everything downstream, and there is no textbook answer â€” only hypotheses to test.

The second revelation was **how much research is iteration, not inspiration**. I ran dozens of training configurations: PointNet vs PointNet++, varying numbers of points (1024, 2048, 4096), different augmentation strategies (random rotation, Gaussian noise, scaling). Each run generated metrics that guided the next experiment. It is methodical, patient work â€” closer to experimental physics than to hackathon-style coding.

What I brought back from this experience is a deep respect for **reproducibility**. Every experiment was logged, every hyperparameter tracked, every result exportable. That rigour is what separates a student project from a research contribution.

I also learned that **3D deep learning is still an open frontier**. Unlike images where CNNs dominate, point clouds require architectures that handle unordered sets, varying density, and spatial relationships â€” problems where PointNet's symmetric functions and PointNet++'s hierarchical grouping represent fundamentally different trade-offs.

This internship confirmed something I had suspected: **I want to continue in research.** Not because it is glamorous â€” it is often frustrating, slow, and humbling â€” but because it is the space where you confront genuinely unsolved problems.

And that confrontation is what makes you grow.`,
        fr: `Avant ce stage, je n'avais jamais travaillÃ© sur un problÃ¨me oÃ¹ la vÃ©ritÃ© terrain devait Ãªtre *gÃ©nÃ©rÃ©e*. Dans la plupart des cours de ML, on tÃ©lÃ©charge un dataset, on entraÃ®ne un modÃ¨le, on Ã©value. Propre. ContrÃ´lÃ©. PrÃ©visible.

Au laboratoire, le premier dÃ©fi n'Ã©tait pas d'entraÃ®ner un rÃ©seau de neurones â€” c'Ã©tait **de crÃ©er les donnÃ©es elles-mÃªmes**.

Mon projet portait sur la classification de styles architecturaux (standard, complexe, italien) Ã  partir de nuages de points 3D avec PointNet et PointNet++. Mais aucun dataset public de maisons gÃ©nÃ©rÃ©es procÃ©duralement avec des labels d'Ã©lÃ©ments architecturaux n'existait. Je l'ai donc construit â€” en utilisant l'API Python de Blender pour gÃ©nÃ©rer procÃ©duralement des milliers de maisons synthÃ©tiques, chacune avec des labels connus pour les murs, portes, fenÃªtres et toits.

**Cette expÃ©rience a changÃ© ma faÃ§on de penser la recherche.**

En cours, le problÃ¨me est toujours bien dÃ©fini. Dans un labo, on passe des semaines juste Ã  *formuler* la bonne question. Quelle granularitÃ© de labels a du sens ? Combien de points par Ã©chantillon ? Comment gÃ©rer le dÃ©sÃ©quilibre de classes entre une surface de toit massive et un minuscule cadre de porte ? Ces dÃ©cisions faÃ§onnent tout en aval, et il n'y a pas de rÃ©ponse dans un manuel â€” seulement des hypothÃ¨ses Ã  tester.

La seconde rÃ©vÃ©lation a Ã©tÃ© **Ã  quel point la recherche est de l'itÃ©ration, pas de l'inspiration**. J'ai lancÃ© des dizaines de configurations d'entraÃ®nement : PointNet vs PointNet++, nombre variable de points (1024, 2048, 4096), diffÃ©rentes stratÃ©gies d'augmentation (rotation alÃ©atoire, bruit gaussien, mise Ã  l'Ã©chelle). Chaque run gÃ©nÃ¨re des mÃ©triques qui guident l'expÃ©rience suivante. C'est un travail mÃ©thodique, patient â€” plus proche de la physique expÃ©rimentale que du code en mode hackathon.

Ce que j'ai ramenÃ© de cette expÃ©rience, c'est un profond respect pour la **reproductibilitÃ©**. Chaque expÃ©rience Ã©tait journalisÃ©e, chaque hyperparamÃ¨tre tracÃ©, chaque rÃ©sultat exportable. Cette rigueur est ce qui sÃ©pare un projet Ã©tudiant d'une contribution de recherche.

J'ai aussi appris que **le deep learning 3D est encore une frontiÃ¨re ouverte**. Contrairement aux images oÃ¹ les CNN dominent, les nuages de points exigent des architectures qui gÃ¨rent des ensembles non ordonnÃ©s, des densitÃ©s variables et des relations spatiales â€” des problÃ¨mes oÃ¹ les fonctions symÃ©triques de PointNet et le groupement hiÃ©rarchique de PointNet++ reprÃ©sentent des compromis fondamentalement diffÃ©rents.

Ce stage m'a confirmÃ© quelque chose que je soupÃ§onnais : **je veux continuer en recherche.** Pas parce que c'est glamour â€” c'est souvent frustrant, lent et humiliant â€” mais parce que c'est l'espace oÃ¹ l'on affronte des problÃ¨mes rÃ©ellement non rÃ©solus.

Et c'est cette confrontation qui fait grandir.`,
      },
      date: "2025-06-15",
      ghLink: "https://github.com/yanimohellebi26/reconnaissance_maison-nuage-de-points",
    },
    {
      id: "initiation-recherche",
      imgPath: BcryptoImg,
      title: {
        en: "Initiation to Research: Transformers Meet Graph Neural Networks",
        fr: "Initiation Ã  la Recherche : Quand les Transformers Rencontrent les RÃ©seaux de Graphes",
      },
      description: {
        en: "A synthesis of two foundational 2017 papers revealing the structural bridge between attention and graph convolution",
        fr: "SynthÃ¨se de deux articles fondateurs de 2017 rÃ©vÃ©lant le lien structurel entre attention et convolution de graphes",
      },
      content: {
        en: `The "Initiation to Research" module in Master 1 asks you to do something surprisingly rare in a CS curriculum: **read foundational papers, understand the mathematics from first principles, and synthesise them into a coherent contribution.**

My work focused on two papers that both appeared in 2017 and each revolutionised their respective field:
- *Attention Is All You Need* (Vaswani et al.) â€” the Transformer architecture that eliminated recurrence from NLP
- *Semi-Supervised Classification with Graph Convolutional Networks* (Kipf & Welling) â€” the GCN that made deep learning on graphs scalable

**The key insight I developed:**

On the surface, these architectures seem unrelated. One processes sequences (text), the other processes graphs (networks). But when you formalise both through the lens of **Message Passing Neural Networks** (Gilmer et al., 2017), a structural bridge appears:

Self-attention can be viewed as a graph convolution operating on a **complete implicit graph with dynamic edges**. In a Transformer, every token attends to every other token â€” that is a fully-connected graph where edge weights (attention scores) are computed dynamically. In a GCN, convolution operates on a fixed, sparse adjacency matrix.

**The mathematical derivations:**

For the Transformer, I traced the full derivation: why the scaling factor âˆšdk prevents gradient vanishing in the softmax, how multi-head attention creates parallel subspaces, and why positional encoding uses sinusoidal functions for extrapolation.

For the GCN, I worked through the spectral graph theory: the Laplacian eigendecomposition, the Chebyshev polynomial approximation that avoids O(NÂ³) complexity, and the first-order simplification (the "renormalization trick") that makes the final architecture so elegant.

**What this taught me about research:**

The deepest lesson was that **breakthroughs rarely come from isolated genius â€” they come from seeing connections between existing ideas**. Vaswani removed recurrence; Kipf simplified spectral filtering. But the unifying insight (MPNN framework) required reading *across* sub-fields.

This is what I find most exciting about AI research today: the boundaries between NLP, computer vision, graph learning, and geometric deep learning are dissolving. The same mathematical primitives â€” attention, message passing, learned representations â€” appear everywhere, just in different instantiations.

Writing this synthesis taught me to think in formal structures rather than implementation details. It is a skill I now apply to every system I design: what is the *mathematical object* I am computing, and what are the *structural assumptions* behind it?`,
        fr: `Le module "Initiation Ã  la Recherche" en Master 1 demande quelque chose de rare dans un cursus informatique : **lire des articles fondateurs, comprendre les mathÃ©matiques depuis les principes premiers, et les synthÃ©tiser en une contribution cohÃ©rente.**

Mon travail portait sur deux articles parus en 2017 qui ont chacun rÃ©volutionnÃ© leur domaine :
- *Attention Is All You Need* (Vaswani et al.) â€” l'architecture Transformer qui a Ã©liminÃ© la rÃ©currence en NLP
- *Semi-Supervised Classification with Graph Convolutional Networks* (Kipf & Welling) â€” le GCN qui a rendu le deep learning sur graphes scalable

**L'intuition clÃ© que j'ai dÃ©veloppÃ©e :**

En surface, ces architectures semblent sans rapport. L'une traite des sÃ©quences (texte), l'autre des graphes (rÃ©seaux). Mais quand on formalise les deux Ã  travers le prisme des **Message Passing Neural Networks** (Gilmer et al., 2017), un pont structurel apparaÃ®t :

La self-attention peut Ãªtre vue comme une convolution de graphe opÃ©rant sur un **graphe complet implicite Ã  arÃªtes dynamiques**. Dans un Transformer, chaque token attend chaque autre token â€” c'est un graphe entiÃ¨rement connectÃ© oÃ¹ les poids des arÃªtes (scores d'attention) sont calculÃ©s dynamiquement. Dans un GCN, la convolution opÃ¨re sur une matrice d'adjacence fixe et sparse.

**Les dÃ©rivations mathÃ©matiques :**

Pour le Transformer, j'ai retracÃ© la dÃ©rivation complÃ¨te : pourquoi le facteur d'Ã©chelle âˆšdk empÃªche la disparition du gradient dans le softmax, comment le multi-head attention crÃ©e des sous-espaces parallÃ¨les, et pourquoi l'encodage positionnel utilise des fonctions sinusoÃ¯dales pour l'extrapolation.

Pour le GCN, j'ai travaillÃ© la thÃ©orie spectrale des graphes : la dÃ©composition en valeurs propres du Laplacien, l'approximation par polynÃ´mes de Tchebychev qui Ã©vite la complexitÃ© O(NÂ³), et la simplification au premier ordre (le "renormalization trick") qui rend l'architecture finale si Ã©lÃ©gante.

**Ce que cela m'a appris sur la recherche :**

La leÃ§on la plus profonde est que **les percÃ©es viennent rarement du gÃ©nie isolÃ© â€” elles viennent de la capacitÃ© Ã  voir des connexions entre des idÃ©es existantes**. Vaswani a supprimÃ© la rÃ©currence ; Kipf a simplifiÃ© le filtrage spectral. Mais l'insight unificateur (le cadre MPNN) nÃ©cessitait de lire *Ã  travers* les sous-domaines.

C'est ce que je trouve le plus passionnant dans la recherche en IA aujourd'hui : les frontiÃ¨res entre NLP, vision par ordinateur, apprentissage sur graphes et deep learning gÃ©omÃ©trique se dissolvent. Les mÃªmes primitives mathÃ©matiques â€” attention, passage de messages, reprÃ©sentations apprises â€” apparaissent partout, juste sous des instanciations diffÃ©rentes.

RÃ©diger cette synthÃ¨se m'a appris Ã  penser en structures formelles plutÃ´t qu'en dÃ©tails d'implÃ©mentation. C'est une compÃ©tence que j'applique dÃ©sormais Ã  chaque systÃ¨me que je conÃ§ois : quel est l'*objet mathÃ©matique* que je calcule, et quelles sont les *hypothÃ¨ses structurelles* derriÃ¨re ?`,
      },
      date: "2026-04-15",
    },
    {
      id: "alternance-rd",
      imgPath: BalternanceImg,
      title: {
        en: "R&D at Siemens: AI GitLab Review â€” From Prototype to 103 Users",
        fr: "R&D chez Siemens : AI GitLab Review â€” Du Prototype Ã  103 Utilisateurs",
      },
      description: {
        en: "Building a multi-agent code review system with LangGraph and MCP, deployed to 14 dev teams",
        fr: "Construire un systÃ¨me de revue de code multi-agents avec LangGraph et MCP, dÃ©ployÃ© auprÃ¨s de 14 Ã©quipes",
      },
      content: {
        en: `When I joined Siemens Digital Industries Software in Lyon as an R&D apprentice in AI, I was handed a problem that every large engineering organisation faces: **code reviews do not scale.**

With hundreds of merge requests per week across fourteen development teams, senior engineers were spending hours catching the same recurring issues â€” security flaws, unhandled edge cases, inconsistent error patterns. The human reviewers were doing essential work, but a significant portion of it was *mechanical*: pattern-matching that a well-designed system could handle first.

**AI GitLab Review** was my answer.

**The architecture:**

The solution is a **multi-agent system orchestrated by LangGraph**, structured as a state machine:

1. A **classifier agent** analyses each file in the merge request and routes it to the relevant specialised agents based on file type and content.
2. Four **specialised agents** analyse in parallel:
   - Security (injection, secrets, auth vulnerabilities)
   - Logic defects (race conditions, off-by-one, null dereferences)
   - Error handling (uncaught exceptions, silent failures, missing retries)
   - Code quality (naming, complexity, dead code, missing documentation)
3. A **synthesiser** collects all findings, deduplicates by **semantic similarity** (not string matching â€” two differently worded comments about the same issue are merged), and scores each finding with a **trust score**.
4. Comments are published directly on GitLab via the **Model Context Protocol (MCP)**, appearing inline on the exact lines concerned.

**The trust scoring system:**

Not all AI findings deserve equal weight. The system maintains a self-review mechanism: before posting, each comment is evaluated for confidence. Low-confidence findings are flagged as suggestions rather than issues, reducing noise. Over time, the trust model learns which patterns in which codebases produce genuine value.

**Deployment and impact:**

The tool is currently deployed to **14 development teams** with **103 active users**. It runs automatically on every merge request, posting comments in the same interface developers already use â€” zero friction, zero workflow change.

**What I learned:**

The hardest problem was not the LLM integration. It was **calibrating signal-to-noise**. A system that flags everything is worse than no system at all â€” it trains developers to ignore AI comments. The semantic deduplication, trust scoring, and model tiering (using cheaper models for simple checks, expensive ones for complex logic) were all born from real feedback: *"too many comments"*, *"this one was wrong"*, *"why didn't it catch that?"*

I also learned that **shipping a tool to production is a fundamentally different skill from building a prototype**. Prototypes work in demos. Production tools must handle edge cases, fail gracefully, scale to thousands of MRs, and earn the trust of engineers who are initially skeptical.

**The broader picture â€” RAG-M1 and MCP:**

This experience directly fed my personal project **RAG-M1**. The insight: if MCP can connect an AI to GitLab's API for code review, it can connect an AI to *anything* â€” YouTube for lecture explanations, ArXiv for papers, Google Drive for notes, Gmail for summaries.

RAG-M1 started as a revision chatbot and evolved into a **centralised AI workspace** for my entire student life. The same architectural pattern (specialised agents + orchestrator + tool integration via MCP) that works at enterprise scale at Siemens also works for a single student managing ten courses, thirty deadlines, and hundreds of documents.

**My conviction:**

The future of AI tools is not chat interfaces. It is **invisible infrastructure** â€” systems that participate in your existing workflow without requiring you to change how you work. AI GitLab Review proves this: developers never leave GitLab, never open a new tool, never change their habits. The AI comes to them.

That principle â€” meet users where they are, not where you wish they were â€” is what I want to carry into every system I build next.`,
        fr: `Quand j'ai rejoint Siemens Digital Industries Software Ã  Lyon en tant qu'apprenti R&D en IA, on m'a confiÃ© un problÃ¨me que toute grande organisation d'ingÃ©nierie rencontre : **les revues de code ne passent pas Ã  l'Ã©chelle.**

Avec des centaines de merge requests par semaine Ã  travers quatorze Ã©quipes de dÃ©veloppement, les ingÃ©nieurs seniors passaient des heures Ã  attraper les mÃªmes erreurs rÃ©currentes â€” failles de sÃ©curitÃ©, cas limites non gÃ©rÃ©s, patterns d'erreur incohÃ©rents. Les reviewers humains faisaient un travail essentiel, mais une portion significative Ã©tait *mÃ©canique* : du pattern-matching qu'un systÃ¨me bien conÃ§u pourrait gÃ©rer en premier.

**AI GitLab Review** est ma rÃ©ponse.

**L'architecture :**

La solution est un **systÃ¨me multi-agents orchestrÃ© par LangGraph**, structurÃ© comme une machine Ã  Ã©tats :

1. Un **agent classificateur** analyse chaque fichier de la merge request et le route vers les agents spÃ©cialisÃ©s pertinents selon le type et le contenu du fichier.
2. Quatre **agents spÃ©cialisÃ©s** analysent en parallÃ¨le :
   - SÃ©curitÃ© (injection, secrets, vulnÃ©rabilitÃ©s d'authentification)
   - DÃ©fauts logiques (race conditions, off-by-one, dÃ©rÃ©fÃ©rencements null)
   - Gestion d'erreurs (exceptions non catchÃ©es, Ã©checs silencieux, retries manquants)
   - QualitÃ© de code (nommage, complexitÃ©, code mort, documentation manquante)
3. Un **synthÃ©tiseur** collecte tous les rÃ©sultats, dÃ©duplique par **similaritÃ© sÃ©mantique** (pas par correspondance de chaÃ®nes â€” deux commentaires formulÃ©s diffÃ©remment sur le mÃªme problÃ¨me sont fusionnÃ©s), et attribue un **score de confiance** Ã  chaque trouvaille.
4. Les commentaires sont publiÃ©s directement sur GitLab via le **Model Context Protocol (MCP)**, apparaissant en ligne sur les lignes exactes concernÃ©es.

**Le systÃ¨me de trust scoring :**

Toutes les trouvailles de l'IA ne mÃ©ritent pas le mÃªme poids. Le systÃ¨me maintient un mÃ©canisme de self-review : avant publication, chaque commentaire est Ã©valuÃ© en confiance. Les trouvailles Ã  faible confiance sont marquÃ©es comme suggestions plutÃ´t qu'issues, rÃ©duisant le bruit. Avec le temps, le modÃ¨le de confiance apprend quels patterns dans quelles codebases produisent une valeur rÃ©elle.

**DÃ©ploiement et impact :**

L'outil est actuellement dÃ©ployÃ© auprÃ¨s de **14 Ã©quipes de dÃ©veloppement** avec **103 utilisateurs actifs**. Il s'exÃ©cute automatiquement sur chaque merge request, postant des commentaires dans la mÃªme interface que les dÃ©veloppeurs utilisent dÃ©jÃ  â€” zÃ©ro friction, zÃ©ro changement de workflow.

**Ce que j'ai appris :**

Le problÃ¨me le plus dur n'Ã©tait pas l'intÃ©gration LLM. C'Ã©tait **calibrer le ratio signal/bruit**. Un systÃ¨me qui signale tout est pire que pas de systÃ¨me du tout â€” il entraÃ®ne les dÃ©veloppeurs Ã  ignorer les commentaires IA. La dÃ©duplication sÃ©mantique, le trust scoring et le model tiering (modÃ¨les moins chers pour les vÃ©rifications simples, coÃ»teux pour la logique complexe) sont tous nÃ©s de retours rÃ©els : *"trop de commentaires"*, *"celui-lÃ  Ã©tait faux"*, *"pourquoi il n'a pas attrapÃ© Ã§a ?"*

J'ai aussi appris que **livrer un outil en production est une compÃ©tence fondamentalement diffÃ©rente de construire un prototype**. Les prototypes fonctionnent en dÃ©mo. Les outils de production doivent gÃ©rer les cas limites, Ã©chouer gracieusement, passer Ã  l'Ã©chelle sur des milliers de MR, et gagner la confiance d'ingÃ©nieurs initialement sceptiques.

**La vision plus large â€” RAG-M1 et MCP :**

Cette expÃ©rience a directement nourri mon projet personnel **RAG-M1**. L'intuition : si MCP peut connecter une IA Ã  l'API GitLab pour la revue de code, il peut connecter une IA Ã  *n'importe quoi* â€” YouTube pour des explications de cours, ArXiv pour des papers, Google Drive pour des notes, Gmail pour des rÃ©sumÃ©s.

RAG-M1 a commencÃ© comme un chatbot de rÃ©vision et a Ã©voluÃ© en un **espace de travail IA centralisÃ©** pour toute ma vie Ã©tudiante. Le mÃªme pattern architectural (agents spÃ©cialisÃ©s + orchestrateur + intÃ©gration d'outils via MCP) qui fonctionne Ã  l'Ã©chelle enterprise chez Siemens fonctionne aussi pour un seul Ã©tudiant gÃ©rant dix matiÃ¨res, trente deadlines et des centaines de documents.

**Ma conviction :**

L'avenir des outils IA n'est pas les interfaces chat. C'est une **infrastructure invisible** â€” des systÃ¨mes qui participent Ã  ton workflow existant sans exiger que tu changes ta faÃ§on de travailler. AI GitLab Review le prouve : les dÃ©veloppeurs ne quittent jamais GitLab, n'ouvrent jamais un nouvel outil, ne changent jamais leurs habitudes. L'IA vient Ã  eux.

Ce principe â€” rencontrer les utilisateurs lÃ  oÃ¹ ils sont, pas lÃ  oÃ¹ on voudrait qu'ils soient â€” est ce que je veux porter dans chaque systÃ¨me que je construirai ensuite.`,
      },
      date: "2026-05-01",
      ghLink: "https://github.com/yanimohellebi26/RAG-M1",
    },
  ];

  const heading = copy[language] || copy.en;

  return (
    <section className="section-shell" id="blog">
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">
            {heading.heading.lead} <span className="text-brand-accent">{heading.heading.highlight}</span>
          </h1>
          <p className="text-sm text-brand-muted">
            {heading.subtitle}
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <BlogCards
              key={article.id}
              title={article.title[language] || article.title.en}
              description={article.description[language] || article.description.en}
              content={article.content[language] || article.content.en}
              date={article.date}
              ghLink={article.ghLink}
              demoLink={article.demoLink}
              imgPath={article.imgPath}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
