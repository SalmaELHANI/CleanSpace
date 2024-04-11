# CleanSpace

CleanSpace est une plateforme de nettoyage professionnel conçue pour offrir une expérience de nettoyage de haute qualité et sans tracas à ses clients.

## Table des Matières

1. [Description](#description)
2. [Fonctionnalités](#fonctionnalités)
3. [Technologies Utilisées](#technologies-utilisées)
4. [Installation](#installation)
5. [Utilisation](#utilisation)
6. [Testing](#testing)
7. [POSTMAN](#postman)
8. [Contributions](#contributions)
9. [License](#license)
10. [Contact](#contact)

## Description

CleanSpace est une plateforme en ligne qui permet aux utilisateurs de réserver des services de nettoyage professionnel pour leurs maisons, bureaux, restaurants, et plus encore. L'objectif principal est de fournir une expérience utilisateur fluide et intuitive tout en garantissant un nettoyage de haute qualité et respectueux de l'environnement.

## Fonctionnalités

- **Gestion des Utilisateurs**: Inscription, connexion, gestion de profil.
- **Réservation de Services**: Sélection de services de nettoyage, choix de la date et de l'heure.
- **Gestion des Réservations**: Visualisation, modification et annulation des réservations.
- **Administration**: Interface d'administration pour la gestion des services, des utilisateurs et des réservations.
- **Notifications**: Envoi d'e-mails de confirmation et de rappel pour les réservations.

## Technologies Utilisées

- **Frontend**: React.js, Tailwind CSS, AOS (Animate On Scroll), React Router.
- **Backend**: Node.js, Express.js.
- **Base de Données**: MongoDB.
- **Authentification**: JSON Web Tokens (JWT), Bcrypt pour le hachage des mots de passe.
- **Autres Outils**: Nodemailer pour l'envoi d'e-mails, PDFKit pour la génération de documents PDF.

## Installation

1. Clonez le repository: `git clone https://github.com/SalmaELHANI/CleanSpace.git`
2. Naviguez vers le répertoire du projet: `cd CleanSpace`
3. Installez les dépendances du frontend et du backend:

```bash
cd frontend
npm install
cd ../backend
npm install

```

4. Configurez les variables d'environnement en créant un fichier `.env` à la racine du répertoire `backend`. Voici un exemple de configuration :

```bash

DB_CONNECTION_STRING=URL_de_connexion_à_MongoDB
PORT=3000
GMAIL_USER=votre_email@gmail.com
GMAIL_PASS=votre_mot_de_passe_gmail
JWT_SECRET=votre_clé_secrète_JWT

```

## Utilisation

1. Lancez le serveur backend: 

```bash
npm run dev:back
```

2. Lancez le serveur frontend: 

```bash
npm run dev:front

```
3. Ouvrez votre navigateur et accédez à l'URL `http://cleanspace.ma` pour utiliser l'application CleanSpace.

## Testing

Des tests unitaires sont implémentés à l'aide de Jest. Pour exécuter les tests, utilisez la commande suivante :

```bash
npm test
```
# POSTMAN
Utilisez le fichier JSON pour importer les collections Postman et tester l'API vous-même.

## Contributions

Les contributions sont les bienvenues! Si vous souhaitez contribuer à ce projet, veuillez suivre ces étapes :
1. Fork le repository.
2. Créez une nouvelle branche: `git checkout -b feature/nom_de_votre_fonctionnalité`.
3. Faites vos modifications et committez-les: `git commit -am 'Ajouter une nouvelle fonctionnalité'`.
4. Poussez vers la branche: `git push origin feature/nom_de_votre_fonctionnalité`.
5. Faites une pull request.

## License

Ce projet est sous licence MIT. Pour plus d'informations, veuillez consulter le fichier [LICENSE](LICENSE).

## Contact

Pour toute question ou suggestion concernant ce projet, n'hésitez pas à me contacter à [salmaelhani7@example.com](mailto:salmaelhani7@example.com).
