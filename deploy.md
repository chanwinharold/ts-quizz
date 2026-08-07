# Déploiement — QuizMaster

Guide de mise en production de l'application **QuizMaster** (frontend React + Vite, backend Node.js/Express).

## Architecture

```
frontend/  -> React 19 + Vite + Tailwind v4 (SPA)
backend/   -> Node.js + Express 5 (API REST + questions)
```

Deux modes de production possibles :

| Option | Description | Recommandé pour |
|--------|-------------|-----------------|
| **A — Process unique** | Le serveur Express sert à la fois l'API (`/api/*`) et le frontend buildé (`frontend/dist`). | VPS / petit serveur, mise en place rapide |
| **B — Séparé** | Frontend servé par Nginx (ou CDN), backend Node derrière un reverse proxy. | Trafic important, séparation des charges |

La **recommandation** pour ce projet est l'option A : le backend sert automatiquement le frontend dès que `frontend/dist` existe.

---

## Prérequis

- **Node.js 22 LTS** (recommandé ; Vite 8 nécessite Node ≥ 20.19)
- **pnpm** pour le frontend (un lockfile `pnpm-lock.yaml` est présent)
- **npm** pour le backend (lockfile `package-lock.json`)
- Un VPS ou serveur Linux (Ubuntu/Debian conseillé)
- Un nom de domaine pointant vers le serveur (recommandé pour HTTPS)

Vérifier :

```bash
node -v   # >= 20.19
npm -v
pnpm -v   # sinon : npm i -g pnpm
```

---

## 1. Récupérer le code

```bash
git clone <votre-repo> quizmaster
cd quizmaster
```

---

## 2. Installer les dépendances

```bash
# Backend (npm)
cd backend
npm ci

# Frontend (pnpm)
cd ../frontend
pnpm install --frozen-lockfile
```

---

## 3. Configurer les variables d'environnement

### Backend (`backend/.env`)

Copier le modèle puis adapter :

```bash
cd backend
cp .env.example .env
```

| Variable | Valeur par défaut | Description |
|----------|-------------------|-------------|
| `PORT` | `3000` | Port HTTP du serveur |
| `HOST` | `localhost` | Interface d'écoute. Mettre `0.0.0.0` si derrière Nginx |
| `CORS_ORIGIN` | `*` | Origines autorisées, séparées par des virgules (ex. `https://quizmaster.example.com`) |

En production :

```env
PORT=3000
HOST=0.0.0.0
CORS_ORIGIN=https://quizmaster.example.com
```

> `backend/.env` ne doit **jamais** être commité (déjà dans `.gitignore`).

### Frontend (`frontend/.env.production`)

Facultatif. Le frontend appelle l'API en **même origine** (`/api`) par défaut :

```env
# Uniquement si le frontend est hébergé séparément du backend (option B)
VITE_API_URL=https://api.quizmaster.example.com
```

> Laisser ce fichier absent pour l'option A.

---

## 4. Builder le frontend

```bash
cd frontend
pnpm build
```

Produit le dossier `frontend/dist/` (index.html + assets).

Le backend détecte automatiquement `frontend/dist/index.html` au démarrage et sert alors :
- les assets statiques (`/assets/*`),
- l'application sur toutes les routes non-API (fallback SPA pour `/quiz`, `/final`, …),
- l'API sur `/api/*`.

---

## 5. Démarrer le backend en production

```bash
cd backend
NODE_ENV=production npm start
```

Test rapide :

```bash
curl http://localhost:3000/api/health
# {"data":{"status":"ok","categories":4},"message":"OK"}

curl -I http://localhost:3000/          # sert index.html de la SPA
curl -I http://localhost:3000/quiz      # fallback SPA (200)
```

> `npm start` = `node index.js` (pas de nodemon en production).
> En dev, utiliser `npm run dev` (nodemon) + `pnpm dev` (Vite, proxy `/api` → `localhost:3000`).

---

## 6. Option A — Service systemd (recommandé)

Créer `/etc/systemd/system/quizmaster.service` :

```ini
[Unit]
Description=QuizMaster (API + frontend)
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/opt/quizmaster/backend
Environment=NODE_ENV=production
EnvironmentFile=/opt/quizmaster/backend/.env
ExecStart=/usr/bin/node index.js
Restart=always
RestartSec=3
# Durcissement de base
NoNewPrivileges=true

[Install]
WantedBy=multi-user.target
```

