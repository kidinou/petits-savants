# Petits Savants : audit produit, UX et pédagogie, et plan d'amélioration

*Étude n° 2 · novembre 2026 · regards croisés : chef de produit edtech, designer UX/UI pour les 2-9 ans, conseiller pédagogique (cycle 1 à CE2).*

Sources de l'audit : la fiche [00-contexte.md](00-contexte.md), le site `index.html` et les 10 captures du dossier `img/` (accueil, leçon, exercice, bravo, mon animal, espace parents, écriture au téléphone, premium, bannière Play, icône). Les mesures de contraste ont été faites sur les pixels des captures (1920 × 1080).

---

## 0. Synthèse en une page

**Ce qui est déjà solide.** Le produit a une vraie colonne vertébrale : leçon expliquée **puis** exercices (et non des exercices seuls), consignes lues à voix haute, erreur sans punition (« Presque ! »), focus télécommande très visible (double anneau jaune et marine), aide-mémoire des touches en bas de chaque écran, temps d'écran par enfant, aucune donnée collectée. L'écran Premium est honnête (essai, renouvellement, résiliation expliqués). C'est une base saine, rare dans la catégorie.

**Les cinq problèmes qui coûtent le plus cher.**

1. **Le contenu est trop mince pour justifier un abonnement** : 151 leçons pour 7 niveaux, soit environ 22 leçons par classe, quand une année scolaire compte 36 semaines. Le CP, année charnière de la lecture, ne peut pas tenir dans une vingtaine de leçons.
2. **Le QCM à 4 images est le seul geste** : il entraîne la reconnaissance, pas la production (lire à voix haute, écrire, encoder un mot, calculer de tête en temps limité).
3. **La voix de synthèse de la télé** varie d'un appareil à l'autre, prononce mal les phonèmes isolés (« ttt ») et peut être absente : c'est le cœur de la promesse « même ceux qui ne savent pas lire jouent seuls ».
4. **Les emojis comme illustrations** : ambigus (⚽ = « ballon » ou « foot » ? 📱 = « téléphone » ou « portable » ?), ce qui fausse les exercices de phonologie, et rendu différent selon les télés. Ils rendent aussi l'app indiscernable de mille autres.
5. **Pas de vraie application tablette ou téléphone, pas de compte rendu aux parents hors de la télé, éditeur non renseigné** : trois freins directs à la confiance et à la conversion.

**Cap proposé** : passer de « 151 leçons » à **environ 650 séances** structurées selon les programmes 2025, avec un parcours CP de lecture syllabique complet ; une voix humaine enregistrée pour les phonèmes et une voix neuronale pré-générée pour le reste ; une direction artistique maison ; une app tablette et téléphone complète ; un bilan hebdomadaire aux parents sans compte obligatoire. Détail et calendrier en section 7.

---

## 1. Audit visuel écran par écran

### 1.1 Principes de référence

- **Distance de lecture à la télé** : la documentation Android TV demande de concevoir pour un spectateur à environ 3 mètres, de garder les éléments importants dans une marge de sécurité de 5 % et d'éviter les polices fines ([Android Developers, mises en page TV](https://developer.android.com/training/tv/playback/compose/layouts) ; [ancienne page « Optimizing layouts for TV »](https://stuff.mit.edu/afs/sipb/project/android/docs/training/tv/optimizing-layouts-tv.html)). En pratique, viser **28 px minimum** et **34-36 px pour le texte courant** en 1080p ([UI/UX Atlas, 10-foot UI](https://uiux-atlas.pages.dev/lessons/responsive/tv-and-10-foot-ui-design)).
- **Enfants** : cibles tactiles d'au moins **2 × 2 cm** pour les petits, gestes simples (toucher, glisser, faire glisser) maîtrisés dès 3 ans ([Nielsen Norman Group, développement physique des enfants](https://www.nngroup.com/articles/children-ux-physical-development/) ; [dossier « Young users »](https://www.nngroup.com/topic/young-users/)).
- **Non-lecteurs** (TPS à GS, début CP) : tout ce qui demande une décision doit être compréhensible **sans lire** : icône, son, couleur, position.

### 1.2 Accueil / carte du parcours (`1-accueil.png`)

**Ce qui va**
- La carte façon chemin, avec étoiles sur les leçons faites, cadenas, révision et coffre, est immédiatement lisible ; le nœud actif est énorme et cerclé, la bulle « Commencer ! » guide l'œil.
- Le bandeau d'aide (◀▶▲▼ Se déplacer · OK Commencer · Retour Profils) est un excellent réflexe pour la télécommande.
- Contraste correct : les étiquettes grises des leçons verrouillées sont à environ **5,2:1** sur le fond bleu clair (mesuré), au-dessus du seuil AA de 4,5:1.

**Ce qui ne va pas**
- **Trop d'informations concurrentes pour un enfant de 4 ans** : 5 onglets de matières, un bandeau d'unité avec pagination « 1 / 2 », un bouton Écouter, la mascotte, une bulle, la quête du jour, le minuteur, la flamme, les étoiles, l'icône téléphone. Il y a au moins 14 cibles focalisables sur un même écran.
- **Les étiquettes de leçons utilisent la notation phonétique** « Les sons [m] [p] [b] » : illisible pour un enfant et peu parlant pour beaucoup de parents. Préférer un pictogramme et le mot-clé (« m comme moto ») lus à voix haute quand le focus arrive.
- **Taille des étiquettes** de nœuds : environ 26 px, sous le minimum de 28 px à 3 mètres. Les noms de leçons sur deux lignes (« [t] [ch] / [v] ») cassent le rythme.
- **Les onglets de matières sont des mots** (Langage, Nombres…) : un non-lecteur ne les distingue que par la petite icône au trait. Il faut des **couleurs et des personnages par matière** (voir 1.10).
- **L'espace est mal réparti** : la carte occupe le centre mais laisse un grand vide en bas à droite ; la colonne de droite (quête, temps) est réservée aux parents et n'a pas sa place au premier plan pour l'enfant.
- La pagination « 1 / 2 » des unités est abstraite. Un défilement continu de la carte (comme Duolingo ou Khan Academy Kids) est plus naturel.

### 1.3 Leçon (`2-lecon.png`)

**Ce qui va** : titre très gros (« Le son [t] »), 4 cartes image et mot, consigne lue avec rappel écrit, bouton suivant mis en avant, possibilité de réécouter.

