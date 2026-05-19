import React from "react";
import BlogCards from "./BlogCards";
import { useLanguage } from "../../context/LanguageContext";

function Blog() {
  const { language } = useLanguage();

  const copy = {
    en: {
      heading: { lead: "Research &", highlight: "Insights" },
      subtitle: "My journey into research \u2014 from lab internships to R&D engineering.",
    },
    fr: {
      heading: { lead: "Recherche &", highlight: "R\u00e9flexions" },
      subtitle: "Mon parcours en recherche \u2014 du stage en laboratoire \u00e0 l\u2019ing\u00e9nierie R&D.",
    },
  };

  const articles = [
    {
      id: "stage-lab",
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

At the lab, the first challenge was not training a neural network \u2014 it was **creating the data itself**.

My project focused on classifying architectural styles (standard, complex, Italian) from 3D point clouds using PointNet and PointNet++. But no public dataset of procedurally generated houses with labelled architectural elements existed. So I built one \u2014 using Blender\u2019s Python API to procedurally generate thousands of synthetic house point clouds, each with known ground truth labels for walls, doors, windows, and roofs.

**That experience changed how I think about research.**

In coursework, the problem is always well-defined. In a lab, you spend weeks just *formulating* the right question. What granularity of labels makes sense? How many points per sample? How do you handle class imbalance between a massive roof surface and a tiny door frame? These decisions shape everything downstream, and there is no textbook answer \u2014 only hypotheses to test.

The second revelation was **how much research is iteration, not inspiration**. I ran dozens of training configurations: PointNet vs PointNet++, varying numbers of points (1024, 2048, 4096), different augmentation strategies (random rotation, Gaussian noise, scaling). Each run generated metrics that guided the next experiment. It is methodical, patient work \u2014 closer to experimental physics than to hackathon-style coding.

What I brought back from this experience is a deep respect for **reproducibility**. Every experiment was logged, every hyperparameter tracked, every result exportable. That rigour is what separates a student project from a research contribution.

I also learned that **3D deep learning is still an open frontier**. Unlike images where CNNs dominate, point clouds require architectures that handle unordered sets, varying density, and spatial relationships \u2014 problems where PointNet\u2019s symmetric functions and PointNet++\u2019s hierarchical grouping represent fundamentally different trade-offs.

This internship confirmed something I had suspected: **I want to continue in research.** Not because it is glamorous \u2014 it is often frustrating, slow, and humbling \u2014 but because it is the space where you confront genuinely unsolved problems.

And that confrontation is what makes you grow.`,
        fr: `Avant ce stage, je n\u2019avais jamais travaill\u00e9 sur un probl\u00e8me o\u00f9 la v\u00e9rit\u00e9 terrain devait \u00eatre *g\u00e9n\u00e9r\u00e9e*. Dans la plupart des cours de ML, on t\u00e9l\u00e9charge un dataset, on entra\u00eene un mod\u00e8le, on \u00e9value. Propre. Contr\u00f4l\u00e9. Pr\u00e9visible.

Au laboratoire, le premier d\u00e9fi n\u2019\u00e9tait pas d\u2019entra\u00eener un r\u00e9seau de neurones \u2014 c\u2019\u00e9tait **de cr\u00e9er les donn\u00e9es elles-m\u00eames**.

Mon projet portait sur la classification de styles architecturaux (standard, complexe, italien) \u00e0 partir de nuages de points 3D avec PointNet et PointNet++. Mais aucun dataset public de maisons g\u00e9n\u00e9r\u00e9es proc\u00e9duralement avec des labels d\u2019\u00e9l\u00e9ments architecturaux n\u2019existait. Je l\u2019ai donc construit \u2014 en utilisant l\u2019API Python de Blender pour g\u00e9n\u00e9rer proc\u00e9duralement des milliers de maisons synth\u00e9tiques, chacune avec des labels connus pour les murs, portes, fen\u00eatres et toits.

**Cette exp\u00e9rience a chang\u00e9 ma fa\u00e7on de penser la recherche.**

En cours, le probl\u00e8me est toujours bien d\u00e9fini. Dans un labo, on passe des semaines juste \u00e0 *formuler* la bonne question. Quelle granularit\u00e9 de labels a du sens ? Combien de points par \u00e9chantillon ? Comment g\u00e9rer le d\u00e9s\u00e9quilibre de classes entre une surface de toit massive et un minuscule cadre de porte ? Ces d\u00e9cisions fa\u00e7onnent tout en aval, et il n\u2019y a pas de r\u00e9ponse dans un manuel \u2014 seulement des hypoth\u00e8ses \u00e0 tester.

La seconde r\u00e9v\u00e9lation a \u00e9t\u00e9 **\u00e0 quel point la recherche est de l\u2019it\u00e9ration, pas de l\u2019inspiration**. J\u2019ai lanc\u00e9 des dizaines de configurations d\u2019entra\u00eenement : PointNet vs PointNet++, nombre variable de points (1024, 2048, 4096), diff\u00e9rentes strat\u00e9gies d\u2019augmentation (rotation al\u00e9atoire, bruit gaussien, mise \u00e0 l\u2019\u00e9chelle). Chaque run g\u00e9n\u00e8re des m\u00e9triques qui guident l\u2019exp\u00e9rience suivante. C\u2019est un travail m\u00e9thodique, patient \u2014 plus proche de la physique exp\u00e9rimentale que du code en mode hackathon.

Ce que j\u2019ai ramen\u00e9 de cette exp\u00e9rience, c\u2019est un profond respect pour la **reproductibilit\u00e9**. Chaque exp\u00e9rience \u00e9tait journalis\u00e9e, chaque hyperparam\u00e8tre trac\u00e9, chaque r\u00e9sultat exportable. Cette rigueur est ce qui s\u00e9pare un projet \u00e9tudiant d\u2019une contribution de recherche.

J\u2019ai aussi appris que **le deep learning 3D est encore une fronti\u00e8re ouverte**. Contrairement aux images o\u00f9 les CNN dominent, les nuages de points exigent des architectures qui g\u00e8rent des ensembles non ordonn\u00e9s, des densit\u00e9s variables et des relations spatiales \u2014 des probl\u00e8mes o\u00f9 les fonctions sym\u00e9triques de PointNet et le groupement hi\u00e9rarchique de PointNet++ repr\u00e9sentent des compromis fondamentalement diff\u00e9rents.

Ce stage m\u2019a confirm\u00e9 quelque chose que je soup\u00e7onnais : **je veux continuer en recherche.** Pas parce que c\u2019est glamour \u2014 c\u2019est souvent frustrant, lent et humiliant \u2014 mais parce que c\u2019est l\u2019espace o\u00f9 l\u2019on affronte des probl\u00e8mes r\u00e9ellement non r\u00e9solus.

Et c\u2019est cette confrontation qui fait grandir.`,
      },
      date: "2025-06-15",
      ghLink: "https://github.com/yanimohellebi26/reconnaissance_maison-nuage-de-points",
    },
    {
      id: "initiation-recherche",
      title: {
        en: "Initiation to Research: Transformers Meet Graph Neural Networks",
        fr: "Initiation \u00e0 la Recherche : Quand les Transformers Rencontrent les R\u00e9seaux de Graphes",
      },
      description: {
        en: "A synthesis of two foundational 2017 papers revealing the structural bridge between attention and graph convolution",
        fr: "Synth\u00e8se de deux articles fondateurs de 2017 r\u00e9v\u00e9lant le lien structurel entre attention et convolution de graphes",
      },
      content: {
        en: `The "Initiation to Research" module in Master 1 asks you to do something surprisingly rare in a CS curriculum: **read foundational papers, understand the mathematics from first principles, and synthesise them into a coherent contribution.**

My work focused on two papers that both appeared in 2017 and each revolutionised their respective field:
- *Attention Is All You Need* (Vaswani et al.) \u2014 the Transformer architecture that eliminated recurrence from NLP
- *Semi-Supervised Classification with Graph Convolutional Networks* (Kipf & Welling) \u2014 the GCN that made deep learning on graphs scalable

**The key insight I developed:**

On the surface, these architectures seem unrelated. One processes sequences (text), the other processes graphs (networks). But when you formalise both through the lens of **Message Passing Neural Networks** (Gilmer et al., 2017), a structural bridge appears:

Self-attention can be viewed as a graph convolution operating on a **complete implicit graph with dynamic edges**. In a Transformer, every token attends to every other token \u2014 that is a fully-connected graph where edge weights (attention scores) are computed dynamically. In a GCN, convolution operates on a fixed, sparse adjacency matrix.

**The mathematical derivations:**

For the Transformer, I traced the full derivation: why the scaling factor \u221adk prevents gradient vanishing in the softmax, how multi-head attention creates parallel subspaces, and why positional encoding uses sinusoidal functions for extrapolation.

For the GCN, I worked through the spectral graph theory: the Laplacian eigendecomposition, the Chebyshev polynomial approximation that avoids O(N\u00b3) complexity, and the first-order simplification (the "renormalization trick") that makes the final architecture so elegant.

**What this taught me about research:**

The deepest lesson was that **breakthroughs rarely come from isolated genius \u2014 they come from seeing connections between existing ideas**. Vaswani removed recurrence; Kipf simplified spectral filtering. But the unifying insight (MPNN framework) required reading *across* sub-fields.

This is what I find most exciting about AI research today: the boundaries between NLP, computer vision, graph learning, and geometric deep learning are dissolving. The same mathematical primitives \u2014 attention, message passing, learned representations \u2014 appear everywhere, just in different instantiations.

Writing this synthesis taught me to think in formal structures rather than implementation details. It is a skill I now apply to every system I design: what is the *mathematical object* I am computing, and what are the *structural assumptions* behind it?`,
        fr: `Le module "Initiation \u00e0 la Recherche" en Master 1 demande quelque chose de rare dans un cursus informatique : **lire des articles fondateurs, comprendre les math\u00e9matiques depuis les principes premiers, et les synth\u00e9tiser en une contribution coh\u00e9rente.**

Mon travail portait sur deux articles parus en 2017 qui ont chacun r\u00e9volutionn\u00e9 leur domaine :
- *Attention Is All You Need* (Vaswani et al.) \u2014 l\u2019architecture Transformer qui a \u00e9limin\u00e9 la r\u00e9currence en NLP
- *Semi-Supervised Classification with Graph Convolutional Networks* (Kipf & Welling) \u2014 le GCN qui a rendu le deep learning sur graphes scalable

**L\u2019intuition cl\u00e9 que j\u2019ai d\u00e9velopp\u00e9e :**

En surface, ces architectures semblent sans rapport. L\u2019une traite des s\u00e9quences (texte), l\u2019autre des graphes (r\u00e9seaux). Mais quand on formalise les deux \u00e0 travers le prisme des **Message Passing Neural Networks** (Gilmer et al., 2017), un pont structurel appara\u00eet :

La self-attention peut \u00eatre vue comme une convolution de graphe op\u00e9rant sur un **graphe complet implicite \u00e0 ar\u00eates dynamiques**. Dans un Transformer, chaque token attend chaque autre token \u2014 c\u2019est un graphe enti\u00e8rement connect\u00e9 o\u00f9 les poids des ar\u00eates (scores d\u2019attention) sont calcul\u00e9s dynamiquement. Dans un GCN, la convolution op\u00e8re sur une matrice d\u2019adjacence fixe et sparse.

**Les d\u00e9rivations math\u00e9matiques :**

Pour le Transformer, j\u2019ai retrac\u00e9 la d\u00e9rivation compl\u00e8te : pourquoi le facteur d\u2019\u00e9chelle \u221adk emp\u00eache la disparition du gradient dans le softmax, comment le multi-head attention cr\u00e9e des sous-espaces parall\u00e8les, et pourquoi l\u2019encodage positionnel utilise des fonctions sinuso\u00efdales pour l\u2019extrapolation.

Pour le GCN, j\u2019ai travaill\u00e9 la th\u00e9orie spectrale des graphes : la d\u00e9composition en valeurs propres du Laplacien, l\u2019approximation par polyn\u00f4mes de Tchebychev qui \u00e9vite la complexit\u00e9 O(N\u00b3), et la simplification au premier ordre (le "renormalization trick") qui rend l\u2019architecture finale si \u00e9l\u00e9gante.

**Ce que cela m\u2019a appris sur la recherche :**

La le\u00e7on la plus profonde est que **les perc\u00e9es viennent rarement du g\u00e9nie isol\u00e9 \u2014 elles viennent de la capacit\u00e9 \u00e0 voir des connexions entre des id\u00e9es existantes**. Vaswani a supprim\u00e9 la r\u00e9currence ; Kipf a simplifi\u00e9 le filtrage spectral. Mais l\u2019insight unificateur (le cadre MPNN) n\u00e9cessitait de lire *\u00e0 travers* les sous-domaines.

C\u2019est ce que je trouve le plus passionnant dans la recherche en IA aujourd\u2019hui : les fronti\u00e8res entre NLP, vision par ordinateur, apprentissage sur graphes et deep learning g\u00e9om\u00e9trique se dissolvent. Les m\u00eames primitives math\u00e9matiques \u2014 attention, passage de messages, repr\u00e9sentations apprises \u2014 apparaissent partout, juste sous des instanciations diff\u00e9rentes.

R\u00e9diger cette synth\u00e8se m\u2019a appris \u00e0 penser en structures formelles plut\u00f4t qu\u2019en d\u00e9tails d\u2019impl\u00e9mentation. C\u2019est une comp\u00e9tence que j\u2019applique d\u00e9sormais \u00e0 chaque syst\u00e8me que je con\u00e7ois : quel est l\u2019*objet math\u00e9matique* que je calcule, et quelles sont les *hypoth\u00e8ses structurelles* derri\u00e8re ?`,
      },
      date: "2026-04-15",
    },
    {
      id: "alternance-rd",
      title: {
        en: "R&D at Siemens: AI GitLab Review \u2014 From Prototype to 103 Users",
        fr: "R&D chez Siemens : AI GitLab Review \u2014 Du Prototype \u00e0 103 Utilisateurs",
      },
      description: {
        en: "Building a multi-agent code review system with LangGraph and MCP, deployed to 14 dev teams",
        fr: "Construire un syst\u00e8me de revue de code multi-agents avec LangGraph et MCP, d\u00e9ploy\u00e9 aupr\u00e8s de 14 \u00e9quipes",
      },
      content: {
        en: `When I joined Siemens Digital Industries Software in Lyon as an R&D apprentice in AI, I was handed a problem that every large engineering organisation faces: **code reviews do not scale.**

With hundreds of merge requests per week across fourteen development teams, senior engineers were spending hours catching the same recurring issues \u2014 security flaws, unhandled edge cases, inconsistent error patterns. The human reviewers were doing essential work, but a significant portion of it was *mechanical*: pattern-matching that a well-designed system could handle first.

**AI GitLab Review** was my answer.

**The architecture:**

The solution is a **multi-agent system orchestrated by LangGraph**, structured as a state machine:

1. A **classifier agent** analyses each file in the merge request and routes it to the relevant specialised agents based on file type and content.
2. Four **specialised agents** analyse in parallel:
   - Security (injection, secrets, auth vulnerabilities)
   - Logic defects (race conditions, off-by-one, null dereferences)
   - Error handling (uncaught exceptions, silent failures, missing retries)
   - Code quality (naming, complexity, dead code, missing documentation)
3. A **synthesiser** collects all findings, deduplicates by **semantic similarity** (not string matching \u2014 two differently worded comments about the same issue are merged), and scores each finding with a **trust score**.
4. Comments are published directly on GitLab via the **Model Context Protocol (MCP)**, appearing inline on the exact lines concerned.

**The trust scoring system:**

Not all AI findings deserve equal weight. The system maintains a self-review mechanism: before posting, each comment is evaluated for confidence. Low-confidence findings are flagged as suggestions rather than issues, reducing noise. Over time, the trust model learns which patterns in which codebases produce genuine value.

**Deployment and impact:**

The tool is currently deployed to **14 development teams** with **103 active users**. It runs automatically on every merge request, posting comments in the same interface developers already use \u2014 zero friction, zero workflow change.

**What I learned:**

The hardest problem was not the LLM integration. It was **calibrating signal-to-noise**. A system that flags everything is worse than no system at all \u2014 it trains developers to ignore AI comments. The semantic deduplication, trust scoring, and model tiering (using cheaper models for simple checks, expensive ones for complex logic) were all born from real feedback: *"too many comments"*, *"this one was wrong"*, *"why didn\u2019t it catch that?"*

I also learned that **shipping a tool to production is a fundamentally different skill from building a prototype**. Prototypes work in demos. Production tools must handle edge cases, fail gracefully, scale to thousands of MRs, and earn the trust of engineers who are initially skeptical.

**The broader picture \u2014 RAG-M1 and MCP:**

This experience directly fed my personal project **RAG-M1**. The insight: if MCP can connect an AI to GitLab\u2019s API for code review, it can connect an AI to *anything* \u2014 YouTube for lecture explanations, ArXiv for papers, Google Drive for notes, Gmail for summaries.

RAG-M1 started as a revision chatbot and evolved into a **centralised AI workspace** for my entire student life. The same architectural pattern (specialised agents + orchestrator + tool integration via MCP) that works at enterprise scale at Siemens also works for a single student managing ten courses, thirty deadlines, and hundreds of documents.

**My conviction:**

The future of AI tools is not chat interfaces. It is **invisible infrastructure** \u2014 systems that participate in your existing workflow without requiring you to change how you work. AI GitLab Review proves this: developers never leave GitLab, never open a new tool, never change their habits. The AI comes to them.

That principle \u2014 meet users where they are, not where you wish they were \u2014 is what I want to carry into every system I build next.`,
        fr: `Quand j\u2019ai rejoint Siemens Digital Industries Software \u00e0 Lyon en tant qu\u2019apprenti R&D en IA, on m\u2019a confi\u00e9 un probl\u00e8me que toute grande organisation d\u2019ing\u00e9nierie rencontre : **les revues de code ne passent pas \u00e0 l\u2019\u00e9chelle.**

Avec des centaines de merge requests par semaine \u00e0 travers quatorze \u00e9quipes de d\u00e9veloppement, les ing\u00e9nieurs seniors passaient des heures \u00e0 attraper les m\u00eames erreurs r\u00e9currentes \u2014 failles de s\u00e9curit\u00e9, cas limites non g\u00e9r\u00e9s, patterns d\u2019erreur incoh\u00e9rents. Les reviewers humains faisaient un travail essentiel, mais une portion significative \u00e9tait *m\u00e9canique* : du pattern-matching qu\u2019un syst\u00e8me bien con\u00e7u pourrait g\u00e9rer en premier.

**AI GitLab Review** est ma r\u00e9ponse.

**L\u2019architecture :**

La solution est un **syst\u00e8me multi-agents orchestr\u00e9 par LangGraph**, structur\u00e9 comme une machine \u00e0 \u00e9tats :

1. Un **agent classificateur** analyse chaque fichier de la merge request et le route vers les agents sp\u00e9cialis\u00e9s pertinents selon le type et le contenu du fichier.
2. Quatre **agents sp\u00e9cialis\u00e9s** analysent en parall\u00e8le :
   - S\u00e9curit\u00e9 (injection, secrets, vuln\u00e9rabilit\u00e9s d\u2019authentification)
   - D\u00e9fauts logiques (race conditions, off-by-one, d\u00e9r\u00e9f\u00e9rencements null)
   - Gestion d\u2019erreurs (exceptions non catch\u00e9es, \u00e9checs silencieux, retries manquants)
   - Qualit\u00e9 de code (nommage, complexit\u00e9, code mort, documentation manquante)
3. Un **synth\u00e9tiseur** collecte tous les r\u00e9sultats, d\u00e9duplique par **similarit\u00e9 s\u00e9mantique** (pas par correspondance de cha\u00eenes \u2014 deux commentaires formul\u00e9s diff\u00e9remment sur le m\u00eame probl\u00e8me sont fusionn\u00e9s), et attribue un **score de confiance** \u00e0 chaque trouvaille.
4. Les commentaires sont publi\u00e9s directement sur GitLab via le **Model Context Protocol (MCP)**, apparaissant en ligne sur les lignes exactes concern\u00e9es.

**Le syst\u00e8me de trust scoring :**

Toutes les trouvailles de l\u2019IA ne m\u00e9ritent pas le m\u00eame poids. Le syst\u00e8me maintient un m\u00e9canisme de self-review : avant publication, chaque commentaire est \u00e9valu\u00e9 en confiance. Les trouvailles \u00e0 faible confiance sont marqu\u00e9es comme suggestions plut\u00f4t qu\u2019issues, r\u00e9duisant le bruit. Avec le temps, le mod\u00e8le de confiance apprend quels patterns dans quelles codebases produisent une valeur r\u00e9elle.

**D\u00e9ploiement et impact :**

L\u2019outil est actuellement d\u00e9ploy\u00e9 aupr\u00e8s de **14 \u00e9quipes de d\u00e9veloppement** avec **103 utilisateurs actifs**. Il s\u2019ex\u00e9cute automatiquement sur chaque merge request, postant des commentaires dans la m\u00eame interface que les d\u00e9veloppeurs utilisent d\u00e9j\u00e0 \u2014 z\u00e9ro friction, z\u00e9ro changement de workflow.

**Ce que j\u2019ai appris :**

Le probl\u00e8me le plus dur n\u2019\u00e9tait pas l\u2019int\u00e9gration LLM. C\u2019\u00e9tait **calibrer le ratio signal/bruit**. Un syst\u00e8me qui signale tout est pire que pas de syst\u00e8me du tout \u2014 il entra\u00eene les d\u00e9veloppeurs \u00e0 ignorer les commentaires IA. La d\u00e9duplication s\u00e9mantique, le trust scoring et le model tiering (mod\u00e8les moins chers pour les v\u00e9rifications simples, co\u00fbteux pour la logique complexe) sont tous n\u00e9s de retours r\u00e9els : *"trop de commentaires"*, *"celui-l\u00e0 \u00e9tait faux"*, *"pourquoi il n\u2019a pas attrap\u00e9 \u00e7a ?"*

J\u2019ai aussi appris que **livrer un outil en production est une comp\u00e9tence fondamentalement diff\u00e9rente de construire un prototype**. Les prototypes fonctionnent en d\u00e9mo. Les outils de production doivent g\u00e9rer les cas limites, \u00e9chouer gracieusement, passer \u00e0 l\u2019\u00e9chelle sur des milliers de MR, et gagner la confiance d\u2019ing\u00e9nieurs initialement sceptiques.

**La vision plus large \u2014 RAG-M1 et MCP :**

Cette exp\u00e9rience a directement nourri mon projet personnel **RAG-M1**. L\u2019intuition : si MCP peut connecter une IA \u00e0 l\u2019API GitLab pour la revue de code, il peut connecter une IA \u00e0 *n\u2019importe quoi* \u2014 YouTube pour des explications de cours, ArXiv pour des papers, Google Drive pour des notes, Gmail pour des r\u00e9sum\u00e9s.

RAG-M1 a commenc\u00e9 comme un chatbot de r\u00e9vision et a \u00e9volu\u00e9 en un **espace de travail IA centralis\u00e9** pour toute ma vie \u00e9tudiante. Le m\u00eame pattern architectural (agents sp\u00e9cialis\u00e9s + orchestrateur + int\u00e9gration d\u2019outils via MCP) qui fonctionne \u00e0 l\u2019\u00e9chelle enterprise chez Siemens fonctionne aussi pour un seul \u00e9tudiant g\u00e9rant dix mati\u00e8res, trente deadlines et des centaines de documents.

**Ma conviction :**

L\u2019avenir des outils IA n\u2019est pas les interfaces chat. C\u2019est une **infrastructure invisible** \u2014 des syst\u00e8mes qui participent \u00e0 ton workflow existant sans exiger que tu changes ta fa\u00e7on de travailler. AI GitLab Review le prouve : les d\u00e9veloppeurs ne quittent jamais GitLab, n\u2019ouvrent jamais un nouvel outil, ne changent jamais leurs habitudes. L\u2019IA vient \u00e0 eux.

Ce principe \u2014 rencontrer les utilisateurs l\u00e0 o\u00f9 ils sont, pas l\u00e0 o\u00f9 on voudrait qu\u2019ils soient \u2014 est ce que je veux porter dans chaque syst\u00e8me que je construirai ensuite.`,
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
