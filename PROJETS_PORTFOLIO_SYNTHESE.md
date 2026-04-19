# Synthèse des Projets — Portfolio Yani Mohellebi

> Base de connaissances pour alimenter les cards du portfolio.
> Généré le 19 avril 2026 à partir de l'analyse de 41 projets.

---

## Table des matières

1. [Vue d'ensemble](#vue-densemble)
2. [Projets par catégorie](#projets-par-catégorie)
3. [Stack technique globale](#stack-technique-globale)
4. [Fiches projets détaillées](#fiches-projets-détaillées)

---

## Vue d'ensemble

| Métrique | Valeur |
|---|---|
| **Total projets** | 41 |
| **Projets avancés** | 22 |
| **Projets intermédiaires** | 16 |
| **Projets débutants** | 3 |
| **Projets complets** | 23 |
| **Projets en cours** | 18 |

### Répartition par domaine

| Domaine | Nombre | Projets phares |
|---|---|---|
| **AI/ML & NLP** | 16 | 12 Angry Agents, RAG-M1, RAG-Master1, NeutraView, Pontifex |
| **Full-Stack Web** | 12 | bars_lyon, LyonByNight, MovieCard, RAWVIEW |
| **Games** | 5 | DROL-GAME, The Mind, Légendes Amazighes |
| **3D & Computer Vision** | 4 | segmentation-semantique, reconnaissance_maison, poisson-OPENGL |
| **Systems & HPC** | 3 | Bucket_Sort, The Mind, crypto |
| **Database & DevOps** | 2 | BD (Oracle), question2_project |
| **Creative Web** | 5 | bowling, appology, sorry, SORTIR |

---

## Projets par catégorie

### AI/ML & Multi-Agent Systems

| Projet | Tagline | Stack principal | Statut |
|---|---|---|---|
| **12 Angry Agents (Géopol)** | 12 LLM agents débattent de géopolitique avec RAG temps réel | Python, FastAPI, LangGraph, Qdrant, Next.js | En cours |
| **12 Angry Men (Repro)** | Reproduction computationnelle des dynamiques du film | Python, LiteLLM, AsyncIO, SciPy | En cours |
| **CineAgent** | Fins alternatives de films via multi-agent LangGraph | Python, FastAPI, LangGraph, Next.js, SSE | En cours |
| **RAG-M1** | Multi-agent RAG sur 139 fichiers de cours M1 | Python, LlamaIndex, Qdrant, BGE-M3, FastAPI | En cours |
| **RAG Master 1** | Assistant IA avec recherche hybride + outils Copilot | Python, Flask, React, ChromaDB, LangChain, MCP | En cours |
| **Hackathon Mistral** | RPG narratif amazigh avec Mistral AI comme Game Master | Python, Mistral AI, MCP, FAISS, QLoRA | En cours |
| **NeutraView** | Reviews culturelles objectives via BERT + GPT | Python, FastAPI, React, BERT, OpenAI, Docker | En cours |
| **RAWVIEW (review)** | Plateforme de reviews anti-biais avec NLP | SvelteKit, FastAPI, PostgreSQL, HuggingFace | En cours |
| **Détection de triche** | Détection de triche par vision/audio pendant les examens | Python, FastAPI, OpenCV, React, Docker | En cours |
| **Détecteur de spam** | Classifieur spam TF-IDF + bot Telegram temps réel | Python, scikit-learn, Telegram Bot API | Complet |
| **Pontifex (crypto)** | Chiffre de Solitaire + assistant RAG crypto | Python, Streamlit, Gemini, ChromaDB | Complet |

### Full-Stack Web Applications

| Projet | Tagline | Stack principal | Statut |
|---|---|---|---|
| **Lyon Night Guide (bars_lyon)** | Guide nightlife Lyon avec chatbot IA + carte Mapbox | Next.js, TypeScript, Supabase, PostGIS, OpenAI | En cours |
| **Lyon By Night** | PWA nightlife Lyon avec carte, IA, et groupe | Next.js 16, React 19, Supabase, Mapbox, PWA | En cours |
| **MovieCard** | Éducation cinéma gamifiée avec cartes collectibles + IA | Next.js, React 19, Supabase, Gemini, Recharts | En cours |
| **BookBot (books)** | Chatbot recommandation livres basé sur émotion | React, FastAPI, OpenAI, Open Library API | Complet |
| **Smart Book Reco** | Recommandation livres par matching émotionnel/thématique | React, FastAPI, OpenAI, Google AI, Vercel | Complet |
| **LinkedIn AI Chatbot** | Co-pilote IA pour messages LinkedIn professionnels | React, FastAPI, OpenAI API | En cours |
| **SUBSENSE (instagram)** | Transcription et analyse IA de vidéos Instagram | React, FastAPI, yt-dlp, FFmpeg, Whisper | En cours |
| **MaxyPlace (e-commerce)** | E-commerce multi-rôle PHP sans framework | PHP, MySQL, PDO, jQuery, MVC custom | Complet |
| **Paris Nightlife** | Découverte bars/clubs Paris avec carte et comparateur | React, TypeScript, Leaflet, shadcn/ui | Complet |
| **Maria** | App nightlife Paris (Figma-to-code) | React, TypeScript, Leaflet, MUI, Radix | Complet |
| **NUTRI-MIND (muscule_ia)** | Planificateur nutrition pour étudiants sportifs | React 19, CSS Modules, React Router | Complet |
| **Portfolio (Yani)** | Portfolio avec chatbot IA et calendrier GitHub | React, Express, OpenAI, Vercel | Complet |

### Games & Interactive

| Projet | Tagline | Stack principal | Statut |
|---|---|---|---|
| **DROL-GAME** | Jeu plateforme Java avec moteur physique et multijoueur TCP | Java, Swing, TCP Sockets, 120 FPS | En cours |
| **The Mind** | Jeu de cartes coopératif avec robot XGBoost | C, TCP, pthreads, Python, XGBoost | Complet |
| **Légendes Amazighes** | Jeu Unity 3D mythologie amazighe | Unity, C#, ScriptableObjects | En cours |
| **Lapine & Bonbons (date)** | Mini-jeu 2D cross-platform LibGDX | Java, LibGDX, Gradle, FreeType | Complet |
| **Strike du Destin (bowling)** | Expérience cinématique interactive avec audio IA | HTML5, CSS3, JS, Web Audio, jsPDF, ElevenLabs | Complet |

### 3D Computer Vision & Graphics

| Projet | Tagline | Stack principal | Statut |
|---|---|---|---|
| **Segmentation sémantique** | Segmentation LiDAR urbain (Paris/Lille/Dijon) PointNet++ | PyTorch, PointNet++, Open3D | Complet |
| **Reconnaissance maison** | Classification de maisons depuis nuages de points 3D | PyTorch, PointNet, PointNet++ | Complet |
| **Segmentation face cube** | Benchmark segmentation 3D (PointNet vs KPConv) | PyTorch, PointNet, KPConv | En cours |
| **Poisson OpenGL** | Rendu 3D poisson texturé avec éclairage Phong | C++, OpenGL, GLUT, libjpeg | Complet |

### Algorithms & Systems

| Projet | Tagline | Stack principal | Statut |
|---|---|---|---|
| **Bucket Sort distribué** | Tri distribué MPI + OpenMP à grande échelle | C, MPI, OpenMP, Python (viz) | Complet |
| **Coloration de graphes** | Greedy vs DSatur avec benchmarks | Java | Complet |
| **Oracle Execution Plans (BD)** | Étude optimiseur Oracle (index, plans d'exécution) | Oracle, PL/SQL, Bash | Complet |
| **ML Package (question2)** | Script ML → package pip → API Flask → Docker | Python, Flask, Docker, scikit-learn | Complet |

### Desktop & E-Commerce

| Projet | Tagline | Stack principal | Statut |
|---|---|---|---|
| **Boutique de Fleurs** | E-commerce desktop Java avec patterns MVC/DAO/Observer | Java 21, Swing, SQLite, Maven, JUnit 5 | Complet |

### Creative & Fun

| Projet | Tagline | Stack principal | Statut |
|---|---|---|---|
| **Movie Quote Catcher** | Capture de citations de films multi-plateforme + IA | Chrome Extension, Rust, Gemini, Whisper | En cours |
| **Unlock Paris (appology)** | App gamifiée avec 3 mini-challenges | React, Tailwind, Canvas API | Complet |
| **Sorry** | Page web animée avec pétales et glassmorphisme | React 19, Vite, Tailwind | Complet |
| **SORTIR** | Choix d'activité aléatoire entre amis | React 19, React Router 7 | Complet |

---

## Stack technique globale

### Langages
`Python` · `TypeScript` · `JavaScript` · `Java` · `C` · `C++` · `C#` · `PHP` · `Rust` · `PL/SQL`

### Frontend
`React` · `Next.js` · `SvelteKit` · `Tailwind CSS` · `shadcn/ui` · `MUI` · `Radix UI` · `Framer Motion` · `Streamlit`

### Backend
`FastAPI` · `Flask` · `Express.js` · `Vercel Serverless`

### AI/ML
`LangGraph` · `LangChain` · `LlamaIndex` · `OpenAI GPT` · `Google Gemini` · `Mistral AI` · `BERT` · `Whisper` · `XGBoost` · `PointNet/PointNet++` · `KPConv` · `scikit-learn`

### Databases
`PostgreSQL` · `Supabase (PostGIS, pgvector)` · `Qdrant` · `ChromaDB` · `FAISS` · `SQLite` · `MySQL` · `Oracle` · `Neon Postgres`

### DevOps & Tools
`Docker` · `Vercel` · `MCP (Model Context Protocol)` · `GitHub Copilot SDK` · `MPI` · `OpenMP` · `Makefile`

### Game Engines & Graphics
`Unity` · `LibGDX` · `OpenGL` · `Godot 4` · `Java Swing`

---

## Fiches projets détaillées

---

### 1. 12 Angry Agents — Geopolitical Debate Simulation
- **Tagline**: 12 LLM agents débattent de géopolitique, grounded par 60+ sources media via RAG
- **Stack**: Python, FastAPI, LangGraph, LiteLLM, Qdrant, PostgreSQL, Redis, Celery, Next.js, D3.js, Docker
- **Points forts**: 12 agents hétérogènes (GPT, Claude, Gemini, Grok, DeepSeek, Llama, Qwen) · Scraping 60+ sources multilingues · RAG 3 couches · Métriques convergence (Shannon entropy, Granger causality, DTW) · 120 runs expérimentaux
- **Catégorie**: `AI/ML` · `Research` · `Multi-Agent`
- **Complexité**: ⭐⭐⭐⭐⭐
- **Statut**: En cours
- **GitHub**: https://github.com/yanimohellebi26/12_angry_man_geopol

---

### 2. 12 Angry Men — Computational Reproduction
- **Tagline**: Reproduction computationnelle des dynamiques du jury de "12 Angry Men" avec 12 LLM agents
- **Stack**: Python, LiteLLM, AsyncIO, Pydantic, NumPy, SciPy, NetworkX, Matplotlib
- **Points forts**: 12 agents avec personnalités fidèles au film · 5 configurations expérimentales · Validation DTW + Spearman vs ground truth · ~450 runs · Orchestrateur partagé
- **Catégorie**: `AI/ML` · `Research` · `Simulation`
- **Complexité**: ⭐⭐⭐⭐⭐
- **Statut**: En cours
- **GitHub**: https://github.com/yanimohellebi26/12_angry_man_reproduction

---

### 3. Lyon Night Guide (bars_lyon)
- **Tagline**: Guide nightlife Lyon interactif avec chatbot IA, carte Mapbox, et comparateur de venues
- **Stack**: Next.js 16, TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion, Supabase (PostGIS + pgvector), OpenAI GPT-4o, Mapbox GL JS, Yelp/Foursquare API, Cloudinary, Vercel
- **Points forts**: Carte Mapbox avec clustering et dark mode · Chatbot RAG pour recommandations · Filtres avancés · Comparateur side-by-side · Scraping d'événements · i18n FR/EN · PWA
- **Catégorie**: `Full-Stack` · `AI` · `Geospatial` · `PWA`
- **Complexité**: ⭐⭐⭐⭐⭐
- **Statut**: En cours
- **GitHub**: https://github.com/yanimohellebi26/bars_lyon

---

### 4. Oracle Query Execution Plans (BD)
- **Tagline**: Étude approfondie de l'optimiseur Oracle — seuils index vs full table scan
- **Stack**: Oracle Database, PL/SQL, SQL*Plus, AUTOTRACE, DBMS_STATS, DBMS_XPLAN, Bash
- **Points forts**: Détection seuil sélectivité index · B-Tree vs Bitmap · Prédicats AND/OR multi-critères · 20+ scripts SQL · Protocole cold-read
- **Catégorie**: `Database` · `Performance` · `Academic`
- **Complexité**: ⭐⭐⭐
- **Statut**: Complet
- **GitHub**: https://github.com/yanimohellebi26/BD

---

### 5. BookBot — AI Book Recommendation
- **Tagline**: Chatbot IA qui recommande des livres selon votre réponse émotionnelle
- **Stack**: React 19, Vite 6, FastAPI, OpenAI GPT, Open Library API, Vercel, Render
- **Points forts**: Flow conversationnel en 2 étapes · 3 recommandations (populaire, deep cut, character-driven) · Enrichissement Open Library · Déployé en prod
- **Catégorie**: `Web App` · `AI` · `Full-Stack`
- **Complexité**: ⭐⭐⭐
- **Statut**: Complet
- **GitHub**: https://github.com/yanimohellebi26/books

---

### 6. E-Boutique de Fleurs (boutique-roses)
- **Tagline**: E-commerce desktop Java avec patterns MVC/DAO/Observer
- **Stack**: Java 21, Swing, SQLite, Maven, JUnit 5, Mockito, AssertJ Swing
- **Points forts**: Architecture MVC + DAO + Observer · 21 classes domaine (fleurs, bouquets) · 9 vues Swing · Tests unitaires + UI · Projet collaboratif
- **Catégorie**: `Desktop` · `E-Commerce` · `Design Patterns`
- **Complexité**: ⭐⭐⭐
- **Statut**: Complet
- **GitHub**: https://github.com/yanimohellebi26/boutique-roses

---

### 7. Strike du Destin (bowling)
- **Tagline**: Expérience web cinématique interactive avec narration audio IA et génération PDF
- **Stack**: HTML5, CSS3, JavaScript, Web Audio API, Canvas, html2canvas, jsPDF, ElevenLabs
- **Points forts**: Narration typewriter avec voix IA · Structure multi-actes · Système confetti · Génération PDF tickets · Responsive mobile
- **Catégorie**: `Creative Web` · `Interactive` · `Animation`
- **Complexité**: ⭐⭐⭐
- **Statut**: Complet
- **GitHub**: https://github.com/yanimohellebi26/bowling

---

### 8. Distributed Bucket Sort (Bucket_Sort)
- **Tagline**: Tri distribué MPI + OpenMP avec benchmarks et visualisations
- **Stack**: C, MPI (OpenMPI), OpenMP, Python, Matplotlib, Pandas, NumPy, Bash, Makefile
- **Points forts**: Bucket Sort distribué (broadcast, scatter, gather) · Top-K avec early termination · Hybride MPI+OpenMP · Benchmarks CSV · Courbes de speedup Python
- **Catégorie**: `HPC` · `Algorithm` · `Distributed Computing`
- **Complexité**: ⭐⭐⭐⭐⭐
- **Statut**: Complet
- **GitHub**: https://github.com/yanimohellebi26/Bucket_Sort

---

### 9. CineAgent — AI Alternate Film Endings
- **Tagline**: Fins alternatives de films via pipeline multi-agent LangGraph avec streaming SSE
- **Stack**: Python, FastAPI, LangGraph, SQLAlchemy, PostgreSQL, Redis, Celery, Tavily, Next.js 14, Tailwind, shadcn/ui, Zustand
- **Points forts**: Pipeline multi-agent (enrichissement → analyse → écriture → critique → formatage) · Tavily web search · SSE streaming · Immutable state TypedDict · Repository pattern
- **Catégorie**: `AI/ML` · `Full-Stack` · `Multi-Agent` · `Creative AI`
- **Complexité**: ⭐⭐⭐⭐⭐
- **Statut**: En cours
- **GitHub**: https://github.com/yanimohellebi26/cineAgent

---

### 10. Graph Colouring (coloration-tons-graph)
- **Tagline**: Comparaison Greedy vs DSatur avec benchmarks sur graphes circulants
- **Stack**: Java, CSV, PNG
- **Points forts**: Implémentation Greedy + DSatur · Graphes circulants avec nombre chromatique connu · Benchmarks CSV · CLI interactif
- **Catégorie**: `Algorithm` · `Graph Theory`
- **Complexité**: ⭐⭐⭐
- **Statut**: Complet
- **GitHub**: https://github.com/yanimohellebi26/coloration-tons-graph

---

### 11. Pontifex — Solitaire Cipher (crypto)
- **Tagline**: Chiffre de Solitaire complet avec UI Streamlit, assistant RAG, et outils de cryptanalyse
- **Stack**: Python, Streamlit, Google Gemini, ChromaDB, Sentence-Transformers, Plotly, NumPy, SciPy, pytest, Pillow
- **Points forts**: Cipher complet (5 opérations deck) · UI multi-tab Streamlit · RAG assistant crypto (ChromaDB + Gemini) · Démo vulnérabilités · Visualisation cartes
- **Catégorie**: `Security` · `Cryptography` · `AI`
- **Complexité**: ⭐⭐⭐⭐⭐
- **Statut**: Complet
- **GitHub**: https://github.com/yanimohellebi26/crypto

---

### 12. Lapine & Bonbons (date)
- **Tagline**: Mini-jeu 2D cross-platform avec LibGDX (desktop + web)
- **Stack**: Java, LibGDX, Gradle, FreeType, SpriteBatch, GWT
- **Points forts**: Character controller + collecte de bonbons · 6 modals thématiques · Particles emoji · FreeType fonts · Build multi-plateforme (JVM + HTML5)
- **Catégorie**: `Game` · `Cross-Platform`
- **Complexité**: ⭐⭐⭐
- **Statut**: Complet
- **GitHub**: https://github.com/yanimohellebi26/date

---

### 13. AI Spam Detector (detecteur-spam)
- **Tagline**: Pipeline ML complet TF-IDF → Logistic Regression → Bot Telegram temps réel
- **Stack**: Python, scikit-learn, TF-IDF, NLTK, Telegram Bot API, Pandas, Matplotlib, joblib
- **Points forts**: Vectorisation TF-IDF + régression logistique · Seuil de confiance ajustable · Bot Telegram live · Matrice confusion + ROC · Preprocessing NLP
- **Catégorie**: `AI/ML` · `NLP` · `Bot`
- **Complexité**: ⭐⭐⭐
- **Statut**: Complet
- **GitHub**: https://github.com/yanimohellebi26/detecteur-spam

---

### 14. Détection de Triche (detection_triche)
- **Tagline**: Système de surveillance d'examen par analyse vidéo/audio avec OpenCV et ML
- **Stack**: Python, FastAPI, OpenCV, NumPy, React, Vite, Docker Compose
- **Points forts**: Analyse frame-by-frame vidéo · Détection anomalies audio · Backend modulaire · Frontend React pour upload/navigation · Docker Compose
- **Catégorie**: `AI/ML` · `Computer Vision` · `EdTech`
- **Complexité**: ⭐⭐⭐⭐⭐
- **Statut**: En cours
- **GitHub**: https://github.com/yanimohellebi26/detection_triche

---

### 15. DROL-GAME — Multiplayer Platform Game
- **Tagline**: Reimplementation Java du jeu DROL (1983) avec moteur 120 FPS et multijoueur TCP
- **Stack**: Java, Swing, TCP Sockets, Ant, Custom game loop, AudioManager
- **Points forts**: Game loop 120 FPS / 200 UPS · 3 types d'ennemis avec IA distincte · Architecture client/serveur TCP · Audio positionnel · Système de menus complet
- **Catégorie**: `Game` · `Networking` · `Systems Programming`
- **Complexité**: ⭐⭐⭐⭐⭐
- **Statut**: En cours
- **GitHub**: https://github.com/yanimohellebi26/DROL-GAME

---

### 16. MaxyPlace — E-Commerce (e-commerce)
- **Tagline**: E-commerce multi-rôle PHP avec MVC custom, routing, et RBAC sans framework
- **Stack**: PHP, MySQL, PDO, JavaScript, jQuery, CSS
- **Points forts**: 3 rôles (client, vendeur, admin) · Routing front controller · Cart session server-side · Dashboard statistiques vendeur · Emails de confirmation
- **Catégorie**: `Web App` · `E-Commerce` · `Full-Stack`
- **Complexité**: ⭐⭐⭐
- **Statut**: Complet
- **GitHub**: https://github.com/yanimohellebi26/e-commerce

---

### 17. Amazigh Odyssey (hackathon_mistral)
- **Tagline**: RPG narratif IA sur mythologie amazighe — Hackathon Mistral 2026
- **Stack**: Python, Mistral AI, FastAPI, MCP Servers, FAISS, Sentence-Transformers, QLoRA (TRL + PEFT + bitsandbytes), W&B, HuggingFace, Rich, ElevenLabs
- **Points forts**: Architecture MCP multi-agent · Système magie Tifinagh (10 glyphes) · Storytelling dynamique IA · Fine-tuning QLoRA · Planned Godot 4 3D + voix ElevenLabs
- **Catégorie**: `AI/ML` · `Game` · `Hackathon` · `Cultural Tech`
- **Complexité**: ⭐⭐⭐⭐⭐
- **Statut**: En cours
- **GitHub**: https://github.com/yanimohellebi26/hackathon_mistral

---

### 18. SUBSENSE (instagram-video)
- **Tagline**: Transcription et analyse IA de vidéos Instagram (personnalité, style, thèmes)
- **Stack**: Python, FastAPI, React, Vite, yt-dlp, FFmpeg, Whisper, OpenAI API
- **Points forts**: Download vidéo via yt-dlp · Extraction audio FFmpeg · Support multi-langue · Analyse personnalité/contenu GPT · Progress temps réel React
- **Catégorie**: `AI/ML` · `Media Processing` · `NLP`
- **Complexité**: ⭐⭐⭐
- **Statut**: En cours
- **GitHub**: https://github.com/yanimohellebi26/instagram-video

---

### 19. Légendes Amazighes
- **Tagline**: Jeu Unity 3D explorant la mythologie amazighe par le storytelling interactif
- **Stack**: Unity, C#, ScriptableObjects, Scene Management
- **Points forts**: GameManager state machine · ScriptableObject data architecture · Hub world pattern · Système d'interactions narratives · Progression tracking
- **Catégorie**: `Game` · `Unity` · `3D` · `Cultural Tech`
- **Complexité**: ⭐⭐⭐⭐⭐
- **Statut**: En cours
- **GitHub**: https://github.com/yanimohellebi26/Legendes_Amazighes

---

### 20. LinkedIn AI Chatbot
- **Tagline**: Co-pilote IA pour messages LinkedIn personnalisés et contextuels
- **Stack**: Python, FastAPI, React, Vite, OpenAI API
- **Points forts**: Génération contextuelle (profil + objectif) · Streaming temps réel · Raffinement itératif · Calibration de ton professionnel · Interface chat
- **Catégorie**: `AI` · `Productivity` · `NLP`
- **Complexité**: ⭐⭐⭐
- **Statut**: En cours
- **GitHub**: https://github.com/yanimohellebi26/linkedin-ai-chatbot

---

### 21. Lyon By Night (LyonByNight)
- **Tagline**: PWA nightlife Lyon avec carte interactive, recommandations IA, et planning groupe
- **Stack**: Next.js 16, TypeScript, React 19, Tailwind CSS v4, shadcn/ui, Supabase (PostGIS), Mapbox GL JS, OpenAI, Framer Motion, next-intl, Vitest, Playwright, Vercel
- **Points forts**: Carte Mapbox avec clustering (supercluster) · Recommandations IA en langage naturel · i18n FR/EN · PWA offline · PostGIS + full-text search
- **Catégorie**: `Full-Stack` · `PWA` · `AI` · `Geospatial`
- **Complexité**: ⭐⭐⭐⭐⭐
- **Statut**: En cours
- **GitHub**: https://github.com/yanimohellebi26/LyonByNight

---

### 22. Paris Nightlife — Figma-to-Code (Maria)
- **Tagline**: App découverte nightlife Paris — implémentation pixel-perfect depuis Figma
- **Stack**: TypeScript, React 18, Vite, Tailwind CSS v4, MUI, Radix UI, Leaflet, Framer Motion, React Hook Form, Recharts
- **Points forts**: Cartes venues avec ratings et happy hours · Carte Leaflet interactive · Comparateur side-by-side · Modal reviews étoilées · Filtres arrondissement/prix/type
- **Catégorie**: `Web App` · `Frontend` · `Design Implementation`
- **Complexité**: ⭐⭐⭐
- **Statut**: Complet
- **GitHub**: https://github.com/yanimohellebi26/Maria

---

### 23. MovieCard — The Cinephile Builder
- **Tagline**: Plateforme éducation cinéma gamifiée avec 341 films, cartes collectibles, et IA
- **Stack**: Next.js 16, React 19, TypeScript, Tailwind CSS, Supabase, Framer Motion, Recharts, Google Gemini, Claude/OpenAI (CineBot)
- **Points forts**: 341 films monde avec système de cartes (5 raretés, 50+ traits) · IA anecdotes post-visionnage · Progression 5 niveaux + 12 badges · Timelines mouvements cinéma · Analytics genre radar + distribution pays
- **Catégorie**: `EdTech` · `AI` · `Gamification` · `Full-Stack`
- **Complexité**: ⭐⭐⭐⭐⭐
- **Statut**: En cours
- **GitHub**: https://github.com/yanimohellebi26/MovieCard

---

### 24. Movie Quote Catcher (MovieQuotes)
- **Tagline**: Capture de citations de films multi-plateforme — du browser extension au hardware
- **Stack**: Chrome Extension (tabCapture), Rust (WASAPI/CoreAudio), Gemini, Whisper, Vercel, Neon Postgres
- **Points forts**: 4 phases: Chrome Extension → Rust Desktop → Mobile → Hardware BT · Pipeline IA Gemini/Whisper · Offline-first + cloud sync · Business model détaillé · Objectif 50K MAU
- **Catégorie**: `Product` · `AI/ML` · `Multi-Platform` · `Rust`
- **Complexité**: ⭐⭐⭐⭐⭐
- **Statut**: En cours (Planning)
- **GitHub**: https://github.com/yanimohellebi26/MovieQuotes

---

### 25. NUTRI-MIND (muscule_ia)
- **Tagline**: Planificateur nutrition budgétaire pour étudiants sportifs avec calcul macros
- **Stack**: React 19, JavaScript, CSS Modules, React Router
- **Points forts**: Calcul TDEE + macros par objectif · Meal planner optimisé macros + budget · 12+ pages · Stockage local (pas de compte) · Architecture composants réutilisables
- **Catégorie**: `Web App` · `Health & Fitness`
- **Complexité**: ⭐⭐⭐
- **Statut**: Complet
- **GitHub**: https://github.com/yanimohellebi26/muscule_ia

---

### 26. NeutraView — Objective Cultural Reviews
- **Tagline**: Plateforme de reviews culturelles neutres via BERT + résumés GPT anti-spoiler
- **Stack**: Python, FastAPI, React, Vite, MUI, BERT (HuggingFace), TextBlob, OpenAI API, Docker Compose, nginx
- **Points forts**: Sentiment BERT/TextBlob sur reviews agrégées · Résumés neutres anti-spoiler GPT · Chatbot "Find Your Story" · Profiling reviewers (archétypes) · Déploiement Dockerisé
- **Catégorie**: `AI/ML` · `NLP` · `Full-Stack`
- **Complexité**: ⭐⭐⭐⭐⭐
- **Statut**: En cours
- **GitHub**: https://github.com/yanimohellebi26/NeutraView

---

### 27. Paris Nightlife (paris)
- **Tagline**: App web React pour découvrir et comparer bars et clubs à Paris
- **Stack**: React, TypeScript, Vite, Tailwind CSS, shadcn/ui, Radix UI, Leaflet, MUI, Vercel
- **Points forts**: Cartes venues avec ratings/ambiance/prix · Comparateur side-by-side · Carte Leaflet + géolocalisation · 30+ composants Radix · Déployé Vercel
- **Catégorie**: `Web App` · `Frontend` · `Maps`
- **Complexité**: ⭐⭐⭐
- **Statut**: Complet
- **GitHub**: https://github.com/yanimohellebi26/paris

---

### 28. 3D Fish Rendering (poisson-OPENGL)
- **Tagline**: Rendu OpenGL d'un poisson 3D texturé et animé avec éclairage Phong
- **Stack**: C++, OpenGL, GLUT (freeglut), libjpeg, SOIL
- **Points forts**: Géométrie procédurale (sphères/cylindres) · Texture JPEG 256×256 · Animation queue oscillante · Contrôles clavier interactifs · Conversion HSV-RGB
- **Catégorie**: `Computer Graphics` · `C++` · `OpenGL`
- **Complexité**: ⭐⭐⭐
- **Statut**: Complet
- **GitHub**: https://github.com/yanimohellebi26/poisson-OPENGL

---

### 29. ML Package → API → Docker (question2_project)
- **Tagline**: Du script ML au service dockerisé — packaging, API Flask, et containerisation
- **Stack**: Python, Flask, Docker, scikit-learn, NumPy, Matplotlib, Plotly, setuptools, Gunicorn
- **Points forts**: Package pip installable (OLS Regression) · API REST /process · Validation d'entrée · Dockerfile multi-stage · Distribution .tar.gz
- **Catégorie**: `AI/ML` · `DevOps` · `API Design`
- **Complexité**: ⭐⭐⭐
- **Statut**: Complet
- **GitHub**: https://github.com/yanimohellebi26/question2_project

---

### 30. RAG-M1 — Multi-Agent RAG
- **Tagline**: Système RAG multi-agent avec 6 agents spécialisés sur 139 fichiers de cours M1
- **Stack**: Python, LlamaIndex, Qdrant, BGE-M3, Sentence-Transformers, HuggingFace, FastAPI, Typer CLI, PyMuPDF, GitHub Copilot SDK, MCP, Docker
- **Points forts**: 6 agents (RAG, Notes, Exercices, Mémoire, Web, Recherche) · Embed → Qdrant → BGE-M3 reranking · Pipeline PDF/ZIP/TXT (139 fichiers, 9 matières) · CLI + API web · MCP servers
- **Catégorie**: `AI/ML` · `RAG` · `Multi-Agent` · `EdTech`
- **Complexité**: ⭐⭐⭐⭐⭐
- **Statut**: En cours
- **GitHub**: https://github.com/yanimohellebi26/RAG-M1

---

### 31. RAG Master 1 — AI Teaching Assistant
- **Tagline**: Assistant IA étudiant avec recherche hybride BM25+sémantique, outils Copilot, et 7 MCP
- **Stack**: Python, Flask, React, Vite, OpenAI GPT-4o-mini, ChromaDB, LangChain, BM25, GitHub Copilot SDK, MCP (YouTube, Brave, Arxiv, Wikipedia, Gmail, Drive, Notion)
- **Points forts**: Recherche hybride (rewriting → BM25 + sémantique → reranking) · Outils Copilot (quiz, flashcards, mind maps) · 7 MCP servers · Évaluation 200 questions · Re-indexation incrémentale
- **Catégorie**: `AI/ML` · `RAG` · `EdTech` · `MCP`
- **Complexité**: ⭐⭐⭐⭐⭐
- **Statut**: En cours
- **GitHub**: https://github.com/yanimohellebi26/RAG-Master1

---

### 32. Smart Book Recommendation (recommendation-livre)
- **Tagline**: Recommandation de livres par matching émotionnel et thématique via IA
- **Stack**: Python, FastAPI, React, Vite, OpenAI API, Google Generative AI, Open Library API, Vercel
- **Points forts**: Extraction vecteur émotionnel/thématique via LLM · Matching Open Library · Chatbot raffinement itératif · Couvertures + métadonnées · Déployé live
- **Catégorie**: `Web App` · `AI` · `NLP`
- **Complexité**: ⭐⭐⭐
- **Statut**: Complet
- **Demo**: https://recommendation-livre.vercel.app/
- **GitHub**: https://github.com/yanimohellebi26/recommendation-livre

---

### 33. 3D House Recognition (reconnaissance_maison)
- **Tagline**: Classification de styles architecturaux depuis nuages de points 3D via PointNet/PointNet++
- **Stack**: Python, PyTorch, PointNet, PointNet++, NumPy, Matplotlib, MATLAB
- **Points forts**: Génération procédurale maisons 3D (standard, complexe, italienne) · PointNet + PointNet++ · Pipeline complète (génération → training → évaluation) · Export .npz + MATLAB
- **Catégorie**: `AI/ML` · `3D Computer Vision` · `Deep Learning`
- **Complexité**: ⭐⭐⭐⭐⭐
- **Statut**: Complet
- **GitHub**: https://github.com/yanimohellebi26/reconnaissance_maison-nuage-de-points

---

### 34. RAWVIEW (review)
- **Tagline**: Plateforme reviews anti-biais — review aveugle d'abord, comparaison après, détection biais IA
- **Stack**: SvelteKit 5, TypeScript, FastAPI, Python, PostgreSQL, HuggingFace Transformers, spaCy, TextBlob, Sentence Transformers, Docker Compose
- **Points forts**: Flow "blind first, compare later" · NLP pipeline (sentiment → biais → clustering → collaborative filtering) · Détection biais cognitifs IA · Docker + PostgreSQL · Challenges gamifiés
- **Catégorie**: `Web App` · `AI/ML` · `NLP` · `SvelteKit`
- **Complexité**: ⭐⭐⭐⭐⭐
- **Statut**: En cours
- **GitHub**: https://github.com/yanimohellebi26/review

---

### 35. Cube Face Segmentation (segmentation-face-cube)
- **Tagline**: Benchmark segmentation 3D PointNet vs KPConv sur données synthétiques
- **Stack**: Python, PyTorch, PointNet, KPConv, NumPy, scikit-learn, Matplotlib
- **Points forts**: Génération procédurale cubes avec labels par face · PointNet baseline avec checkpoints · KPConv alternative · Courbes d'entraînement · Séparation données/modèles
- **Catégorie**: `AI/ML` · `3D Deep Learning`
- **Complexité**: ⭐⭐⭐⭐⭐
- **Statut**: En cours
- **GitHub**: https://github.com/yanimohellebi26/segmentation-face-cube

---

### 36. 3D Semantic Segmentation (segmentation-semantique)
- **Tagline**: Segmentation sémantique LiDAR urbain (Paris/Lille/Dijon) en 10 classes via PointNet++
- **Stack**: Python, PyTorch, PointNet, PointNet++, NumPy, Open3D, CloudCompare, pointnet2_ops
- **Points forts**: Pipeline 8 étapes (.ply → inference) · PointNet/PointNet++ avec set abstraction · Datasets réels Paris-Lille-3D + Dijon · Augmentation (rotation, bruit, scaling) · Sortie couleur CloudCompare
- **Catégorie**: `AI/ML` · `3D Computer Vision` · `Urban Computing`
- **Complexité**: ⭐⭐⭐⭐⭐
- **Statut**: Complet
- **GitHub**: https://github.com/yanimohellebi26/segmentation-semantique

---

### 37. SORTIR
- **Tagline**: Sélecteur aléatoire d'activité entre amis avec animation card flip
- **Stack**: React 19, React Router 7, JavaScript, CSS
- **Points forts**: Cartes activités thématiques · Animation card flip · SPA 2 routes · 100% client-side
- **Catégorie**: `Web App` · `Fun`
- **Complexité**: ⭐⭐
- **Statut**: Complet
- **GitHub**: https://github.com/yanimohellebi26/SORTIR

---

### 38. The Mind — AI Card Game
- **Tagline**: Jeu "The Mind" en C avec serveur TCP multi-thread et robot XGBoost
- **Stack**: C, TCP Sockets, pthreads, mutexes, Python, XGBoost, scikit-learn, joblib, LaTeX, Makefile
- **Points forts**: Serveur TCP multi-thread avec mutex · Clients humain et robot · XGBoost sur 10K parties simulées · Feature vector: carte, dernière jouée, nb joueurs → temps d'attente · Rapport LaTeX auto-généré
- **Catégorie**: `Systems Programming` · `AI/ML` · `Game` · `C`
- **Complexité**: ⭐⭐⭐⭐⭐
- **Statut**: Complet
- **GitHub**: https://github.com/yanimohellebi26/the_mind

---

### 39. Portfolio (Yani)
- **Tagline**: Portfolio personnel avec chatbot IA OpenAI, calendrier GitHub, et CV PDF
- **Stack**: React 17, React Router 6, Tailwind CSS, Express.js, OpenAI API (GPT-4o-mini), EmailJS, react-tsparticles, react-parallax-tilt, Vercel
- **Points forts**: Chatbot IA avec proxy Express · Fallback local knowledge base · Sections: Home, About, Projects, Resume, Blog, Contact · Effets particules + parallax · Rate limiting + CORS
- **Catégorie**: `Web App` · `Portfolio` · `AI`
- **Complexité**: ⭐⭐⭐
- **Statut**: Complet
- **GitHub**: https://github.com/yanimohellebi26/Yani
- **Live**: https://yanimohellebi.tech

---

### 40. Unlock Paris (appology)
- **Tagline**: App gamifiée avec 3 mini-challenges, génération de tickets Canvas, et glassmorphisme
- **Stack**: React, Tailwind CSS, Canvas API, localStorage
- **Points forts**: 3 challenges progressifs · Génération image ticket Canvas · Glassmorphisme gold/navy · Animations CSS fluides
- **Catégorie**: `Creative Web` · `React` · `Animation`
- **Complexité**: ⭐⭐
- **Statut**: Complet
- **GitHub**: https://github.com/yanimohellebi26/appology

---

### 41. Sorry
- **Tagline**: Page web animée Paris-dusk avec pétales, glassmorphisme, et design responsive
- **Stack**: React 19, Vite, Tailwind CSS
- **Points forts**: Gradient Paris-dusk lavande/blush · Pétales animées + orbes flottants · Glassmorphisme avec backdrop blur · Star burst animations · Mobile responsive
- **Catégorie**: `Creative Web` · `Front-End` · `Design`
- **Complexité**: ⭐⭐⭐
- **Statut**: Complet
- **GitHub**: https://github.com/yanimohellebi26/sorry

---

## Projets les plus impressionnants pour un recruteur (Top 10)

1. **12 Angry Agents (Géopol)** — Multi-agent LLM research avec RAG et métriques statistiques
2. **RAG Master 1** — RAG hybride + MCP + Copilot SDK + évaluation automatisée
3. **MovieCard** — Gamification + IA + full-stack Next.js/Supabase
4. **bars_lyon / LyonByNight** — Full-stack géospatial + IA + PWA
5. **The Mind** — C systems + TCP + XGBoost robot player
6. **Segmentation sémantique** — PointNet++ sur LiDAR réel (Paris/Lille/Dijon)
7. **Hackathon Mistral** — MCP architecture + fine-tuning QLoRA + cultural tech
8. **DROL-GAME** — Game engine from scratch + multiplayer networking
9. **Distributed Bucket Sort** — MPI + OpenMP HPC
10. **Pontifex** — Cryptographie + RAG assistant + UI Streamlit
