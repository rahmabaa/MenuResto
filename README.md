# QR Menu (React + Vite) — modèle Web Studio TN

    npm install
    npm run dev      # http://localhost:5173
    npm run build    # dossier /dist à héberger

## Nouveau client = 3 étapes
1. Dupliquer `src/data/restaurant.js` : nom, couleurs (`theme`), WhatsApp, catégories, produits, prix.
2. Pointer vers ce fichier dans `src/data/index.js`.
3. Mettre les photos dans `public/images/` et renseigner `image: '/images/xxx.jpg'`.

## QR par table
Le QR de la table 5 pointe vers `https://adresse-du-menu/?table=5` : le numéro s'affiche et part dans le message au serveur.

## Appeler le serveur
Avec `whatsapp: '216XXXXXXXX'`, le bouton ouvre WhatsApp avec le message (table + articles choisis). Sans numéro : simple démo.