Activer et lancer :

```bash
sudo cp quizmaster.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now quizmaster
sudo systemctl status quizmaster
```

Vérifier les logs :

```bash
sudo journalctl -u quizmaster -f
```

---

## 7. Reverse proxy Nginx + HTTPS

Installer Nginx et Certbot :

```bash
sudo apt install nginx certbot python3-certbot-nginx
```

Créer `/etc/nginx/sites-available/quizmaster` :

```nginx
server {
    listen 80;
    server_name quizmaster.example.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Assets à mettre en cache 1 an (hashés par Vite)
    location /assets/ {
        proxy_pass http://127.0.0.1:3000;
        proxy_cache_valid 200 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Activer :

```bash
sudo ln -s /etc/nginx/sites-available/quizmaster /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

HTTPS automatique :

```bash
sudo certbot --nginx -d quizmaster.example.com
```

Mettre à jour `CORS_ORIGIN` dans `backend/.env` avec le domaine HTTPS, puis redémarrer :

```bash
sudo systemctl restart quizmaster
```

---

## 8. Option B — Frontend et backend séparés

1. Builder le frontend : `pnpm build`.
2. Servir `frontend/dist/` avec Nginx (ou déployer sur un CDN/Netlify/Vercel) :

```nginx
server {
    listen 80;
    server_name quizmaster.example.com;
    root /opt/quizmaster/frontend/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;   # fallback SPA
    }

    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

3. Déployer le backend Node sur un autre serveur, derrière Nginx :

```nginx
server {
    listen 80;
    server_name api.quizmaster.example.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

4. Définir `VITE_API_URL=https://api.quizmaster.example.com` dans le build du frontend.
5. Définir `CORS_ORIGIN=https://quizmaster.example.com` sur le backend.

---

## 9. Checklist finale avant mise en ligne

- [ ] `pnpm build` sans erreur, `npm run lint` sans erreur
- [ ] `curl http://localhost:3000/api/health` → `status: ok`
- [ ] `curl http://localhost:3000/` renvoie la SPA (titre `QuizMaster`)
- [ ] Parcours complet : choisir catégorie + difficulté → répondre → résultats
- [ ] `CORS_ORIGIN` défini sur le domaine réel
- [ ] `backend/.env` présent sur le serveur et absent du git
- [ ] HTTPS actif (certbot) si domaine
- [ ] Service systemd actif et `Restart=always`

---

## 10. Mise à jour / redéploiement

```bash
cd /opt/quizmaster
git pull

# Backend
cd backend && npm ci

# Frontend
cd ../frontend && pnpm install --frozen-lockfile && pnpm build

# Redémarrer
sudo systemctl restart quizmaster
```

---

## 11. Dépannage

| Problème | Solution |
|----------|----------|
| `ECONNREFUSED` sur `/api` en dev | Backend pas lancé → `cd backend && npm run dev` (port 3000) |
| API 404 sur `/api/...` | Vérifier la route : `GET /api/health`, `GET /api/categories`, `GET /api/questions?category=…&difficulty=…` |
| La racine renvoie du JSON | Le frontend n'est pas buildé → lancer `pnpm build` dans `frontend/` |
| CORS bloqué | Vérifier `CORS_ORIGIN` (mettre `*` en dev, le domaine exact en prod) |
| Page blanche | Inspecter `frontend/dist/index.html` + console navigateur ; vérifier `VITE_API_URL` |
| Port déjà utilisé | Changer `PORT` dans `backend/.env` et le proxy Nginx en conséquence |

---

## Rappel des endpoints API

| Méthode | Route | Description |
|---------|-------|-------------|
| GET | `/api/health` | État du serveur |
| GET | `/api/categories` | Liste des catégories (avec difficultés et nombres de questions) |
| GET | `/api/questions?category=…&difficulty=…&limit=…` | Questions (catégorie requise, difficulté optionnelle, `limit` max 50, défaut 10) |

Catégories : `science`, `history`, `tech`, `pop-culture`. Difficultés : `Easy`, `Medium`, `Hard`.
