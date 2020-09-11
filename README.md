# Demo
### Installer les dépendences
```
npm install
```
### Lancer l'application
```
ionic serve
```

## Remarque
Vous trouverez la page admin-summary sur l'url: 
http://localhost:8100/dashboard/admin

## Pages faits
* SplashScreen
* Wizard de bienvenue
* page Home
* barre de navigation fonctionnelle en bottom (comme sur la maquette)
* Les 5 écrans des 5 principaux modules:
    * Entretien
    * SAV
    * Shop
    * Profil usager
    * Gestion Admin
* Le menu principal
* Les écrans (fake) de login
* Un squelette de code comportant des services pour les fonctions partagées de l'application

## Services utilisés 
firebase-auth.service.ts: 
* login firebase
* login réseaux sociaux: gmail, facebook, email

### Remarque: 
Utiliser le login suivant:
email: johndoe@mail.com 
mdp: superpass
pour le test car les données Firebase du test sont liées à l'UID de cette utilisateur

firebase.service.ts: 
* les requêtes Firestore avec données prédéfinies

web.service.ts: 
* exemples requêtes web service pour les données de la page "Profile"
