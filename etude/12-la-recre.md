# La Récré dans Petits Savants : les jeux après la classe

*Étude n° 12 · novembre 2026 · rôles : game design pour les 2-9 ans et architecture d'application TV.*

> **En une phrase.** On ajoute à Petits Savants un espace « la récré » qui s'ouvre après les leçons du jour, pour un temps court réglé par les parents et compté dans le temps d'écran. Il accueille d'abord **8 jeux** du prototype de La Récré, choisis parce qu'ils se jouent vraiment à la télécommande et couvrent la TPS au CE2. La fin est douce : l'animal de l'enfant bâille et range les jeux (le rôle de Somnole). Les jeux ne rapportent aucune monnaie, et rien n'y pousse l'enfant à réclamer un achat.

Sources lues pour cette étude :

- **Petits Savants (TV)** : `/home/user/tvapp` (README, `www/js/app.js`, `content/core.js`, `render.js`, `platform.js`, `link.js`, `store.js`, `premium.js`, `parent.js`, `trace.js`, `www/phone/`, `tests/`).
- **La Récré** : `/home/user/larecre_ios/docs/SPEC.md` et le prototype `/home/user/larecre_ios/design/prototype.html` (4 163 lignes : registre `GAMES` l. 1569, art `ART` l. 1141, moteur de questions l. 2253, fin de partie `celebrate` l. 1359 et `endGame` l. 3368, autocollants l. 3984, défi du jour l. 4065). Les outils d'extraction déjà écrits pour les apps natives : `/home/user/larecre_ios/tools/extract-art.mjs` et `extract-content.mjs`.
- **Produit** : `03-gamification-mascottes.md` (Somnole, économie des étincelles) et `A-RETENIR.md`.
- **Décision des fondatrices (novembre 2026), prise en compte ici** : le compagnon de l'enfant redevient **un animal qu'il choisit** (licorne, dinosaure, chat, chien, lapin, panda, renard…) et qu'il habille. **Tilou** reste la mascotte de la marque et le guide (logo, consignes). Les autres Pétillous ne sont plus des compagnons. Dans cette étude, « l'animal de l'enfant » désigne donc le compagnon, et Tilou le guide.

Les numéros de ligne du prototype sont donnés pour la version lue le 8 novembre 2026. Ils peuvent bouger : chercher `function <nom>(` en cas de doute.

---

## 0. Les décisions en bref

| Sujet | Décision |
|---|---|
| Où | Un panneau « La récré » sur le parcours (colonne de droite), un bouton « La récré ! » sur l'écran Bravo quand elle s'ouvre, et un écran « La récré » avec la grille des jeux. Pas de nouvel onglet de matière. |
| Quand | Après **2 leçons différentes** du jour, pour **10 minutes**, une fois par jour (TPS et PS : après 1 leçon, 5 minutes). Réglable par enfant dans l'espace parents, y compris « Fermée » et « Sans leçon avant ». |
| Temps d'écran | Le temps de récré **compte** dans la limite du jour. Si la limite tombe pendant la récré, c'est l'écran de pause habituel. |
| Fin | 2 minutes avant, l'animal de l'enfant bâille une fois (le rôle de Somnole). À la fin, on ne lance plus de partie, on finit celle en cours (3 minutes au plus), puis l'animal range les jeux. Pas de bouton « encore ». |
| Lot 1 (8 jeux) | Memory, Coucou, Labyrinthe, La course (gratuits) ; Ombres, Musique, Formes, Syllabes (Premium). |
| Lot 2 (14 jeux) | L'heure, Compter, Suites, Alphabet, Ranger, À table !, Le verger, Puzzle, Tangram, Pizzeria, Histoires, Ballons, Coloriage, Différences. |
| Hors de la récré | **Habillage** rejoint l'écran « Mon animal » (habiller son animal), au lieu d'être un jeu de la récré. **Trace** n'est pas porté (doublon de la matière Écriture, mais ses tracés guidés servent à améliorer Écriture). |
| Étoiles | Chaque partie montre 1 à 3 étoiles (qualité), comme une leçon. Elles **ne s'ajoutent pas** au compteur d'étoiles à dépenser. Pas d'autocollants ni de défi du jour La Récré en lot 1. |
| Premium | Les jeux Premium sont **invisibles** pour un enfant non abonné : ni cadenas, ni « demande à tes parents ». Les parents les voient dans l'espace parents. |
| Code | Un dossier `www/js/recre/` (cœur, art extrait, données, un fichier par jeu), un fichier d'écrans `www/js/recre.js`, une feuille `www/css/recre.css` préfixée `rc-`. Code porté à la main dans le style de la maison (ES5), art et données **extraits par script** du prototype. |
| Effort | Environ **23 jours-développeur** pour le lot 1 complet avec ses tests, en 4 PR. |

---

## 1. Inventaire des 24 jeux

### 1.1 Légende

**Âges.** Le prototype a 4 tranches (`AGES`, l. 1099). On les relie aux classes de Petits Savants ainsi :

| Tranche La Récré (`ai()`) | Libellé | Classes Petits Savants |
|---|---|---|
| 0 | 2–3 ans | TPS, PS |
| 1 | 4–5 ans | MS, GS |
| 2 | 6–7 ans | CP, CE1 |
| 3 | 8 ans et + | CE2 |

La difficulté de chaque jeu suit la tranche (nombre de paires, de cachettes, taille du labyrinthe, opérations…). Le parent ne choisit pas la tranche : elle découle de la classe du profil.

**Télécommande.** *Oui* : se joue tel quel avec les flèches, OK et éventuellement 1-4. *Avec adaptation* : il faut changer le geste (sélectionner puis poser, curseur, couloirs…). *Non* : le geste n'a pas d'équivalent (tracé libre).

**Téléphone-manette.** Le téléphone sait aujourd'hui afficher : des boutons, une question à réponses numérotées, une croix directionnelle, l'ardoise de tracé d'une lettre, un champ texte et le pavé du code. *Oui* : une de ces vues suffit. *Vue nouvelle* : il faut dessiner l'aire de jeu sur le téléphone.

**Effort de portage**, en réutilisant le code et les SVG du prototype, pour un développeur qui connaît le code de Petits Savants, tests compris : **S** = 1 jour ou moins, **M** = 2 à 4 jours, **L** = une semaine ou plus. L'infrastructure commune (§ 4) est comptée à part.

### 1.2 Ce que fait chaque jeu et ce qu'il apprend

Les liens avec le programme renvoient au cycle 1 (maternelle, programme 2021) et au cycle 2 (CP-CE2, programme 2020 et nouveaux programmes de français et de maths 2024-2025). Les noms d'unités entre crochets sont celles de Petits Savants (`www/js/content/*.js`) qui préparent le jeu.

