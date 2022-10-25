# LolRotation
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Prérequis
Afin de pouvoir exécuter l'application sur votre poste, vous devez d'aborder installer les dépendances suivantes :
  * NodeJS
  * Angular cli
 
### Installation
#### Node
  1. Télécharger la version LTS de NodeJS [ici](https://nodejs.org/fr/download/)
  2. Suivre les étapes d'installation.
 
### Angular cli
  1. Après avoir installé NodeJS, ouvrir une invite de commande
  2. Taper `npm install -g @angular/cli`
  3. Taper `npm start` pour lancer l'application

# Fonctionalité

### Dashboard
* Le dashboard regroupe tous les heros de la semaine (16 soit 10% de champion du jeux)
* La list des heros sont récuperé grace à l'Api riot game [CHAMPION-V3](https://developer.riotgames.com/apis#champion-v3) et la base de donné [Data Dragon](https://riot-api-libraries.readthedocs.io/en/latest/ddragon.html).
* Chaque champion est affiché avec son nom sur des cartes cliquables qui redirige vers les details du champion séléctionne


### Detail
* C'est la page de détails de chaque champion avec les informations jugé important
