import React from "react";
import BlogCards from "./BlogCards";
import Bneutralview from "../../Assets/Blog/Bneutralview.png";
import Brecommendation from "../../Assets/Blog/Brecommendation.png";
import Brawview from "../../Assets/Blog/Brawview.png";
import Bnutrimind from "../../Assets/Blog/Bnutri_mind.png";
import Bsubsense from "../../Assets/Blog/Bsubsense.png";
import BlyonImg from "../../Assets/Projects/bars-lyon.png";
import BmovieCardImg from "../../Assets/Projects/movie-card.png";
import BragImg from "../../Assets/Projects/rag-master.png";
import BstageImg from "../../Assets/Projects/cheat-gemini.png";
import BdailyImg from "../../Assets/Projects/aportfolio.png";
import { useLanguage } from "../../context/LanguageContext";

function Blog() {
  const { language } = useLanguage();

  const copy = {
    en: {
      heading: { lead: "My", highlight: "Blog" },
    },
    fr: {
      heading: { lead: "Mon", highlight: "Blog" },
    },
  };

  const articles = [
    {
      id: "neutraview",
      imgPath: Bneutralview,
      title: {
        en: "NeutraView: Objective reviews for smarter choices",
        fr: "NeutraView : Des avis objectifs pour des choix éclairés",
      },
      description: {
        en: "An intelligent tool that filters bias and reveals the essence of every work",
        fr: "Un outil intelligent qui filtre les biais et révèle l'essence des œuvres",
      },
      content: {
        en: `Platforms are overflowing with user opinions about books, films, and series. Yet most reviews are biased by personal taste, current trends, or the fear of going against the hype. When we truly want to know if a work deserves our attention, we do not care if someone liked it; we want to understand **how it is written, structured, and crafted**.

NeutraView steps in exactly here.

It aggregates reviews from multiple sources, detects recurring objective patterns (writing style, character depth, narrative richness), and analyses the **psychological profile of each reviewer**. The result is an **intelligent, spoiler-free summary** that helps you decide what to read or watch without ruining the experience.

NeutraView also solves another common frustration: **remembering a work when you only recall a feeling or fragment**. Maybe you are after a story where "the hero turns villain", "a post-apocalyptic love story", or "an author exploring inner healing". Describe it, and NeutraView surfaces matching works with the right context and community insights.

NeutraView is more than a search engine. It is an **intelligent cultural assistant** that respects your curiosity, values quality, and highlights what truly deserves to be discovered.`,
        fr: `Aujourd'hui, les plateformes débordent d'avis d'utilisateurs sur les livres, films et séries. Mais un problème majeur persiste : la majorité de ces critiques sont biaisées — influencées par les goûts personnels, les croyances, les tendances du moment ou le besoin d'aller dans le sens de la hype. Pourtant, quand on cherche à savoir si une œuvre mérite notre attention, on ne veut pas savoir si elle a "plu", mais **comment elle est écrite, structurée et pensée**.

C'est là qu'intervient NeutraView.

NeutraView a été conçu pour proposer une analyse réellement neutre d'une œuvre. En collectant des critiques issues de plusieurs sources, en détectant les tendances objectives qui reviennent (style d'écriture, profondeur des personnages, richesse du scénario...), et surtout en étudiant le **profil psychologique des utilisateurs** derrière chaque avis, la plateforme est capable de générer un **résumé intelligent et impartial**. Un résumé **sans spoilers**, qui vous donne envie de lire ou regarder sans rien gâcher.

Mais ce n'est pas tout.

NeutraView répond aussi à un second besoin trop souvent ignoré : **retrouver une œuvre qu'on a en tête mais dont on a oublié le nom**. Un livre, un anime ou un film avec "un héros qui devient méchant", "une histoire d'amour post-apocalyptique", ou "une autrice qui parle de reconstruction intérieure après un drame"... Tapez simplement cette idée dans notre moteur intelligent, et NeutraView vous proposera les œuvres correspondantes, avec un contexte, une ambiance, et ce que la communauté en pense.

NeutraView n'est pas un simple moteur de recherche. C'est un **assistant culturel intelligent** qui respecte votre curiosité, valorise la qualité, et fait briller ce qui mérite vraiment d'être découvert.`,
      },
      date: "2025-04-02",
      ghLink: "https://github.com/yanimohellebi26/NeutraView.git",
    },
    {
      id: "recommendation",
      imgPath: Brecommendation,
      title: {
        en: "Intelligent literary recommendations: filling the void after a great book",
        fr: "Recommandation Littéraire Intelligente : combler le vide après un bon livre",
      },
      description: {
        en: "A system that understands what moved you so you can find it again",
        fr: "Un programme qui comprend ce que vous avez aimé, pour mieux le retrouver ailleurs",
      },
      content: {
  en: `You close the final chapter. The book rests on the table, and a quiet void appears. You just left a world, characters, an atmosphere that mattered. We all know this moment: a **silent need** to feel the same emotion again - not just the same genre or author, but **the same resonance**.

That is why I built this intelligent book recommendation tool.

It does not only ask for the title. It also asks **what you loved**: the universe, the style, the pace, a particular character? That **emotional depth** makes the recommendations meaningful, because sometimes it is not the plot that stays with us, but **the way it is told**.

The site then offers:
- A **well-known** work, close to your book, to ground you again.
- A **lesser-known** gem that matches **exactly what you felt**.
- A recommendation based on **your favourite character**, analysing their **personality** to suggest another story with a similar hero.

It is not magic; it is augmented reading. The AI does not replace the reader - it walks alongside with sensitivity.

📚 Try it here: [https://recommendation-livre.vercel.app/](https://recommendation-livre.vercel.app/)
PS: it takes a moment to load, but it is worth the wait.`,
        fr: `Tu refermes le dernier chapitre. Tu poses le livre. Et puis ce vide s'installe. Comme si tu venais de quitter un monde, des personnages, une ambiance… quelque chose qui comptait vraiment. Ce moment-là, on le connaît tous. C'est ce **besoin silencieux** de retrouver ce que l'on vient de perdre — pas un simple genre, ni un titre, mais **une sensation**.

C'est pour répondre à ce manque que j'ai créé ce programme de recommandation de livres intelligent.

Il ne te demande pas seulement le nom du livre. Il te demande aussi **ce que tu as aimé dedans** : l'univers ? le style ? le rythme ? un personnage en particulier ? Cette **couche de profondeur émotionnelle** est ce qui rend les recommandations vraiment pertinentes. Car parfois, ce n'est pas l'histoire elle-même qui nous touche, mais **la manière dont elle est racontée**.

Ce que mon site te propose ensuite :
- Une œuvre **populaire**, connue, qui ressemble à ton livre (pour te réancrer).
- Une œuvre **moins connue**, mais qui colle **exactement à ce que tu as ressenti**.
- Une recommandation basée sur **le personnage que tu as préféré**, en analysant sa **personnalité**, et en te proposant une autre œuvre avec un personnage très similaire.

Ce n'est pas de la magie. C'est une forme de lecture augmentée, où l'intelligence artificielle ne remplace pas le lecteur — elle l'accompagne avec sensibilité.

📚 Teste-le ici : [https://recommendation-livre.vercel.app/](https://recommendation-livre.vercel.app/)
PS:ça prend un peu de temps à charger, mais ça vaut le coup.`,
      },
      date: "2025-04-02",
      ghLink: "https://github.com/yanimohellebi26/recommendation-livre.git",
    },
    {
      id: "rawview",
      imgPath: Brawview,
      title: {
        en: "RAWVIEW: Rethinking reviews in the age of influence",
        fr: "RAWVIEW : Repenser l'avis à l'ère de l'influence",
      },
      description: {
        en: "A project that recentres the user on pure feelings, without social noise",
        fr: "Un projet qui recentre l'utilisateur sur son ressenti pur, sans bruit social",
      },
      content: {
        en: `On most platforms, sharing an opinion often feels like performing. We strive to be clever, funny, aligned with the crowd. But that social dynamic distorts everything: when a film is trending it seems "good", and when it fades it suddenly looks "forgettable". We end up loving or disliking works we have barely experienced.

RAWVIEW starts from that realisation.

The experience is radically different. You face a work **with no title**, **no author**, **no rating**. You do not know whether it is acclaimed or ignored. That deliberate silence frees your review to exist in a pure, authentic, **disconnected** space.

The goal: rediscover **the raw pleasure of personal perception**.

After you share your opinion, the platform reveals others - not by popularity, but by **diversity**. Minority yet insightful perspectives are elevated, heavily influenced comments are flagged, and an AI engine computes a **sincerity score**, an **emotional matching**, and surfaces under-rated gems worth your attention.

RAWVIEW is as philosophical as it is technical. It breaks the **bandwagon effect**, restores **conscious subjectivity**, and makes each review a mirror of the self rather than an echo of the crowd.

The experience is immersive, quiet, almost intimate.

In that silence... it is your voice that matters.`,
        fr: `Sur la majorité des plateformes aujourd'hui, donner son avis sur une œuvre, c'est souvent jouer un rôle. 
On veut être pertinent, drôle, populaire… ou simplement dans le ton de la majorité. 
Mais cette dynamique sociale fausse tout. Car dès qu'un film est à la mode, il devient automatiquement "bon", 
et dès qu'il passe sous les radars, il semble "oubliable". On se retrouve à aimer… ou à détester… 
des choses qu'on n'a même pas encore expérimentées.

RAWVIEW naît de ce constat.

Ce projet a été pensé comme une expérience radicalement différente. 
Ici, vous êtes confronté à une œuvre **sans aucun titre**, **sans aucun nom**, **sans aucune note**. 
Vous ne savez pas si elle est adorée, haïe, tendance ou oubliée. Et c'est justement ce vide social qui permet 
à votre avis d'exister de manière pure, authentique, **déconnectée du reste du monde**.

Le but ? Vous faire retrouver **le plaisir brut du ressenti personnel**.

Mais RAWVIEW ne s'arrête pas là. Après avoir donné votre avis, la plateforme vous dévoile ceux des autres — 
non pas en fonction de leur popularité, mais de leur **diversité**. 
Les opinions minoritaires mais intéressantes sont mises en avant. Les critiques trop influencées sont détectées. 
Et surtout, un moteur d'analyse IA propose un **score de sincérité**, un **matching émotionnel**, 
et un accès aux œuvres "sous-estimées" par la foule mais précieuses individuellement.

RAWVIEW, c'est un projet philosophique autant que technique.  
C'est une tentative de briser **l'effet bandwagon**, de redonner sa place à **la subjectivité consciente**, 
et de faire de chaque avis un miroir intérieur, et non un écho collectif.

L'expérience est immersive, silencieuse, presque intime.

Et dans ce silence... c'est vous qui parlez.`,
      },
      date: "2025-04-02",
      ghLink: "https://github.com/yanimohellebi26/review.git",
    },
    {
      id: "nutrimind",
      imgPath: Bnutrimind,
      title: {
        en: "NUTRI-MIND: Eating to progress, even with 30 EUR",
        fr: "NUTRI-MIND : Manger pour progresser, même avec 30€",
      },
      description: {
        en: "An AI built for lifters who want muscle gains without wasting time or money",
        fr: "Une IA conçue pour les pratiquants de musculation qui veulent gagner en masse sans perdre en budget ni en temps",
      },
      content: {
        en: `Most nutrition apps today can count calories, proteins, carbs, and fats. They hand you numbers... and leave you alone in front of an empty fridge, a tight budget, and zero meal ideas.

**That is where the real struggle begins.** Students chasing strength goals juggle everyday constraints: little time, little money, and not always the desire or skills to cook daily.

This is precisely the gap NUTRI-MIND closes.

The project does more than tell you how many grams of protein you need. It **builds an entire week of smart meals for you**, tuned to your goals, preferences, constraints, and above all **your budget**. Have 30 EUR for the week? No problem. The AI compiles a personalised shopping list that maximises macros without waste.

Each recipe is designed to be:
- Simple to make
- Adaptable to your intolerances
- Balanced for your objective (bulking, cutting, maintenance)
- Ready for meal prep reuse

NUTRI-MIND is not a virtual coach; it is a **strategic partner** that keeps you progressing even when conditions are far from ideal.

The aim?
Enable every lifter, beginner or advanced, to eat **efficiently**, **intelligently**, and **realistically**. No excuses, no stress, just results.

In strength training, effort at the gym is worthless without the right plate. Eating well is also a skill to master.

**NUTRI-MIND means lifting + food + brain.** And it changes everything.`,
        fr: `La plupart des applications nutritionnelles d'aujourd'hui savent compter : calories, protéines, glucides, lipides.  
Elles vous donnent des chiffres… mais vous laissent seul face à un frigo vide, un budget limité, et zéro idée de repas.

Et pourtant, **c'est là que les vrais problèmes commencent**.  
Quand on est étudiant, motivé par ses objectifs en musculation, mais qu'on doit gérer les galères du quotidien :  
peu de temps, peu d'argent, pas forcément l'envie ou les compétences pour cuisiner tous les jours.

C'est à ce moment précis que NUTRI-MIND intervient.

Ce projet ne se contente pas de vous dire combien de protéines vous devez manger.  
Il **construit pour vous** une semaine complète de repas intelligents, optimisés pour vos besoins, vos goûts, vos contraintes…  
et surtout **votre budget**. Vous avez 35€ pour la semaine ? Pas de souci.  
L'IA vous propose une liste de courses personnalisée qui maximise vos apports macros — sans superflu, sans oubli, sans ruine.

Chaque recette proposée est pensée pour être :
- Simple à réaliser
- Adaptée à vos intolérances
- Équilibrée selon vos objectifs (prise de masse, sèche, maintien)
- Réutilisable en meal prep

NUTRI-MIND n'est pas un coach numérique. C'est un **partenaire stratégique** qui vous aide à progresser, même quand les conditions sont loin d'être idéales.

Le but ?  
Permettre à chaque pratiquant, qu'il soit débutant ou confirmé, de s'alimenter **efficacement**, **intelligemment**, **réaliste-ment**.  
Sans excuses. Sans stress. Et avec des résultats.

Parce qu'en musculation, on sait que l'effort à la salle ne sert à rien sans l'assiette qui va avec.  
Et que manger bien, c'est aussi une compétence à développer.

**NUTRI-MIND, c'est muscu + bouffe + cerveau.**  
Et ça change tout.`,
      },
      date: "2025-04-02",
      ghLink: "https://github.com/yanimohellebi26/muscule_ia.git",
    },
    {
      id: "subsense",
      imgPath: Bsubsense,
      title: {
        en: "SUBSENSE: Truly understanding what videos say",
        fr: "SUBSENSE : Comprendre ce que disent les vidéos, vraiment.",
      },
      description: {
        en: "An AI that transcribes, analyses, and summarises Instagram videos to extract the signal",
        fr: "Une IA qui transcrit, analyse et résume les vidéos Instagram pour en extraire le sens profond et l'essentiel.",
      },
      content: {
        en: `Social feeds are packed with videos that explain, denounce, and motivate. But how many deliver something truly useful?

SUBSENSE lets you paste an Instagram link, specify the spoken language, and get **a complete intelligent analysis**.

It is far more than raw transcription. SUBSENSE provides a **deep reading of the content**:
- A clean, accurate, time-stamped transcript
- A summary of the video intent: to inform, persuade, entertain?
- An estimate of the **actual informational value**
- A **psychological analysis of the speakers**, based on what they say and how they say it

SUBSENSE does not skim videos like a hurried human. It **reads**, **decrypts**, and **reveals what lies behind the words**.

It is for anyone who wants to:
- Save time on long or ambiguous videos
- Judge whether a video is worth watching
- Study debates, speeches, or interviews
- Analyse a creator's personality and intent

This project serves curious minds, researchers, creators, coaches, educators, and observers of digital culture alike.

**SUBSENSE is the AI critical eye on raw video.**
It helps you understand what you watch and choose more wisely.`,
        fr: `Les réseaux sont pleins de vidéos qui parlent, expliquent, dénoncent, motivent.  
Mais combien d'entre elles disent vraiment quelque chose d'utile ?

SUBSENSE est une interface web qui vous permet de coller le lien d'une vidéo Instagram, de préciser la langue parlée…  
et d'en obtenir **une analyse complète et intelligente**.

Pas juste une transcription bête de ce qui a été dit.  
Mais une vraie **lecture en profondeur** du contenu.

- Une retranscription propre, fidèle, horodatée.
- Un résumé du but de la vidéo : informer ? convaincre ? divertir ?
- Une estimation de la **valeur informative réelle** (sous forme de pourcentage)
- Une **analyse psychologique des interlocuteurs**, basée sur ce qu'ils expriment et comment ils le font

SUBSENSE ne regarde pas une vidéo comme un humain pressé.  
Il la **lit**, il la **décrypte**, il **met en lumière ce qu'il y a derrière les mots**.

C'est un outil pour ceux qui veulent :
- Gagner du temps sur des vidéos longues ou floues
- Savoir si une vidéo vaut la peine d'être regardée
- Étudier des débats, discours, interviews
- Analyser la personnalité des créateurs de contenu

Ce projet s'adresse autant aux curieux qu'aux chercheurs, aux créateurs de contenu qu'aux coachs, aux éducateurs qu'aux simples observateurs du monde numérique.

**SUBSENSE, c'est l'œil critique de l'IA sur la vidéo brute.**  
Pour comprendre ce qu'on regarde. Et mieux choisir ce qu'on écoute.`,
      },
      date: "2025-04-02",
      ghLink: "https://github.com/yanimohellebi26/instagram-video.git",
    },
    {
      id: "stage",
      imgPath: BstageImg,
      title: {
        en: "Internship Report: What I built, what I learned, what changed",
        fr: "Rapport de Stage : Ce que j'ai construit, appris, et ce que ça a changé",
      },
      description: {
        en: "A personal summary of my internship experience — theory meets reality in an industrial environment",
        fr: "Un résumé personnel de mon expérience de stage — la théorie face à la réalité d'un environnement professionnel",
      },
      content: {
        en: `A stage is the first real test of everything you've accumulated over years of study. You arrive with your algorithms, your clean code habits, your diagrams — and you discover very quickly that the real world operates on completely different rhythms.

During my internship, I had to **confront existing codebases**, understand systems I didn't design, and deliver results in a constrained timeline. It is a humbling but deeply enriching experience.

What struck me most is how **communication matters as much as code**. Writing a function correctly means nothing if you cannot explain its purpose to a colleague or justify a technical choice to a supervisor. The ability to translate complexity into clarity is a skill that no lecture teaches you.

I also discovered the real weight of **software maintenance**. In school, we build projects and move on. In a professional environment, every decision you make today becomes a constraint for the developer who comes after you. That responsibility changes how you write, comment, and structure everything.

The internship also confirmed something I had felt for a while: **the problems worth solving are almost always born from real frustration**. The best features I helped build were not imagined in a whiteboard session — they came from someone in the team saying *"I waste 20 minutes every day doing this by hand."*

That simple observation — a repeated pain in daily work — is the seed of every meaningful tool.

Completing this report was also a chance to step back and articulate what I had lived: document the context, formalise the architecture, explain the choices, measure the impact. Writing about what you've built forces you to truly understand it.

**A stage does not end when you walk out the door. It ends the day you realise you started thinking differently.**`,
        fr: `Un stage, c'est le premier vrai test de tout ce qu'on a accumulé après des années d'études. On arrive avec ses algorithmes, ses bonnes pratiques, ses diagrammes — et on découvre très vite que le monde réel fonctionne à un tout autre rythme.

Durant mon stage, j'ai dû **naviguer dans des bases de code existantes**, comprendre des systèmes que je n'avais pas conçus, et livrer des résultats dans des délais contraints. C'est une expérience humble, mais profondément enrichissante.

Ce qui m'a le plus frappé, c'est à quel point **la communication compte autant que le code**. Écrire une fonction correcte ne sert à rien si on ne peut pas en expliquer le but à un collègue, ni justifier un choix technique à un encadrant. La capacité à rendre la complexité claire est une compétence qu'aucun cours n'enseigne vraiment.

J'ai aussi découvert le vrai poids de la **maintenabilité logicielle**. À l'école, on construit des projets puis on passe à autre chose. En environnement professionnel, chaque décision prise aujourd'hui devient une contrainte pour le développeur qui viendra après. Cette responsabilité change la façon dont on écrit, commente et structure tout.

Le stage m'a aussi confirmé quelque chose que je ressentais depuis un moment : **les problèmes qui valent la peine d'être résolus naissent presque toujours d'une vraie frustration**. Les meilleures fonctionnalités que j'ai aidé à construire ne sont pas sorties d'une session de brainstorming sur un tableau blanc — elles venaient de quelqu'un dans l'équipe qui disait *"je perds 20 minutes par jour à faire ça à la main."*

Cette simple observation — une douleur répétée dans le travail quotidien — est la graine de chaque outil vraiment utile.

Rédiger ce rapport a aussi été l'occasion de prendre du recul et de mettre des mots sur ce que j'avais vécu : documenter le contexte, formaliser l'architecture, expliquer les choix, mesurer l'impact. Écrire sur ce qu'on a construit force à vraiment le comprendre.

**Un stage ne se termine pas quand on franchit la porte pour la dernière fois. Il se termine le jour où on réalise qu'on pense différemment.**`,
      },
      date: "2025-04-18",
    },
    {
      id: "lyonbynight",
      imgPath: BlyonImg,
      title: {
        en: "LyonByNight: When you arrive in a new city and know nobody",
        fr: "LyonByNight : Quand tu arrives dans une nouvelle ville et que tu ne connais personne",
      },
      description: {
        en: "The real problem behind the app — finding your place when the city is a stranger",
        fr: "Le vrai problème derrière l'application — trouver sa place quand la ville t'est étrangère",
      },
      content: {
        en: `You arrive in Lyon. New student, new city, backpack still half-packed. You don't know anyone yet. You open Google Maps and type "bar Lyon". You get 400 results, all rated 4.2 stars, all identical-looking.

You end up in a tourist trap on Bellecour, paying nine euros for a beer you didn't enjoy. You go home early.

That is the real problem **LyonByNight** was built to solve.

Not "where are the bars" — that information already exists. But **which bar is right for you, tonight, for the energy you're looking for**. A laid-back neighbourhood spot where locals actually go. A rooftop with a view for a first date. A basement venue for live jazz on a Tuesday. A place where you can show up alone and not feel invisible.

When you are new somewhere, you don't have the network. You can't text a friend and ask "where should we go tonight?" You are starting from zero, and the algorithms built for tourists don't help you build a real relationship with your city.

LyonByNight combines an **interactive Mapbox map**, real venue data, **an AI assistant** that understands what you're after, and a **group planning feature** so you can coordinate with the people you're slowly getting to know.

It is designed to accelerate the feeling of belonging. Because the best cities are not the ones with the most options — they are the ones where you quickly find your corners, your spots, your rhythms.

📍 Try it here: [https://lyon-inky.vercel.app/fr](https://lyon-inky.vercel.app/fr)`,
        fr: `Tu arrives à Lyon. Nouvel étudiant, nouvelle ville, le sac à dos encore à moitié défait. Tu ne connais pas grand monde. Tu ouvres Google Maps et tu tapes "bar Lyon". 400 résultats, tous à 4,2 étoiles, tous pareils.

Tu finis dans un piège à touristes sur Bellecour, à payer neuf euros une bière que tu n'as pas appréciée. Tu rentres tôt.

C'est ça, le vrai problème que **LyonByNight** cherche à résoudre.

Pas "où sont les bars" — cette information existe déjà. Mais **quel bar est fait pour toi, ce soir, pour l'ambiance que tu cherches**. Un bar de quartier tranquille où vont vraiment les locaux. Un rooftop avec vue pour un premier rendez-vous. Une cave avec du jazz live un mardi soir. Un endroit où tu peux arriver seul sans te sentir invisible.

Quand on débarque quelque part, on n'a pas le réseau. On ne peut pas envoyer un message à un ami pour lui demander "on va où ce soir ?" On repart de zéro, et les algorithmes conçus pour les touristes ne t'aident pas à construire un vrai rapport avec ta ville.

LyonByNight combine une **carte Mapbox interactive**, des données de lieux réels, **un assistant IA** qui comprend ce que tu cherches, et une **fonctionnalité de planification de groupe** pour te coordonner avec les gens que tu commences à connaître.

L'objectif : accélérer le sentiment d'appartenance. Parce que les meilleures villes ne sont pas celles qui ont le plus d'options — ce sont celles où on trouve rapidement ses coins, ses endroits, son rythme.

📍 Essaie-le ici : [https://lyon-inky.vercel.app/fr](https://lyon-inky.vercel.app/fr)`,
      },
      date: "2025-04-18",
      ghLink: "https://github.com/yanimohellebi26/LyonByNight",
    },
    {
      id: "moviecard",
      imgPath: BmovieCardImg,
      title: {
        en: "MovieCard: Stop losing an hour to pick a film",
        fr: "MovieCard : Arrête de passer une heure à choisir un film",
      },
      description: {
        en: "Building a personal cinematic identity — because your film taste says more about you than your playlist",
        fr: "Construire son identité cinématographique — parce que tes goûts de cinéma en disent plus sur toi que ta playlist",
      },
      content: {
        en: `We all know that moment. It is 9 PM. You want to watch something. You open Netflix, scroll for forty minutes, open another platform, scroll some more. You read ten synopses. Nothing clicks. Your phone is in your hand, the screen is bright, and eventually you just close everything and go to sleep.

You spent an hour choosing. You watched nothing.

**MovieCard** was born from that exact frustration.

But the deeper problem is not just the decision paralysis — it is that most people don't really know their own taste. They think they like "good films" without ever articulating *why*. They can't answer: what cinematographic universe do you actually inhabit? What directors do you keep coming back to? What recurring visual or thematic threads run through everything you love?

MovieCard is about building that identity.

You create a card for every film you've watched, annotate it with your feelings, your interpretation, what it made you think about. Over time, you build something more than a watchlist — you build a **personal cinematheque** that reflects who you are.

When someone asks "what kind of films do you watch?", instead of fumbling for an answer, you show them your archive. Your cinematic universe made visible, searchable, shareable.

And when you sit down for the evening, your past self has already done the work. You know where to start.

📽️ Try it: [https://moviecard-seven.vercel.app/](https://moviecard-seven.vercel.app/)`,
        fr: `On connaît tous ce moment. Il est 21h. Tu veux regarder quelque chose. Tu ouvres Netflix, tu scrolles quarante minutes, tu ouvres une autre plateforme, tu scrolles encore. Tu lis dix synopsis. Rien ne te convainc. Le téléphone dans la main, l'écran qui brûle les yeux — et finalement tu fermes tout et tu vas dormir.

Tu as passé une heure à choisir. Tu n'as rien regardé.

**MovieCard** est né de cette frustration précise.

Mais le vrai problème n'est pas juste la paralysie du choix — c'est que la plupart des gens ne connaissent pas vraiment leur propre goût. Ils pensent aimer "les bons films" sans jamais pouvoir articuler *pourquoi*. Ils ne savent pas répondre : quel univers cinématographique habites-tu vraiment ? Quels réalisateurs revisites-tu sans cesse ? Quels fils visuels ou thématiques traversent tout ce que tu aimes ?

MovieCard, c'est construire cette identité.

Tu crées une fiche pour chaque film que tu as vu, tu la commentes avec ce que tu as ressenti, ton interprétation, ce que ça t'a fait penser. Avec le temps, tu ne construis plus une simple watchlist — tu bâtis une **cinémathèque personnelle** qui te ressemble.

Quand quelqu'un te demande "t'aimes quoi comme films ?", au lieu de chercher tes mots, tu lui montres ton archive. Ton univers cinématographique rendu visible, consultable, partageable.

Et quand tu t'installes pour la soirée, ton passé-toi a déjà fait le travail. Tu sais par où commencer.

📽️ Essaie-le : [https://moviecard-seven.vercel.app/](https://moviecard-seven.vercel.app/)`,
      },
      date: "2025-04-18",
      ghLink: "https://github.com/yanimohellebi26/MovieCard",
    },
    {
      id: "rag-m1",
      imgPath: BragImg,
      title: {
        en: "RAG-M1: I built my own AI to survive exam season",
        fr: "RAG-M1 : J'ai construit mon IA pour survivre aux révisions",
      },
      description: {
        en: "A chatbot trained on every Master 1 course — and how it became the centre of my student life",
        fr: "Un chatbot entraîné sur tous les cours de Master 1 — et comment il est devenu le centre de ma vie étudiante",
      },
      content: {
        en: `It started with a simple frustration: at exam time, I had hundreds of pages of course material across ten subjects, and no efficient way to navigate it all.

Ctrl+F in a PDF only gets you so far. Rereading entire lecture notes to find one specific concept takes hours. I needed something smarter.

So I built **RAG-Master1** — a full conversational AI trained on every course from my Master 1 Computer Science programme at Université de Bourgogne.

The principle is straightforward: I ingested all the PDFs, slides, and lecture notes into a **ChromaDB vector database**, paired with a **BM25 keyword index** for hybrid retrieval. When I ask "explain gradient descent as covered in the Machine Learning lecture", it finds the exact relevant passages, re-ranks them by relevance, and formulates an answer that cites its sources.

But it quickly became more than a revision tool.

I integrated it with the **GitHub Copilot Extensions SDK**, which opened up something unexpected: the chatbot became a centralised workspace. I can now ask it to help me draft a response to a professor's email, review my calendar for the week, pull up a specific concept right inside my IDE without switching windows.

In practice, **it centralised my student life** — revision, organisation, reading, writing. One interface, grounded in my own documents.

What I learned building it is that **RAG is not just about retrieval** — it is about designing a memory system that works the way you think. The quality of chunking, the hybrid search balance, the re-ranking logic: each decision shapes how "intelligent" the answers feel.

If you are a student and you have never built your own study AI — I genuinely think it is one of the highest-leverage things you can do before your next exams.`,
        fr: `Tout a commencé par une frustration simple : à l'approche des examens, j'avais des centaines de pages de cours sur dix matières, et aucun moyen efficace de naviguer dans tout ça.

Le Ctrl+F dans un PDF a ses limites. Relire des slides entiers pour retrouver un concept précis, ça prend des heures. Il me fallait quelque chose de plus intelligent.

Alors j'ai construit **RAG-Master1** — une IA conversationnelle entraînée sur tous les cours de mon Master 1 Informatique à l'Université de Bourgogne.

Le principe est simple : j'ai ingéré tous les PDF, slides et notes de cours dans une **base vectorielle ChromaDB**, couplée à un **index BM25 par mots-clés** pour une recherche hybride. Quand je pose une question comme "explique la descente de gradient telle qu'elle est présentée dans le cours de Machine Learning", il retrouve les passages exacts, les re-classe par pertinence, et formule une réponse en citant ses sources.

Mais ça est vite devenu bien plus qu'un outil de révision.

En l'intégrant au **GitHub Copilot Extensions SDK**, quelque chose d'inattendu s'est ouvert : le chatbot est devenu un espace de travail centralisé. Je peux lui demander de m'aider à rédiger une réponse à l'email d'un prof, de vérifier mon planning de la semaine, ou de retrouver un concept précis directement dans mon IDE sans changer de fenêtre.

En pratique, **il a centralisé ma vie étudiante** — révisions, organisation, lecture, écriture. Une seule interface, ancrée dans mes propres documents.

Ce que j'ai appris en le construisant, c'est que **le RAG ne se limite pas à la recherche** — c'est la conception d'un système de mémoire qui fonctionne comme tu penses. La qualité du découpage, l'équilibre de la recherche hybride, la logique de re-ranking : chaque décision façonne à quel point les réponses semblent "intelligentes".

Si tu es étudiant et que tu n'as jamais construit ton propre outil de révision IA — je pense sincèrement que c'est l'une des choses les plus rentables que tu puisses faire avant tes prochains examens.`,
      },
      date: "2025-04-18",
      ghLink: "https://github.com/yanimohellebi26/RAG-Master1",
    },
    {
      id: "daily-problems",
      imgPath: BdailyImg,
      title: {
        en: "Why I build: every project starts with a personal problem",
        fr: "Pourquoi je construis : chaque projet commence par un problème personnel",
      },
      description: {
        en: "A reflection on what drives me to code — and why the best ideas are hiding in your everyday frustrations",
        fr: "Une réflexion sur ce qui me pousse à coder — et pourquoi les meilleures idées se cachent dans tes frustrations du quotidien",
      },
      content: {
        en: `If you look at the projects I have built, you will notice a pattern: none of them started from a business model or a market gap analysis.

They all started with something that annoyed me personally.

I arrive in a new city and can't find a good bar — **LyonByNight**. I finish a book I loved and don't know what to read next — **BookBot**. I scroll Netflix for an hour and watch nothing — **MovieCard**. I want to eat well on a student budget while training — **NUTRI-MIND**. I have hundreds of pages of course material to revise in two weeks — **RAG-Master1**. I want to read a film review without being manipulated by the collective opinion — **NeutraView** and **RAWVIEW**.

Every single one is a response to a moment in my daily life where I thought: *this is annoying. There should be something that solves this.*

I believe this is the most honest reason to build anything.

Not because it will be popular. Not because it fits a trend. But because **you are solving a real problem for a real person — yourself**. And if it bothers you, it almost certainly bothers others too.

This approach changes how you prioritise features, because you are also your own user. It changes how you write — because you understand the frustration from the inside. It changes how you measure success — not by metrics, but by whether the tool actually makes your day slightly better.

Most of the apps I use every day were probably built the same way: by someone who was fed up with a limitation, opened their editor at midnight, and started typing.

The gap between "this is annoying" and "I built something about this" is smaller than most people think.

You just have to start.`,
        fr: `Si tu regardes les projets que j'ai construits, tu remarqueras un fil conducteur : aucun n'a commencé par un business model ou une analyse de marché.

Ils ont tous commencé par quelque chose qui m'agaçait personnellement.

J'arrive dans une nouvelle ville et je ne trouve pas de bon bar — **LyonByNight**. Je termine un livre que j'ai adoré et je ne sais pas quoi lire ensuite — **BookBot**. Je scrolle Netflix une heure et je ne regarde rien — **MovieCard**. Je veux bien manger avec un budget étudiant en faisant de la muscu — **NUTRI-MIND**. J'ai des centaines de pages de cours à réviser en deux semaines — **RAG-Master1**. Je veux lire un avis sur un film sans être manipulé par l'opinion collective — **NeutraView** et **RAWVIEW**.

Chacun est une réponse à un moment de ma vie quotidienne où j'ai pensé : *c'est pénible. Il devrait exister quelque chose qui résout ça.*

Je crois que c'est la raison la plus honnête de construire quoi que ce soit.

Pas parce que ça va être populaire. Pas parce que ça correspond à une tendance. Mais parce que **tu résous un vrai problème pour une vraie personne — toi-même**. Et si ça t'embête, il y a de très fortes chances que ça embête d'autres aussi.

Cette approche change la façon dont tu priorises les fonctionnalités, parce que tu es aussi ton propre utilisateur. Elle change la façon dont tu écris — parce que tu comprends la frustration de l'intérieur. Elle change la façon dont tu mesures le succès — non par des métriques, mais par si l'outil rend ta journée un peu meilleure.

La plupart des apps que j'utilise tous les jours ont probablement été construites de la même façon : par quelqu'un qui en avait marre d'une limitation, qui a ouvert son éditeur à minuit, et qui a commencé à taper.

L'écart entre "c'est pénible" et "j'ai construit quelque chose là-dessus" est plus petit qu'on ne le croit.

Il suffit de commencer.`,
      },
      date: "2025-04-18",
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
            {language === "fr"
              ? "Quelques réflexions et expériences autour de mes projets récents."
              : "A curated selection of essays exploring my recent projects."}
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <BlogCards
              key={article.id}
              title={article.title[language] || article.title.en}
              description={article.description[language] || article.description.en}
              content={article.content[language] || article.content.en}
              date={article.date}
              ghLink={article.ghLink}
              imgPath={article.imgPath}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;