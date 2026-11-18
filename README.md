# EHR – Emploi Hôtel Restaurant

Site vitrine d'EHR (recrutement, consulting, formation, conseil juridique et vente de tenues pour l'hôtellerie et la restauration – Lomé, Togo), réalisé en React + Vite.

## Démarrage

```bash
npm install
npm run dev      # serveur de développement
npm run build    # version de production dans dist/
```

## Docker

```bash
docker compose up -d --build
```

Le site est alors disponible sur http://localhost:8080 (servi par Nginx).

Sans Docker Compose :

```bash
docker build -t ehrtg .
docker run -d -p 8080:80 --name ehrtg ehrtg
```

## Structure

- `src/data.js` – coordonnées, services et partenaires (textes à modifier ici)
- `src/pages/` – Accueil, Services, page de service, À propos, Contact
- `src/components/` – en-tête, pied de page, bouton retour en haut, WhatsApp…
- `src/index.css` – styles et couleurs
- `public/images/` – logo, photos et logos partenaires

## Déploiement

Le site utilise des routes côté client (`/contact`, `/recrutement`…). Sur l'hébergeur, rediriger toutes les URL vers `index.html`.
