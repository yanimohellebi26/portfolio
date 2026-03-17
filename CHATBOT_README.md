# Configuration du Chatbot

## Architecture

Le chatbot utilise une architecture **frontend -> backend proxy -> OpenAI** :

1. Le frontend envoie les messages a `POST /api/chat`
2. Le backend proxie les appels vers OpenAI
3. La cle API OpenAI reste **exclusivement cote serveur**

En cas d'indisponibilite du serveur, le chatbot bascule automatiquement sur une base de connaissances locale (keyword matching).

### Deux backends disponibles

| Environnement | Backend | Fichier |
|---|---|---|
| **Production (Vercel)** | Vercel Serverless Function | `api/chat.js` |
| **Developpement local** | Express server | `server/index.js` |

Le frontend utilise `fetch("/api/chat")` dans les deux cas — le chemin relatif fonctionne partout.

## Installation locale

1. Copiez `.env.example` vers `.env` et remplissez les variables :
```bash
cp .env.example .env
```

2. Configurez au minimum `OPENAI_API_KEY` dans le fichier `.env` :
```
OPENAI_API_KEY=sk-...
```

3. Installez les dependances :
```bash
npm install
```

4. Lancez le serveur backend et le frontend :
```bash
# Terminal 1 - Backend (port 5001)
npm run server

# Terminal 2 - Frontend (port 3000, proxy vers 5001)
npm start
```

Le `"proxy"` dans `package.json` redirige automatiquement `/api/chat` vers le serveur Express en developpement.

## Deploiement Vercel

1. Vercel detecte automatiquement `api/chat.js` et le deploie comme serverless function
2. Ajoutez `OPENAI_API_KEY` dans **Vercel Dashboard > Settings > Environment Variables**
3. Redeploy. C'est tout.

## Fonctionnalites

- **IA Conversationnelle** : Utilise GPT-4o-mini via le backend
- **Base de connaissances** : Contexte complet sur le portfolio de Yani
- **Fallback local** : En cas d'erreur API, utilise une base de connaissances locale
- **Historique** : Garde en memoire les 10 derniers messages pour le contexte
- **Rate limiting** : 20 requetes/minute/IP pour prevenir les abus
- **Validation** : Messages limites a 500 caracteres
- **Design moderne** : Interface glassmorphism avec animations fluides

## Securite

- La cle API OpenAI n'est **jamais exposee cote client**
- Rate limiting (20 req/min/IP) sur les deux backends
- Validation de longueur des messages (500 chars max)
- Pas de CORS necessaire en production (meme domaine Vercel)