| # | Jeu (`id`) | Ce qu'il fait | Âges | Ce qu'il apprend |
|---|---|---|---|---|
| 1 | **Memory** (`memory`) | Retourner les cartes deux par deux pour trouver les paires. 6 thèmes (animaux, fruits, la mer, jardin, véhicules, le ciel). 3, 6, 8 ou 10 paires selon l'âge, avec 3 s puis 2,5 s d'aperçu pour les petits. Seul ou de 2 à 4 joueurs à tour de rôle. | 2-9 ans | Mémoire de travail visuo-spatiale, attention, lexique des thèmes. À plusieurs : jeu à règles, tour de rôle (cycle 1 « Apprendre ensemble et vivre ensemble », « Mobiliser le langage : lexique »). |
| 2 | **Coucou** (`coucou`, titre « Coucou caché ») | Un animal est caché derrière un buisson, un carton ou un tonneau : 3, 4, 6 ou 8 cachettes, 4 manches. Les mauvaises cachettes se referment. | 2-5 ans | Permanence de l'objet, attention, mémoire des emplacements déjà ouverts, noms des animaux [mo-pet, fr-tps]. |
| 3 | **Ballons** (`balloons`) | Des ballons montent. Éclater tous les ballons (2-3 ans), ceux d'une couleur (4-5 ans), le nombre demandé de 1 à 10 (6-7 ans), le résultat d'un calcul +, −, × (8 ans et +). 10 ou 12 ballons. | 2-9 ans | Couleurs, reconnaissance des chiffres, calcul mental [fr-tps, ma-gs, ma-cp4, ma-ce2]. |
| 4 | **Le verger** (`orchard`) | Un client commande des fruits (« L'ours voudrait 2 pommes rouges et une poire »). On les cueille dans l'arbre et on les met dans le panier. À 8 ans et + : on encaisse (« Ça fait combien ? », prix en euros). 3 ou 4 clients. | 2-9 ans | Dénombrer une collection, quantité et nombre, couleurs, lexique des fruits. CE2 : somme de prix, monnaie (cycle 2 « Grandeurs et mesures ») [ma-ms, ma-gs, ma-cp5]. |
| 5 | **Habillage** (`dress`) | Habiller un personnage : cheveux, hauts, robes, bas, chaussures, chapeaux, accessoires, costumes ; dé pour une tenue au hasard. | 2-9 ans | Peu de chose : lexique des vêtements et des couleurs, expression. Pas d'objectif. |
| 6 | **À table !** (`feed`) | Donner à chaque animal ce qu'il mange (le lapin et les carottes, le panda et le bambou…). 1 à 3 animaux à la fois, 4 ou 5 manches ; « Beurk ! » si ce n'est pas le bon plat. | 2-9 ans | Le vivant : régimes alimentaires (cycle 1 « Explorer le monde du vivant », cycle 2 « Questionner le monde ») [mo-pet, mo-vie]. |
| 7 | **Histoires** (`histoires`) | Deux histoires de 5 pages (« Le petit poussin », « La fusée de Lila ») : toucher la lune, l'œuf, les buissons… fait avancer le récit. | 2-7 ans | Écouter un récit, chronologie (jour, soir, nuit), lexique (cycle 1 « Écouter de l'écrit et comprendre ») [fr-mat3]. |
| 8 | **Ranger** (`ranger`, titre « Range les jouets ») | Trier des jouets dans le bac de leur couleur (2-5 ans), puis des objets par famille : animaux, véhicules, fruits, la mer (6-7 ans). 3 manches. | 2-7 ans | Trier, classer selon un critère, catégories (cycle 1 « Explorer des formes, des grandeurs, des suites organisées ») [ma-ms2]. |
| 9 | **Pizzeria** (`pizzeria`, titre « La pizzeria ») | Garnir la pizza commandée (« 3 olives, 2 champignons »), la cuire ; à 8 ans et + : encaisser. | 4-9 ans | Dénombrer, quantités, somme de prix au CE2. |
| 10 | **Labyrinthe** (`maze`) | Guider un animal jusqu'à sa maison dans un labyrinthe tiré au hasard. 3 manches, labyrinthe plus grand avec l'âge. | 4-9 ans | Se repérer et se déplacer dans l'espace, anticiper, planifier ; haut, bas, gauche, droite (cycle 1 « Se repérer dans l'espace », cycle 2 « Se situer dans l'espace ») [mo-rep, ma-gs2]. |
| 11 | **Trace** (`trace`, titre « Trace avec le doigt ») | Suivre au doigt un tracé guidé par une étoile qui avance : trait, vague, rond, zigzag (2-3 ans), chiffres de 1 à 9 (4-5 ans), majuscules (6 ans et +). | 2-9 ans | Geste graphique, sens et ordre des tracés (cycle 1 « Commencer à écrire tout seul ») [ec-pet, ec-ms, ec-gs]. |
| 12 | **Puzzle** (`puzzle`) | Reconstituer un des 6 dessins (maison, bateau, fusée, poisson, jardin, château) en 4, 9, 16 ou 25 morceaux. | 2-9 ans | Perception visuelle, relations spatiales, persévérance (cycle 1 « Reproduire un assemblage »). |
| 13 | **Coloriage** (`color`) | Libre : colorier les 6 dessins, gardés dans la galerie. Magique : chaque chiffre a sa couleur ; à 8 ans et +, un calcul par zone. Export PDF. | 2-9 ans | Libre : expression. Magique : associer chiffre et couleur, calcul au CE2. |
| 14 | **Musique** (`music`) | Xylophone ou piano de 8 notes. Libre ; « Répète » (une suite de notes qui s'allonge, façon Simon) ; « Chanson » (Au clair de la lune, Ah ! vous dirai-je, maman : la note à jouer brille). | 2-9 ans | Écouter, mémoire auditive (empan), hauteurs des sons, comptines (cycle 1 « Univers sonores », cycle 2 « Éducation musicale : écouter, chanter »). |
| 15 | **Ombres** (`shadows`) | « À qui est cette ombre ? » : choisir l'image parmi 2 à 4. À 8 ans et + : l'ombre est retournée. 5 questions. | 2-9 ans | Discrimination visuelle des formes, lexique ; rotation mentale à 8 ans et +. |
| 16 | **Suites** (`suites`, titre « Suites logiques ») | « Qu'est-ce qui vient après ? » : suites d'images (AB, AAB, ABC, AABB…) puis suites de nombres (de 2 en 2, de 5 en 5, à rebours). | 2-9 ans | Algorithmes (cycle 1 « suites organisées »), compter de n en n (cycle 2) [ma-tps, ma-cp3]. |
| 17 | **Différences** (`diff`, titre « Les différences ») | Trouver 2 à 5 différences entre deux dessins (une couleur change ; dès 6 ans, un objet disparaît). 2 manches. | 4-9 ans | Attention, comparaison méthodique. |
| 18 | **Tangram** (`tangram`) | Replacer 3 à 6 pièces colorées dans une silhouette (la maison, le bateau, le poisson, le sapin, la fusée, le chat, le robot). | 4-9 ans | Formes géométriques, assemblage, orientation (cycle 2 « Espace et géométrie ») [ma-gs3, ma-cp6, ma-geo]. |
| 19 | **Syllabes** (`syllabes`, titre « Les syllabes ») | Reconstruire le mot illustré avec ses syllabes (lapin = la + pin), au milieu d'intrus. 2 syllabes à 6-7 ans, jusqu'à 3 à 8 ans et +. 5 mots. | 6-9 ans | Segmentation syllabique, combinatoire, lecture (CP « Identifier des mots écrits ») [fr-cp1, fr-cp3, fr-mat2]. |
| 20 | **L'heure** (`heure`) | Régler l'horloge sur l'heure affichée : heures pleines, puis quarts d'heure à 8 ans et +. 5 heures. | 6-9 ans | Lire l'heure (cycle 2 « Grandeurs et mesures : durées ») [ma-ce1b, ma-ce1e, ma-ce2e]. |
| 21 | **La course** (`course`) | Course entre la voiture rouge de l'enfant et la voiture bleue : chaque bonne réponse fait avancer. Additions et soustractions (6-7 ans), tables de multiplication (8 ans et +). 10 bonnes réponses. | 6-9 ans | Calcul mental, mémorisation des faits numériques et des tables [ma-cp4, ma-ce1, ma-ce2]. |
| 22 | **Alphabet** (`abc`) | Découvrir les 26 lettres (« A comme abeille »), puis un quiz : même lettre (2-3 ans), trouve la lettre (4-5 ans), par quelle lettre commence ce mot (6 ans et +, en minuscules à 8 ans et +). | 2-9 ans | Nom des lettres, majuscules et minuscules, initiale d'un mot (principe alphabétique en GS) [fr-ms, fr-gs2, fr-gs3]. |
| 23 | **Compter** (`count`) | « Combien de poissons ? » dans un vrai décor (1-3, 1-6, 3-10) ; on peut toucher les objets pour les numéroter. À 8 ans et + : a + b avec deux groupes. | 2-9 ans | Dénombrer (comptage un à un, cardinal), additionner (cycle 1 « Construire les premiers outils pour structurer sa pensée ») [ma-tps2, ma-ms, ma-gs]. |
| 24 | **Formes** (`shapes`) | Boîte à formes : ranger chaque forme (rond, carré, triangle, étoile, cœur, losange) dans son trou. Trou de la même couleur pour les petits, forme seule à 6-7 ans, forme et couleur à 8 ans et +. 3 manches. | 2-9 ans | Reconnaître et nommer les formes (cycle 1 « Explorer des formes »), couleurs ; double critère à 8 ans et + [ma-tps, ma-gs3]. |

### 1.3 Jouabilité, effort et recommandation

| # | Jeu | Télécommande | Téléphone-manette | Effort | Recommandation |
|---|---|---|---|---|---|
| 1 | Memory | **Oui** : grille de cartes, flèches + OK. Le jeu à plusieurs se joue en se passant la télécommande. | Oui (croix) | S | **Lot 1, gratuit** |
| 2 | Coucou | **Oui** : OK sur la cachette, touches 1-4 tant qu'il y a 4 cachettes ou moins. | Oui (croix) | S | **Lot 1, gratuit** |
| 3 | Ballons | **Avec adaptation** : des cibles qui bougent ne se prennent pas au focus. Il faut 4 couloirs fixes (touches 1-4 ou flèches + OK sous le couloir) et une vitesse réduite. | Vue nouvelle (ballons à toucher) | M | Lot 2 (fin) |
| 4 | Le verger | **Avec adaptation** : fruits de l'arbre focusables, OK les envoie au panier (le geste « toucher » existe déjà : `flyTo`). Paiement : touches 1-3. | Oui (croix) | M | Lot 2 |
| 5 | Habillage | Avec adaptation (onglets + grille) | Oui | M à L | **Vers « Mon animal »**, hors récré (§ 1.4) |
| 6 | À table ! | **Avec adaptation** : focus sur le plat ; OK le donne s'il n'y a qu'un animal, sinon touches 1-3 pour l'animal. | Oui (croix) | S | Lot 2 |
| 7 | Histoires | **Avec adaptation** : la cible de chaque page devient le bouton focusable, OK « touche ». | Oui (boutons) | M | Lot 2 (avec voix enregistrée) |
| 8 | Ranger | **Avec adaptation légère** : focus sur un jouet, touches 1-4 = le bac (2 à 4 bacs), ou OK puis OK sur le bac. | Oui (boutons) | S | Lot 2 |
| 9 | Pizzeria | **Avec adaptation** : bols focusables, OK pose une garniture. | Oui (croix) | S | Lot 2 (après Le verger, code commun) |
| 10 | Labyrinthe | **Oui, idéal** : les flèches déplacent l'animal case par case. | Oui (croix) | S | **Lot 1, gratuit** |
| 11 | Trace | **Non** (pointeur seulement, possible avec la Magic Remote LG) | Oui (ardoise, à adapter aux chemins) | M | **Ne pas porter** (§ 1.4) |
| 12 | Puzzle | **Avec adaptation** : le mode « toucher le morceau puis la case » existe déjà. 25 morceaux, c'est trop long à la télécommande : 4, 9, 16 au plus. | Oui (croix) | M | Lot 2 |
| 13 | Coloriage | Avec adaptation, mais la navigation entre zones imbriquées est peu lisible. | **Vue nouvelle** : le meilleur usage du téléphone (colorier au doigt, le dessin se remplit sur la télé). | L | Lot 2 (fin, avec le téléphone) |
| 14 | Musique | **Oui** : flèches + OK sur les lames, touches **1 à 8** = do, ré, mi… do. | Oui (8 tuiles de couleur : le téléphone devient xylophone) | M | **Lot 1, Premium** |
| 15 | Ombres | **Oui** : QCM, flèches + OK ou touches 1-4. | Oui (question) | S | **Lot 1, Premium** |
| 16 | Suites | **Oui** (QCM) | Oui (question) | S | Lot 2 |
| 17 | Différences | **Avec adaptation** : il n'y a pas de cible à focaliser. Il faut un curseur sur une grille déplacé par les flèches (rendre les zones focusables donnerait la réponse). | Vue nouvelle (toucher le dessin) | M | Lot 2 (fin) |
| 18 | Tangram | **Avec adaptation** : choisir la pièce, puis l'emplacement parmi les silhouettes vides. | Oui (croix) | M | Lot 2 |
| 19 | Syllabes | **Oui** : tuiles, flèches + OK (pose dans la case suivante), ou touches 1-6. | Oui (question) | S | **Lot 1, Premium** |
| 20 | L'heure | **Avec adaptation** : ◀ ▶ tournent l'aiguille des heures, ▲ ▼ celle des minutes, OK valide. | Oui (croix) | S | Lot 2 (en tête) |
| 21 | La course | **Oui** : 3 réponses, touches 1-3 ou flèches + OK ; adversaire un peu ralenti. | Oui (question : le téléphone sert de buzzer) | S | **Lot 1, gratuit** |
| 22 | Alphabet | **Oui** : grille des 26 lettres, puis QCM. | Oui | S | Lot 2 |
| 23 | Compter | **Oui** : QCM ; les objets à compter sont focusables (OK les numérote). | Oui (question) | S | Lot 2 |
| 24 | Formes | **Avec adaptation** : choisir la pièce (OK), puis le trou (OK). | Oui (croix) | S | **Lot 1, Premium** |

Ordre conseillé pour le lot 2 :

1. **Lot 2a, rapide (S)** : L'heure, Compter, Suites, Alphabet, Ranger, À table !. Ils réutilisent le moteur de questions et le « choisir puis poser » du lot 1.
2. **Lot 2b (M)** : Le verger, Puzzle, Tangram, Pizzeria, Histoires (à condition d'avoir la voix enregistrée).
3. **Lot 2c (vues téléphone nouvelles ou temps réel)** : Ballons, Coloriage, Différences.

### 1.4 Les deux jeux qui ne vont pas dans la récré

- **Habillage → écran « Mon animal ».** L'enfant choisit son animal et l'habille : c'est le cœur de la gamification (écran « Mon animal », `screens.rewards`, cadeaux achetés avec les étoiles des leçons). Un second personnage, humain, avec sa propre garde-robe gratuite, brouillerait « qui est mon compagnon » et viderait de son sens la garde-robe gagnée en apprenant. On ne le met donc pas dans la récré, mais **son interface rejoint « Mon animal »** : les onglets par catégorie (têtes, hauts, chaussures, chapeaux, accessoires, costumes), la grille d'objets et le dé « tenue au hasard » (`dressGame`, `D_TABS`, l. 3063-3249), pour essayer et porter les objets **déjà possédés**. Les dessins de chapeaux et d'accessoires (`D_HATS`, `D_ACCS`) peuvent enrichir le catalogue, à condition de les recaler sur les points d'accroche des animaux (le personnage du prototype est un enfant humain, l'animal est en 3D dans `pet3d.js`). Effort M à L, dans le chantier « Mon animal », pas dans celui de la récré.
- **Trace.** Il fait doublon avec la matière Écriture, qui trace déjà au téléphone. Mais son idée est meilleure sur un point : une **étoile avance le long du tracé** et impose le **sens et l'ordre des traits** (`TRACE_SETS`, l. 3483), alors qu'Écriture ne vérifie que la couverture de la lettre (`trace.js`, `score`). À reprendre dans Écriture, hors de cette étude : récupérer les chemins de `TRACE_SETS` (traits, chiffres, 13 majuscules) et le suivi `progress()` (l. 3519).

### 1.5 Ce qu'on a relevé dans le prototype

À corriger pendant le portage :

1. **La voix est coupée.** `function speak(){}` (l. 1283) est vide : aucune consigne n'est dite dans le prototype. Les appels `speak(…)` restent dans le code et indiquent quoi dire et quand. Dans Petits Savants, les non-lecteurs ont besoin de la voix : on les branche tous sur `PS_PLATFORM.Speech.say`.
2. **Trois coupures de syllabes ne sont pas celles de l'école** (`SYLL`, l. 3679) : `ca·ro·tte`, `pa·pi·llon`, `che·ni·lle`. L'école coupe entre deux consonnes doubles : **ca·rot·te, pa·pil·lon, che·nil·le**. Le prototype coupe pourtant bien `bal·lon` et `pous·sin`. À corriger ici, et à signaler à l'équipe La Récré.
3. **Une mise en page pensée pour la tablette** : unités `vw`, `vh` et `clamp()` dans le CSS, calculs `ResizeObserver` et `fitGrid()`. Sur la télé, la scène fait toujours 1920 × 1080 et elle est **mise à l'échelle par une transformation CSS** (`platform.js`, `fit()`). Or `vw` et `vh` se rapportent à la fenêtre réelle, pas à la scène : sur une Mi Box, la page fait 960 × 540 px CSS, et tout serait deux fois trop petit. **Tout doit passer en px de la scène.**
4. **Les polices viennent de Google Fonts** (l. 7-9). Sur la télé il n'y a ni appel réseau ni police distante (hors ligne, vie privée) : voir § 5.
5. **Des noms génériques qui entrent en collision** avec Petits Savants : l'ID `#stage` (le même nom sert à la scène des deux apps), les classes `.card`, `.opt`, `.tile`, `.board`, `.bar`, `.chip`, `.status`, et la variable CSS `--sky` (un bleu vif dans La Récré, le fond bleu clair dans Petits Savants). Tout le CSS porté est préfixé `rc-` et les couleurs passent en `--lr-*`.
6. **Des minuteurs pas toujours rangés** : `setTimeout` bruts pour les cœurs des histoires, `setInterval` dans La course (rangé par `onCleanup`), boucle `requestAnimationFrame` des ballons arrêtée par un drapeau. Dans le portage, tout minuteur passe par le contexte du jeu (§ 4.3).
7. **Espace avant la ponctuation.** La plupart des textes ont déjà l'espace fine insécable (U+202F), mais pas tous (« Qu'est-ce qui vient après ? » dans `GAMES`, les légendes des histoires). Dans Petits Savants, tout texte affiché passe par `R.esc()`, qui pose l'espace fine. Il faut donc ne jamais écrire de texte brut dans `innerHTML`.
8. **Le titre d'un jeu change** entre la tuile et l'écran : Coucou et « Coucou caché », Ranger et « Range les jouets », Syllabes et « Les syllabes », etc. On garde les deux, comme le prototype : le nom court sur la tuile, le titre long dans la barre du jeu.
9. **Code moderne** (`=>`, `const`, gabarits, `...`, `Set`, `flatMap`). Petits Savants est écrit en ES5 (`var`, `function`), pour les vieux navigateurs de télé et les WebView de Fire TV. On porte dans le style de la maison et on évite `flatMap` (Chrome 69+).

---

## 2. Le lot 1 : 8 jeux

### 2.1 Pourquoi ces huit

Critères : (1) jouable **entièrement** avec les flèches et OK, puisque la petite Smart Remote Samsung n'a ni chiffres ni touches de couleur ; (2) au moins 2 jeux gratuits et 5 jeux en tout par tranche d'âge ; (3) des mécaniques **différentes du QCM des leçons** (mémoire, cachettes, déplacement, musique, manipulation), pour que la récré ne ressemble pas à une leçon de plus ; (4) un portage S ou M.

| Jeu | 2-3 ans (TPS, PS) | 4-5 ans (MS, GS) | 6-7 ans (CP, CE1) | 8 ans et + (CE2) | Accès |
|---|---|---|---|---|---|
| Memory | 3 paires, aperçu 3 s | 6 paires, aperçu 2,5 s | 8 paires | 10 paires | Gratuit |
| Coucou | 3 cachettes | 4 cachettes | — | — | Gratuit |
| Labyrinthe | — | 7 × 4 cases | 10 × 5 | 12 × 6 | Gratuit |
| La course | — | — | + et − jusqu'à 20 | tables × 2 à × 9 | Gratuit |
| Ombres | 2 choix | 3 choix | 4 choix | 4 choix, ombre retournée | Premium |
| Musique | Simon sur 4 notes | Simon sur 6 notes | 8 notes | 8 notes | Premium |
| Formes | 3 formes, trous colorés | 4 formes | 5 formes, trous gris | 6 pièces, forme + couleur | Premium |
| Syllabes | — | — | 2 syllabes | jusqu'à 3 syllabes | Premium |
| **Total gratuit / total** | 2 / 5 | 3 / 7 | 3 / 7 | 3 / 7 | |

### 2.2 Conventions communes aux 8 jeux

**L'écran de jeu à 1920 × 1080.**

- **Barre du haut** (hauteur 110 px) : à gauche, le bouton carré **Quitter** (icône croix, comme `lessonTop`, `data-act="rcQuit"`) ; au centre, la pastille du jeu (couleur du jeu, titre long, puis « Pour les 4–5 ans » en dessous, copie `setTop` du prototype) ; à droite, le bouton **Recommencer** (icône `restart`, `aria-label` « Recommencer la partie » ou « Recommencer » comme le prototype), puis le **temps de récré** (§ 3.4).
- **Aire de jeu** : `<div class="rc-play">` de 1920 × 970, sous la barre. Le jeu n'écrit que là.
- **Pied** : les aides de touches de Petits Savants (`keyHint`), par exemple « ◀ ▶ ▲ ▼ Se déplacer », « OK Retourner », « Retour Quitter ».
- **Lisibilité à 3 mètres** : aucun texte sous 28 px, consignes à 44 px ou plus, cibles d'au moins 150 × 150 px, anneau de focus de la maison (`--focus` : jaune puis encre).

**Touches** (règles valables pour tous les jeux) :

| Touche | Effet |
|---|---|
| ◀ ▶ ▲ ▼ | Déplacent le focus (navigation spatiale de `platform.js`), sauf dans le Labyrinthe où elles déplacent l'animal. |
| OK | Active l'élément focalisé (`Focus.current.click()`), donc le même chemin qu'un clic au pointeur LG ou qu'un appui sur le téléphone. |
| 1-4 (ou rouge, vert, jaune, bleu) | Raccourci quand le jeu affiche des numéros (réponses, cachettes). Jamais indispensable. |
| 5-9 | Musique (lames 5 à 8) et Syllabes (tuiles 5 et 6). |
| Retour | Dans cet ordre : (1) ferme la fenêtre ouverte (« Quitter la partie ? », fin de partie) ; (2) annule la sélection en cours (Formes) ; (3) si la partie est commencée, demande « Quitter la partie ? » ; (4) sinon, revient à l'écran La récré. |

**Fenêtres communes** (copie exacte du prototype, l. 1031-1055) :

- **Quitter la partie ?** : boutons « Non, je joue » (focalisé par défaut) et « Oui, quitter ». Affichée seulement si la partie est commencée (`App.dirty` dans le prototype).
- **Recommencer la partie ?** : « Oui, recommencer », même règle.
- **Fin de partie** : 1 à 3 étoiles (dessin `ICON.star` du prototype), titre (« Génial ! », « Bravo ! », « Bien joué ! »), texte du jeu, boutons « Rejouer » (focalisé) et « Autres jeux » (retour à la grille de la récré). Memory remplace « Autres jeux » par « Changer de thème ». Confettis de Petits Savants (`confetti()` d'`app.js`), pas le canevas du prototype.
- **Bandeau de tour** (Memory à plusieurs) : « À toi, Renard ! » pendant 1,5 s.

**Étoiles** (règle `endGame`, l. 3368) : 0 erreur = 3 étoiles, 1 ou 2 erreurs = 2, plus = 1, avec parfois un minimum de 2 étoiles pour les 2-3 ans. Une erreur ne bloque jamais la partie.

**Voix.** Chaque consigne est dite au début de la manche et redite par le bouton haut-parleur. Chaque élément focalisé qui porte un mot (une réponse d'Ombres, une forme) le dit au bout de 250 ms (`data-speak`, comme les réponses des leçons). On ne fait **jamais** dire une syllabe isolée à la synthèse vocale : elle les lit mal (A-RETENIR, point 4).

**Téléphone.** Par défaut, la croix directionnelle et un bouton « Quitter ». Les vues propres à un jeu sont indiquées dans sa fiche.

### 2.3 Memory

**Portage** : l. 1720-1897 (`MEM_THEMES`, `MEM_LEVELS`, `memorySetup`, `memoryStart`, `memCard`, `memEnd`). Effort **S**.

**Écrans.**

1. **Réglages** (`memorySetup`) : « 1 Choisis un thème », 6 tuiles de thème en une rangée (260 × 240 px, éventail de 3 cartes `fanSVG`, coche si choisi) ; « 2 Combien de joueurs ? », 4 options (« Tout seul », « À 2 », « À 3 », « À 4 », avec les avatars Renard, Grenouille, Lapin, Hibou) ; bouton vert « C'est parti ! ». Le thème et le nombre de joueurs choisis la dernière fois sont gardés (préférences de récré de l'enfant). **Le focus part sur « C'est parti ! »** : un enfant qui veut juste rejouer appuie sur OK.
2. **Plateau** : colonne de gauche (x 60 à 460) avec les pastilles des joueurs (ou « 3 / 8 paires » seul) et la ligne d'état (« Regarde bien les cartes… », « À toi de jouer ! Trouve les paires. », « Pas pareilles… Essaie encore ! ») ; plateau centré dans x 480 à 1860, y 210 à 1050. Grilles fixes à la place de `memLayout()` : 6 cartes en 3 × 2 (260 × 325 px), 12 en 4 × 3 (200 × 250), 16 en 4 × 4 (160 × 195), 20 en 5 × 4 (160 × 195). On garde une grille presque carrée : la mémoire des positions en a besoin.
3. **Bandeau de tour**, à plusieurs.
4. **Fin** : seul, étoiles selon coups ÷ paires (≤ 1,6 : 3 ; ≤ 2,3 : 2 ; sinon 1 ; au moins 2 pour les 2-3 ans), « Tu as trouvé les 8 paires en 12 coups. », « Nouveau record ! » ou « Ton record : 10 coups » (record par thème et par tranche) ; à plusieurs, couronne et classement, **sans étoiles** (comme le prototype).

**Contrôles.**

| Touche | Effet |
|---|---|
| Flèches | Carte suivante dans la grille. Les cartes trouvées **restent focusables** (`aria-disabled`, pas `disabled`), sinon la navigation saute des trous et la grille devient illisible. |
| OK | Retourne la carte. Sans effet sur une carte déjà retournée ou trouvée, ni pendant l'aperçu et la vérification (`M.lock`). |
| 1-4 | Rien. |

À plusieurs, on se passe la télécommande ; le bandeau dit à qui c'est le tour. C'est un des usages les plus forts de la télé : parent et enfant jouent ensemble (§ 3.8).

**Voix** : « Regarde bien ! » pendant l'aperçu, le nom de la paire trouvée (`d.s`, « le chat »), « À toi, Grenouille ! ».

**Téléphone** : croix directionnelle (les touches vont au jeu comme celles de la télécommande).

### 2.4 Coucou

**Portage** : l. 3385-3420 (`HIDERS`, `coucou`), caches `COVER` l. 3322. Effort **S**.

**Écran unique** : en haut (y 130 à 300), « Trouve » et le dessin de l'animal (160 px) avec un bouton haut-parleur ; dessous, le pré (`sc-deco`) sur toute la largeur et les cachettes : 3 en ligne (340 px), 4 en ligne (300 px), 6 en 3 × 2 (260 px), 8 en 4 × 2 (240 px). Buisson, carton et tonneau alternent. Un petit numéro (1 à 4) est posé sur chaque cachette quand il y en a 4 ou moins. Rangée de 4 points de progression.

**Contrôles.**

| Touche | Effet |
|---|---|
| Flèches | D'une cachette à l'autre. |
| OK | Ouvre la cachette. Si c'est la bonne : étincelles, point allumé, manche suivante après 1,5 s, focus sur la première cachette. Sinon, elle se referme après 1,1 s (une erreur est comptée) et le focus reste. |
| 1-4 | Ouvre la cachette n (4 cachettes au plus). |

**Voix** (nouvelle, absente du prototype) : « Trouve le lapin ! » en début de manche (nom tiré de `ART[k].n`), « Coucou ! » quand on le trouve.

**Fin** : `endGame(erreurs, "Tu as trouvé tous les animaux cachés.", 2 étoiles au moins pour les 2-3 ans)`.

**Téléphone** : croix directionnelle.

### 2.5 Ombres (et le moteur de questions)

**Portage** : moteur `quiz()` l. 2253-2309, `SHADOWS` et `shadowRound` l. 2885-2897. Le moteur sert ensuite à Compter, Suites et Alphabet (lot 2). Effort **S** (plus 1 jour pour le moteur).

**Écran** : rangée de 5 points ; consigne « À qui est cette ombre ? » (« À qui est cette ombre retournée ? » à 8 ans et +) à 52 px, avec haut-parleur ; scène « théâtre » (projecteur, 520 × 520 px, y 220 à 740) avec la silhouette ; rangée de réponses (y 790 à 1030) : 2 à 4 boutons de 300 × 220 px, dessin de 170 px et numéro 1-4.

**Contrôles.**

| Touche | Effet |
|---|---|
| ◀ ▶ | Réponse précédente ou suivante (chaque réponse dit son nom : « le lapin »). |
| OK, 1-4 | Répond. Juste : la silhouette prend ses couleurs (`reveal`), « Bravo ! », question suivante après 1,7 s. Faux : la réponse se grise, « Essaie encore ! », le focus passe à la première réponse encore possible. |
| ▲ | Le haut-parleur (redire la consigne). |

**Fin** : 5 questions, règle `endGame`, texte « Tu as répondu aux 5 questions sans te tromper. » ou « …, avec 2 petites erreurs. ».

**Téléphone** : la vue « question » avec les 4 dessins (il faut charger l'art de la récré dans la page téléphone, § 4.6).

### 2.6 Musique

**Portage** : l. 2773-2882 (`NOTES`, `SHARPS`, `SONGS`, `instrNote`, `music`, `xyloHTML`, `pianoHTML`). Effort **M**.

**Écran** : barre (y 130 à 230) avec l'instrument à gauche (Xylophone, Piano) et la façon de jouer au centre (« Libre », « Répète », « Chanson ») ; en mode Chanson, les pastilles des 2 chansons (y 250) ; une ligne de message (y 310 : « Joue la musique que tu veux », « Écoute et regarde… », « À toi ! », « Touche ce qui brille ») ; le xylophone (y 380 à 1000) : 8 lames de 170 px de large, hauteurs de 96 % à 54 %, couleurs rouge à rose, nom de la note et chiffre 1 à 8 sous chaque lame. Le piano : 8 touches blanches et 5 noires.

**Contrôles.**

| Touche | Effet |
|---|---|
| ◀ ▶ | Lame voisine. |
| OK | Joue la lame focalisée (la note s'envole). Sur le piano, les touches noires sont au-dessus des blanches : ▲ depuis une blanche. |
| 1 à 8 | Jouent directement do, ré, mi, fa, sol, la, si, do. |
| ▲ depuis les lames | Remonte vers les choix de mode et d'instrument (OK change de mode). |

- **Répète** : la suite (1 à 3 notes au départ, prises parmi 4, 6 ou 8 lames selon l'âge) s'allume et sonne ; pendant ce temps les touches ne comptent pas. Puis « À toi ! » : l'enfant la rejoue. Juste : « Bravo ! Une note de plus… ». Faux : « Oups… Regarde encore. » et la suite est rejouée. Objectif : 3, 4, 5 ou 6 suites selon l'âge.
- **Chanson** : la lame à jouer brille. Pour les 2-3 ans, **le focus suit tout seul la lame qui brille** : appuyer sur OK fait jouer la chanson, ce qui donne au tout-petit la joie de « jouer » sans chercher. Dès 4 ans, l'enfant va lui-même à la bonne lame ou tape son chiffre.
- **Libre** : pas de fin, pas d'étoiles ; le temps de récré s'applique.

**Fin** : Répète, règle `endGame` (« Tu as répété 4 mélodies. ») ; Chanson, 3 étoiles (« Tu as joué « Au clair de la lune ». »), puis la chanson rejouée en entier.

**Son** : si le parent a coupé les sons (`Sfx.enabled === false`), le jeu **n'apparaît pas** dans la récré, et l'espace parents dit pourquoi (« Son coupé »).

**Téléphone** : 8 tuiles de couleur (vue `buttons` existante, tuiles `tiny` avec `swatch`), une par note. La note sonne sur la télé, le téléphone vibre. Le téléphone devient le xylophone.

### 2.7 Formes

**Portage** : l. 2690-2771 (`shapeGeo`, `shapesGame`), `SHAPES` et `SCOLORS` l. 1542-1567. Effort **S** (1,5 jour).

**Écran** : rangée de 3 points ; consigne « Range chaque forme dans son trou » (y 170) ; plateau des trous (y 240 à 640) : 3 à 6 trous de 220 px en ligne, en pointillés (teintés de la couleur de la pièce pour les petits, gris à 6-7 ans) ; plateau des pièces (y 700 à 1000) : 3 à 6 pièces de 180 px.

**Contrôles** (geste en deux temps, qui reprend le « toucher la pièce puis le trou » du prototype) :

| Touche | Effet |
|---|---|
| Flèches dans les pièces | Pièce suivante (elle dit son nom : « le triangle rouge », `shapeLabel`). |
| OK sur une pièce | La soulève (`sel`) ; **le focus saute au premier trou vide**. Les trous ne sont focusables que lorsqu'une pièce est soulevée. |
| Flèches dans les trous | Trou suivant. |
| OK sur un trou | Bonne forme : la pièce s'y range, « clac », le focus revient à la première pièce restante. Mauvaise : le trou tremble, une erreur est comptée, la pièce redescend et reprend le focus. |
| ▼ depuis les trous | Revient aux pièces ; OK sur une autre pièce change de pièce soulevée. |
| Retour | Avec une pièce soulevée : la repose (et ne quitte pas). |

Quand la dernière pièce est rangée : accord de victoire, point allumé, manche suivante après 1,3 s.

**Fin** : règle `endGame`, « Toutes les formes sont bien rangées. ».

**Téléphone** : croix directionnelle.

### 2.8 Labyrinthe

**Portage** : l. 3618-3677 (`makeMaze`, `labyrinthe`). Effort **S**.

**Écran** : rangée de 3 points ; « Guide-le jusqu'à sa maison » (y 170) ; le labyrinthe dans un cadre de 1700 × 820 px (x 110 à 1810, y 230 à 1050). Le prototype tirait des labyrinthes carrés ou en hauteur (pour un téléphone en portrait) ; à la télé on les veut **en largeur** : 7 × 4 cases à 4-5 ans (cases de 205 px), 10 × 5 à 6-7 ans (164 px), 12 × 6 à 8 ans et + (136 px). L'animal part en haut à gauche, la maison est en bas à droite, la trace jaune suit le chemin. Les animaux changent à chaque manche (lapin, poussin, souris, chat, grenouille, panda).

**Contrôles.**

| Touche | Effet |
|---|---|
| Flèches | L'animal avance d'une case si aucun mur ne bloque. Touche maintenue : il continue, au plus une case toutes les 110 ms (la transition dure 140 ms). Contre un mur : petit « bonk » grave et l'animal tressaille, **sans pénalité**. |
| OK | Redit la consigne. |
| Pointeur LG | On garde le guidage au doigt du prototype (`toward()`), qui passe par `getScreenCTM()` et suit donc la mise à l'échelle de la scène. |

**Fin** : `endGame(0, "Tous les animaux sont rentrés à la maison.")`, donc 3 étoiles. Le labyrinthe se réussit toujours ; c'est voulu.

**Téléphone** : croix directionnelle. Les touches du téléphone doivent arriver au jeu et non à la navigation du focus (§ 4.4).

### 2.9 Syllabes

**Portage** : l. 3679-3714 (`SYLL`, `syllabes`), avec la **correction des coupures** (§ 1.5). Effort **S**.

**Écran** : rangée de 5 points ; le dessin du mot (300 px, y 180 à 480) avec un haut-parleur ; les cases (y 520 à 680) : 2 ou 3 cases de 260 × 150 px ; les tuiles (y 760 à 960) : 4 à 6 tuiles de 220 × 150 px, syllabe en 72 px, numéro 1 à 6 dans le coin.

**Contrôles.**

| Touche | Effet |
|---|---|
| ◀ ▶ | Tuile voisine. |
| OK, ou 1 à 6 | Pose la tuile dans **la prochaine case vide** (le `onTap` du prototype : `tryPut(b, slot[fill])`). Juste : elle s'y range. Fausse : elle tremble et revient, une erreur est comptée. |
| ▲ | Haut-parleur : redit le mot. |

Quand le mot est complet, il est dit en entier (« lapin ! »), puis mot suivant après 1,5 s.

**Voix** : le mot entier au début de chaque manche et à la fin. **Jamais les syllabes seules**, tant qu'elles ne sont pas enregistrées (02, voix).

**Fin** : `endGame(erreurs, "Tu as reconstruit tous les mots.")`.

**Téléphone** : vue « question » dont les réponses sont les tuiles (étiquettes texte).

### 2.10 La course

**Portage** : l. 3781-3813 (`course`). Effort **S**.

**Écran** : la piste (y 140 à 440), deux couloirs : en haut la voiture rouge de l'enfant, en bas la voiture bleue, damier d'arrivée à droite ; le calcul (y 480 à 600) en 96 px, « 7 + 5 = ? » ; 3 réponses (y 660 à 900) de 360 × 220 px avec les numéros 1 à 3.

**Contrôles.**

| Touche | Effet |
|---|---|
| 1-3 (ou rouge, vert, jaune) | Répond directement : c'est le plus rapide. |
| ◀ ▶ puis OK | Répond aussi. Après une bonne réponse, le focus reste à la même place (la bonne réponse est tirée au hasard, donc pas d'avantage). |

Une bonne réponse fait avancer la voiture rouge (10 pour gagner) ; une mauvaise grise le bouton et compte une erreur. La voiture bleue avance seule. Dans le prototype, elle met 5,5 s par étape (6,5 s en tables). À la télécommande, on la ralentit : **7 s par étape à 6-7 ans, 8 s à 8 ans et +**, et elle ne part qu'1,5 s après l'affichage du premier calcul. Elle s'arrête quand la page est cachée et quand une fenêtre est ouverte.

**Voix** : le calcul est lu (« 7 plus 5 ») pour les lecteurs débutants. On écrit le texte à dire (« moins », « fois ») au lieu de laisser la synthèse lire `−` et `×`.

**Fin** : gagné, « Tu as gagné ! », 3 étoiles avec 1 erreur ou moins, sinon 2, « Ta voiture rouge passe la ligne d'arrivée en premier. » ; perdu, « Bien joué ! », 1 étoile, « La voiture bleue a gagné cette fois. Revanche ? ».

**Téléphone** : vue « question » avec les 3 nombres. Le téléphone sert de buzzer.

---

## 3. Le fonctionnement de la Récré

### 3.1 Où elle apparaît

1. **Sur le parcours** (`screens.home`), dans la colonne de droite sous « Quête du jour », un panneau « La récré » à trois états :
   - **en attente** (non focusable) : une cloche, « La récré » et « Après 2 leçons », avec 2 points qui s'allument (1 sur 2 après la première leçon) ;
   - **ouverte** (bouton focusable, `data-act="recre"`) : « La récré est ouverte ! » et « 10 min » ;
   - **finie** : la lune, « Récré finie pour aujourd'hui ».

   Si la colonne déborde, le panneau « Encore 12 min » et celui de la récré se partagent une ligne (deux demi-panneaux). La barre du haut reste telle quelle (matières, étoiles, semaine).
2. **Sur l'écran Bravo** (`screens.reward`) de la leçon qui ouvre la récré : un bouton jaune « La récré ! » avec une cloche, **focalisé par défaut** (`data-autofocus`), à côté de « Continuer ». La cloche de l'école sonne et Tilou, le guide, dit : « Driiing ! C'est l'heure de la récré ! ». Une pause après deux leçons est bonne pour la suite (§ 3.8) : la mettre en avant n'a rien d'une incitation contraire à l'intérêt de l'enfant.
3. **L'écran « La récré »** (`screens.recre`) : titre « La récré », sous-titre « Choisis un jeu », l'animal de l'enfant à gauche avec une bulle, le temps restant à droite, et la grille des jeux de l'enfant : 4 tuiles par rangée (380 × 340 px, dessin `gameArt` du prototype, nom court, description du prototype comme « Trouve les paires »). Il y a 7 tuiles au plus en lot 1. Retour ramène au parcours.
   - **Le jeu conseillé.** Si une leçon du jour est liée à un jeu (champ `links` du registre, par exemple Syllabes après une leçon `fr-cp3`), sa tuile vient en premier, porte la pastille « Après ta leçon » et reçoit le focus. C'est le « quand ils ont appris, ils peuvent jouer » des fondateurs, sous forme de pont entre la leçon et le jeu, sans récompense en plus.
4. **Au téléphone** : sur le parcours, un bouton « La récré » quand elle est ouverte ; dans la récré, la liste des jeux.

On ne crée **pas d'onglet** à côté des matières : la récré n'est pas une matière, et un onglet toujours visible ferait de la récré la porte d'entrée de l'app.

### 3.2 Quand l'enfant y a droit

**Règle par défaut** : la récré s'ouvre quand l'enfant a terminé **2 leçons différentes** dans la journée. Elle dure **10 minutes**, **une fois par jour**.

- **« Différentes »** : on compte les identifiants de leçons terminées aujourd'hui (nouveau champ `ids` du jour). Rejouer deux fois la même leçon ne compte qu'une fois. Une révision ou la leçon cadeau comptent. Un enfant sans Premium qui a fini ses leçons gratuites peut donc toujours ouvrir la récré en rejouant des leçons différentes.
- **Aucun seuil de réussite** : une leçon avec des « Presque ! » compte autant qu'une leçon parfaite. La récré suit un rythme, ce n'est pas une note.
- **Une fois par jour** : elle ne se recharge pas avec 2 leçons de plus. Sinon les leçons deviendraient une monnaie pour acheter du jeu, et l'enfant les bâclerait (03 § 1, problème 5 de la quête « Termine 3 leçons »).
- **Réglages par défaut selon la classe** :

| Classe | Par défaut | Pourquoi |
|---|---|---|
| TPS, PS | Après 1 leçon · 5 min | Les recommandations françaises déconseillent les écrans avant 3 ans, et l'OMS limite les écrans à 1 h par jour, « moins c'est mieux », de 2 à 4 ans. On garde une séance courte. |
| MS à CE2 | Après 2 leçons · 10 min | Environ 8 à 10 min de leçons puis 10 min de jeu : une séance de 20 min, dans la limite de 30 min déjà proposée par défaut. |

- **Réglages dans l'espace parents** (fiche de l'enfant, une ligne « La récré » qui défile comme « Temps par jour », `cycleLimit`) :

| Réglage | Après | Durée |
|---|---|---|
| Fermée | — | — |
| Après 1 leçon · 5 min | 1 | 5 min |
| Après 2 leçons · 10 min | 2 | 10 min |
| Après 2 leçons · 15 min | 2 | 15 min |
| Après 3 leçons · 15 min | 3 | 15 min |
| Sans leçon avant · 10 min | 0 | 10 min |

- **Compté dans le temps d'écran** : chaque seconde de récré (écran La récré et jeux) s'ajoute aux secondes du jour, comme une leçon, **et** au compteur de récré. La récré ne dure jamais plus que ce qui reste de la limite du jour. Si la limite est atteinte pendant la récré, c'est la pause habituelle (« C'est l'heure de la pause »), avec la même règle douce que la fin de récré.
- **Formulation.** On présente la récré comme un **moment de la journée**, pas comme un prix à gagner : « La récré, c'est après 2 leçons. », jamais « Encore 1 leçon pour débloquer la récré ! ». Pas de compte à rebours, pas de cadenas. Si l'enfant va sur le panneau en attente, Tilou dit : « D'abord la classe, ensuite la récré ! ». La raison est expliquée au § 3.8 (effet « moyen-fin »).

### 3.3 Ce qui se passe dans la récré

- L'enfant choisit librement parmi ses jeux (autonomie). Il peut changer de jeu quand il veut.
- L'animal de l'enfant l'accueille sur l'écran La récré (« C'est la récré, Léa ! Choisis un jeu. ») mais **n'apparaît pas pendant les jeux**. Il revient sur l'écran de fin de récré. Raison technique : sur une Mi Box, la boucle three.js et un jeu animé en même temps, c'est trop (la boucle s'arrête d'elle-même quand le canevas quitte l'écran, `pet3d.js` l. 278).
- Rien n'est à gagner pendant une partie en dehors des 1 à 3 étoiles de fin (§ 3.5).

### 3.4 La fin de récré douce : l'animal qui bâille (le rôle de Somnole)

Dans l'étude 03, Somnole, le gardien du repos, donnait une raison narrative à la fin. Avec la décision des fondatrices, **c'est l'animal de l'enfant qui joue ce rôle** : il bâille, range les jeux et s'endort (`petSlot(…, "sleep")`, déjà utilisé par l'écran de pause). Si Somnole est gardé comme personnage du soir, il apparaît à côté de l'animal ; les textes ci-dessous marchent dans les deux cas.

| Moment | Ce qui se passe |
|---|---|
| Pendant la récré | En haut à droite de chaque écran, 5 petites lanternes qui s'éteignent une à une (pour les non-lecteurs) et « Encore 8 min » (pour les lecteurs). Pas de chiffres qui défilent à la seconde. |
| 2 min avant la fin | L'animal de l'enfant apparaît en petit dans le coin et bâille, **une seule fois** : « Ouaaah… La récré va bientôt finir. » Rien ne clignote, rien n'insiste. |
| À la fin | On ne peut plus lancer de partie. **La partie en cours continue** jusqu'à sa fin, 3 minutes au plus. Sur l'écran de fin de partie, « Rejouer » et « Autres jeux » laissent la place à un seul bouton : « La récré est finie ». |
| Au bout des 3 minutes de grâce | La partie s'arrête doucement (fondu), sans perte : on n'enregistre rien de négatif. |
| Écran de fin de récré (`screens.recreBye`) | Fond de nuit (comme la pause). L'animal de l'enfant s'étire et s'endort. Titre : « C'est la fin de la récré ! ». Texte : « Ouaaah… On range les jeux. ». Rappel informatif : « Tu as joué à : Memory, Labyrinthe » (les tuiles en petit, sans total d'étoiles). Deux boutons : « Retour aux leçons » et « Finir pour aujourd'hui ». **Le bouton focalisé** est « Retour aux leçons », sauf si la quête du jour est faite : alors c'est « Finir pour aujourd'hui » (03 § 5.5). |
| « Finir pour aujourd'hui » | Retour aux profils avec « À demain, Léa ! ». Il mènera plus tard au rituel du coucher (03 § 6.4). |
| Si la limite du jour est atteinte | On passe à l'écran de pause existant. |

**Pas de « 5 minutes de plus »** pour l'enfant, ni de code parent sur cet écran : le parent règle la durée dans son espace. L'animal ne pleure pas et ne supplie pas (03 § 2, principe 4, et Radesky et al., 2022).

### 3.5 Étoiles, autocollants, défi : ce qui se branche sur l'app

| Élément de La Récré | Dans Petits Savants | Raison |
|---|---|---|
| **1 à 3 étoiles par partie** (`celebrate`) | **Gardées comme retour sur la partie**, affichées comme les étoiles d'une leçon (qualité). **Pas ajoutées** au compteur d'étoiles à dépenser (et plus tard pas d'étincelles ✨). Enregistrées pour le parent (parties, meilleur score). | 03 § 2, principe 1 : la monnaie récompense l'apprentissage, pas le temps passé. Une leçon montre déjà 3 étoiles de qualité **et** une tuile « Étoiles +24 » de monnaie : à la récré, on garde les premières sans la seconde. C'est cohérent pour l'enfant. |
| **Total d'étoiles et autocollants** (2 + étoiles ÷ 3, album de 3 décors) | **Pas en lot 1.** Les ~60 autocollants (art `ART`) pourront devenir des décors ou objets de l'écran « Mon animal », gagnés avec les étoiles des leçons. | Un album rempli par le jeu ferait du jeu une machine à récompenses, en concurrence avec l'économie des leçons. |
| **Défi du jour** (un jeu tiré par profil, autocollant bonus) | **Non porté.** À la place, le jeu conseillé après la leçon du jour (§ 3.1), sans bonus. | 03 § 6.2 a déjà un défi du jour, centré sur l'apprentissage et jamais quantitatif. Deux défis embrouilleraient l'enfant. |
| **Galerie** (coloriages gardés) | Avec le Coloriage, en lot 2 : galerie locale sur la télé, sans export PDF (pas de téléchargement sur une télé). | |
| **Statistiques** (`recordStat`) | Dans le bilan de l'espace parents : minutes de récré par jour, parties et meilleure note par jeu. | Transparence pour le parent. |
| **Coin parents, porte d'appui long, profils, minuteur** | **Non portés** : Petits Savants a son code à 4 chiffres, ses profils et sa limite du jour. | |
| **L'animal de l'enfant** | Ce qu'il porte s'achète avec les étoiles des **leçons**, jamais avec la récré. Il peut **réagir** (content) sur l'écran de fin de récré. Tilou reste le guide qui donne les consignes. | |

### 3.6 Gratuit et Premium

- **Gratuits** : Memory, Coucou, Labyrinthe, La course. Chaque tranche d'âge a au moins 2 jeux gratuits (§ 2.1). La récré elle-même (s'ouvrir, durer, finir) est la même pour tous.
- **Premium** : Ombres, Musique, Formes, Syllabes, puis les jeux du lot 2 (sauf décision contraire).
- **Pour l'enfant non abonné, les jeux Premium n'existent pas** : ils ne sont pas dans la grille, sans cadenas, sans grisé, sans « demande à tes parents ». C'est la règle déjà appliquée aux cadeaux Premium de l'animal (`screens.rewards`) et recommandée en 03 § 4.7. La Récré native, elle, montre un cadenas qui mène à la porte parentale puis au paiement (SPEC § 4). **Petits Savants s'en écarte volontairement.**
- **Pour le parent** : l'écran « Jeux de la récré » de l'espace parents liste tous les jeux de l'âge de l'enfant, avec une pastille « Premium » sur ceux qui sont fermés, et le lien vers la page Premium (déjà derrière le code). L'argument Premium pour les parents devient : « Toutes les leçons et tous les jeux de la récré ».
- **Fin d'abonnement** : les jeux Premium disparaissent de la grille. Les statistiques et préférences restent. Rien n'est supprimé.
- **Télés sans facturation** (LG, Samsung, navigateur) : tout est ouvert, comme aujourd'hui (`Premium.unlocked()`).

### 3.7 L'espace parents

Dans la fiche de l'enfant (`screens.parentChild`) :

1. Ligne **« La récré »** : le réglage (§ 3.2), qui défile à chaque OK.
2. Ligne **« Jeux de la récré »** : un écran avec chaque jeu porté (dessin, nom, âge). OK le cache ou l'affiche pour cet enfant (comme l'onglet « Jeux » du prototype). États affichés : « Affiché », « Caché », « Pas pour son âge » (grisé), « Premium », « Son coupé » (Musique).
3. Dans le bilan : « Récré : 8 min aujourd'hui » ; sur le graphique des 7 jours, les minutes de récré en couleur à part dans chaque barre ; la liste des jeux joués (parties, meilleure note en étoiles).
4. Un texte d'explication : « La récré s'ouvre après les leçons du jour. Son temps compte dans le temps d'écran. Les jeux ne rapportent pas d'étoiles à dépenser. »

### 3.8 Ce que dit la recherche

- **La récré après l'effort aide l'attention.** Les travaux sur la récréation scolaire montrent que les enfants sont plus attentifs aux tâches qui suivent une pause, et moins attentifs quand la pause est retardée (Pellegrini, Huberty et Jones, *American Educational Research Journal*, 1995 ; Pellegrini et Bohn, *Educational Researcher*, 2005). Une récré de 5 à 10 minutes **entre** deux temps de leçons a donc un sens pédagogique. D'où le bouton « Retour aux leçons » après la récré.
- **Mais il ne faut pas faire du jeu le prix de la leçon.** Quand on dit à de jeunes enfants qu'ils doivent faire une activité A pour avoir le droit de faire une activité B, ils aiment ensuite moins l'activité A (Lepper, Sagotsky, Dafoe et Greene, *Journal of Personality and Social Psychology*, 1982, effet « moyen-fin »). C'est le même mécanisme que la surjustification déjà citée en 03 (Lepper, Greene et Nisbett, 1973 ; Deci, Koestner et Ryan, 1999). D'où nos choix : la récré est un **rythme** (« d'abord la classe, ensuite la récré », comme à l'école), sans seuil de réussite, sans recharge par des leçons de plus, sans compte à rebours ni cadenas, et le parent peut la régler sur « Sans leçon avant ».
- **Jouer pour apprendre, à condition que le jeu soit actif, engageant, porteur de sens et partagé.** Ce sont les quatre « piliers » des applications éducatives efficaces (Hirsh-Pasek et al., *Psychological Science in the Public Interest*, 2015). Le jeu guidé, un jeu libre avec un but d'apprentissage discret, fait aussi bien ou mieux que l'enseignement direct sur certains apprentissages, en maths notamment (Weisberg, Hirsh-Pasek et Golinkoff, *Mind, Brain, and Education*, 2013 ; Skene et al., *Child Development*, 2022, méta-analyse). Les jeux de plateau numériques simples améliorent le sens du nombre des 4-5 ans (Siegler et Ramani, *Developmental Science*, 2008), ce qui va dans le sens de La course et des jeux de comptage. Le lot 1 mêle donc des mécaniques variées et relie chaque jeu à une notion du programme (§ 1.2).
- **Jouer ensemble devant la télé.** Le co-usage parent-enfant des médias améliore ce que l'enfant en retire (Takeuchi et Stevens, *The new coviewing*, Joan Ganz Cooney Center, 2011 ; Académie américaine de pédiatrie, *Media and Young Minds*, 2016). Le Memory à 2, 3 ou 4 joueurs et La course se jouent à plusieurs sur le canapé. C'est un argument que la tablette n'a pas.
- **Temps d'écran des jeunes enfants.** OMS (2019) : pas d'écran avant 2 ans, au plus 1 h par jour de 2 à 4 ans, « moins c'est mieux ». Académie américaine de pédiatrie (2016) : 1 h par jour de programmes de qualité de 2 à 5 ans, de préférence avec un adulte. Commission d'experts sur les écrans (rapport remis en avril 2024) : pas d'écran avant 3 ans, un usage limité, accompagné et à contenu éducatif de 3 à 6 ans. D'où : la récré compte dans la limite, elle est courte (5 min par défaut en TPS-PS), et elle reste réglable ou désactivable.
- **Pas de rythme effréné.** Neuf minutes de dessin animé très rapide suffisent à faire baisser les fonctions exécutives d'enfants de 4 ans juste après (Lillard et Peterson, *Pediatrics*, 2011). Le lot 1 n'a aucun jeu « réflexe » pour les petits. Ballons attend le lot 2, ralenti. La course a un adversaire plus lent et ne concerne que les 6 ans et +.
- **Pas de design manipulateur.** 80 % des applications utilisées par des 3-5 ans en contiennent (Radesky et al., *JAMA Network Open*, 2022) : pression d'un personnage, récompenses pour rester, achats. La récré n'a ni « encore une partie », ni personnage triste, ni cadenas, ni offre adressée à l'enfant (Children's Code de l'ICO, norme « nudge » : seuls les coups de pouce vers le bien-être sont permis, comme le bouton « Finir pour aujourd'hui »).

*Les références ci-dessus sont citées de mémoire, avec auteurs, revue et année. Il faut vérifier les liens avant de les publier, comme pour les autres études.*

---

## 4. L'architecture technique

### 4.1 Les fichiers

```
www/
  index.html                 + <link rel="stylesheet" href="css/recre.css">
                             + <script> recre/art.js, recre/data.js, recre/core.js,
                               recre/games/*.js (après app.js et parent.js), recre.js
  css/recre.css              NOUVEAU : styles de la récré, classes rc-*, couleurs --lr-*
  js/recre.js                NOUVEAU : écrans recre, recreGame, recreBye ; actions ; règles de temps
  js/recre/core.js           NOUVEAU : registre des jeux, contexte de jeu, fenêtres, moteur de questions
  js/recre/art.js            GÉNÉRÉ : l'art du prototype (ART, tuiles, caches, décors)
  js/recre/data.js           GÉNÉRÉ : thèmes du Memory, cachettes, ombres, syllabes (corrigées), notes, chansons, formes
  js/recre/games/memory.js   NOUVEAU : un fichier par jeu (coucou, ombres, musique, formes,
                             labyrinthe, syllabes, course)
  js/store.js                + réglage récré par enfant, secondes de récré du jour, leçons du jour, stats des jeux
  js/premium.js              + Premium.gameLocked(game)
  js/app.js                  + nettoyage des minuteurs, aiguillage des touches, panneau du parcours,
                               bouton du Bravo, décompte du temps
  js/platform.js             + handlers.key(k) avant la navigation du focus ; Sfx.tone() exposé
  js/parent.js               + lignes « La récré », « Jeux de la récré », bilan
  js/render.js               + option { art } (dessin de la récré), partagée avec le téléphone
  phone/phone.js             + question.act / question.argPrefix ; tuiles des notes
  phone/index.html           + <script src="../js/recre/art.js">
scripts/extract-recre.mjs    NOUVEAU : extrait art et données du prototype
tests/recre.spec.mjs         NOUVEAU
tests/recre-games.spec.mjs   NOUVEAU
tests/recre-content.spec.mjs NOUVEAU
```

On charge tout statiquement, comme le reste de l'app. L'art pèse environ 250 Ko (les 100 dessins `ART` sans en-têtes SVG), moins que `three.min.js`. Si le démarrage sur une Mi Box s'allonge de plus de 150 ms (mesurer avec `performance.now()` au `DOMContentLoaded`), on chargera `recre/art.js` et les jeux à l'ouverture de la récré, en injectant des `<script>`. Cela marche aussi depuis `file://` (paquet LG).

Les ajouts restent dans `www/`, donc servis tels quels par `scripts/serve.mjs` et par `LocalServer.java` (qui sert tout chemin sous les assets, sans `..`). Il n'y a rien à changer côté Android.

### 4.2 Le registre des jeux

Chaque fichier de jeu s'inscrit comme une matière s'inscrit avec `PS_CONTENT.subject()` :

```js
/* La Récré, Coucou caché. Porté de prototype.html (La Récré), l. 3385-3420. */
(function () {
  "use strict";
  var RC = window.PS_RECRE, D = window.PS_RECRE_DATA;

  RC.game({
    id: "coucou",                 // = id du prototype (stats, préférences, tests)
    name: "Coucou",               // nom court (tuile), copie de GAMES
    title: "Coucou caché",        // titre de la barre, copie de shell()
    desc: "Trouve l’animal caché",
    color: "lime",                // clé de couleur La Récré (--lr-lime / --lr-lime-d)
    ages: [0, 1],                 // tranches 0..3, copie de GAMES
    free: true,                   // false = Premium
    links: ["mo-pet", "fr-tps", "fr-mat1"], // préfixes d'id de leçons qui rendent ce jeu « conseillé »
    phone: "dpad",                // vue téléphone par défaut : "dpad" | "question" | "notes"
    needsSound: false,            // true pour Musique
    start: function (g) {
      var n = [3, 4, 6, 8][g.band], rounds = 4, r = 0, miss = 0, lock = false, target;
      g.restart = true;           // affiche « Recommencer »
      function round() { /* … construit le pré et les cachettes avec g.html(), puis : */
        g.say("Trouve " + D.art[target].n + " !");
        g.focus('[data-arg^="spot:"]');
      }
      g.on("spot", function (i) { /* ouvre la cachette i (copie de l'écouteur du prototype) */ });
      g.digits(function (d) { if (n <= 4 && d >= 1 && d <= n) { g.act("spot:" + (d - 1)); return true; } return false; });
      g.debug = function () { return { target: target, spots: /* … */ null }; }; // pour les tests
      round();
    }
  });
})();
```

`PS_RECRE.forChild(child)` donne les jeux visibles : la tranche de la classe (`BAND = { TPS: 0, PS: 0, MS: 1, GS: 1, CP: 2, CE1: 2, CE2: 3 }`), moins les jeux cachés par le parent, moins les jeux Premium fermés (`Premium.gameLocked`), moins les jeux `needsSound` si le son est coupé. Le jeu conseillé est le premier dont un préfixe de `links` correspond à une leçon du jour (`lessonId.indexOf(prefix + "-") === 0` ou `=== prefix`, pour ne pas confondre `ma-ce1` et `ma-ce1b`).

### 4.3 Le cycle de vie d'un jeu

**Démarrage.** `actions.rcOpen(id)` vérifie que la récré est ouverte et que le jeu fait partie de `forChild()`, puis `go("recreGame", id)`. `screens.recreGame` monte la coque (barre, `.rc-play` vide, pied) avec `mount()`, qui place le focus et envoie l'état du téléphone. Ensuite `PS_RECRE.start(def, S.child)` crée le contexte `g` et appelle `def.start(g)`. Le jeu ne rappelle **jamais** `go()` ni `mount()` pendant la partie : il modifie le DOM de `g.root`. « Rejouer » refait `go("recreGame", id)`, ce qui range tout et repart à neuf.

**Le contexte `g`** (dans `recre/core.js`) :

| Membre | Rôle |
|---|---|
| `g.root`, `g.child`, `g.band` | L'élément `.rc-play`, l'enfant, la tranche 0 à 3. |
| `g.html(markup)` | Remplace le contenu de `g.root`. Les textes passent par `g.t()` = `R.esc()` (espaces fines). |
| `g.on(name, fn)`, `g.act("name:arg")` | Actions du jeu. Dans le DOM : `data-act="rc" data-arg="spot:2"`. Le gestionnaire de clic global d'`app.js` appelle `actions.rc(arg)` → `PS_RECRE.act(arg)` → `fn("2")`. Le même chemin sert à OK, au pointeur LG et au téléphone. |
| `g.keys({ left, right, up, down, ok })` | Prend les flèches (Labyrinthe). Un gestionnaire qui renvoie `false` rend la touche à la navigation du focus. |
| `g.digits(fn)` | Prend les touches 0 à 9 (et les touches de couleur, comme 1 à 4). |
| `g.back(fn)` | Un « Retour » propre au jeu (Formes : reposer la pièce) ; renvoie `true` s'il l'a pris. |
| `g.focus(selector)` | `Focus.refresh(selector)` après un changement du DOM. |
| `g.later(fn, ms)` | `PS_APP.later` : annulé au changement d'écran ; ne s'exécute pas si le jeu n'est plus le jeu courant. |
| `g.every(fn, ms)` | Intervalle annulé au changement d'écran, **suspendu** quand `document.hidden` ou qu'une fenêtre est ouverte (La course). |
| `g.frame(fn)` | Boucle `requestAnimationFrame` arrêtée au changement d'écran (Ballons, lot 2). |
| `g.onCleanup(fn)` | Tout autre rangement (écouteurs sur `document`, `AudioContext`…). |
| `g.dirty(true)` | La partie est commencée (« Quitter la partie ? »). |
| `g.say(text, lang)`, `g.sfx.tap/flip/match/snap/miss/win/pop()`, `g.tone(f, dur, type, vol, delay)` | Voix et sons (§ 4.9). |
| `g.pref(key, value?)` | Préférences de récré de l'enfant (thème du Memory, nombre de joueurs, instrument, records). |
| `g.phone(state)` | Envoie une vue au téléphone et met à jour la liste des actions qu'il a le droit d'envoyer. |
| `g.end({ stars, title, body, say, againLabel, other })` | Fenêtre de fin (copie de `celebrate`) : enregistre la partie si `stars > 0`, confettis, voix, focus sur « Rejouer ». |
| `g.endGame(mistakes, body, minStars)` | La règle 3/2/1 étoiles du prototype, puis `g.end()`. |
| `g.debug` | Fonction que le jeu remplit pour les tests (la bonne réponse, le chemin…). |

**Nettoyage des minuteurs.** Aujourd'hui `go()` appelle `clearTimers()`, qui annule les `later()` de l'écran. On y ajoute les rangements :

```js
var timers = [], cleanups = [], demo = null;
function later(fn, ms) { timers.push(setTimeout(fn, ms)); }
function onCleanup(fn) { cleanups.push(fn); }
function clearTimers() {
  timers.forEach(clearTimeout);
  timers = [];
  cleanups.splice(0).forEach(function (fn) { try { fn(); } catch (err) { /* already gone */ } });
  if (demo) { demo.stop(); demo = null; }
}
// …
window.PS_APP = { /* existant */, later: later, onCleanup: onCleanup, phone: phoneState, routeKey: routeKey };
```

`PS_RECRE.start()` inscrit `onCleanup(function () { current = null; })`. Ainsi, quitter, changer d'écran, passer à la pause ou à la fin de récré range toujours le jeu, ses minuteurs, ses intervalles et sa boucle d'animation. Les `setTimeout` « décoratifs » du prototype (éclats de ballon, notes qui s'envolent) passent aussi par `g.later`.

**Fin et score.** `g.end()` affiche la fenêtre `.rc-end` **dans** l'écran (pas de `go()`), avec `data-act="rcAgain"` et `data-act="rcOther"`. Il appelle `Store.recordGame(child.id, def.id, stars)`, joue `Sfx.done`, lance les confettis et dit le titre. Pendant qu'une fenêtre est ouverte, `PS_RECRE.key()` et `digit()` renvoient `false` : les flèches et OK vont aux boutons de la fenêtre. Si la récré est finie (`S.recreUp`), la fenêtre n'a qu'un bouton, « La récré est finie » (`rcBye`).

**Quitter.** `S.back` de l'écran de jeu vaut `PS_RECRE.back`, qui applique l'ordre du § 2.2. « Quitter la partie ? » est une fenêtre `.rc-ask` dans l'écran, avec le focus sur « Non, je joue ».

### 4.4 Les touches, le focus et la télécommande

Aujourd'hui, `platform.js` envoie les flèches à `Focus.move()` et OK à `Focus.current.click()`, et `app.js` ne donne les touches 1-4 qu'à l'écran de leçon (`colorKey`). Trois petites modifications :

```js
// platform.js, dans le keydown, après keyOf(e) :
var k = keyOf(e);
if (!k) return;
e.preventDefault();
if (k !== KEY.BACK && handlers.key && handlers.key(k)) return; // un jeu prend la touche
if (k === KEY.OK) { if (Focus.current) Focus.current.click(); }
else if (k === KEY.BACK) { lastKeyBack = Date.now(); back(); }
else Focus.move(k);
```

```js
// app.js
function routeKey(k) { return S.screen === "recreGame" && window.PS_RECRE.key(k); }
function digit(d) {
  if (S.screen === "recreGame") return window.PS_RECRE.digit(d);
  /* … PIN, code, puis 1-4 des leçons comme aujourd'hui … */
}
function colorKey(i) {
  if (S.screen === "recreGame") return window.PS_RECRE.digit(i + 1);
  /* … inchangé … */
}
// onPhone : les touches du téléphone suivent le même chemin que la télécommande
if (msg.type === "key") {
  if (routeKey(msg.key)) return;
  /* … Focus.move, OK, Retour comme aujourd'hui … */
}
P.install({ back: back, color: colorKey, digit: digit, key: routeKey });
```

Règles de focus pour les jeux :

- Tout ce qui s'active porte la classe `.f` et un `data-act`. Un élément temporairement inactif reste focusable avec `aria-disabled="true"` quand sa place compte dans la grille (cartes du Memory). Il perd sa classe `.f` quand il ne doit pas être atteint (trous de Formes sans pièce soulevée).
- Après chaque changement qui recrée des éléments (nouvelle manche), le jeu appelle `g.focus(sélecteur)`. Sinon `Focus.current` pointe sur un élément détaché.
- `Focus.onChange` fait regarder l'animal vers la réponse focalisée : on ne le fait pas dans la récré (l'animal n'y est pas pendant les jeux).
- La navigation spatiale de `Focus.move` mesure avec `getBoundingClientRect()`. Elle marche dans la scène mise à l'échelle. Il faut seulement que les éléments ne se chevauchent pas : pas de fruits superposés dans Le verger (lot 2), pas de zones imbriquées.

### 4.5 Le rendu à l'échelle 1920 × 1080

- **Tout en px de la scène.** On n'utilise ni `vw`, ni `vh`, ni `clamp()` sur la fenêtre, ni `ResizeObserver`, ni `fitGrid()`, ni `innerWidth`. Les grilles et tailles des § 2.3 à 2.10 sont fixes. Un test vérifie que chaque élément `.f` tient dans 1920 × 1080 (§ 4.10).
- **Coordonnées du pointeur.** `svgPoint()` (via `getScreenCTM()`) suit la transformation de la scène : on le garde pour le pointeur LG. Le glisser-déposer du prototype (`dragify`, `ghostDrag`) mélange `clientX` (écran) et tailles de mise en page (scène) : on ne le porte pas. À la télé, on « choisit puis pose ».
- **CSS isolé.** `www/css/recre.css` ne contient que des classes `rc-*` et des variables posées sur `.rc` :

```css
.rc {
  --lr-red: #FF3B5C; --lr-red-d: #D6203F; --lr-orange: #FF8A1F; --lr-orange-d: #DB6A00;
  --lr-sun: #FFD21F; --lr-sun-d: #E0A800; --lr-lime: #9BE22D; --lr-lime-d: #6FB10F;
  --lr-grass: #1FCF6E; --lr-grass-d: #0EA052; --lr-teal: #00C4CC; --lr-teal-d: #009AA1;
  --lr-sky: #2E8BFF; --lr-sky-d: #1366D6; --lr-grape: #8C52FF; --lr-grape-d: #6A30DB;
  --lr-pink: #FF4FAE; --lr-pink-d: #D92E8A; --lr-coral: #FF6A4D; --lr-coral-d: #D9472B;
  --lr-indigo: #5B5BFF; --lr-indigo-d: #3A3AD6; --lr-ink: #1D1846;
}
.rc-tile { width: 380px; height: 340px; border-radius: 36px; background: var(--c); box-shadow: inset 0 -12px 0 var(--cd); }
.rc-tile.is-focus { transform: scale(1.06); box-shadow: inset 0 -12px 0 var(--cd), var(--focus); }
```

  On reprend les formes du prototype (boutons épais avec ombre basse de 6 px, coins ronds, étoiles), mises à l'échelle de la télé (× 1,6 environ), et l'anneau de focus de Petits Savants.
- **Polices.** Titres en Fredoka, textes en Nunito (déjà embarquées). Le script d'extraction remplace dans l'art le `font-family="Baloo 2, …"` (non entre guillemets, donc invalide) par `font-family="Fredoka, Nunito, sans-serif"`. Voir § 5.
- **Pas de filtre coûteux.** Les silhouettes d'Ombres passent par un remplissage `#2B2340` posé à l'extraction (un `<g fill>` qui écrase les couleurs), pas par un `filter` CSS : sur une Mi Box, les filtres sur de grands SVG font chuter la cadence.

### 4.6 Le téléphone

Aujourd'hui, le téléphone n'envoie que des actions déclarées par l'écran (`phoneActs`, construit dans `mount()` à partir de `phone.buttons` et `phone.acts`). On garde ce garde-fou :

- `mount()` est découpé : la partie « état du téléphone » devient `phoneState(phone)`, exportée en `PS_APP.phone`, pour que `g.phone()` mette à jour la vue **et** la liste des actions permises pendant la partie.
- Une seule action de jeu, `rc`, permise seulement sur l'écran `recreGame` (`actions.rc` vérifie `S.screen`). Son argument (`"ans:2"`, `"note:5"`, `"tile:1"`) est validé par le jeu, qui ignore tout nom inconnu ou indice hors limites. Un test envoie des actions forgées.
- **Vue « question »** (`phone.js`, `question()`) : on ajoute `q.act` (par défaut `"answer"`) et `q.argPrefix` (`data-arg = argPrefix + i`). Les réponses peuvent être un dessin de la récré : `render.js`, `option()`, gagne `if (o.art) return window.PS_RECRE_ART.svg(o.art, "opt-art")`. La page téléphone charge `../js/recre/art.js`.
- **Notes** (Musique) : la vue `buttons` existante avec des tuiles `tiny` et `swatch` (couleurs des 8 lames), `act: "rc"`, `arg: "note:i"`.
- **Croix directionnelle** : les messages `{ type: "key" }` passent par `routeKey()` (§ 4.4). Le Labyrinthe se joue donc au téléphone sans rien d'autre.
- **Écrans** : La récré liste les jeux (`buttons`, `act: "rcOpen"`) ; la fin de partie donne « Rejouer » (grosse flèche verte, `go: true`) et « Autres jeux » ; la fin de récré, ses deux boutons.
- Lot 2 : une vue « dessin » (Coloriage, Différences, Ballons) qui reçoit le SVG de la scène et renvoie l'indice de la zone touchée, sur le modèle de l'ardoise (`trace.js`, coordonnées de 0 à 1).

### 4.7 Les données

Tout reste dans `localStorage` (`ps.data.v2`), sans changement de version : les nouveaux champs ont des valeurs par défaut à la lecture.

```js
// enfant (children[])
child.recre = { preset: "2x10", hidden: ["musique"] }      // absent = défaut selon la classe

// progression (progress[id])
p.recre = {
  stats: { memory: { plays: 4, stars: 10, best: 3 } },      // comme recordStat du prototype
  prefs: { memTheme: "animaux", memN: 1, instr: "xylo", "best:animaux:1": 9 }
}

// jour (progress[id].days["2026-11-08"])
{ seconds: 1260, lessons: 3, ids: ["fr-cp3-…", "ma-cp4-…"], recre: 540, games: ["memory", "maze"] }
```

Fonctions ajoutées à `store.js` :

```js
var RECRE_PRESETS = [
  { id: "off", after: 0, minutes: 0 }, { id: "1x5", after: 1, minutes: 5 },
  { id: "2x10", after: 2, minutes: 10 }, { id: "2x15", after: 2, minutes: 15 },
  { id: "3x15", after: 3, minutes: 15 }, { id: "free10", after: 0, minutes: 10 }
];
function recreDefault(grade) { return grade === "TPS" || grade === "PS" ? "1x5" : "2x10"; }

recreConfig: function (id) { /* child.recre ou défaut */ },
/* { status: "off" | "wait" | "open" | "done", need, after, left (min), minutes } */
recre: function (id) {
  var c = this.child(id), cfg = this.recreConfig(id), pr = preset(cfg.preset), t = this.today(id);
  if (!pr.minutes) return { status: "off" };
  var done = (t.ids || []).length || t.lessons;           // données d'avant : t.lessons
  if (done < pr.after) return { status: "wait", need: pr.after - done, after: pr.after, minutes: pr.minutes };
  var left = Math.min(pr.minutes - (t.recre || 0) / 60, this.minutesLeft(id));
  return left > 0 ? { status: "open", left: left, minutes: pr.minutes } : { status: "done", minutes: pr.minutes };
},
addRecreSeconds: function (id, s) { /* t.recre += s ; save() */ },
recordGame: function (id, gameId, stars) { /* stats + t.games, comme recordStat */ },
recrePref: function (id, key, value) { /* lecture ou écriture de p.recre.prefs */ }
```

Et dans `recordLesson()`, une ligne : `if ((t.ids || (t.ids = [])).indexOf(lesson.id) < 0) t.ids.push(lesson.id);`.

**Décompte du temps** (`tick()` d'`app.js`, toutes les 10 s) :

```js
var COUNTED = ["home", "teach", "lesson", "reward", "rewards", "recre", "recreGame"];
var GRACE = 3 * 60 * 1000;
function tick() {
  if (!S.child || document.hidden || COUNTED.indexOf(S.screen) < 0) return;
  Store.addSeconds(S.child.id, TICK);
  if (S.screen === "recre" || S.screen === "recreGame") {
    Store.addRecreSeconds(S.child.id, TICK);
    var r = Store.recre(S.child.id);
    if (r.status === "open" && r.left <= 2 && !S.recreSleepy) { S.recreSleepy = true; window.PS_RECRE.sleepy(); }
    if (r.status !== "open") {
      if (S.screen === "recre") go("recreBye");
      else if (!S.recreUp) { S.recreUp = true; S.recreGraceEnd = Date.now() + GRACE; window.PS_RECRE.timeUp(); }
      else if (Date.now() >= S.recreGraceEnd) go("recreBye");
    }
    return;
  }
  /* … la limite du jour pour les autres écrans, comme aujourd'hui … */
}
```

`screens.recreBye` passe directement à `go("pause")` si la limite du jour est atteinte. `S.recreUp`, `S.recreSleepy` et `S.recreGraceEnd` sont remis à zéro à l'ouverture de la récré et au changement de profil. Le panneau du parcours et le bouton du Bravo lisent `Store.recre()`. `finishLesson()` compare le statut avant et après `recordLesson()` pour savoir si cette leçon vient d'ouvrir la récré (`S.result.recreOpened`).

### 4.8 Extraire l'art et les données du prototype

On ne redessine rien et on ne recopie pas l'art à la main. L'équipe La Récré a déjà la méthode (`larecre_ios/tools/extract-art.mjs`) : charger le prototype dans Chromium, exposer ses générateurs par une ligne injectée, et écrire le résultat. On écrit `scripts/extract-recre.mjs` sur ce modèle :

1. **Entrée** : le chemin du prototype (`node scripts/extract-recre.mjs ../larecre_ios/design/prototype.html`). Le script écrit son empreinte SHA-256 et, si le dossier est un dépôt git, le commit, dans l'en-tête des fichiers générés.
2. **Accroche** : remplacer `buildHome(); syncHome(); syncSound();` par la même ligne suivie de `window.__LR = { ART, GAMES, gameArt, COVER, SCENE_DECOR, SHAPES, SCOLORS, MEM_THEMES, HIDERS, SHADOWS, SYLL, NOTES, SHARPS, SONGS, ICON };`. Erreur explicite si la ligne a changé (comme `extract-art.mjs`).
3. **Chargement sans réseau** : Playwright, `page.route("**/*", r => r.request().url().startsWith("data:") ? r.continue() : r.abort())`, pour ne jamais appeler Google Fonts.
4. **Art** : pour chaque clé de `ART`, `{ n: ART[k].n, d: ART[k].d() }` (le contenu d'un `<svg viewBox="0 0 100 100">`) ; les tuiles `gameArt(g)` des jeux portés, avec `var(--c)` et `var(--cd)` remplacés par les couleurs du jeu (la fonction `resolve` d'`extract-art.mjs`) ; `COVER` et `SCENE_DECOR`. La police des `<text>` devient Fredoka.
5. **Données** : les listes de jeu ci-dessus en JSON, avec **une liste de corrections écrite dans le script** et rejouée à chaque extraction : coupures de `SYLL` (`carotte: ["ca","rot","te"]`, `papillon: ["pa","pil","lon"]`, `chenille: ["che","nil","le"]`), et espace fine avant `! ? : ;` dans tous les textes (`t.replace(/ ([!?:;])/g, " $1")`, comme `extract-content.mjs`).
6. **Sortie** : `www/js/recre/art.js` (`window.PS_RECRE_ART = { art: {…}, tiles: {…}, cover: {…}, decor: {…}, svg: function (key, cls) {…} }`) et `www/js/recre/data.js` (`window.PS_RECRE_DATA = {…}`), en ES5, avec l'en-tête « Généré par scripts/extract-recre.mjs. Ne pas modifier. »
7. Le **code des jeux** (règles, minuteurs, rendu) est porté à la main, fichier par fichier, avec en en-tête les lignes du prototype d'origine. Il est trop lié au DOM et au toucher pour une conversion automatique, et doit changer de geste.

Les fichiers générés sont commités, pour que l'app se construise sans le dépôt La Récré. On relance le script quand le prototype change, puis on relit le diff.

### 4.9 Son et voix

- **Sons** : le prototype synthétise ses sons avec WebAudio (`tone`, `sfx`, l. 1255-1278), comme Petits Savants (`platform.js`, `tone`). On expose `PS_PLATFORM.Sfx.tone(freq, dur, type, vol, delay)` avec la signature du prototype, sur le **même** `AudioContext`, et l'on porte `sfx` et `instrNote` tels quels. Tout respecte `Sfx.enabled` (réglage parent). Sur la télé, l'appui sur une touche suffit à débloquer l'audio.
- **Voix** : `Speech.say()` (synthèse de la télé, ou `AndroidTTS`), qui respecte `Speech.enabled`. Les textes à dire sont ceux des appels `speak()` du prototype, plus les consignes ajoutées au § 2. Quand la voix enregistrée arrivera (A-RETENIR, 🟠), la récré passera par la même fonction.

### 4.10 Les tests Playwright

Dans le style des tests existants : données posées avec `open()` de `helpers.mjs`, conduite à la télécommande (`page.keyboard.press`), horloge simulée (`page.clock.install()`, `runFor()`), et `noWebGL()` pour les avances rapides. On ajoute à `helpers.mjs` : `withLessonsToday(n)` (pose `days[today].ids`), `openRecre(page)`, `game(page)` (lit `PS_RECRE.active().debug()`), `pressArrowsTo(page, from, to, cols)`.

**`tests/recre.spec.mjs`, la récré et ses règles**

1. *The récré waits for 2 different lessons, then the Bravo screen opens it* : 1 leçon déjà faite, on finit la deuxième à la télécommande ; sur le Bravo, « La récré ! » a le focus ; Entrée ouvre l'écran La récré ; le panneau du parcours affiche « La récré est ouverte ! ».
2. *Replaying the same lesson does not open the récré* : la même leçon deux fois, statut `wait`.
3. *TPS and PS default to 1 lesson and 5 minutes* : Inès (PS) ; et le réglage « Sans leçon avant » ouvre la récré sans leçon.
4. *The récré lasts 10 minutes and counts in today's screen time* : horloge simulée, 9 min dans un jeu ; `days[today].seconds` et `.recre` ont augmenté de 540 s ; le temps restant du jour a baissé d'autant.
5. *The child's animal yawns once 2 minutes before the end* : à 8 min, un seul `.rc-sleepy` et un seul « Ouaaah… » (`Speech.last`).
6. *At the end, the game in progress finishes, then the animal closes the récré* : à 10 min, la partie continue ; la fin de partie n'a que « La récré est finie » ; on arrive sur « C'est la fin de la récré ! » ; « Rejouer » n'existe plus ; un `rcOpen` forgé est refusé.
7. *The 3-minute grace ends a game that never ends* : Musique en mode Libre, 13 min, on est sur l'écran de fin de récré.
8. *The daily limit during the récré shows the pause screen* : limite 15 min dont 14 utilisées, puis 1 min de récré : écran de pause.
9. *One récré a day* : après la fin, 2 leçons de plus ; le panneau dit « Récré finie pour aujourd'hui ».
10. *Back in a game asks « Quitter la partie ? » with « Non, je joue » focused* ; Retour ferme la fenêtre ; deux Retours d'affilée ne quittent pas.
11. *Leaving a game clears its timers* : La course, on quitte, horloge +2 min : aucune erreur de page, `PS_RECRE.active() === null`, aucune voiture ne bouge, aucune voix après le départ.
12. *Récré stars are not spendable* : 3 étoiles au Memory ; `starsLeft` inchangé ; `p.recre.stats.memory` à `{ plays: 1, best: 3 }`.
13. *The suggested game follows today's lesson* : une leçon `fr-cp3-…` aujourd'hui, la tuile Syllabes vient en premier, porte « Après ta leçon » et a le focus.
14. *Premium games are invisible to a child without Premium* : `AndroidBilling` simulé comme dans `premium.spec.mjs`, non abonné : 4 tuiles au plus, aucun `.lock` ni texte « Premium » dans l'écran La récré ; abonné : 7 tuiles pour un enfant de CE2 ; sans facturation (LG) : tout est ouvert.
15. *Parents set the récré and hide a game* : code, fiche de l'enfant, la ligne « La récré » défile jusqu'à « Fermée » (le panneau disparaît du parcours) ; « Jeux de la récré » cache Memory (la tuile disparaît).
16. *Sound off hides Musique*.

**`tests/recre-games.spec.mjs`, chaque jeu du lot 1 à la télécommande**, paramétré par tranche d'âge (Inès PS, Léa GS, un CP, Hugo CE1 passé en CE2) :

17. *Memory* : réglages par défaut, OK sur « C'est parti ! », chaque paire retournée en flèches + OK d'après `debug().deck` ; fin, étoiles et record ; à 2 joueurs, le bandeau « À toi, … ! » et un classement sans étoiles.
18. *Coucou* : chaque manche avec la touche du chiffre (≤ 4 cachettes), puis une manche aux flèches ; une erreur donne 2 étoiles.
19. *Ombres* : 5 réponses, une fausse d'abord : 2 étoiles ; la réponse fausse est grisée et perd le focus.
20. *Musique* : Répète, suites rejouées avec les chiffres 1 à 8 ; Chanson pour un PS : OK seul joue toute la chanson (le focus suit) ; pour un CP, le focus ne suit pas.
21. *Formes* : OK sur une pièce, le focus passe au premier trou ; Retour repose la pièce sans quitter ; mauvais trou : erreur comptée.
22. *Labyrinthe* : le chemin le plus court (`debug().path`) joué aux flèches ; un mur ne fait pas bouger l'animal ; la manche se termine sur la maison ; les dimensions sont 7 × 4, 10 × 5, 12 × 6.
23. *Syllabes* : 5 mots aux chiffres ; « carotte » se découpe en ca·rot·te ; une tuile fausse revient.
24. *La course* : 10 bonnes réponses aux chiffres avant la voiture bleue : 3 étoiles ; sans répondre, horloge +80 s : « Bien joué ! » et 1 étoile ; la voiture bleue ne bouge pas pendant « Quitter la partie ? ».

**`tests/recre-content.spec.mjs`, contenus et mise en page**

25. *Every game builds valid rounds for every age band, 50 times* (comme `content.spec.mjs`) : une seule bonne réponse par question, labyrinthe soluble, réserve de mots non vide, toutes les clés d'art utilisées existent dans `PS_RECRE_ART`.
26. *French typography* : dans chaque écran de récré, aucun texte visible n'a d'espace simple avant `! ? : ;` (parcours de `innerText`).
27. *Everything fits the 1920 × 1080 stage* : chaque `.f` de chaque écran de jeu est dans la scène, mesure au moins 120 px de côté, et aucun texte n'est sous 28 px (`getComputedStyle`).
28. *The récré makes no network request* : `page.on("request")` ne voit que l'hôte local.

**`tests/phone.spec.mjs`, ajouts**

29. *The phone's arrows guide the maze* : croix du téléphone, l'animal avance sur la télé.
30. *Ombres answered on the phone* : les 4 dessins s'affichent sur le téléphone ; l'appui répond sur la télé.
31. *Musique: the phone plays notes* : une tuile du téléphone joue la note sur la télé.
32. *Forged récré actions are ignored* : `rc` hors de l'écran de jeu, `rcOpen` d'un jeu Premium fermé, `note:99` : rien ne se passe et aucune erreur.

### 4.11 Plan de travail et estimation

| PR | Contenu | Jours |
|---|---|---|
| 1. Fondations | `store.js` (récré, stats), `app.js` (rangements, `routeKey`, panneau, Bravo, `tick`), `platform.js` (`handlers.key`, `Sfx.tone`), `recre/core.js` (registre, contexte, fenêtres), `recre.js` (3 écrans), `recre.css`, `scripts/extract-recre.mjs`, **Memory** et **Labyrinthe**, tests 1-13, 17, 22, 25-28 | 10 |
| 2. Questions et course | Moteur de questions, **Ombres**, **Coucou**, **La course**, tests 18, 19, 24 | 4 |
| 3. Manipulations et musique | **Formes**, **Syllabes** (corrections), **Musique**, tests 16, 20, 21, 23 | 5 |
| 4. Parents, Premium, téléphone | Espace parents (réglage, jeux, bilan), `Premium.gameLocked`, vues téléphone, tests 14, 15, 29-32 | 4 |
| **Total lot 1** | | **≈ 23 jours** |

Puis version 0.8.0, mise à jour du README (section « La récré »), de la fiche Play (« des jeux après la classe ») et des captures (`npm run store:images`). Ensuite, le lot 2a fait environ 6 jours, le lot 2b 12 jours et le lot 2c 12 jours.

---

## 5. Droits et cohérence visuelle

Les deux applications appartiennent aux mêmes fondateurs. Reprendre le code et l'art de l'une dans l'autre ne pose donc pas de problème de fond. Il reste des points à **vérifier et à écrire** :

1. **Qui est titulaire, exactement.** La Récré déclare « © 2026 Kidinou » (`larecre_ios/fastlane/metadata/copyright.txt`, cité dans `docs/LAUNCH.md`). Le site de Petits Savants n'a pas encore de nom d'éditeur (A-RETENIR § 4). Si l'éditeur de Petits Savants n'est pas la même personne, physique ou morale, que celle de La Récré (par exemple une micro-entreprise d'un seul des deux fondateurs d'un côté et une société de l'autre), il faut **une licence ou une cession écrite** du code, des illustrations et des textes de La Récré vers l'éditeur de Petits Savants. Une cession de droits d'auteur doit énumérer les droits cédés, leur étendue, leur destination, le territoire et la durée (Code de la propriété intellectuelle, art. L131-3). Une licence simple, non exclusive, gratuite et mondiale suffit.
2. **Contributeurs extérieurs.** Vérifier que personne d'autre n'a contribué à l'art ou au code du prototype (graphiste, prestataire, ami) sans cession écrite. Vérifier l'historique git des dépôts `larecre_ios` et `larecre_android`, et la provenance de `design/extra-art/`.
3. **Contenu produit par IA.** Une grande partie du code et des dessins SVG semble avoir été écrite avec des agents IA. Le droit d'auteur ne protège que l'apport humain (A-RETENIR § 5). La réutilisation entre nos deux apps reste libre, mais la protection contre un copieur est faible. On garde les traces des choix humains (cahiers des charges, retouches, versions datées).
4. **Polices.** Baloo 2 (La Récré), Fredoka et Nunito (Petits Savants) sont toutes sous **SIL Open Font License 1.1**. Elles s'embarquent librement dans une app, avec le texte de licence à côté (`LaRecre/Resources/Fonts/OFL.txt` ; `www/fonts/LICENSE-*.txt`). Aucune ne déclare de « Reserved Font Name ». La Récré a **modifié** Baloo 2 pour lui ajouter l'espace fine insécable (`tools/fonts/add-narrow-nbsp.py`), ce que permet l'OFL ; la police modifiée reste sous OFL et ne peut pas être vendue seule. Pour la récré de Petits Savants, on recommande **Fredoka et Nunito**, sans Baloo 2 : une seule identité, quatre fichiers de moins, et aucune police modifiée à suivre. Il faudra vérifier que Fredoka affiche bien U+202F (la vérification n'a pas pu être faite pendant l'étude) ; sinon, appliquer le même correctif que La Récré. Dans tous les cas, **ne jamais charger de police depuis Google Fonts** comme le fait le prototype : l'app fonctionne hors ligne, et un tribunal allemand a jugé en 2022 (LG München I) que la transmission de l'adresse IP à Google par des polices distantes violait le RGPD.
5. **Musique.** « Au clair de la lune » et « Ah ! vous dirai-je, maman » sont des airs traditionnels du XVIIIᵉ siècle, dans le domaine public. Le jeu n'utilise que la suite de notes, synthétisée, sans enregistrement ni paroles d'un tiers.
6. **Le nom « La Récré ».** Dans Petits Savants, on écrit « la récré » comme un **nom commun** (« La récré est ouverte ! ») et pas comme une marque. Avant de mettre « La Récré » en avant comme nom de produit, il faut chercher les marques antérieures dans data.inpi.fr et eSearch de l'EUIPO (classes 9, 28 et 41). « La Grande Récré », une enseigne de jouets connue, est proche pour des jeux. L'équipe La Récré doit faire cette recherche de toute façon pour son application.
7. **Pas de promotion de l'autre app auprès de l'enfant.** Aucun écran enfant de Petits Savants ne parle de l'application La Récré, ne montre son logo et ne renvoie vers sa fiche. Pour Google Play (programme Familles), la promotion d'une autre app relève de la publicité et suit ses règles. On peut en parler aux **parents** (site, espace parents), sans lien cliquable pour l'enfant.
8. **Deux versions d'un même jeu.** Le prototype est la spécification des apps natives La Récré (SPEC § 1). Le portage dans Petits Savants en est une **variante assumée** : gestes de télécommande, labyrinthes en largeur, adversaire ralenti, pas d'autocollants, Premium invisible. Les **corrections de contenu** (coupures de syllabes, espaces fines) concernent aussi La Récré. On ouvre un ticket dans `larecre_ios` et `larecre_android`, signé selon leurs règles (`[Game Designer]` en première ligne, voir leur CLAUDE.md), pour garder un seul contenu juste.
9. **Déclarations des stores.** Rien ne change dans la fiche « Sécurité des données » de Petits Savants : la récré ne collecte rien et ne fait aucun appel réseau (test 28). La Récré native utilise Supabase : on n'en reprend rien.

**Cohérence visuelle.**

| Point | La Récré | Petits Savants | Recommandation |
|---|---|---|---|
| Polices | Baloo 2 | Fredoka (titres), Nunito (texte) | Fredoka et Nunito partout, y compris dans le texte des SVG. |
| Couleurs | Vives : rouge `#FF3B5C`, ciel `#2E8BFF`, soleil `#FFD21F`… ; encre `#1D1846` | Plus douces : corail `#EE5A47`, bleu `#1C8FD6`, jaune `#FFC53D` ; encre `#1E2B45` | Garder les couleurs vives **pour les jeux** (tuiles, pièces) : la cour de récré est plus colorée que la classe, et ça aide l'enfant à sentir qu'il a changé d'espace. Garder les **éléments d'interface de Petits Savants** (barre, boutons `cta`, anneau de focus, pied d'aides) et son encre pour le texte. |
| Illustrations | ~100 dessins SVG plats, contour plus foncé (`dk()`), reflets | Emojis, renard Filou, quelques objets SVG | Les dessins de La Récré sont **plus clairs que les emojis** : c'est l'occasion de les réutiliser aussi dans les leçons, pour remplacer une partie des emojis (A-RETENIR, 🟠). Il faut toutefois les accorder au style de Tilou et des animaux de l'enfant (rendu « jouet en vinyle » des planches 09) : décider si l'art des objets reste plat. |
| Apostrophe | Typographique `’` | Droite `'` | Reprendre le texte des jeux **tel quel** (`’`) et aligner tout Petits Savants sur `’` dans une PR séparée : c'est la bonne typographie française. |
| Espaces fines | U+202F dans le texte | Posées par `R.esc()` | Tout texte passe par `R.esc()`. |
| Personnages | Avatars Renard, Grenouille, Lapin, Hibou ; Lila ; personnage à habiller | L'animal choisi par l'enfant ; Tilou, guide de la marque | Garder les 4 avatars animaux dans le Memory à plusieurs (ils vont bien avec les animaux de l'app). L'animal endormi remplace la lune de la pause de La Récré. Le personnage humain à habiller ne vient pas : son interface sert à habiller l'animal. |

---

## 6. Résumé

1. La récré s'ouvre après 2 leçons différentes du jour, pour 10 min, une fois par jour (TPS-PS : après 1 leçon, 5 min). Le parent peut la régler ou la fermer, et ce temps compte dans la limite du jour.
2. On la présente comme le rythme de l'école (d'abord la classe, puis la récré), sans seuil de réussite, sans compte à rebours ni cadenas, pour ne pas dévaloriser les leçons (effet « moyen-fin »).
3. Elle se trouve dans un panneau du parcours, sur un bouton « La récré ! » du Bravo et dans un écran à 4 tuiles par rangée ; le jeu lié à la leçon du jour est mis en tête.
4. La fin est douce (rôle de Somnole, tenu par l'animal de l'enfant) : il bâille une fois 2 min avant, la partie en cours se termine (3 min au plus), puis on range ; il n'y a pas de bouton « encore ».
5. Lot 1, 8 jeux jouables aux seules flèches et OK : Memory, Coucou, Labyrinthe, La course (gratuits), Ombres, Musique, Formes, Syllabes (Premium).
6. Lot 2 : 14 jeux, dont L'heure, Compter, Suites et Alphabet en premier. Habillage rejoint « Mon animal » ; Trace n'est pas porté (doublon d'Écriture).
7. Les étoiles des jeux (1 à 3) servent de retour, jamais de monnaie. Pas d'autocollants ni de défi La Récré en lot 1.
8. Les jeux Premium sont invisibles pour l'enfant non abonné ; les parents les voient dans leur espace.
9. Code : `www/js/recre/` (registre, contexte de jeu, un fichier par jeu), écrans dans `recre.js`, CSS préfixé `rc-`, porté en ES5, rien en `vw` ni `vh`.
10. Le contexte de jeu range tous les minuteurs au changement d'écran ; les touches passent par `handlers.key` et `routeKey`, aussi pour le téléphone.
11. L'art et les données sont extraits du prototype par script (méthode d'`extract-art.mjs`), avec les coupures de syllabes corrigées.
12. Le prototype a la voix coupée, des unités de tablette et des polices Google à ne pas reprendre.
13. 32 tests Playwright couvrent les règles de temps, chaque jeu à la télécommande, le téléphone et la mise en page.
14. Droits : écrire une licence entre les éditeurs si ce ne sont pas les mêmes, garder Fredoka et Nunito, vérifier le nom « La Récré », ne jamais promouvoir l'autre app auprès de l'enfant.
15. Estimation : environ 23 jours-développeur pour le lot 1, en 4 PR.
