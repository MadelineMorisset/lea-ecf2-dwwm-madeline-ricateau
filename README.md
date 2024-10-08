## Contexte et Rendu de l’ECF

> Vous avez 2 jours, le 7 et 8 octobre 2024, de 9h - 15h, pour réaliser le projet demandé.
Vous devez **Créer un dépôt GitHub** pour votre projet. Vous devez le nommer `lea-ecf2-titre-pro-votreprenom-votrenom`. Vous devez partager le lien de votre dépôt github avant 15h le 8 octobre 2024 par email au formateur. 
Vous avez le droit d’utiliser toutes les ressources à votre disposition pour réaliser le projet.
> 

## Ressources

Vous devez récupérer les ressources du projet sur le dépôt suivant :

https://github.com/JeremyDallain/formation_ressources_integration_profil_devweb_page

Ce dépôt contient :

- Les images du projet.
- Les maquettes du projet (desktop et mobile).
- Des vidéos permettant de visualiser certains effets demandés.
- **Un document Readme.md à lire attentivement pour voir les contraintes du projet. Il y a beaucoup d’informations sur le projet (couleurs, polices, contraintes, effets, textes, etc.)**

⚠️ **Ne travaillez pas dans ce dépôt, il vous sert juste à récupérer les ressources et informations.**

## Contraintes techniques supplémentaires

- **HTML :**
    - Mettez en place toutes les balises nécessaires au bon fonctionnement de votre site (accessibilité, responsive, encodage, etc.), ainsi que toutes les **Meta informations**.
    - Rajoutez le **favicon**.
    - Faites des choix sémantiques cohérents pour vos éléments HTML.
- **CSS :**
    - Utilisez un **reset CSS**.
    - Mettez en place **`box-sizing: border-box`**.
- **GLOBAL :**
    - Pensez au choix des noms de classes, de variables, etc.
    - L’indentation doit être bonne (HTML, CSS, JS)

## Conseils

- Prenez bien le temps de bien lire les consignes. J’évaluerais en priorité votre capacité à répondre à une demande et donc à respecter des contraintes définies.
- Prenez le temps de vous relire et d’appliquer toutes les bonnes pratiques enseignées.
- Vous devriez avoir le temps de réaliser le projet, **Cependant**, préférez faire l’impasse sur une partie du projet mais en faisant bien ce que vous avez le temps de faire. Plutôt que d’essayer de tout faire au détriment de la qualité.
- Ce n’est pas obligatoire, mais je vous conseil de prendre **un peu** de temps pour faire une découpe de la maquette. Cela vous permettra de construire votre HTML plus rapidement par la suite. Si vous le faite, vous pouvez me partager votre fichier de découpe (dans votre projet).

## Bonne Chance ! 😃

--------------------

# Consignes Techniques du projet

## Responsive
- Il a deux versions :
  - mobile (moins de 750px)
  - desktop (750px et plus)

## Google Fonts utilisées :

- "Ubuntu" pour les textes du projet.
- "Montserrat" pour le titre principal.

## Couleurs utilisées :
### Thème principal :
- Vert principal : #16a34a
- Vert clair : #22c55e
- Vert foncé : #15803d

### Thème alternatif :
- Bleu principal : #2563eb
- Bleu clair : #3b82f6
- Bleu foncé : #1d4ed8

## Liens des icones :

- Les icones de technologies renvoie respectivement vers leur documentation :
  - HTML : https://developer.mozilla.org/fr/docs/Web/HTML
  - CSS : https://developer.mozilla.org/fr/docs/Web/CSS
  - JS : https://developer.mozilla.org/fr/docs/Web/JavaScript
  - Github : https://github.com/
- Les liens ouvrent un nouvel onglet.
- Il y a un effet au survol des icones (voir vidéo).

## Contraintes du Formulaire :

- Au survol du bouton *"Envoyer"*, la couleur du bouton change pour une couleur un peu plus sombre (voir vidéo)
- Pour que le formulaire puisse être soumis, il y a des contraintes :
  - Les champs _Nom_, _Prénom_, _Email_ et _Message_ sont des champs obligatoires.
  - Le champ _Télephone_ n'est pas obligatoire.
  - Le message doit faire au moins 15 caractères.
    Vous devez gérer la validation du champ _Message_ en **Javacript**.
    Lorsque le formulaire est soumis, si le message ne respecte pas la contrainte, on affiche un message en rouge : _"Le message doit contenir au moins 15 caractères."_ (voir vidéo)
- Lorsque le formulaire est soumis et que toutes les contraintes sont respectées, on affiche une alerte avec le message : _"Message soumis avec succès !"_.

## Gestion du thème de couleur :

- Par defaut, le thème du site est vert.
- Au survol des deux ronds de couleur (vert et bleu) dans la navigation :
  - la couleur des ronds change pour une couleur un peu plus claire (voir vidéo).
- Les deux ronds de couleur sont cliquable (gestion en **Javascript**). Lorsque l'on clique sur le bouton vert ou bleu : on change le theme, et donc les couleurs de plusieurs éléments (voir vidéo) :
  - Le fond de la bannière en haut de page, et la couleur de fond du bas de page.
  - La bordure autour de la photo.
  - La couleur de soulignement des titres.
  - La couleur du bouton _"envoyer"_ du formulaire, et la couleur au survol de ce bouton (voir vidéo).

## Textes du site

*"Développeur web de père en fils, passionné par la technologie et
l'innovation. J'ai acquis une expertise en HTML, CSS, JavaScript
et Git, me permettant de créer des sites web performants et
esthétiques. Prêt à relever de nouveaux défis."*

--------------------
--------------------
# Organisation des fichiers

## Assets
- On y retrouve le découpage de la maquette que j'ai réalisé (/decoupage). 
    => Je l'ai mit ici car si je le mettais dans le dossier ressources, ça pourrait porter à confusion sur l'origine de ce dernier (c'est-à-dire, on pourrait penser qu'il a été transmit avec les autres ressouces en début d'examen).
- Les images (SVG, photo, favicon) fournies lors de l'examen (/images).

## Ressources
=> Dossier fournit lors de l'examen. Il contient :
    - Les images dont on a besoin (et que j'ai copié dans le dossier assets/images) => /images.
    - Les screenshots des maquettes desktop et mobile, et sous deux thèmes différents => /screenshots.
    - Les vidéos des différentes animations CSS demandées => /videos.

## Scripts
=> Script JS pour gérer le changement de thème et de formulaire (celui-ci n'est pas terminé)

## Styles
=> Les différents fichiers styles CSS se trouvent ici :
    - reset_css => fichier qui nettoie les style CSS mis en place par défaut sur les navigateurs 
    - style => styles de l'ensemble du site
    - theme_alternatif => feuille de style spécifique pour changer le thème en bleu
    - theme_principal => feuille de style spécifique pour changer le thème en vert
