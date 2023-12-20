
# Trieuse de Film 

## Application qui créer des fiches pour des films

 <img style="width: 100px;" src="./front/assets/images/readme/connexion.png" alt="connexion">
  <img style="width: 100px;" src="./front/assets/images/readme/creationFiche.png" alt="creation fiche">
   <img style="width: 100px;" src="./front/assets/images/readme/fiche.png" alt="fiche">


## Technos :

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## Description:
Server Node.js qui crud fiches de film et utilisateurs<br>
Les films sont à déposer dans le dossier "films"<br>
Après connexion, on a accès aux fiches et à la création de fiches supplémentaires<br>

## Ajout:
Ajouter 2 dossiers : images et films dans le dossier "back"<br>
Ajouter les films manuellement dans le dossier films<br>
Demarer en local sur le fichier index.html pour ne pas à télécharger les films
 
## Variables d'environnement:
A la racine du back : <br>
> USER="identifiants mongodb"<br>
> PASSWORD="passwordMongodb"<br>
> SECRET_KEY="chaine de charactères"<br>

### Installer node.js

### Installer les dépendances:

`npm install`

### Lancer le serveur:
Se placer sur le back
`node server`

### Lancer l'application:
A la racine du projet, compiler le js en un fichier bundle.js
`npm run start`
