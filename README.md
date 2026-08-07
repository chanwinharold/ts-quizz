# QuizMaster 🎯

Application web de quiz interactive. Choisis une catégorie et une difficulté, réponds dans le temps imparti et consulte ta correction détaillée.

> **Expertly Energetic** — une expérience éducative sombre, moderne et engageante (dark mode, glassmorphism, accent Electric Violet).

## ✨ Fonctionnalités

- **4 catégories** : Science, History, Tech, Pop Culture
- **3 difficultés** : Easy, Medium, Hard — **72 questions** au total
- **Timer** de 30 secondes par question
- **Correction instantanée** (bonne/mauvaise réponse) après chaque question
- **Écran de résultats** : score en anneau + revue détaillée de chaque réponse
- **Responsive** : mobile & desktop
- Design system complet (palette Material, typographie Plus Jakarta Sans / Inter / Geist)

## 🧱 Stack technique

| Partie | Techno |
|--------|--------|
| Frontend | React 19 · Vite 8 · TypeScript · Tailwind CSS 4 · shadcn/ui (Base UI) |
| Backend | Node.js · Express 5 |
| Langage | TypeScript (front) / JavaScript (back) |

## 📁 Structure du projet

```
.
├── backend/            # API Express (données + endpoints)
│   ├── core/           # config & dataset de questions
│   ├── routes/         # routes /api/*
│   └── http-tests/     # requêtes de test (fichiers .http)
├── frontend/           # SPA React + Vite
│   ├── src/pages/      # Home · Quiz · Final
│   ├── src/store/      # contexte de quiz (état partagé)
│   ├── src/api/        # client API
│   └── components/ui/  # composants shadcn
└── deploy.md           # guide de mise en production
```

## 🚀 Démarrage rapide (développement)

Prérequis : **Node.js ≥ 20.19** et **pnpm**.

```bash
# 1. Backend (API sur http://localhost:3000)
cd backend
npm ci
cp .env.example .env        # PORT=3000 par défaut
npm run dev                 # nodemon

# 2. Frontend (Vite sur http://localhost:5173, proxy /api -> :3000)
cd ../frontend
pnpm install
pnpm dev
```

Ouvrir **http://localhost:5173**.

## 📦 Scripts

| Script | Rôle |
|--------|------|
| `backend`: `npm start` | Lance l'API en production (`node index.js`) |
| `backend`: `npm run dev` | Lance l'API en dev (nodemon) |
| `frontend`: `pnpm dev` | Serveur de développement Vite |
| `frontend`: `pnpm build` | Build de production (tsc + vite) → `frontend/dist/` |
| `frontend`: `pnpm lint` | ESLint |

## 🔌 API

| Méthode | Route | Description |
|---------|-------|-------------|
| GET | `/api/health` | État du serveur |
| GET | `/api/categories` | Catégories + difficultés + nombres de questions |
| GET | `/api/questions?category=…&difficulty=…&limit=…` | Questions (catégorie requise, difficulté optionnelle) |

Catégories : `science`, `history`, `tech`, `pop-culture` · Difficultés : `Easy`, `Medium`, `Hard`.

## ☁️ Production

Le backend sert automatiquement le frontend buildé (`frontend/dist`). Voir le guide complet : **[deploy.md](./deploy.md)** (systemd, Nginx, HTTPS, mise à jour).

## 📝 Licence

ISC — © 2024 chanwinharold
