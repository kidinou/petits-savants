# 16 · L'architecture de l'app et la place des rubriques

*Étude 16, Petits Savants, 8 novembre 2026. Rôle : direction produit. Ce document range toutes les rubriques de l'app (côté enfant, côté famille, côté parents), dessine le plan de navigation, le premier lancement et le temps d'écran, puis liste ce qu'il faut simplifier et ce qu'on pourrait ajouter. La liste complète des actions est dans [BACKLOG.md](BACKLOG.md).*

**Sources lues** : [RECAP](RECAP.md), [00-REFERENTIEL](00-REFERENTIEL.md), [A-RETENIR](A-RETENIR.md), [SYNTHESE](SYNTHESE.md), les études [02](02-produit-ux-pedagogie.md), [03](03-gamification-mascottes.md), [04](04-aso-monetisation.md), [12](12-la-recre.md), [13](13-atelier-et-outils.md), [15](15-design-2026.md) et ses maquettes (`design-2026/*.png`), et le code de l'app actuelle (`/home/user/tvapp` : `README.md`, `www/js/app.js`, `www/js/parent.js`, et `store.js` pour les valeurs par défaut). **Aucun code n'a été modifié.**

**Les décisions des fondatrices, respectées partout ici** :
1. Le compagnon de l'enfant est **un animal qu'il choisit et habille**. **Tilou** est la mascotte de la marque et le guide.
2. **De la TPS au CM2**, rien avant la maternelle.
3. **On parle aux parents.** Aucune incitation à l'achat envers l'enfant.
4. **Aucune parole affective ni mécanique qui retient l'enfant** (pas de « tu m'as manqué », pas de « encore une ? », pas de série à perdre, pas de bonus de retour).
5. **0 € de budget.**
6. **Outils parents gratuits, contenu Premium.**
7. **Écriture sur papier ou au téléphone.**
8. **Thèmes et réglages d'accessibilité.**
9. **La synthèse vocale actuelle sonne mal** : c'est un chantier à venir (ici, on prévoit seulement la place de la voix, pas la solution).

Les points qui demandent un choix des fondatrices sont marqués **❓ À décider**, avec ma recommandation. Ils sont regroupés au § 14.

---

## 0. En bref

1. **Trois portes, pas plus.** L'écran commun « Qui apprend aujourd'hui ? » mène à l'**espace de chaque enfant** (sans code), à **« À la maison »** (les outils de la famille, sans code pour les lancer) et à **l'Espace parents** (avec code). Tout le reste est rangé derrière une de ces trois portes.
2. **La leçon du jour en 2 appuis** : OK sur son profil, OK sur la proposition du jour. C'est l'usage n° 1, il doit être le plus court.
3. **Un accueil par cycle** : un accueil « Petits » pour la maternelle (une grande porte, aucun chiffre), le paysage des maquettes pour le CP-CE2, et un accueil « Grands » plus sobre pour le CM1-CM2. Même contenu, même code, trois mises en page.
4. **Un symbole = un sens**, pour que l'enfant de 3 ans comme celui de 10 ans s'y retrouve : les **étoiles** = ce qu'on gagne ; les **lanternes** = les jours de la semaine ; le **soleil** = le temps qui reste ; la **cloche** = la récré ; le **cadenas** = réservé aux parents (jamais au Premium).
5. **Le programme du jour remplace la quête « Termine 3 leçons »** : une leçon nouvelle et une révision (une seule leçon en TPS-PS), puis la récré s'ouvre. Une seule structure de journée au lieu de trois panneaux qui se disputent l'écran.
6. **Rien de Premium n'est visible pour l'enfant**, ni dans les leçons, ni dans la récré, ni dans Mon animal. L'app actuelle affiche encore un cadenas « Pour plus tard » sur le parcours : à retirer en priorité.
7. **Le premier lancement en 2 à 3 minutes** : d'abord le parent (code, prénom, classe, temps d'écran, écriture, confort), puis l'enfant (son animal, son nom, son écran), et on arrive directement dans la première leçon. Tout le reste peut attendre.
8. **Le temps d'écran** : une durée par jour réglée par le parent (avec une valeur conseillée selon la classe), une option « choisir la durée à chaque séance », un **soleil qui se couche** toujours visible en haut à droite, et un écran « C'est l'heure de la pause » que seul le code parent rouvre.
9. **On simplifie avant d'ajouter** : 25 simplifications au § 12 (dont la suppression des barres d'aide, de la colonne de widgets, des badges de volume, de « Ajouter un enfant » sur l'écran des enfants, de la couleur de profil).
10. **Les ajouts** : 30 idées notées au § 13, avec un avis franc. Les meilleures : l'idée du soir, les minuteurs, les routines, la bulle de calme, les histoires audio écran noir. À ne pas faire : le calendrier de l'Avent quotidien, les recommandations sur l'écran d'accueil de Google TV, l'IA qui converse, le classement entre enfants.

---

## 1. Les règles de rangement

Ces six règles servent de filtre à toute nouvelle rubrique.

