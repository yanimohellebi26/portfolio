# Configuration du Chatbot

## Installation

1. Installez le package OpenAI :
```bash
npm install openai
```

2. Créez un fichier `.env` à la racine du projet avec votre clé API OpenAI :
```
REACT_APP_OPENAI_API_KEY=votre_clé_api_ici
```

3. Redémarrez le serveur de développement :
```bash
npm start
```

## Fonctionnalités

- 🤖 **IA Conversationnelle** : Utilise GPT-3.5-turbo pour des réponses intelligentes
- 📚 **Base de connaissances** : Contexte complet sur le portfolio de Yani
- 🔄 **Fallback local** : En cas d'erreur API, utilise une base de connaissances locale
- 💬 **Historique** : Garde en mémoire les 5 derniers messages pour le contexte
- 🎨 **Design moderne** : Interface glassmorphism avec animations fluides

## Sécurité

⚠️ **Important** : Ne partagez jamais votre clé API OpenAI publiquement !

Le fichier `.env` est déjà dans `.gitignore` pour éviter de l'exposer sur GitHub.
