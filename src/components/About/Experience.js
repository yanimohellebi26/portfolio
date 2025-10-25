import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { FaBriefcase, FaGithub } from "react-icons/fa";
import { MdDateRange, MdLocationOn } from "react-icons/md";
import ProjectModal from "./ProjectModal";

function Experience() {
  const { language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  const experiences = [
    {
      id: "siemens",
      role: {
        fr: "Ingénieur R&D IA en Alternance",
        en: "AI R&D Engineer Apprentice",
      },
      company: "Siemens DISW",
      location: "Lyon, France",
      period: {
        fr: "Octobre 2025 - Octobre 2027 (2 ans)",
        en: "October 2025 - October 2027 (2 years)",
      },
      description: {
        fr: "Développement de solutions d'intelligence artificielle pour des applications industrielles. Travail sur des architectures d'agents intelligents, NLP, et Computer Vision.",
        en: "Development of artificial intelligence solutions for industrial applications. Working on intelligent agent architectures, NLP, and Computer Vision.",
      },
      technologies: [
        "LangChain",
        "LangGraph",
        "PyTorch",
        "TensorFlow",
        "Docker",
        "REST APIs",
        "SQL",
        "Cypher",
        "Jira",
        "Confluence",
      ],
      current: true,
    },
    {
      id: "libiub",
      role: {
        fr: "Stagiaire en Recherche IA & Vision par Ordinateur",
        en: "Research Intern in AI & Computer Vision",
      },
      company: {
        fr: "Laboratoire d'Informatique de l'Université de Bourgogne (LE2I)",
        en: "Computer Science Laboratory - University of Burgundy (LE2I)",
      },
      location: "Dijon, France",
      period: {
        fr: "Juin 2025 - Août 2025 (3 mois)",
        en: "June 2025 - August 2025 (3 months)",
      },
      description: {
        fr: "Stage de recherche axé sur la segmentation sémantique de nuages de points 3D. Développement et comparaison de deux architectures de deep learning (PointNet et KPConv) pour la classification d'objets urbains et d'éléments architecturaux. Travail complet incluant la préparation de datasets, l'entraînement de modèles, et l'analyse de résultats.",
        en: "Research internship focused on semantic segmentation of 3D point clouds. Development and comparison of two deep learning architectures (PointNet and KPConv) for urban object and architectural element classification. Complete workflow including dataset preparation, model training, and results analysis.",
      },
      projects: [
        {
          name: {
            fr: "Segmentation Urbaine avec PointNet",
            en: "Urban Segmentation with PointNet",
          },
          description: {
            fr: "Classification de nuages de points 3D du dataset Paris-Lille-3D pour identifier infrastructures urbaines, véhicules, piétons et végétation",
            en: "Classification of 3D point clouds from Paris-Lille-3D dataset to identify urban infrastructure, vehicles, pedestrians and vegetation",
          },
          detailedDescription: {
            fr: "Projet de segmentation sémantique d'environnements urbains à partir du dataset Paris-Lille-3D. L'objectif était d'entraîner un modèle PointNet capable de classifier chaque point d'un nuage de points 3D selon sa catégorie sémantique (infrastructure, véhicules, piétons, végétation, mobilier urbain, etc.). Le projet a nécessité une phase importante de préparation des données, incluant l'extraction d'objets annotés depuis les fichiers PLY, le rééchantillonnage à 1024 points par objet, et la normalisation. Face aux défis de déséquilibre de classes et de données insuffisantes, une approche alternative de subdivision spatiale en blocs de 10m×10m a été développée pour créer un dataset d'entraînement viable.",
            en: "Semantic segmentation project of urban environments from the Paris-Lille-3D dataset. The goal was to train a PointNet model capable of classifying each point of a 3D point cloud according to its semantic category (infrastructure, vehicles, pedestrians, vegetation, street furniture, etc.). The project required an extensive data preparation phase, including extraction of annotated objects from PLY files, resampling to 1024 points per object, and normalization. Facing challenges of class imbalance and insufficient data, an alternative approach of spatial subdivision into 10m×10m blocks was developed to create a viable training dataset.",
          },
          features: [
            {
              fr: "📊 Préparation dataset Paris-Lille-3D : Extraction d'objets depuis fichiers PLY avec plyfile, parsing des annotations avec pandas, mapping des class_id avec classes.xml",
              en: "📊 Paris-Lille-3D dataset preparation: Object extraction from PLY files with plyfile, annotation parsing with pandas, class_id mapping with classes.xml",
            },
            {
              fr: "🔄 Rééchantillonnage adaptatif : Sous-échantillonnage aléatoire si >1024 points, sur-échantillonnage par duplication si <1024 points, normalisation centrée dans cube unité",
              en: "🔄 Adaptive resampling: Random subsampling if >1024 points, oversampling by duplication if <1024 points, centered normalization in unit cube",
            },
            {
              fr: "🏗️ Architecture PointNet : MLP successifs (64→128→1024), MaxPooling global pour invariance, Tête de segmentation avec features globales injectées",
              en: "🏗️ PointNet architecture: Successive MLPs (64→128→1024), Global MaxPooling for invariance, Segmentation head with injected global features",
            },
            {
              fr: "📦 Subdivision spatiale : Découpage scènes complètes en blocs 10m×10m, Reconstruction de scènes urbaines depuis fichiers d'objets NPY, Alternative au manque de données objets individuels",
              en: "📦 Spatial subdivision: Cutting complete scenes into 10m×10m blocks, Reconstruction of urban scenes from NPY object files, Alternative to lack of individual object data",
            },
            {
              fr: "⚖️ Gestion déséquilibre extrême : Distribution typique LiDAR (sol 60-70%, autres <10% chacun), Weighted CrossEntropyLoss avec poids inversement proportionnels, Tentatives d'équilibrage par époque",
              en: "⚖️ Extreme imbalance handling: Typical LiDAR distribution (ground 60-70%, others <10% each), Weighted CrossEntropyLoss with inversely proportional weights, Balancing attempts per epoch",
            },
            {
              fr: "🔧 Environnement technique : Anaconda (env 'ia') avec PyTorch, numpy, pandas, h5py, plyfile, GPU GTX 1660 Ti utilisé avec CUDA",
              en: "🔧 Technical environment: Anaconda (env 'ia') with PyTorch, numpy, pandas, h5py, plyfile, GTX 1660 Ti GPU used with CUDA",
            },
          ],
          technologies: [
            "Python",
            "PyTorch",
            "PointNet",
            "NumPy",
            "Pandas",
            "Plyfile",
            "H5py",
            "Open3D",
            "Matplotlib",
            "CUDA",
          ],
          results: {
            fr: "🎯 Résultats finaux : Meilleure accuracy de 89% atteinte sur dataset de blocs (Paris + Lille), mais problèmes persistants de déséquilibre (classe majoritaire écrase les prédictions). Distribution finale obtenue : infrastructure (9 objets), other (36), parked_vehicles (36), pedestrian (63), signage (8), street_furniture (40), terrain (1), vegetation (35). Leçons apprises : PointNet nécessite équilibre strict entre classes, nombre minimum d'objets par classe (>30), données en blocs plus efficaces que objets individuels pour scènes urbaines. Contraintes matérielles : entraînement limité par GPU (pas de CPU viable), temps d'entraînement significatif (300+ époques nécessaires).",
            en: "🎯 Final results: Best accuracy of 89% achieved on block dataset (Paris + Lille), but persistent imbalance issues (majority class crushes predictions). Final distribution obtained: infrastructure (9 objects), other (36), parked_vehicles (36), pedestrian (63), signage (8), street_furniture (40), terrain (1), vegetation (35). Lessons learned: PointNet requires strict class balance, minimum number of objects per class (>30), block data more effective than individual objects for urban scenes. Hardware constraints: training limited by GPU (no viable CPU), significant training time (300+ epochs needed).",
          },
          keyLearnings: {
            fr: [
              {
                title: "🏛️ Architecture PointNet pour segmentation",
                content: "PointNet traite des nuages de points non ordonnés via des MLP partagés sur chaque point (64→128→1024 canaux). MaxPooling global capture les features globales invariantes aux permutations. Ces features sont ensuite concaténées avec les features locales de chaque point pour la prédiction finale. L'architecture nécessite exactement 1024 points par échantillon en entrée, d'où l'importance du rééchantillonnage."
              },
              {
                title: "📦 Défis de la préparation des données urbaines",
                content: "Dataset Paris-Lille-3D : fichiers PLY contiennent coordonnées XYZ + intensité + label + class. Fichier annotation.txt décrit les objets segmentés manuellement. Problème majeur : distribution extrêmement déséquilibrée (seulement 3 tabourets dans petite ville = sous-apprentissage impossible). Solution finale : subdivision spatiale en blocs de 10m×10m couvrant toute la hauteur Z, permettant de créer plus d'échantillons d'entraînement."
              },
              {
                title: "⚠️ Problématique du déséquilibre LiDAR",
                content: "Distribution typique dans dataset LiDAR urbain : Sol (route + trottoir) = 60-70% des points, Bâtiments = 15-20%, Véhicules = 5-10%, Objets urbains = 2-5%, Végétation = 3-8%. Ce déséquilibre écrasant fait que le modèle prédit majoritairement la classe dominante même après équilibrage. Résultat typique : 97.8% des points prédits en classe 9, malgré weighted loss et équilibrage par batch. L'équilibre des données est CRUCIAL pour un bon apprentissage."
              },
              {
                title: "🔄 De l'objet au bloc : changement de stratégie",
                content: "Approche initiale : extraire chaque objet annoté individuellement (voiture, piéton, lampadaire). Problème : nombre d'objets insuffisant par classe (certaines classes <10 objets). Solution : Fusionner tous les objets par ville pour recréer scène complète, puis subdiviser en blocs réguliers de 10m×10m. Avantage : chaque bloc contient plusieurs classes, augmente drastiquement le nombre d'échantillons, et correspond mieux à la réalité d'utilisation (scanner une zone urbaine)."
              },
              {
                title: "💻 Contraintes matérielles et optimisations",
                content: "GPU GTX 1660 Ti (6GB VRAM) utilisé : batch_size limité à 8-16 selon architecture, temps par époque ~1-2 minutes pour PointNet. Sans GPU : entraînement impossible (×100 plus lent). Optimisations nécessaires : limitation à 10000 points max par inférence (subdivision si scène plus grande), utilisation de PyTorch avec CUDA, implémentation d'early stopping (patience 40) pour éviter entraînements inutiles."
              },
              {
                title: "📈 Leçons d'entraînement sur données réelles",
                content: "Configuration finale testée : 100 blocs de Paris+Lille, 300 époques, Adam optimizer (lr=0.001), batch size 8. Meilleur résultat : 89% accuracy à époque 98. Observations : La courbe d'accuracy ne converge pas avant 200+ époques avec augmentation de données (bruit, rotation, scale). Plus de données = convergence plus lente mais meilleure généralisation. Validation set essentiel pour détecter overfitting (séparation 70/20/10 train/val/test)."
              }
            ],
            en: [
              {
                title: "🏛️ PointNet Architecture for Segmentation",
                content: "PointNet processes unordered point clouds via shared MLPs on each point (64→128→1024 channels). Global MaxPooling captures global features invariant to permutations. These features are then concatenated with local features of each point for final prediction. Architecture requires exactly 1024 points per input sample, hence importance of resampling."
              },
              {
                title: "📦 Urban Data Preparation Challenges",
                content: "Paris-Lille-3D dataset: PLY files contain XYZ coordinates + intensity + label + class. Annotation.txt file describes manually segmented objects. Major issue: extremely unbalanced distribution (only 3 stools in small city = impossible underlearning). Final solution: spatial subdivision into 10m×10m blocks covering entire Z height, enabling creation of more training samples."
              },
              {
                title: "⚠️ LiDAR Imbalance Problem",
                content: "Typical distribution in urban LiDAR dataset: Ground (road + sidewalk) = 60-70% of points, Buildings = 15-20%, Vehicles = 5-10%, Urban objects = 2-5%, Vegetation = 3-8%. This overwhelming imbalance causes model to predict majority class even after balancing. Typical result: 97.8% of points predicted as class 9, despite weighted loss and batch balancing. Data balance is CRUCIAL for good learning."
              },
              {
                title: "🔄 From Object to Block: Strategy Change",
                content: "Initial approach: extract each annotated object individually (car, pedestrian, lamppost). Problem: insufficient number of objects per class (some classes <10 objects). Solution: Merge all objects by city to recreate complete scene, then subdivide into regular 10m×10m blocks. Advantage: each block contains multiple classes, drastically increases number of samples, and better matches real-world usage (scanning an urban area)."
              },
              {
                title: "💻 Hardware Constraints and Optimizations",
                content: "GTX 1660 Ti GPU (6GB VRAM) used: batch_size limited to 8-16 depending on architecture, time per epoch ~1-2 minutes for PointNet. Without GPU: training impossible (×100 slower). Necessary optimizations: limitation to 10000 points max per inference (subdivision if larger scene), use of PyTorch with CUDA, implementation of early stopping (patience 40) to avoid useless training."
              },
              {
                title: "📈 Training Lessons on Real Data",
                content: "Final configuration tested: 100 blocks from Paris+Lille, 300 epochs, Adam optimizer (lr=0.001), batch size 8. Best result: 89% accuracy at epoch 98. Observations: Accuracy curve doesn't converge before 200+ epochs with data augmentation (noise, rotation, scale). More data = slower convergence but better generalization. Validation set essential to detect overfitting (70/20/10 train/val/test split)."
              }
            ]
          },
          github: "https://github.com/yanimohellebi26/segmentation-semantique"
        },
        {
          name: {
            fr: "Segmentation de Faces de Cube avec PointNet",
            en: "Cube Face Segmentation with PointNet",
          },
          description: {
            fr: "Problème de base pour maîtriser PointNet : classifier les 6 faces d'un cube à partir d'un nuage de points 3D",
            en: "Basic problem to master PointNet: classify the 6 faces of a cube from a 3D point cloud",
          },
          detailedDescription: {
            fr: "Projet pédagogique de segmentation sémantique sur géométrie simple avant d'attaquer les données urbaines complexes. Objectif : entraîner PointNet à identifier les 6 faces distinctes d'un cube (avant, arrière, gauche, droite, haut, bas) dans un nuage de points. Génération procédurale de 100-1200 cubes avec Blender, 256 points par face (1536 total), variations de rotation et d'échelle. Ce projet a permis de comprendre l'architecture PointNet, tester différents hyperparamètres (50-630 époques), et identifier les meilleures configurations avant d'appliquer sur données réelles. Résultats finaux : 83.71% d'accuracy avec 100 cubes et 300 époques, démontrant la capacité de PointNet sur problèmes géométriques simples.",
            en: "Educational semantic segmentation project on simple geometry before tackling complex urban data. Goal: train PointNet to identify the 6 distinct faces of a cube (front, back, left, right, top, bottom) in a point cloud. Procedural generation of 100-1200 cubes with Blender, 256 points per face (1536 total), rotation and scale variations. This project allowed understanding PointNet architecture, testing different hyperparameters (50-630 epochs), and identifying best configurations before applying on real data. Final results: 83.71% accuracy with 100 cubes and 300 epochs, demonstrating PointNet's capability on simple geometric problems.",
          },
          features: [
            {
              fr: "🎲 Génération de dataset avec Blender : Script Python pour créer cubes paramétriques, 256 points échantillonnés uniformément par face, Export au format PLY avec étiquettes (label 0-5)",
              en: "🎲 Dataset generation with Blender: Python script to create parametric cubes, 256 points uniformly sampled per face, Export to PLY format with labels (label 0-5)",
            },
            {
              fr: "🔀 Augmentation de données avancée : Rotations aléatoires 3D complètes, Variations d'échelle (scale ±30%), Bruit gaussien (jittering) pour robustesse, Translation aléatoire",
              en: "🔀 Advanced data augmentation: Full 3D random rotations, Scale variations (scale ±30%), Gaussian noise (jittering) for robustness, Random translation",
            },
            {
              fr: "📊 Tests d'hyperparamètres systématiques : 50 époques → 51.37% accuracy, 100 époques → 71.23% accuracy, 150 époques → 76.66% accuracy (optimal), 200 époques → dégradation (overfitting), 300 époques avec 100 cubes → 83.71% (meilleur résultat), 630 époques avec early stopping → arrêt automatique",
              en: "📊 Systematic hyperparameter testing: 50 epochs → 51.37% accuracy, 100 epochs → 71.23% accuracy, 150 epochs → 76.66% accuracy (optimal), 200 epochs → degradation (overfitting), 300 epochs with 100 cubes → 83.71% (best result), 630 epochs with early stopping → automatic stop",
            },
            {
              fr: "🎯 Architecture optimale identifiée : MLP (64→128→1024), Batch size: 8, Learning rate: 0.001, Adam optimizer, CrossEntropyLoss non pondérée (classes équilibrées)",
              en: "🎯 Optimal architecture identified: MLP (64→128→1024), Batch size: 8, Learning rate: 0.001, Adam optimizer, Non-weighted CrossEntropyLoss (balanced classes)",
            },
            {
              fr: "📈 Évolution du dataset : 10 cubes → debugging (baseline), 100 cubes → 75.30% (convergence stable), 300 cubes → 58.07% (sous-optimisé, auraient besoin plus d'époques), 500 cubes avec bruit → convergence plus lente mais meilleure généralisation, 1000 cubes avec 512 points/face → accuracy dégradée (surcompléxification)",
              en: "📈 Dataset evolution: 10 cubes → debugging (baseline), 100 cubes → 75.30% (stable convergence), 300 cubes → 58.07% (under-optimized, would need more epochs), 500 cubes with noise → slower convergence but better generalization, 1000 cubes with 512 points/face → degraded accuracy (over-complexity)",
            },
            {
              fr: "📉 Visualisations complètes : Courbes loss/accuracy par époque, Matrice de confusion 6×6, Distribution des prédictions, Nuages de points colorés par classe vraie/prédite avec Matplotlib",
              en: "📉 Complete visualizations: Loss/accuracy curves per epoch, 6×6 confusion matrix, Prediction distribution, Point clouds colored by true/predicted class with Matplotlib",
            },
          ],
          technologies: [
            "Python",
            "PyTorch",
            "PointNet",
            "Blender",
            "NumPy",
            "Matplotlib",
            "Open3D",
          ],
          results: {
            fr: "🎯 Résultats finaux : Meilleure configuration = 100 cubes, 300 époques, accuracy maximale 83.71% (époque 249). Convergence stable sans overfitting majeur. Temps d'entraînement : ~45 secondes/époque sur GTX 1660 Ti. Leçons clés : 150 époques = sweet spot pour dataset simple, au-delà de 200 époques risque d'overfitting si dataset trop petit. Ajout de bruit ralentit convergence mais améliore généralisation. Dataset équilibré (256 points par face) critique pour bonnes performances. Augmenter densité au-delà de 512 points/face n'améliore pas résultats et ralentit entraînement.",
            en: "🎯 Final results: Best configuration = 100 cubes, 300 epochs, maximum accuracy 83.71% (epoch 249). Stable convergence without major overfitting. Training time: ~45 seconds/epoch on GTX 1660 Ti. Key lessons: 150 epochs = sweet spot for simple dataset, beyond 200 epochs risk of overfitting if dataset too small. Adding noise slows convergence but improves generalization. Balanced dataset (256 points per face) critical for good performance. Increasing density beyond 512 points/face doesn't improve results and slows training.",
          },
          keyLearnings: {
            fr: [
              {
                title: "🎲 Génération procédurale avec Blender",
                content: "Blender + script Python permet de générer datasets 3D contrôlés parfaitement. Pour un cube : créer objet primitif, passer en mode édition, subdiviser les faces avec bmesh.ops.subdivide_edges pour augmenter la densité, récupérer vertices et leurs coordonnées, associer chaque vertex à sa face d'origine via face.index. Export PLY : utilise plyfile library, stocke coordonnées XYZ + label par point. Alternative sans Blender : génération pure Python mais moins flexible."
              },
              {
                title: "📊 Importance du nombre d'époques",
                content: "Tests systématiques montrent : 50 époques = sous-apprentissage (51% accuracy), 100 époques = apprentissage en cours (71%), 150 époques = convergence optimale (76.66%), 200+ époques = risque overfitting si dataset petit. Avec 100 cubes et 300 époques : pic à 83.71% puis stabilisation. Ajout bruit/augmentation nécessite +100 époques pour même convergence car le modèle voit des variations continues. Early stopping (patience 40) essentiel pour éviter entraînements inutiles."
              },
              {
                title: "🔀 Impact de l'augmentation de données",
                content: "Sans augmentation : modèle mémorise positions exactes des cubes, échoue sur nouvelles orientations. Avec rotation 3D aléatoire : invariance aux orientations, accuracy plus stable. Avec scale ±30% : robustesse aux tailles, mais convergence 2× plus lente. Avec jittering (bruit gaussien σ=0.02) : résistance au bruit de mesure, réduit légèrement overfitting. Combinaison rotation+scale+jitter : meilleure généralisation, mais nécessite 500+ époques."
              },
              {
                title: "📦 Taille optimale du dataset",
                content: "10 cubes : insuffisant, overfitting immédiat (<60% accuracy stable). 100 cubes : sweet spot pour debugging, convergence en ~300 époques, 83.71% accuracy. 300 cubes : sous-exploité avec 300 époques (58%), aurait besoin 600+ époques. 500-1000 cubes : diminishing returns, temps d'entraînement ×5 pour gain marginal. Conclusion : Adapter époques au nombre d'échantillons. Ratio empirique : ~3 époques par cube pour convergence."
              },
              {
                title: "🎯 Densité de points par face",
                content: "Tests densité : 100 points/face (600 total) : apprentissage difficile, geometrie sous-représentée. 256 points/face (1536 total) : OPTIMAL, bon compromis précision/vitesse. 512 points/face (3072 total) : pas d'amélioration accuracy, temps ×2. Explication : PointNet échantillonne à 1024 en interne via MaxPooling. Au-delà de ~2000 points, informations redondantes. Pour cube simple, 256 points/face capture suffisamment de géométrie."
              },
              {
                title: "💡 Pourquoi le cube comme baseline",
                content: "Le cube est idéal pour comprendre PointNet avant données réelles car : Géométrie simple et symétrique, 6 classes équilibrées naturellement, Pas de complexité topologique, Rapide à générer et entraîner (~20 min pour 300 époques), Diagnostics faciles : si accuracy <70% → problème architecture/hyperparamètres, si accuracy >90% → augmentation insuffisante (mémorisation). Permet tester systématiquement impact de chaque hyperparamètre."
              }
            ],
            en: [
              {
                title: "🎲 Procedural Generation with Blender",
                content: "Blender + Python script allows generating perfectly controlled 3D datasets. For a cube: create primitive object, switch to edit mode, subdivide faces with bmesh.ops.subdivide_edges to increase density, retrieve vertices and their coordinates, associate each vertex to its original face via face.index. PLY export: uses plyfile library, stores XYZ coordinates + label per point. Alternative without Blender: pure Python generation but less flexible."
              },
              {
                title: "📊 Importance of Number of Epochs",
                content: "Systematic tests show: 50 epochs = underlearning (51% accuracy), 100 epochs = learning in progress (71%), 150 epochs = optimal convergence (76.66%), 200+ epochs = overfitting risk if small dataset. With 100 cubes and 300 epochs: peak at 83.71% then stabilization. Adding noise/augmentation requires +100 epochs for same convergence as model sees continuous variations. Early stopping (patience 40) essential to avoid useless training."
              },
              {
                title: "🔀 Impact of Data Augmentation",
                content: "Without augmentation: model memorizes exact cube positions, fails on new orientations. With random 3D rotation: orientation invariance, more stable accuracy. With scale ±30%: size robustness, but 2× slower convergence. With jittering (Gaussian noise σ=0.02): measurement noise resistance, slightly reduces overfitting. Combination rotation+scale+jitter: best generalization, but requires 500+ epochs."
              },
              {
                title: "📦 Optimal Dataset Size",
                content: "10 cubes: insufficient, immediate overfitting (<60% stable accuracy). 100 cubes: sweet spot for debugging, convergence in ~300 epochs, 83.71% accuracy. 300 cubes: underexploited with 300 epochs (58%), would need 600+ epochs. 500-1000 cubes: diminishing returns, 5× training time for marginal gain. Conclusion: Adapt epochs to number of samples. Empirical ratio: ~3 epochs per cube for convergence."
              },
              {
                title: "🎯 Point Density per Face",
                content: "Density tests: 100 points/face (600 total): difficult learning, underrepresented geometry. 256 points/face (1536 total): OPTIMAL, good accuracy/speed compromise. 512 points/face (3072 total): no accuracy improvement, 2× time. Explanation: PointNet samples at 1024 internally via MaxPooling. Beyond ~2000 points, redundant information. For simple cube, 256 points/face captures sufficient geometry."
              },
              {
                title: "💡 Why Cube as Baseline",
                content: "Cube is ideal for understanding PointNet before real data because: Simple and symmetric geometry, 6 naturally balanced classes, No topological complexity, Fast to generate and train (~20 min for 300 epochs), Easy diagnostics: if accuracy <70% → architecture/hyperparameter problem, if accuracy >90% → insufficient augmentation (memorization). Allows systematically testing impact of each hyperparameter."
              }
            ]
          },
          github: "https://github.com/yanimohellebi26/segmentation-face-cube"
        },
        {
          name: {
            fr: "Exploration de KPConv pour Segmentation 3D",
            en: "KPConv Exploration for 3D Segmentation",
          },
          description: {
            fr: "Tentative d'implémentation de Kernel Point Convolution (KPConv) pour améliorer les résultats sur cubes, avec analyse des limitations",
            en: "Implementation attempt of Kernel Point Convolution (KPConv) to improve cube results, with limitation analysis",
          },
          detailedDescription: {
            fr: "Projet exploratoire pour tester KPConv comme alternative à PointNet sur le problème de segmentation de cubes. KPConv (Thomas et al., 2019) est une architecture plus sophistiquée utilisant des convolutions sur points noyaux dans l'espace 3D, avec recherche de voisinage local. L'implémentation custom en PyTorch incluait des KPConvLayer avec rayon fixe et kernel points figés, organisés en blocs avec BatchNorm et ReLU (architecture 1→16→32→64→128→6 classes). Tests avec 1200 cubes, 300 époques, learning rate 0.001-0.003, et différents schedulers (ReduceLROnPlateau, CosineAnnealingWarmRestarts). Résultat : performances décevantes (22.6% accuracy) et temps d'entraînement ×30 plus long (1 min/époque vs 2 sec pour PointNet). Conclusion : KPConv inadapté pour géométries simples, requiert plus de features en entrée et fonctionne mieux sur données spatiales complexes.",
            en: "Exploratory project to test KPConv as alternative to PointNet on cube segmentation problem. KPConv (Thomas et al., 2019) is a more sophisticated architecture using convolutions on kernel points in 3D space, with local neighborhood search. Custom PyTorch implementation included KPConvLayer with fixed radius and frozen kernel points, organized in blocks with BatchNorm and ReLU (architecture 1→16→32→64→128→6 classes). Tests with 1200 cubes, 300 epochs, learning rate 0.001-0.003, and different schedulers (ReduceLROnPlateau, CosineAnnealingWarmRestarts). Result: disappointing performance (22.6% accuracy) and ×30 longer training time (1 min/epoch vs 2 sec for PointNet). Conclusion: KPConv unsuitable for simple geometries, requires more input features and works better on complex spatial data.",
          },
          features: [
            {
              fr: "🏗️ Implémentation KPConv from scratch : KPConvLayer avec kernel points fixes (15 points noyaux), recherche de voisinage par rayon, pondération par distance gaussienne, KPConvBlock = KPConv + BatchNorm + ReLU",
              en: "🏗️ KPConv implementation from scratch: KPConvLayer with fixed kernel points (15 kernel points), radius neighborhood search, Gaussian distance weighting, KPConvBlock = KPConv + BatchNorm + ReLU",
            },
            {
              fr: "📊 Tests architectures multiples : Baseline (1→32→64→128→6), Large (1→16→32→64→128→6), Différents rayons de voisinage testés, Avec/sans deformable kernel points",
              en: "📊 Multiple architecture tests: Baseline (1→32→64→128→6), Large (1→16→32→64→128→6), Different neighborhood radii tested, With/without deformable kernel points",
            },
            {
              fr: "🔧 Optimisations tentées : Learning rates variés (0.001, 0.003), Schedulers multiples (ReduceLROnPlateau, CosineAnnealingWarmRestarts), Batch sizes ajustés (4, 8, 16), Early stopping (patience 30-40)",
              en: "🔧 Optimization attempts: Various learning rates (0.001, 0.003), Multiple schedulers (ReduceLROnPlateau, CosineAnnealingWarmRestarts), Adjusted batch sizes (4, 8, 16), Early stopping (patience 30-40)",
            },
            {
              fr: "⏱️ Analyse performance : Temps d'entraînement : ~1 min/époque (vs 2 sec pour PointNet), Arrêt prématuré : époque 20-30 avec early stopping, Memory footprint : ×2 plus élevé, Convergence très lente",
              en: "⏱️ Performance analysis: Training time: ~1 min/epoch (vs 2 sec for PointNet), Premature stopping: epoch 20-30 with early stopping, Memory footprint: ×2 higher, Very slow convergence",
            },
            {
              fr: "🔍 Test de validation : MLP simple sur un cube individuel → 94% accuracy, Confirme que le problème est l'architecture KPConv, Données cubiques trop simples pour KPConv",
              en: "🔍 Validation test: Simple MLP on individual cube → 94% accuracy, Confirms problem is KPConv architecture, Cube data too simple for KPConv",
            },
          ],
          technologies: [
            "Python",
            "PyTorch",
            "KPConv",
            "NumPy",
            "Matplotlib",
          ],
          results: {
            fr: "🎯 Résultats finaux : Meilleure accuracy obtenue : 22.6% (époque 20), bien inférieure à PointNet (83.71%). Arrêt automatique après 30 époques sans amélioration. Temps total : 0.36 heures pour entraînement incomplet. Analyse des échecs : KPConv nécessite features riches en entrée (normales, couleurs, intensités) et non juste XYZ, architecture trop complexe pour géométrie simple du cube, recherche de voisinage locale inefficace sur objets uniformes. Validation du problème : test MLP simple sur cube → 94% accuracy, confirmant que les données sont bonnes. Conclusion : KPConv orienté pour segmentation de scènes complexes (mobilier, intérieurs), pas pour classification géométrique simple. PointNet reste meilleur choix pour ce type de problème.",
            en: "🎯 Final results: Best accuracy obtained: 22.6% (epoch 20), well below PointNet (83.71%). Automatic stop after 30 epochs without improvement. Total time: 0.36 hours for incomplete training. Failure analysis: KPConv requires rich input features (normals, colors, intensities) not just XYZ, architecture too complex for simple cube geometry, local neighborhood search inefficient on uniform objects. Problem validation: simple MLP test on cube → 94% accuracy, confirming data is good. Conclusion: KPConv oriented for complex scene segmentation (furniture, interiors), not for simple geometric classification. PointNet remains better choice for this type of problem.",
          },
          keyLearnings: {
            fr: [
              {
                title: "🏗️ Architecture KPConv expliquée",
                content: "KPConv place un ensemble fixe de kernel points (ex: 15 points) dans l'espace 3D autour de chaque point d'entrée. Pour chaque point : recherche des voisins dans un rayon donné (ex: 0.2m), les features des voisins sont pondérées selon leur distance aux kernel points (pondération gaussienne), agrégation via convolution avec poids apprenables sur les kernel points. Architecture type : séquence de KPConvBlock avec subsampling progressif (similar à UNet). Plus complexe que PointNet car nécessite gestion explicite du voisinage."
              },
              {
                title: "⚠️ Pourquoi KPConv a échoué sur les cubes",
                content: "Cube = objet trop simple et symétrique. KPConv excelle sur géométries complexes avec variations locales fortes (chaises, tables, scènes intérieures). Sur cube : voisinages très uniformes, peu de caractéristiques locales discriminantes, les 6 faces sont géométriquement identiques (seule orientation diffère). KPConv ne peut pas exploiter sa puissance sur données aussi régulières. Features XYZ seules insuffisantes - KPConv conçu pour features riches (normales, couleurs, courbures)."
              },
              {
                title: "⏱️ Coût computationnel de KPConv",
                content: "Recherche de voisinage : O(n log n) via KDTree ou ball query, très coûteux. PointNet : O(n) simple MLP par point, pas de recherche. Sur GTX 1660 Ti : KPConv = 1 min/époque pour 8 cubes, PointNet = 2 sec/époque. Facteur ×30 plus lent. Memory footprint ×2-3 plus élevé (stockage des indices de voisinage). Pour dataset 1200 cubes, KPConv nécessiterait ~20 heures pour 300 époques vs ~40 minutes pour PointNet."
              },
              {
                title: "🔍 Validation par MLP simple",
                content: "Test critique effectué : MLP 3 couches (XYZ → 128 → 64 → 6 classes) sur un seul cube. Résultat : 94% accuracy en quelques époques. Prouve que : données sont correctes et learnable, problème vient de l'architecture KPConv inadaptée. Cette validation est essentielle quand une architecture complexe échoue - toujours tester avec baseline simple pour isoler le problème."
              },
              {
                title: "🎯 Quand utiliser KPConv vs PointNet",
                content: "PointNet : objets simples ou classification globale, dataset modéré (<10k échantillons), features limitées (XYZ, peut-être normales), besoin de vitesse d'entraînement. KPConv : scènes complexes avec détails locaux, dataset large (>50k), features riches disponibles, segmentation fine nécessaire. Pour urban segmentation : KPConv serait mieux SI on avait features (intensité LiDAR, normales, RGB). Pour cubes ou formes géométriques simples : PointNet largement suffisant."
              },
              {
                title: "💡 Leçons d'architecture deep learning",
                content: "Plus complexe ≠ meilleur. Occam's Razor s'applique : choisir l'architecture la plus simple qui résout le problème. KPConv est state-of-the-art pour segmentation 3D complexe, mais overkill pour géométries simples. Coût computationnel doit être justifié par gain de performance. Ici : KPConv ×30 plus lent et -60% accuracy → clairement inadapté. Toujours benchmarker avec baseline simple (MLP, PointNet) avant d'investir dans architectures sophistiquées."
              }
            ],
            en: [
              {
                title: "🏗️ KPConv Architecture Explained",
                content: "KPConv places a fixed set of kernel points (e.g.: 15 points) in 3D space around each input point. For each point: search for neighbors within given radius (e.g.: 0.2m), neighbor features are weighted according to distance to kernel points (Gaussian weighting), aggregation via convolution with learnable weights on kernel points. Typical architecture: sequence of KPConvBlock with progressive subsampling (similar to UNet). More complex than PointNet as requires explicit neighborhood management."
              },
              {
                title: "⚠️ Why KPConv Failed on Cubes",
                content: "Cube = too simple and symmetric object. KPConv excels on complex geometries with strong local variations (chairs, tables, interior scenes). On cube: very uniform neighborhoods, few discriminative local features, 6 faces are geometrically identical (only orientation differs). KPConv cannot exploit its power on such regular data. XYZ features alone insufficient - KPConv designed for rich features (normals, colors, curvatures)."
              },
              {
                title: "⏱️ Computational Cost of KPConv",
                content: "Neighborhood search: O(n log n) via KDTree or ball query, very expensive. PointNet: O(n) simple MLP per point, no search. On GTX 1660 Ti: KPConv = 1 min/epoch for 8 cubes, PointNet = 2 sec/epoch. Factor ×30 slower. Memory footprint ×2-3 higher (storage of neighborhood indices). For 1200 cube dataset, KPConv would require ~20 hours for 300 epochs vs ~40 minutes for PointNet."
              },
              {
                title: "🔍 Validation with Simple MLP",
                content: "Critical test performed: 3-layer MLP (XYZ → 128 → 64 → 6 classes) on single cube. Result: 94% accuracy in few epochs. Proves that: data is correct and learnable, problem comes from KPConv architecture being unsuitable. This validation is essential when complex architecture fails - always test with simple baseline to isolate problem."
              },
              {
                title: "🎯 When to Use KPConv vs PointNet",
                content: "PointNet: simple objects or global classification, moderate dataset (<10k samples), limited features (XYZ, maybe normals), need for training speed. KPConv: complex scenes with local details, large dataset (>50k), rich features available, fine segmentation needed. For urban segmentation: KPConv would be better IF we had features (LiDAR intensity, normals, RGB). For cubes or simple geometric shapes: PointNet largely sufficient."
              },
              {
                title: "💡 Deep Learning Architecture Lessons",
                content: "More complex ≠ better. Occam's Razor applies: choose simplest architecture that solves problem. KPConv is state-of-the-art for complex 3D segmentation, but overkill for simple geometries. Computational cost must be justified by performance gain. Here: KPConv ×30 slower and -60% accuracy → clearly unsuitable. Always benchmark with simple baseline (MLP, PointNet) before investing in sophisticated architectures."
              }
            ]
          },
          github: "https://github.com/yanimohellebi26/reconnaissance_maison-nuage-de-points"
        },
        {
          name: {
            fr: "Reconnaissance d'Éléments Architecturaux (Murs et Ouvertures)",
            en: "Architectural Element Recognition (Walls and Openings)",
          },
          description: {
            fr: "Segmentation de maisons 3D générées paramétriquement pour distinguer murs extérieurs et ouvertures (portes/fenêtres)",
            en: "Segmentation of parametrically generated 3D houses to distinguish exterior walls and openings (doors/windows)",
          },
          detailedDescription: {
            fr: "Projet de segmentation sémantique d'éléments architecturaux simples, utilisant des modèles 3D de maisons générés procéduralement avec Blender. Objectif : entraîner PointNet avec T-Net (transformation spatiale) à classifier deux catégories : murs extérieurs (classe 0) et ouvertures - portes et fenêtres (classe 1). Génération paramétrique de maisons variées : rectangles simples, forme en L, carrées compactes, avec 1-4 ouvertures par maison (portes 1.8-2.2m × 0.6-1.2m, fenêtres 0.8-1.5m carrées/rectangulaires). Export en nuages de points XYZ avec densité élevée (70% points sur bords, 30% sur faces). Split train/val/test avec distribution équilibrée. Meilleurs résultats : 88.96% validation accuracy, 82.99% test accuracy, entraînement stable en ~300 époques. Ce projet démontre l'efficacité de PointNet sur problèmes architecturaux binaires avec données bien équilibrées.",
            en: "Semantic segmentation project of simple architectural elements, using procedurally generated 3D house models with Blender. Goal: train PointNet with T-Net (spatial transformation) to classify two categories: exterior walls (class 0) and openings - doors and windows (class 1). Parametric generation of varied houses: simple rectangles, L-shaped, compact squares, with 1-4 openings per house (doors 1.8-2.2m × 0.6-1.2m, windows 0.8-1.5m square/rectangular). Export to XYZ point clouds with high density (70% points on edges, 30% on faces). Train/val/test split with balanced distribution. Best results: 88.96% validation accuracy, 82.99% test accuracy, stable training in ~300 epochs. This project demonstrates PointNet's effectiveness on binary architectural problems with well-balanced data.",
          },
          features: [
            {
              fr: "🏠 Génération paramétrique de maisons : 4 types de plans (rectangle, L, carré, couloir), Dimensions variables (largeur/profondeur 4-12m, hauteur 2.5-3.5m), Épaisseur murs aléatoire (0.15-0.30m), Génération pure Python (pas de Blender pour dataset final)",
              en: "🏠 Parametric house generation: 4 floor plan types (rectangle, L, square, corridor), Variable dimensions (width/depth 4-12m, height 2.5-3.5m), Random wall thickness (0.15-0.30m), Pure Python generation (no Blender for final dataset)",
            },
            {
              fr: "🚪 Ouvertures réalistes : Portes : hauteur 1.8-2.2m, largeur 0.6-1.2m, position aléatoire sur mur, Fenêtres : carrées ou rectangulaires, hauteur base 0.5-1.5m, largeur 0.8-1.5m, 1-4 ouvertures par maison",
              en: "🚪 Realistic openings: Doors: height 1.8-2.2m, width 0.6-1.2m, random wall position, Windows: square or rectangular, base height 0.5-1.5m, width 0.8-1.5m, 1-4 openings per house",
            },
            {
              fr: "🎯 Architecture PointNet avec T-Net : T-Net pour normalisation spatiale (génère matrice 3×3), MLP encodeur (64→128→1024) avec BatchNorm, MaxPooling global, MLP décodeur (1024→512→256→2 classes), Softmax final pour prédiction",
              en: "🎯 PointNet architecture with T-Net: T-Net for spatial normalization (generates 3×3 matrix), MLP encoder (64→128→1024) with BatchNorm, Global MaxPooling, MLP decoder (1024→512→256→2 classes), Final Softmax for prediction",
            },
            {
              fr: "📊 Stratégie d'échantillonnage optimisée : Densité différentielle : 70% points sur bords (détails géométriques), 30% points sur faces (remplissage), Points uniformément répartis par élément, Export format XYZ avec label par point",
              en: "📊 Optimized sampling strategy: Differential density: 70% points on edges (geometric details), 30% points on faces (filling), Uniformly distributed points per element, XYZ format export with label per point",
            },
            {
              fr: "🔄 Augmentation et split : Rotations aléatoires 3D, Variations d'échelle (±30%), Miroir X ou Y, Split : 70% train, 20% val, 10% test, Distribution équilibrée entre classes",
              en: "🔄 Augmentation and split: Random 3D rotations, Scale variations (±30%), X or Y mirroring, Split: 70% train, 20% val, 10% test, Balanced distribution between classes",
            },
            {
              fr: "📈 Configuration optimale : Batch size: 8, Learning rate: 0.001, Optimizer: Adam, Loss: CrossEntropyLoss non pondérée, ~300 époques pour convergence, Vitesse: 27-44 it/s (sec/époque)",
              en: "📈 Optimal configuration: Batch size: 8, Learning rate: 0.001, Optimizer: Adam, Loss: non-weighted CrossEntropyLoss, ~300 epochs for convergence, Speed: 27-44 it/s (sec/epoch)",
            },
          ],
          technologies: [
            "Python",
            "PyTorch",
            "PointNet",
            "T-Net",
            "NumPy",
            "Matplotlib",
            "Blender (prototypage initial)",
          ],
          results: {
            fr: "🎯 Résultats finaux : Meilleure Validation Accuracy : 88.96%, Test Accuracy Finale : 82.99%, Convergence stable sans overfitting majeur. Temps d'entraînement par époque : 27-44 secondes sur GTX 1660 Ti. Matrices de confusion excellentes : peu de confusion entre murs et ouvertures. Visualisations 3D montrent segmentation précise des ouvertures. Facteurs de succès : classes bien équilibrées (contrairement au dataset urbain), problème binaire plus simple que 6-10 classes, densité de points élevée sur zones critiques (bords d'ouvertures), augmentation de données efficace. Comparaison : ce projet atteint ~83% test accuracy là où le dataset urbain plafonnait à 89% train avec déséquilibre extrême.",
            en: "🎯 Final results: Best Validation Accuracy: 88.96%, Final Test Accuracy: 82.99%, Stable convergence without major overfitting. Training time per epoch: 27-44 seconds on GTX 1660 Ti. Excellent confusion matrices: little confusion between walls and openings. 3D visualizations show precise opening segmentation. Success factors: well-balanced classes (unlike urban dataset), simpler binary problem than 6-10 classes, high point density on critical areas (opening edges), effective data augmentation. Comparison: this project achieves ~83% test accuracy where urban dataset plateaued at 89% train with extreme imbalance.",
          },
          keyLearnings: {
            fr: [
              {
                title: "🏗️ T-Net : normalisation spatiale apprise",
                content: "T-Net est un mini-réseau qui prédit une matrice de transformation 3×3 pour normaliser l'orientation et la position de chaque nuage de points avant traitement. Architecture T-Net : mêmes couches que PointNet (Conv1D 64→128→1024), MLP pour générer 9 paramètres, Reshape en matrice 3×3, Addition avec matrice identité pour stabilité. Avantage : invariance complète aux rotations 3D arbitraires, pas besoin d'aligner manuellement les données. Appliqué au début du réseau, améliore robustesse. Coût computationnel négligeable (+5% temps d'entraînement)."
              },
              {
                title: "🏠 Génération procédurale d'architectures",
                content: "Génération pure Python (sans Blender pour production) : définir plans de sol comme séquences de segments (rectangles, L-shapes), créer murs comme extrusions verticales de segments, découper ouvertures en calculant intersections géométriques. Alternative initialement tentée : Blender avec découpe booléenne (créer cube, soustraire ouvertures), mais trop complexe à automatiser et lent. Solution retenue : représenter ouvertures comme objets séparés avec densité de points différente. Portes/fenêtres = rectangles 3D positionnés sur faces de murs."
              },
              {
                title: "📊 Importance de la densité différentielle",
                content: "Première tentative : densité uniforme → modèle confond bords et intérieurs des ouvertures. Solution : 70% points sur bords (arêtes de fenêtres/portes), 30% sur faces. Justification : bords contiennent l'information géométrique critique (transitions mur→ouverture). Points de face servent surtout à 'remplir' l'espace. Résultat : amélioration +15% accuracy avec même nombre total de points. Alternative non testée : ajouter features normales de surface (mais PointNet standard n'utilise que XYZ)."
              },
              {
                title: "⚖️ Équilibre de classes = crucial",
                content: "Contrairement au dataset urbain (sol 70%, autres <10%), ici classes équilibrées naturellement : murs ~55-60% points, ouvertures ~40-45% points. Résultat : pas besoin de weighted loss, convergence plus rapide, accuracy finale meilleure. Leçon principale : pour segmentation, l'équilibre des données est PLUS important que la quantité. Mieux vaut 1000 échantillons équilibrés que 10000 déséquilibrés. Sur ce projet, 300 maisons avec bon équilibre > 1200 cubes urbains déséquilibrés."
              },
              {
                title: "🎯 Simplification progressive vers binaire",
                content: "Évolution du problème : Tentative initiale : 3 classes (murs, portes, fenêtres) → confusion portes/fenêtres. Réduction : 2 classes (murs, ouvertures) → bien meilleure performance. Justification : portes et fenêtres ont géométries très similaires (rectangles), distinction surtout par taille/position (features non disponibles dans XYZ seul). Pour applications réelles : détecter présence d'ouverture souvent suffisant, distinction porte/fenêtre peut se faire par post-processing (règles sur dimensions)."
              },
              {
                title: "💡 Du cube synthétique à l'architecture",
                content: "Progression pédagogique efficace : Cube (6 faces) → comprendre PointNet, Maisons (2 classes) → application architecturale simple, Données urbaines (10 classes) → problème réel complexe. Maisons = sweet spot : assez complexe pour être intéressant, assez simple pour bien fonctionner, plus proche réalité que cubes, temps d'entraînement raisonnable. Ce projet valide que PointNet est adapté à la segmentation architecturale avec données bien préparées."
              }
            ],
            en: [
              {
                title: "🏗️ T-Net: Learned Spatial Normalization",
                content: "T-Net is a mini-network that predicts a 3×3 transformation matrix to normalize orientation and position of each point cloud before processing. T-Net architecture: same layers as PointNet (Conv1D 64→128→1024), MLP to generate 9 parameters, Reshape to 3×3 matrix, Addition with identity matrix for stability. Advantage: complete invariance to arbitrary 3D rotations, no need to manually align data. Applied at network start, improves robustness. Negligible computational cost (+5% training time)."
              },
              {
                title: "🏠 Procedural Architecture Generation",
                content: "Pure Python generation (no Blender for production): define floor plans as sequences of segments (rectangles, L-shapes), create walls as vertical extrusions of segments, cut openings by calculating geometric intersections. Initially attempted alternative: Blender with boolean cutting (create cube, subtract openings), but too complex to automate and slow. Retained solution: represent openings as separate objects with different point density. Doors/windows = 3D rectangles positioned on wall faces."
              },
              {
                title: "📊 Importance of Differential Density",
                content: "First attempt: uniform density → model confuses edges and interiors of openings. Solution: 70% points on edges (window/door edges), 30% on faces. Justification: edges contain critical geometric information (wall→opening transitions). Face points mainly serve to 'fill' space. Result: +15% accuracy improvement with same total number of points. Untested alternative: add surface normal features (but standard PointNet only uses XYZ)."
              },
              {
                title: "⚖️ Class Balance = Crucial",
                content: "Unlike urban dataset (ground 70%, others <10%), here naturally balanced classes: walls ~55-60% points, openings ~40-45% points. Result: no need for weighted loss, faster convergence, better final accuracy. Main lesson: for segmentation, data balance is MORE important than quantity. Better to have 1000 balanced samples than 10000 unbalanced. In this project, 300 houses with good balance > 1200 unbalanced urban cubes."
              },
              {
                title: "🎯 Progressive Simplification to Binary",
                content: "Problem evolution: Initial attempt: 3 classes (walls, doors, windows) → door/window confusion. Reduction: 2 classes (walls, openings) → much better performance. Justification: doors and windows have very similar geometries (rectangles), distinction mainly by size/position (features not available in XYZ alone). For real applications: detecting opening presence often sufficient, door/window distinction can be done by post-processing (rules on dimensions)."
              },
              {
                title: "💡 From Synthetic Cube to Architecture",
                content: "Effective pedagogical progression: Cube (6 faces) → understand PointNet, Houses (2 classes) → simple architectural application, Urban data (10 classes) → complex real problem. Houses = sweet spot: complex enough to be interesting, simple enough to work well, closer to reality than cubes, reasonable training time. This project validates that PointNet is suitable for architectural segmentation with well-prepared data."
              }
            ]
          },
          github: "https://github.com/yanimohellebi26/reconnaissance_maison-nuage-de-points"
        }
      ],
      technologies: [
        "Python",
        "PyTorch",
        "PointNet",
        "KPConv",
        "NumPy",
        "Pandas",
        "Plyfile",
        "H5py",
        "Open3D",
        "Matplotlib",
        "Seaborn",
        "Blender",
        "CUDA",
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-center text-2xl font-bold text-brand-accent sm:text-3xl">
        {language === "fr"
          ? "Expérience Professionnelle"
          : "Professional Experience"}
      </h2>

      <div className="relative space-y-8">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-brand-accent via-brand-accent/50 to-transparent" />

        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative pl-20">
            {/* Timeline dot */}
            <div
              className={`absolute left-6 top-6 h-5 w-5 rounded-full border-4 ${
                exp.current
                  ? "animate-pulse border-brand-accent bg-brand-accent"
                  : "border-brand-accent/50 bg-brand-bg"
              }`}
            />

            {/* Experience card */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-brand-accent/40 hover:bg-white/[0.08] hover:shadow-xl">
              {/* Current badge */}
              {exp.current && (
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-accent/20 px-3 py-1 text-xs font-semibold text-brand-accent">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-brand-accent" />
                  {language === "fr" ? "En cours" : "Current"}
                </div>
              )}

              {/* Role and Company */}
              <div className="mb-4">
                <h3 className="mb-2 text-xl font-bold text-brand-text">
                  {language === "fr" ? exp.role.fr : exp.role.en}
                </h3>
                <p className="flex items-center gap-2 text-lg font-semibold text-brand-accent">
                  <FaBriefcase className="text-base" />
                  {typeof exp.company === "object"
                    ? language === "fr"
                      ? exp.company.fr
                      : exp.company.en
                    : exp.company}
                </p>
              </div>

              {/* Location and Period */}
              <div className="mb-4 flex flex-wrap gap-4 text-sm text-brand-muted">
                <div className="flex items-center gap-2">
                  <MdLocationOn className="text-brand-accent" />
                  {exp.location}
                </div>
                <div className="flex items-center gap-2">
                  <MdDateRange className="text-brand-accent" />
                  {language === "fr" ? exp.period.fr : exp.period.en}
                </div>
              </div>

              {/* Description */}
              <p className="mb-4 text-brand-text/80">
                {language === "fr" ? exp.description.fr : exp.description.en}
              </p>

              {/* Research Projects (for internship) */}
              {exp.projects && (
                <div className="mb-4 space-y-3">
                  <h4 className="font-semibold text-brand-accent">
                    {language === "fr"
                      ? "Projets de Recherche :"
                      : "Research Projects:"}
                  </h4>
                  {exp.projects.map((project, idx) => (
                    <div
                      key={idx}
                      className="cursor-pointer rounded-lg border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-brand-accent/30 hover:bg-white/[0.05] hover:shadow-lg"
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="mb-2 flex items-start justify-between gap-4">
                        <h5 className="font-semibold text-brand-text">
                          {language === "fr"
                            ? project.name.fr
                            : project.name.en}
                        </h5>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 text-brand-accent transition-colors hover:text-brand-accent/80"
                          aria-label="GitHub repository"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub className="text-xl" />
                        </a>
                      </div>
                      <p className="text-sm text-brand-text/70">
                        {language === "fr"
                          ? project.description.fr
                          : project.description.en}
                      </p>
                      <p className="mt-2 text-xs font-medium text-brand-accent">
                        {language === "fr"
                          ? "Cliquez pour plus de détails →"
                          : "Click for more details →"}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-muted">
                  {language === "fr" ? "Technologies" : "Technologies"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg border border-brand-accent/20 bg-brand-accent/10 px-3 py-1 text-xs font-medium text-brand-accent transition-colors hover:border-brand-accent/40 hover:bg-brand-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default Experience;