**Ce qui ne va pas**
- **La leçon est une page d'images statique** : elle ne montre pas ce qu'elle enseigne. Pour un phonème, il faut voir **la bouche** qui le produit, entendre le son isolé et allongé, voir la lettre **s'allumer** dans le mot (« **t**ortue ») au moment où la voix la prononce. C'est le principe de la correspondance graphème-phonème explicite mis en avant par le [Guide « Pour enseigner la lecture et l'écriture au CP »](https://conservatoire.etab.ac-lille.fr/files/2021/03/Guide-Orange-Pour-enseigner-la-lecture-et-l-ecriture-au-CP-Bethune-3.pdf) (dit « guide orange »).
- **Le mot est écrit sans mise en évidence de la lettre cible** : en GS, il faut au minimum colorer le « t ».
- **Choix d'images discutable** : « téléphone » est représenté par un smartphone que beaucoup d'enfants appellent « portable » ; « train » commence par une attaque consonantique complexe [tr] (moins pertinente qu'un « tapis » ou « tasse » pour isoler [t]).
- **40 % de l'écran est vide** au-dessus et au-dessous des cartes : on peut agrandir les illustrations de 50 %.
- Le bouton « Passer la leçon » est aussi visible que « Suivant » : un enfant le choisira par jeu. Le cacher derrière un appui long ou le réserver au mode parent.
- « Écoute : tous ces mots commencent par ttt » est écrit en 30 px environ ; acceptable, mais la bulle devrait sortir de la bouche de la mascotte, avec une animation de parole, pour que le non-lecteur comprenne d'où vient la voix.

### 1.4 Exercice (`3-exercice.png`)

**Ce qui va** : consigne courte, bouton haut-parleur, 4 grandes cartes numérotées 1 à 4, aucune lecture nécessaire, focus évident, progression 1/5.

**Ce qui ne va pas**
- **Les images ne sont pas nommées oralement** : pour « Quel mot commence par [t] ? », l'enfant doit d'abord deviner le mot que représente l'image. ⚽ peut être « ballon » ou « foot » ; ✋ peut être « main » ou « coucou ». La règle en phonologie : **chaque image est dite à voix haute** quand elle reçoit le focus (et au départ, à la suite).
- **La tomate de la leçon réapparaît comme bonne réponse** : on mesure la mémoire de l'écran précédent, pas la compétence. Utiliser des mots nouveaux en exercice (transfert).
- La mascotte tourne le dos à la question ; elle devrait regarder les cartes et réagir au focus (pencher la tête vers la carte sélectionnée).
- La barre de progression est très longue et vide (1/5) : 5 pastilles ou 5 petites étoiles seraient plus parlantes pour un petit.
- Le bouton « livre » (revoir la leçon) n'est pas compréhensible : lui associer l'image de la mascotte qui tient un livre et une voix « Revoir la leçon ».

### 1.5 Bravo (`4-bravo.png`)

**Ce qui va** : moment de célébration réussi (confettis, prénom, mascotte), récompenses claires, « Continuer » mis en avant.

**Ce qui ne va pas**
- **Trois cartes de statistiques textuelles** (ÉTOILES, DU PREMIER COUP, SÉRIE) en petites capitales : c'est du tableau de bord adulte. Pour l'enfant : 3 étoiles à remplir, une animation de la mascotte qui reçoit les étoiles, un son. « Du premier coup 5/5 » doit aller dans l'espace parents.
- Le bandeau « Quête du jour réussie » en haut à droite passe au-dessus de la tête de la mascotte : collision visuelle.
- Le feedback valorise la **performance** (premier coup) plus que l'**effort** ; ajouter des messages qui nomment la stratégie (« Tu as bien écouté le premier son ! »).

### 1.6 Mon animal (`5-mon-animal.png`)

**Ce qui va** : l'enfant voit son animal en grand, « Appuie sur OK pour un câlin » est charmant, la semaine en flammes est lisible.

**Ce qui ne va pas**
- **Les cadeaux sont des emojis plaqués** ; le « Chapeau de fête » est représenté par un visage 🥳 et non par un chapeau : incohérence immédiate pour l'enfant. Les objets doivent être dessinés **sur** l'animal (aperçu en direct au focus).
- **Seulement 6 objets** : en une semaine d'usage régulier (154 étoiles dans la capture), tout est acheté. Il n'y a plus de raison de collectionner.
- Les badges débordent en bas d'écran (coupés) : défilement non signalé.
- Le sous-titre est une phrase de 15 mots à lire.

### 1.7 Espace parents (`6-espace-parents.png`)

**Ce qui va** : clair, sobre, réglages par matière, temps par jour, suppression de profil accessible.

**Ce qui ne va pas**
- **Les données ne disent rien de ce que l'enfant sait** : minutes, nombre de leçons, % de réussite « du premier coup ». Un parent veut savoir : « Est-ce qu'elle reconnaît les sons [t] [ch] [v] ? Qu'est-ce qui coince ? Que puis-je faire ce soir ? » (voir section 5).
- Le graphique des 7 jours occupe la moitié de l'espace pour l'information la moins utile.
- « 3/10 · 100 % » à côté de « Langage » est ambigu (100 % de quoi ?).
- Tout est consultable **uniquement sur la télé** : personne ne lit un rapport sur la télé familiale.

### 1.8 Écriture au téléphone (`7-ecriture-telephone.png`)

**Ce qui va** : la fonction est une vraie différence produit ; le gabarit en pointillés est clair.

**Ce qui ne va pas**
- **Le sens et l'ordre du tracé ne sont pas montrés** : pas de point de départ, pas de flèche numérotée, pas d'animation modèle. Or l'apprentissage du geste d'écriture repose sur le bon sens de rotation et l'ordre des traits ; un « L » tracé de bas en haut doit être corrigé.
- « J'ai fini » laisse l'enfant décider : la validation doit être automatique (tolérance sur la forme, le sens et l'ordre).
- La capitale d'imprimerie « L » seule : au CP, l'écriture **cursive** est attendue ; la GS travaille les lettres cursives. Il manque des lignes d'écriture (réglure Seyès simplifiée).
- Grand vide sous le cadre ; la consigne « Trace sur ton téléphone ! » est en petit vert sur blanc.

### 1.9 Premium (`8-premium.png`) et identité (`featureGraphic.png`, `icon.png`)

- L'écran Premium est conforme et transparent. Mais **il est atteignable par l'enfant** : il doit être placé derrière une **barrière parentale** (question que seul un adulte sait résoudre, ou code parent), règle explicite chez Apple ([App Review Guidelines 1.3](https://developer.apple.com/support/downloads/terms/app-review-guidelines/App-Review-Guidelines-English-UK.pdf)) et bonne pratique attendue par le programme Familles de Google.
- Il ne **montre** pas ce qu'on obtient : une frise des niveaux et un extrait animé de leçon convertiraient mieux qu'une liste de 3 coches.
- La bannière Play montre la capture de l'accueil, petite et illisible à la taille du Store ; l'icône renard plate est sympathique mais générique (ressemble à beaucoup d'icônes « fox » de banques d'images).

### 1.10 Proposition de direction artistique

**Concept : « Le Carnet des Petits Savants »**, un univers de **carnet d'explorateur naturaliste** dessiné à la main : papier légèrement texturé, traits de crayon et aquarelle douce, tampons, étiquettes. La mascotte devient une **petite troupe** : chaque animal est le guide d'une matière et l'enfant choisit son préféré comme compagnon.

| Matière | Guide | Couleur signal | Lieu sur la carte |
|---|---|---|---|
| Langage et français | Renard conteur (avec un livre) | Corail #E8684A | La forêt des mots |
| Nombres et maths | Ours bâtisseur (avec des cubes) | Bleu outremer #2F5DA8 | Le chantier des nombres |
| Découvrir le monde | Lapin explorateur (loupe) | Vert sapin #3E8E5E | Le jardin et le ciel |
| Anglais | Panda voyageur (valise) | Violet #7B5CC4 | Le port |
| Écriture | Hérisson calligraphe (plume) | Ocre #D79A2B | L'atelier |

- **Palette** : fond crème chaud #FBF6EC (moins fatigant à la télé que le blanc pur, plus distinctif que le bleu clair actuel), encre #2B2A33 pour le texte (contraste supérieur à 12:1), 5 couleurs de matières saturées mais pas fluo, toutes testées pour être distinguables en deutéranopie (les matières sont aussi distinguées par la forme et le personnage, jamais par la seule couleur).
- **Illustrations maison au lieu des emojis** : une **banque d'environ 1 200 images** dans un style unique (objets du quotidien, animaux, aliments, actions), chaque image ayant **un seul nom évident** pour un enfant de 4 ans, validé par un test simple (10 enfants nomment l'image ; on garde si au moins 8 disent le mot attendu). Production : une illustratrice ou un illustrateur en freelance avec une charte, éventuellement assisté d'outils génératifs pour les esquisses mais **retouché à la main** pour la cohérence (et pour la propriété des droits). Format vectoriel (SVG ou Lottie) pour la netteté en 4K et le poids.
- **Typographies** : garder **Fredoka** pour les titres (rondeur) mais adopter pour le texte de lecture une **police scolaire** à « a » et « g » d'écriture manuscrite (par exemple [Andika](https://software.sil.org/andika/) de SIL, conçue pour l'apprentissage de la lecture, ou une licence de **Belle Allure** / **Cursive standard** pour les cursives proches des modèles scolaires français). Le « a » à double étage de Nunito n'est pas celui que l'enfant apprend.
- **Animations** : la mascotte parle (bouche synchronisée), pointe du doigt l'objet nommé, applaudit, fait la moue en cas d'erreur ; transitions en « page qui se tourne » entre leçon et exercices ; carte qui se dessine au crayon quand une unité se débloque.
- **Sons** : un **design sonore** unique (marimba, ukulélé, clochettes en bois) avec un son par action (focus, valider, juste, presque, coffre), volume normalisé, et une musique d'ambiance douce désactivable. Les sons « juste/presque » doivent être distincts mais jamais punitifs.
- **Références à étudier** : [Khan Academy Kids](https://learn.khanacademy.org/khan-academy-kids/) (personnages par domaine, livres animés), **Lalilo** (lecture CP en France), **Kalulu** (méthode issue du Collège de France), **Endless Alphabet / Endless Numbers** (lettres-personnages), **Sago Mini** et **Toca Boca** (illustration tendre et texturée), la série **Bluey** pour le ton et la palette, les albums de **l'École des loisirs** pour l'esprit « carnet dessiné ».

---

## 2. Pédagogie

### 2.1 Le cadre officiel en vigueur

- **Maternelle (cycle 1)** : nouveaux programmes de français (« développement et structuration du langage oral et écrit ») et de mathématiques (« acquisition des premiers outils mathématiques ») publiés au [BO n° 41 du 31 octobre 2024](https://eduscol.education.gouv.fr/sites/default/files/document/programme-cycle-1-consolide-127565.pdf), en vigueur depuis la rentrée 2025 ; version consolidée intégrant le BO n° 19 du 7 mai 2026. Accent sur le vocabulaire, la conscience phonologique, le principe alphabétique en GS, les nombres jusqu'à 10 et leur décomposition, les formes et solides ([Eduscol, école maternelle](https://eduscol.education.gouv.fr/5256/l-ecole-maternelle-une-ecole-de-l-epanouissement-et-des-premiers-apprentissages-scolaires) ; [repères de progressivité, académie de Nancy-Metz](https://sites.ac-nancy-metz.fr/maternelle57/2026/01/08/programmes-2025-reperes-de-progressivite/)).
- **Cycle 2 (CP-CE2)** : nouveaux programmes de français et de mathématiques publiés en octobre 2024, appliqués depuis la rentrée 2025, avec **progressions annuelles** par niveau et livrets d'accompagnement CP, CE1, CE2 ([Eduscol, l'école élémentaire](https://eduscol.education.gouv.fr/5229/l-ecole-elementaire) ; [Eduscol, enseigner au cycle 2](https://eduscol.education.gouv.fr/4347/enseigner-au-cycle-2) ; [« Relever le niveau en mathématiques »](https://www.education.gouv.fr/relever-le-niveau-en-mathematiques-de-la-maternelle-la-terminale-324680)). En maths : priorité au **calcul mental**, à la **résolution de problèmes**, introduction **précoce des fractions** de façon concrète, calculs posés répartis par niveau ([synthèse académie d'Orléans-Tours](https://pedagogie.ac-orleans-tours.fr/documents/pdf/presentation_programmes_maths_c2_pdf.pdf)).
- **Lecture** : enseignement explicite et systématique des correspondances graphèmes-phonèmes, progression syllabique, entraînement à la fluence ; c'est la ligne du Conseil scientifique de l'Éducation nationale présidé par Stanislas Dehaene ([guide orange](https://conservatoire.etab.ac-lille.fr/files/2021/03/Guide-Orange-Pour-enseigner-la-lecture-et-l-ecriture-au-CP-Bethune-3.pdf) ; [note d'alerte CSEN 2025](https://www.csen.education.gouv.fr/wp-content/uploads/2025/03/1cb0ad39-bc98-4bdd-a3dc-b340c14a85d6-NotealerteCSEN01.pdf) ; [La pédagogie Kalulu](https://onlit.org/wp-content/uploads/2024/12/La-pedagogie-Kalulu.pdf)).
- **Repères de fluence** (mots correctement lus en une minute) : **50 en fin de CP, 70 en fin de CE1, 90 en fin de CE2** ([guide des scores Repères CE2](https://eduscol.education.gouv.fr/sites/default/files/document/26ce2guidedesscores-129820.pdf) ; [livret fluence 2025, académie de Strasbourg](https://portailpedagogique68_1d.site.ac-strasbourg.fr/maitrise-langue/wp-content/uploads/sites/7/2025/06/Livret-daccompagnement-sur-la-fluence-en-lecture-2025.pdf)).

### 2.2 Couverture actuelle : diagnostic

La capture de l'espace parents montre, pour la **GS**, 10 leçons de Langage, 6 de Nombres, 6 de Découvrir, 6 d'Anglais et 9 d'Écriture, soit **37 leçons**. Il reste donc environ **114 leçons pour les 6 autres niveaux** (19 en moyenne). Comparé aux attendus :

| Niveau | Ce que l'on peut supposer présent | Ce qui manque surtout |
|---|---|---|
| TPS (2-3 ans) | Couleurs, animaux, formes | Vocabulaire thématique par imagiers sonores (corps, maison, vêtements), comptines, « montre-moi » (désignation), jeux d'écoute de bruits. Peu d'écran conseillé à cet âge : séances de 3-5 min, à faire avec un adulte. |
| PS | Couleurs, comptage 1-3 | Quantités jusqu'à 3 « d'un coup d'œil », rythmes et algorithmes, comptines numériques, vocabulaire, écoute de syllabes. |
| MS | Syllabes, rimes, comptage | Décomposition des nombres jusqu'à 5-6, comparaison de collections, repérage dans l'espace (devant, derrière), formes, premiers phonèmes d'attaque. |
| GS | Sons, rimes, lettres, nombres à 10 | Principe alphabétique (nom et son des lettres), encodage de syllabes simples, décompositions de 10, problèmes oraux d'ajout et de retrait, formes et solides. |
| **CP** | Quelques leçons de lecture de mots, addition | **Le cœur manque** : progression complète des ~40 correspondances graphème-phonème, lecture de syllabes et de mots déchiffrables, phrases et petits textes décodables, **fluence**, **dictées** de syllabes et de mots, compréhension ; nombres jusqu'à 100, dizaines et unités, calcul mental quotidien, problèmes en 1 étape, longueurs, monnaie, repérage, premières fractions (moitié). |
| CE1 | Tables, heure, grammaire | Nombres jusqu'à 1 000, addition posée, problèmes à 2 étapes, multiplication (sens), fractions simples, mesures (longueurs, masses, durées), géométrie (angle droit, figures), lecture de textes plus longs, orthographe lexicale, accords dans le groupe nominal, dictées de phrases. |
| CE2 | Peu de contenu visible | Nombres jusqu'à 10 000, techniques opératoires, division (sens), fractions et premières écritures décimales, contenances, périmètre, symétrie, conjugaison (présent, futur, imparfait, passé composé), lecture de documentaires, rédaction courte. |

**« Questionner le monde »** (cycle 2) est réduit à des thèmes de maternelle (cinq sens, saisons, météo). Il manque le vivant (cycle de vie, besoins des végétaux), la matière (états de l'eau), les objets techniques, l'espace et le temps (frise, plan, carte) et l'éducation à la santé.

**Anglais** : « premiers mots avec traduction » ne suffit pas. Au cycle 2 l'objectif est oral (comprendre et réagir à des consignes, saluer, se présenter, compter, couleurs, comptines), visant le niveau A1 en fin de CE2. Il faut des **voix natives**, des chansons et des mini-dialogues, sans écrit au départ.

### 2.3 151 leçons ne suffisent pas : combien viser

Une année scolaire compte 36 semaines. Pour qu'une famille garde l'abonnement toute l'année avec 3 à 5 séances de 10-15 minutes par semaine, il faut **au minimum 80 à 120 séances par niveau élémentaire**, et 40 à 60 en maternelle (séances plus courtes, plus de répétition).

**Cible à 12 mois : environ 650 séances**, dont la moitié peut être générée à partir de **gabarits d'exercices** alimentés par des banques de mots, de nombres et d'images (une « leçon » devient un objectif + une explication + un réservoir de 30 à 60 items tirés au sort).

| Niveau | Français | Maths | Monde | Anglais | Écriture | **Total** |
|---|---|---|---|---|---|---|
| TPS | 10 | 8 | 8 | 4 | 4 | **34** |
| PS | 16 | 14 | 10 | 6 | 8 | **54** |
| MS | 20 | 18 | 10 | 8 | 10 | **66** |
| GS | 28 | 24 | 12 | 10 | 14 | **88** |
| **CP** | **60** | 36 | 10 | 10 | 16 | **132** |
| CE1 | 44 | 40 | 12 | 12 | 10 | **118** |
| CE2 | 44 | 40 | 14 | 12 | 8 | **118** |
| **Total** | 222 | 180 | 76 | 62 | 70 | **≈ 610 + révisions et bilans ≈ 650** |

**Priorité absolue : le CP.** Proposition de parcours de lecture (60 séances) aligné sur une progression syllabique type guide orange : voyelles et consonnes « qui chantent » d'abord (a, i, o, u, é, e, l, r, m, s, f, ch, v, j, n), puis consonnes occlusives (p, t, d, b, c/k, g), puis graphèmes complexes (ou, on, an/en, in, oi, eu, è/ai/ei, au/eau, gn, ill, etc.). **Chaque séance** suit le même rituel de 10 à 12 minutes :

1. Le son : la bouche de la mascotte, le son allongé, la lettre (script et cursive).
2. Entendre : « Est-ce qu'on entend [m] dans… ? » (images nommées à voix haute).
3. Fusionner : la mascotte fait glisser m + a → « ma » (animation de la syllabe qui se forme).
4. Lire : syllabes, puis mots **100 % déchiffrables** avec les correspondances déjà vues.
5. Encoder : dictée de syllabes et de mots avec des étiquettes-lettres (glisser) ou au clavier tactile.
6. Lire une phrase, puis une **mini-histoire décodable** illustrée (3 à 6 phrases), lue par l'enfant puis par la voix.

### 2.4 Au-delà du QCM : types d'exercices à introduire

Chaque type ci-dessous fonctionne **à la télécommande** (sélection et OK) **et** au tactile, avec un mode enrichi quand un téléphone ou une tablette est présent.

| Type | Usage | Télé (télécommande) | Tablette / téléphone |
|---|---|---|---|
| Désignation sonore (« Montre-moi… ») | TPS-MS vocabulaire | 4 à 6 grandes images | Toucher |
| Tri dans des paniers | Catégories, sons, pair/impair | Sélectionner l'objet puis le panier | Glisser-déposer |
| Associer (paires) | Lettre-son, nombre-quantité, anglais-image | Deux sélections | Relier du doigt |
| Remettre en ordre | Syllabes d'un mot, mots d'une phrase, étapes d'une histoire, frise | Choisir dans l'ordre | Glisser |
| Encodage (dictée) | GS-CE2 orthographe | Clavier de lettres simplifié à l'écran | Étiquettes ou clavier, ou **écriture manuscrite** reconnue |
| Tracé guidé | Lettres, chiffres, formes | Non (renvoi vers téléphone) | Tracé avec ordre et sens des traits vérifiés |
| Lecture à voix haute | Fluence CP-CE2 | Micro de la télécommande si disponible | Micro de l'appareil, **analyse sur l'appareil** |
| Droite numérique | Placer, encadrer, ordonner | Curseur gauche-droite | Glisser |
| Manipulation (cubes, monnaie, balance) | Numération, mesures | Ajouter/retirer par OK | Glisser |
| Calcul mental chronométré doux | Faits numériques | Pavé numérique de la télécommande | Pavé à l'écran |
| Problèmes illustrés en BD | Problèmes à 1 et 2 étapes | Choix de l'opération puis du résultat | Idem avec schéma en barres à compléter |
| Mini-jeux | Révisions ludiques | Courses, pêche aux sons, « attrape les dizaines » | Idem |

**Reconnaissance vocale de la lecture.** C'est le levier le plus puissant pour la fluence mais aussi le plus sensible (voix d'enfant = donnée biométrique potentielle). Recommandation : **reconnaissance sur l'appareil** uniquement (modèles embarqués de type Whisper quantifié ou Vosk français), aucun enregistrement conservé, un simple score « mots lus correctement par minute » ; activation explicite par le parent. Démarrer par un mode **sans reconnaissance** : l'enfant lit, puis appuie sur OK ; un minuteur et l'adulte cochent les mots ratés (comme les évaluations nationales).

### 2.5 Différenciation, répétition espacée et révisions

- **Test de positionnement** au premier lancement (10 minutes, adaptatif, présenté comme « le grand voyage de ton renard ») : il place l'enfant dans le parcours **par compétence**, pas seulement par classe. Un CP qui sait déjà déchiffrer ne doit pas refaire « a, i, o ».
- **Maîtrise par compétence** : chaque item est relié à une compétence du programme (référentiel interne codé, par exemple `CP-FR-CGP-ch`). L'enfant passe à la suite quand il réussit 4 sur 5 **à deux moments différents**.
- **Répétition espacée** : chaque compétence acquise revient dans des « révisions éclair » de 2 minutes à J+1, J+3, J+7, J+21 ; les compétences ratées reviennent plus tôt. La recherche en classe primaire montre un bénéfice de la **pratique de récupération** et de la **distribution** des séances, avec des effets plus modestes et variables chez les plus jeunes, d'où l'intérêt d'une récupération guidée et étayée ([Frontiers in Psychology 2025, pratique de récupération en primaire](https://pmc.ncbi.nlm.nih.gov/articles/PMC12372469/) ; [The Learning Scientists, limites en classe](https://www.learningscientists.org/blog/2017/7/20-1) ; [Parenting Science, séances courtes et réparties](https://parentingscience.com/spaced-learning/)).
- **La quête du jour** devient « 1 nouvelle leçon + 1 révision éclair », et non « termine 3 leçons » (qui pousse à cliquer vite).
- **Erreurs** : garder « Presque ! », mais après une erreur donner un **indice ciblé** (réécouter le son, mettre en évidence la lettre), puis à la deuxième erreur **montrer la solution et l'expliquer**, et reposer l'item plus tard dans la séance. Éviter l'essai au hasard jusqu'à la bonne réponse sur 4 choix : 25 % de chance à chaque essai, l'enfant apprend à cliquer.
- **Bilan de fin d'unité** (« le coffre ») : 8 à 10 items mélangés de l'unité, résultat converti en étoiles et transmis au rapport parent.

### 2.6 Réfléchir à l'âge et au temps d'écran

Pour les **2-3 ans** (TPS), la promesse « l'école sur la télé » est fragile : les recommandations françaises de santé déconseillent les écrans avant 3 ans, et un rapport d'experts remis au président de la République en 2024 a préconisé l'absence d'écran avant 3 ans. Recommandation : présenter la TPS comme un **moment partagé parent-enfant** (« à faire ensemble »), séances de 5 minutes maximum, et ne pas en faire un argument marketing central. Le cœur de valeur est **GS-CP-CE1**.

---

## 3. La voix

### 3.1 Pourquoi abandonner la synthèse de la télé

- Qualité et prononciation variables selon le fabricant, parfois **aucune voix française installée** (le site lui-même prévoit le cas).
- Prononciation des **phonèmes isolés** impossible (« ttt », « mmm », « ch ») ; c'est pourtant la base de la méthode syllabique.
- Pas de ton chaleureux, pas d'emphase, pas de voix différente par personnage.

### 3.2 Principe recommandé : hybride, pré-généré, vérifié

1. **Voix humaine enregistrée** pour tout ce qui est **phonologique** : les ~36 phonèmes du français prononcés isolés et allongés, les syllabes de la progression CP (environ 400), les mots modèles, les comptines et les félicitations récurrentes. C'est quelques heures de studio avec une comédienne ou un comédien et une orthophoniste en relecture.
2. **Voix neuronale de qualité** pour le reste (explications, consignes, histoires, prénoms courants), **générée à l'avance en studio**, écoutée et corrigée (dictionnaire de prononciation, balises SSML), puis **embarquée en fichiers audio** dans l'app. Avantages : fonctionne hors ligne, aucune donnée envoyée, même voix sur tous les appareils, coût unique.
3. **Prénom de l'enfant** : pré-générer les 2 000 prénoms français les plus donnés ; pour les autres, l'app dit « Bravo, champion ! » sans prénom, ou le parent enregistre le prénom lui-même (enregistrement conservé sur l'appareil).

### 3.3 Volumes et coûts

Un contenu de 650 séances représente environ **1 à 1,5 million de caractères** de texte à dire (explications, consignes, items, feedback), plus l'anglais. À ce volume, le coût de génération est **marginal** ; le vrai coût est le temps de relecture.

| Option | Qualité en français | Voix d'enfant | Prix indicatif | Licence et points d'attention |
|---|---|---|---|---|
| **Comédien(ne) en studio** | Excellente, chaleureuse, phonèmes parfaits | Possible avec des enfants comédiens (autorisation administrative, contrats spécifiques) ou des adultes « voix d'enfant » | Sur devis : ordre de grandeur quelques centaines d'euros par demi-journée de studio et de cachet, plus les droits d'exploitation | Cession de droits écrite (durée, territoires, supports, IA exclue ou incluse) |
| **ElevenLabs** | Très bonne, expressive, multilingue | Voix « jeunes » dans la bibliothèque ; ne jamais cloner la voix d'un enfant réel | Starter 6 $/mois (droits commerciaux), Creator 22 $/mois, Pro 99 $/mois ([dupple, octobre 2026](https://dupple.com/learn/is-elevenlabs-free) ; [bigvu, 2026](https://bigvu.tv/blog/elevenlabs-pricing-2026-plans-credits-commercial-rights-api-costs/)) | Droits commerciaux dès l'offre payante ; vérifier les conditions sur les voix de la bibliothèque et sur l'usage dans des produits pour enfants |
| **Azure AI Speech (neuronal)** | Très bonne, nombreuses voix fr-FR, SSML précis (phonèmes IPA) | **fr-FR-EloiseNeural** est étiquetée « girl » par Microsoft ([Tech Community](https://techcommunity.microsoft.com/t5/azure-ai/azure-neural-text-to-speech-updates-51-new-voices-added-to-the/ba-p/1988418)) | ≈ 15 $ par million de caractères, 0,5 M gratuits par mois ([texttolab](https://texttolab.com/blog/azure-text-to-speech-pricing) ; [page officielle](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/speech-services/)) | Audio généré utilisable commercialement ; le meilleur contrôle de la prononciation |
| **Google Cloud TTS, Chirp 3 HD** | Très bonne, naturelle | Pas de voix d'enfant identifiée | 30 $ par million de caractères ([tarifs Google](https://cloud.google.com/text-to-speech/pricing?hl=fr)) | Moins de contrôle phonétique que Azure |
| **Modèles libres embarqués** (Piper, etc.) | Correcte à bonne | Rare | Gratuit | Vérifier la licence **de chaque voix** (certaines sont non commerciales) ; utile pour une voix de secours hors ligne |

**Recommandation** : comédienne pour le cœur phonologique (CP et GS) + **Azure** comme moteur principal pour sa précision SSML et sa voix d'enfant (Eloise pour les personnages enfants, Denise ou Vivienne pour la narratrice), **ElevenLabs** pour les histoires et les personnages expressifs. L'**anglais** doit être lu par une voix native britannique ou américaine (cohérente avec l'école française, plutôt britannique). Budget voix sur 12 mois : de l'ordre de **2 000 à 5 000 €** studio compris, à confirmer sur devis.

---

## 4. Les plateformes

### 4.1 Tablette et téléphone : une vraie application, pas seulement une manette

L'usage réel des 3-9 ans en semaine se fait sur tablette et téléphone (trajets, salle d'attente, chambre), et c'est là que se trouvent la plupart des concurrents (Lalilo, Kalulu, Khan Academy Kids, Poisson Rouge…). Le tactile ouvre aussi les meilleurs exercices (tracé, glisser-déposer, lecture au micro).

- **Une seule base de code** : si l'app TV est en web (ce que suggère le fonctionnement dans les navigateurs de télé et sur LG/Samsung), empaqueter la même base avec **Capacitor** (ou équivalent) pour Android, iOS et iPadOS ; adapter les mises en page à trois formats : télé (10-foot), tablette (paysage, cibles 2 cm), téléphone (portrait possible pour les exercices de tracé).
- **Le téléphone garde le rôle de manette et d'ardoise** quand la télé est allumée : c'est une force, à conserver.
- **Synchronisation entre appareils** : aujourd'hui « tout reste sur la télé » et un changement de télé fait tout perdre. Proposer une synchronisation **facultative** (voir 5.3) ou au minimum un **transfert local par QR code** d'un appareil à l'autre.
- **Achat unique** : un abonnement acheté sur Android doit être reconnu sur iOS et sur la télé ; cela impose un identifiant de foyer (compte parent léger) ou un code de restauration. Un service comme RevenueCat simplifie la gestion multi-magasins.

### 4.2 iOS et iPadOS

- Catégorie **Enfants** de l'App Store : barrière parentale pour tout achat, lien externe ou réglage ; pas de publicité ni d'analytique tierce sauf exceptions très encadrées ([App Review Guidelines, 1.3 et 5.1.4](https://developer.apple.com/support/downloads/terms/app-review-guidelines/App-Review-Guidelines-English-UK.pdf) ; [synthèse Manatt](https://manatt.com/Insights/Newsletters/Advertising-Law/Gambling-Tracking-Restricted-in-New-App-Store-Rule)).
- Le **Partage familial** des abonnements est un argument fort : l'activer.
- Apple TV : non prioritaire (part de marché faible en France pour la cible), mais la base web ne s'y prête pas ; à réévaluer à 12 mois.

### 4.3 Fire TV, Samsung, LG

- **Fire TV** : l'Appstore d'Amazon a fermé sur les appareils Android tiers le 20 août 2025, mais **reste actif sur Fire TV et Fire Tablet**, où les nouveaux dépôts sont acceptés ([blog développeurs Amazon](https://developer.amazon.com/apps-and-games/blogs/2025/02/upcoming-changes-to-amazon-appstore-for-android-devices-and-coins-program) ; [9to5Google](https://9to5google.com/2025/02/20/amazon-appstore-android-shutting-down-2025/)). Publier l'APK Android TV sur l'Amazon Appstore (catégorie Enfants) au lieu de l'installation manuelle, avec la facturation d'Amazon (In-App Purchasing API) ; cela couvre aussi les **tablettes Fire Kids**, très présentes chez les jeunes enfants.
- **Samsung Tizen** : dépôt via le [Samsung TV Seller Office](https://developer.samsung.com/tv/distribute/seller-office) (enregistrement, certification, [check-list de lancement](https://developer.samsung.com/tv-seller-office/checklists-for-distribution/launch-checklist.html)). Prévoir un partenariat ou accord préalable selon les pays.
- **LG webOS** : dépôt via [LG Seller Lounge](https://webostv.developer.lge.com/distribute/app-ecosystem), QA par LG puis publication sur le LG Content Store ; passer la check-list d'auto-test avant.
- **Le « mode développeur » n'est pas une distribution** : aucun parent ne le fera. Tant que les applications ne sont pas en magasin officiel, les retirer de la communication et garder le navigateur comme solution d'attente.
- **Monétisation** : « sur les autres télés, tout est ouvert pour l'instant » crée une fuite et un problème d'équité. Prévoir un déblocage par **compte parent** ou **code d'activation** acheté sur le web ou sur mobile.

### 4.4 Accessibilité

| Besoin | Mesures concrètes |
|---|---|
| **Dyslexie** | Mode « lecture aérée » (interlettrage et interlignage augmentés, syllabes alternées en couleur à la manière de l'outil LireCouleur), lecture de toute consigne à voix haute, police à formes distinctes (Andika). Ne pas promettre d'effet d'une « police pour dyslexiques » : les études sur OpenDyslexic ne montrent pas d'amélioration de la vitesse ni de la précision de lecture chez l'enfant ([Wery et Diliberto, 2017](https://pmc.ncbi.nlm.nih.gov/articles/PMC5629233)). |
| **TDAH / attention** | Séances courtes (5-8 min) avec pause, réglage « animations réduites » et « sans musique », pas de minuteur stressant, une seule consigne à la fois, retour immédiat. |
| **Daltonisme** | Ne jamais coder juste/faux ou les matières par la seule couleur : forme (✓ / ↺), pictogramme, son. Tester la palette avec un simulateur de deutéranopie et protanopie. |
| **Malentendants** | Sous-titres de toutes les consignes (déjà présents), retours visuels pour chaque son, vibration sur téléphone. |
| **Malvoyants / motricité** | Taille de texte réglable, focus encore plus gros, réglage de la vitesse de la voix, tolérance de tracé réglable, contrôle par contacteur (switch) sur tablette. |
| **Allophones** | Consignes parentales en plusieurs langues (anglais, arabe, portugais, turc…) dans l'espace parents : un vrai marché pour les familles qui veulent soutenir l'enfant en français. |

Références : [RGAA](https://accessibilite.numerique.gouv.fr/) (exigé pour Édu-up) et WCAG 2.2 AA pour les contrastes et les alternatives.

### 4.5 Mode hors ligne

Rendre **100 % du contenu utilisable hors ligne** (audio et images embarqués ou téléchargés une fois, pack par niveau de 50 à 150 Mo). C'est cohérent avec la promesse « rien ne passe par internet », indispensable en voiture et en vacances, et un argument différenciant face aux concurrents qui streament.

---

## 5. L'espace parents

### 5.1 Ce qu'il doit dire

Remplacer « minutes et % » par **trois questions de parents** :

1. **Où en est mon enfant ?** Une frise des compétences du programme de sa classe : acquis (vert), en cours (orange), pas encore vu (gris). Exemple CP : « Lit les syllabes avec m, l, r, s : acquis · Lit les mots avec ch : en cours · ou, on : pas encore ».
2. **Qu'est-ce qui coince ?** Les 3 compétences avec le plus d'erreurs, avec un exemple concret (« confond [b] et [d] à l'écrit »).
3. **Que puis-je faire ?** Une **activité de 5 minutes sans écran** par semaine, liée à ce qui a été travaillé (« Ce soir, cherchez ensemble 5 objets de la maison qui commencent par [ch] »), et des conseils d'accompagnement (lire une histoire chaque soir, faire compter en cuisinant, éviter de corriger en criant…).

Ajouter : la **fluence mesurée** (mots par minute) comparée aux repères officiels (50 / 70 / 90), présentée avec prudence (« dans la moyenne attendue », « à renforcer ») et sans classement entre enfants.

### 5.2 Lien avec l'école

- Afficher la **correspondance avec le programme officiel** et la **période** de l'année (par exemple « au CP, en novembre, la plupart des classes ont vu… ») en s'appuyant sur les progressions annuelles publiées par Eduscol.
- Permettre au parent de **choisir la méthode de lecture de la classe** (ou au moins l'ordre d'étude des sons) pour que l'app suive l'école et non l'inverse. C'est un argument majeur pour les parents de CP.
- Fiche **« À montrer à la maîtresse »** (PDF ou page imprimable) : acquis et difficultés, sans données personnelles inutiles.
- Calendrier : **mode vacances** (révisions d'été, « préparer le CP »), très recherché par les parents en juin-août.

### 5.3 Notifications et compte rendu hebdomadaire, en respectant la vie privée

La promesse « aucune donnée collectée » est un actif marketing ; le rapport parent ne doit pas la casser. Deux options, à proposer **au choix du parent** :

- **Option A, zéro serveur** : sur l'app téléphone du parent, le rapport est calculé à partir des données synchronisées **localement** (Wi-Fi de la maison) depuis la télé ou la tablette ; notifications locales (« Léa a terminé son unité des sons ! »). Aucun compte.
- **Option B, compte parent facultatif** : e-mail du parent uniquement (jamais de données d'identité de l'enfant au-delà d'un prénom ou pseudonyme), hébergement en Union européenne, chiffrement, **e-mail hebdomadaire le dimanche soir** : 3 réussites, 1 point à travailler, 1 activité à faire ensemble, temps passé. Désinscription en un clic, suppression des données à la fermeture du compte, durée de conservation courte (par exemple 12 mois d'inactivité).

Dans les deux cas : pas de SDK d'analytique publicitaire, pas d'identifiant publicitaire ; la mesure d'audience produit se fait de façon agrégée et anonyme (voire uniquement par retours volontaires).

---

## 6. Conformité et confiance

### 6.1 RGPD et mineurs

- **Aujourd'hui** (aucune donnée collectée, tout sur l'appareil), le risque est faible. Il augmente dès qu'on ajoute un compte, une synchronisation, un e-mail ou la reconnaissance vocale.
- En France, le **consentement d'un parent** est requis pour le traitement fondé sur le consentement d'un mineur de moins de 15 ans ; la CNIL a publié 8 recommandations (information adaptée aux enfants, consentement parental, contrôle parental respectueux de la vie privée, protection dès la conception) ([CNIL, droits numériques des mineurs](https://cnil.fr/node/121226) ; [recommandation 1](https://www.cnil.fr/fr/recommandation-1-encadrer-la-capacite-dagir-des-mineurs-en-ligne) ; [synthèse des 8 recommandations](https://cnil.fr/fr/node/313)).
- À faire avant toute fonction en ligne : **registre des traitements**, **analyse d'impact (AIPD)** pour la voix et les données d'apprentissage des enfants, politique de confidentialité en deux versions (parents et enfants, en images), contrats de sous-traitance (hébergeur, envoi d'e-mails, moteur de voix), hébergement UE.
- **Voix des enfants** : ne jamais envoyer l'audio de l'enfant à un serveur ; traitement sur l'appareil, rien de conservé.

### 6.2 Google Play : programme Familles et « Teacher Approved »

- Une app dont le public cible inclut des enfants doit respecter les **règles Familles** : uniquement des SDK certifiés pour les services destinés aux enfants, pas d'identifiant publicitaire, contenus adaptés, permissions minimales, déclaration exacte du public cible, sinon retrait ou suspension ([Google Play, règles Familles](https://support.google.com/googleplay/android-developer/answer/9893335) ; [blog Android Developers 2022](https://android-developers.googleblog.com/2022/11/helping-kids-and-families-find-high-quality-apps-for-kids.html?hl=fr)).
- **Teacher Approved** : les apps conformes aux règles Familles et publiées sont **éligibles automatiquement** à l'évaluation par des enseignants et spécialistes, sur des critères d'adéquation à l'âge, de qualité de l'expérience, d'enrichissement et de plaisir ; le badge donne accès à l'onglet Enfants ([page d'aide Teacher Approved](https://support.google.com/googleplay/android-developer/answer/10075896?hl=en) ; [TechCrunch](https://techcrunch.com/2022/11/16/google-play-streamlines-policies-around-kids-apps-as-regulations-tighten/)). Les points du présent audit (pas de QCM au hasard, images non ambiguës, voix de qualité, barrière parentale avant l'achat, pas de « Passer la leçon » trop visible) vont tous dans le sens des critères.
- Le badge n'est pas garanti ni demandable ; la meilleure stratégie est de soigner l'app **mobile** (l'onglet Enfants est d'abord une vitrine téléphone et tablette).

### 6.3 Mentions légales et éditeur

- Le pied de page « © 2026 [NOM DE L'ÉDITEUR] » est un **défaut bloquant**. La loi pour la confiance dans l'économie numérique (LCEN, 2004) impose d'identifier l'éditeur d'un site professionnel (nom ou raison sociale, adresse, contact, directeur de la publication, hébergeur). Les CGV d'abonnement exigent aussi l'identité du vendeur.
- Sur Google Play, un développeur qui vend un abonnement dans l'UE doit se déclarer **commerçant** (Digital Services Act) et son nom et son adresse sont affichés publiquement : il faut une **structure juridique** (micro-entreprise ou SAS) et une adresse de domiciliation pour ne pas exposer l'adresse personnelle du couple.
- Remplacer l'adresse de contact Gmail par une adresse sur un **nom de domaine propre** (contact@petitssavants.fr), et le site `github.io` par un domaine dédié : c'est un signal de sérieux immédiat.

### 6.4 COPPA (si ouverture internationale, en particulier les États-Unis)

Les amendements de la règle COPPA sont **pleinement applicables depuis le 22 avril 2026** : consentement parental vérifiable avant toute collecte, consentement séparé pour la communication à des tiers, politique de conservation écrite, programme de sécurité de l'information ([Hunton](https://www.hunton.com/privacy-and-cybersecurity-law-blog/ftc-publishes-final-coppa-rule-amendments) ; [White & Case](https://www.whitecase.com/insight-alert/unpacking-ftcs-coppa-amendments-what-you-need-know) ; [Davis Polk](https://www.davispolk.com/insights/client-update/ftc-prioritizes-coppa-enforcement-new-compliance-obligations-take-effect)). Tant que rien n'est collecté, Petits Savants est bien placé ; l'option « compte parent » devra intégrer ces exigences avant un lancement aux États-Unis.

### 6.5 Labels et reconnaissance institutionnelle

| Label / dispositif | Intérêt | Démarche |
|---|---|---|
| **Teacher Approved (Google)** | Visibilité forte dans Play | Automatique si conforme Familles ; soigner la qualité |
| **Kids Category (Apple)** | Vitrine iOS | Conformité 1.3 |
| **« Reconnu d'intérêt pédagogique » (RIP)** | Caution du ministère, attribuée après expertise par des enseignants et une commission | Marque toujours mentionnée par le ministère ; procédure à confirmer auprès de la DNE ([page partenariats numériques](https://www.education.gouv.fr/les-partenariats-dans-le-domaine-du-numerique-educatif) ; [BO 2016](https://www.education.gouv.fr/bo/16/Hebdo28/MENN1617578C.htm)) |
| **Édu-up (DNE)** | Subvention à la production de ressources numériques, ouverte aux petites structures, de la maternelle à l'enseignement supérieur ; exige RGPD, RGAA, personne morale | Dossier examiné en commission (pédagogie, juridique, économie, technique) ([education.gouv.fr](https://www.education.gouv.fr/le-dispositif-edu-un-soutien-la-production-de-ressources-numeriques-pour-l-ecole-450476) ; [Eduscol](https://eduscol.education.gouv.fr/6753/des-ressources-numeriques-innovantes-et-adaptees-grace-au-dispositif-edu)) |
| **Réseau Canopé** | Diffusion auprès des enseignants, formations, visibilité | Prise de contact et proposition de ressource ou de partenariat |
| **EdTech France** | Réseau, salons (Educ@tech Expo), crédibilité | Adhésion à l'association |
| **Validation scientifique** | Argument fort pour les parents | Comité pédagogique (une enseignante de CP, une orthophoniste, un chercheur en sciences cognitives), puis petite étude d'efficacité avant/après sur une classe volontaire |

---

## 7. Feuille de route produit (3, 6, 12 mois)

Effort : **S** = moins de 2 semaines-personne, **M** = 2 à 6, **L** = plus de 6. Impact : ★ à ★★★ (rétention, conversion, confiance, qualité pédagogique).

### 7.1 D'ici 3 mois (décembre 2026 - février 2027) : « Fiabiliser et rassurer »

| Action | Effort | Impact | Pourquoi |
|---|---|---|---|
| Renseigner l'éditeur, créer la structure juridique, domaine et e-mail pro, mentions légales complètes | S | ★★★ | Confiance, obligation légale et Play |
| Barrière parentale devant l'écran Premium et les liens externes ; « Passer la leçon » réservé au parent | S | ★★ | Conformité Familles / Apple, qualité |
| Nommer à voix haute chaque image au focus ; supprimer les réutilisations leçon → exercice ; indice ciblé après erreur, correction expliquée après 2 erreurs | S | ★★★ | Validité pédagogique immédiate |
| Remplacer la synthèse de la télé par de l'audio pré-généré (Azure) pour les 151 leçons existantes + enregistrement studio des 36 phonèmes | M | ★★★ | Cœur de la promesse « sans savoir lire » |
| Tailles minimales (28 px partout, 34 px texte courant), étiquettes de leçons sans crochets phonétiques, onglets de matières en couleur + personnage | S | ★★ | Lisibilité à 3 m, non-lecteurs |
| Référentiel de compétences interne relié aux programmes 2025 ; étiqueter chaque item existant | M | ★★ | Base de la différenciation et du rapport parent |
| Quête du jour « 1 leçon + 1 révision » ; révisions éclair J+1/J+3/J+7 | M | ★★ | Mémorisation, rétention |
| Publication Fire TV sur l'Amazon Appstore | S | ★★ | Distribution |
| Charte de direction artistique et 150 premières illustrations maison (remplacer les emojis les plus ambigus) | M | ★★ | Qualité et distinction |

### 7.2 D'ici 6 mois (mars - mai 2027) : « Le CP et le mobile »

| Action | Effort | Impact | Pourquoi |
|---|---|---|---|
| **Parcours de lecture CP complet** (60 séances syllabiques + 40 mini-histoires décodables), relu par une enseignante de CP | L | ★★★ | Argument d'achat n° 1 des parents |
| Nouveaux gabarits : tri, association, remise en ordre, encodage (dictée par étiquettes), droite numérique, calcul mental | L | ★★★ | Sortir du QCM |
| **App tablette et téléphone** Android + iOS (même base), tracé avec ordre et sens des traits, mode hors ligne | L | ★★★ | Usage réel, onglet Enfants de Play, App Store |
| Test de positionnement adaptatif au premier lancement | M | ★★ | Bonne difficulté dès la 1re minute, moins d'abandon |
| Rapport parents par compétences + activité sans écran de la semaine (dans l'app, sans compte) | M | ★★★ | Conversion de l'essai gratuit |
| Abonnement multi-plateforme (compte parent léger ou code de foyer), fin du « tout ouvert » sur les autres télés | M | ★★ | Revenus |
| Mascottes : 5 guides de matières, 40 objets de personnalisation dessinés, aperçu sur l'animal | M | ★★ | Projet des fondateurs, motivation |
| Comité pédagogique (enseignante CP, orthophoniste, chercheur) et dossier Édu-up | S | ★★ | Crédibilité, financement |

### 7.3 D'ici 12 mois (juin - novembre 2027) : « Le programme complet »

| Action | Effort | Impact | Pourquoi |
|---|---|---|---|
| Montée à **≈ 650 séances** (maths GS-CE2 selon les nouvelles progressions, questionner le monde, anglais oral avec voix natives) | L | ★★★ | Valeur sur toute l'année, rétention annuelle |
| Mesure de la **fluence** : lecture minutée accompagnée, puis reconnaissance vocale **sur l'appareil** (option activée par le parent) | L | ★★★ | Différenciation forte, repères 50/70/90 |
| Choix de la méthode de lecture de la classe ; mode « préparer le CP » et « cahier de vacances » pour l'été 2027 | M | ★★★ | Pic de téléchargements juin-août |
| E-mail hebdomadaire facultatif (compte parent, hébergement UE, AIPD faite) | M | ★★ | Réengagement, rapport hors télé |
| Applications Samsung et LG en magasins officiels | M | ★★ | Couverture du parc TV français |
| Accessibilité : mode lecture aérée, syllabes colorées, animations réduites, palettes testées daltonisme | M | ★★ | Inclusion, Édu-up (RGAA) |
| Mini-jeux de révision (pêche aux sons, course des dizaines) | M | ★★ | Plaisir, critère « delight » de Teacher Approved |
| Petite étude d'efficacité avec une ou deux classes volontaires ; demande RIP ; contact Canopé | M | ★★ | Preuve, labels |
| Préparation COPPA et version anglaise si ouverture internationale | M | ★ | Seulement si stratégie internationale confirmée |

### 7.4 Indicateurs à suivre (mesurés de façon agrégée et anonyme, ou déclarés)

- Rétention J7 et J30, nombre de séances par semaine par enfant.
- Taux de conversion essai → payant, et désabonnement à 3 mois.
- Taux de réussite **après** une première erreur (preuve que le feedback enseigne).
- Progression des compétences sur 4 semaines (part d'items acquis lors des révisions espacées).
- Note moyenne et nombre d'avis sur Play ; obtention du badge Teacher Approved.

---

## Annexe : liste de contrôle rapide pour chaque nouvelle leçon

1. Objectif rattaché à une compétence du programme 2025 (code interne).
2. Explication qui **montre** (animation, manipulation), pas seulement des images.
3. Toutes les images ont un nom unique et sont dites à voix haute.
4. Les items d'exercice sont **nouveaux** par rapport à la leçon (transfert).
5. Au moins 2 types d'exercices différents, dont un de production (encoder, tracer, lire, calculer).
6. Feedback : indice, puis correction expliquée, puis item reposé plus tard.
7. Items enregistrés pour les révisions J+1, J+3, J+7, J+21.
8. Audio pré-généré et écouté par un humain ; phonèmes enregistrés.
9. Textes à l'écran de 28 px minimum, consigne courte, lisible sans savoir lire.
10. Relu par l'enseignante du comité pédagogique.