| # | Règle | Ce que ça veut dire concrètement |
|---|---|---|
| 1 | **Un écran, un héros.** | Une seule chose est mise en avant par écran, et le focus part dessus. L'accueil de l'enfant met en avant **la proposition du jour**, pas dix boutons (étude 15 § 1.1 : « l'œil ne sait pas où aller »). |
| 2 | **L'enfant voit ce qu'il apprend ; le parent voit les réglages, les chiffres et l'argent.** | Pas de pourcentage, de minutes chiffrées en tableau ni de prix en euros côté enfant. « Du premier coup 5/5 » passe chez les parents (étude 15 § 7.6). |
| 3 | **Le plus fréquent est le plus court.** | Leçon du jour : 2 appuis. Minuteur du brossage de dents : 3 appuis. Régler le temps d'écran : derrière le code, c'est normal que ce soit plus long. |
| 4 | **Rien de Premium côté enfant.** | Un contenu fermé n'existe pas pour l'enfant : ni cadenas, ni grisé, ni « demande à tes parents » (référentiel § 1.2). |
| 5 | **La famille n'est pas dans le profil d'un enfant.** | Les minuteurs, routines et la bulle de calme servent à toute la maison : ils sont sur l'écran commun, pas dans l'espace de Léa. Ils ne comptent pas dans son temps d'écran (étude 13 § 5.1). |
| 6 | **Le code parent protège ce qui coûte, efface ou règle.** | Achat, temps d'écran, suppression, réglages, ajout d'un enfant, modification d'un outil. Il ne protège pas ce qui est sans risque (lancer un minuteur, choisir le thème de sa chambre). |

---

## 2. Le plan de navigation

### 2.1 L'arbre des écrans

```
Lancement
├─ Écran de chargement : Tilou, « ? » → « ! » (2 s ; OK pour passer)
├─ [1er lancement seulement] Premier lancement (§ 10) → arrive dans la 1re leçon
│
└─ QUI APPREND AUJOURD'HUI ?  (écran commun, sans code)
   │
   ├─ [carte de chaque enfant] ──► ACCUEIL DE L'ENFANT (mise en page selon le cycle, § 4)
   │   ├─ La proposition du jour (leçon du jour, ou révision du jour)
   │   │     └─ Leçon (diapositives) → Exercices → Bravo
   │   │           ├─ « La récré ! » (quand elle s'ouvre)
   │   │           ├─ Mon animal
   │   │           └─ Continuer → retour à l'accueil
   │   ├─ Les matières (5) → parcours de la matière → unités → leçons
   │   ├─ La récré (cabane, seulement quand elle est ouverte)
   │   │     └─ Grille des jeux → jeu → fin de récré (l'animal range les jeux)
   │   ├─ Mon animal
   │   │     ├─ Habiller (tête, visage, cou, haut, pieds)
   │   │     ├─ Ma chambre (le thème de l'écran, le bocal des fiertés)
   │   │     └─ Mes médailles (badges, la semaine en lanternes)
   │   ├─ [fin de journée choisie] Finir pour aujourd'hui → « À demain, Léa. »
   │   └─ [temps atteint] C'EST L'HEURE DE LA PAUSE (verrouillé, § 11.4)
   │         ├─ Respirer avec la bulle (1 min)
   │         ├─ Au revoir → écran commun
   │         └─ Parent (code) → +5 min, +15 min, nouvelle séance
   │
   ├─ À LA MAISON  (sans code pour lancer ; code pour créer ou modifier)
   │   ├─ Tout de suite : l'outil du moment (routine du matin ou du soir, minuteur favori)
   │   ├─ Minuteurs (Aquarium, Sablier, Réveil, Dent, Coffre, Arc-en-ciel, + décors)
   │   ├─ Routines (le matin, le soir, les devoirs), avec version à imprimer
   │   ├─ Bulle de calme
   │   ├─ Chacun son tour · Dé géant · Dodos
   │   ├─ Devoirs et pauses (CP à CM2), ambiances calmes  [plus tard, lot 5 de l'étude 13]
   │   └─ L'atelier (code) → l'idée du soir, le catalogue des fiches
   │
   ├─ Téléphone (connecter un téléphone : QR code)
   │
   └─ PARENTS  (code)
       ├─ Les enfants → fiche d'un enfant
       │     ├─ Progrès (la semaine, à revoir, l'idée du soir, plus tard les compétences)
       │     ├─ Temps d'écran (par jour, à chaque séance, la récré)
       │     ├─ Matières (activées ou non)
       │     ├─ Confort et thème (avec l'aperçu en direct)
       │     └─ Profil (prénom, classe, animal, recommencer, supprimer)
       ├─ Ajouter un enfant
       ├─ L'atelier (mêmes fiches qu'« À la maison »)
       ├─ Réglages de la famille (voix, sons, écriture, son des minuteurs, code parent)
       ├─ Premium (abonnement, restaurer, code d'accès, résilier)
       ├─ Téléphone
       └─ Aide et informations (confidentialité, mentions légales, donner un avis, version)
```

**Règle de la touche Retour** : elle remonte toujours d'un niveau. Accueil de l'enfant → écran commun. Écran commun → quitter l'app. Dans une leçon : retour à l'accueil (la leçon reste à faire, rien n'est perdu). Dans un minuteur : « Arrêter le minuteur ? » avec le focus sur « Non » (étude 13 § 3.2).

### 2.2 Ce qui change par rapport à l'app actuelle (0.7.0)

| Aujourd'hui | Demain | Pourquoi |
|---|---|---|
| Profils : cartes des enfants, « Ajouter » (avec code), « Téléphone », « Espace parents ». | Cartes des enfants, **« À la maison »** en bandeau dessous, « Téléphone » et « Parents » en pilules discrètes. « Ajouter un enfant » passe dans l'Espace parents. | L'écran commun sert aux enfants et à la famille ; ajouter un enfant est une action d'adulte. |
| Parcours : bandeau d'unité, onglets des matières, colonne de droite (animal, quête, révision, minutes), barre d'aide. | Accueil selon le cycle, avec **une seule proposition du jour** au centre. Plus de colonne ni de barre d'aide. | Étude 02 § 1.2 : au moins 14 cibles sur l'écran, trop pour un enfant de 4 ans. |
| « Mon animal » s'ouvre depuis le compteur d'étoiles en haut à droite. | L'animal lui-même, debout à côté de la leçon du jour, ouvre « Mon animal » (et le compteur d'étoiles aussi). | L'enfant va vers son animal, pas vers un chiffre. |
| Le thème n'existe pas. | Le thème se choisit dans **Mon animal › Ma chambre** (enfant) et dans **Confort et thème** (parent). | Étude 15 § 5.3 : le thème est « la chambre » de l'animal. |
| Espace parents : une page par enfant qui mélange rapport et réglages. | Une fiche par enfant en 5 onglets (Progrès, Temps d'écran, Matières, Confort et thème, Profil). | Le parent trouve chaque réglage au même endroit, pour chaque enfant. |

---

## 3. L'écran commun : « Qui apprend aujourd'hui ? »

C'est l'écran d'accueil de l'app, celui qu'on voit à chaque ouverture. Ambiance « veillée » de la maquette `02-profils` (guirlande de lanternes, fond indigo doux).

| Zone | Ce qu'on y met | Pourquoi |
|---|---|---|
| Haut à gauche | Le logo avec Tilou. | La marque, sans prendre de place. |
| Haut à droite | Deux pilules discrètes : **Téléphone** et **Parents** (avec un petit cadenas). | Ce sont des actions d'adulte : visibles, mais pas sur le chemin de l'enfant. Le cadenas veut dire « pour les parents », jamais « Premium ». |
| Centre | Le titre « Qui apprend aujourd'hui ? » puis **une carte par enfant** : son animal habillé, son prénom, « avec Praline », sa classe. Sous la carte qui a le focus : « Encore 20 min aujourd'hui » ou « Pause jusqu'à demain ». | L'enfant se reconnaît à son animal avant de savoir lire son prénom. Le temps restant prépare la règle avant d'entrer. |
| Bas | Un bandeau **« À la maison »** (l'horloge de Minuto, ou Tilou avec un sablier) : « Minuteurs, routines, bulle de calme ». Une flèche ▼ depuis n'importe quelle carte y mène. | Les outils de la famille sont à un appui de l'accueil, et ne passent pas par le profil d'un enfant. |
| Tilou | Il dépasse du bas de l'écran et dit seulement « Bonjour ! » ou « Bonsoir ! », puis le titre est lu. | La maquette lui fait dire « Bonsoir ! On joue ? » : on retire « On joue ? », une invitation à rester (décision 4). |

**Le focus** part sur la carte du dernier enfant qui a joué. Avec un seul enfant, un appui sur OK suffit pour entrer.

**❓ À décider : ouvrir directement l'espace de l'enfant quand il n'y a qu'un profil ?** Ma recommandation : **non**. On gagne un appui, mais on perd la porte « À la maison » et le moment où le parent voit le temps restant. L'écran commun reste la « page du salon ».

---

## 4. L'accueil de l'enfant, selon le cycle

Un enfant de 3 ans et un enfant de 10 ans n'ont pas besoin du même écran. Le contenu est le même (leçons, récré, animal) ; la **mise en page** change avec la classe du profil. Le parent peut forcer une autre mise en page dans Confort et thème (par exemple un GS très à l'aise).

### 4.1 Les trois accueils côte à côte

| | **Accueil « Petits »** (TPS, PS, MS, GS) | **Accueil « Explorateurs »** (CP, CE1, CE2) | **Accueil « Grands »** (CM1, CM2) |
|---|---|---|---|
| Lecture | L'enfant ne lit pas ou commence à peine. | Il apprend à lire, puis lit. | Il lit bien. |
| Le héros | **Une grande porte** : la leçon du jour, avec son image, sur la colline, l'animal à côté. | Le **paysage** des maquettes (`03-parcours`) : la route, les dômes, la carte-bulle de la leçon du jour. | Une grande carte **« Reprendre »** (la leçon du jour) et une carte **« Révision du jour »**. |
| Les matières | En bas, **5 grosses images** (bulle, cubes, feuille, nuage, boucle), dites à voix haute au focus. Pas d'unités. | En haut, 5 pastilles ; la matière active s'étire et montre son nom. Les unités défilent avec ◀ ▶ au bout de la route. | En haut, 5 onglets avec leur nom. À droite, la **liste des unités** de la matière avec leur avancement (cases cochées). |
| Le programme du jour | 1 leçon (TPS, PS) ou 2 (MS, GS), montrées par 1 ou 2 grosses pastilles qui se cochent. Pas de chiffres. | 2 pastilles (une leçon nouvelle, une révision) en haut à droite. | Pareil, avec les titres écrits. |
| Les étoiles | **Pas de compteur.** L'animal porte son dernier cadeau ; le cadeau suivant arrive tout seul (étude 03 § 5.6, « Mode Petits »). | Le compteur d'étoiles (pour habiller l'animal). | Le compteur d'étoiles et la **tirelire à objectif** (étude 03 § 5.6). |
| La semaine | Rien sur l'accueil (dans Mon animal). | 7 lanternes en haut. | 7 lanternes en haut. |
| Le temps | Le **soleil** seul (§ 11.3). | Le soleil et « Encore 12 min ». | Le soleil et « Encore 12 min ». |
| La récré | La cabane apparaît sur la colline quand elle s'ouvre. | La cabane apparaît au bout de la route. | Une carte « La récré est ouverte » sous « Reprendre ». |
| L'animal | Grand, à côté de la porte ; OK sur lui ouvre Mon animal. | Debout sur la route, à côté de la leçon du jour. | Petit, en bas à gauche (il ne fait pas « bébé »). |
| La voix | Tout est lu : la proposition à l'arrivée, chaque élément au focus. | Tout est lu au focus. | Les consignes de leçon sont lues ; les boutons ne se lisent qu'au bout d'1 s de focus (réglable). |
| Taille du texte | Moyen (115 %) par défaut. | Moyen (CP), Petit (CE1, CE2). | Petit. |
| Thème par défaut | Pop. | Pop. | Pop, avec une proposition « Bleu » ou « Espace » au premier lancement. |
| Passer la leçon | Masqué. | Pilule discrète. | Pilule discrète. |

### 4.2 Pourquoi trois et pas un ou sept

- **Un seul accueil** (l'app actuelle) donne trop à un enfant de 3 ans (14 cibles, des chiffres, des onglets de mots) et fait « bébé » à un enfant de 10 ans (collines, gros dômes). Depuis l'arrivée du CM1-CM2, l'écart est de 8 ans.
- **Sept accueils** (un par âge) coûteraient cher à faire et à tester. Les **cycles** de l'école sont la bonne coupure : ils correspondent à la lecture (non-lecteur, apprenti lecteur, lecteur) et les parents les connaissent.
- **Coût** : la maquette du paysage existe (`03-parcours`). L'accueil « Petits » réutilise ses éléments (colline, dôme, animal) avec moins de choses. L'accueil « Grands » réutilise les cartes de l'Espace parents. Estimation : **3 à 5 jours** de plus que le lot 3 de l'étude 15.

### 4.3 La proposition du jour : comment l'app choisit

C'est le cœur de l'accueil : **une seule chose à faire, lancée par OK**. On reprend le rituel d'ouverture de l'étude 03 § 6.1, sans parole affective : Tilou dit « Bonjour Léa ! Aujourd'hui : les sons « ch » et « j ». » (pas « On continue ? », pas « Tu m'as manqué »).

Ordre de choix, calculé sur la télé :
1. **Une révision est prête** (une leçon à 1 ou 2 étoiles faite il y a au moins un jour, ou le rythme J+1, J+3, J+7 quand il existera) et aucune révision n'a été faite aujourd'hui → la révision du jour.
2. Sinon, **la leçon suivante** de la matière la moins pratiquée cette semaine (parmi les matières activées par le parent).
3. Sinon (tout est fait dans la classe, ou plus de leçon ouverte), la leçon cadeau du jour pour un enfant non abonné, ou une révision libre.
4. Le **programme du jour fait** : la proposition devient **« Finir pour aujourd'hui »** (focus par défaut) et « Encore une leçon » passe au second plan. C'est le seul « coup de pouce » permis : vers la pause (étude 03 § 2, principe 5).

L'enfant peut toujours faire autre chose (choisir une matière, rejouer une leçon) : la proposition guide, elle n'enferme pas.

### 4.4 Ce qu'on n'affiche jamais à l'enfant

- Un cadenas Premium, un « Pour plus tard », un prix en euros, un « demande à tes parents ».
- Un chiffre de réussite (« 3/5 du premier coup »), un pourcentage, un classement.
- Un compte à rebours en secondes, une couleur qui vire au rouge, un clignotement.
- « Il te faut encore 12 étoiles » (l'objet trop cher montre son prix grisé, sans plus : étude 15 § 3).
- Une phrase qui retient : « Encore une ? », « Ne pars pas », « Je suis content de te voir » (le bonus de retour de l'étude 03 § 5.1 est abandonné).

---

## 5. Les rubriques de l'enfant

| Rubrique | Où elle est | Comment on l'ouvre | Compte dans le temps d'écran ? | Gratuit / Premium |
|---|---|---|---|---|
| **La proposition du jour** | Au centre de l'accueil | OK (focus par défaut) | Oui | Selon la leçon proposée (jamais une leçon fermée) |
| **Les leçons par matière** | Pastilles des matières (accueil) | ▲ ou ▼ puis ◀ ▶, OK | Oui | Les 2 premières leçons de chaque matière, dans chaque classe, gratuites ; une leçon cadeau par jour ensuite ; le reste Premium, **invisible** pour l'enfant non abonné |
| **La révision du jour** | Dans la proposition du jour (et carte dédiée en cycle 3) | OK | Oui | Toujours sur une leçon que l'enfant peut ouvrir |
| **La récré** | Cabane sur l'accueil + bouton « La récré ! » sur l'écran Bravo, **seulement quand elle est ouverte** | OK | **Oui** (étude 12 § 3.2) | 4 jeux gratuits, les autres Premium et invisibles |
| **Mon animal et sa chambre** | L'animal sur l'accueil, le compteur d'étoiles, le bouton « Mon animal » du Bravo | OK sur l'animal | Oui | Les objets Premium sont invisibles pour l'enfant non abonné |
| **Finir pour aujourd'hui** | Proposition du jour quand le programme est fait ; écran de fin de récré | OK | Non (sortie) | — |

### 5.1 Les leçons par matière

On garde l'ordre actuel des matières : **Langage (puis Français), Maths, Le monde, Anglais, Écriture**, avec une couleur, une icône et une forme chacune (étude 15 § 6.2 : jamais la couleur seule). Une leçon garde son déroulé (diapositives lues, puis 5 exercices), on change seulement l'habillage (lot 3 de l'étude 15).

**Écriture** : le mode « papier » ou « téléphone » choisi au premier lancement s'applique ; si le parent a répondu « plus tard », la question revient à la première leçon d'écriture, posée **au parent** (« Pour écrire, Léa utilise… une feuille / le téléphone »), une seule fois.

### 5.2 La récré

On reprend l'étude 12 telle quelle sur le fond : elle s'ouvre après le programme du jour (2 leçons différentes, ou 1 en TPS-PS), dure 10 minutes (5 en TPS-PS), une fois par jour, compte dans le temps d'écran, finit doucement (l'animal bâille une fois, puis range les jeux). Ce qui change ici :
- **Sa place** : une cabane sur l'accueil (pas un onglet) et le bouton « La récré ! » sur le Bravo de la leçon qui l'ouvre. Fermée, **elle n'est pas montrée** (pas de panneau « en attente » avec « Après 2 leçons », que l'étude 12 proposait : avec le programme du jour en pastilles, ce panneau ferait doublon).
- **Le CM1-CM2** : la tranche « 8 ans et + » du prototype s'arrête au CE2. Il faut un niveau de difficulté de plus (labyrinthes plus grands, tables jusqu'à × 12, syllabes à 4) ; sinon le Memory et La course suffisent pour démarrer.

### 5.3 Mon animal et sa chambre

Trois onglets au lieu de quatre zones :
1. **Habiller** : le dressing par emplacement de la maquette `06-mon-animal` (OK essaie l'objet sur l'animal, un second OK l'offre avec les étoiles). En maternelle, pas de prix : on choisit parmi ses objets, le cadeau suivant arrive après une leçon.
2. **Ma chambre** : le **thème** de l'écran (vu par la fenêtre de la chambre), puis, plus tard, des objets de chambre. Le **bocal des fiertés** (étude 13 § 3.9) est posé sur l'étagère : OK dessus fait relire les fiertés ajoutées par le parent.
3. **Mes médailles** : les badges en médailles sur le mur (non gagnés : silhouette en creux avec leur phrase) et la semaine en 7 lanternes.

Le câlin (OK sur l'animal) reste : l'animal ferme les yeux et fait son petit son, **sans parler** (déjà le cas depuis le commit « Le câlin à l'animal : il réagit, mais ne dit plus rien »).

---

## 6. « À la maison » : les outils de la famille

L'étude 13 a tout décrit (Minuto adapté à la télé). Ici, on fixe la place et l'ordre.

### 6.1 L'écran « À la maison »

| Zone | Contenu |
|---|---|
| **Tout de suite** (première rangée, focus par défaut) | L'outil le plus probable selon l'heure : de 6 h à 10 h, la **routine du matin** ; de 17 h à 21 h, la **routine du soir** ; sinon, le **dernier minuteur lancé**. S'il n'existe aucune routine : « Les dents, 2 min ». |
| **Les outils** (deuxième rangée, 6 grandes tuiles) | Minuteurs · Routines · Bulle de calme · Chacun son tour · Dé géant · Dodos. Plus tard : Devoirs et pauses. |
| **Pour les parents** (troisième rangée, avec un petit cadenas) | L'atelier (idée du soir et catalogue) · Modifier les outils. |

### 6.2 Les règles

- **Lancer un outil : sans code.** Un enfant qui lance un aquarium ou la bulle de calme ne risque rien ; un parent qui doit taper un code pour le brossage de dents n'utilisera pas l'outil (étude 13 § 5.1).
- **Créer ou modifier** (durées, noms, étapes des routines, dates des Dodos) : code parent, ou sur le téléphone connecté (code une fois par session).
- **L'atelier : code parent**, même s'il est rangé ici. Ses fiches parlent à l'adulte, certaines demandent la cuisine ou de l'eau (étude 13 § 1.2), et le catalogue complet est Premium : l'enfant ne doit pas y voir de contenu « fermé ». **❓ À décider** : l'étude 13 rangeait l'atelier dans l'Espace parents ; je le mets **aussi** dans « À la maison », derrière le code, parce que c'est là qu'une famille le cherche. Les deux entrées mènent au même écran.
- **Temps d'écran** : les outils **ne comptent pas** (aucun profil n'est ouvert). Garde-fou : les décors sont lents et l'écran revient à « Qui apprend aujourd'hui ? » 5 minutes après la fin d'un outil.
- **Gratuit** : tous les outils, et l'idée du soir. **Premium** : le catalogue complet de l'atelier (21 fiches gratuites, 3 par classe).
- **CM1-CM2** : les minuteurs en mode « grands » (chiffres et heure de fin), la routine « devoirs » et « Devoirs et pauses » sont les outils utiles à cet âge. Les fiches de l'atelier s'arrêtent au CE2 : 24 fiches CM1-CM2 sont à écrire (BACKLOG).

---

## 7. L'Espace parents

Ambiance « jour », sobre, sans animal ni Tilou (étude 15 § 7.10). On y entre par le code.

### 7.1 L'accueil des parents

1. **Les enfants** : une carte par enfant avec, en une ligne, « Aujourd'hui : 14 min sur 20 · 2 leçons · la récré ». OK ouvre sa fiche.
2. **Ajouter un enfant.**
3. **L'atelier** (même écran que dans « À la maison »).
4. **Réglages de la famille** : voix, sons, écriture (papier ou téléphone), son de fin des minuteurs, ambiances calmes, code parent, tout effacer.
5. **Premium** : l'écran de l'abonnement (étude 04 § 3.2), restaurer, code d'accès, **résilier**.
6. **Téléphone** : connecter un téléphone.
7. **Aide et informations** : confidentialité, mentions légales, donner un avis (la demande d'avis de Google, seulement ici, après des progrès visibles), version.

Les messages « parents » (fin d'essai à J12, idée du soir, « toutes les leçons gratuites de la classe sont faites ») s'affichent en **bannière en haut de cet accueil**, une à la fois, jamais sur un écran d'enfant.

### 7.2 La fiche d'un enfant, en 5 onglets

| Onglet | Contenu | Aujourd'hui |
|---|---|---|
| **Progrès** | La semaine (temps par jour, leçons, récré en couleur à part) ; « À revoir » avec, pour chaque leçon, l'icône « idée » de l'atelier ; **l'idée du soir** ; plus tard, les compétences « acquis / en cours / pas encore vu » (étude 02 § 5.1) et le bocal des fiertés (ajouter une fierté). | Graphique 7 jours, leçons et réussite par matière, « À revoir », phrase « Ce soir » |
| **Temps d'écran** | Durée par jour ; « Choisir la durée à chaque séance » ; la récré (réglage de l'étude 12 § 3.2 et jeux affichés) ; « 15 minutes de plus aujourd'hui ». | « Temps par jour » qui défile |
| **Matières** | Activer ou non chaque matière. | Existe |
| **Confort et thème** | Thème, taille du texte, mode calme, formes en plus des couleurs, police pour lire, passer tout seul, accueil (Petits, Explorateurs, Grands), avec l'aperçu en direct (maquette `07-confort-et-themes`). | N'existe pas |
| **Profil** | Prénom, classe, animal et son nom, recommencer à zéro, supprimer. | Existe (avec la couleur, qui disparaît) |

---

## 8. Ce qui est accessible sans code et avec code

| Sans code | Avec le code parent |
|---|---|
| Choisir son profil | Ajouter, modifier, supprimer un enfant ; recommencer à zéro |
| Faire les leçons, les révisions, la leçon cadeau | Activer ou couper une matière |
| La récré (quand elle est ouverte) | Régler la récré (fermée, durée, après combien de leçons, jeux cachés) |
| Mon animal : habiller, offrir un objet avec ses étoiles, câlin | Régler le temps d'écran ; donner du temps en plus ; ouvrir une nouvelle séance |
| Choisir le thème de sa chambre | Confort et thème pour un enfant (taille du texte, mode calme, police…) |
| Lancer un outil d'« À la maison » (minuteur, routine, bulle, dé, Chacun son tour, Dodos) et cocher ses étapes | Créer ou modifier un minuteur, une routine, un Dodo |
| Voir l'idée du soir lue par la voix en fin de séance (si le parent l'a laissée) | L'atelier (catalogue, idée du soir, historique) |
| Respirer avec la bulle sur l'écran de pause | Premium : voir l'offre, acheter, restaurer, code d'accès, résilier |
| Connecter un téléphone pour répondre (le QR code est montré) | Réglages de la famille : voix, sons, écriture, code |
| — | Tout effacer |

**❓ À décider : le thème sans code ?** Ma recommandation : **oui** pour le thème (rien de risqué, et c'est un vrai choix d'enfant), **non** pour la taille du texte et le mode calme (un enfant pourrait les couper alors qu'ils l'aident).

---

## 9. Combien d'appuis pour chaque usage

*Un appui = une touche de la télécommande. Le code parent compte 4 appuis avec les touches chiffres (environ 10 avec le pavé à l'écran sur une télécommande sans chiffres). On part de l'écran commun, le focus sur l'enfant qui a joué en dernier. « Aujourd'hui » est estimé d'après le code de la 0.7.0 (ordre des éléments focalisables), à confirmer sur une vraie télé.*

| Usage | Aujourd'hui | Demain | Le chemin, demain |
|---|---|---|---|
| **Lancer la leçon du jour** | 2 | **2** | OK (profil) · OK (proposition du jour) |
| Faire la révision du jour | 4 à 6 | **2** (si proposée) ou **3** | OK · OK ; ou OK · ▶ · OK (cycle 3 : carte « Révision ») |
| Changer de matière puis lancer sa leçon | 5 à 7 | **4 à 6** | OK · ▼ (images, cycle 1) ou ▲ (pastilles, cycles 2-3) · ▶ × n · OK · OK |
| Ouvrir la récré (depuis le Bravo qui l'ouvre) | — | **2** | OK (« La récré ! », focus par défaut) · OK (jeu conseillé) |
| Ouvrir Mon animal | 5 à 6 | **3** | OK · ◀ (l'animal) · OK |
| Changer le thème (enfant) | — | **6 à 8** | Mon animal (3) · ▲ · ▶ (Ma chambre) · OK · ▶ × n · OK |
| Lancer le minuteur des dents | — | **3** | ▼ (À la maison) · OK · OK (« Tout de suite ») |
| Lancer la routine du soir | — | **3** | ▼ · OK · OK (« Tout de suite », le soir) |
| Respirer avec la bulle | — | **4 à 5** (depuis l'accueil) · **1** (depuis l'écran de pause) | ▼ · OK · ▼ · ▶ · OK |
| Voir le progrès d'un enfant (parent) | 7 à 8 | **7 à 8** | ▲ (Parents) · OK · code (4) · OK (carte) |
| Donner 15 minutes de plus (écran de pause) | 6 | **7** | ▶ (Parent) · OK · code (4) · OK (« +15 min ») |
| Régler le temps d'écran (parent) | 9 à 10 | **10 à 11** | Parents (6) · OK (carte) · ▶ (Temps d'écran) · OK · ▼ · OK |
| Choisir la durée de la séance (option) | — | **6 à 7** | OK (profil) · code (4) · ▶ · OK |
| Créer un deuxième enfant | 8 + formulaire | **8** + formulaire | Parents (6) · ▼ · OK (Ajouter) · formulaire |

**Ce qu'on vise** : 2 appuis pour l'usage n° 1, 3 pour les usages quotidiens de la famille, et pas plus de 8 avant d'atteindre un réglage parent. Un test (étude 15 § 10) vérifie qu'un enfant de 4 ans trouve la leçon du jour en moins de 5 secondes.

---

## 10. Le premier lancement, pas à pas

### 10.1 Le principe

**Le parent d'abord, l'enfant ensuite**, parce qu'on parle aux parents et que ce sont eux qui règlent le temps d'écran et le confort. L'étude 15 § 7.1 proposait l'inverse (l'enfant d'abord, le code à la fin) ; je garde son idée de fond (que l'enfant voie Tilou tout de suite et choisisse son animal lui-même), mais **le parent passe en premier** : tant que le code n'existe pas, un enfant seul pourrait tout régler.

**Objectif** : de l'installation à la première leçon en **2 à 3 minutes**, et tout ce qui n'est pas indispensable remis à plus tard.

### 10.2 Les écrans

| # | Écran | Qui | Ce qu'on demande | Valeur par défaut (focus) | Appuis | Peut attendre ? |
|---|---|---|---|---|---|---|
| 0 | **Chargement** | — | Tilou, « ? » → « ! » | — | 0 | — |
| 1 | **Bonjour** | Parent | Tilou : « Bonjour ! Moi, c'est Tilou. » Texte : « Un parent prépare l'app en 1 minute, puis votre enfant choisit son animal. » | « Commencer » | 1 | Non |
| 2 | **Le code parent** | Parent | Choisir 4 chiffres, puis les retaper. Une phrase dit ce qu'il protège : « le temps d'écran, les réglages et les achats ». | — | 8 | Non |
| 3 | **Le prénom** | Parent | Clavier à grandes touches, ou le téléphone par QR code. | — | 10 à 25 | Non |
| 4 | **La classe** | Parent | 9 pastilles : TPS, PS, MS, GS, CP, CE1, CE2, CM1, CM2, avec l'âge, lues à voix haute. | — | 2 à 6 | Non |
| 5 | **Le temps d'écran** | Parent | « Combien de temps par jour ? » La durée conseillée pour sa classe est déjà choisie (§ 11.1). Une case : « Choisir la durée à chaque séance ». Une phrase : « La récré et Mon animal comptent dedans. Les minuteurs de la maison, non. » | La durée conseillée | 1 à 3 | Non (c'est une décision de parent) |
| 6 | **Pour écrire** | Parent | Trois cartes : **Sur une feuille** (la télé montre le tracé, l'enfant écrit sur papier) · **Au téléphone** (QR code) · **Je choisirai plus tard**. | « Sur une feuille » (rien à installer) | 1 à 2 | Oui : « plus tard » repose la question à la 1re leçon d'écriture |
| 7 | **Le confort** | Parent | Une seule page : « Texte plus grand ? » · « Moins d'animations (mode calme) ? ». Le reste (police, formes, volumes, accueil) est dans Confort et thème. | Selon l'âge (Moyen jusqu'au CP) ; mode calme activé tout seul si la télé demande moins de mouvement | 1 | Oui (« C'est bon » garde les valeurs) |
| 8 | **Le relais** | Parent → enfant | Tilou : « Maintenant, c'est à Léa ! » Le parent passe la télécommande. | « À Léa ! » | 1 | — |
| 9 | **Choisis ton animal** | Enfant | Le manège (`01-choix-animal`) : ◀ ▶, le nom de l'animal est dit, OK choisit. | La licorne au centre | 2 à 8 | Non (c'est le cœur de l'attachement) |
| 10 | **Son nom** | Enfant (et parent) | 6 noms lus à voix haute, ou « Invente un nom » (le parent tape). | Le 1er nom | 1 à 3 | Oui (le nom se change dans le profil) |
| 11 | **Ton écran** | Enfant | 4 vignettes (Pop, Rose, Bleu, un univers), lues à voix haute. | Pop | 1 à 3 | Oui (dans Ma chambre, à tout moment) |
| 12 | **C'est parti !** | Enfant | « C'est parti, Léa ! » L'animal et Tilou partent ensemble… **directement dans la première leçon** de la proposition du jour. | — | 0 | — |

**Total** : 12 écrans, **30 à 60 appuis**, **2 à 3 minutes**. Le prénom est l'étape la plus longue : le QR code du téléphone est montré dès cet écran.

### 10.3 Ce qui peut attendre (et où on le retrouve)

| Ce qui attend | Où et quand |
|---|---|
| Un deuxième enfant | Parents › Ajouter un enfant |
| La police pour lire, les formes en plus des couleurs, les volumes, l'accueil | Parents › fiche › Confort et thème |
| La récré (réglages) | Valeurs par défaut selon la classe ; Parents › fiche › Temps d'écran |
| Les matières | Toutes activées ; Parents › fiche › Matières |
| Le téléphone | Quand on en a besoin (écriture au téléphone, taper un nom) |
| « À la maison » | Découvert sur l'écran commun ; une bannière unique dans l'Espace parents la présente |
| Premium | **Pas dans le premier lancement.** Une seule phrase informative à l'écran 5 : « Les 2 premières leçons de chaque matière sont gratuites pour toujours. » L'offre se découvre dans l'Espace parents. |
| Un test de niveau | Pas au premier lancement (§ 13) |

**❓ À décider : l'offre d'essai à la fin du premier lancement ?** L'étude 04 § 3.2 recommandait une carte « Essayer Premium 14 jours » à la fin de l'accueil parent, parce que 70 à 80 % des essais commencent le premier jour. Ma recommandation : **non**. À ce moment, l'enfant est à côté du parent et attend son animal ; une offre à cet endroit allonge le parcours et frôle la règle « rien devant l'enfant ». Compromis possible : la carte apparaît **en bannière dans l'Espace parents** dès la première ouverture du code après la première leçon, le jour même.

### 10.4 Les familles qui ont déjà l'app (mise à jour)

À la première ouverture après la mise à jour : un écran pour l'enfant, « Ton ami a changé de look ! », qui reprend son animal emoji dans la nouvelle espèce la plus proche (étude 15 lot 1) et propose d'en changer ; et une bannière pour le parent dans l'Espace parents : « Nouveau : thèmes, confort, À la maison. » Rien n'est perdu, rien n'est réinitialisé.

---

## 11. Le temps d'écran

### 11.1 La durée par jour

**Réglée par enfant, par le parent.** Valeurs : 10, 15, 20, 30, 45, 60, 90 minutes, et « Sans limite » (en dernier, avec la phrase « Nous conseillons une durée, surtout avant 6 ans. »). Aujourd'hui l'app propose 15 à 90 minutes et met **30 minutes pour tout le monde** par défaut.

**Valeur conseillée selon la classe** (proposée au premier lancement, modifiable) :

| Classe | Par jour | La récré dedans | Pourquoi |
|---|---|---|---|
| TPS | **10 min** | 5 min après 1 leçon | Pas d'écran conseillé avant 3 ans en France (commission d'experts, 2024) ; la TPS se fait **avec un adulte** (étude 02 § 2.6). |
| PS, MS | **15 min** | 5 min après 1 leçon (PS), 10 min après 2 (MS) | OMS : au plus 1 h d'écran par jour de 2 à 4 ans, « moins c'est mieux », et l'app n'est qu'un écran parmi d'autres. |
| GS, CP | **20 min** | 10 min après 2 leçons | 2 leçons de 5 à 8 min et une récré courte. |
| CE1 à CM2 | **30 min** | 10 min après 2 leçons | La valeur actuelle, qui convient. |

**Ce qui compte** : l'accueil de l'enfant, les leçons, la récré, Mon animal, le Bravo. **Ce qui ne compte pas** : l'écran commun, « À la maison », l'Espace parents, l'écran de pause. (Le code actuel compte déjà l'accueil, les leçons, le Bravo et Mon animal, toutes les 10 secondes.)

**Le jour change à 4 h du matin** (et non à minuit), comme les routines de l'étude 13 : une soirée tardive ne rouvre pas une nouvelle journée.

### 11.2 L'option « choisir la durée à chaque séance »

Pour les parents qui préfèrent décider au moment même (« ce soir, 10 minutes seulement »).

- **Réglage** : Parents › fiche › Temps d'écran › « Choisir la durée à chaque séance » (désactivé par défaut). La durée par jour reste le **plafond**.
- **À l'ouverture du profil** : un écran « Combien de temps aujourd'hui ? » montre 3 ou 4 durées (10, 15, 20, 30 min), **jamais plus que ce qui reste du jour**. Le parent tape le code, puis choisit (ou choisit sur son téléphone connecté, qui demande le code une fois).
- **À la fin de la séance** : l'écran de pause (§ 11.4) dit « La séance est finie » ; une nouvelle séance demande à nouveau le code.
- **Si le parent n'est pas là** : la séance ne démarre pas. C'est voulu : l'option est faite pour un écran accompagné.

**❓ À décider : laisser l'enfant choisir seul sa durée, dans le plafond du jour ?** Ma recommandation : **non**. C'est un choix sans enjeu pour lui (il prendra toujours le plus long) et la demande des fondatrices est que le parent décide. Le plafond par jour suffit pour les familles qui ne veulent pas taper le code à chaque fois.

### 11.3 Le minuteur visible pour l'enfant : le soleil

L'étude 12 proposait 5 lanternes qui s'éteignent. Mais les lanternes servent déjà à la semaine : un même symbole pour deux choses embrouille un enfant de 4 ans. On prend donc **le soleil qui se couche**, qui annonce aussi l'écran de pause (la chambre de nuit).

| Règle | Détail |
|---|---|
| **Où** | Toujours au même endroit, **en haut à droite**, sur tous les écrans de l'enfant (accueil, leçon, Bravo, récré, Mon animal). Dans une leçon, en petit (80 px). |
| **Quoi** | Une petite colline et un soleil qui descend doucement derrière elle au fil du temps, le ciel qui passe du bleu au doré. En cycle 2 et 3, à côté : « Encore 12 min » (mis à jour chaque minute). En cycle 1, pas de chiffre. |
| **Ce qu'il ne fait jamais** | Pas de secondes, pas de rouge, pas de clignotement, pas de son qui insiste. |
| **2 minutes avant** | L'animal apparaît en petit et bâille **une fois** ; Tilou dit : « Bientôt la pause. » En mode calme, on prévient à 5 puis à 2 minutes (étude 15 § 6.4). |
| **Moins de 3 minutes** | On ne commence pas de nouvelle leçon ni de nouvelle partie : la proposition du jour devient « Finir pour aujourd'hui ». |
| **Pendant une leçon** | La leçon en cours **se termine** (pas de coupure en plein exercice), comme aujourd'hui. Pendant la récré, la partie en cours finit, 3 minutes au plus (étude 12 § 3.4). |
| **Sans limite** | Le soleil n'est pas affiché. |

### 11.4 L'écran « C'est l'heure de la pause » (temps atteint)

**Ambiance** : la chambre de l'animal, la nuit (étude 15 § 7.9). L'animal dort, Tilou bâille et sa perle s'éteint.

| Élément | Contenu |
|---|---|
| Titre | « C'est l'heure de la pause, Léa. » (ou « La séance est finie, Léa. » avec l'option du § 11.2) |
| Récapitulatif | « Aujourd'hui, tu as appris : » et 3 petites images (les leçons du jour). Pas de minutes, pas d'étoiles. |
| Phrase | « Ton animal se repose. À demain ! » Rien d'autre : ni « tu vas me manquer », ni « reviens vite ». |
| Bouton principal (focus) | **« Au revoir »** → l'écran commun. |
| Bouton | « Respirer avec la bulle » (1 minute, ne compte pas). |
| Pilule discrète | **« Parent »** avec un cadenas → code → « + 5 min » · « + 15 min » · « Nouvelle séance » (si l'option est activée) · « Jusqu'à demain ». |

**Ce qui est verrouillé** :
- Retour ramène à l'écran commun ; la carte de l'enfant affiche « Pause jusqu'à demain » ; OK dessus ramène à cet écran.
- Quitter et rouvrir l'app ne change rien (le temps est gardé sur la télé).
- La récré, Mon animal et les leçons de cet enfant sont fermés jusqu'à 4 h du matin.
- « À la maison » reste ouvert : ce sont des outils, pas des jeux.

**Ce qui reste une limite connue** : un enfant peut ouvrir le profil d'un frère ou d'une sœur qui a encore du temps. Pour les familles que ça gêne : l'option « Temps commun pour toute la télé » (§ 13, idée 21).

---

## 12. Les optimisations : simplifier, regrouper, supprimer

*Effort : S = moins de 2 jours, M = 2 à 10 jours, L = plus de 2 semaines (pour moi, tests compris).*

### 12.1 Supprimer

| # | Quoi | Où aujourd'hui | Pourquoi | Effort |
|---|---|---|---|---|
| 1 | **Le cadenas Premium sur le parcours**, la bulle « Pour plus tard », la pastille « Espace parents » du bandeau d'unité, la phrase « La suite, c'est pour plus tard » | `app.js`, `screens.home` | Contraire au référentiel § 1.2 (« aucun cadenas Premium sur les écrans de l'enfant »). Le parcours d'un enfant non abonné s'arrête à la dernière leçon ouverte, avec la leçon cadeau du jour ; le parent voit la suite dans l'Espace parents. **À faire en premier.** | S |
| 2 | **Les barres d'aide clavier** côté enfant | Profils, parcours, exercices | Un enfant de 4 ans ne les lit pas, un enfant de 8 ans n'en a plus besoin (étude 15 § 1.1). Rappel « OK » dans l'élément qui a le focus après 6 s. | S |
| 3 | **La colonne de widgets** (animal, quête, révision, minutes) | Parcours | Remplacée par la proposition du jour, le programme du jour en pastilles et le soleil. | M |
| 4 | **La quête « Termine 3 leçons »** et ses 20 étoiles de bonus | Parcours, Bravo, badges | Elle mesure le volume et pousse à bâcler (étude 03 § 1, problème 5). Remplacée par le programme du jour (1 leçon + 1 révision), sans bonus. | S |
| 5 | **Les badges de volume** (« 3 leçons en un jour », « 5 quêtes », « 100 étoiles ») | `store.js` | Ils récompensent la quantité. À remplacer par des badges d'effort : persévérance (finir malgré des « Presque »), première révision, nouvelle matière, première leçon d'écriture sur papier. | S |
| 6 | **« Il te faut encore N étoiles »** | Mon animal | Un compte « plus que… » pousse à enchaîner. L'objet trop cher montre son prix grisé, c'est tout. | S |
| 7 | **« Ajouter un enfant »** sur l'écran commun | Profils | Action d'adulte (elle demande déjà le code) ; elle passe dans l'Espace parents et libère la place pour « À la maison ». | S |
| 8 | **La couleur de profil** | Formulaire de l'enfant | L'animal habillé suffit à reconnaître un profil (étude 15 lot 2). Une étape de moins. | S |
| 9 | **« Tu es un champion ! »** et les félicitations qui jugent la personne | `CHEERS` | L'éloge de la personne fragilise après un échec (Mueller et Dweck, étude 03 § 1). On dit ce qui a été bien fait : « Tu as bien écouté le premier son ! » | S |
| 10 | **« On continue ? »** à l'ouverture d'un profil, « On joue ? » sur la maquette des profils | `actions.profile`, maquette `02` | Une invitation à rester (décision 4). Tilou dit bonjour et annonce la proposition du jour. | S |
| 11 | **Le bouton « Téléphone » sur l'accueil de l'enfant** | Parcours | Il sert au parent. Il reste sur l'écran commun, dans l'Espace parents, et dans les leçons d'écriture quand il est utile. | S |
| 12 | **La tuile « Du premier coup »** de l'écran Bravo | Bravo | Information d'adulte ; elle passe dans le Progrès (étude 15 § 7.6). | S |
| 13 | **Les emojis** (avatars, cadeaux, badges, images des leçons) | Partout | Ambigus et « amateur » (études 02 et 15). Icônes dessinées tout de suite ; imagier Flow ensuite. | M puis L |
| 14 | **Les crochets phonétiques** [ou] dans ce que voit l'enfant | Titres de quelques leçons | La charte écrit « ou » entre guillemets (études 02 et 15). | S |

### 12.2 Regrouper

| # | Quoi | Comment | Pourquoi | Effort |
|---|---|---|---|---|
| 15 | **Quête + révision du jour + récré** | Une seule structure : **le programme du jour** (1 ou 2 pastilles) qui, une fois fait, ouvre la récré et met « Finir pour aujourd'hui » en avant. | Trois mécaniques de journée, c'est trop pour un enfant de 4 ans ; une seule suffit à tous les âges. | M |
| 16 | **Un symbole = un sens** | Étoiles (ce qu'on gagne), lanternes (la semaine), soleil (le temps), cloche (la récré), cadenas (les parents). La flamme actuelle de la semaine devient la lanterne. | Aujourd'hui « étoile » veut dire à la fois la note d'une leçon et la monnaie (étude 03 § 1) et la flamme côtoie les lanternes. | S |
| 17 | **Mon animal en 3 onglets** | Habiller, Ma chambre (thème, bocal des fiertés), Mes médailles (badges, semaine). | Le thème et le bocal trouvent une place qui a du sens pour l'enfant. | M (dans le lot 3) |
| 18 | **La fiche d'un enfant en 5 onglets** | Progrès, Temps d'écran, Matières, Confort et thème, Profil. | Aujourd'hui rapport et réglages sont mélangés sur une page, et les réglages d'un enfant (confort) n'existent pas. | M |
| 19 | **Les réglages de la famille** | Voix, sons, écriture, son des minuteurs, ambiances, code : une seule page « Réglages de la famille ». | Une seule page pour ce qui vaut pour toute la maison. | S |
| 20 | **Les messages pour les parents** | Une bannière unique en haut de l'Espace parents (fin d'essai, idée du soir, gratuit terminé, nouveauté). | Jamais rien de tout ça sur un écran d'enfant. | S |

### 12.3 Simplifier selon l'âge

| # | Quoi | Comment | Effort |
|---|---|---|---|
| 21 | **Trois accueils selon le cycle** | § 4 : Petits (TPS-GS), Explorateurs (CP-CE2), Grands (CM1-CM2). | M |
| 22 | **Pas de boutique chiffrée en maternelle** | Le cadeau suivant arrive après une leçon ; l'enfant habille son animal parmi ses objets (étude 03 § 5.6). | M |
| 23 | **« Passer la leçon »** | Masqué en maternelle ; pilule discrète ensuite (étude 02 § 1.3). | S |
| 24 | **La voix des boutons en cycle 3** | Les consignes restent lues ; les boutons ne se lisent qu'après 1 s de focus (réglable), pour ne pas lasser un enfant de 10 ans. | S |
| 25 | **Tilou en Tilou partout** | Le renard Filou est encore nommé à l'écran (« Coucou ! Je suis Filou. »), dans les réglages (« Voix de Filou ») et sur le téléphone. Tilou le remplace partout ; l'animal de l'enfant ne parle pas. | S |

---

## 13. Ce qu'on pourrait ajouter, avec mon avis

*Intérêt et risque : faible, moyen, fort. Avis : **Oui** (à faire), **Plus tard** (bonne idée, pas maintenant), **Non** (contraire à nos règles ou pas rentable).*

| # | Idée | Intérêt | Effort | Risque | Avis franc |
|---|---|---|---|---|---|
| 1 | **L'idée du soir** liée aux leçons (étude 13 § 2) | Fort : rend le rapport utile, prolonge sans écran | S | Faible | **Oui, en premier.** Le meilleur rapport valeur/effort de toute la liste. |
| 2 | **Minuteurs visuels** (Minuto adapté) | Fort : usage quotidien, gratuit, parle de nous | M | Faible (OLED : décaler l'image) | **Oui.** Ils font ouvrir l'app tous les jours sans ajouter de temps d'écran à l'enfant. |
| 3 | **Routines en images** + version à imprimer | Fort : très demandé, autonomie | M | Faible | **Oui.** La version papier compte autant que la télé. |
| 4 | **Bulle de calme** (+ météo des émotions non enregistrée) | Fort | S | Faible | **Oui.** Et sur l'écran de pause, c'est la meilleure transition de fin. |
| 5 | **Dodos, Chacun son tour, Dé géant** | Moyen | S | Faible | **Oui**, avec les routines (même moteur). |
| 6 | **Bocal des fiertés** | Fort : valorise l'effort, le lien | M | Faible si c'est le parent qui écrit | **Oui**, dans la chambre de l'animal. |
| 7 | **La récré, lot 1** (8 jeux) | Fort pour l'enfant | L (≈ 23 jours) | Moyen : ajoute du jeu à l'écran | **Oui**, après « À la maison » lot 1, avec les règles de l'étude 12 (compte dans le temps, une fois par jour). |
| 8 | **Histoires audio écran noir**, voix humaine | Très fort : ce que les parents achètent (Lunii, Yoto), très peu d'écran | L | Moyen : la voix (chantier) | **Oui, après la voix.** Sans bonne voix, ne pas le faire. |
| 9 | **Comptines** (paroles pour le parent) | Fort en TPS-MS et en anglais | M à L | Moyen : voix et musique | **Plus tard**, avec la voix. Musique libre et sources notées. |
| 10 | **Petites histoires décodables** (CP-CE1) | Très fort pour la lecture au CP | L | Faible | **Oui**, c'est le cœur du Premium. |
| 11 | **Mode bonne nuit** (fin de séance douce, Ciel du soir) | Fort pour l'image « écran raisonné » | M | Faible | **Plus tard** ; l'écran de pause du § 11.4 en fait déjà l'essentiel. |
| 12 | **Révisions espacées** (J+1, J+3, J+7, J+21) | Fort pour la mémoire | M | Faible | **Oui**, elles nourrissent la proposition du jour. |
| 13 | **Indice ciblé après une erreur, correction expliquée après deux** | Fort : l'erreur enseigne | M | Faible | **Oui.** Aujourd'hui, l'enfant peut cliquer au hasard jusqu'à la bonne réponse. |
| 14 | **Test de niveau** au premier lancement | Moyen | M | Moyen : allonge le premier lancement, peut mettre en échec | **Non au premier lancement.** Plus tard, en option, dans l'Espace parents (« Léa connaît déjà ses lettres ? »). |
| 15 | **Bilan de trimestre** et « À montrer à la maîtresse » | Fort pour la conversion | M | Faible | **Plus tard** (quand le rapport par compétences existera). |
| 16 | **Rapport par compétences** (acquis, en cours, pas vu) | Fort | M | Faible | **Oui**, après le référentiel de compétences. |
| 17 | **Chrono de lecture** (le parent compte les mots lus en 1 min) | Moyen, utile au CP-CE2 | S | Faible si présenté avec prudence | **Plus tard.** Sans comparaison entre enfants. |
| 18 | **Lecture à voix haute analysée par la télé** (fluence) | Fort | L | **Fort** : voix d'enfant, micro, données | **Non pour l'instant.** À revoir seulement sur l'appareil, sans rien envoyer, avec analyse d'impact. |
| 19 | **Mode vacances** (révisions d'été, préparer le CP) | Fort de juin à août | M | Faible | **Oui, pour mai 2027.** |
| 20 | **Heure du coucher** (pas d'écran après 19 h 30, réglable) | Moyen | S | Faible | **Plus tard.** Simple, demandé par certains parents ; à ajouter dans l'onglet Temps d'écran. |
| 21 | **Temps commun pour toute la télé** (en plus du temps par enfant) | Moyen : bloque le « je prends le profil de mon frère » | S | Faible | **Plus tard**, en option. |
| 22 | **Transfert des profils par QR** (changer de télé) | Moyen | M | Faible | **Plus tard.** Rien ne sort de la maison. |
| 23 | **Compte parent et e-mail hebdomadaire** | Moyen | L | **Fort** : données, RGPD, analyse d'impact, coût | **Non à 0 €.** La « carte postale QR » (bilan lisible sur le téléphone, rien envoyé au serveur) suffit. |
| 24 | **Quiz famille** (2 à 4 joueurs) | Moyen à fort : joue sur la télé du salon | L | Moyen : risque de comparaison | **Plus tard**, en mode coopératif, sans score par enfant. |
| 25 | **Recettes pas à pas** sur la télé | Moyen | M | Faible (sécurité : avec un adulte) | **Plus tard**, comme fiches de l'atelier. |
| 26 | **Consignes parentales en plusieurs langues** | Moyen : familles allophones | M | Faible | **Plus tard.** |
| 27 | **Calendrier de l'Avent** (une case à ouvrir chaque jour) | Fort pour les réseaux | S | **Fort** : mécanique de retour quotidien | **Non dans l'app** (c'est exactement ce que la décision 4 interdit). **Oui sur les réseaux**, pour les parents. |
| 28 | **« Continuer la leçon » sur l'écran d'accueil de Google TV** (chaîne de recommandations) | Fort pour les chiffres | S à M | **Fort** : l'app appelle l'enfant depuis la télé | **Non.** Une simple tuile d'app suffit. |
| 29 | **Événements saisonniers** (rentrée, hiver, carnaval) | Moyen | M | Moyen : rester sans compte à rebours ni objet perdu | **Plus tard**, avec la « malle aux souvenirs » de l'étude 03 (rien ne se perd). |
| 30 | **IA qui converse avec l'enfant, chat, notifications à l'enfant, classement, vidéos qui s'enchaînent** | — | — | **Fort** | **Non**, définitivement (études 03 et 13). |

---

## 14. Les décisions à prendre par les fondatrices

| # | Question | Ma recommandation |
|---|---|---|
| 1 | Valider les **trois accueils selon le cycle** (§ 4) | Oui. C'est la plus grosse amélioration de clarté pour 3 ans comme pour 10 ans. |
| 2 | Le **premier lancement** : parent d'abord, enfant ensuite (§ 10), à l'inverse de l'étude 15 | Oui : le code existe avant que l'enfant ait la télécommande. |
| 3 | **Pas d'offre d'essai** dans le premier lancement (§ 10.3) | Oui ; la bannière dans l'Espace parents le jour même. |
| 4 | Le **soleil** comme minuteur visible, au lieu des lanternes (§ 11.3) | Oui : les lanternes restent la semaine. |
| 5 | Les **durées conseillées** par classe (10, 15, 20, 30 min) au lieu de 30 min pour tous (§ 11.1) | Oui. |
| 6 | « Choisir la durée à chaque séance » **avec le code** (§ 11.2) | Oui. |
| 7 | L'**atelier** dans « À la maison » (derrière le code) **et** dans l'Espace parents (§ 6.2) | Oui. |
| 8 | Le **thème sans code**, le confort avec code (§ 8) | Oui. |
| 9 | Le **programme du jour** remplace la quête « Termine 3 leçons » et ses 20 étoiles (§ 12, n° 4 et 15) | Oui. |
| 10 | Une **seule monnaie** : les étoiles (pas d'« étincelles ») ; en maternelle, pas de boutique chiffrée | Oui : ajouter une deuxième monnaie embrouillerait plus qu'elle n'aide. |
| 11 | **Somnole** : le garder comme personnage du soir, ou laisser l'animal de l'enfant jouer ce rôle | L'animal seul (un personnage de moins à dessiner, et l'étude 12 marche déjà ainsi). |
| 12 | Les **5 autres Pétillous** (Babil, Pila, Feuillette, Nimbo, Plumo) : guides de matières, ou abandonnés | Abandonnés dans l'app ; à garder seulement si une série réseaux en a besoin (ils restent « suspendus » dans la fiche Flow). |
| 13 | **Minuto** : hôte des outils (« les minuteurs de Minuto »), ou Tilou | Tilou, avec un sablier : une seule marque dans l'app ; Minuto reste une app à part si vous la publiez. |

---

## 15. Dans quel ordre

L'ordre complet, avec les actions des fondatrices, est en tête de [BACKLOG.md](BACKLOG.md). Pour l'app :

1. **Correctifs de conformité** (cadenas « Pour plus tard », « Il te faut encore », Filou → Tilou, « On continue ? », « Tu es un champion ») : 1 à 2 jours, dans la 0.7.0 si la relecture n'est pas finie, sinon une 0.7.1.
2. **Design lots 1 et 2** (fondations, thèmes, compagnons) : environ 8 jours.
3. **Temps d'écran v2** (durées par classe, séance, soleil, écran de pause verrouillé) et **premier lancement v2** : environ 6 à 8 jours.
4. **Les trois accueils** et le **lot 3** (écrans de l'enfant, Mon animal en 3 onglets, programme du jour) : environ 10 à 13 jours.
5. **« À la maison »** lot 1 et 2 (idée du soir, minuteurs, bulle de calme) : environ 15 à 20 jours.
6. **Espace parents en onglets**, Confort et thème : environ 5 jours.
7. **La récré** lot 1 : environ 23 jours.
8. Puis routines et petits outils, atelier complet, révisions espacées, indices après erreur, et la **voix** dès que la solution est choisie.
