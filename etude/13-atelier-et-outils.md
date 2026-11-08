# Petits Savants : l'atelier des parents, les outils de la maison et ce qu'on peut ajouter

*Étude n° 13 · novembre 2026 · regards croisés : conseillère pédagogique (maternelle et cycle 2, programmes 2024-2025), éducatrice de jeunes enfants, product designer d'app famille.*

Sources : le dépôt `tvapp` (README, `www/js/parent.js`, titres des 337 leçons dans `www/js/content/*.js`), les études [02](02-produit-ux-pedagogie.md) (produit et pédagogie) et [03](03-gamification-mascottes.md) (gamification), [A-RETENIR.md](A-RETENIR.md), et **Minuto**, l'application de minuteurs visuels déjà réalisée par les fondatrices (fichier HTML fourni hors dépôt, `minuto.html`, 3 338 lignes : non recopié ici, seulement référencé). Rien n'est modifié dans le code : ce document est une étude, avec du contenu prêt à intégrer.

**Sommaire**

1. [L'atelier : structure, données et 84 fiches](#1-latelier-des-idées-à-faire-ensemble-sans-écran)
2. [Le lien avec les leçons](#2-le-lien-avec-les-leçons-la-bonne-idée-au-bon-moment)
3. [Les outils parents, bâtis sur Minuto](#3-les-outils-de-la-maison-bâtis-sur-minuto)
4. [Ce qu'on pourrait ajouter d'autre](#4-ce-quon-pourrait-ajouter-dautre)
5. [Le plan d'intégration](#5-le-plan-dintégration)
6. [Résumé](#6-résumé)

---

## 1. L'atelier : des idées à faire ensemble, sans écran

### 1.1 Pourquoi, et dans quel esprit

L'app a déjà la bonne intuition : le rapport de chaque enfant se termine par une phrase « Ce soir, … » (constante `EVENING` de `parent.js`, une phrase par matière). L'atelier en fait un vrai espace. Trois convictions le guident.

- **Le jeu est le premier mode d'apprentissage de 2 à 9 ans.** Les programmes de maternelle le disent explicitement (« apprendre en jouant », « apprendre en réfléchissant et en résolvant des problèmes », « apprendre en s'exerçant », « apprendre en se remémorant »), et le cycle 2 garde la manipulation au cœur des mathématiques (« manipuler, verbaliser, abstraire »). Ce que l'enfant voit dans une leçon sur la télé tient mieux quand il le **refait avec son corps et ses mains** : compter les marches, frapper les syllabes, peser la farine.
- **Montessori, sans dogme.** On garde ce qui est solide et facile à la maison : la **vie pratique** (verser, couper une banane, mettre la table : de vraies tâches avec de vrais objets), **isoler une difficulté** à la fois, laisser **l'enfant faire seul** quand il peut, **montrer lentement sans parler** puis le laisser essayer, un plateau rangé pour chaque activité. On ne garde pas l'interdit de l'imaginaire (les histoires, les marionnettes et les jeux de faire-semblant sont précieux), ni le matériel coûteux : tout se fait avec ce qu'on a à la maison.
- **Zéro culpabilité.** L'atelier est une **boîte à idées**, pas un programme. Aucune fiche n'est « à faire », rien ne se compte, rien ne se rattrape. Une idée de 5 minutes faite en riant vaut mieux que trois fiches faites par devoir.

**Ton des fiches** : on parle au parent (vouvoiement), en phrases courtes, sans jargon. Les compétences sont formulées comme dans les programmes pour que le parent voie le lien avec l'école, mais le déroulé est écrit comme on explique un jeu à un ami.

### 1.2 Sécurité : règles communes à toutes les fiches

Chaque fiche porte des pictogrammes de sécurité. Les règles ci-dessous sont **vérifiées automatiquement** à l'intégration (voir 1.4) pour les fiches TPS et PS.

| Règle | Application |
|---|---|
| **Pas de petits objets avant 3 ans** | Aucun objet qui passe dans un rouleau de papier toilette (environ 3,5 cm de diamètre) dans les fiches TPS : pas de perles, boutons, pièces, pâtes ou légumes secs, bouchons de bouteille, aimants, petites briques. Champ `smallParts: false` obligatoire en TPS. Pour les fiches à partir de la PS qui en utilisent, la mention « Rangez tout après le jeu, hors de portée des plus petits de la fratrie » est ajoutée automatiquement. |
| **Eau : supervision constante** | Bain, bassine, seau : « Restez à côté de votre enfant pendant tout le jeu. Un tout-petit peut se noyer dans quelques centimètres d'eau. » Pas de seau d'eau laissé dehors après le jeu. |
| **Cuisine : avec un adulte** | Le four, les plaques, la bouilloire et les couteaux pointus restent à l'adulte. L'enfant coupe les aliments mous avec un couteau à bout rond. Pictogramme « avec un adulte » et rappel « Pensez aux allergies ». Pas de pâte crue (farine crue et œufs crus ne se goûtent pas). |
| **Aliments ronds** | Avant 5 ans, raisins, tomates cerises, olives coupés en quatre dans la longueur. Pas de fruits à coque entiers, pas de bonbons durs. |
| **Pas de ballons de baudruche** | Risque d'étouffement avec un ballon crevé chez les moins de 8 ans : on utilise des balles en mousse ou des chaussettes roulées. |
| **Aimants** | Uniquement de gros aimants de frigo, jamais de petits aimants puissants (« néodyme »), jamais de piles bouton. |
| **Cordes et ficelles** | Pas de ficelle longue en TPS (risque d'étranglement) ; à partir de la PS, toujours sous les yeux d'un adulte. |
| **Pâte à sel** | Elle ne se mange pas (très salée) : l'adulte la range après le jeu. |
| **Dehors** | On ne goûte ni baies, ni champignons, ni plantes ; on se lave les mains après avoir touché la terre. |
| **Voiture** | Les jeux de voiture sont **animés par un passager**, jamais par le conducteur ; aucun objet dur qui vole dans l'habitacle ; on joue avec la voix et les yeux. |

### 1.3 Structure de l'atelier

L'atelier se range sur **six axes** ; chacun devient un filtre dans l'app (sur la télé : une rangée de grosses puces focalisables ; sur le téléphone : des puces horizontales).

| Axe | Valeurs | Remarque |
|---|---|---|
| **Classe** | TPS, PS, MS, GS, CP, CE1, CE2 | Par défaut, la classe de l'enfant choisi. Chaque fiche a une classe principale et une plage d'âge « marche aussi en … » (une fiche de MS convient souvent en GS). |
| **Matière** | Français, Maths, Découvrir le monde, Anglais, Écriture | Les **5 matières de l'app**, pour que le lien avec les leçons soit direct. Les compétences de la maternelle (« Mobiliser le langage », « Acquérir les premiers outils mathématiques », « Explorer le monde », « Agir, s'exprimer, comprendre à travers les activités physiques et artistiques » pour le graphisme) sont rangées dans la matière de l'app la plus proche. |
| **Compétence** | Formulation du programme, et un code du référentiel interne (par exemple `CP-FR-CGP-ou`, voir étude 02, § 2.5) | C'est la clé du lien avec les leçons. |
| **Durée** | 5 min · 10 min · 15-20 min · 30 min et plus · sur plusieurs jours | Le filtre par défaut en semaine : 10 minutes et moins. |
| **Lieu** | À la maison · Dehors · En voiture ou en transport · À la cuisine · Au bain · En sortie (courses, marché, parc) | Un même lieu ouvre des idées très concrètes : « On part en voiture, qu'est-ce qu'on fait ? » |
| **Matériel** | Sans rien · Papier et crayons · Objets de la maison · Jeu de cartes ou dé · Cuisine · Récup' (cartons, rouleaux, boîtes) | Toujours du matériel courant. Aucune fiche ne demande d'acheter quelque chose. |

Un septième axe, implicite, sert à varier les propositions : le **type** (jeu, jeu de mots, jeu de société maison, bricolage, expérience, cuisine, sortie, comptine, jeu de mouvement).

**Répartition des 84 fiches** : 12 par classe, avec un équilibre entre matières (par classe : français 3 à 4, maths 3 à 4, découverte du monde 2, anglais 1 à 2, écriture 1 à 2) et entre lieux (une fiche peut en avoir plusieurs : 44 se font à la maison, 18 à la cuisine, 13 dehors ou en sortie, 8 en voiture, 3 au bain, 9 « partout »). Chaque fiche dont une leçon de l'app travaille la même compétence porte l'identifiant de cette leçon (`fr-cp-ou`, `ma-gs2-gauche`…) : **83 fiches sur 84** ont un lien direct (tous les identifiants ont été vérifiés dans `www/js/content/*.js`).

### 1.4 Le format de données

Les fiches sont du **contenu**, comme les leçons : elles vivent dans un fichier `www/js/content/atelier.js` qui remplit `window.PS_ATELIER` (même principe que `window.PS_CONTENT`, pas d'étape de compilation). Ce qui change pour chaque enfant (idée déjà essayée, idée aimée) vit dans le `Store` local, comme la progression. Rien ne sort de la télé.

**Une fiche** :

```json
{
  "id": "at-cp-01",
  "v": 1,
  "title": "La chasse aux sons sur les panneaux",
  "grade": "CP",
  "grades": ["CP", "CE1"],
  "subject": "francais",
  "skill": {
    "code": "CP-FR-CGP-ou-on-an",
    "label": "Identifier des mots de manière de plus en plus aisée : connaître les correspondances graphèmes-phonèmes (ou, on, an)"
  },
  "type": ["jeu-de-mots", "sortie"],
  "places": ["voiture", "sortie"],
  "materials": [],
  "materialTags": ["sans-rien"],
  "minutes": 10,
  "multiDay": false,
  "steps": [
    "Choisissez un son du jour : [ou], [on] ou [an].",
    "En voiture ou à pied, cherchez ensemble les mots écrits autour de vous : panneaux, enseignes, affiches.",
    "Quand votre enfant voit le son écrit (ou, on, an, en), il le dit et lit le mot avec votre aide.",
    "Le premier qui trouve 3 mots choisit le son suivant."
  ],
  "easier": "Cherchez seulement la lettre o, puis le son [ou] sur un seul panneau à la fois, arrêté.",
  "harder": "Cherchez les deux façons d'écrire [an] (an, en) et lisez le mot entier sans aide.",
  "lessons": ["fr-cp-ou", "fr-cp-on", "fr-cp-an"],
  "safety": {
    "smallParts": false,
    "adult": "passager",
    "flags": ["voiture"],
    "note": "Le jeu est animé par un passager, jamais par le conducteur."
  },
  "free": true,
  "season": null,
  "childCard": {
    "say": "Ce soir, cherche les sons sur les panneaux avec ta famille !",
    "picture": "atelier/panneaux"
  }
}
```

**Les champs** :

| Champ | Type | Rôle |
|---|---|---|
| `id` | texte | `at-<classe>-<nn>`, stable (sert de clé pour l'historique local). |
| `v` | entier | Version de la fiche, pour corriger un texte sans perdre l'historique. |
| `title` | texte ≤ 40 caractères | Lisible à 3 m sur une carte de la télé. |
| `grade`, `grades` | `TPS`…`CE2` | Classe principale, et classes où la fiche marche aussi. |
| `subject` | `francais`, `maths`, `monde`, `anglais`, `ecriture` | Les identifiants de matières de l'app. |
| `skill.code`, `skill.label` | texte | Code du référentiel interne et formulation du programme. |
| `type`, `places`, `materialTags` | listes de valeurs fermées | Les filtres (1.3). |
| `materials` | liste de textes | Le matériel concret, affiché tel quel. |
| `minutes`, `multiDay` | entier, booléen | Durée, et « sur plusieurs jours » (graine, cristaux de sel). |
| `steps` | 3 à 5 textes | Le déroulé. Contrôlé par un test. |
| `easier`, `harder` | texte | Les deux variantes. |
| `lessons` | identifiants de leçons | Le lien avec l'app ; un test vérifie que chaque identifiant existe dans `PS_CONTENT`. |
| `safety` | objet | `smallParts` (interdit à `true` si `grade` est `TPS`), `adult` (`present`, `cuisine`, `eau`, `passager`), `flags`, `note`. |
| `free` | booléen | Fiche ouverte sans Premium (voir § 5). |
| `season` | `null` ou liste de mois | Pour proposer la graine au printemps, les glaçons l'été. |
| `childCard` | objet | La version enfant (phrase lue par la voix, image), utilisée en fin de séance (§ 2). |

**Ce qui est mémorisé par enfant** (dans `Store`, clé `atelier` de la progression, quelques octets par fiche) :

```json
{ "atelier": { "at-cp-01": { "seen": "2026-11-08", "tried": "2026-11-09", "liked": true, "snoozed": null } } }
```

Il n'y a pas de compteur de fiches faites, pas de date de « retard », pas de pourcentage d'atelier. `tried` sert seulement à **ne pas reproposer** la même idée trop vite, `liked` à reproposer ce qui a plu, `snoozed` à respecter un « Pas ce soir ».

**Tests à ajouter** (dans `tests/content.spec.mjs`, sur le modèle existant) : 84 fiches au moins, 12 par classe ; 3 à 5 étapes ; `easier` et `harder` non vides ; chaque `lessons[]` existe ; aucune fiche TPS avec `smallParts: true` ; toute fiche `places` contenant `bain` ou `cuisine` a `safety.adult` renseigné ; titre de 40 caractères au plus.

### 1.5 Les 84 fiches

*Les compétences reprennent la formulation des attendus et des repères annuels des programmes en vigueur (cycle 1 consolidé, BO n° 41 du 31 octobre 2024 et BO n° 19 du 7 mai 2026 ; cycle 2, programmes de français et de mathématiques de 2024 et programme de questionner le monde et de langues vivantes). Avant publication, chaque formulation est à relire ligne à ligne avec le texte du BO et à coder dans le référentiel interne. Les noms de leçons sont ceux de l'app (identifiant entre parenthèses).*

Légende : ⏱ durée · 📍 lieu · 🧺 matériel · 🔗 leçon de l'app · ⚠ sécurité.

#### Toute petite section (2-3 ans)

*À cet âge, tout se fait avec l'adulte, en 5 à 10 minutes, et on s'arrête dès que l'enfant décroche. Aucun petit objet.*

##### TPS-01 · Le sac à surprises
**Français** · *Langage oral : enrichir son vocabulaire, nommer les objets du quotidien*
⏱ 5 min · 📍 à la maison · 🧺 un sac en tissu, 3 à 5 gros objets familiers (cuillère en bois, chaussette, gobelet, peluche, brosse à cheveux) · 🔗 « Les objets » (`fr-tps-objets`)
1. Mettez 3 objets dans le sac devant votre enfant.
2. Il plonge la main et sort un objet. Nommez-le dans une phrase courte : « C'est une cuillère. On mange avec. »
3. S'il a envie, il répète le mot. Ne le forcez pas : entendre compte autant que dire.
4. À la fin, posez les objets et demandez : « Montre-moi la chaussette. »
- **Plus facile** : 2 objets seulement, laissés visibles ; vous nommez, il désigne.
- **Plus difficile** : il touche l'objet dans le sac sans regarder et devine ce que c'est.

##### TPS-02 · Je lave mon corps
**Français** · *Langage oral : enrichir son vocabulaire (les parties du corps)*
⏱ 5 min · 📍 au bain · 🧺 un gant de toilette, un jouet de bain (poupée, canard) · 🔗 « Mon corps » (`fr-mat-corps`)
1. Pendant le bain, lavez une partie du corps en la nommant : « Je lave ton bras. Et maintenant ton ventre. »
2. Demandez-lui : « Où est ton genou ? » Il le montre ou le lave lui-même.
3. Inversez les rôles : il lave le genou, le pied, la tête de la poupée et vous dit (ou montre) lesquels.
- **Plus facile** : 3 parties seulement (main, pied, ventre), toujours les mêmes.
- **Plus difficile** : le coude, l'épaule, la cheville, le menton.
- ⚠ Restez à côté de lui pendant tout le bain, même un instant. Eau tiède, vérifiée avec le coude.

##### TPS-03 · Qui fait meuh ?
**Français** · *Langage oral : comprendre et utiliser des mots (les animaux et leurs cris)*
⏱ 5 min · 📍 partout · 🧺 des animaux en peluche ou un imagier (livre cartonné) · 🔗 « Les animaux » (`fr-tps-animaux`)
1. Montrez une peluche ou une image : « C'est la vache. Elle fait meuh. »
2. Faites le cri d'un animal ; votre enfant cherche lequel c'est.
3. Inversez : il fait un cri, vous devinez (et vous vous trompez exprès de temps en temps, pour rire).
- **Plus facile** : 2 animaux très différents (vache et chat).
- **Plus difficile** : 5 animaux, et on ajoute « le bébé de la vache, c'est le veau ».

##### TPS-04 · Un pour toi, un pour moi
**Maths** · *Réaliser une collection qui a autant d'objets qu'une autre (correspondance un pour un)*
⏱ 5 min · 📍 à la cuisine · 🧺 2 ou 3 assiettes, autant de peluches, des morceaux de fruit du goûter · 🔗 « Autant » (`ma-tps2-autant`)
1. Installez 2 ou 3 peluches à table, chacune devant une assiette.
2. Votre enfant donne un morceau de fruit à chaque peluche : « Un pour l'ours, un pour le lapin. »
3. Demandez : « Est-ce que tout le monde a un morceau ? » Il vérifie en montrant chaque assiette.
4. Il mange les morceaux à la fin, en les comptant avec vous.
- **Plus facile** : une seule peluche, puis deux.
- **Plus difficile** : 4 peluches, et chacune doit avoir 2 morceaux.
- ⚠ Avant 5 ans, raisins et tomates cerises coupés en quatre dans la longueur ; pas de fruits secs durs.

##### TPS-05 · Les chaussures de toute la famille
**Maths** · *Comparer des objets selon leur taille : grand, petit*
⏱ 5 min · 📍 à la maison · 🧺 les chaussures de l'entrée · 🔗 « Grand ou petit » (`ma-tps-grand`)
1. Posez par terre une chaussure d'adulte et une chaussure de votre enfant.
2. « Laquelle est grande ? Laquelle est petite ? » Il montre, puis essaie de les enfiler (fou rire garanti).
3. Rangez ensemble : les grandes d'un côté, les petites de l'autre.
- **Plus facile** : deux chaussures seulement, très différentes.
- **Plus difficile** : trois tailles (papa, grand frère, bébé) à ranger de la plus grande à la plus petite.

##### TPS-06 · La chasse aux ronds
**Maths** · *Explorer des formes : reconnaître le rond (le disque)*
⏱ 5 min · 📍 à la maison · 🧺 rien (une assiette pour montrer) · 🔗 « Les formes » (`ma-tps-formes`)
1. Montrez une assiette et faites le tour du bord avec son doigt : « C'est rond. »
2. Partez ensemble à la chasse : l'horloge, le couvercle, le ballon, la roue de la poussette.
3. À chaque rond trouvé, il fait le tour du bord avec son doigt.
- **Plus facile** : cherchez seulement parmi 3 objets posés sur la table.
- **Plus difficile** : cherchez aussi des carrés (coussin, carreau, fenêtre) et rangez-les à part.

##### TPS-07 · Qui fait ce bruit ?
**Découvrir le monde** · *Explorer le monde avec ses sens : reconnaître des bruits familiers*
⏱ 5 min · 📍 à la maison · 🧺 objets qui font du bruit (robinet, clés, cuillère dans un bol, porte) · 🔗 « Qui fait ce bruit ? » (`mo-nat-cris`)
1. Votre enfant se cache les yeux (ou se met dos à vous).
2. Faites un bruit : l'eau qui coule, les clés, la cuillère qui tape le bol.
3. Il se retourne et montre ce qui a fait le bruit. Puis c'est lui qui fait le bruit.
- **Plus facile** : il regarde pendant que vous faites le bruit la première fois.
- **Plus difficile** : deux bruits à la suite ; il montre les deux, dans l'ordre.

##### TPS-08 · Ça flotte ou ça coule ?
**Découvrir le monde** · *Explorer la matière : agir sur l'eau, observer ce qui flotte et ce qui coule*
⏱ 10 min · 📍 au bain · 🧺 une éponge, une grosse cuillère en métal, un gobelet, une pomme, un canard en plastique · 🔗 « Ça flotte ou ça coule ? » (`mo-nat-flotte`)
1. Montrez un objet : « À ton avis, il va rester en haut ou aller au fond ? »
2. Il le lâche dans l'eau et regarde.
3. Dites ce qui se passe : « La pomme flotte ! La cuillère coule. »
4. Rangez sur le rebord : ce qui flotte d'un côté, ce qui coule de l'autre.
- **Plus facile** : 2 objets, une éponge et une cuillère.
- **Plus difficile** : remplissez le gobelet d'eau : flotte-t-il encore ?
- ⚠ Restez à côté de lui pendant tout le jeu ; videz la baignoire tout de suite après.

##### TPS-09 · Red, blue, yellow : le tri des chaussettes
**Anglais** · *Éveil à la diversité linguistique : écouter et répéter quelques mots d'une autre langue*
⏱ 5 min · 📍 à la maison · 🧺 des chaussettes rouges, bleues, jaunes (ou des vêtements) · 🔗 « Red, blue, yellow » (`en-pet-col`)
1. Posez les chaussettes en tas. Prenez-en une : « Red ! C'est rouge en anglais. »
2. Faites trois petits tas : red, blue, yellow. Votre enfant pose chaque chaussette sur le bon tas.
3. Dites le mot anglais à chaque fois ; s'il le répète, bravo, sinon ce n'est pas grave.
- **Plus facile** : deux couleurs seulement.
- **Plus difficile** : ajoutez green, et c'est lui qui dit la couleur en anglais.

##### TPS-10 · Hello, cat ! Hello, dog !
**Anglais** · *Éveil à la diversité linguistique : reconnaître quelques mots familiers en anglais*
⏱ 5 min · 📍 partout · 🧺 2 ou 3 peluches (chat, chien, ours) · 🔗 « Animals » (`en-pet-ani`)
1. Cachez une peluche derrière votre dos.
2. Faites-la apparaître : « Hello, cat ! » en lui faisant faire un coucou.
3. Elle repart en disant « Bye-bye ! ». Recommencez avec chaque peluche.
4. Demandez : « Where is the dog ? » Il la montre.
- **Plus facile** : une seule peluche, et seulement « Hello ! » et « Bye-bye ! ».
- **Plus difficile** : 4 peluches cachées sous un torchon ; il soulève et dit le nom anglais.

##### TPS-11 · La peinture à l'eau
**Écriture** · *Agir et s'exprimer : laisser des traces, tracer des lignes*
⏱ 10 min · 📍 dehors · 🧺 un gros pinceau (ou une éponge), un gobelet d'eau, un mur, un trottoir ou une grande planche · 🔗 « Les lignes » (`ec-pet-lignes`)
1. Trempez le pinceau dans l'eau et tracez un grand trait du haut vers le bas sur le mur : il apparaît, puis sèche et disparaît.
2. Votre enfant fait « la pluie » : des traits qui tombent.
3. Puis « la route » : des traits couchés, de gauche à droite.
- **Plus facile** : il peint où il veut ; vous commentez ce que vous voyez.
- **Plus difficile** : vous tracez un trait, il trace le même juste à côté.
- ⚠ Un gobelet plutôt qu'un seau, et vous restez à côté.

##### TPS-12 · Des ronds dans la farine
**Écriture** · *Agir et s'exprimer : tracer des ronds (graphisme)*
⏱ 5 min · 📍 à la cuisine · 🧺 un plateau ou une plaque, une fine couche de farine ou de semoule · 🔗 « Les ronds » (`ec-pet-ronds`)
1. Étalez la farine sur le plateau.
2. Tracez un grand rond avec le doigt : « Je fais le tour, je reviens au début. »
3. Votre enfant fait des ronds à son tour. Secouez le plateau pour tout effacer et recommencer.
- **Plus facile** : il suit votre rond avec son doigt.
- **Plus difficile** : un petit rond dans un grand, ou un bonhomme (un rond, deux yeux).
- ⚠ On ne goûte pas la farine crue.

#### Petite section (3-4 ans)

*Séances de 5 à 15 minutes. Les petits objets deviennent possibles, toujours sous vos yeux et rangés après (pensez aux plus petits de la fratrie).*

##### PS-01 · Le jeu de Kim
**Français** · *Langage oral : nommer des objets, mémoriser des mots*
⏱ 5 min · 📍 à la maison · 🧺 4 objets du quotidien, un torchon · 🔗 « Dans la maison » (`fr-mat-maison`)
1. Posez 3 objets sur la table et nommez-les ensemble.
2. Votre enfant ferme les yeux ; cachez un objet sous le torchon.
3. Il ouvre les yeux : « Qu'est-ce qui a disparu ? »
4. Il cache à son tour, vous devinez.
- **Plus facile** : 2 objets, et vous laissez dépasser un petit bout de l'objet caché.
- **Plus difficile** : 5 objets, ou vous changez leur place au lieu d'en cacher un.

##### PS-02 · Les lettres de mon prénom
**Français** · *Reconnaître les lettres de son prénom (écriture en capitales)*
⏱ 10 min · 📍 à la maison · 🧺 une feuille avec le prénom écrit en grosses capitales, des emballages, prospectus ou magazines · 🔗 « Mon prénom » (`fr-ms-prenom`)
1. Lisez ensemble le prénom en montrant chaque lettre : « L, É, A. »
2. Cherchez ces lettres sur les boîtes de céréales, les prospectus, les magazines.
3. Chaque lettre trouvée, il la pose ou la colle (avec votre aide) sous la même lettre de son prénom.
- **Plus facile** : seulement la première lettre de son prénom.
- **Plus difficile** : les prénoms de toute la famille, et on compare : « Il y a un A chez papa aussi ! »

##### PS-03 · Raconte-moi la photo
**Français** · *Langage oral : raconter, décrire, évoquer un moment vécu*
⏱ 10 min · 📍 partout · 🧺 une photo papier ou sur le téléphone (vacances, anniversaire) · 🔗 —
1. Regardez la photo ensemble sans rien dire quelques secondes.
2. Demandez : « Qu'est-ce qu'on faisait, là ? » Laissez-le parler, même en désordre.
3. Reprenez ses mots en une phrase complète : « Oui, on mangeait une glace sur la plage. »
4. Ajoutez un mot nouveau : « Tu te souviens du parasol ? »
- **Plus facile** : vous racontez et il complète : « Et là, il y avait… »
- **Plus difficile** : deux photos ; il dit laquelle était avant, laquelle après.

##### PS-04 · Les doigts malins
**Maths** · *Quantifier des collections jusqu'à trois : reconnaître une petite quantité d'un coup d'œil*
⏱ 5 min · 📍 partout (aussi en voiture) · 🧺 les mains · 🔗 « Compter jusqu'à 3 » (`ma-tps-c3`)
1. Montrez 2 doigts très vite, puis cachez la main.
2. Votre enfant montre autant de doigts que vous (ou dit « deux »).
3. Recommencez avec 1, 2 ou 3 doigts, de plus en plus vite.
- **Plus facile** : laissez la main visible et comptez ensemble.
- **Plus difficile** : jusqu'à 5, en utilisant les deux mains (3 et 2).

##### PS-05 · Les pinces à linge en musique
**Maths** · *Identifier le principe d'organisation d'une suite (algorithme) et la poursuivre*
⏱ 10 min · 📍 à la maison · 🧺 des pinces à linge de deux couleurs, un carton ou le bord d'une boîte · 🔗 « Les suites » (`ma-tps-suite`)
1. Accrochez sur le bord du carton : rouge, bleu, rouge, bleu.
2. Chantez la suite : « rouge, bleu, rouge, bleu… »
3. Votre enfant continue la suite en chantant avec vous.
- **Plus facile** : il copie votre suite pince par pince, juste en dessous.
- **Plus difficile** : une suite à trois couleurs, ou « rouge, rouge, bleu ».
- ⚠ Pincer muscle les doigts, mais peut pincer : montrez comment tenir la pince par le bout.

##### PS-06 · Les trois ours
**Maths** · *Ranger des objets selon leur taille (petit, moyen, grand)*
⏱ 10 min · 📍 à la cuisine · 🧺 3 bols et 3 cuillères de tailles différentes, 3 peluches · 🔗 « Grand ou petit » (`ma-tps-grand`)
1. Racontez Boucle d'or et les trois ours en quelques phrases.
2. Votre enfant donne le grand bol au grand ours, le moyen au moyen, le petit au petit.
3. Puis les cuillères, puis les « lits » (des serviettes pliées).
- **Plus facile** : seulement grand et petit.
- **Plus difficile** : rangez 4 ou 5 objets du plus petit au plus grand (des boîtes, des chaussures).

##### PS-07 · La petite graine
**Découvrir le monde** · *Reconnaître les étapes du développement d'un végétal ; connaître ses besoins (eau, lumière)*
⏱ 10 min, puis 2 minutes par jour pendant 10 jours · 📍 à la maison · 🧺 du coton, un pot de yaourt, quelques lentilles (ou un haricot sec) · 🔗 « La petite graine » (`mo-nat-graine`)
1. Votre enfant pose le coton au fond du pot, vous lui donnez 3 lentilles qu'il pose dessus.
2. Il arrose un peu (le coton doit être humide, pas noyé). Posez le pot près d'une fenêtre.
3. Chaque matin, regardez ensemble : la graine gonfle, une racine sort, puis une tige, puis des feuilles.
4. Dessinez la plante tous les 3 jours pour voir qu'elle grandit.
- **Plus facile** : vous arrosez ensemble et vous dites simplement « elle a grandi ».
- **Plus difficile** : un deuxième pot dans un placard sombre : que se passe-t-il ?
- ⚠ L'adulte garde le paquet de graines ; les graines crues ne se mangent pas.

##### PS-08 · Je me lave les mains comme un chef
**Découvrir le monde** · *Connaître et appliquer quelques règles d'hygiène du corps*
⏱ 5 min · 📍 à la maison · 🧺 du savon, le minuteur « Sablier » de l'app (30 secondes) · 🔗 « Je suis propre » (`mo-soin-propre`)
1. Lancez le sablier de 30 secondes sur la télé ou le téléphone.
2. Frottez ensemble en chantant : les paumes, le dos des mains, entre les doigts, les pouces, les ongles.
3. Rincez quand le sable est tombé, puis séchez bien.
- **Plus facile** : seulement paumes et dos des mains, en comptant jusqu'à 10.
- **Plus difficile** : il montre les étapes à un doudou, ou à un grand-parent.

##### PS-09 · Simon says
**Anglais** · *Éveil à la diversité linguistique : comprendre et exécuter des consignes simples en anglais*
⏱ 5 min · 📍 à la maison ou dehors · 🧺 rien · 🔗 « Run, swim, dance » (`en-play-move`)
1. Montrez chaque geste en le disant : « Jump ! Clap ! Sit down ! Stand up ! »
2. Donnez une consigne, votre enfant la fait.
3. Accélérez un peu, mélangez, riez.
- **Plus facile** : 2 consignes seulement (jump, clap), toujours montrées.
- **Plus difficile** : vous dites sans montrer ; puis c'est lui qui donne les ordres.

##### PS-10 · One, two, three, l'escalier
**Anglais** · *Éveil à la diversité linguistique : réciter les premiers nombres en anglais*
⏱ 5 min · 📍 dehors ou dans l'escalier · 🧺 un escalier, des marches, un trottoir · 🔗 « One, two, three » (`en-pet-num`)
1. Tenez-lui la main et montez trois marches en comptant en anglais : « One, two, three ! »
2. En haut, une pause et un « Yes ! ».
3. Recommencez, puis comptez en redescendant.
- **Plus facile** : vous comptez, il saute à chaque nombre.
- **Plus difficile** : jusqu'à five, ou il compte tout seul.
- ⚠ Tenez-lui la main dans l'escalier.

##### PS-11 · Les routes des petites voitures
**Écriture** · *Agir et s'exprimer : tracer des lignes droites et des courbes, à des fins expressives*
⏱ 15 min · 📍 à la maison · 🧺 une grande feuille ou un carton déplié, des feutres, 2 petites voitures · 🔗 « Les lignes » (`ec-pet-lignes`)
1. Tracez ensemble une grande route droite d'un bord à l'autre.
2. Votre enfant fait rouler la voiture dessus, puis trace sa propre route.
3. Ajoutez des virages, un rond-point (un rond), un pont.
- **Plus facile** : il suit votre route avec le doigt, puis avec le feutre.
- **Plus difficile** : une route qui fait des vagues ou des boucles, sans sortir des bords.

##### PS-12 · La pâte à modeler maison
**Écriture** · *Agir et s'exprimer : développer la motricité fine, découvrir la forme des lettres*
⏱ 20 min · 📍 à la cuisine · 🧺 1 verre de farine, ½ verre de sel fin, ½ verre d'eau, 1 cuillère d'huile · 🔗 « A, E, I, O, U » (`ec-pet-voy`)
1. Votre enfant verse et mélange les ingrédients avec vous, puis pétrit.
2. Faites des boudins (les serpents) et des boules.
3. Formez avec les boudins un I (un boudin debout) et un O (un boudin qui se referme).
- **Plus facile** : seulement des boudins et des boules.
- **Plus difficile** : le A, le E, ou la première lettre de son prénom.
- ⚠ La pâte est très salée : elle ne se mange pas. L'adulte la range dans une boîte fermée.

#### Moyenne section (4-5 ans)

##### MS-01 · On frappe les syllabes
**Français** · *Manipuler des syllabes : scander et dénombrer les syllabes d'un mot*
⏱ 5 min · 📍 partout (aussi en voiture) · 🧺 les mains · 🔗 « Compter les syllabes » (`fr-mat-syl-compte`)
1. Dites le prénom de votre enfant en frappant dans les mains à chaque syllabe : « Ma-ri-on » (3 frappes).
2. Faites pareil avec les prénoms de toute la famille.
3. « Qui a le prénom le plus long ? » On compte les frappes.
- **Plus facile** : des mots d'une ou deux syllabes (chat, la-pin).
- **Plus difficile** : des mots de 4 syllabes (hé-li-cop-tère, cro-co-dile) ; ou on frappe les syllabes avec les pieds en marchant.

##### MS-02 · Les rimes du dîner
**Français** · *Discriminer des sons : repérer et produire des rimes*
⏱ 5 min · 📍 à la cuisine (à table) · 🧺 rien · 🔗 « Les rimes » (`fr-gs-rimes`)
1. Dites deux mots qui riment : « gâteau, bateau. Ils finissent pareil : -eau. »
2. Proposez un mot ; chacun cherche un mot qui rime, même un mot inventé (« ratateau » compte !).
3. Le mot le plus drôle gagne.
- **Plus facile** : vous donnez deux mots, il dit s'ils riment ou non (bateau, gâteau ; bateau, lapin).
- **Plus difficile** : une petite phrase qui rime : « Le chat a mis son chapeau sur le dos du… chameau. »

##### MS-03 · Les lettres des courses
**Français** · *Reconnaître les lettres de l'alphabet en capitales*
⏱ 15 min · 📍 en sortie (supermarché, marché) · 🧺 rien · 🔗 « M L R S » (`fr-ms-mlrs`)
1. Avant de partir, choisissez une lettre du jour, par exemple M.
2. Dans les rayons, votre enfant cherche des M sur les paquets et les étiquettes.
3. À chaque M trouvé, lisez-lui le mot : « M comme Moutarde ! »
- **Plus facile** : la première lettre de son prénom.
- **Plus difficile** : deux lettres qui se ressemblent (M et N, P et R).

##### MS-04 · La bataille des petits nombres
**Maths** · *Comparer des collections : dire laquelle a le plus d'objets*
⏱ 10 min · 📍 à la maison · 🧺 un jeu de cartes, en ne gardant que les cartes de 1 à 6 · 🔗 « Le plus » (`ma-ms-plus`)
1. Distribuez les cartes, faces cachées, en deux tas.
2. Chacun retourne sa carte. Votre enfant compte les symboles de chaque carte.
3. La carte qui en a le plus gagne les deux. En cas d'égalité : « Bataille ! »
- **Plus facile** : cartes de 1 à 4 seulement ; il pose ses doigts sur chaque symbole pour compter.
- **Plus difficile** : cartes de 1 à 10 ; ou « le moins gagne » pour changer.

##### MS-05 · Le jeu de l'oie maison
**Maths** · *Utiliser le nombre pour exprimer une position sur une piste ; dénombrer en avançant*
⏱ 20 min (10 de fabrication, 10 de jeu) · 📍 à la maison · 🧺 une grande feuille, des feutres, un dé, un pion par joueur (gros bouchons, figurines) · 🔗 « Compter jusqu'à 5 » (`ma-ms-c5`)
1. Dessinez ensemble un chemin de 20 cases qui serpente, avec un départ et une arrivée (un château, une maison).
2. Ajoutez 3 cases spéciales dessinées par votre enfant : un toboggan (on recule de 2), une fusée (on avance de 2).
3. Chacun lance le dé, compte les points, puis avance son pion d'autant de cases en comptant à voix haute.
- **Plus facile** : un dé où vous avez caché les faces 4, 5, 6 avec un autocollant (on joue de 1 à 3).
- **Plus difficile** : un chemin de 30 cases, ou on dit avant d'avancer sur quelle case on va arriver.
- ⚠ Pions, dé et bouchons rangés après le jeu, hors de portée des tout-petits. Le « Dé géant » de l'app peut remplacer le dé.

##### MS-06 · Combien sous le bol ?
**Maths** · *Composer et décomposer des petites quantités (jusqu'à 5)*
⏱ 10 min · 📍 à la cuisine · 🧺 un bol opaque, 5 bouchons de bouteille (ou 5 cuillères) · 🔗 « Un de plus » (`ma-ms2-unplus`)
1. Comptez ensemble 5 bouchons.
2. Votre enfant ferme les yeux ; cachez-en quelques-uns sous le bol.
3. Il ouvre les yeux, compte ceux qui restent et devine combien sont cachés. On soulève le bol pour vérifier.
- **Plus facile** : avec 3 bouchons.
- **Plus difficile** : avec 6 ou 7, ou c'est lui qui cache et vous qui devinez (et parfois vous vous trompez).
- ⚠ Bouchons rangés après le jeu, hors de portée des tout-petits.

##### MS-07 · La promenade des cinq sens
**Découvrir le monde** · *Explorer le monde du vivant : utiliser ses cinq sens pour observer*
⏱ 20 min · 📍 dehors (parc, jardin, rue calme) · 🧺 rien · 🔗 « Mes cinq sens » (`mo-pet-sens`)
1. Annoncez la mission : trouver quelque chose à voir, à entendre, à toucher et à sentir.
2. Arrêtez-vous et fermez les yeux une minute : qu'est-ce qu'on entend ? (un oiseau, une voiture, le vent).
3. Touchez une écorce, une feuille, une pierre : c'est doux, rugueux, froid ?
4. Sentez une fleur, de l'herbe coupée. À la maison, il raconte la promenade.
- **Plus facile** : seulement entendre et toucher.
- **Plus difficile** : il rapporte un petit trésor par sens (une feuille, un caillou) et le décrit avec deux mots.
- ⚠ On ne goûte rien dehors ; on se lave les mains en rentrant.

##### MS-08 · La météo du matin
**Découvrir le monde** · *Observer le temps qu'il fait et en tenir compte (s'habiller) ; repérer les jours*
⏱ 5 min par jour · 📍 à la maison · 🧺 une feuille avec 4 dessins (soleil, nuage, pluie, neige), une pince à linge · 🔗 « Quel temps fait-il ? » (`mo-pet-meteo`)
1. Fabriquez ensemble le tableau météo : votre enfant colorie les 4 dessins.
2. Chaque matin, il regarde par la fenêtre et accroche la pince sur le bon dessin.
3. Demandez : « Alors, qu'est-ce qu'on met ? Un manteau, des bottes, une casquette ? »
- **Plus facile** : soleil ou pluie, seulement.
- **Plus difficile** : il note la météo de chaque jour de la semaine et vous comparez lundi et vendredi.

##### MS-09 · I spy something red
**Anglais** · *Comprendre des mots familiers en anglais (les couleurs)*
⏱ 10 min · 📍 en voiture ou à la maison · 🧺 rien · 🔗 « Colours » (`en-pet-col2`)
1. Dites : « I spy something… red ! » (« Je vois quelque chose de… rouge ! »)
2. Votre enfant cherche autour de lui quelque chose de rouge et le montre ou le nomme.
3. Puis c'est à lui de dire « I spy something… » avec une couleur.
- **Plus facile** : 3 couleurs (red, blue, yellow), et vous montrez la direction.
- **Plus difficile** : ajoutez green, pink, orange, purple, et il dit l'objet en français et la couleur en anglais.
- ⚠ En voiture, c'est un passager qui joue avec lui, pas le conducteur.

##### MS-10 · Happy, sad : les visages
**Anglais** · *Comprendre et réagir à des mots familiers (les émotions)*
⏱ 10 min · 📍 à la maison · 🧺 un miroir, du papier et des crayons · 🔗 « Happy, sad » (`en-play-feel`)
1. Devant le miroir, faites une tête joyeuse : « Happy ! » Puis triste : « Sad ! »
2. Dites un mot, votre enfant fait la tête qui va avec.
3. Dessinez ensemble deux bonshommes, un happy, un sad. Demandez : « Et toi, aujourd'hui ? »
- **Plus facile** : seulement happy et sad.
- **Plus difficile** : ajoutez angry, scared, tired, et il mime pour que vous deviniez.

##### MS-11 · Mon prénom dans le sel
**Écriture** · *Écrire son prénom en capitales d'imprimerie, avec un modèle*
⏱ 10 min · 📍 à la cuisine · 🧺 un plateau, du sel fin ou de la semoule, une étiquette avec le prénom en capitales · 🔗 « Mon prénom » (`ec-ms-prenom`)
1. Posez l'étiquette du prénom au-dessus du plateau.
2. Votre enfant trace la première lettre dans le sel avec son doigt, en regardant le modèle.
3. On secoue, on recommence, puis on ajoute une lettre à chaque fois.
- **Plus facile** : il suit avec son doigt la lettre que vous avez tracée dans le sel.
- **Plus difficile** : tout le prénom, puis celui d'un frère ou d'une sœur.

##### MS-12 · Le chef d'orchestre des traits
**Écriture** · *Reproduire des graphismes : vagues, ponts, ronds, boucles*
⏱ 10 min · 📍 à la maison · 🧺 une musique douce, une grande feuille, des craies grasses (ou le doigt en l'air) · 🔗 « M, N, L, H » (`ec-ms-mnl`)
1. Mettez la musique. Tracez dans l'air de grandes vagues avec le bras, il vous imite.
2. Puis des ponts (comme des petites collines), puis des ronds.
3. Passez sur la feuille : vagues, ponts et ronds au rythme de la musique.
- **Plus facile** : seulement des vagues, en grand, debout.
- **Plus difficile** : une ligne de ponts qui devient un m, une ligne de boucles qui devient un l.

#### Grande section (5-6 ans)

##### GS-01 · Les bras en l'air pour [ch]
**Français** · *Discriminer des sons : repérer un phonème dans un mot*
⏱ 5 min · 📍 partout · 🧺 rien · 🔗 « Les sons [t] [ch] [v] » (`fr-gs-son3`)
1. Faites entendre le son en le tenant longtemps : « chhhhh, comme quand on dit chut ».
2. Dites des mots un par un. Si votre enfant entend [ch], il lève les bras ; sinon, il les croise.
3. Mélangez des mots avec le son au début (chat), au milieu (vache), à la fin (bouche), et des mots sans (lune).
- **Plus facile** : seulement des mots qui commencent par [ch], et des mots très différents.
- **Plus difficile** : il dit où il entend le son : au début, au milieu ou à la fin. Puis on change de son ([v], [f]).

##### GS-02 · Dans ma valise je mets…
**Français** · *Identifier le phonème initial d'un mot*
⏱ 10 min · 📍 en voiture ou à table · 🧺 rien · 🔗 « Ça commence pareil » (`fr-mat-syl-debut`)
1. Choisissez un son : [m]. « Dans ma valise je mets une moto. »
2. Votre enfant répète et ajoute un mot qui commence par [m] : « … une moto et un mouton. »
3. Chacun son tour, la valise se remplit ; on dit toute la liste depuis le début.
- **Plus facile** : la valise ne garde que le dernier mot (pas besoin de tout répéter).
- **Plus difficile** : un son proche ([b] puis [p]) ; ou des mots qui commencent par la même syllabe (ma-).
- ⚠ En voiture, c'est un passager qui anime.

##### GS-03 · Le mot du frigo
**Français** · *Découvrir le principe alphabétique : écrire des mots avec des lettres en s'aidant des sons*
⏱ 10 min · 📍 à la cuisine · 🧺 des lettres aimantées (ou des petits papiers avec une lettre chacun) · 🔗 « La première lettre » (`fr-gs-initiale`)
1. Écrivez son prénom avec les lettres sur le frigo, il le lit.
2. Dites un mot court, très régulier : « moto ». Étirez-le : « mmm-ooo-ttt-ooo ».
3. Il cherche les lettres des sons qu'il entend et les pose. Acceptez une écriture approchée (« mto ») et montrez la bonne à côté, sans dire « c'est faux ».
- **Plus facile** : il trouve seulement la première lettre du mot (m de moto).
- **Plus difficile** : un mot de deux syllabes (lavabo, domino), ou un petit message à la famille.
- ⚠ Lettres aimantées rangées hors de portée des moins de 3 ans.

##### GS-04 · La boîte à dix
**Maths** · *Quantifier des collections jusqu'à dix ; les composer et les décomposer*
⏱ 10 min · 📍 à la cuisine · 🧺 une boîte à œufs de 10 (ou 10 cases dessinées), 10 petits objets (bouchons, pinces) · 🔗 « Combien en manque-t-il ? » (`ma-gs2-manque`)
1. Votre enfant remplit la boîte : une case, un objet.
2. Retirez quelques objets pendant qu'il a les yeux fermés.
3. « Combien en manque-t-il pour remplir la boîte ? » Il regarde les cases vides et répond, puis vérifie.
4. Dites ensemble la décomposition : « 7 et encore 3, ça fait 10. »
- **Plus facile** : une boîte de 6, jusqu'à 6.
- **Plus difficile** : il répond sans regarder les cases, juste en entendant « il en reste 6 ».
- ⚠ Objets rangés après le jeu, hors de portée des tout-petits.

##### GS-05 · Les marches jusqu'à 30
**Maths** · *Dire la suite des nombres jusqu'à 30 ; dénombrer une collection*
⏱ 10 min · 📍 dehors ou en sortie · 🧺 rien · 🔗 « La comptine jusqu'à 30 » (`ma-gs2-comptine`)
1. Sur le chemin de l'école ou du parc, comptez les marches, les arbres, les voitures rouges.
2. Comptez aussi vos pas entre deux lampadaires : « 24 pas ! »
3. Au retour, refaites le même trajet : est-ce qu'on trouve le même nombre ?
- **Plus facile** : jusqu'à 10, en montrant chaque objet du doigt.
- **Plus difficile** : jusqu'à 30, puis vous commencez à 12 et il continue (« 12, 13, 14… »).
- ⚠ On compte sur le trottoir, en tenant la main près de la route.

##### GS-06 · Le robot
**Maths** · *Se repérer dans l'espace : utiliser les mots devant, derrière, à gauche, à droite*
⏱ 10 min · 📍 à la maison · 🧺 un objet à cacher (le « trésor ») · 🔗 « Gauche, droite » (`ma-gs2-gauche`)
1. Vous êtes le robot. Votre enfant vous guide vers le trésor caché : « Avance de 3 pas. Tourne à gauche. »
2. Le robot obéit exactement, même quand c'est faux (et se cogne gentiment au canapé).
3. Inversez : il est le robot, vous le guidez.
- **Plus facile** : un ruban ou un bracelet sur sa main droite comme repère ; seulement « avance » et « tourne ».
- **Plus difficile** : il donne toutes les consignes avant de partir, sans les changer en route.
- ⚠ Espace dégagé, pas d'yeux bandés près d'un escalier.

##### GS-07 · Le memory des bébés animaux
**Découvrir le monde** · *Reconnaître les étapes du développement d'un animal (petit et adulte)*
⏱ 30 min (20 de fabrication, 10 de jeu) · 📍 à la maison · 🧺 du carton (boîte de céréales), des ciseaux à bouts ronds, des crayons · 🔗 « Les bébés animaux » (`mo-gs-bebes`)
1. Découpez 12 cartes de même taille. Sur 6 cartes, dessinez des animaux adultes (poule, vache, grenouille, chat, cheval, mouton).
2. Sur les 6 autres, votre enfant dessine (ou vous dessinez) leurs petits : poussin, veau, têtard, chaton, poulain, agneau.
3. Jouez au memory : une paire, c'est l'adulte avec son petit. On dit les deux noms en retournant.
- **Plus facile** : 3 paires, cartes faces visibles ; il associe.
- **Plus difficile** : ajoutez une troisième carte par animal (l'œuf, le têtard) et trouvez les familles de 3.

##### GS-08 · Au marché : fruit ou légume ?
**Découvrir le monde** · *Connaître quelques aliments et les classer ; observer les saisons*
⏱ 20 min · 📍 en sortie (marché, primeur) · 🧺 un sac de courses · 🔗 « Fruits et légumes » (`mo-gs-fruits`)
1. Au marché, votre enfant nomme 5 fruits et 5 légumes qu'il voit.
2. Il choisit un fruit et un légume de saison pour le repas (demandez au marchand ce qui vient de pousser).
3. À la maison, coupez-les en deux ensemble : où sont les graines ?
- **Plus facile** : il montre les fruits et les légumes que vous nommez.
- **Plus difficile** : il compare les étiquettes de prix ou d'origine (« ça vient d'Espagne »).
- ⚠ Le couteau reste à l'adulte ; il peut couper une banane avec un couteau à bout rond.

##### GS-09 · My family : l'arbre des photos
**Anglais** · *Comprendre des mots familiers ; se présenter et présenter sa famille*
⏱ 15 min · 📍 à la maison · 🧺 des photos de famille (papier ou téléphone), une feuille · 🔗 « My family » (`en-gs-family`)
1. Montrez une photo : « This is mummy. This is daddy. This is grandma. »
2. Votre enfant montre une photo et dit le mot anglais qu'il connaît.
3. Dessinez un arbre ; il colle ou dessine chaque personne en disant « This is my… ».
- **Plus facile** : seulement mummy, daddy, baby.
- **Plus difficile** : brother, sister, grandpa, et une phrase entière : « This is my brother, Léo. »

##### GS-10 · Count to ten, cache-cache
**Anglais** · *Reproduire un modèle oral : compter jusqu'à dix en anglais*
⏱ 15 min · 📍 dehors ou à la maison · 🧺 rien · 🔗 « Count to ten » (`en-fun-count`)
1. Le chercheur ferme les yeux et compte en anglais : « One, two, three… ten ! Ready or not, here I come ! »
2. Les autres se cachent pendant qu'il compte.
3. Celui qui est trouvé compte à son tour.
- **Plus facile** : jusqu'à five, en comptant à deux.
- **Plus difficile** : compter à rebours (« ten, nine, eight… ») ou jusqu'à twenty.
- ⚠ Dehors, fixez avec lui les limites du terrain de jeu.

##### GS-11 · La lettre au facteur
**Écriture** · *Écrire son prénom sans modèle ; produire un écrit en le dictant à l'adulte*
⏱ 20 min · 📍 à la maison · 🧺 une carte ou une feuille, une enveloppe, un timbre · 🔗 « Mon prénom » (`ec-gs-prenom`)
1. Votre enfant dicte un petit message pour un grand-parent ; vous l'écrivez devant lui en disant les mots.
2. Il signe tout seul avec son prénom, et décore la carte.
3. Il recopie l'adresse avec vous, colle le timbre et met la lettre dans la boîte.
- **Plus facile** : il dessine et signe seulement.
- **Plus difficile** : il écrit lui-même un mot du message (« bisous ») en s'aidant des sons.

##### GS-12 · Le chiffre dans le dos
**Écriture** · *Tracer les chiffres en respectant le sens du tracé*
⏱ 5 min · 📍 partout (le soir, au lit) · 🧺 rien · 🔗 « 0 à 9 » (`ec-gs-chiffres`)
1. Votre enfant se met dos à vous. Tracez lentement un grand chiffre dans son dos avec le doigt.
2. Il devine le chiffre.
3. À son tour, il trace un chiffre dans votre dos ; vérifiez qu'il commence au bon endroit (le 1 et le 4 commencent en haut).
- **Plus facile** : seulement 0, 1, 7, et il regarde d'abord le tracé sur une feuille.
- **Plus difficile** : des lettres de son prénom, ou deux chiffres (12, 20).

#### CP (6-7 ans)

##### CP-01 · La chasse aux sons sur les panneaux
**Français** · *Identifier des mots de manière de plus en plus aisée : connaître les correspondances graphèmes-phonèmes (ou, on, an)*
⏱ 10 min · 📍 en voiture ou en sortie · 🧺 rien · 🔗 « Le son [ou] », « Le son [on] », « Le son [an] » (`fr-cp-ou`, `fr-cp-on`, `fr-cp-an`)
1. Choisissez un son du jour : [ou], [on] ou [an].
2. En voiture ou à pied, cherchez ensemble les mots écrits autour de vous : panneaux, enseignes, affiches.
3. Quand votre enfant voit le son écrit (ou, on, an, en), il le dit et lit le mot avec votre aide.
4. Le premier qui trouve 3 mots choisit le son suivant.
- **Plus facile** : cherchez seulement la lettre o, puis le son [ou] sur un seul panneau à la fois, arrêté.
- **Plus difficile** : cherchez les deux façons d'écrire [an] (an, en) et lisez le mot entier sans aide.
- ⚠ Le jeu est animé par un passager, jamais par le conducteur.

##### CP-02 · Le loto des syllabes
**Français** · *Décoder : combiner des lettres pour lire des syllabes, puis des mots*
⏱ 20 min (10 de fabrication) · 📍 à la maison · 🧺 du carton, un feutre · 🔗 « ma, li, ro » (`fr-cp-syl`), « pa, ti, bo, du » (`fr-cp-syl2`)
1. Écrivez des syllabes avec des sons qu'il connaît sur 12 petits cartons : ma, mi, lo, la, ri, ro, pa, pi…
2. Mélangez, faces cachées. Il tire un carton et le lit à voix haute.
3. Bien lu : il le garde. Il peut aussi coller deux cartons pour faire un mot (ma + ri = mari ; pi + la = « pila », un mot qui n'existe pas : on rit).
- **Plus facile** : 6 cartons avec une seule consonne (ma, mi, mo, mu, me, mé).
- **Plus difficile** : des syllabes de 3 lettres (mou, lon, pan), puis des mots de 2 cartons à fabriquer.

##### CP-03 · La liste de courses de l'apprenti lecteur
**Français** · *Écrire des mots en mobilisant les correspondances phonèmes-graphèmes (encodage)*
⏱ 15 min · 📍 à la maison puis en sortie · 🧺 un papier, un crayon · 🔗 « Dictée de mots » (`fr-cp-dict1`)
1. Préparez la liste ensemble : vous dites un mot simple (lait, riz, pomme, pâtes), il l'écrit en s'aidant des sons.
2. Corrigez sans rature : réécrivez le mot juste à côté, en montrant la lettre muette (« lait : le t ne se dit pas »).
3. Au magasin, c'est lui qui lit la liste et coche.
- **Plus facile** : 3 mots très réguliers (riz, lit, moto…), vous dictez lettre à lettre au besoin.
- **Plus difficile** : 6 mots, dont un avec un son complexe (chocolat, oignon, beurre).

##### CP-04 · Je lis, tu lis
**Français** · *Lire à voix haute avec fluidité ; comprendre un texte lu*
⏱ 10 min · 📍 au lit, le soir · 🧺 un album ou un petit livre de son niveau · 🔗 « Lis la phrase » (`fr-cp-phrase1`)
1. Vous lisez une page, il lit une phrase (ou les mots qu'il sait déchiffrer : les mots en gras, les noms des héros).
2. Quand il bute, laissez-lui 5 secondes, puis donnez le premier son (« ch… »), pas le mot.
3. À la fin, une question : « Pourquoi le loup était fâché, à ton avis ? »
- **Plus facile** : il lit seulement un mot qui revient souvent (le nom du personnage), vous montrez du doigt.
- **Plus difficile** : il lit une page entière ; relisez-la deux fois, la deuxième va plus vite (et il le sent).

##### CP-05 · La marchande
**Maths** · *Utiliser la monnaie : payer une somme avec des pièces et des billets ; résoudre des problèmes de prix*
⏱ 20 min · 📍 à la maison · 🧺 des pièces et des billets (vrais ou en papier), des étiquettes, des objets à vendre · 🔗 « Payer juste » (`ma-cp5-payer`)
1. Installez la boutique : des fruits, des jouets, chacun avec une étiquette de prix (1 € à 10 €).
2. Votre enfant est le client : il choisit un objet et paye la somme juste.
3. Échangez les rôles : il est le marchand, il vérifie que vous avez payé juste (vous vous trompez exprès parfois).
- **Plus facile** : seulement des pièces de 1 € et 2 €, prix jusqu'à 5 €.
- **Plus difficile** : il rend la monnaie (« J'ai payé avec un billet de 10 €, ça coûte 7 € »).
- ⚠ Pièces rangées après le jeu, hors de portée des tout-petits.

##### CP-06 · La réussite des 10
**Maths** · *Calculer mentalement : connaître les compléments à 10*
⏱ 10 min · 📍 à la maison · 🧺 un jeu de cartes, avec seulement les cartes de 1 à 9 · 🔗 « Faire 10 » (`ma-cp-compl`)
1. Posez 9 cartes faces visibles en carré.
2. Votre enfant cherche deux cartes qui font 10 ensemble (3 et 7, 4 et 6…). Il les prend et vous remplacez par deux nouvelles cartes.
3. On continue jusqu'à ce que la pioche soit vide. Le 5 va avec un autre 5.
- **Plus facile** : il compte sur ses doigts, ou utilise la « boîte à dix » (GS-04).
- **Plus difficile** : des paires qui font 20 avec les cartes 10, ou trois cartes qui font 10.

##### CP-07 · Les paquets de dix
**Maths** · *Comprendre et utiliser les nombres jusqu'à 100 : dizaines et unités*
⏱ 15 min · 📍 à la maison · 🧺 une grande collection (pinces à linge, pâtes, briques), des verres ou des élastiques · 🔗 « Dizaines et unités » (`ma-cp3-diz`)
1. Versez une grande collection sur la table : « À ton avis, combien il y en a ? » Notez son estimation.
2. Il fait des paquets de 10 (dans des verres, ou avec des élastiques).
3. Comptez ensemble : « 4 paquets de dix, et 7 tout seuls : 47. » Comparez avec l'estimation.
- **Plus facile** : une collection de 20 à 30 objets.
- **Plus difficile** : une collection de plus de 60, et on écrit le nombre ; puis on enlève un paquet : combien maintenant ?
- ⚠ Petits objets rangés après le jeu, hors de portée des tout-petits.

##### CP-08 · Le glaçon qui disparaît
**Découvrir le monde** · *Identifier les trois états de la matière et observer des changements d'état*
⏱ 10 min, puis un regard de temps en temps · 📍 à la cuisine · 🧺 des glaçons, 3 assiettes, un verre d'eau · 🔗 « Solide, liquide, gaz » (`mo-mat-etats`), « L'eau et la matière » (`mo-ce-eau`)
1. Posez un glaçon sur 3 assiettes : une au frigo, une sur la table, une au soleil ou près du radiateur.
2. Votre enfant parie : lequel va fondre en premier ?
3. Regardez toutes les 10 minutes. Le glaçon (solide) devient de l'eau (liquide).
4. Le soir, mettez un verre d'eau au congélateur : le lendemain, c'est un glaçon. L'eau change d'état dans les deux sens.
- **Plus facile** : un seul glaçon, dans la main puis dans l'assiette.
- **Plus difficile** : notez l'heure de départ et l'heure où chaque glaçon a fondu ; laquelle a duré le plus longtemps ?
- ⚠ Le radiateur est chaud : c'est l'adulte qui y pose l'assiette.

##### CP-09 · Le plan de ma chambre
**Découvrir le monde** · *Se repérer dans l'espace : lire et produire un plan simple*
⏱ 20 min · 📍 à la maison · 🧺 une feuille, des crayons, un petit trésor · 🔗 « Dans ma ville » (`mo-rep-ville`)
1. Expliquez : « Un plan, c'est la chambre vue d'en haut, comme un oiseau au plafond. »
2. Dessinez ensemble la forme de la chambre (un rectangle), puis le lit, la porte, la fenêtre, l'armoire.
3. Cachez un trésor et marquez une croix sur le plan. Il le cherche en lisant le plan.
4. Puis c'est lui qui cache et dessine la croix.
- **Plus facile** : vous dessinez le plan ; il pose seulement des objets (une gomme pour le lit) sur le papier.
- **Plus difficile** : le plan du salon ou de la rue, avec une flèche « Nord » et un chemin à suivre.

##### CP-10 · I like, I don't like
**Anglais** · *S'exprimer oralement : dire ce qu'on aime avec des phrases simples*
⏱ 10 min · 📍 à la cuisine (à table) · 🧺 rien · 🔗 « I like… » (`en-fun-like`)
1. Pendant le repas, montrez un aliment : « I like carrots ! » avec un grand sourire. « I don't like… broccoli ! » avec une grimace.
2. Chacun son tour, on dit ce qu'on aime ou pas dans l'assiette.
3. Devinette : vous dites « I like… », il devine l'aliment.
- **Plus facile** : seulement « Yes ! » ou « No ! » à la question « Do you like apples ? »
- **Plus difficile** : « I like apples but I don't like bananas. »

##### CP-11 · Le mot du jour au tableau
**Écriture** · *Copier de manière experte : copier un mot en cursive en respectant la forme et les liaisons des lettres*
⏱ 5 min par jour · 📍 à la cuisine · 🧺 une ardoise ou un tableau effaçable, un feutre · 🔗 « a, o, c, e » (`ec-cp-ronds`)
1. Chaque matin, écrivez en cursive un mot court qu'il sait lire (« école », « soleil »).
2. Le soir, il le copie en dessous, en regardant le modèle lettre par lettre.
3. Il entoure la lettre qu'il trouve la plus belle.
- **Plus facile** : des mots faits seulement de lettres rondes (« coco », « cacao »).
- **Plus difficile** : une petite phrase de 3 ou 4 mots, ou il écrit le mot de mémoire après l'avoir regardé.

##### CP-12 · Les boucles dans la mousse
**Écriture** · *Maîtriser les gestes de l'écriture cursive : les lettres à boucle*
⏱ 10 min · 📍 au bain ou à la cuisine · 🧺 un plateau et de la mousse (savon moussant) ou de la farine · 🔗 « l, b, h, k » (`ec-cp-boucles`)
1. Étalez la mousse sur le plateau (ou sur le carrelage du bain).
2. Tracez une grande boucle du l en disant : « Je monte, je redescends, je reviens. »
3. Votre enfant fait une ligne de boucles, puis l, b, h.
- **Plus facile** : des boucles en grand, avec tout le bras.
- **Plus difficile** : un mot avec des boucles (« belle », « bulle ») sans lever le doigt.
- ⚠ Au bain, vous restez à côté ; la mousse ne va pas dans les yeux.

#### CE1 (7-8 ans)

##### CE1-01 · Le petit bac
**Français** · *Enrichir son vocabulaire ; mémoriser l'orthographe de mots fréquents*
⏱ 15 min · 📍 à la maison ou en voiture (à l'oral) · 🧺 une feuille, des crayons · 🔗 « L'ordre alphabétique » (`fr-ce-alpha`)
1. Tracez 4 colonnes : un animal, un prénom, un fruit ou un légume, un objet.
2. Tirez une lettre (un joueur récite l'alphabet dans sa tête, un autre dit « stop »).
3. Chacun cherche un mot par colonne qui commence par cette lettre. On compare, on vérifie l'orthographe ensemble au dictionnaire si on hésite.
- **Plus facile** : 2 colonnes, et le droit d'écrire le mot comme on l'entend.
- **Plus difficile** : 6 colonnes (un métier, un pays, un verbe), et un sablier de 2 minutes (outil « Sablier »).

##### CE1-02 · Et ou est ? Le jeu des cartons
**Français** · *Distinguer des homophones grammaticaux : et / est, a / à*
⏱ 10 min · 📍 à la maison · 🧺 deux cartons, l'un marqué « et », l'autre « est » · 🔗 « et ou est ? » (`fr-ce-etest`), « a ou à ? » (`fr-ce-aa`)
1. Rappelez l'astuce : « est » se remplace par « était » ; « et » se remplace par « et puis ».
2. Dites une phrase : « Le chat … noir. » Votre enfant lève le bon carton et dit l'astuce à voix haute.
3. Après 5 phrases, c'est lui qui invente une phrase pour vous piéger.
- **Plus facile** : des phrases très courtes, et il essaie les deux astuces à voix haute à chaque fois.
- **Plus difficile** : mélangez « a / à » avec deux autres cartons (« a » se remplace par « avait »).

##### CE1-03 · L'histoire pliée
**Français** · *Identifier les principaux constituants d'une phrase (nom, verbe, adjectif) ; écrire des phrases*
⏱ 15 min · 📍 à la maison · 🧺 une feuille par joueur, des crayons · 🔗 « Nom, verbe, adjectif » (`fr-ce-nature`)
1. Le premier écrit en haut un nom avec son déterminant (« Un dragon »), plie la feuille pour le cacher et la passe.
2. Le suivant écrit un adjectif (« minuscule »), plie et passe ; puis un verbe (« mange »), puis un complément (« dans la baignoire »).
3. On déplie et on lit la phrase à voix haute : fou rire assuré. On vérifie les accords ensemble.
- **Plus facile** : seulement nom et verbe, et vous aidez à écrire.
- **Plus difficile** : ajoutez un deuxième adjectif ou un « quand » (« hier soir »), et accordez au pluriel.

##### CE1-04 · La chasse au trésor à indices
**Français** · *Comprendre un texte et contrôler sa compréhension : repérer des indices, faire des inférences*
⏱ 30 min (15 de préparation) · 📍 à la maison ou au jardin · 🧺 des petits papiers, un trésor (un dessert, un livre, un jeu) · 🔗 « Chercher les indices » (`fr-ce-indices`)
1. Écrivez 5 indices en devinette, chacun menant au suivant : « Je suis froid, je garde le lait au frais. » (le frigo).
2. Votre enfant lit l'indice à voix haute, trouve l'endroit et y découvre l'indice suivant.
3. Le dernier mène au trésor. La fois suivante, c'est lui qui écrit les indices pour vous.
- **Plus facile** : des indices directs (« Va regarder sous ton oreiller »), avec un dessin.
- **Plus difficile** : des indices en deux étapes (« Je suis dans la pièce où l'on dort, sous ce qui a quatre pieds »).

##### CE1-05 · Le gâteau au yaourt
**Maths** · *Comparer et mesurer des masses et des contenances ; utiliser les unités (g, kg, L)*
⏱ 45 min (cuisson comprise) · 📍 à la cuisine · 🧺 un pot de yaourt, 3 œufs, farine, sucre, huile, levure, une balance · 🔗 « Quelle unité ? » (`ma-ce1e-unites`)
1. Le pot de yaourt est l'unité : 1 pot de yaourt, 2 pots de sucre, 3 pots de farine, ½ pot d'huile, 3 œufs, 1 sachet de levure.
2. Votre enfant mesure avec le pot, puis pèse les 3 pots de farine sur la balance : « Combien de grammes ? »
3. Il compare : « Un pot de farine pèse-t-il autant qu'un pot de sucre ? » (non !)
4. L'adulte enfourne (30 min à 180 °C) ; lancez le minuteur « Aquarium » ou « Arc-en-ciel » de 30 minutes.
- **Plus facile** : seulement mesurer avec le pot, sans balance.
- **Plus difficile** : faites un gâteau et demi : combien de pots de chaque ingrédient ?
- ⚠ Le four et le moule chaud restent à l'adulte. Pas de pâte crue à goûter. Pensez aux allergies (œufs, gluten).

##### CE1-06 · Les chaussettes de 2 en 2
**Maths** · *Calculer mentalement : compter de 2 en 2 et de 5 en 5 ; mémoriser les tables de 2 et 5*
⏱ 10 min · 📍 à la maison · 🧺 le panier de linge propre · 🔗 « Tables de 2 et 5 » (`ma-ce1-t2`)
1. Votre enfant fait les paires de chaussettes.
2. Il compte les chaussettes de 2 en 2 : « 2, 4, 6, 8… 7 paires, c'est 14 chaussettes. »
3. Puis les doigts de la famille de 5 en 5 : « 4 mains, ça fait 20 doigts. »
- **Plus facile** : il compte d'abord une par une, puis de 2 en 2 avec vous.
- **Plus difficile** : les paires de chaussures de toute la maison, et il écrit la multiplication (9 × 2 = 18).

##### CE1-07 · L'horloge en carton
**Maths** · *Lire l'heure sur une horloge à aiguilles (heures et demi-heures)*
⏱ 20 min · 📍 à la maison · 🧺 une assiette en carton, deux aiguilles en carton, une attache parisienne · 🔗 « Les heures » (`ma-ce-heure`), « Et demie » (`ma-ce-demi`)
1. Fabriquez l'horloge : écrivez les nombres de 1 à 12, fixez la grande et la petite aiguille au centre.
2. Annoncez les heures de la journée : « On dîne à 7 heures. » Votre enfant place les aiguilles.
3. Comparez avec la vraie horloge de la maison au moment du dîner.
- **Plus facile** : seulement les heures « pile ».
- **Plus difficile** : et quart, moins le quart ; ou « dans une demi-heure, quelle heure sera-t-il ? »
- ⚠ L'attache parisienne est petite : rangée hors de portée des tout-petits.

##### CE1-08 · Le partage de la crêpe
**Maths** · *Comprendre et utiliser des fractions simples (un demi, un tiers, un quart) dans des situations de partage*
⏱ 30 min · 📍 à la cuisine · 🧺 des crêpes (ou une pizza, une tarte), un couteau à bout rond · 🔗 « Moitié, tiers, quart » (`ma-ce1d-frac`)
1. Pliez une crêpe en deux : « Chaque morceau, c'est la moitié, un demi. »
2. Repliez : « Maintenant, 4 morceaux pareils : chacun est un quart. »
3. Votre enfant partage une crêpe pour 3 personnes ; on vérifie que les morceaux sont égaux.
4. Question : « Tu préfères un demi ou un quart de crêpe ? » (et pourquoi).
- **Plus facile** : seulement la moitié, avec une pomme ou une banane coupée en deux.
- **Plus difficile** : « 2 crêpes pour 4 personnes : combien chacun ? » ; écrire ½ et ¼.
- ⚠ La poêle et la plaque restent à l'adulte.

##### CE1-09 · L'aimant détective
**Découvrir le monde** · *Identifier des propriétés de la matière : reconnaître les objets attirés par un aimant*
⏱ 15 min · 📍 à la maison · 🧺 un gros aimant de frigo, 10 objets (cuillère, clé, crayon, trombone, bouchon, pièce, papier d'aluminium) · 🔗 « L'aimant » (`mo-mat-aimant`)
1. Votre enfant parie pour chaque objet : « attiré » ou « pas attiré ».
2. Il teste avec l'aimant et range les objets en deux tas.
3. Comparez avec les paris : « Tous les métaux sont-ils attirés ? » (non : l'aluminium et certaines pièces ne le sont pas).
- **Plus facile** : 5 objets très différents (cuillère en métal, crayon, clé, papier, bouchon).
- **Plus difficile** : l'aimant attire-t-il à travers une feuille, une main, un carton ? Combien de trombones fait-il tenir en chaîne ?
- ⚠ Uniquement un gros aimant de frigo, jamais de petits aimants puissants ; trombones et pièces rangés après.

##### CE1-10 · La frise de ma vie
**Découvrir le monde** · *Se repérer dans le temps : situer des événements les uns par rapport aux autres sur une frise*
⏱ 30 min · 📍 à la maison · 🧺 une longue bande de papier, des photos (ou des dessins), de la colle · 🔗 « La frise du temps » (`mo-tm-frise`)
1. Tracez une ligne et marquez une case par année, de sa naissance à aujourd'hui.
2. Choisissez ensemble une photo ou un souvenir par année : bébé, premiers pas, entrée à l'école, CP.
3. Il colle chaque photo à la bonne année et raconte.
- **Plus facile** : 3 photos seulement (bébé, petit, maintenant) à remettre dans l'ordre.
- **Plus difficile** : ajoutez la naissance d'un parent ou d'un grand-parent ; il faut agrandir la frise !

##### CE1-11 · Le présentateur météo
**Anglais** · *S'exprimer oralement en continu : décrire la météo avec des phrases apprises*
⏱ 10 min · 📍 à la maison · 🧺 une carte de France dessinée, des soleils et des nuages en papier · 🔗 « What's the weather like? » (`en-day-weather`)
1. Rappelez les phrases : « It's sunny. It's rainy. It's cloudy. It's windy. It's snowy. »
2. Votre enfant regarde par la fenêtre et présente la météo du jour à la famille, comme à la télé.
3. Il colle des soleils et des nuages sur la carte et présente « la météo de demain ».
- **Plus facile** : une seule phrase, montrée avec un geste.
- **Plus difficile** : « Today it's sunny, but tomorrow it will be rainy. Take your umbrella ! »

##### CE1-12 · La carte postale
**Écriture** · *Écrire en cursive de façon lisible ; copier et produire un écrit court*
⏱ 20 min · 📍 à la maison · 🧺 une carte postale (ou une carte dessinée), un stylo, un timbre · 🔗 « Petits mots » (`ec-ce-mots1`)
1. Votre enfant écrit 3 phrases à quelqu'un qu'il aime : ce qu'il a fait, ce qu'il a aimé, un bisou.
2. Il se relit avec vous : une majuscule au début, un point à la fin, les mots bien séparés.
3. Il recopie l'adresse en respectant les lignes, colle le timbre et poste.
- **Plus facile** : il copie une phrase que vous avez écrite et ajoute sa signature.
- **Plus difficile** : 5 phrases, dont une question (« Tu viens à mon anniversaire ? »).

#### CE2 (8-9 ans)

##### CE2-01 · Le dico-défi
**Français** · *Utiliser l'ordre alphabétique pour chercher un mot dans le dictionnaire*
⏱ 10 min · 📍 à la maison · 🧺 un dictionnaire papier · 🔗 « L'ordre alphabétique » (`fr-ce-alpha`)
1. Dites un mot (« girafe »). Votre enfant le cherche dans le dictionnaire ; lancez le sablier de 1 minute.
2. Il lit la définition à voix haute.
3. Puis il choisit un mot pour vous ; vous le cherchez avec le même sablier.
- **Plus facile** : il cherche seulement la bonne lettre, puis la page avec votre aide.
- **Plus difficile** : deux mots qui commencent pareil (« lapin », « lampe ») : lequel vient avant ?

##### CE2-02 · La balle des verbes
**Français** · *Conjuguer au présent, au futur et à l'imparfait les verbes fréquents*
⏱ 10 min · 📍 dehors ou à la maison · 🧺 une balle en mousse (ou une chaussette roulée) · 🔗 « Passé, présent, futur » (`fr-ce-quand`), « Être et avoir » (`fr-ce-etreavoir`)
1. Lancez la balle en disant un pronom, un verbe et un temps : « Nous, manger, futur ! »
2. Votre enfant attrape et répond : « Nous mangerons ! » puis relance avec un autre défi.
3. Une erreur ? On dit la bonne forme ensemble et on continue.
- **Plus facile** : seulement le présent, avec être, avoir et des verbes en -er.
- **Plus difficile** : l'imparfait et le passé composé, ou des verbes comme aller, faire, venir.
- ⚠ Balle en mousse, pas de ballon de baudruche.

##### CE2-03 · Le mot interdit
**Français** · *Enrichir son vocabulaire : définir un mot, trouver des synonymes*
⏱ 15 min · 📍 partout (aussi en voiture) · 🧺 des petits papiers avec des mots · 🔗 « Les synonymes » (`fr-ce-synonymes`)
1. Chacun écrit 5 mots sur des papiers (vélo, cuisine, neige, joyeux…).
2. On tire un papier et on fait deviner le mot sans le dire, ni dire un mot de la même famille.
3. On peut utiliser un synonyme (« content » pour « joyeux »), une définition, un contraire.
- **Plus facile** : on a le droit de mimer.
- **Plus difficile** : deux mots interdits en plus par carte (pour « vélo » : roue, pédaler).

##### CE2-04 · Le reporter du week-end
**Français** · *Écrire un texte court cohérent, organisé et ponctué ; relire pour accorder le verbe et son sujet*
⏱ 30 min · 📍 à la maison · 🧺 une feuille, un stylo, une photo ou un dessin · 🔗 « Le verbe et son sujet » (`fr-ce-accord`)
1. Votre enfant choisit un moment du week-end (la piscine, un repas chez mamie).
2. Il répond par écrit à 4 questions : qui ? où ? qu'est-ce qui s'est passé ? qu'est-ce que j'en pense ?
3. Il relit avec un « crayon détective » : chaque verbe, il cherche son sujet et vérifie l'accord.
4. Il ajoute un titre et un dessin, et lit son article à la famille.
- **Plus facile** : 3 phrases, une par question, vous l'aidez à les dire à l'oral d'abord.
- **Plus difficile** : un vrai petit journal de famille avec deux articles et une « une ».

##### CE2-05 · Le périmètre de la chambre
**Maths** · *Mesurer des longueurs ; calculer le périmètre d'un polygone*
⏱ 20 min · 📍 à la maison · 🧺 un mètre ruban (ou un mètre de couturière), une feuille · 🔗 « Le périmètre » (`ma-ce2d-perim`)
1. Votre enfant estime : « Combien de mètres pour faire le tour de ton tapis ? »
2. Il mesure chaque côté et note les longueurs en centimètres.
3. Il additionne : c'est le périmètre. Il compare avec son estimation.
4. Même chose pour le lit, la table, la chambre entière.
- **Plus facile** : un livre ou une boîte, avec une règle.
- **Plus difficile** : « Combien de guirlande faut-il pour faire le tour de la fenêtre ? » ; convertissez en mètres et centimètres.

##### CE2-06 · Les courses avec un budget
**Maths** · *Résoudre des problèmes impliquant des prix ; calculer avec des euros et des centimes*
⏱ 30 min · 📍 en sortie (boulangerie, supermarché) · 🧺 un billet de 10 € ou un budget annoncé, une liste · 🔗 « Euros et centimes » (`ma-ce2d-cents`)
1. Annoncez : « Tu as 10 € pour le goûter de 4 personnes. »
2. Au magasin, votre enfant lit les prix et calcule de tête (ou sur un papier) au fur et à mesure.
3. Avant la caisse, il dit combien il va rester. À la caisse, on vérifie avec le ticket.
- **Plus facile** : 5 €, des prix ronds, et il peut arrondir (« 1,95 €, c'est presque 2 € »).
- **Plus difficile** : il compare les prix au kilo de deux paquets pour choisir le moins cher.

##### CE2-07 · Les plaques d'immatriculation
**Maths** · *Calculer mentalement : mobiliser les tables de multiplication et les faits numériques*
⏱ 10 min · 📍 en voiture (passager) · 🧺 rien · 🔗 « Tables de 6 à 9 » (`ma-ce2-t69`)
1. Choisissez une plaque devant vous : AB-372-CD.
2. Votre enfant additionne les chiffres (3 + 7 + 2 = 12), puis multiplie les deux derniers (7 × 2 = 14).
3. Défi : avec les 3 chiffres et les signes + et ×, qui trouve le plus grand nombre ? (37 × 2 = 74 !)
- **Plus facile** : seulement additionner les deux premiers chiffres.
- **Plus difficile** : trouver exactement 24 avec les 3 chiffres et +, −, ×.
- ⚠ C'est un passager qui joue avec lui, pas le conducteur.

##### CE2-08 · Le chef pâtissier et les durées
**Maths** · *Calculer des durées ; lire l'heure*
⏱ 1 h (avec cuisson) · 📍 à la cuisine · 🧺 une recette simple (cookies, gâteau), une horloge, le minuteur de l'app · 🔗 « Les durées » (`ma-ce2d-duree`)
1. Lisez la recette : « 15 min de préparation, 25 min de cuisson, 10 min de refroidissement. »
2. Votre enfant calcule : « Si on commence à 16 h 10, à quelle heure on mange ? »
3. Il note les heures de début et de fin de chaque étape ; lancez le minuteur de cuisson sur la télé.
4. À la fin, il vérifie : son calcul était-il juste ?
- **Plus facile** : une seule durée (la cuisson), avec un minuteur qui montre les minutes.
- **Plus difficile** : la recette doublée ne cuit pas deux fois plus longtemps : discutez pourquoi ; ou calculez la durée totale en heures et minutes.
- ⚠ Four, plaques et moule chaud restent à l'adulte ; pensez aux allergies.

##### CE2-09 · Le marais salant de la cuisine
**Découvrir le monde** · *Identifier les états de la matière et observer des changements d'état (évaporation) ; observer des mélanges*
⏱ 15 min, puis quelques jours · 📍 à la cuisine · 🧺 un verre d'eau tiède, 3 cuillères de sel, une assiette sombre, une loupe si vous en avez · 🔗 « Solide, liquide, gaz » (`mo-mat-etats`)
1. Votre enfant dissout le sel dans l'eau en tournant : « Où est passé le sel ? » (il est toujours là : goûtez une goutte).
2. Versez un peu d'eau salée dans l'assiette, posez-la près d'une fenêtre.
3. Chaque jour, observez : l'eau s'évapore (elle devient un gaz invisible), des cristaux de sel apparaissent.
4. Il dessine les cristaux à la loupe et explique comment on fait le sel dans les marais salants.
- **Plus facile** : faites l'expérience en un après-midi, sur un radiateur (l'adulte y pose l'assiette).
- **Plus difficile** : même expérience avec de l'eau sucrée : obtient-on la même chose ?

##### CE2-10 · Les détectives de l'électricité
**Découvrir le monde** · *Identifier les appareils qui fonctionnent à l'électricité ; connaître les dangers de l'électricité*
⏱ 20 min · 📍 à la maison · 🧺 une feuille en deux colonnes, un crayon · 🔗 « L'électricité » (`mo-mat-elec`)
1. Faites le tour de la maison : votre enfant liste les appareils qui marchent sur une prise (secteur) et ceux qui marchent à pile ou batterie.
2. Pour chaque pièce, il repère les règles de sécurité : on ne touche pas une prise avec les doigts ou un objet, jamais d'appareil électrique près de l'eau, on débranche en tirant la fiche, pas le fil.
3. Il dessine une affiche « Les 5 règles de l'électricité » pour la cuisine.
- **Plus facile** : seulement les appareils de la cuisine, et 2 règles.
- **Plus difficile** : regardez l'intérieur d'une lampe de poche avec l'adulte : pile, interrupteur, ampoule : le circuit doit être fermé pour que ça s'allume.
- ⚠ On observe, on ne démonte rien de branché ; la lampe de poche s'ouvre avec l'adulte, jamais les piles bouton.

##### CE2-11 · L'interview
**Anglais** · *Prendre part à une conversation : poser des questions simples et y répondre*
⏱ 15 min · 📍 partout · 🧺 une cuillère en guise de micro, une feuille de questions · 🔗 « Questions and answers » (`en-talk-qa`)
1. Préparez ensemble 5 questions : « What's your name? How old are you? What's your favourite colour? Do you like pizza? Can you swim? »
2. Votre enfant joue le journaliste et interviewe un parent, qui répond en anglais.
3. Échangez les rôles ; puis interviewez ensemble un grand-parent au téléphone.
- **Plus facile** : 3 questions, et le droit de répondre par un seul mot.
- **Plus difficile** : il note les réponses et présente la personne : « This is Marc. He is 40. He likes pizza. »

##### CE2-12 · La recette illustrée
**Écriture** · *Écrire lisiblement un texte court en respectant la mise en page (titre, liste, étapes)*
⏱ 30 min · 📍 à la cuisine · 🧺 une feuille, des crayons · 🔗 « À la maison » (`ec-ce-mots3`)
1. Après avoir cuisiné ensemble (CE1-05 ou CE2-08), votre enfant écrit la recette : un titre, la liste des ingrédients, les étapes numérotées.
2. Les verbes des étapes sont à l'infinitif : « Mélanger la farine et le sucre. »
3. Il illustre chaque étape d'un petit dessin et range la fiche dans le « livre de recettes de la famille ».
- **Plus facile** : il copie la liste des ingrédients et dessine les étapes.
- **Plus difficile** : une deuxième recette inventée (un goûter « de son invention »), écrite pour qu'un autre puisse la faire sans aide.

---

## 2. Le lien avec les leçons : la bonne idée au bon moment

### 2.1 Trois moments, pas plus

| Moment | Où | Pour qui | Ce qu'on montre |
|---|---|---|---|
| **Fin de séance** (après la dernière leçon du jour, dans le rituel du coucher de l'étude 03, § 6.4) | Écran enfant, sur la télé | L'enfant, lu par la voix du compagnon | **Une** carte illustrée : « Ce soir, joue à la valise des sons avec ta famille ! » Pas de bouton, pas de lien vers l'espace parents, pas de « demande à tes parents » insistant : une simple invitation, une fois par jour au maximum, uniquement une fiche marquée `childCard`, jamais une fiche de cuisine ou d'eau (l'enfant ne doit pas croire qu'il peut la faire seul). Le parent peut couper cette carte dans les réglages. |
| **« Idée du soir »** | Rapport de l'enfant dans l'espace parents (remplace la phrase `EVENING` actuelle), et page téléphone | Le parent | Une carte : titre, durée, lieu, matériel, et un bouton « Voir l'idée » qui ouvre la fiche. Deux boutons discrets : « Une autre idée » et « Pas ce soir ». |
| **« À revoir »** | Même rapport, dans le bloc existant « À revoir : … » | Le parent | À côté de chaque leçon à revoir (une seule étoile), une icône « idée » s'il existe une fiche liée : « Le son [ou] · une idée pour jouer avec ». |

C'est volontairement peu. L'étude 03 a posé la règle : aucune notification à l'enfant, aucune promotion cachée dans un bilan, rien qui culpabilise. L'atelier suit la même règle.

### 2.2 Comment choisir l'idée du soir

Le choix se fait **sur la télé, sans serveur**, à partir de ce que `Store` sait déjà (leçons faites et étoiles par leçon, statistiques par matière, jours joués) et de l'historique local de l'atelier.

1. **Candidates** : les fiches de la classe de l'enfant (et de la classe d'avant, pour consolider), dans ses matières activées, ouvertes avec son abonnement (gratuites, ou toutes avec Premium).
2. **Écarter** : les fiches essayées depuis moins de 21 jours, celles mises en « Pas ce soir » depuis moins de 7 jours, celles hors saison (graine en hiver, glaçons fin décembre : c'est permis, mais moins prioritaire).
3. **Donner un score** à chaque candidate :
   - +5 si elle est liée à une leçon **à revoir** (une étoile) ;
   - +4 si elle est liée à une leçon **faite aujourd'hui ou hier** (prolonger ce qui vient d'être appris, c'est le meilleur moment) ;
   - +3 si elle est dans la matière **la moins réussie** (même calcul que `adviceFor` aujourd'hui : taux de réussite du premier coup le plus bas, sur 5 questions au moins) ;
   - +2 si elle est liée à une leçon **réussie il y a 7 à 21 jours** (une révision espacée, sans écran) ;
   - +2 si `liked` est vrai pour une fiche voisine (même type, même lieu) : on repropose ce qui plaît ;
   - +1 si sa durée est de 10 minutes ou moins un soir de semaine, ou de plus de 15 minutes le mercredi et le week-end ;
   - un petit tirage au sort (0 à 1) pour varier.
4. **Prendre la meilleure**, la garder pour toute la journée (la même idée au matin et au soir : pas de roulette), et la changer seulement si le parent demande « Une autre idée ».

Pseudo-code, dans l'esprit de `parent.js` :

```js
function eveningIdea(child, progress, history, today) {
  var pool = Atelier.forChild(child).filter(function (f) {
    var h = history[f.id] || {};
    return !(h.tried && days(h.tried, today) < 21) && !(h.snoozed && days(h.snoozed, today) < 7);
  });
  pool.forEach(function (f) {
    f.score = Math.random();
    f.lessons.forEach(function (id) {
      var stars = progress.done[id], when = progress.when && progress.when[id];
      if (stars === 1) f.score += 5;
      else if (when && days(when, today) <= 1) f.score += 4;
      else if (stars && when && days(when, today) >= 7 && days(when, today) <= 21) f.score += 2;
    });
    if (f.subject === weakestSubject(child, progress)) f.score += 3;
    if (fitsTonight(f, today)) f.score += 1;
  });
  return pool.sort(function (a, b) { return b.score - a.score; })[0] || null;
}
```

*Note technique : `progress.done[id]` donne les étoiles d'une leçon ; la date où elle a été faite (`progress.when`) n'existe pas encore et serait à ajouter dans `Store` (une date par leçon). Sans elle, on garde les règles « à revoir » et « matière la moins réussie », qui marchent déjà.*

**Sans aucune leçon faite** (nouvel enfant, ou matières toutes coupées) : une fiche gratuite de sa classe, de 5 minutes, tirée au sort. L'atelier marche même sans écran.

### 2.3 Les mots pour le dire (sans culpabiliser)

| On écrit | On n'écrit jamais |
|---|---|
| « Une idée pour ce soir, si vous avez 10 minutes » | « Votre enfant a besoin de travailler… » |
| « Léa a vu le son [ou] aujourd'hui. Pour le retrouver en jouant : la chasse aux sons sur les panneaux. » | « Léa a des difficultés en français. » |
| « Une autre idée » · « Pas ce soir » · « On l'a fait ! » | « Vous n'avez fait aucune activité cette semaine » |
| « Ça lui a plu ? 👍 / Bof » (facultatif, une seule fois) | Un compteur, une série, un pourcentage d'activités faites |
| « Le son [ou] mérite un petit tour de plus : voici un jeu pour le retrouver. » | « Leçon ratée », « en retard », « à rattraper » |

**« On l'a fait ! »** ne donne ni étoile ni badge à l'enfant : le plaisir du moment partagé suffit, et on ne veut pas que l'enfant réclame qu'on coche pour gagner quelque chose. La seule trace visible est, si le parent le souhaite, une petite ligne dans le **carnet des fiertés** (§ 3.9) : « Mardi, on a joué à la valise des sons. »

### 2.4 Sur le téléphone

Le parent lit une fiche bien plus volontiers sur son téléphone, dans la cuisine ou en voiture, que sur la télé. Deux chemins, déjà dans l'esprit de l'app (« aucune donnée collectée ») :

- **Téléphone connecté** (lien Wi-Fi existant, `link.js`) : le bouton « Voir l'idée » ouvre la fiche sur le téléphone, mise en page pour un petit écran, avec les étapes à cocher.
- **Sans téléphone connecté** : un QR code affiche la fiche sur une page statique du site ; le contenu de la fiche est encodé dans le **fragment de l'URL** (`#…`), qui n'est jamais envoyé au serveur (méthode de la « carte postale QR », étude 03, § 6.5).

Les fiches sont aussi une **matière première marketing** : une fiche par semaine en épingle Pinterest ou en carrousel Instagram (étude 05, piliers « Activités sans écran » et « Routines »), avec un renvoi vers l'app.

---

## 3. Les outils de la maison, bâtis sur Minuto

### 3.1 Ce que Minuto apporte déjà

Les fondatrices ont déjà fait **Minuto**, une application web de minuteurs visuels (un seul fichier HTML : CSS, décors SVG animés, JavaScript, sons générés en direct). C'est une base solide, pensée pour les enfants : de vrais dessins animés plutôt que des chiffres, une interface à gros boutons, des sons doux, un mode « petits » sans aucun chiffre. **On ne repart pas de zéro : la partie outils de Petits Savants, c'est Minuto adapté à la télé.**

Ce que contient Minuto (lu dans le fichier) :

- **Un moteur de minuterie** : un « plan » fait d'un ou plusieurs segments (un minuteur, les étapes d'une routine, travail et pause), avec pause, « +1 minute », « Recommencer », une carte « Ensuite » entre deux étapes (avec un « C'est parti » qui se lance tout seul) et un écran « C'est fini ! » (« Encore » / « Terminer »). Le décor « pulse » doucement dans les deux dernières minutes.
- **Neuf décors animés** en SVG (cadre de 300 × 300), chacun avec la même petite interface `build()` / `update({ f, remaining, duration, running })` : **Réveil** (un disque coloré qui diminue et passe du vert au rouge ; en mode « grands », un cadran de 60 minutes à la façon des minuteurs de classe), **Aquarium** (l'eau coule d'un robinet, le niveau monte, les poissons arrivent un à un, des bulles), **Sablier**, **Fleur** (une graine qui devient une fleur), **Fusée** (vers la lune), **Dent** (les microbes disparaissent un par un sous la brosse), **Coffre** (les jouets sautent un à un dans le coffre), **Dino** (un œuf qui se fendille puis éclot), et **Course** pour les défis.
- **Deux publics** : « Les petits » (« Ils ne lisent pas encore l'heure. Que des dessins, aucun chiffre. ») et « Les grands » (« En plus du dessin, les minutes et l'heure de fin. »).
- **Des minuteurs personnalisés** (nom, image, durée, décor, et démarrage automatique à une heure donnée), avec quatre minuteurs prêts : Brossage des dents (2 min, Dent), Télé (20 min, Aquarium), Rangement (10 min, Coffre), Avant le dodo (15 min, Fusée).
- **Les activités** : Routines (Le matin, Le soir, jusqu'à 12 étapes, avec « J'ai fini cette étape »), Dodos (les nuits avant un grand jour, une lune par nuit), Chacun son tour (2 à 4 joueurs, un animal chacun, tirage « Au hasard »), Bulle de calme (inspirer 4 s, garder 1,5 s, souffler 6 s, sur 1, 2, 3 ou 5 minutes, avec un son qui monte et qui descend), Devoirs et pauses (15 min de travail, 5 min de pause, 3 tours par défaut), Défis (finir avant l'escargot, la tortue ou le lapin, avec podium et record) et Mes étoiles (un bocal qui se remplit, et une récompense quand il est plein).
- **Des sons générés en WebAudio**, sans fichier audio : une clochette de quatre notes (sol, si, ré, sol) répétée trois fois à la fin, un petit « pop », un « ding ».
- **Des réglages** de fin : la mélodie, et « L'écran change de couleur », pour voir la fin de loin.

**Notre verdict, élément par élément** :

| Élément de Minuto | Verdict pour Petits Savants | Pourquoi |
|---|---|---|
| Moteur de minuterie (segments, pause, +1 min, « Ensuite », « C'est fini ! ») | **Reprendre tel quel** (la logique), réécrit au style de l'app | C'est exactement ce qu'il faut ; seule la commande change (télécommande). |
| Décors Aquarium, Sablier, Réveil, Dent, Coffre | **Reprendre tels quels** | Lisibles, drôles, adaptés aux non-lecteurs ; les contours épais (3 unités sur 300) restent nets agrandis à 840 px. |
| Décors Fleur, Fusée, Dino | **Reprendre**, rangés dans « Plus de décors » | Bons pour l'attente ; la fusée est un peu excitante pour le coucher (on lui préfère le Ciel du soir, à créer). |
| Mode « petits » / « grands » | **Reprendre**, et le déduire de la classe de l'enfant | TPS-GS : que des dessins ; CP-CE2 : dessin, minutes restantes et heure de fin. Le parent peut changer. |
| Clochette de fin, « pop », « ding », son de la bulle | **Reprendre**, harmonisés avec les sons de l'app (`Sfx` de `platform.js`, aussi en WebAudio) | Déjà doux, sans fichier ni droits. Réglage du niveau pour les haut-parleurs de télé (§ 3.2). |
| Fin « l'écran change de couleur » | **Adapter** : un halo arc-en-ciel sur le bord de l'écran, 10 secondes, pas tout l'écran | Sur une télé de 55 pouces, un plein écran qui change de couleur en boucle est trop violent ; on évite tout ce qui clignote (plus de 3 éclairs par seconde, règle d'accessibilité WCAG 2.3.1). |
| Routines | **Reprendre et adapter** : cases à cocher visibles, pictogrammes maison, étapes sans minuteur possibles, pas d'étoile par étape | Voir § 3.4. |
| Dodos | **Reprendre tel quel** | Simple, utile, en plein dans « se repérer dans le temps ». |
| Chacun son tour | **Reprendre**, avec les profils des enfants comme joueurs | Voir § 3.7. |
| Bulle de calme | **Reprendre**, rythme adapté à l'âge | Voir § 3.6. |
| Devoirs et pauses | **Reprendre**, durées par classe, et y brancher les ambiances sonores | Voir § 3.5. |
| Défis contre l'escargot | **Revoir** : pas de podium entre frères et sœurs, pas de record, un mode « tous ensemble » | Voir § 3.7. |
| Mes étoiles (bocal + récompense) | **Revoir en profondeur** : devient le « bocal des fiertés », sans récompense matérielle | Voir § 3.9. |
| Minuteur prêt « Télé, 20 min » | **Ne pas reprendre** sur la télé | La limite de temps par enfant existe déjà dans l'espace parents ; on le renomme « Temps calme ». |
| Démarrage automatique à une heure | **Garder sur le téléphone seulement** | La télé est souvent éteinte le matin ; Minuto le dit lui-même : « Minuto doit rester ouvert, écran allumé ». |
| Six thèmes de couleurs (Pop, Féerique, Espace…) | **Laisser à Minuto** | Petits Savants a sa propre identité (étude 08). |
| Questionnaire d'accueil | **Inutile** | Le profil de l'enfant (classe, avatar, couleur) dit déjà tout. |
| Sauvegarde en ligne optionnelle | **Ne pas reprendre** | Petits Savants garde tout sur la télé, sans compte. |
| La mascotte « Minuto », petite horloge | **À décider** | Deux options : elle devient l'hôte de l'espace des outils (« les minuteurs de Minuto »), ce qui garde le travail et un nom déjà trouvé ; ou les outils sont présentés par le compagnon de l'enfant, pour un seul univers. Nous penchons pour la première, si Minuto reste aussi une app à part (renvoi croisé). |

**Ce qui manque à Minuto**, et qu'on ajoute : le décor **Arc-en-ciel** demandé par les fondatrices ; un décor de coucher (**Ciel du soir**) ; la **commande à la télécommande** et la mise en page à 3 m ; le lien avec **les profils des enfants** ; les **ambiances sonores** pour les devoirs ; le **Dé géant** pour les jeux de l'atelier ; une **version imprimable** des routines.

### 3.2 Règles communes : la télé et le téléphone

**Mise en page à 1920 × 1080** (la taille de travail de l'app), avec 5 % de marge de sécurité (96 px sur les côtés, 54 px en haut et en bas) :

- **Mode « petits »** : le décor seul, centré, en **960 × 960 px** (le SVG de 300 unités agrandi 3,2 fois). Le nom de l'activité en haut (48 px), lu par la voix au lancement. Les boutons se cachent après 5 secondes sans touche et reviennent dès qu'on appuie.
- **Mode « grands »** : le décor à gauche en **840 × 840 px** ; à droite, le temps restant en chiffres de **160 px** (chiffres à chasse fixe, pour qu'ils ne « dansent » pas), l'heure de fin en 40 px (« Fini à 17 h 25 »), puis la rangée de boutons.
- **Boutons** : 220 × 120 px, icône et mot (32 px), anneau de focus jaune et marine de l'app. Texte jamais sous 34 px. Contraste 4,5:1 au moins.

**La télécommande** (les mêmes réflexes que dans les leçons, avec l'aide-mémoire des touches en bas de l'écran) :

| Touche | Écran de choix (durée, décor) | Minuteur en cours |
|---|---|---|
| ◀ ▶ ▲ ▼ | Se déplacer entre les durées et les décors | Se déplacer entre Recommencer, Pause, +1 minute |
| OK | Choisir, puis « Lancer » | Le bouton qui a le focus (par défaut : Pause / Reprendre) |
| Retour | Revenir | Demande « Arrêter le minuteur ? » (Oui / Non, le focus sur Non) : un enfant qui appuie par erreur ne coupe rien |
| Vert (ou 2) | — | « J'ai fini ! » (étape de routine, défi) |
| Jaune (ou 3) | — | +1 minute |
| Bleu (ou 4) | — | Son de fin activé ou coupé |
| Rouge (ou 1) | — | Dans « Chacun son tour » et les défis à plusieurs : chaque couleur est un enfant (rouge, vert, jaune, bleu), il appuie sur sa couleur quand il a fini |

**Choisir une durée à la télécommande** : une grille de durées toutes prêtes adaptées à l'outil (par exemple 1, 2, 5, 10, 15, 20, 30, 45, 60 min), plus « Autre durée » : ◀ ▶ enlève ou ajoute 1 minute, une pression longue va de 5 en 5 (Minuto a déjà cette « pression qui répète »). Maximum 2 heures sur la télé. **Taper un nom** (minuteur personnalisé, étape de routine) se fait de préférence **sur le téléphone** connecté ; sinon avec le clavier à l'écran de l'app (celui du prénom).

**La fin** :

- **Son** : la clochette de Minuto (quatre notes montantes sol-si-ré-sol, 0,17 s d'écart, attaque de 15 ms, extinction en 1,3 s), jouée **trois fois** à 1,9 s d'intervalle puis plus rien. Sur la télé, on ajoute un filtre qui adoucit les aigus (passe-bas vers 4 kHz) et un niveau plus bas que les sons « bravo » des leçons : les haut-parleurs de télé sont souvent réglés fort. Réglage « Son de fin : doux / normal / coupé », avec un bouton « Écouter ».
- **Option « Prévenir 1 minute avant »** (désactivée par défaut) : un seul « ding » très doux.
- **Image** : le décor fait sa fin (l'aquarium est plein, la fusée a planté son drapeau, le coffre est fermé, l'œuf a éclos), un halo arc-en-ciel fait le tour de l'écran pendant 10 secondes, puis la carte « C'est fini ! » avec « Encore » et « Terminer ». **Au coucher**, ni clochette ni halo (§ 3.3, Ciel du soir).
- **Après 5 minutes sans touche**, l'écran revient à l'accueil : on ne laisse pas une télé allumée pour rien.

**Ce qu'il faut à la télé, et que Minuto n'avait pas à gérer** :

- **Écran allumé** : l'app Android TV garde déjà l'écran allumé (`FLAG_KEEP_SCREEN_ON` dans `MainActivity`) ; l'économiseur d'écran ne doit pas couper un minuteur de 30 minutes. Sur LG et Samsung, il faut vérifier l'équivalent de chaque système.
- **Écrans OLED** : une image fixe pendant 30 à 60 minutes peut marquer l'écran. Le décor se décale de 2 à 4 px chaque minute, les textes fixes sont un peu atténués, et les longs minuteurs proposent « écran tamisé » (luminosité réduite, animations ralenties).
- **Puissance des télés** : Minuto recalcule ses décors à chaque image (60 par seconde). Sur un petit boîtier (Chromecast HD, Fire TV Stick Lite, Mi Box S), on limite à 30 images par seconde, on fait les animations d'ambiance (bulles, poissons qui nagent) en transformations CSS, et on coupe tout ce qui n'est pas le temps qui passe quand le réglage « animations réduites » est actif (Minuto respecte déjà `prefers-reduced-motion`).
- **Style de code** : Petits Savants est écrit en JavaScript à l'ancienne (`var`, fonctions, sans étape de compilation) pour tourner dans les navigateurs des vieilles télés ; Minuto utilise la syntaxe moderne (fonctions fléchées, gabarits de chaînes, `async`). Le portage des décors est mécanique (les gabarits deviennent des concaténations) mais à faire décor par décor, avec un test d'affichage par décor.

**Sur le téléphone** :

- **Téléphone connecté à la télé** (lien existant) : il sert de **télécommande des outils** (lancer, mettre en pause, +1 minute, « J'ai fini »), d'**éditeur** (noms, étapes de routine, dates des Dodos) et de **miroir** du minuteur (le même décor, en petit). La télé reste la référence du temps.
- **Téléphone seul** : la page téléphone est servie par la télé, donc elle s'arrête quand la télé s'éteint. Pour les minuteurs sans télé (le brossage de dents à la salle de bain), le vrai outil est **Minuto lui-même**, ou la future application tablette et téléphone de Petits Savants (étude 02, § 4.1) qui reprendra ces écrans tels quels : ils sont déjà conçus pour le doigt.

### 3.3 Les minuteurs visuels

Six décors sur l'écran de choix, quatre de plus dans « Plus de décors ». Pour chacun : le rendu, l'animation, les durées proposées, la fin, et à quoi il sert.

#### Arc-en-ciel (nouveau, à dessiner dans le style de Minuto)

- **Rendu** : six arcs en pointillés gris, « à colorier », posés sur deux nuages souriants ; les couleurs de la palette de Minuto (rouge `#FF5A5F`, orange `#FF9F1C`, jaune `#F2A900`, vert `#2FCB89`, bleu `#3FA7F5`, violet `#9B5DE5`), contour épais `#2B2350` comme les autres décors.
- **Animation** : chaque arc se colorie comme tracé au crayon, du nuage de gauche vers celui de droite (un trait qui avance), l'un après l'autre, du rouge (dehors) au violet (dedans). Chaque arc prend un sixième du temps. À la moitié, un soleil passe la tête derrière le nuage. Une petite étoile scintille au bout du crayon pendant que ça colorie.
- **Ce que l'enfant comprend sans lire** : « encore deux couleurs », c'est un repère concret, mieux qu'une aiguille.
- **Durées** : 5, 10, 15, 20, 30 minutes (et durée libre).
- **Fin** : le soleil sort en entier et sourit, les nuages sautillent, des étincelles ; clochette.
- **Option** : un « ding » très doux à chaque couleur terminée (désactivé par défaut).
- **À quoi il sert** : les **devoirs** et la lecture (10-15 min au CP, 15-20 au CE), un **temps de jeu calme**, « dans 15 minutes, on part ».

#### Aquarium (Minuto, tel quel)

- **Rendu** : un aquarium vide, un robinet en haut à gauche.
- **Animation** : l'eau coule et le niveau monte régulièrement ; les poissons arrivent un à un à des moments fixés (poisson-clown, poisson chirurgien, poisson-globe…), une pieuvre se pose au fond, les bulles montent. Les arrivées de poissons sont des repères pour les petits (« le poisson-globe est là, c'est presque fini »).
- **Durées** : 10, 15, **20** (par défaut), 30 minutes.
- **Fin** : l'aquarium est plein, le robinet s'arrête, les poissons nagent ensemble ; clochette.
- **À quoi il sert** : le **temps calme** après l'école, le **bain** (15 min, comme dans la routine du soir de Minuto), un **repas** qui s'éternise, une **attente** (« quand l'aquarium sera plein, on ira au parc »).

#### Sablier (Minuto, tel quel)

- **Rendu** : un sablier vertical, du sable fait de grains de toutes les couleurs.
- **Animation** : le sable coule du haut vers le bas, le tas monte en bas.
- **Durées** : courtes : 30 secondes, 1, 2, 3, 5 minutes.
- **Fin** : le dernier grain tombe, le sablier fait un petit saut ; clochette.
- **À quoi il sert** : **se laver les mains** (30 s, fiche PS-08), les **tours de jeu** (c'est le décor par défaut de « Chacun son tour »), les petits défis de l'atelier (petit bac, dico-défi), une **petite attente**.

#### Réveil, le disque qui fond (Minuto, tel quel)

- **Rendu** : un réveil rond avec un disque de couleur. En mode « grands », un vrai cadran de 60 minutes avec ses 60 traits, comme les minuteurs utilisés en classe.
- **Animation** : la part colorée diminue dans le sens des aiguilles d'une montre et passe doucement du vert au rouge.
- **Durées** : 1 à 60 minutes.
- **Fin** : le disque a disparu, le réveil sonne (la clochette).
- **À quoi il sert** : les **transitions** (« encore 5 minutes de jeu »), les enfants qui ont besoin de **voir le temps qui reste d'un coup d'œil** (attention, troubles de l'attention, autisme : c'est le format le plus utilisé dans ces accompagnements), les devoirs des grands. **Réglage** « couleur fixe » pour les enfants que le passage au rouge inquiète.

#### La dent (Minuto, tel quel, avec un petit ajout)

- **Rendu** : une grosse dent un peu jaunie, couverte de microbes rigolos, une brosse à dents.
- **Animation** : la brosse va de microbe en microbe ; chacun disparaît dans une gerbe de bulles avec un petit « pop », la dent blanchit, son visage passe d'inquiet à radieux ; les yeux de la dent suivent le prochain microbe.
- **Ajout proposé** : ranger les microbes en **quatre zones** (en haut à droite, en haut à gauche, en bas à gauche, en bas à droite) pour que la brosse change de zone toutes les 30 secondes : l'enfant apprend la méthode (brosser toutes les faces, partout).
- **Durée** : **2 minutes** (la durée recommandée par les dentistes, matin et soir).
- **Fin** : la dent brille et sourit ; clochette.
- **À quoi il sert** : le **brossage des dents**, et la leçon « Dents et microbes » (`mo-sante-hygiene`).

#### Le coffre à jouets (Minuto, tel quel)

- **Rendu** : un coffre ouvert sur un tapis rond arc-en-ciel, des jouets éparpillés par terre (ballon, ours, cubes, canard, voiture, tambour).
- **Animation** : les jouets sautent un à un dans le coffre en faisant une pirouette, avec une pluie d'étoiles.
- **Durées** : 5, 10, 15 minutes.
- **Fin** : le couvercle se ferme ; clochette.
- **À quoi il sert** : le **rangement**. L'enfant range « en même temps que le coffre » : c'est une course amicale avec le dessin, pas avec un frère.

#### Plus de décors

- **Fleur** (Minuto) : une graine sous la terre, une tige qui pousse, des feuilles, un bouton, puis la fleur s'ouvre. Pour **la pause** des devoirs (c'est le décor de pause de Minuto) et les **attentes** ; lien avec « La petite graine » (`mo-nat-graine`).
- **Fusée** (Minuto) : la fusée suit un chemin d'étoiles vers la lune et y plante un drapeau. Pour l'attente d'un **départ**, d'une **visite**.
- **Dino** (Minuto) : l'œuf se fendille de plus en plus, un petit dinosaure jette un œil, puis éclot. Pour une **attente** avec une surprise au bout.
- **Ciel du soir** (nouveau) : un ciel de fin de journée qui fonce lentement, les étoiles s'allument une à une, la lune se lève, le compagnon de l'enfant bâille et se couche dans un coin. **Durées** : 10, 15, 20 minutes. **Fin sans clochette** : l'écran s'assombrit en 30 secondes jusqu'au noir, une boîte à musique de trois notes très douce, puis la télé revient à l'accueil. Pour **le temps avant le coucher** et le futur « mode bonne nuit » (§ 4). Il remplace la Fusée pour le coucher : on ne lance pas une fusée pour s'endormir.

*Plus tard* : **Le chemin du compagnon**, où l'animal 3D de l'enfant (`pet3d.js`) marche jusqu'à sa cabane ; très attachant, mais plus coûteux (animation 3D sur de petits boîtiers).

### 3.4 Les routines en images

**Pourquoi** : les routines rassurent les jeunes enfants (ils savent ce qui vient ensuite), réduisent les rappels à répétition (« Tes chaussures ! ») et donnent de l'**autonomie** : c'est l'image, pas l'adulte, qui dit ce qu'il reste à faire. C'est aussi une très forte demande des parents (les tableaux de routine sont parmi les recherches qui montent le plus sur Pinterest, étude 05).

**Ce qu'on reprend de Minuto** : la routine est une suite d'étapes (nom, image, durée, décor), qui s'enchaînent avec la carte « Ensuite : … · C'est parti », et le bouton « J'ai fini cette étape ». **Ce qu'on change** :

- **Les cases à cocher sont visibles en permanence** : en haut de l'écran, une frise de toutes les étapes (pictogramme de 160 px, mot en 34 px), chacune avec sa case. L'étape en cours est agrandie au centre ; les étapes faites sont cochées et un peu atténuées ; celles qui restent attendent en couleur.
- **Une étape peut ne pas avoir de minuteur** (« Je m'habille » n'a pas besoin d'être chronométré chez tout le monde). Celles qui en ont un affichent leur décor (la Dent pour les dents, le Coffre pour ranger).
- **L'enfant coche lui-même** : touche OK ou verte (« J'ai fini ! »), ou sur le téléphone. Petit « pop », le compagnon saute de joie, la voix annonce l'étape suivante (« Ensuite : les dents ! »).
- **Pas d'étoile par étape** (Minuto en donne une). À la fin : « Routine finie ! Belle journée ! » et le compagnon fait un câlin. Le parent peut, s'il le veut, ajouter une ligne au bocal des fiertés (« Toute la routine du matin tout seul ! »).
- **Les cases se vident chaque jour à 4 h du matin.** Il n'y a pas d'historique des jours ratés, pas de série.
- **Pictogrammes maison** (pas d'emojis, étude 02) : on part des 18 icônes d'activités de Minuto (télé, jeu, tablette, brosse à dents, bain, repas, bol, dodo, livre, crayon, nounours, tee-shirt, chaussure, cartable, musique, palette, ballon, étoile) et on les complète jusqu'à 40 environ : toilettes, laver les mains, laver le visage, se coiffer, manteau, goûter, verre d'eau, pyjama, histoire, câlin, lumière éteinte, préparer ses habits, mettre la table, débarrasser, nourrir l'animal, agenda, lire sa leçon, cahier, bouger, ranger son cartable, montrer à un adulte.
- **Version à imprimer** : un QR code ouvre une page A4 de la routine (les pictogrammes, les cases à cocher au feutre), à coller sur le frigo. Beaucoup de familles n'allument pas la télé le matin, et c'est très bien : la routine sur la télé est un plus, pas une obligation.

**Les routines prêtes** (modifiables, sur le téléphone ou derrière le code sur la télé) :

| Routine | Maternelle (TPS-GS) | Élémentaire (CP-CE2) |
|---|---|---|
| **Le matin** | Pipi · M'habiller · Petit-déjeuner · Les dents (Dent, 2 min) · Chaussures et manteau | Pipi et visage · M'habiller · Petit-déjeuner · Les dents (Dent, 2 min) · Me coiffer · Cartable · Chaussures et manteau |
| **Le soir** | Ranger les jouets (Coffre, 10 min) · Le bain (Aquarium, 15 min) · Pyjama · Les dents (Dent) · L'histoire · Câlin | Ranger (Coffre) · Douche ou bain · Pyjama · Préparer mes affaires pour demain · Les dents (Dent) · Lecture (Ciel du soir, 15 min) · Câlin |
| **Les devoirs** (CP-CE2) | — | Goûter et pause · Sortir l'agenda · Lire ma leçon à voix haute · Faire mes exercices (Arc-en-ciel) · Bouger 1 minute · Ranger mon cartable · Montrer à un adulte |

*Note pédagogique* : à l'école élémentaire, les devoirs écrits à la maison ne sont normalement pas demandés (une règle ancienne, régulièrement rappelée) ; dans la pratique, il y a surtout des leçons à apprendre et de la lecture. La routine « devoirs » est donc pensée pour **lire et apprendre**, en peu de temps.

### 3.5 Devoirs et pauses, et les ambiances sonores

**Devoirs et pauses** (Minuto) : un temps de travail, une vraie pause, et on recommence. On garde le principe et la phrase de pause de Minuto (« Bouge, bois un verre d'eau, respire un grand coup. »), et on adapte les durées à l'âge :

| Classe | Travail | Pause | Tours | Décors |
|---|---|---|---|---|
| CP | 10 min | 3 min | 2 | Arc-en-ciel / Fleur |
| CE1 | 15 min | 5 min | 2 | Arc-en-ciel / Fleur |
| CE2 | 20 min | 5 min | 2 | Réveil (mode grands) / Fleur |

Pendant la pause, la télé propose une idée de mouvement qui change à chaque fois (« 10 sauts de grenouille », « Étire-toi comme un chat », « Va boire un verre d'eau »). Pas d'étoile par tour (Minuto en donne une) : à la fin, « Bien travaillé ! » et, si le parent veut, une fierté dans le bocal.

#### Les « musiques de concentration » : est-ce pertinent ?

**Ce que dit la recherche, honnêtement** :

- **Les paroles gênent la lecture et la mémoire.** C'est l'un des résultats les plus solides de la psychologie cognitive : la parole entendue en fond, même dans une langue qu'on ne comprend pas, perturbe la mémoire de travail verbale (« effet de la parole non pertinente », Salamé et Baddeley, 1982 et 1989). La musique chantée gêne plus que la musique instrumentale. Or lire, apprendre une leçon, écrire, c'est exactement de la mémoire verbale.
- **L'effet de la musique de fond est faible et variable.** Une méta-analyse (Kämpfe, Sedlmeier et Renkewitz, *Psychology of Music*, 2011) trouve un effet global proche de zéro : un peu négatif sur la lecture et la mémoire, un peu positif sur l'humeur et l'activité physique. L'« effet Mozart » (écouter du Mozart rend plus intelligent) n'a pas résisté aux vérifications (Chabris, 1999 ; Pietschnig, Voracek et Formann, 2010).
- **Les enfants sont plus gênés par le bruit que les adultes.** Les travaux sur l'acoustique des classes (revue de Klatte, Bergström et Lachmann, *Frontiers in Psychology*, 2013) montrent que les enfants, surtout les plus jeunes, souffrent plus du bruit de fond et de la parole de fond pour écouter, lire et retenir.
- **Chez les tout-petits, le fond sonore réduit le jeu et les échanges.** La télé allumée en fond fait jouer les 1-3 ans moins longtemps et moins concentrés (Schmidt et coll., *Child Development*, 2008) et réduit les mots que les adultes leur adressent. En maternelle, ce qui fait progresser, c'est la conversation : le silence est un meilleur allié.
- **Un cas particulier : les enfants très inattentifs.** Des études de l'équipe de Göran Söderlund (depuis 2007) et une méta-analyse récente rapportent un petit bénéfice d'un bruit continu (bruit blanc ou rose) chez des enfants inattentifs ou avec un TDAH, et un effet nul ou négatif chez les autres. C'est prometteur mais modeste ; à présenter comme « à essayer », jamais comme un traitement *(références exactes à vérifier avant publication)*.
- **Ce qui marche à coup sûr, c'est l'apaisement.** Des sons doux, réguliers, sans surprise (pluie, vagues) aident à **se calmer** et à **faire une transition** : c'est un usage de détente, pas de concentration.

**Notre réponse** : oui, mais avec un cadre clair, et sans promettre qu'une musique « rend concentré ».

1. **On ne l'appelle pas « musique de concentration »** mais **« ambiances calmes »**, pour ne rien promettre.
2. **Uniquement au cycle 2 (CP-CE2), pour les tâches qui ne demandent pas de lire ou d'apprendre des mots** : calcul, copie, coloriage, rangement, bricolage, et pour le temps calme. Le texte d'aide le dit : « Pour lire ou apprendre une leçon, le silence aide mieux. »
3. **Jamais pendant les leçons** de l'app : la voix qui lit les consignes et les sons à reconnaître entrerait en conflit avec la musique. L'ambiance se coupe automatiquement dès qu'une leçon s'ouvre ou que la voix parle.
4. **Désactivée par défaut**, branchée sur **Devoirs et pauses** (pendant le travail, silence pendant la pause pour bien marquer la différence) et sur le minuteur **Temps calme**. Pas proposée en maternelle, sauf dans la Bulle de calme et le Ciel du soir.
5. **Volume bas** : niveau de départ très bas (environ 15 % du volume des sons de l'app), réglage « très doux / doux », montée progressive en 8 secondes, descente en 4 secondes ; la clochette de fin passe par-dessus (l'ambiance baisse pendant qu'elle sonne).
6. **Jamais de paroles.**

**Les ambiances proposées**, toutes **générées en direct en WebAudio** (comme les sons de Minuto et de l'app : pas de fichier, pas de droits, 0 €, rien à télécharger) :

| Ambiance | Comment on la fabrique | Pour quoi |
|---|---|---|
| **Pluie douce** | Bruit rose (bruit blanc filtré) passé dans un filtre passe-bas autour de 1,5 kHz, avec de petites gouttes ajoutées au hasard (impulsions brèves filtrées) | Devoirs, temps calme ; l'ambiance la plus neutre, à proposer en premier |
| **Vagues** | Bruit rose dont le volume et le filtre montent et descendent lentement (une vague toutes les 8 à 12 secondes) | Temps calme, Bulle de calme (le rythme des vagues rejoint la respiration lente) |
| **Forêt** | Bruit filtré qui fait le vent dans les feuilles, très lent ; option « oiseaux » (un gazouillis synthétique rare, une fois par minute environ), désactivée par défaut | Temps calme, coloriage, bricolage |
| **Piano lent** | Notes de piano simplifiées (oscillateurs avec une attaque et une longue extinction), tirées au hasard dans une gamme pentatonique (do, ré, mi, sol, la : jamais de fausse note), une note toutes les 1,5 à 3 secondes, avec un écho doux | Devoirs de calcul ou de copie, pour ceux que le bruit de pluie ennuie |
| **Souffle doux** | Bruit brun (plus grave que le rose), continu, sans variation | Pour les enfants que le moindre bruit de la maison distrait ; « à essayer » |
| **Boîte à musique** (coucher seulement) | Trois ou quatre notes aiguës très douces, en boucle lente | Ciel du soir et mode bonne nuit, pas les devoirs |

**Si on veut un jour de vraies musiques enregistrées** : seulement avec une licence claire et écrite. Les pièges : la « Bibliothèque audio YouTube » est faite pour les vidéos YouTube, pas pour une app ; « libre de droits » ne veut souvent rien dire ; une œuvre classique est dans le domaine public mais **l'enregistrement**, lui, est protégé (il faut un enregistrement lui aussi libre, comme ceux de Musopen) ; un compositeur membre de la SACEM ne peut pas céder ses droits librement. Les options sûres : des enregistrements sous licence **CC0** (vérifiés un par un, par exemple sur Freesound en filtrant CC0), ou une **commande** à un musicien avec une cession de droits écrite. La synthèse en direct reste la meilleure solution : gratuite, légère, et sans aucun risque.

**Le rendu sur la télé** : l'ambiance ne prend pas l'écran, le minuteur reste au centre. En haut à droite, une petite pastille « ♪ Pluie douce » (32 px) ; quand on la sélectionne, ◀ ▶ change d'ambiance et OK la coupe. Pour le **Temps calme** sans minuteur, une option « fenêtre » montre une image très lente et sombre qui va avec le son (la pluie qui coule sur une vitre, la mer au loin), à luminosité réduite, qui s'éteint seule à la fin de la durée choisie.

### 3.6 La bulle de calme

**Pourquoi** : apprendre à se calmer est au programme (à la maternelle, « apprendre ensemble et vivre ensemble » ; au cycle 2, en enseignement moral et civique, « identifier et exprimer ses émotions »). La respiration lente, avec une expiration plus longue que l'inspiration, est l'outil le plus simple et le mieux étayé pour faire redescendre la tension. C'est ce que font Petit BamBou ou Headspace pour enfants, avec une voix ; on le fait avec une image.

**Ce qu'on reprend de Minuto** : la bulle qui gonfle et dégonfle, l'anneau qui montre la durée, les deux sons très doux (un qui monte quand on inspire, un qui descend quand on souffle), les durées 1, 2, 3, 5 minutes, et les phrases (« On respire avec la bulle ? », « Inspire par le nez… », « Souffle tout doucement… »).

**Ce qu'on adapte** :

- **Le rythme selon l'âge** : Minuto utilise 4 s pour inspirer, 1,5 s pour garder l'air, 6 s pour souffler. C'est bien à partir du CP. **Pour la maternelle**, on supprime le moment où l'on garde l'air (difficile et inutile à cet âge) et on raccourcit : 3 s pour inspirer, 4 s pour souffler. Durée par défaut : 1 minute en maternelle, 2 minutes en élémentaire.
- **La voix** : le compagnon dit les consignes pendant les deux premières respirations, puis se tait (on garde seulement les sons doux).
- **Sur la télé** : bulle de 700 px au centre, consigne en 48 px. Le compagnon respire en même temps que la bulle (il respire déjà dans l'app !).
- **Une « météo des émotions » avant, facultative** : cinq visages (content, triste, en colère, inquiet, fatigué) ; l'enfant choisit, et la bulle propose une idée (« Tu es en colère : on souffle fort comme le vent, puis tout doucement »). **Ce choix n'est enregistré nulle part** et n'apparaît pas dans le rapport parent : une émotion n'est pas une donnée à surveiller. Lien avec « Happy, sad » (`en-play-feel`) et « How are you? » (`en-day-feel`).
- **Où la trouver** : dans l'espace famille, et **sur l'écran de pause** quand le temps du jour est fini (une transition douce vers la fin de l'écran).

### 3.7 Chacun son tour, les défis et les Dodos

**Chacun son tour** (Minuto, tel quel sur le fond) : 2 à 4 joueurs, la durée d'un tour, le nombre de tours, un tirage « Au hasard » pour savoir qui commence, et l'annonce de qui prend la main.
- **Pourquoi** : partager un jouet, un vélo, la place à la fenêtre du train sans dispute ; les « c'est pas juste » tombent quand c'est le minuteur qui décide. Et les jeux de l'atelier (petit bac, jeu de l'oie) gagnent un arbitre neutre.
- **Sur la télé** : les joueurs sont les **profils des enfants** (avatar, couleur) plus « Papa », « Maman » ou un invité ; chaque joueur a sa touche de couleur. La voix annonce : « C'est au tour de Léa ! ».

**Défis** (Minuto, à revoir) : l'enfant doit avoir fini avant que l'escargot (ou la tortue, le lapin…) n'arrive au drapeau.
- **Ce qu'on garde** : la course contre un personnage, pour un seul enfant ; c'est drôle et ça débloque un enfant qui traîne à s'habiller, entre 4 et 7 ans.
- **Ce qu'on change** : **pas de podium ni de record entre frères et sœurs** (la comparaison entre enfants est exactement ce que l'étude 03 a écarté) ; à la place, un mode **« Tous ensemble contre l'escargot »** où l'équipe gagne si tout le monde a fini. L'escargot va lentement : le défi doit être gagnable. Le défi n'est **jamais une punition** ; et l'aide le dit : si votre enfant est stressé par la course, le minuteur simple (Coffre, Arc-en-ciel) fait le même travail.

**Dodos** (Minuto, tel quel) : combien de nuits avant l'anniversaire, Noël, les vacances, le retour de papa ; une lune s'en va chaque matin.
- **Pourquoi** : le temps est très abstrait pour un enfant de 3 à 6 ans ; « encore 4 dodos » est concret, et c'est « se repérer dans le temps » (`mo-tm-calendrier`, `mo-gs-semaine`).
- **Sur la télé** : une rangée de lunes (30 au plus, puis « +12 »), le grand nombre au centre. À l'ouverture du profil d'un enfant, le compagnon l'annonce une fois par jour : « Encore 3 dodos avant l'anniversaire de Léo ! »

### 3.8 Le dé géant et « Qui commence ? » (nouveau)

- **Rendu** : un dé de 500 px au centre (points, ou chiffres pour les grands), un ou deux dés ; option « dé de 1 à 3 » pour les petits.
- **Animation** : OK lance, le dé roule une seconde avec un « pop » à l'arrivée ; la voix dit le résultat (« Cinq ! »).
- **« Qui commence ? »** : une roue avec les avatars des joueurs, qui tourne et s'arrête sur l'un d'eux.
- **Pourquoi** : les jeux de société maison de l'atelier (MS-05, CE1-01) ; il remplace un petit dé quand il y a un tout-petit dans la maison ; tout le monde voit le résultat ; il évite les disputes de « qui a triché ».

*Plus tard, dans l'espace parents* : un **chrono de lecture** pour le CP-CE2 (une minute de lecture d'un texte, le parent note le nombre de mots bien lus), qui montre la progression de l'enfant par rapport à lui-même, avec les repères officiels présentés avec prudence (50 mots par minute en fin de CP, 70 en fin de CE1, 90 en fin de CE2 : étude 02, § 2.1). Il prépare la future lecture à voix haute dans l'app.

### 3.9 Le bocal des fiertés, à la place du pot d'étoiles

**Ce que fait Minuto** : une étoile tombe dans un bocal à la fin de chaque minuteur, de chaque étape de routine, de chaque tour de devoirs et de chaque bulle de calme ; quand le bocal est plein (10 étoiles par défaut), « on gagne… » une récompense que le parent écrit (« Une surprise »).

**Pourquoi on le revoit** :

1. **Il récompense le temps qui passe**, pas l'effort : un minuteur « Télé » de 20 minutes rapporte une étoile, comme une routine faite seul. L'étude 03 a posé le principe inverse (« les points récompensent l'effort, pas le temps passé »).
2. **Une récompense matérielle attendue peut éteindre l'envie de faire.** Une méta-analyse de 128 études (Deci, Koestner et Ryan, *Psychological Bulletin*, 1999) montre que les récompenses concrètes, annoncées à l'avance et liées au fait de faire la tâche, réduisent la motivation propre de l'enfant pour cette tâche. Pour être juste : l'effet est surtout fort pour les activités qui plaisent déjà (jouer, lire, dessiner), moins pour les corvées. Mais dans une app qui veut donner le goût d'apprendre, on ne veut pas que lire ou respirer « paie ».
3. **Petits Savants a déjà des étoiles** (la monnaie des cadeaux du compagnon). Deux sortes d'étoiles qui ne s'échangent pas, c'est incompréhensible pour un enfant de 5 ans.

**Ce qu'on propose : le bocal des fiertés.**

- **Une fierté**, c'est une petite réussite racontée en une phrase et une image : « J'ai mis mes chaussures tout seul », « J'ai fini toute la routine du matin », « On a joué à la valise des sons », « J'ai réussi le son [ch] ». Le parent l'ajoute (sur le téléphone ou derrière le code), ou l'enfant la propose et le parent valide.
- **Chaque fierté devient une petite lumière** (une luciole, une lanterne, en écho aux lanternes de l'Arbre-à-Pourquoi de l'étude 03) qui flotte dans le bocal. On peut la toucher : la voix relit la phrase.
- **Pas d'objectif, pas d'échange.** Le bocal ne se « vide » pas contre un cadeau. Quand il y a environ 10 nouvelles lumières, le compagnon propose : « Et si on regardait tes fiertés ensemble ? ». L'aide aux parents suggère, s'ils veulent fêter ça, **un moment plutôt qu'un objet** : choisir le jeu du soir, une histoire en plus, inviter un copain, une sortie au parc.
- **Des mots qui décrivent l'effort**, proposés au parent pour écrire la fierté : « Tu as essayé encore et encore », « Tu l'as fait tout seul » plutôt que « Tu es le meilleur » (les travaux de Mueller et Dweck, 1998, sur l'éloge de l'effort plutôt que de l'intelligence ; et les conseils pratiques de Faber et Mazlish).
- **C'est aussi le « carnet de réussites »** demandé en § 4 : à la fin du trimestre, il devient une page à garder ou à imprimer.

### 3.10 Ce qu'on écarte

| Idée | Pourquoi non |
|---|---|
| Un sonomètre (« le feu tricolore du bruit ») | Il faut écouter le micro en permanence : contraire à la promesse de confidentialité, et la plupart des télés n'ont pas de micro ouvert. |
| Un tableau de points échangeables contre du temps d'écran ou des bonbons | Écran et sucre comme monnaie : c'est exactement ce qu'on veut éviter (§ 3.9). |
| Un classement entre frères et sœurs | Comparaison, jalousie ; voir les défis (§ 3.7). |
| Un minuteur de « coin de réflexion » ou de punition | Un outil de l'app ne doit jamais servir à punir ; la Bulle de calme est l'alternative positive. |
| Un réveil « tu peux te lever » | Très utile (Yoto le fait avec sa lumière), mais la télé n'est pas dans la chambre. À garder pour l'app téléphone ou tablette. |
| La caméra (vérifier que les dents sont brossées, que la chambre est rangée) | Surveillance et vie privée : non. |

### 3.11 Les données des outils

Le format reprend celui de Minuto (fonctions `cleanTimer`, `cleanRoutine`, `cleanEvent`, `cleanTurns`, `cleanStudy`), avec deux différences : tout est rattaché à la famille ou à un enfant, et rien ne part en ligne. Clé `tools` dans le `Store` local.

```json
{
  "tools": {
    "prefs": { "endSound": "doux", "warn1min": false, "flash": true, "reducedMotion": false, "ambience": null, "ambienceLevel": "tres-doux" },
    "timers": [
      { "id": "t1", "name": "Brossage des dents", "ic": "brush", "sec": 120, "theme": "dents", "mode": "auto" },
      { "id": "t2", "name": "Temps calme", "ic": "book", "sec": 1200, "theme": "aquarium", "mode": "auto", "ambience": "pluie" }
    ],
    "routines": [
      { "id": "r1", "child": "c1", "name": "Le matin", "ic": "sunrise",
        "steps": [
          { "name": "M'habiller", "ic": "shirt", "sec": 0, "theme": null },
          { "name": "Les dents", "ic": "brush", "sec": 120, "theme": "dents" }
        ],
        "today": { "day": "2026-11-08", "done": [0] } }
    ],
    "events": [ { "id": "e1", "name": "Anniversaire de Léo", "ic": "cake", "date": "2026-11-21" } ],
    "turns": { "players": ["c1", "c2", "parent"], "sec": 300, "rounds": 2, "theme": "sablier" },
    "study": { "CP": { "work": 600, "pause": 180, "rounds": 2, "theme": "arcenciel", "ptheme": "fleur", "ambience": null } },
    "prides": [ { "id": "p1", "child": "c1", "day": "2026-11-08", "ic": "shoe", "text": "J'ai mis mes chaussures tout seul" } ]
  }
}
```

`mode: "auto"` veut dire « petits » ou « grands » selon la classe de l'enfant. `routines[].today` est remis à zéro chaque jour, sans historique. `prides` est la seule trace gardée dans le temps, et c'est le parent qui la crée.

---

## 4. Ce qu'on pourrait ajouter d'autre

### 4.1 Ce que font les autres

*Prix et détails à revérifier dans les magasins d'applications avant toute communication (certains sites étaient inaccessibles pendant les études précédentes).*

| App | Ce qu'elle fait | Ce qu'on en retient | Ce qu'on évite |
|---|---|---|---|
| **Khan Academy Kids** | Gratuite, sans publicité, 2-8 ans : parcours adaptatif, bibliothèque de livres lus à voix haute, dessin et jeux libres, personnages attachants. Surtout en anglais. | Une **bibliothèque** à côté du parcours ; le gratuit total crée une énorme confiance. | — |
| **Lingokids** | Anglais 2-8 ans par le jeu, beaucoup de **chansons** et de vidéos, espace parents avec progrès. | Les comptines et chansons font revenir les enfants (et font marcher YouTube). | Le gratuit trop limité, les minuteurs frustrants, les plaintes de facturation (étude 03). |
| **Bayam** (Bayard, Milan) | 3-10 ans : histoires, documentaires, vidéos, jeux issus des magazines ; sans publicité ni algorithme ; chronomètre et contrôle parental ; jusqu'à 6 profils. | Un **catalogue de contenus variés** (pas seulement des exercices) et un discours « sans algorithme » qui rassure. | — |
| **Lumni** (audiovisuel public) | Gratuit : vidéos, jeux et dossiers classés par niveau et par matière, de la maternelle au lycée. | Le **classement par niveau et matière** que les parents comprennent tout de suite. | Le contenu peu interactif, sans suivi de l'enfant. |
| **Pili Pop** | Anglais (et espagnol) à l'oral, avec reconnaissance de la voix et des personnages. | **Faire parler** l'enfant, pas seulement écouter. | — |
| **Kaligo** | Écriture à la main sur tablette avec stylet, analyse du geste, utilisée en classe. | Le **geste d'écriture** pris au sérieux (notre tracé au téléphone va dans ce sens). | Le prix élevé et le matériel nécessaire. |
| **Mon Kit Maternelle** | Activités et fiches pour la maternelle, par section *(app non vérifiée pendant l'étude)*. | La demande des parents de maternelle pour des **activités à faire à la maison**, rangées par section : c'est notre atelier. | — |
| **Petit BamBou** | Méditation guidée en français, avec des séances pour enfants ; voix humaine, séances courtes. | La **voix humaine calme** et les séances de 3 à 5 minutes : modèle pour la Bulle de calme et le mode bonne nuit. | — |
| **Lunii** | Boîte à histoires **sans écran** ; l'enfant compose son histoire (héros, lieu, objet) ; catalogue d'histoires payantes et abonnement. | L'**audio sans écran** est devenu un achat évident pour les parents ; l'enfant **choisit** les éléments de son histoire. | — |
| **Yoto** | Lecteur audio à cartes (histoires, musique, podcasts), cartes à enregistrer soi-même, veilleuse et réveil lumineux. | Le **rituel du coucher** (veilleuse, histoire, extinction progressive) et l'objet que l'enfant manipule seul. | — |
| **Minuto** (les fondatrices) | Minuteurs visuels, routines, Dodos, Bulle de calme (§ 3.1). | La base de nos outils. | Le bocal à récompense (§ 3.9). |

**Ce qui ressort** : (1) les parents paient pour du **contenu qui occupe bien** (histoires, comptines, livres), pas seulement pour des exercices ; (2) l'**audio sans écran** est la grande tendance des 3-8 ans (Lunii, Yoto), et une télé peut l'offrir écran noir ; (3) les apps les plus appréciées **rassurent** (pas de publicité, pas d'algorithme, gratuit large) ; (4) **personne** ne propose à la fois les leçons du programme, des idées à faire sans écran liées à ces leçons, et des outils du quotidien : c'est notre combinaison unique, et elle colle à notre message « l'écran partagé, le contraire de l'écran-sucette ».

### 4.2 Les idées, par ordre de priorité

Effort : **S** quelques jours, **M** deux à quatre semaines, **L** plus d'un mois (contenu compris). Le principe pour le Premium (le même que pour les leçons) : **Premium vend du contenu** (leçons, histoires, catalogue complet) ; **les outils du quotidien restent gratuits** (un minuteur payant agace, un minuteur gratuit qu'on ouvre chaque jour fait revenir dans l'app et parler d'elle). Rien de ce qui est Premium n'est montré à l'enfant comme « bloqué ».

| # | Idée | Intérêt | Effort | Gratuit ou Premium |
|---|---|---|---|---|
| 1 | **Idée du soir** liée aux leçons (§ 2) | Très fort : rend le rapport utile, prolonge l'apprentissage sans écran, différenciant | S | Gratuit |
| 2 | **Atelier** : catalogue des 84 fiches avec filtres | Fort : valeur visible pour le parent, contenu marketing (Pinterest) | M | 3 fiches par classe gratuites, le reste Premium |
| 3 | **Minuteurs visuels** (6 décors + 4) | Fort : usage quotidien, pour toute la famille, base Minuto déjà faite | M | Gratuit |
| 4 | **Routines en images** + version à imprimer | Fort : très demandé, autonomie de l'enfant | M | Gratuit |
| 5 | **Bulle de calme** (+ météo des émotions) | Fort pour les familles, programme (vivre ensemble, EMC) | S | Gratuit |
| 6 | **Dodos**, **Chacun son tour**, **Dé géant** | Moyen : petits outils très appréciés, quasi gratuits à faire | S | Gratuit |
| 7 | **Bocal des fiertés / carnet de réussites** | Fort : valorise l'effort, le lien parent-enfant, prépare le bilan | M | Gratuit |
| 8 | **Devoirs et pauses + ambiances calmes** | Moyen : utile au cycle 2, à présenter avec prudence (§ 3.5) | M | Gratuit |
| 9 | **Comptines** (paroles affichées pour le parent, voix humaine) | Fort en TPS-MS et en anglais ; synergie avec la chaîne YouTube (étude 05) | M (L avec la musique) | Une par matière gratuite, le reste Premium |
| 10 | **Mode bonne nuit** : fin de séance (étude 03, § 6.4), Ciel du soir, une histoire ou une comptine douce, écran qui s'éteint | Fort : rituel du soir, image « écran raisonné » | M | Gratuit (les histoires suivent la règle de l'idée 11) |
| 11 | **Histoires audio** écran noir (ou une seule image fixe et sombre), lues par une voix humaine | Très fort : ce que les parents achètent (Lunii, Yoto) ; peu d'écran | L | Une histoire par semaine gratuite, le catalogue Premium |
| 12 | **Petites histoires à lire** (décodables, CP-CE1) : l'enfant lit, la voix aide | Très fort pour la lecture au CP, cœur du Premium | L | Premium (2 gratuites par période) |
| 13 | **Bilan de trimestre** et page « À montrer à la maîtresse » (étude 02, § 5.2), avec le carnet de réussites | Fort pour la conversion : le parent voit la valeur | M | Premium (le bilan simple de la semaine reste gratuit) |
| 14 | **Défi famille de la semaine** : une fiche de l'atelier à faire tous ensemble, coopérative, sans compteur | Moyen : crée un rendez-vous, contenu pour les réseaux | S | Gratuit |
| 15 | **Mode vacances** : révisions d'été, « préparer le CP » | Fort de juin à août | M | Premium |
| 16 | **Recettes pas à pas** sur la télé (images, minuteur intégré) | Moyen : cuisine = maths et lecture ; très partageable | M | 3 gratuites, le reste Premium |
| 17 | **Quiz famille** : 2 à 4 joueurs, questions adaptées à chaque âge, sur la télé | Moyen à fort : fait jouer les parents, soirées | L | Premium |
| 18 | **Les « pourquoi » de l'Arbre-à-Pourquoi** : réponses courtes illustrées (« Pourquoi le ciel est bleu ? ») | Moyen : curiosité, découverte du monde | L | Premium |
| 19 | **Chrono de lecture** (fluence) dans l'espace parents | Moyen : utile au CP-CE2, prépare la lecture à voix haute | S | Premium |
| 20 | **Le chemin du compagnon** (minuteur avec l'animal 3D) | Moyen : attachant | M | Gratuit |

**À ne pas faire** : un fil de vidéos qui s'enchaînent toutes seules, un chat ou un espace social, une IA qui converse avec l'enfant, des notifications à l'enfant, de la publicité, un classement entre enfants, quoi que ce soit qui pousse l'enfant à réclamer un achat.

---

## 5. Le plan d'intégration

### 5.1 Où ces espaces apparaissent

| Endroit | Ce qu'on ajoute | Code parent ? |
|---|---|---|
| **Écran des profils** (l'accueil) | Une tuile **« À la maison »** (l'horloge Minuto) à côté de « Téléphone ». Elle ouvre les outils : Minuteurs, Routines, Bulle de calme, Chacun son tour, Dodos, Dé géant. | **Non** pour lancer un outil ; **oui** pour modifier (durées, routines, Dodos), ou sur le téléphone connecté. Le parent peut masquer la tuile. |
| **Écran d'un enfant** (son parcours) | Rien pendant les leçons. À l'ouverture : l'annonce des Dodos (une fois par jour) et, le matin ou le soir, « Ta routine du soir est prête » si une routine existe pour cet enfant. | Non |
| **Fin de séance** (rituel du coucher, étude 03) | La carte de l'atelier « Ce soir, joue à … avec ta famille » (une fois par jour). | Non (désactivable par le parent) |
| **Écran de pause** (temps du jour terminé) | Un bouton « Respirer avec la bulle ». | Non |
| **Espace parents** | Dans le rapport de chaque enfant : l'**idée du soir** (à la place de la phrase actuelle) et l'icône « idée » à côté des leçons à revoir ; le **bocal des fiertés** de l'enfant (ajouter une fierté). Une nouvelle tuile **« L'atelier »** (le catalogue avec ses filtres). Une tuile **« Réglages de la maison »** (son de fin, ambiances, carte de fin de séance, tuile de l'accueil). | **Oui** |
| **Téléphone connecté** | La fiche de l'idée du soir et l'atelier, lisibles en cuisine ; la télécommande et l'éditeur des outils. | Les éditeurs demandent le code une fois par session |
| **Site (QR code)** | Fiches et routines à imprimer, contenu dans le fragment de l'URL (rien envoyé au serveur). | Non |

**Pourquoi les outils ne sont pas derrière le code** : un enfant qui lance un aquarium ou la bulle de calme ne risque rien, et un parent qui doit taper un code pour lancer le brossage de dents n'utilisera pas l'outil. **Le temps passé dans les outils ne compte pas dans le temps d'écran de l'enfant** (aucun profil n'est ouvert), mais les décors sont lents par nature et l'écran revient à l'accueil après la fin : ce n'est pas un divertissement de remplacement. **Pourquoi l'atelier est derrière le code** : il s'adresse au parent (cuisine, eau, sorties ne se font pas seul), et il garde le lien avec le rapport de l'enfant ; l'enfant n'en voit que la carte d'invitation.

### 5.2 Ce que voit l'enfant, ce que voit le parent

| | Enfant | Parent |
|---|---|---|
| Minuteurs | Les lancer, mettre en pause, les regarder | Créer, nommer, régler les durées et les sons |
| Routines | Cocher ses étapes | Créer, modifier, imprimer, choisir pour quel enfant |
| Bulle de calme, Dé, Chacun son tour, Dodos | Tout | Régler les durées, les joueurs, les dates |
| Ambiances calmes | Les entendre | Les activer (désactivées par défaut) |
| Atelier | La carte d'invitation de fin de séance, lue par la voix | Le catalogue, l'idée du soir, l'historique « on l'a fait » |
| Bocal des fiertés | Le regarder, réécouter ses fiertés | Ajouter, valider, retirer une fierté |

### 5.3 Gratuit et Premium

| Gratuit | Premium |
|---|---|
| Tous les outils (minuteurs, routines, bulle de calme, Dodos, Chacun son tour, dé, devoirs et pauses, ambiances) | — |
| L'idée du soir (elle peut proposer n'importe quelle fiche, gratuite ou non, une fois par jour) | — |
| 3 fiches de l'atelier par classe (21 fiches) consultables à tout moment | Les 84 fiches et les suivantes, avec tous les filtres |
| Le bocal des fiertés | Le bilan de trimestre qui le reprend |

Les fiches gratuites suggérées (choisies pour varier les matières et les lieux) : TPS-01, TPS-04, TPS-08 · PS-04, PS-07, PS-12 · MS-01, MS-03, MS-05 · GS-01, GS-05, GS-07 · CP-01, CP-02, CP-06 · CE1-01, CE1-05, CE1-07 · CE2-02, CE2-05, CE2-07.

Comme pour les leçons, **l'enfant ne voit jamais une fiche ou un outil « bloqué »** et rien ne l'invite à demander un achat (règle déjà appliquée par l'app et rappelée par les études 03 et 04).

### 5.4 Dans quel ordre

Ces lots viennent **après** les urgences de [A-RETENIR.md](A-RETENIR.md) (Premium derrière le code, bouton de résiliation, essai de 14 jours…). Estimations pour un développeur, tests compris.

| Lot | Contenu | Effort estimé | Pourquoi dans cet ordre |
|---|---|---|---|
| **1. L'idée du soir** | `www/js/content/atelier.js` avec les 84 fiches (générées une fois à partir de ce document par un petit script, les fiches étant très régulières), tests de contenu (§ 1.4), choix de l'idée (§ 2.2), carte dans le rapport, icône « idée » sur les leçons à revoir, historique local ; page téléphone de la fiche | 5 à 7 jours | Le plus de valeur pour le moins d'effort ; remplace un code qui existe déjà (`EVENING`). |
| **2. Les minuteurs** | Moteur repris de Minuto, réécrit au style de l'app ; décors Aquarium, Sablier, Réveil, Dent, Coffre portés ; nouvel Arc-en-ciel ; écran de choix et télécommande (§ 3.2) ; sons ; tuile « À la maison » ; tests d'affichage par décor et test sur un petit boîtier | 10 à 15 jours | L'outil le plus demandé ; la base de tous les autres. |
| **3. Routines et petits outils** | Routines (cases, pictogrammes, impression), Bulle de calme (rythme par âge), Dodos, Chacun son tour, Dé géant ; téléphone comme télécommande et éditeur | 8 à 10 jours | Réutilise le moteur du lot 2. |
| **4. L'atelier complet et les fiertés** | Catalogue avec filtres sur la télé et le téléphone, QR d'impression, carte de fin de séance, bocal des fiertés | 8 à 10 jours | Donne au Premium une valeur de plus, visible des parents. |
| **5. Devoirs, ambiances, coucher** | Devoirs et pauses, ambiances WebAudio (§ 3.5), Ciel du soir, Fleur, Fusée, Dino ; premier « mode bonne nuit » | 6 à 8 jours | Moins urgent, et l'usage des ambiances mérite d'être observé sur les lots précédents. |
| **Ensuite** | Comptines, histoires audio, petites histoires à lire au CP, bilan de trimestre (§ 4.2) | Selon le contenu | Le gros du travail est du contenu (voix, illustrations), en parallèle du parcours lecture du CP. |

**À chaque lot** : une branche et une revue, les tests Playwright existants (`tests/*.spec.mjs`) complétés, une vérification sur une vraie télé à 3 m (lisibilité, télécommande, son), et le README mis à jour.

---

## 6. Résumé

1. **L'atelier** : 84 fiches prêtes (12 par classe, de la TPS au CE2), chacune avec compétence du programme, durée, matériel courant, 3 à 5 étapes, deux variantes, sécurité, et pour 83 d'entre elles une leçon de l'app liée (identifiants vérifiés).
2. Six filtres (classe, matière, compétence, durée, lieu, matériel) et un format JSON simple, stocké sur la télé ; des tests vérifient la sécurité (aucun petit objet en TPS).
3. **L'idée du soir** remplace la phrase actuelle du rapport : une seule idée par jour, choisie selon les leçons à revoir, celles du jour et la matière la moins réussie, sans compteur ni reproche.
4. **Les outils sont Minuto, adapté à la télé** : moteur, décors (Aquarium, Sablier, Réveil, Dent, Coffre, Fleur, Fusée, Dino), routines, Dodos, Chacun son tour, Bulle de calme, devoirs et pauses repris presque tels quels.
5. On ajoute l'**Arc-en-ciel**, le **Ciel du soir**, le **Dé géant**, la commande à la télécommande (touches de couleur), une mise en page lisible à 3 m et les précautions propres à la télé (écran allumé, OLED, petits boîtiers).
6. On **revoit** le pot d'étoiles (qui récompense le temps et promet un cadeau) en **bocal des fiertés** sans récompense matérielle, et les défis (pas de podium entre frères et sœurs).
7. **Ambiances calmes** : utiles avec prudence (jamais de paroles, pas pour lire, pas en maternelle, jamais pendant les leçons, désactivées par défaut), générées en WebAudio : 0 € et aucun droit à payer.
8. **Benchmark** : notre combinaison unique est « leçons du programme + idées sans écran liées + outils du quotidien » ; la grande tendance à suivre est l'audio sans écran (Lunii, Yoto).
9. Les 20 idées priorisées : d'abord l'idée du soir, les minuteurs, les routines, la bulle de calme ; ensuite comptines, mode bonne nuit, histoires audio et petites histoires à lire au CP.
10. **Outils gratuits, contenu Premium** : 21 fiches gratuites, le catalogue complet en Premium ; rien de « bloqué » montré à l'enfant.
11. Intégration : une tuile « À la maison » sur l'accueil (sans code pour lancer), l'atelier et les réglages dans l'espace parents (avec code), le téléphone comme lecteur de fiches et télécommande.
12. Ordre : idée du soir (5-7 jours), minuteurs (10-15), routines et petits outils (8-10), atelier complet et fiertés (8-10), devoirs et coucher (6-8), après les urgences de A-RETENIR.
