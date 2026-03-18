import React from "react";
import BlogCards from "./BlogCards";
import Bneutralview from "../../Assets/Blog/Bneutralview.png";
import Brecommendation from "../../Assets/Blog/Brecommendation.png";
import Brawview from "../../Assets/Blog/Brawview.png";
import Bnutrimind from "../../Assets/Blog/Bnutri_mind.png";
import Bsubsense from "../../Assets/Blog/Bsubsense.png";
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