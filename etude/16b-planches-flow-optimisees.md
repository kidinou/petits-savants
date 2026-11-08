# 16b · Les planches Google Flow optimisées

*Étude 16b, Petits Savants, 8 novembre 2026. Rôle : direction artistique de production (Google Flow, images et vidéos, ingrédients). Ce document **remplace la liste et l'ordre de la fiche 11** (`11-fiche-production-flow.md`), qui reste la référence pour l'historique et les couleurs. Bases : la direction « Lumière douce » et ses maquettes (étude 15, `design-2026/`), les fiches `planches/P01-tilou-v2.jpg` et `P01bis-compagnons-pop-v2.jpg`, le catalogue d'objets (étude 03, § 4.3), les visuels réseaux (étude 14), et le relevé automatique de tous les emojis réellement utilisés dans les 551 leçons de `/home/user/tvapp/www/js/content/`.*

**Le principe** : peu de prompts, de grandes planches. Chaque planche regroupe un maximum d'éléments sur une grille régulière, sur fond uni, à la même échelle ; Claude la découpe automatiquement, nomme chaque morceau et l'intègre dans l'app. Tout ce qui peut être **composé** (icônes, bannières, couvertures, miniatures) ou **animé** à partir d'images fixes est fait par Claude, sans crédit.

---

## 0. En bref

| | Fiche 11 (avant) | Ce plan (16b) |
|---|---|---|
| Planches d'images | 62 prompts (+ 9 dans l'étude 14), dont 12 suspendus ou abandonnés | **34 planches** (+ 1 en option) |
| Éléments obtenus | — | **environ 660** : 8 animaux × 19 dessins, Tilou × 40, 72 accessoires, 6 décors, 24 objets de décor, 358 mots d'imagier, 2 scènes |
| Lancements d'images prévus (2 à 3 essais) | 150 à 200 | **environ 72**, 100 au pire |
| Vidéos | 4 | **2 obligatoires** (+ 1 en option), soit **4 lancements**, 6 au pire |
| Ce que Claude fait sans crédit | recadrages | découpe, détourage, 13 dessins vectoriels de l'imagier, icônes et formats des magasins, bannières, couvertures, épingles, miniatures, **toutes les petites animations** (clignement, rebond, coucou, danse, antenne « ? » → « ! », sommeil) |

**L'ordre** : les animaux (A0 puis A1 à A8) → Tilou (TI) → les accessoires et le test (ACC, TEST) → les décors (CH, TH) → l'imagier (IMG) → la marque (BR) → les vidéos (V). Seule la planche A0 bloque la suite : tant qu'elle n'est pas validée, ne lancez ni A1-A8 ni les accessoires. Tilou, l'imagier et les décors peuvent se faire en parallèle.

---

## 1. Le budget

### 1.1 Les images

*Un « lancement » = un prompt envoyé dans Flow. Réglez **2 sorties par prompt** (paramètres de Flow) : c'est assez pour choisir, et deux fois moins cher que 4 si vos images coûtent des crédits. Le coût exact dépend du modèle et de l'abonnement : regardez le chiffre affiché à côté du bouton avant de lancer.*

| Groupe | Planches | Essais prévus | Lancements | Pourquoi ce nombre d'essais |
|---|---|---|---|---|
| Les animaux (A0, A1 à A8) | 9 | 3 pour A0, 2 à 3 pour les autres | **23** | A0 fixe la base commune : on prend le temps. Les fiches A1-A8 en héritent. |
| Tilou (TI-1, TI-2) | 2 | 3 puis 2 | **5** | Le personnage de marque doit être exact. |
| Les accessoires (ACC-1 à ACC-4) et le test | 5 | 2 chacun, 1 pour le test | **9** | Objets simples, l'échelle est donnée par A0. |
| Les décors (CH-1, CH-2, TH-1 à TH-5) | 7 | 2 chacun, 1 pour CH-2 | **13** | CH-2 est une variation de CH-1 : un essai suffit souvent. |
| L'imagier (IMG-1 à IMG-8) | 8 | 2 chacun, 1 pour IMG-8 | **15** | IMG-8 sert aussi au rattrapage des ratés. |
| La marque (BR-1 à BR-3) | 3 | 3, 2, 2 | **7** | BR-1 donne l'icône : 3 essais. |
| **Total** | **34** | | **72** (100 au pire) | |
| *En option : ACC-5, mobilier de la chambre et du jardin* | *1* | *2* | *2* | *seulement si la chambre décorable est lancée* |

### 1.2 Les vidéos, par priorité

| Priorité | Vidéo | Pourquoi elle vaut un crédit | Lancements |
|---|---|---|---|
| **1** | **V1 · Le signe de Tilou** (16:9, sert aussi en 9:16) | C'est le geste de marque (« ? » → « ! ») en vrai volume : écran de chargement de l'app **et** première seconde de tous les Reels et Shorts. Une seule vidéo pour deux usages. | **2** (1 rapide pour régler le mouvement, 1 en qualité) |
| **2** | **V2 · La révélation** (9:16) | La vidéo de lancement : Tilou sort de la télé. Un mouvement de caméra et une lumière qu'on ne peut pas faire avec des images fixes. | **2** |
| 3 (option) | V3 · Bonne nuit (16:9) | Utile, mais Claude sait la faire à partir de 3 images fixes (§ 4.2). À ne lancer que s'il reste des crédits. | 0 à 2 |
| — | Tout le reste | Clignements, rebonds, coucou, danse, antenne, sommeil, dérive du décor : **Claude les anime** à partir des planches (§ 4.2). | 0 |

**Pour économiser sur la vidéo** : réglez **1 sortie par prompt** (Flow en propose 2 par défaut, chacune payée), faites le premier essai en mode **rapide** (moins cher) pour vérifier le mouvement, et ne passez en mode **qualité** que pour la version finale. Préférez « **Images vers vidéo** » (première et dernière image fournies) : le mouvement est guidé, donc il y a moins d'essais ratés.

### 1.3 Ce qui n'est plus généré, et pourquoi

| Fiche 11 | Devient | Raison |
|---|---|---|
| 0.1 à 0.8 (fiches des animaux) + 0.10 (expressions) | **A1 à A8** : vues **et** expressions **et** poses sur la même planche | 16 prompts → 8 |
| 0.9 (les 8 ensemble) | **A0**, en premier | Elle fixe la base commune avant les fiches. |
| 0.11 à 0.14 (4 tests d'habillage) | **TEST** : les 8 animaux, 8 tenues différentes, une planche | 4 prompts → 1, et chaque emplacement est testé |
| 1.1 à 1.6, 2.1 à 2.6 (Pétillous) | rien | Suspendus (décision du 8 novembre). Si les fondatrices les gardent comme guides de matières : une planche de 6 × 3 par Pétillou, sur le modèle de TI-1. |
| 2.7 (poses de Tilou), 3.6 (panoplies), 7.3, 7.4, PS-91 (poses de miniatures) | **TI-1, TI-2, BR-1** | Les poses servent à l'app, aux miniatures, aux couvertures et aux épingles. |
| 2.8 (stades d'évolution), 4.3 (Pépins), 4.2 (Somnole) | rien pour l'instant | Liés aux anciens compagnons ; à revoir si les fondatrices les gardent. |
| 3.1, 3.3, 3.4, 3.5 (accessoires) | **ACC-1 à ACC-4** : un emplacement par planche (tête, visage et cou, haut, pieds et objets tenus) | Les objets de saison sont rangés dans leur emplacement. |
| 4.1 (doudous) | rien | Abandonné. |
| 4.4 à 4.7 (cabane) | **CH-1, CH-2** (la chambre de l'animal) ; jardin et meubles en option (**ACC-5**) | La chambre est l'écran « Mon animal » et la pause. |
| 5.1 (imagier test de 24 mots) | **IMG-1 à IMG-8** : les 358 mots réellement utilisés | Relevé automatique dans le code des leçons. |
| 6.1, 6.2, 6.3, 7.1, 7.2, PS-92 | **composés par Claude** à partir de BR-1 et des fiches A | Une icône, une bannière ou une couverture est un montage : pas besoin de crédit. |
| PS-93, PS-94 (scènes cosy des miniatures) | **BR-2, BR-3** | Ce sont de vraies scènes : elles restent. |
| 8.1 à 8.4 (vidéos) | **V1, V2** (+ V3 en option) | 8.1 et 8.2 fusionnent ; 8.3 est animée par Claude. |
| 9.1 à 9.4 (décors des thèmes) | **TH-1 à TH-4** + **TH-5** (tous les objets de décor sur une planche) | Les vignettes de choix sont recadrées par Claude. |

---

## 2. Les règles communes

### 2.1 Les réglages de Flow

- **Modèle** : le modèle d'image le plus récent proposé par Flow (celui qui accepte des ingrédients). Pour la vidéo : Veo, la version la plus récente.
- **Format** : celui indiqué pour chaque planche (carré 1:1 ou paysage 16:9 ; vertical 9:16 pour V2).
- **Qualité au téléchargement** : **2K** pour tout ce qui est découpé (presque tout), 1K pour la planche TEST qui ne sert qu'à valider. Si Flow propose le 4K sur votre abonnement, prenez-le pour A1-A8, TI-1 et BR-1.
- **Ingrédients** : **3 au maximum** par planche (au-delà, Flow mélange). Quand il en faut plus, Claude fabrique une **mosaïque** : plusieurs images validées réduites sur une seule (c'est le cas de `ING-test.png` et `ING-themes.png`).
- **Un ingrédient ne doit pas contenir de texte** : les mots qu'il porte réapparaissent dans l'image générée. C'est pour cela que Claude prépare des ingrédients propres (§ 2.4) au lieu de joindre les maquettes telles quelles.
- **Les prompts sont en anglais**, complets, déjà accompagnés du bloc de style : copiez-les tels quels, sans rien ajouter.

### 2.2 Les règles de mise en page, pour que le découpage soit automatique

1. **Une grille régulière**, annoncée dans le prompt (6 × 3, 7 × 7…), lue de gauche à droite puis de haut en bas : la case 1 est en haut à gauche.
2. **Un seul élément par case**, centré, avec de l'air autour ; rien ne touche le voisin ni le bord.
3. **Un fond gris clair uni** (`#D5DAE1`) sur toutes les planches à découper. Ni blanc (les animaux blancs, le lait, l'œuf, les nuages s'y perdraient) ni vert (il déteint sur les reflets du rendu en volume). Pas d'ombre portée : Claude ajoute l'ombre au sol dans l'app (c'est déjà le cas dans les maquettes).
4. **La même échelle et le même angle** : les accessoires à la taille où ils seront portés, les animaux à la même hauteur, vus de face sauf mention contraire. Exception voulue : l'imagier, où chaque objet remplit sa case de la même façon (une fourmi aussi grande qu'un éléphant).
5. **Pas de texte, pas de numéros, pas de cadres, pas de lignes de grille** : ils gênent le découpage et l'IA fait des fautes. Tout le texte est ajouté par Claude.

### 2.3 Les blocs communs (déjà intégrés dans chaque prompt)

Pour information ; vous n'avez rien à recopier : chaque prompt du § 3 les contient déjà.

| Bloc | Rôle | Texte |
|---|---|---|
| Style | Le rendu « Lumière douce » des maquettes | `Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.` |
| Grille | Mise en page à la même échelle | `Layout: a strict regular grid of C columns and R rows of equal, invisible cells, read left to right then top to bottom. Exactly one element per cell, centered in its cell, all elements at the same scale and seen from the same angle. Generous empty space around each element: nothing touches or overlaps a neighbour or the edge of the image. Background: perfectly flat, uniform light cool grey (#D5DAE1) over the whole image, no gradient, no floor, no cast shadows, no grid lines, no frames, no labels.` (C et R remplacés par le nombre de colonnes et de lignes) |
| Grille imagier | Mise en page à la même taille d'image | `Layout: a strict regular grid of C columns and R rows of equal, invisible cells, read left to right then top to bottom. Exactly one item per cell, centered in its cell. Every item is drawn at the same picture size, filling about 70 % of its cell (an ant is drawn as big as an elephant). Generous empty space around each item: nothing touches or overlaps a neighbour or the edge of the image. Background: perfectly flat, uniform light cool grey (#D5DAE1) over the whole image, no gradient, no floor, no cast shadows, no grid lines, no frames, no labels.` |
| Base des animaux | Les 5 points d'accroche communs | `Shared body base (identical for every animal): a chibi baby animal standing upright, very big round head (about 55 % of the total height), small bean-shaped body with a lighter belly, short rounded arms, round feet, big glossy dark indigo eyes with two white highlights, soft pink cheeks, tiny closed smile, no teeth. All animals have exactly the same height, head size, body, arms and feet, so that the same hat, glasses, scarf, top or shoes fits every one of them.` |
| Tilou | L'identité du personnage de marque | `Tilou, exactly as in the attached reference sheet: a small apricot-orange (#FF9A3C) peanut-shaped creature whose big rounded head merges into a soft body, a cream egg-shaped belly, very big glossy dark indigo eyes with two white highlights, soft pink cheeks, a tiny closed smile, short rounded arms with soft mitten tips, two small round feet, a thin dark indigo outline and a soft painted look, and on top of the head a single antenna. The antenna is normally curled like a question mark and ends in a small glowing yellow pearl (#FFD23F); when Tilou is delighted it stands perfectly straight up like an exclamation mark, the pearl at its top glowing brighter. Original character, no resemblance to any existing character.` |

Les prompts de Tilou (TI-1, TI-2, BR-1) utilisent le bloc Tilou à la place du bloc Style, qui demande « pas de contour » ; les prompts de scènes où Tilou côtoie le reste (BR-2, BR-3) gardent le bloc Style et précisent l'exception.

**Un choix à confirmer** : Tilou garde son **contour indigo fin et son rendu peint** (planche P01), alors que les animaux et les objets sont en volume doux sans contour. C'est voulu : Tilou est le narrateur de la marque, l'animal est le jouet de l'enfant, et le contour rend Tilou lisible en petit (en haut à gauche de l'exercice). Si les fondatrices préfèrent Tilou en volume comme dans les maquettes, Claude remplace dans les prompts de Tilou `a thin dark indigo outline and a soft painted look` par `the same soft 3D matte vinyl look as the companion animals, no outline`.

### 2.4 Étape 0 : les ingrédients que Claude prépare (aucun crédit)

Les maquettes de l'étude 15 sont des pages HTML : Claude les affiche dans un navigateur sans interface en **masquant** les textes et les éléments gênants, et enregistre des images propres. Avant la première planche, il dépose dans `etude/flow/ingredients/` :

> ✅ **Prêtes** (8 novembre) : `ING-animaux.png`, `ING-accessoires.png`, `ING-tilou.png`, `ING-tilou-signe.png`, `ING-chambre.png`, `ING-paysage.png` et `ING-objets.png` sont dans `etude/planches/`. `ING-test.png` et `ING-themes.png` se font plus tard, à partir de vos planches validées.

| Fichier | Contenu | Fabriqué à partir de | Sert à |
|---|---|---|---|
| `ING-animaux.png` | Les 8 animaux de face, sans accessoire, sans nom, sur fond uni | `design-2026/00-planche-compagnons.html` (rangée du haut) | A0, A1-A8 |
| `ING-accessoires.png` | Les 12 accessoires des maquettes, sans nom | `00-planche-compagnons.html` (rangée du bas) | ACC-1 à ACC-4 |
| `ING-tilou.png` | Les 4 vues de Tilou, sans les mots FRONT, SIDE… | `planches/P01-tilou-v2.jpg` | TI-1, TI-2, BR-1, V1, V2 |
| `ING-tilou-signe.png` | Tilou « ? » et Tilou « ! » côte à côte, sans texte | `00-planche-compagnons.html` (en bas à droite) | TI-1 |
| `ING-chambre.png` | La chambre (fenêtre, mur, parquet, tapis) sans l'animal, sans menu ni bulle | `06-mon-animal.html` | CH-1 |
| `ING-paysage.png` | Le paysage du parcours (collines, route, arbres) sans interface ni texte | `03-parcours.html` | TH-1 à TH-4 |
| `ING-objets.png` | Le ballon, la lune, la pomme et le soleil des cartes d'exercice, sans les mots | `04-exercice-bonne-reponse.html` | IMG-1 à IMG-8 |
| `ING-test.png` | Mosaïque des 27 accessoires portés dans TEST, découpés de ACC-1 à ACC-4 | après ACC-4 | TEST |
| `ING-themes.png` | Mosaïque 2 × 2 de TH-1 à TH-4 validées | après TH-4 | TH-5 |

---

## 3. Les planches, dans l'ordre de production

### Le tableau récapitulatif

| N° | Fichier à envoyer | Format | Qualité | Ingrédients | Contenu | Grille |
|---|---|---|---|---|---|---|
| **A0** | `PS2-A0-famille.png` | Paysage 16:9 | 2K | ING-animaux | Les 8 animaux de face | 4 × 2 |
| **A1-A8** | `PS2-A1-licorne.png` … `PS2-A8-ours.png` | Paysage 16:9 | 2K | PS2-A0, ING-animaux | 6 vues (dont 3 pour le clignement), 6 expressions, 6 poses | 6 × 3 |
| **TI-1** | `PS2-TI1-tilou-fiche.png` | Paysage 16:9 | 2K | ING-tilou, ING-tilou-signe | 6 vues, 6 expressions, 6 étapes de l'antenne | 6 × 3 |
| **TI-2** | `PS2-TI2-tilou-poses.png` | Paysage 16:9 | 2K | PS2-TI1, ING-tilou | 18 poses (app, réseaux, miniatures) | 6 × 3 |
| **ACC-1** | `PS2-ACC1-tete.png` | Paysage 16:9 | 2K | PS2-A0, ING-accessoires | 18 chapeaux et coiffures | 6 × 3 |
| **ACC-2** | `PS2-ACC2-visage-cou.png` | Paysage 16:9 | 2K | PS2-A0, ING-accessoires | 6 pour le visage, 12 pour le cou | 6 × 3 |
| **ACC-3** | `PS2-ACC3-haut.png` | Paysage 16:9 | 2K | PS2-A0, ING-accessoires | 18 hauts et tenues | 6 × 3 |
| **ACC-4** | `PS2-ACC4-pieds-objets.png` | Paysage 16:9 | 2K | PS2-A0, ING-accessoires | 6 paires de chaussures, 12 objets tenus | 6 × 3 |
| **TEST** | `PS2-TEST-habillage.png` | Paysage 16:9 | 1K | PS2-A0, ING-test | Les 8 animaux habillés, 8 tenues différentes | 4 × 2 |
| *ACC-5* | `PS2-ACC5-mobilier.png` | Paysage 16:9 | 2K | PS2-CH1, ING-accessoires | *option* : 24 meubles et objets de jardin | 6 × 4 |
| **CH-1** | `PS2-CH1-chambre-jour.png` | Paysage 16:9 | 2K | ING-chambre | La chambre de l'animal, le jour | scène |
| **CH-2** | `PS2-CH2-chambre-nuit.png` | Paysage 16:9 | 2K | PS2-CH1 | La même chambre, la nuit | scène |
| **TH-1 à TH-4** | `PS2-TH1-jungle.png` … `PS2-TH4-ocean.png` | Paysage 16:9 | 2K | ING-paysage | Le fond de chaque thème à univers | scène |
| **TH-5** | `PS2-TH5-objets-themes.png` | Paysage 16:9 | 2K | ING-themes | 24 objets de décor (6 par thème) | 6 × 4 |
| **IMG-1 à IMG-8** | `PS2-IMG-1.png` … `PS2-IMG-8.png` | Carré 1:1 | 2K | ING-objets (+ PS2-IMG-1 à partir de IMG-2) | 358 mots des leçons | 7 × 7 |
| **BR-1** | `PS2-BR1-tilou-portraits.png` | Carré 1:1 | 2K | ING-tilou, PS2-TI1 | 4 grands portraits de Tilou | 2 × 2 |
| **BR-2** | `PS2-BR2-scene-soir.png` | Paysage 16:9 | 2K | PS2-TI2, PS2-CH2, PS2-A0 | Scène « histoire du soir » | scène |
| **BR-3** | `PS2-BR3-scene-devoirs.png` | Paysage 16:9 | 2K | PS2-TI2, PS2-CH1 | Scène « devoirs au calme » | scène |

---

### 3.1 Les animaux

**A0 · La famille** — `PS2-A0-famille.png` · **Paysage 16:9 · 2K** · ingrédient : `ING-animaux.png` · 3 essais

C'est la planche la plus importante : elle fixe **la base commune** (même tête, même corps, mêmes points d'accroche) avant les fiches détaillées. Vérifiez surtout que les 8 ont **exactement la même hauteur et la même tête**.

```
Character lineup of 8 original baby animal companions for a children's TV learning app, in the style of the attached reference, one animal per cell, in this order: 1) a baby unicorn: lilac-white body (#F7F1FF) with soft lilac shading (#BBA6EE), white belly, a short golden twisted horn, a mane and a tail made of soft pastel puffs (pink #FF8CC6, lilac #B48CFF, sky blue #7CC7FF, mint #7FE3C4), small pointed ears pink inside; 2) a baby dinosaur: fresh green body (#4FC27F), pale yellow belly (#FFF0B5), small rounded orange plates (#FF9A3C) on top of the head and along a thick short tail, a wide friendly snout with two small nostrils, a few darker green spots, no ears; 3) a kitten: soft lavender-blue body (#9DB3E8), white-blue belly, pointed ears pink inside, three small darker stripes on the forehead, thin whiskers, a thin S-shaped tail; 4) a puppy: biscuit-beige body (#F6CF9A), cream belly and muzzle, big floppy brown ears (#A9693A), a light brown patch around one eye, a short wagging tail; 5) a bunny: very pale pink body (#FBEFF3), white belly, long upright ears pink inside, a small pink nose, a round pompom tail; 6) a panda cub: white body (#FAFAF6), dark navy-black (#2E3352) round ears, eye patches, arms and feet, white belly, a small round tail; 7) a fox cub: bright orange body (#FF8D3F), cream belly and white cheek mask, pointed ears with dark brown tips, a big fluffy tail with a white tip; 8) a bear cub: warm brown body (#B9835A), beige muzzle and belly (#F3D9B8), small round ears, a small round tail.

Shared body base (identical for every animal): a chibi baby animal standing upright, very big round head (about 55 % of the total height), small bean-shaped body with a lighter belly, short rounded arms, round feet, big glossy dark indigo eyes with two white highlights, soft pink cheeks, tiny closed smile, no teeth. All animals have exactly the same height, head size, body, arms and feet, so that the same hat, glasses, scarf, top or shoes fits every one of them. All 8 stand in the same neutral pose, front view, arms relaxed along the body, happy closed smile, no accessories, no clothes.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.

Layout: a strict regular grid of 4 columns and 2 rows of equal, invisible cells, read left to right then top to bottom. Exactly one element per cell, centered in its cell, all elements at the same scale and seen from the same angle. Generous empty space around each element: nothing touches or overlaps a neighbour or the edge of the image. Background: perfectly flat, uniform light cool grey (#D5DAE1) over the whole image, no gradient, no floor, no cast shadows, no grid lines, no frames, no labels.
```

| Case | Animal | Nom dans l'app | Fichier découpé |
|---|---|---|---|
| 1 | licorne | Praline | `animaux/licorne/famille.png` |
| 2 | dinosaure | Croc | `animaux/dinosaure/famille.png` |
| 3 | chat | Myrtille | `animaux/chat/famille.png` |
| 4 | chien | Biscotte | `animaux/chien/famille.png` |
| 5 | lapin | Guimauve | `animaux/lapin/famille.png` |
| 6 | panda | Bambou | `animaux/panda/famille.png` |
| 7 | renard | Noisette | `animaux/renard/famille.png` |
| 8 | ours | Caramel | `animaux/ours/famille.png` |

**A1 à A8 · La fiche de chaque animal** — `PS2-A1-licorne.png` … `PS2-A8-ours.png` · **Paysage 16:9 · 2K** · ingrédients : `PS2-A0-famille.png` (validée) + `ING-animaux.png` · 2 à 3 essais chacune

Une planche par animal, **18 dessins** : la ligne 1 donne les vues (dont les trois images du **clignement** : yeux ouverts, mi-clos, fermés, dans exactement la même pose), la ligne 2 les expressions, la ligne 3 les poses qui servent aux animations (§ 4.2). Commencez par la licorne : si elle est validée, les 7 autres suivent avec le même prompt.

**Les 18 cases (identiques pour les 8 animaux)**

| Case | Ligne | Dessin | Fichier découpé | Sert à |
|---|---|---|---|---|
| 1 | Vues | Face, sourire, bras le long du corps | `01-face.png` | Image de base, respiration, rendu 2D |
| 2 | Vues | Face, même pose, **yeux mi-clos** | `02-face-mi-clos.png` | Clignement |
| 3 | Vues | Face, même pose, **yeux fermés** | `03-face-yeux-fermes.png` | Clignement |
| 4 | Vues | Trois-quarts, tourné vers la gauche de l'image | `04-trois-quarts.png` | Regarder le focus, rotation 2D, référence 3D |
| 5 | Vues | Profil, tourné vers la gauche | `05-profil.png` | Rotation 2D, référence 3D |
| 6 | Vues | Dos | `06-dos.png` | Rotation 2D, référence 3D |
| 7 | Expressions | Joyeux, petite bouche ouverte | `07-joie.png` | Bonne réponse |
| 8 | Expressions | Ravi, yeux en croissants, joues lumineuses | `08-ravi.png` | Fin de leçon |
| 9 | Expressions | Curieux, tête penchée | `09-curieux.png` | Focus, écoute |
| 10 | Expressions | « Presque » : petite moue douce, sourcils gentils, jamais triste | `10-presque.png` | Mauvaise réponse |
| 11 | Expressions | Surpris, yeux ronds, bouche en « o » | `11-surpris.png` | Coffre, cadeau |
| 12 | Expressions | Clin d'œil | `12-clin-oeil.png` | Focus sur le profil |
| 13 | Poses | Coucou, bras levé, main ouverte | `13-coucou-a.png` | Coucou (image 1) |
| 14 | Poses | Coucou, même pose, main inclinée vers l'extérieur | `14-coucou-b.png` | Coucou (image 2) |
| 15 | Poses | Saut de joie, bras en l'air, pieds décollés | `15-saut.png` | Bonne réponse |
| 16 | Poses | Danse, un pied levé, bras écartés | `16-danse.png` | Fin de leçon (avec son miroir) |
| 17 | Poses | Câlin, se serre dans ses bras, yeux fermés | `17-calin.png` | OK sur l'animal |
| 18 | Poses | Endormi, couché en boule sur le côté | `18-dort.png` | Pause, fin du temps |

Les fichiers découpés vont dans `animaux/<animal>/` (par exemple `animaux/licorne/03-face-yeux-fermes.png`).

**A1 · Licorne** — `PS2-A1-licorne.png`

```
Character sheet of ONLY the unicorn from the attached lineup, 18 full-body drawings of the same character with exactly the same colors, proportions and features as in the lineup. The character: a baby unicorn: lilac-white body (#F7F1FF) with soft lilac shading (#BBA6EE), white belly, a short golden twisted horn, a mane and a tail made of soft pastel puffs (pink #FF8CC6, lilac #B48CFF, sky blue #7CC7FF, mint #7FE3C4), small pointed ears pink inside.

Shared body base (identical for every animal): a chibi baby animal standing upright, very big round head (about 55 % of the total height), small bean-shaped body with a lighter belly, short rounded arms, round feet, big glossy dark indigo eyes with two white highlights, soft pink cheeks, tiny closed smile, no teeth. All animals have exactly the same height, head size, body, arms and feet, so that the same hat, glasses, scarf, top or shoes fits every one of them.

Row 1, views, standing, arms relaxed, gentle closed smile: 1) front view; 2) front view, exactly the same pose, eyes half closed; 3) front view, exactly the same pose, eyes fully closed (in drawings 1, 2 and 3 only the eyelids change); 4) three-quarter view turned toward the left side of the image; 5) side view facing the left side of the image; 6) back view.

Row 2, expressions, front view, standing: 7) joyful, small open smile, no teeth; 8) delighted, eyes as happy crescents, glowing cheeks; 9) curious, head tilted, one ear slightly lifted; 10) "almost": a small soft pout and kind eyebrows, head slightly tilted, still friendly, never sad; 11) surprised, round eyes, small round "o" mouth; 12) winking, smiling.

Row 3, poses: 13) waving hello, one arm raised high, hand open; 14) the same wave, the raised hand tilted outward (second frame of the wave); 15) jumping for joy, both arms up, feet off the ground, eyes as happy crescents; 16) dancing, one foot lifted, arms out to the sides; 17) hugging itself, eyes closed, blissful; 18) asleep, curled up lying on its side, eyes closed, peaceful.

No accessories, no clothes.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.

Layout: a strict regular grid of 6 columns and 3 rows of equal, invisible cells, read left to right then top to bottom. Exactly one element per cell, centered in its cell, all elements at the same scale and seen from the same angle. Generous empty space around each element: nothing touches or overlaps a neighbour or the edge of the image. Background: perfectly flat, uniform light cool grey (#D5DAE1) over the whole image, no gradient, no floor, no cast shadows, no grid lines, no frames, no labels.
```

**A2 · Dinosaure** — `PS2-A2-dinosaure.png`

```
Character sheet of ONLY the dinosaur from the attached lineup, 18 full-body drawings of the same character with exactly the same colors, proportions and features as in the lineup. The character: a baby dinosaur: fresh green body (#4FC27F), pale yellow belly (#FFF0B5), small rounded orange plates (#FF9A3C) on top of the head and along a thick short tail, a wide friendly snout with two small nostrils, a few darker green spots, no ears.

Shared body base (identical for every animal): a chibi baby animal standing upright, very big round head (about 55 % of the total height), small bean-shaped body with a lighter belly, short rounded arms, round feet, big glossy dark indigo eyes with two white highlights, soft pink cheeks, tiny closed smile, no teeth. All animals have exactly the same height, head size, body, arms and feet, so that the same hat, glasses, scarf, top or shoes fits every one of them.

Row 1, views, standing, arms relaxed, gentle closed smile: 1) front view; 2) front view, exactly the same pose, eyes half closed; 3) front view, exactly the same pose, eyes fully closed (in drawings 1, 2 and 3 only the eyelids change); 4) three-quarter view turned toward the left side of the image; 5) side view facing the left side of the image; 6) back view.

Row 2, expressions, front view, standing: 7) joyful, small open smile, no teeth; 8) delighted, eyes as happy crescents, glowing cheeks; 9) curious, head tilted, one ear slightly lifted; 10) "almost": a small soft pout and kind eyebrows, head slightly tilted, still friendly, never sad; 11) surprised, round eyes, small round "o" mouth; 12) winking, smiling.

Row 3, poses: 13) waving hello, one arm raised high, hand open; 14) the same wave, the raised hand tilted outward (second frame of the wave); 15) jumping for joy, both arms up, feet off the ground, eyes as happy crescents; 16) dancing, one foot lifted, arms out to the sides; 17) hugging itself, eyes closed, blissful; 18) asleep, curled up lying on its side, eyes closed, peaceful.

No accessories, no clothes.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.

Layout: a strict regular grid of 6 columns and 3 rows of equal, invisible cells, read left to right then top to bottom. Exactly one element per cell, centered in its cell, all elements at the same scale and seen from the same angle. Generous empty space around each element: nothing touches or overlaps a neighbour or the edge of the image. Background: perfectly flat, uniform light cool grey (#D5DAE1) over the whole image, no gradient, no floor, no cast shadows, no grid lines, no frames, no labels.
```

**A3 · Chat** — `PS2-A3-chat.png`

```
Character sheet of ONLY the kitten from the attached lineup, 18 full-body drawings of the same character with exactly the same colors, proportions and features as in the lineup. The character: a kitten: soft lavender-blue body (#9DB3E8), white-blue belly, pointed ears pink inside, three small darker stripes on the forehead, thin whiskers, a thin S-shaped tail.

Shared body base (identical for every animal): a chibi baby animal standing upright, very big round head (about 55 % of the total height), small bean-shaped body with a lighter belly, short rounded arms, round feet, big glossy dark indigo eyes with two white highlights, soft pink cheeks, tiny closed smile, no teeth. All animals have exactly the same height, head size, body, arms and feet, so that the same hat, glasses, scarf, top or shoes fits every one of them.

Row 1, views, standing, arms relaxed, gentle closed smile: 1) front view; 2) front view, exactly the same pose, eyes half closed; 3) front view, exactly the same pose, eyes fully closed (in drawings 1, 2 and 3 only the eyelids change); 4) three-quarter view turned toward the left side of the image; 5) side view facing the left side of the image; 6) back view.

Row 2, expressions, front view, standing: 7) joyful, small open smile, no teeth; 8) delighted, eyes as happy crescents, glowing cheeks; 9) curious, head tilted, one ear slightly lifted; 10) "almost": a small soft pout and kind eyebrows, head slightly tilted, still friendly, never sad; 11) surprised, round eyes, small round "o" mouth; 12) winking, smiling.

Row 3, poses: 13) waving hello, one arm raised high, hand open; 14) the same wave, the raised hand tilted outward (second frame of the wave); 15) jumping for joy, both arms up, feet off the ground, eyes as happy crescents; 16) dancing, one foot lifted, arms out to the sides; 17) hugging itself, eyes closed, blissful; 18) asleep, curled up lying on its side, eyes closed, peaceful.

No accessories, no clothes.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.

Layout: a strict regular grid of 6 columns and 3 rows of equal, invisible cells, read left to right then top to bottom. Exactly one element per cell, centered in its cell, all elements at the same scale and seen from the same angle. Generous empty space around each element: nothing touches or overlaps a neighbour or the edge of the image. Background: perfectly flat, uniform light cool grey (#D5DAE1) over the whole image, no gradient, no floor, no cast shadows, no grid lines, no frames, no labels.
```

**A4 · Chien** — `PS2-A4-chien.png`

```
Character sheet of ONLY the puppy from the attached lineup, 18 full-body drawings of the same character with exactly the same colors, proportions and features as in the lineup. The character: a puppy: biscuit-beige body (#F6CF9A), cream belly and muzzle, big floppy brown ears (#A9693A), a light brown patch around one eye, a short wagging tail.

Shared body base (identical for every animal): a chibi baby animal standing upright, very big round head (about 55 % of the total height), small bean-shaped body with a lighter belly, short rounded arms, round feet, big glossy dark indigo eyes with two white highlights, soft pink cheeks, tiny closed smile, no teeth. All animals have exactly the same height, head size, body, arms and feet, so that the same hat, glasses, scarf, top or shoes fits every one of them.

Row 1, views, standing, arms relaxed, gentle closed smile: 1) front view; 2) front view, exactly the same pose, eyes half closed; 3) front view, exactly the same pose, eyes fully closed (in drawings 1, 2 and 3 only the eyelids change); 4) three-quarter view turned toward the left side of the image; 5) side view facing the left side of the image; 6) back view.

Row 2, expressions, front view, standing: 7) joyful, small open smile, no teeth; 8) delighted, eyes as happy crescents, glowing cheeks; 9) curious, head tilted, one ear slightly lifted; 10) "almost": a small soft pout and kind eyebrows, head slightly tilted, still friendly, never sad; 11) surprised, round eyes, small round "o" mouth; 12) winking, smiling.

Row 3, poses: 13) waving hello, one arm raised high, hand open; 14) the same wave, the raised hand tilted outward (second frame of the wave); 15) jumping for joy, both arms up, feet off the ground, eyes as happy crescents; 16) dancing, one foot lifted, arms out to the sides; 17) hugging itself, eyes closed, blissful; 18) asleep, curled up lying on its side, eyes closed, peaceful.

No accessories, no clothes.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.

Layout: a strict regular grid of 6 columns and 3 rows of equal, invisible cells, read left to right then top to bottom. Exactly one element per cell, centered in its cell, all elements at the same scale and seen from the same angle. Generous empty space around each element: nothing touches or overlaps a neighbour or the edge of the image. Background: perfectly flat, uniform light cool grey (#D5DAE1) over the whole image, no gradient, no floor, no cast shadows, no grid lines, no frames, no labels.
```

**A5 · Lapin** — `PS2-A5-lapin.png`

```
Character sheet of ONLY the bunny from the attached lineup, 18 full-body drawings of the same character with exactly the same colors, proportions and features as in the lineup. The character: a bunny: very pale pink body (#FBEFF3), white belly, long upright ears pink inside, a small pink nose, a round pompom tail.

Shared body base (identical for every animal): a chibi baby animal standing upright, very big round head (about 55 % of the total height), small bean-shaped body with a lighter belly, short rounded arms, round feet, big glossy dark indigo eyes with two white highlights, soft pink cheeks, tiny closed smile, no teeth. All animals have exactly the same height, head size, body, arms and feet, so that the same hat, glasses, scarf, top or shoes fits every one of them.

Row 1, views, standing, arms relaxed, gentle closed smile: 1) front view; 2) front view, exactly the same pose, eyes half closed; 3) front view, exactly the same pose, eyes fully closed (in drawings 1, 2 and 3 only the eyelids change); 4) three-quarter view turned toward the left side of the image; 5) side view facing the left side of the image; 6) back view.

Row 2, expressions, front view, standing: 7) joyful, small open smile, no teeth; 8) delighted, eyes as happy crescents, glowing cheeks; 9) curious, head tilted, one ear slightly lifted; 10) "almost": a small soft pout and kind eyebrows, head slightly tilted, still friendly, never sad; 11) surprised, round eyes, small round "o" mouth; 12) winking, smiling.

Row 3, poses: 13) waving hello, one arm raised high, hand open; 14) the same wave, the raised hand tilted outward (second frame of the wave); 15) jumping for joy, both arms up, feet off the ground, eyes as happy crescents; 16) dancing, one foot lifted, arms out to the sides; 17) hugging itself, eyes closed, blissful; 18) asleep, curled up lying on its side, eyes closed, peaceful.

No accessories, no clothes.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.

Layout: a strict regular grid of 6 columns and 3 rows of equal, invisible cells, read left to right then top to bottom. Exactly one element per cell, centered in its cell, all elements at the same scale and seen from the same angle. Generous empty space around each element: nothing touches or overlaps a neighbour or the edge of the image. Background: perfectly flat, uniform light cool grey (#D5DAE1) over the whole image, no gradient, no floor, no cast shadows, no grid lines, no frames, no labels.
```

**A6 · Panda** — `PS2-A6-panda.png`

```
Character sheet of ONLY the panda cub from the attached lineup, 18 full-body drawings of the same character with exactly the same colors, proportions and features as in the lineup. The character: a panda cub: white body (#FAFAF6), dark navy-black (#2E3352) round ears, eye patches, arms and feet, white belly, a small round tail.

Shared body base (identical for every animal): a chibi baby animal standing upright, very big round head (about 55 % of the total height), small bean-shaped body with a lighter belly, short rounded arms, round feet, big glossy dark indigo eyes with two white highlights, soft pink cheeks, tiny closed smile, no teeth. All animals have exactly the same height, head size, body, arms and feet, so that the same hat, glasses, scarf, top or shoes fits every one of them.

Row 1, views, standing, arms relaxed, gentle closed smile: 1) front view; 2) front view, exactly the same pose, eyes half closed; 3) front view, exactly the same pose, eyes fully closed (in drawings 1, 2 and 3 only the eyelids change); 4) three-quarter view turned toward the left side of the image; 5) side view facing the left side of the image; 6) back view.

Row 2, expressions, front view, standing: 7) joyful, small open smile, no teeth; 8) delighted, eyes as happy crescents, glowing cheeks; 9) curious, head tilted, one ear slightly lifted; 10) "almost": a small soft pout and kind eyebrows, head slightly tilted, still friendly, never sad; 11) surprised, round eyes, small round "o" mouth; 12) winking, smiling.

Row 3, poses: 13) waving hello, one arm raised high, hand open; 14) the same wave, the raised hand tilted outward (second frame of the wave); 15) jumping for joy, both arms up, feet off the ground, eyes as happy crescents; 16) dancing, one foot lifted, arms out to the sides; 17) hugging itself, eyes closed, blissful; 18) asleep, curled up lying on its side, eyes closed, peaceful.

No accessories, no clothes.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.

Layout: a strict regular grid of 6 columns and 3 rows of equal, invisible cells, read left to right then top to bottom. Exactly one element per cell, centered in its cell, all elements at the same scale and seen from the same angle. Generous empty space around each element: nothing touches or overlaps a neighbour or the edge of the image. Background: perfectly flat, uniform light cool grey (#D5DAE1) over the whole image, no gradient, no floor, no cast shadows, no grid lines, no frames, no labels.
```

**A7 · Renard** — `PS2-A7-renard.png`

```
Character sheet of ONLY the fox cub from the attached lineup, 18 full-body drawings of the same character with exactly the same colors, proportions and features as in the lineup. The character: a fox cub: bright orange body (#FF8D3F), cream belly and white cheek mask, pointed ears with dark brown tips, a big fluffy tail with a white tip.

Shared body base (identical for every animal): a chibi baby animal standing upright, very big round head (about 55 % of the total height), small bean-shaped body with a lighter belly, short rounded arms, round feet, big glossy dark indigo eyes with two white highlights, soft pink cheeks, tiny closed smile, no teeth. All animals have exactly the same height, head size, body, arms and feet, so that the same hat, glasses, scarf, top or shoes fits every one of them.

Row 1, views, standing, arms relaxed, gentle closed smile: 1) front view; 2) front view, exactly the same pose, eyes half closed; 3) front view, exactly the same pose, eyes fully closed (in drawings 1, 2 and 3 only the eyelids change); 4) three-quarter view turned toward the left side of the image; 5) side view facing the left side of the image; 6) back view.

Row 2, expressions, front view, standing: 7) joyful, small open smile, no teeth; 8) delighted, eyes as happy crescents, glowing cheeks; 9) curious, head tilted, one ear slightly lifted; 10) "almost": a small soft pout and kind eyebrows, head slightly tilted, still friendly, never sad; 11) surprised, round eyes, small round "o" mouth; 12) winking, smiling.

Row 3, poses: 13) waving hello, one arm raised high, hand open; 14) the same wave, the raised hand tilted outward (second frame of the wave); 15) jumping for joy, both arms up, feet off the ground, eyes as happy crescents; 16) dancing, one foot lifted, arms out to the sides; 17) hugging itself, eyes closed, blissful; 18) asleep, curled up lying on its side, eyes closed, peaceful.

No accessories, no clothes.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.

Layout: a strict regular grid of 6 columns and 3 rows of equal, invisible cells, read left to right then top to bottom. Exactly one element per cell, centered in its cell, all elements at the same scale and seen from the same angle. Generous empty space around each element: nothing touches or overlaps a neighbour or the edge of the image. Background: perfectly flat, uniform light cool grey (#D5DAE1) over the whole image, no gradient, no floor, no cast shadows, no grid lines, no frames, no labels.
```

**A8 · Ours** — `PS2-A8-ours.png`

```
Character sheet of ONLY the bear cub from the attached lineup, 18 full-body drawings of the same character with exactly the same colors, proportions and features as in the lineup. The character: a bear cub: warm brown body (#B9835A), beige muzzle and belly (#F3D9B8), small round ears, a small round tail.

Shared body base (identical for every animal): a chibi baby animal standing upright, very big round head (about 55 % of the total height), small bean-shaped body with a lighter belly, short rounded arms, round feet, big glossy dark indigo eyes with two white highlights, soft pink cheeks, tiny closed smile, no teeth. All animals have exactly the same height, head size, body, arms and feet, so that the same hat, glasses, scarf, top or shoes fits every one of them.

Row 1, views, standing, arms relaxed, gentle closed smile: 1) front view; 2) front view, exactly the same pose, eyes half closed; 3) front view, exactly the same pose, eyes fully closed (in drawings 1, 2 and 3 only the eyelids change); 4) three-quarter view turned toward the left side of the image; 5) side view facing the left side of the image; 6) back view.

Row 2, expressions, front view, standing: 7) joyful, small open smile, no teeth; 8) delighted, eyes as happy crescents, glowing cheeks; 9) curious, head tilted, one ear slightly lifted; 10) "almost": a small soft pout and kind eyebrows, head slightly tilted, still friendly, never sad; 11) surprised, round eyes, small round "o" mouth; 12) winking, smiling.

Row 3, poses: 13) waving hello, one arm raised high, hand open; 14) the same wave, the raised hand tilted outward (second frame of the wave); 15) jumping for joy, both arms up, feet off the ground, eyes as happy crescents; 16) dancing, one foot lifted, arms out to the sides; 17) hugging itself, eyes closed, blissful; 18) asleep, curled up lying on its side, eyes closed, peaceful.

No accessories, no clothes.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.

Layout: a strict regular grid of 6 columns and 3 rows of equal, invisible cells, read left to right then top to bottom. Exactly one element per cell, centered in its cell, all elements at the same scale and seen from the same angle. Generous empty space around each element: nothing touches or overlaps a neighbour or the edge of the image. Background: perfectly flat, uniform light cool grey (#D5DAE1) over the whole image, no gradient, no floor, no cast shadows, no grid lines, no frames, no labels.
```

---

### 3.2 Tilou

**TI-1 · La fiche de Tilou** — `PS2-TI1-tilou-fiche.png` · **Paysage 16:9 · 2K** · ingrédients : `ING-tilou.png` + `ING-tilou-signe.png` · 3 essais

Les vues, les expressions, et surtout **les étapes de l'antenne** : Claude s'en sert pour animer « ? » → « ! » (§ 4.2). La case 18 (Tilou **sans antenne**) permet de poser une antenne dessinée en vecteur par-dessus.

```
Character sheet of ONLY Tilou, the mascot of the attached reference, 18 full-body drawings of the same character. Tilou, exactly as in the attached reference sheet: a small apricot-orange (#FF9A3C) peanut-shaped creature whose big rounded head merges into a soft body, a cream egg-shaped belly, very big glossy dark indigo eyes with two white highlights, soft pink cheeks, a tiny closed smile, short rounded arms with soft mitten tips, two small round feet, a thin dark indigo outline and a soft painted look, and on top of the head a single antenna. The antenna is normally curled like a question mark and ends in a small glowing yellow pearl (#FFD23F); when Tilou is delighted it stands perfectly straight up like an exclamation mark, the pearl at its top glowing brighter. Original character, no resemblance to any existing character.

Row 1, views, standing, arms relaxed, antenna as a question mark with a glowing pearl, gentle smile: 1) front view; 2) front view, exactly the same pose, eyes half closed; 3) front view, exactly the same pose, eyes fully closed (in drawings 1, 2 and 3 only the eyelids change); 4) three-quarter view turned toward the left side of the image; 5) side view facing the left side of the image; 6) back view.

Row 2, expressions, front view: 7) curious, head tilted, antenna as a question mark; 8) delighted, eyes as happy crescents, glowing cheeks, both arms up, antenna straight up like an exclamation mark with a bright glowing pearl; 9) thinking, one hand on its chin, eyes looking up, question-mark antenna; 10) "almost": a small soft pout, kind eyebrows, head slightly tilted, never sad, question-mark antenna; 11) talking, mouth open in a small soft round shape, no teeth, question-mark antenna; 12) surprised, round eyes, small "o" mouth, antenna straight up.

Row 3, the antenna animation, all in exactly the same front pose as drawing 1, only the antenna changes: 13) antenna curled as a question mark, pearl unlit and pale; 14) antenna curled as a question mark, pearl glowing; 15) antenna half uncurled into a soft hook; 16) antenna almost straight, leaning slightly; 17) antenna perfectly straight up like an exclamation mark, the pearl at its top glowing brightly with three tiny sparkles; 18) Tilou with no antenna at all, smooth top of the head.

Layout: a strict regular grid of 6 columns and 3 rows of equal, invisible cells, read left to right then top to bottom. Exactly one element per cell, centered in its cell, all elements at the same scale and seen from the same angle. Generous empty space around each element: nothing touches or overlaps a neighbour or the edge of the image. Background: perfectly flat, uniform light cool grey (#D5DAE1) over the whole image, no gradient, no floor, no cast shadows, no grid lines, no frames, no labels. Keep the thin dark indigo outline and the soft painted look of the reference for Tilou. No text, no letters, no logo, no watermark. Original character, no resemblance to any existing character.
```

| Case | Dessin | Fichier découpé | Sert à |
|---|---|---|---|
| 1 | Face | `tilou/01-face.png` | Image de base |
| 2 | Face, yeux mi-clos | `tilou/02-face-mi-clos.png` | Clignement |
| 3 | Face, yeux fermés | `tilou/03-face-yeux-fermes.png` | Clignement |
| 4 | Trois-quarts | `tilou/04-trois-quarts.png` | Bulles, réseaux |
| 5 | Profil | `tilou/05-profil.png` | Référence 3D, Rive |
| 6 | Dos | `tilou/06-dos.png` | Référence 3D, Rive |
| 7 | Curieux « ? » | `tilou/07-curieux.png` | Consigne d'exercice |
| 8 | Ravi « ! » | `tilou/08-ravi.png` | Bonne réponse |
| 9 | Réfléchit | `tilou/09-reflechit.png` | Leçon, miniatures |
| 10 | Presque | `tilou/10-presque.png` | Mauvaise réponse |
| 11 | Parle | `tilou/11-parle.png` | Bouche qui bouge avec la voix (avec la case 1) |
| 12 | Surpris | `tilou/12-surpris.png` | Coffre, réseaux |
| 13 | Antenne « ? », perle éteinte | `tilou/13-antenne-1.png` | Animation de l'antenne, étape 1 |
| 14 | Antenne « ? », perle allumée | `tilou/14-antenne-2.png` | Étape 2 |
| 15 | Antenne à demi déroulée | `tilou/15-antenne-3.png` | Étape 3 |
| 16 | Antenne presque droite | `tilou/16-antenne-4.png` | Étape 4 |
| 17 | Antenne « ! », perle brillante | `tilou/17-antenne-5.png` | Étape 5 |
| 18 | Sans antenne | `tilou/18-sans-antenne.png` | Calque du corps sous l'antenne vectorielle |

**TI-2 · Les poses de Tilou** — `PS2-TI2-tilou-poses.png` · **Paysage 16:9 · 2K** · ingrédients : `PS2-TI1-tilou-fiche.png` (validée) + `ING-tilou.png` · 2 essais

Toutes les poses utiles à l'app (premier lancement, profils, pause), aux miniatures, aux couvertures et aux épingles. La case 18 (un panneau vierge) permet à Claude d'y écrire n'importe quel titre.

```
Pose sheet of ONLY Tilou, the mascot of the attached reference, 18 full-body poses of the same character. Tilou, exactly as in the attached reference sheet: a small apricot-orange (#FF9A3C) peanut-shaped creature whose big rounded head merges into a soft body, a cream egg-shaped belly, very big glossy dark indigo eyes with two white highlights, soft pink cheeks, a tiny closed smile, short rounded arms with soft mitten tips, two small round feet, a thin dark indigo outline and a soft painted look, and on top of the head a single antenna. The antenna is normally curled like a question mark and ends in a small glowing yellow pearl (#FFD23F); when Tilou is delighted it stands perfectly straight up like an exclamation mark, the pearl at its top glowing brighter. Original character, no resemblance to any existing character.

In this order: 1) waving hello with one arm raised, question-mark antenna; 2) jumping for joy, both arms up, feet off the ground, antenna straight up like an exclamation mark with a bright pearl; 3) pointing toward the right side of the image with one arm stretched, looking that way, question-mark antenna; 4) listening, one hand cupped behind where an ear would be, question-mark antenna; 5) clapping proudly, eyes as happy crescents, antenna straight up; 6) sitting on the ground, legs forward, happy; 7) both arms stretched out to the left and the right, as if showing two directions; 8) pressing a big round yellow button in front of it with both hands; 9) holding a big magnifying glass, looking through it; 10) reading an open book, calm; 11) writing carefully with a pencil on a small notebook, focused; 12) holding a small glowing paper lantern by its string; 13) yawning and stretching, antenna drooping, pearl dim; 14) asleep, sitting, eyes closed, antenna curled into a small spiral, pearl almost off; 15) peeking up from the bottom of its cell: only the head, the antenna and two hands are visible, hands resting on an invisible ledge, the body hidden below a clean straight horizontal cut; 16) dancing, one foot lifted, arms swinging; 17) in a starry navy night cap and a light blue pyjama with white clouds, holding a small pillow, sleepy smile; 18) holding up a big blank cream sign board with both hands, nothing written on it, happy.

Layout: a strict regular grid of 6 columns and 3 rows of equal, invisible cells, read left to right then top to bottom. Exactly one element per cell, centered in its cell, all elements at the same scale and seen from the same angle. Generous empty space around each element: nothing touches or overlaps a neighbour or the edge of the image. Background: perfectly flat, uniform light cool grey (#D5DAE1) over the whole image, no gradient, no floor, no cast shadows, no grid lines, no frames, no labels. Keep the thin dark indigo outline and the soft painted look of the reference for Tilou. No text, no letters, no logo, no watermark. Original character, no resemblance to any existing character.
```

| Case | Pose | Fichier découpé | Sert à |
|---|---|---|---|
| 1 | Coucou « ? » | `tilou/p01-coucou.png` | Bonjour, profils |
| 2 | Saut de joie « ! » | `tilou/p02-saut.png` | Chargement (si pas de vidéo), miniatures M4 |
| 3 | Montre à droite | `tilou/p03-montre.png` | Miniatures M5, épingles (miroir pour la gauche) |
| 4 | Écoute | `tilou/p04-ecoute.png` | Miniatures anglais et sons |
| 5 | Applaudit « ! » | `tilou/p05-applaudit.png` | Fin de leçon, réseaux |
| 6 | Assis | `tilou/p06-assis.png` | Bulles, couvertures |
| 7 | Bras écartés | `tilou/p07-gauche-droite.png` | Premier lancement : Tilou mime ◀ ▶ |
| 8 | Appuie sur un bouton | `tilou/p08-ok.png` | Premier lancement : Tilou mime OK |
| 9 | Loupe | `tilou/p09-loupe.png` | « La minute Pourquoi », réseaux |
| 10 | Lit | `tilou/p10-lit.png` | Leçon, histoires |
| 11 | Écrit | `tilou/p11-ecrit.png` | Traces, devoirs, miniature M7 |
| 12 | Lanterne | `tilou/p12-lanterne.png` | Quête du jour, veillée |
| 13 | Bâille | `tilou/p13-baille.png` | Fin du temps (animation, § 4.2) |
| 14 | Dort | `tilou/p14-dort.png` | Pause, fin du temps |
| 15 | Dépasse du bas | `tilou/p15-depasse.png` | Écran des profils |
| 16 | Danse | `tilou/p16-danse.png` | Réseaux, fêtes |
| 17 | En pyjama | `tilou/p17-pyjama.png` | Bonne nuit, routine du soir (épingle P3) |
| 18 | Panneau vierge | `tilou/p18-panneau.png` | Couvertures, épingles, annonces : Claude écrit le titre |

---

### 3.3 Les accessoires

**Le principe** : une planche par **emplacement** (doc 15 : tête, visage, cou, haut, pieds), chaque objet **seul, de face, à la taille où il sera porté** par les animaux de A0. Les 12 objets des maquettes sont en tête de liste. Les objets de saison de l'étude 03 sont rangés dans leur emplacement. Les **objets tenus** (loupe, ballon, parapluie…) demandent un sixième point d'accroche, « main », à ajouter dans `pet3d.js` et `companions.js` ; en attendant, ils peuvent être posés à côté de l'animal.

Les fichiers découpés vont dans `accessoires/<emplacement>/<objet>.png`.

**ACC-1 · La tête (18)** — `PS2-ACC1-tete.png` · **Paysage 16:9 · 2K** · ingrédients : `PS2-A0-famille.png` + `ING-accessoires.png` · 2 essais

```
Item sheet of 18 hats and headpieces for the baby animals of the attached reference, each item alone, front view at eye level, drawn at the exact size it would have when worn on their big round head, with no animal: 1) red baseball cap with a small white round badge, visor forward; 2) blue knitted beanie with a yellow band and a cream pompom; 3) golden crown with three small round gems, pink, blue and green; 4) purple cone party hat with yellow stripes and a pink pompom; 5) a small cluster of a white daisy and a pink flower, to wear on the side of the head; 6) light blue beach bucket hat with white dots; 7) red painter's beret; 8) straw hat with a red ribbon; 9) beige explorer helmet; 10) crown of green leaves; 11) round white astronaut helmet with an open clear visor; 12) long navy night cap with small yellow stars and a pompom; 13) white chef's hat; 14) red mushroom-cap hat with white dots, softly glowing; 15) ring of tiny glowing paper lanterns worn as a crown; 16) dark indigo square scholar's cap with a golden tassel; 17) green and red pointed winter elf hat with a small bell; 18) headband with two pastel fabric bunny ears and small spring flowers.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.

Layout: a strict regular grid of 6 columns and 3 rows of equal, invisible cells, read left to right then top to bottom. Exactly one element per cell, centered in its cell, all elements at the same scale and seen from the same angle. Generous empty space around each element: nothing touches or overlaps a neighbour or the edge of the image. Background: perfectly flat, uniform light cool grey (#D5DAE1) over the whole image, no gradient, no floor, no cast shadows, no grid lines, no frames, no labels.
```

| Case | Objet | Fichier |
|---|---|---|
| 1 | Casquette (maquette) | `tete/casquette.png` |
| 2 | Bonnet (maquette) | `tete/bonnet.png` |
| 3 | Couronne (maquette) | `tete/couronne.png` |
| 4 | Chapeau de fête (maquette) | `tete/chapeau-fete.png` |
| 5 | Fleurs (maquette) | `tete/fleurs.png` |
| 6 | Bob de plage | `tete/bob.png` |
| 7 | Béret de peintre | `tete/beret.png` |
| 8 | Chapeau de paille | `tete/chapeau-paille.png` |
| 9 | Casque d'explorateur | `tete/casque-explorateur.png` |
| 10 | Couronne de feuilles | `tete/couronne-feuilles.png` |
| 11 | Casque de cosmonaute | `tete/casque-cosmonaute.png` |
| 12 | Bonnet de nuit étoilé | `tete/bonnet-nuit.png` |
| 13 | Toque de cuisinier | `tete/toque.png` |
| 14 | Chapeau-champignon lumineux | `tete/chapeau-champignon.png` |
| 15 | Couronne de lanternes | `tete/couronne-lanternes.png` |
| 16 | Toque du Savant (Merveille) | `tete/toque-savant.png` |
| 17 | Bonnet de lutin d'hiver (saison) | `tete/bonnet-lutin.png` |
| 18 | Oreilles de printemps (saison) | `tete/oreilles-printemps.png` |

**ACC-2 · Le visage et le cou (18)** — `PS2-ACC2-visage-cou.png` · **Paysage 16:9 · 2K** · ingrédients : `PS2-A0-famille.png` + `ING-accessoires.png` · 2 essais

```
Item sheet of 18 face and neck accessories for the baby animals of the attached reference, each item alone, front view at eye level, drawn at the exact size it would have when worn by them, with no animal. Row 1, for the face: 1) round dark indigo glasses; 2) round sunglasses with a yellow frame and dark lenses; 3) pink star-shaped party glasses; 4) turquoise carnival eye mask with small feathers; 5) simple red superhero eye mask; 6) one big pink flower to tuck behind the ear. Rows 2 and 3, for the neck: 7) pink knitted scarf with a yellow stripe; 8) long red and white striped winter scarf with fringes; 9) turquoise bow tie; 10) red bow tie with white dots; 11) orange explorer neckerchief; 12) garland of pastel flowers worn as a necklace; 13) round golden medal on a blue ribbon; 14) round badge showing a small open book; 15) necklace of tiny glowing paper lanterns; 16) golden star pendant on a cord; 17) ruffled pastel collar; 18) blue bandana with white dots.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.

Layout: a strict regular grid of 6 columns and 3 rows of equal, invisible cells, read left to right then top to bottom. Exactly one element per cell, centered in its cell, all elements at the same scale and seen from the same angle. Generous empty space around each element: nothing touches or overlaps a neighbour or the edge of the image. Background: perfectly flat, uniform light cool grey (#D5DAE1) over the whole image, no gradient, no floor, no cast shadows, no grid lines, no frames, no labels.
```

| Case | Objet | Fichier |
|---|---|---|
| 1 | Lunettes (maquette) | `visage/lunettes.png` |
| 2 | Lunettes de soleil | `visage/lunettes-soleil.png` |
| 3 | Lunettes étoiles | `visage/lunettes-etoiles.png` |
| 4 | Masque de carnaval (saison) | `visage/masque-carnaval.png` |
| 5 | Loup de super-lecteur | `visage/loup.png` |
| 6 | Fleur à l'oreille | `visage/fleur-oreille.png` |
| 7 | Écharpe (maquette) | `cou/echarpe.png` |
| 8 | Écharpe d'hiver rayée | `cou/echarpe-hiver.png` |
| 9 | Nœud (maquette) | `cou/noeud.png` |
| 10 | Nœud à pois | `cou/noeud-pois.png` |
| 11 | Foulard d'explorateur | `cou/foulard.png` |
| 12 | Collier de fleurs | `cou/collier-fleurs.png` |
| 13 | Médaille de persévérance (Merveille) | `cou/medaille.png` |
| 14 | Badge « Je lis ! » (le mot est ajouté par Claude si besoin) | `cou/badge-livre.png` |
| 15 | Collier de lanternes | `cou/collier-lanternes.png` |
| 16 | Pendentif étoile | `cou/pendentif-etoile.png` |
| 17 | Collerette | `cou/collerette.png` |
| 18 | Bandana | `cou/bandana.png` |

**ACC-3 · Le haut (18)** — `PS2-ACC3-haut.png` · **Paysage 16:9 · 2K** · ingrédients : `PS2-A0-famille.png` + `ING-accessoires.png` · 2 essais

```
Item sheet of 18 tops and outfits for the baby animals of the attached reference, each item alone, front view, laid flat as if worn, drawn at the exact size it would have on their small bean-shaped body, with no animal inside: 1) red and cream striped sailor top; 2) yellow raincoat with two buttons; 3) blue denim overalls; 4) green turtleneck sweater; 5) light blue one-piece pyjama with white clouds; 6) white scientist lab coat with a small pocket; 7) khaki explorer shirt with pockets; 8) red cape with a small yellow open-book symbol; 9) pink tutu skirt; 10) blue sports jersey with a yellow stripe, no number; 11) white space suit with orange details; 12) cardboard knight armour; 13) cosy green dragon costume with soft round spikes and a hood; 14) friendly white ghost sheet with colorful polka dots and two eye holes; 15) red knitted winter sweater with a white snowflake pattern; 16) yellow dress with small flowers; 17) painter's apron with colorful paint spots; 18) puffy orange down jacket.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.

Layout: a strict regular grid of 6 columns and 3 rows of equal, invisible cells, read left to right then top to bottom. Exactly one element per cell, centered in its cell, all elements at the same scale and seen from the same angle. Generous empty space around each element: nothing touches or overlaps a neighbour or the edge of the image. Background: perfectly flat, uniform light cool grey (#D5DAE1) over the whole image, no gradient, no floor, no cast shadows, no grid lines, no frames, no labels.
```

| Case | Objet | Fichier |
|---|---|---|
| 1 | Marinière (maquette) | `haut/mariniere.png` |
| 2 | Ciré (maquette) | `haut/cire.png` |
| 3 | Salopette | `haut/salopette.png` |
| 4 | Pull à col roulé | `haut/col-roule.png` |
| 5 | Pyjama nuage | `haut/pyjama-nuage.png` |
| 6 | Blouse de scientifique | `haut/blouse.png` |
| 7 | Tenue d'explorateur | `haut/explorateur.png` |
| 8 | Cape de super-lecteur | `haut/cape.png` |
| 9 | Tutu | `haut/tutu.png` |
| 10 | Maillot de sport | `haut/maillot.png` |
| 11 | Combinaison spatiale | `haut/combinaison-spatiale.png` |
| 12 | Armure en carton | `haut/armure.png` |
| 13 | Costume de dragon-doudou | `haut/dragon.png` |
| 14 | Fantôme rigolo (saison) | `haut/fantome.png` |
| 15 | Pull tricoté d'hiver (saison) | `haut/pull-hiver.png` |
| 16 | Robe à fleurs | `haut/robe-fleurs.png` |
| 17 | Tablier de peintre | `haut/tablier.png` |
| 18 | Doudoune | `haut/doudoune.png` |

**ACC-4 · Les pieds et les objets tenus (18)** — `PS2-ACC4-pieds-objets.png` · **Paysage 16:9 · 2K** · ingrédients : `PS2-A0-famille.png` + `ING-accessoires.png` · 2 essais

```
Item sheet of 18 items for the baby animals of the attached reference, each item alone, front view, drawn at the exact size it would have when worn or held by them, with no animal. Row 1, pairs of shoes for their round feet, each pair side by side: 1) blue sneakers with white soles; 2) yellow rain boots; 3) fluffy pink slippers; 4) brown sandals; 5) furry white snow boots; 6) red roller skates. Rows 2 and 3, things they carry or hold: 7) small orange backpack; 8) red school satchel; 9) big magnifying glass; 10) brass spyglass; 11) red balloon on a string; 12) open blue umbrella with white dots; 13) small ukulele; 14) glowing pastel butterfly wings; 15) small paper lantern on a stick, glowing; 16) basket of painted eggs; 17) magic wand with a yellow star; 18) small open book.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.

Layout: a strict regular grid of 6 columns and 3 rows of equal, invisible cells, read left to right then top to bottom. Exactly one element per cell, centered in its cell, all elements at the same scale and seen from the same angle. Generous empty space around each element: nothing touches or overlaps a neighbour or the edge of the image. Background: perfectly flat, uniform light cool grey (#D5DAE1) over the whole image, no gradient, no floor, no cast shadows, no grid lines, no frames, no labels.
```

| Case | Objet | Fichier |
|---|---|---|
| 1 | Baskets (maquette) | `pieds/baskets.png` |
| 2 | Bottes (maquette) | `pieds/bottes.png` |
| 3 | Chaussons | `pieds/chaussons.png` |
| 4 | Sandales | `pieds/sandales.png` |
| 5 | Bottes de neige | `pieds/bottes-neige.png` |
| 6 | Patins à roulettes | `pieds/patins.png` |
| 7 | Sac à dos | `main/sac-a-dos.png` |
| 8 | Cartable (saison : rentrée) | `main/cartable.png` |
| 9 | Loupe géante | `main/loupe.png` |
| 10 | Longue-vue | `main/longue-vue.png` |
| 11 | Ballon | `main/ballon.png` |
| 12 | Parapluie | `main/parapluie.png` |
| 13 | Ukulélé | `main/ukulele.png` |
| 14 | Ailes de papillon lumineuses | `main/ailes.png` |
| 15 | Lanterne de poche | `main/lanterne.png` |
| 16 | Panier d'œufs peints (saison) | `main/panier-oeufs.png` |
| 17 | Baguette magique | `main/baguette.png` |
| 18 | Livre ouvert | `main/livre.png` |

*Les objets de saison qui ne se portent pas (bonhomme de neige, citrouille-lanterne, arche de fleurs, lampions) sont dans ACC-5 (option). La citrouille et le sapin de Noël existent aussi dans l'imagier (IMG-5).*

**TEST · L'habillage des 8 animaux** — `PS2-TEST-habillage.png` · **Paysage 16:9 · 1K** · ingrédients : `PS2-A0-famille.png` + `ING-test.png` (mosaïque des 27 objets, préparée par Claude) · 1 essai

Chaque animal porte une tenue complète **différente** : les 5 emplacements sont testés sur les 8 formes de tête (corne, oreilles longues, oreilles tombantes, oreilles rondes, plaques). Cette planche ne sert qu'à valider les points d'accroche : en parallèle, Claude habille les animaux par montage (découpes de A0 et des ACC) et compare.

```
The 8 baby animals of the attached reference, one per cell, front view, same neutral standing pose, each wearing a complete outfit made only of the items shown in the attached item sheet, placed exactly as they would be worn: 1) unicorn: red baseball cap, red and cream striped sailor top, blue sneakers; the golden horn passes through the cap; 2) dinosaur: blue knitted beanie with a pompom, pink knitted scarf, furry white snow boots; 3) kitten: golden crown, turquoise bow tie, red cape; the ears stay visible on each side of the crown; 4) puppy: round dark indigo glasses, yellow raincoat, yellow rain boots, holding an open blue umbrella; 5) bunny: purple party hat between its long ears, garland of pastel flowers, pink tutu, holding a red balloon; 6) panda cub: long navy starry night cap, light blue cloud pyjama, fluffy pink slippers, holding a small glowing paper lantern; 7) fox cub: beige explorer helmet, orange neckerchief, khaki explorer shirt, small orange backpack, holding a big magnifying glass; 8) bear cub: round white astronaut helmet with an open visor, white space suit, red roller skates. Every animal keeps its own ears, horn, plates and tail visible. Same bodies and colors as the reference.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.

Layout: a strict regular grid of 4 columns and 2 rows of equal, invisible cells, read left to right then top to bottom. Exactly one element per cell, centered in its cell, all elements at the same scale and seen from the same angle. Generous empty space around each element: nothing touches or overlaps a neighbour or the edge of the image. Background: perfectly flat, uniform light cool grey (#D5DAE1) over the whole image, no gradient, no floor, no cast shadows, no grid lines, no frames, no labels.
```

**ACC-5 (option) · Le mobilier de la chambre et du jardin (24)** — `PS2-ACC5-mobilier.png` · **Paysage 16:9 · 2K** · ingrédients : `PS2-CH1-chambre-jour.png` + `ING-accessoires.png` · 2 essais

À ne lancer que si la chambre décorable (étude 03, § 4.4) entre dans le planning.

```
Furniture and garden item sheet for the small bedroom of the attached reference, 24 items, each alone, front view, all at the same scale (sized for a small toy animal about as tall as a chair seat), no characters: 1) leaf-shaped bed with a pillow; 2) round cushion; 3) round striped rug; 4) potted plant; 5) mushroom lamp; 6) small wall shelf; 7) little stool; 8) treasure box; 9) small desk; 10) bookcase with colorful books; 11) small chalkboard on legs, blank; 12) globe on a stand; 13) hammock; 14) string of small round lights; 15) cloud-shaped armchair; 16) telescope on a tripod; 17) small upright piano; 18) round aquarium with glowing fish; 19) birdhouse on a pole; 20) wooden swing; 21) string of paper lanterns; 22) arch of spring flowers; 23) small friendly snowman; 24) smiling pumpkin lantern.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.

Layout: a strict regular grid of 6 columns and 4 rows of equal, invisible cells, read left to right then top to bottom. Exactly one element per cell, centered in its cell, all elements at the same scale and seen from the same angle. Generous empty space around each element: nothing touches or overlaps a neighbour or the edge of the image. Background: perfectly flat, uniform light cool grey (#D5DAE1) over the whole image, no gradient, no floor, no cast shadows, no grid lines, no frames, no labels.
```

| Cases | Objets | Dossier |
|---|---|---|
| 1 à 18 | lit-feuille, coussin, tapis rond, plante, lampe-champignon, étagère, tabouret, boîte à trésors, bureau, bibliothèque, tableau noir, globe, hamac, guirlande lumineuse, fauteuil-nuage, télescope, piano, aquarium | `mobilier/` |
| 19 à 24 | nichoir, balançoire, lampions, arche de fleurs, bonhomme de neige, citrouille-lanterne | `jardin/` |

---

### 3.4 Les décors

**CH-1 · La chambre de l'animal, le jour** — `PS2-CH1-chambre-jour.png` · **Paysage 16:9 · 2K** · ingrédient : `ING-chambre.png` · 2 essais

L'écran « Mon animal » (étude 15, § 7.7) : l'animal se tient sur le tapis à gauche, le dressing occupe la moitié droite. **Les vitres de la fenêtre sont d'un bleu uni** : Claude y place la vue du thème de l'enfant (collines, jungle, espace…).

```
Wide illustration of a cosy child-sized bedroom for a small toy animal, seen straight from the front like a small stage, in the style and layout of the attached reference: warm peach walls with a soft light from the window, a tall arched window on the left whose glass panes are a single flat plain light sky blue (#BFE3FF) with nothing visible through them, a light wooden floor with visible planks, a big round rug with pink and yellow rings on the floor in the left half (empty, a character will stand on it), a small shelf and a plant at the far left edge. The right half of the image is a calm, plain peach wall above the floor, with nothing on it (a menu will be placed there). Light comes from the top left. Large simple shapes, readable from far away. No characters, no furniture in the right half.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.
```

**CH-2 · La même chambre, la nuit** — `PS2-CH2-chambre-nuit.png` · **Paysage 16:9 · 2K** · ingrédient : `PS2-CH1-chambre-jour.png` (validée) · 1 essai

L'écran de pause et de fin du temps (§ 7.9) : Claude y pose l'animal endormi (case 18 de sa fiche) avec le bonnet de nuit (ACC-1, case 12), et Tilou qui bâille.

```
Exactly the same bedroom as the attached reference, same camera, same layout, now at night: the window panes are a single flat deep indigo (#1B2468) with nothing visible through them, the room is lit by the warm glow of a small paper lantern hanging near the window, soft warm light pools on the rug, the walls are darker and bluish, and a small leaf-shaped bed with a pillow and a folded blanket stands on the rug (empty, a sleeping character will be placed on it). The right half of the image stays a calm, plain wall with nothing on it. Calm, soft, cosy. No characters.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.
```

**TH-1 à TH-4 · Les fonds des thèmes à univers** — `PS2-TH1-jungle.png`, `PS2-TH2-princesse.png`, `PS2-TH3-espace.png`, `PS2-TH4-ocean.png` · **Paysage 16:9 · 2K** · ingrédient : `ING-paysage.png` · 2 essais chacun

Le fond du parcours de chaque thème (étude 15, § 5). Le tiers du milieu reste calme : la route et les dômes des leçons sont dessinés par-dessus. Claude en tire aussi la **vignette de choix** du thème (recadrage) et la **vue par la fenêtre** de la chambre. Les objets qui dérivent lentement sont sur TH-5.

**TH-1 · Jungle** — `PS2-TH1-jungle.png`

```
Wide background for a children's TV learning app, same layout as the attached reference landscape (a soft sky in the top third, gentle rolling layers below, a calm open middle band), but as a friendly jungle: big round leaves and soft lianas in the far layer at the top corners, soft green hills in the middle, ferns and a few round flowers along the bottom edge, warm daylight from the top left. Keep the middle third of the image calm and low in detail, because a winding path with round lesson buttons will be drawn over it. Soft colors that never overpower a white card placed on top. No characters, no animals.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.
```

**TH-2 · Princesse** — `PS2-TH2-princesse.png`

```
Wide background for a children's TV learning app, same layout as the attached reference landscape (a soft sky in the top third, gentle rolling layers below, a calm open middle band), but as a pastel fairy-tale land: a small lilac castle with round towers far away on a hill, soft lilac and pink hills in the middle, flowers and a few small pennant flags along the bottom edge, warm daylight from the top left. Keep the middle third of the image calm and low in detail, because a winding path with round lesson buttons will be drawn over it. Soft colors that never overpower a white card placed on top. No characters.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.
```

**TH-3 · Espace** — `PS2-TH3-espace.png`

```
Wide background for a children's TV learning app, same layout as the attached reference landscape (a sky in the top third, gentle rolling layers below, a calm open middle band), but as a gentle outer space at night: a deep indigo to violet sky with soft small stars and two small round planets far away, smooth violet moon hills in the middle, a few soft craters along the bottom edge, a soft glow on the horizon. Keep the middle third of the image calm and low in detail, because a winding path with round lesson buttons will be drawn over it. Soft colors, never pure black. No characters.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.
```

**TH-4 · Océan** — `PS2-TH4-ocean.png`

```
Wide background for a children's TV learning app, same layout as the attached reference landscape (a soft sky in the top third, gentle rolling layers below, a calm open middle band), but as a sunny seaside: a turquoise sea with soft waves far away under a light sky, smooth sandy dunes in the middle, a few shells and small round rocks along the bottom corners, warm daylight from the top left. Keep the middle third of the image calm and low in detail, because a winding path with round lesson buttons will be drawn over it. Soft colors that never overpower a white card placed on top. No characters, no animals.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.
```

**TH-5 · Les objets de décor des 4 thèmes (24)** — `PS2-TH5-objets-themes.png` · **Paysage 16:9 · 2K** · ingrédient : `ING-themes.png` (mosaïque de TH-1 à TH-4 validées) · 2 essais

Une ligne par thème. Ces objets remplacent les nuages et les arbres du thème Pop et **dérivent lentement** (§ 4.2).

```
Item sheet of 24 decorative scenery elements for the four landscapes of the attached reference, each element alone, front view, all at the same scale, matching the colors of its landscape. Row 1, jungle: 1) small colorful parrot sitting on a short branch; 2) big round jungle leaf; 3) hanging liana with small flowers; 4) round fern bush; 5) bright tropical butterfly; 6) round jungle tree. Row 2, fairy-tale land: 7) small lilac castle with round towers; 8) garland of small pennant flags; 9) soft pastel pink cloud; 10) round pink candy-like tree; 11) small stone bridge; 12) round rose bush. Row 3, outer space: 13) planet with a ring; 14) small cratered moon; 15) small friendly rocket; 16) shooting star with a soft trail; 17) cluster of three soft stars; 18) soft violet nebula cloud. Row 4, seaside: 19) simple round fish; 20) seashell; 21) starfish; 22) swaying seaweed; 23) cluster of bubbles; 24) small sailing boat.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.

Layout: a strict regular grid of 6 columns and 4 rows of equal, invisible cells, read left to right then top to bottom. Exactly one element per cell, centered in its cell, all elements at the same scale and seen from the same angle. Generous empty space around each element: nothing touches or overlaps a neighbour or the edge of the image. Background: perfectly flat, uniform light cool grey (#D5DAE1) over the whole image, no gradient, no floor, no cast shadows, no grid lines, no frames, no labels.
```

| Ligne | Thème | Cases | Dossier |
|---|---|---|---|
| 1 | Jungle | perroquet, feuille, liane, fougère, papillon, arbre | `themes/jungle/` |
| 2 | Princesse | château, fanions, nuage rose, arbre-bonbon, pont, rosier | `themes/princesse/` |
| 3 | Espace | planète à anneau, lune, fusée, étoile filante, trois étoiles, nébuleuse | `themes/espace/` |
| 4 | Océan | poisson, coquillage, étoile de mer, algue, bulles, voilier | `themes/ocean/` |

---

### 3.5 L'imagier des leçons

**D'où vient la liste.** Claude a chargé les six fichiers de contenu (`core`, `francais`, `maths`, `monde`, `anglais`, `ecriture`) dans un environnement isolé, a joué **toutes les leçons** (551) pour toutes les classes, 25 fois chacune, et a relevé chaque emoji affiché avec le mot qui l'accompagne ; il a complété par une lecture directe du code source. Résultat : **379 emojis différents**. On en retire 4 qui ne sont pas des images (flèche, applaudissements, alphabet, drapeau d'arrivée) et 4 doublons (deux poussins, deux baleines, deux ballons, deux danseurs), et Claude dessine lui-même les 13 qui doivent être exacts (ci-dessous). Restent **358 mots**, en **8 planches de 49 cases** (7 × 7).

**L'ordre** : les mots sont rangés **par fréquence d'usage** (nombre de leçons où ils apparaissent). La planche IMG-1 couvre à elle seule **la moitié** des images affichées dans l'app, IMG-1 à IMG-3 en couvrent **82 %**. Si les crédits manquent, on peut s'arrêter après IMG-4 (89 %) : les emojis restants continuent de s'afficher en attendant.

**Ce que Claude dessine lui-même, en vecteur (13)** : les horloges et l'heure (🕛 midi, 🕒, 🕰️ : l'aiguille doit montrer la bonne heure), les phases de la Lune (🌑 nouvelle lune, 🌓 premier quartier, 🌕 pleine lune, 🌗 dernier quartier : elles doivent être justes), les monnaies (💶 euro, 💵 dollar, 💷 livre, 💴 yen : elles portent un symbole écrit), et les carrés noir et blanc des exercices de formes (⬛ ⬜). Une IA d'image se trompe sur ces détails.

**Les animaux de l'imagier ne sont pas les compagnons** : ils sont dessinés comme de vrais animaux d'album (à quatre pattes), pour que l'enfant ne confonde pas « le chat » de la leçon avec Myrtille, sa chatte.

Les fichiers découpés vont dans `imagier/` (nom = le mot, sans accent ; voir les tableaux).

#### IMG-1 · Les 49 mots les plus fréquents (animaux de la ferme et de la maison, fruits, objets de base)

Fichier `PS2-IMG-1.png` · **Carré 1:1 · 2K** · grille **7 × 7** · ingrédients : `ING-objets.png` · couverture cumulée des leçons après cette planche : **51 %**

```
Picture-dictionary board for young children: 49 different things, each one alone in its own cell, in this exact order, left to right then top to bottom (never draw the numbers): 1 cat, 2 cow, 3 dog, 4 rabbit, 5 duck, 6 small bird, 7 hen, 8 pig, 9 horse, 10 sheep, 11 butterfly, 12 mouse, 13 bee, 14 frog, 15 fish, 16 lion, 17 turtle, 18 elephant, 19 snake, 20 bear, 21 wolf, 22 monkey, 23 tiger, 24 sun, 25 crescent moon, 26 pink flower, 27 red apple, 28 banana, 29 strawberry, 30 carrot, 31 pear, 32 loaf of bread, 33 birthday cake with candles, 34 tomato, 35 glass of milk, 36 wedge of cheese, 37 egg, 38 bunch of grapes, 39 a waving hand, 40 open book, 41 top hat, 42 bed, 43 dress, 44 sailing boat, 45 bicycle, 46 house, 47 car, 48 modern train, 49 football.

Each picture shows the most typical, instantly recognizable version of the thing, simple and complete, front or three-quarter view, with no background scene. Animals are natural animals drawn the picture-book way (on four legs when they have four), never standing up like toys and never wearing clothes. People are simple round-faced children or adults in the same toy style, with varied skin tones and no likeness to any real person; emotions are shown on a simple round child face. Nothing scary, nothing sharp-looking.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.

Layout: a strict regular grid of 7 columns and 7 rows of equal, invisible cells, read left to right then top to bottom. Exactly one item per cell, centered in its cell. Every item is drawn at the same picture size, filling about 70 % of its cell (an ant is drawn as big as an elephant). Generous empty space around each item: nothing touches or overlaps a neighbour or the edge of the image. Background: perfectly flat, uniform light cool grey (#D5DAE1) over the whole image, no gradient, no floor, no cast shadows, no grid lines, no frames, no labels.
```

| Case | Emoji remplacé | Mot | Fichier |
|---|---|---|---|
| 1 | 🐱 | chat | `chat.webp` |
| 2 | 🐮 | vache | `vache.webp` |
| 3 | 🐶 | chien | `chien.webp` |
| 4 | 🐰 | lapin | `lapin.webp` |
| 5 | 🦆 | canard | `canard.webp` |
| 6 | 🐦 | oiseau | `oiseau.webp` |
| 7 | 🐔 | poule | `poule.webp` |
| 8 | 🐷 | cochon | `cochon.webp` |
| 9 | 🐴 | cheval | `cheval.webp` |
| 10 | 🐑 | mouton | `mouton.webp` |
| 11 | 🦋 | papillon | `papillon.webp` |
| 12 | 🐭 | souris | `souris.webp` |
| 13 | 🐝 | abeille | `abeille.webp` |
| 14 | 🐸 | grenouille | `grenouille.webp` |
| 15 | 🐟 | poisson | `poisson.webp` |
| 16 | 🦁 | lion | `lion.webp` |
| 17 | 🐢 | tortue | `tortue.webp` |
| 18 | 🐘 | éléphant | `elephant.webp` |
| 19 | 🐍 | serpent | `serpent.webp` |
| 20 | 🐻 | ours | `ours.webp` |
| 21 | 🐺 | loup | `loup.webp` |
| 22 | 🐒 | singe | `singe.webp` |
| 23 | 🐯 | tigre | `tigre.webp` |
| 24 | ☀️ | soleil | `soleil.webp` |
| 25 | 🌙 | lune, nuit | `lune.webp` |
| 26 | 🌸 | fleur, printemps | `fleur.webp` |
| 27 | 🍎 | pomme | `pomme.webp` |
| 28 | 🍌 | banane | `banane.webp` |
| 29 | 🍓 | fraise | `fraise.webp` |
| 30 | 🥕 | carotte | `carotte.webp` |
| 31 | 🍐 | poire | `poire.webp` |
| 32 | 🍞 | pain | `pain.webp` |
| 33 | 🎂 | gâteau d'anniversaire | `gateau-d-anniversaire.webp` |
| 34 | 🍅 | tomate | `tomate.webp` |
| 35 | 🥛 | lait | `lait.webp` |
| 36 | 🧀 | fromage | `fromage.webp` |
| 37 | 🥚 | œuf | `oeuf.webp` |
| 38 | 🍇 | raisin | `raisin.webp` |
| 39 | 👋 | coucou (main qui salue) | `coucou.webp` |
| 40 | 📖 | livre | `livre.webp` |
| 41 | 🎩 | chapeau | `chapeau.webp` |
| 42 | 🛏️ | lit | `lit.webp` |
| 43 | 👗 | robe | `robe.webp` |
| 44 | ⛵ | bateau | `bateau.webp` |
| 45 | 🚲 | vélo | `velo.webp` |
| 46 | 🏠 | maison | `maison.webp` |
| 47 | 🚗 | voiture | `voiture.webp` |
| 48 | 🚆 | train | `train.webp` |
| 49 | ⚽🏐 | ballon | `ballon.webp` |

#### IMG-2 · Animaux, corps, vêtements, maison

Fichier `PS2-IMG-2.png` · **Carré 1:1 · 2K** · grille **7 × 7** · ingrédients : `PS2-IMG-1.png` (validée) + `ING-objets.png` · couverture cumulée des leçons après cette planche : **71 %**

```
Picture-dictionary board for young children: 49 different things, each one alone in its own cell, in this exact order, left to right then top to bottom (never draw the numbers): 1 snail, 2 fox, 3 dolphin, 4 owl, 5 giraffe, 6 penguin, 7 round tree, 8 ice cube, 9 water drop, 10 mushroom, 11 cloud, 12 wrapped sweet, 13 pizza, 14 chocolate bar, 15 cherries, 16 orange fruit, 17 ear, 18 open hand, 19 nose, 20 foot, 21 tooth, 22 child swimming, 23 baby, 24 boy, 25 key, 26 sneaker, 27 sock, 28 television, 29 smartphone, 30 bathtub, 31 light bulb, 32 wristwatch, 33 trousers, 34 scarf, 35 t-shirt, 36 cap, 37 coat, 38 sofa, 39 spoon, 40 airplane, 41 motorbike, 42 bus, 43 castle, 44 gift box with ribbon, 45 pencil, 46 balloon, 47 teddy bear, 48 dice, 49 crown.

Each picture shows the most typical, instantly recognizable version of the thing, simple and complete, front or three-quarter view, with no background scene. Animals are natural animals drawn the picture-book way (on four legs when they have four), never standing up like toys and never wearing clothes. People are simple round-faced children or adults in the same toy style, with varied skin tones and no likeness to any real person; emotions are shown on a simple round child face. Nothing scary, nothing sharp-looking.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.

Layout: a strict regular grid of 7 columns and 7 rows of equal, invisible cells, read left to right then top to bottom. Exactly one item per cell, centered in its cell. Every item is drawn at the same picture size, filling about 70 % of its cell (an ant is drawn as big as an elephant). Generous empty space around each item: nothing touches or overlaps a neighbour or the edge of the image. Background: perfectly flat, uniform light cool grey (#D5DAE1) over the whole image, no gradient, no floor, no cast shadows, no grid lines, no frames, no labels.
```

| Case | Emoji remplacé | Mot | Fichier |
|---|---|---|---|
| 1 | 🐌 | escargot | `escargot.webp` |
| 2 | 🦊 | renard | `renard.webp` |
| 3 | 🐬 | dauphin | `dauphin.webp` |
| 4 | 🦉 | chouette, hibou | `chouette.webp` |
| 5 | 🦒 | girafe | `girafe.webp` |
| 6 | 🐧 | manchot | `manchot.webp` |
| 7 | 🌳 | arbre, parc | `arbre.webp` |
| 8 | 🧊 | glaçon, banquise | `glacon.webp` |
| 9 | 💧 | eau, goutte | `eau.webp` |
| 10 | 🍄 | champignon | `champignon.webp` |
| 11 | ☁️ | nuage | `nuage.webp` |
| 12 | 🍬 | bonbon | `bonbon.webp` |
| 13 | 🍕 | pizza | `pizza.webp` |
| 14 | 🍫 | chocolat | `chocolat.webp` |
| 15 | 🍒 | cerise | `cerise.webp` |
| 16 | 🍊 | orange | `orange.webp` |
| 17 | 👂 | oreille | `oreille.webp` |
| 18 | ✋ | main | `main.webp` |
| 19 | 👃 | nez | `nez.webp` |
| 20 | 🦶 | pied | `pied.webp` |
| 21 | 🦷 | dent | `dent.webp` |
| 22 | 🏊 | nager | `nager.webp` |
| 23 | 👶 | bébé | `bebe.webp` |
| 24 | 👦 | garçon, frère | `garcon.webp` |
| 25 | 🔑 | clé | `cle.webp` |
| 26 | 👟 | basket, chaussure | `basket.webp` |
| 27 | 🧦 | chaussette | `chaussette.webp` |
| 28 | 📺 | télévision | `television.webp` |
| 29 | 📱 | téléphone portable | `telephone-portable.webp` |
| 30 | 🛁 | baignoire, salle de bain | `baignoire.webp` |
| 31 | 💡 | ampoule, lampe | `ampoule.webp` |
| 32 | ⌚ | montre | `montre.webp` |
| 33 | 👖 | pantalon | `pantalon.webp` |
| 34 | 🧣 | écharpe | `echarpe.webp` |
| 35 | 👕 | tee-shirt | `tee-shirt.webp` |
| 36 | 🧢 | casquette | `casquette.webp` |
| 37 | 🧥 | manteau | `manteau.webp` |
| 38 | 🛋️ | canapé, salon | `canape.webp` |
| 39 | 🥄 | cuillère | `cuillere.webp` |
| 40 | ✈️ | avion | `avion.webp` |
| 41 | 🏍️ | moto | `moto.webp` |
| 42 | 🚌 | bus | `bus.webp` |
| 43 | 🏰 | château fort | `chateau-fort.webp` |
| 44 | 🎁 | cadeau | `cadeau.webp` |
| 45 | ✏️ | crayon | `crayon.webp` |
| 46 | 🎈 | ballon de baudruche | `ballon-de-baudruche.webp` |
| 47 | 🧸 | ours en peluche | `ours-en-peluche.webp` |
| 48 | 🎲 | dé, cube | `de.webp` |
| 49 | 👑 | couronne, roi | `couronne.webp` |

#### IMG-3 · Petites bêtes, nature, corps, maison, transports

Fichier `PS2-IMG-3.png` · **Carré 1:1 · 2K** · grille **7 × 7** · ingrédients : `PS2-IMG-1.png` (validée) + `ING-objets.png` · couverture cumulée des leçons après cette planche : **82 %**

```
Picture-dictionary board for young children: 49 different things, each one alone in its own cell, in this exact order, left to right then top to bottom (never draw the numbers): 1 ladybird, 2 caterpillar, 3 spider, 4 swan, 5 rooster, 6 hedgehog, 7 kangaroo, 8 zebra, 9 octopus, 10 shark, 11 koala, 12 long-necked dinosaur, 13 planet Earth, 14 red rose, 15 sea wave, 16 autumn leaf, 17 wind gust, 18 wheat, 19 fire flame, 20 sprouting seedling, 21 green leaf, 22 mountain, 23 lemon, 24 broccoli, 25 ice cream cone, 26 cup of coffee, 27 bowl of rice, 28 child riding a bike, 29 mouth, 30 sleeping face, 31 grandfather, 32 leg, 33 child running, 34 mother, 35 laptop computer, 36 toilet, 37 umbrella, 38 ring, 39 battery, 40 boot, 41 chair, 42 door, 43 soap, 44 rocket, 45 tractor, 46 steam locomotive, 47 hospital, 48 ruler (no numbers), 49 guitar.

Each picture shows the most typical, instantly recognizable version of the thing, simple and complete, front or three-quarter view, with no background scene. Animals are natural animals drawn the picture-book way (on four legs when they have four), never standing up like toys and never wearing clothes. People are simple round-faced children or adults in the same toy style, with varied skin tones and no likeness to any real person; emotions are shown on a simple round child face. Nothing scary, nothing sharp-looking.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.

Layout: a strict regular grid of 7 columns and 7 rows of equal, invisible cells, read left to right then top to bottom. Exactly one item per cell, centered in its cell. Every item is drawn at the same picture size, filling about 70 % of its cell (an ant is drawn as big as an elephant). Generous empty space around each item: nothing touches or overlaps a neighbour or the edge of the image. Background: perfectly flat, uniform light cool grey (#D5DAE1) over the whole image, no gradient, no floor, no cast shadows, no grid lines, no frames, no labels.
```

| Case | Emoji remplacé | Mot | Fichier |
|---|---|---|---|
| 1 | 🐞 | coccinelle | `coccinelle.webp` |
| 2 | 🐛 | chenille | `chenille.webp` |
| 3 | 🕷️ | araignée | `araignee.webp` |
| 4 | 🦢 | cygne | `cygne.webp` |
| 5 | 🐓 | coq | `coq.webp` |
| 6 | 🦔 | hérisson | `herisson.webp` |
| 7 | 🦘 | kangourou | `kangourou.webp` |
| 8 | 🦓 | zèbre | `zebre.webp` |
| 9 | 🐙 | pieuvre | `pieuvre.webp` |
| 10 | 🦈 | requin | `requin.webp` |
| 11 | 🐨 | koala | `koala.webp` |
| 12 | 🦕 | dinosaure | `dinosaure.webp` |
| 13 | 🌍 | Terre, globe | `terre.webp` |
| 14 | 🌹 | rose | `rose.webp` |
| 15 | 🌊 | mer, vague | `mer.webp` |
| 16 | 🍂 | automne, feuille morte | `automne.webp` |
| 17 | 🌬️ | vent, air | `vent.webp` |
| 18 | 🌾 | blé, campagne | `ble.webp` |
| 19 | 🔥 | feu | `feu.webp` |
| 20 | 🌱 | graine, plante | `graine.webp` |
| 21 | 🍃 | feuille | `feuille.webp` |
| 22 | ⛰️ | montagne | `montagne.webp` |
| 23 | 🍋 | citron | `citron.webp` |
| 24 | 🥦 | brocoli | `brocoli.webp` |
| 25 | 🍦 | glace | `glace.webp` |
| 26 | ☕ | café | `cafe.webp` |
| 27 | 🍚 | riz | `riz.webp` |
| 28 | 🚴 | faire du vélo | `faire-du-velo.webp` |
| 29 | 👄 | bouche | `bouche.webp` |
| 30 | 😴 | fatigué (visage qui dort) | `fatigue.webp` |
| 31 | 👴 | grand-père, personne âgée | `grand-pere.webp` |
| 32 | 🦵 | jambe | `jambe.webp` |
| 33 | 🏃 | courir | `courir.webp` |
| 34 | 👩 | maman, adulte | `maman.webp` |
| 35 | 💻 | ordinateur | `ordinateur.webp` |
| 36 | 🚽 | toilettes | `toilettes.webp` |
| 37 | ☂️ | parapluie | `parapluie.webp` |
| 38 | 💍 | bague | `bague.webp` |
| 39 | 🔋 | pile | `pile.webp` |
| 40 | 👢 | botte | `botte.webp` |
| 41 | 🪑 | chaise | `chaise.webp` |
| 42 | 🚪 | porte | `porte.webp` |
| 43 | 🧼 | savon | `savon.webp` |
| 44 | 🚀 | fusée | `fusee.webp` |
| 45 | 🚜 | tracteur, ferme | `tracteur.webp` |
| 46 | 🚂 | locomotive à vapeur | `locomotive-a-vapeur.webp` |
| 47 | 🏥 | hôpital | `hopital.webp` |
| 48 | 📏 | règle | `regle.webp` |
| 49 | 🎸 | guitare | `guitare.webp` |

#### IMG-4 · Mer, météo, cuisine, gens, école

Fichier `PS2-IMG-4.png` · **Carré 1:1 · 2K** · grille **7 × 7** · ingrédients : `PS2-IMG-1.png` (validée) + `ING-objets.png` · couverture cumulée des leçons après cette planche : **89 %**

```
Picture-dictionary board for young children: 49 different things, each one alone in its own cell, in this exact order, left to right then top to bottom (never draw the numbers): 1 goat, 2 crocodile, 3 crab, 4 whale, 5 steam, 6 grass sprig, 7 rain cloud, 8 snow cloud, 9 small island with palm tree, 10 snowy mountain, 11 thermometer, 12 doughnut, 13 tin can, 14 soda cup with straw, 15 cookie, 16 baguette, 17 kiwi fruit, 18 crying face, 19 child climbing, 20 pair of eyes, 21 child dancing, 22 tongue, 23 adult, 24 father, 25 girl, 26 grandmother, 27 happy face, 28 cardboard box, 29 brick, 30 gloves, 31 frying pan with egg, 32 nut and bolt, 33 candle, 34 plate with fork and knife, 35 paper clip, 36 sheet of paper, 37 broom, 38 train station, 39 fire engine, 40 classical museum building, 41 truck, 42 scissors, 43 stack of books, 44 compass, 45 microphone, 46 paint palette, 47 toy robot, 48 crayon, 49 fairy.

Each picture shows the most typical, instantly recognizable version of the thing, simple and complete, front or three-quarter view, with no background scene. Animals are natural animals drawn the picture-book way (on four legs when they have four), never standing up like toys and never wearing clothes. People are simple round-faced children or adults in the same toy style, with varied skin tones and no likeness to any real person; emotions are shown on a simple round child face. Nothing scary, nothing sharp-looking.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.

Layout: a strict regular grid of 7 columns and 7 rows of equal, invisible cells, read left to right then top to bottom. Exactly one item per cell, centered in its cell. Every item is drawn at the same picture size, filling about 70 % of its cell (an ant is drawn as big as an elephant). Generous empty space around each item: nothing touches or overlaps a neighbour or the edge of the image. Background: perfectly flat, uniform light cool grey (#D5DAE1) over the whole image, no gradient, no floor, no cast shadows, no grid lines, no frames, no labels.
```

| Case | Emoji remplacé | Mot | Fichier |
|---|---|---|---|
| 1 | 🐐 | chèvre | `chevre.webp` |
| 2 | 🐊 | crocodile | `crocodile.webp` |
| 3 | 🦀 | crabe | `crabe.webp` |
| 4 | 🐳🐋 | baleine | `baleine.webp` |
| 5 | ♨️ | vapeur, gaz | `vapeur.webp` |
| 6 | 🌿 | herbe | `herbe.webp` |
| 7 | 🌧️ | pluie | `pluie.webp` |
| 8 | 🌨️ | neige qui tombe | `neige-qui-tombe.webp` |
| 9 | 🏝️ | île, outre-mer | `ile.webp` |
| 10 | 🏔️ | montagne enneigée | `montagne-enneigee.webp` |
| 11 | 🌡️ | thermomètre | `thermometre.webp` |
| 12 | 🍩 | beignet | `beignet.webp` |
| 13 | 🥫 | boîte de conserve, cylindre | `boite-de-conserve.webp` |
| 14 | 🥤 | soda | `soda.webp` |
| 15 | 🍪 | biscuit, goûter | `biscuit.webp` |
| 16 | 🥖 | baguette, boulangerie | `baguette.webp` |
| 17 | 🥝 | kiwi | `kiwi.webp` |
| 18 | 😢 | triste, pleurer | `triste.webp` |
| 19 | 🧗 | grimper | `grimper.webp` |
| 20 | 👀 | yeux, regarder | `yeux.webp` |
| 21 | 💃🕺 | danser | `danser.webp` |
| 22 | 👅 | langue, goûter | `langue.webp` |
| 23 | 🧑 | adulte | `adulte.webp` |
| 24 | 👨 | papa | `papa.webp` |
| 25 | 👧 | fille, sœur | `fille.webp` |
| 26 | 👵 | grand-mère | `grand-mere.webp` |
| 27 | 😀 | content | `content.webp` |
| 28 | 📦 | carton, pavé | `carton.webp` |
| 29 | 🧱 | brique | `brique.webp` |
| 30 | 🧤 | gants | `gants.webp` |
| 31 | 🍳 | cuisine, cuisiner | `cuisine.webp` |
| 32 | 🔩 | boulon | `boulon.webp` |
| 33 | 🕯️ | bougie | `bougie.webp` |
| 34 | 🍽️ | assiette, déjeuner | `assiette.webp` |
| 35 | 📎 | trombone | `trombone.webp` |
| 36 | 📄 | feuille de papier | `feuille-de-papier.webp` |
| 37 | 🧹 | balai | `balai.webp` |
| 38 | 🚉 | gare | `gare.webp` |
| 39 | 🚒 | camion de pompiers | `camion-de-pompiers.webp` |
| 40 | 🏛️ | musée, monument antique | `musee.webp` |
| 41 | 🚚 | camion | `camion.webp` |
| 42 | ✂️ | ciseaux | `ciseaux.webp` |
| 43 | 📚 | bibliothèque, livres | `bibliotheque.webp` |
| 44 | 🧭 | boussole | `boussole.webp` |
| 45 | 🎤 | chanter, micro | `chanter.webp` |
| 46 | 🎨 | peinture, art | `peinture.webp` |
| 47 | 🤖 | robot | `robot.webp` |
| 48 | 🖍️ | crayon de couleur, dessiner | `crayon-de-couleur.webp` |
| 49 | 🧚 | fée | `fee.webp` |

#### IMG-5 · Fêtes, sports, outils, journée

Fichier `PS2-IMG-5.png` · **Carré 1:1 · 2K** · grille **7 × 7** · ingrédients : `PS2-IMG-1.png` (validée) + `ING-objets.png` · couverture cumulée des leçons après cette planche : **94 %**

```
Picture-dictionary board for young children: 49 different things, each one alone in its own cell, in this exact order, left to right then top to bottom (never draw the numbers): 1 chick, 2 rat, 3 ant, 4 chick hatching from egg, 5 squirrel, 6 panda, 7 llama, 8 volcano, 9 snowflake, 10 sunflower, 11 sunrise over hills, 12 sunset over town, 13 fir tree, 14 bowl of salad, 15 bowl of cereal, 16 lollipop, 17 chicken drumstick, 18 arm showing muscle, 19 angry face, 20 scared face, 21 child skiing, 22 child in judo outfit, 23 eye, 24 sneezing face, 25 child, 26 sunglasses, 27 medicine pills, 28 safety helmet, 29 ribbon bow, 30 hammer, 31 flashlight, 32 alarm clock (no numbers), 33 newspaper (no letters), 34 plug, 35 school building, 36 anchor, 37 factory, 38 satellite, 39 fishing rod, 40 game controller, 41 drum, 42 schoolbag, 43 paintbrush, 44 tennis racket and ball, 45 basketball, 46 rugby ball, 47 decorated christmas tree, 48 carved pumpkin lantern, 49 tent.

Each picture shows the most typical, instantly recognizable version of the thing, simple and complete, front or three-quarter view, with no background scene. Animals are natural animals drawn the picture-book way (on four legs when they have four), never standing up like toys and never wearing clothes. People are simple round-faced children or adults in the same toy style, with varied skin tones and no likeness to any real person; emotions are shown on a simple round child face. Nothing scary, nothing sharp-looking.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.

Layout: a strict regular grid of 7 columns and 7 rows of equal, invisible cells, read left to right then top to bottom. Exactly one item per cell, centered in its cell. Every item is drawn at the same picture size, filling about 70 % of its cell (an ant is drawn as big as an elephant). Generous empty space around each item: nothing touches or overlaps a neighbour or the edge of the image. Background: perfectly flat, uniform light cool grey (#D5DAE1) over the whole image, no gradient, no floor, no cast shadows, no grid lines, no frames, no labels.
```

| Case | Emoji remplacé | Mot | Fichier |
|---|---|---|---|
| 1 | 🐤🐥 | poussin | `poussin.webp` |
| 2 | 🐀 | rat | `rat.webp` |
| 3 | 🐜 | fourmi | `fourmi.webp` |
| 4 | 🐣 | poussin qui sort de l'œuf | `poussin-qui-sort-de-l-oeuf.webp` |
| 5 | 🐿️ | écureuil | `ecureuil.webp` |
| 6 | 🐼 | panda | `panda.webp` |
| 7 | 🦙 | lama | `lama.webp` |
| 8 | 🌋 | volcan | `volcan.webp` |
| 9 | ❄️ | flocon, hiver | `flocon.webp` |
| 10 | 🌻 | tournesol | `tournesol.webp` |
| 11 | 🌅 | matin | `matin.webp` |
| 12 | 🌇 | soir | `soir.webp` |
| 13 | 🌲 | sapin, forêt | `sapin.webp` |
| 14 | 🥗 | salade | `salade.webp` |
| 15 | 🥣 | bol, petit-déjeuner | `bol.webp` |
| 16 | 🍭 | sucette | `sucette.webp` |
| 17 | 🍗 | poulet | `poulet.webp` |
| 18 | 💪 | bras | `bras.webp` |
| 19 | 😠 | en colère | `en-colere.webp` |
| 20 | 😱 | avoir peur | `avoir-peur.webp` |
| 21 | ⛷️ | ski | `ski.webp` |
| 22 | 🥋 | judo | `judo.webp` |
| 23 | 👁️ | œil | `oeil.webp` |
| 24 | 🤧 | éternuer | `eternuer.webp` |
| 25 | 🧒 | enfant | `enfant.webp` |
| 26 | 🕶️ | lunettes de soleil | `lunettes-de-soleil.webp` |
| 27 | 💊 | médicament, pharmacie | `medicament.webp` |
| 28 | ⛑️ | casque | `casque.webp` |
| 29 | 🎀 | ruban | `ruban.webp` |
| 30 | 🔨 | marteau | `marteau.webp` |
| 31 | 🔦 | lampe de poche | `lampe-de-poche.webp` |
| 32 | ⏰ | réveil | `reveil.webp` |
| 33 | 📰 | journal | `journal.webp` |
| 34 | 🔌 | prise électrique | `prise-electrique.webp` |
| 35 | 🏫 | école | `ecole.webp` |
| 36 | ⚓ | ancre | `ancre.webp` |
| 37 | 🏭 | usine | `usine.webp` |
| 38 | 🛰️ | satellite | `satellite.webp` |
| 39 | 🎣 | pêcher | `pecher.webp` |
| 40 | 🎮 | jeux vidéo, manette | `jeux-video.webp` |
| 41 | 🥁 | tambour | `tambour.webp` |
| 42 | 🎒 | cartable | `cartable.webp` |
| 43 | 🖌️ | pinceau | `pinceau.webp` |
| 44 | 🎾 | tennis | `tennis.webp` |
| 45 | 🏀 | basket-ball | `basket-ball.webp` |
| 46 | 🏉 | rugby | `rugby.webp` |
| 47 | 🎄 | sapin de Noël | `sapin-de-noel.webp` |
| 48 | 🎃 | citrouille | `citrouille.webp` |
| 49 | ⛺ | tente, prisme | `tente.webp` |

#### IMG-6 · Aliments, métiers, ville, école

Fichier `PS2-IMG-6.png` · **Carré 1:1 · 2K** · grille **7 × 7** · ingrédients : `PS2-IMG-1.png` (validée) + `ING-objets.png` · couverture cumulée des leçons après cette planche : **97 %**

```
Picture-dictionary board for young children: 49 different things, each one alone in its own cell, in this exact order, left to right then top to bottom (never draw the numbers): 1 dove, 2 mosquito, 3 camel with two humps, 4 gorilla, 5 wild boar, 6 dromedary, 7 beach with umbrella, 8 tulip, 9 star, 10 desert dunes, 11 juice box, 12 pineapple, 13 croissant, 14 watermelon, 15 slice of cake, 16 potato, 17 corn cob, 18 cucumber, 19 honey pot, 20 hazelnut, 21 meat on the bone, 22 steak, 23 plate of spaghetti, 24 heart, 25 brain, 26 bone, 27 child asleep in bed, 28 builder with helmet, 29 laughing face, 30 yawning face, 31 child in a bath, 32 police officer, 33 recycling bin with arrows, 34 basket, 35 glasses, 36 suitcase, 37 shirt, 38 handbag, 39 shampoo bottle, 40 kitchen knife (rounded), 41 city buildings, 42 traffic light, 43 folded map, 44 shield, 45 sledge, 46 friendly dragon, 47 set square, 48 pen, 49 notebook.

Each picture shows the most typical, instantly recognizable version of the thing, simple and complete, front or three-quarter view, with no background scene. Animals are natural animals drawn the picture-book way (on four legs when they have four), never standing up like toys and never wearing clothes. People are simple round-faced children or adults in the same toy style, with varied skin tones and no likeness to any real person; emotions are shown on a simple round child face. Nothing scary, nothing sharp-looking.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.

Layout: a strict regular grid of 7 columns and 7 rows of equal, invisible cells, read left to right then top to bottom. Exactly one item per cell, centered in its cell. Every item is drawn at the same picture size, filling about 70 % of its cell (an ant is drawn as big as an elephant). Generous empty space around each item: nothing touches or overlaps a neighbour or the edge of the image. Background: perfectly flat, uniform light cool grey (#D5DAE1) over the whole image, no gradient, no floor, no cast shadows, no grid lines, no frames, no labels.
```

| Case | Emoji remplacé | Mot | Fichier |
|---|---|---|---|
| 1 | 🕊️ | colombe, paix | `colombe.webp` |
| 2 | 🦟 | insectes (moustique) | `insectes.webp` |
| 3 | 🐫 | chameau | `chameau.webp` |
| 4 | 🦍 | gorille | `gorille.webp` |
| 5 | 🐗 | sanglier | `sanglier.webp` |
| 6 | 🐪 | dromadaire | `dromadaire.webp` |
| 7 | 🏖️ | plage | `plage.webp` |
| 8 | 🌷 | tulipe | `tulipe.webp` |
| 9 | ⭐ | étoile | `etoile.webp` |
| 10 | 🏜️ | désert | `desert.webp` |
| 11 | 🧃 | jus | `jus.webp` |
| 12 | 🍍 | ananas | `ananas.webp` |
| 13 | 🥐 | croissant | `croissant.webp` |
| 14 | 🍉 | pastèque | `pasteque.webp` |
| 15 | 🍰 | part de gâteau | `part-de-gateau.webp` |
| 16 | 🥔 | pomme de terre | `pomme-de-terre.webp` |
| 17 | 🌽 | maïs | `mais.webp` |
| 18 | 🥒 | concombre | `concombre.webp` |
| 19 | 🍯 | miel | `miel.webp` |
| 20 | 🌰 | noisette | `noisette.webp` |
| 21 | 🍖 | viande | `viande.webp` |
| 22 | 🥩 | steak | `steak.webp` |
| 23 | 🍝 | pâtes | `pates.webp` |
| 24 | ❤️ | cœur | `coeur.webp` |
| 25 | 🧠 | cerveau | `cerveau.webp` |
| 26 | 🦴 | os | `os.webp` |
| 27 | 🛌 | dormir (au lit) | `dormir.webp` |
| 28 | 👷 | maçon | `macon.webp` |
| 29 | 😂 | rire | `rire.webp` |
| 30 | 🥱 | bâiller | `bailler.webp` |
| 31 | 🛀 | prendre son bain | `prendre-son-bain.webp` |
| 32 | 👮 | policier | `policier.webp` |
| 33 | ♻️ | recycler | `recycler.webp` |
| 34 | 🧺 | panier | `panier.webp` |
| 35 | 👓 | lunettes | `lunettes.webp` |
| 36 | 🧳 | valise | `valise.webp` |
| 37 | 👔 | chemise | `chemise.webp` |
| 38 | 👜 | sac | `sac.webp` |
| 39 | 🧴 | shampoing | `shampoing.webp` |
| 40 | 🔪 | couteau | `couteau.webp` |
| 41 | 🏙️ | ville | `ville.webp` |
| 42 | 🚦 | feu tricolore | `feu-tricolore.webp` |
| 43 | 🗺️ | carte | `carte.webp` |
| 44 | 🛡️ | bouclier, protection | `bouclier.webp` |
| 45 | 🛷 | luge | `luge.webp` |
| 46 | 🐉 | dragon | `dragon.webp` |
| 47 | 📐 | équerre | `equerre.webp` |
| 48 | 🖊️ | stylo | `stylo.webp` |
| 49 | 📒 | cahier | `cahier.webp` |

#### IMG-7 · Histoire, sciences, musique, transports

Fichier `PS2-IMG-7.png` · **Carré 1:1 · 2K** · grille **7 × 7** · ingrédients : `PS2-IMG-1.png` (validée) + `ING-objets.png` · couverture cumulée des leçons après cette planche : **100 %**

```
Picture-dictionary board for young children: 49 different things, each one alone in its own cell, in this exact order, left to right then top to bottom (never draw the numbers): 1 hippopotamus, 2 lizard, 3 bat, 4 parrot, 5 comet, 6 cactus, 7 storm cloud with lightning, 8 coconut, 9 french fries, 10 pie, 11 thought bubble, 12 child talking, 13 surprised face, 14 child raising hand, 15 child with thermometer, 16 horseshoe magnet, 17 safety pin, 18 printer, 19 oil barrel, 20 pickaxe with coal, 21 sponge, 22 balance scale, 23 rotary phone, 24 envelope, 25 old radio, 26 shower head, 27 swimsuit, 28 sandals, 29 frayed electric cable, 30 ambulance, 31 police car, 32 village church, 33 standing stones, 34 high-speed train, 35 tram, 36 helicopter, 37 pedestrian crossing, 38 ocean liner, 39 ping-pong paddle and ball, 40 quill and ink pot, 41 knight's helmet and shield, 42 framed painting, 43 jigsaw puzzle piece, 44 abacus, 45 microscope, 46 musical notes, 47 cinema film reel, 48 piano keyboard, 49 pyramid solid.

Each picture shows the most typical, instantly recognizable version of the thing, simple and complete, front or three-quarter view, with no background scene. Animals are natural animals drawn the picture-book way (on four legs when they have four), never standing up like toys and never wearing clothes. People are simple round-faced children or adults in the same toy style, with varied skin tones and no likeness to any real person; emotions are shown on a simple round child face. Nothing scary, nothing sharp-looking.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.

Layout: a strict regular grid of 7 columns and 7 rows of equal, invisible cells, read left to right then top to bottom. Exactly one item per cell, centered in its cell. Every item is drawn at the same picture size, filling about 70 % of its cell (an ant is drawn as big as an elephant). Generous empty space around each item: nothing touches or overlaps a neighbour or the edge of the image. Background: perfectly flat, uniform light cool grey (#D5DAE1) over the whole image, no gradient, no floor, no cast shadows, no grid lines, no frames, no labels.
```

| Case | Emoji remplacé | Mot | Fichier |
|---|---|---|---|
| 1 | 🦛 | hippopotame | `hippopotame.webp` |
| 2 | 🦎 | lézard | `lezard.webp` |
| 3 | 🦇 | chauve-souris | `chauve-souris.webp` |
| 4 | 🦜 | perroquet | `perroquet.webp` |
| 5 | ☄️ | comète | `comete.webp` |
| 6 | 🌵 | cactus, épine | `cactus.webp` |
| 7 | ⛈️ | orage | `orage.webp` |
| 8 | 🥥 | noix de coco | `noix-de-coco.webp` |
| 9 | 🍟 | frites | `frites.webp` |
| 10 | 🥧 | tarte | `tarte.webp` |
| 11 | 💭 | rêver | `rever.webp` |
| 12 | 🗣️ | parler | `parler.webp` |
| 13 | 😲 | surpris | `surpris.webp` |
| 14 | 🙋 | lever la main | `lever-la-main.webp` |
| 15 | 🤒 | malade | `malade.webp` |
| 16 | 🧲 | aimant | `aimant.webp` |
| 17 | 🧷 | épingle à nourrice | `epingle-a-nourrice.webp` |
| 18 | 🖨️ | imprimante | `imprimante.webp` |
| 19 | 🛢️ | pétrole | `petrole.webp` |
| 20 | ⛏️ | charbon, pioche | `charbon.webp` |
| 21 | 🧽 | éponge | `eponge.webp` |
| 22 | ⚖️ | balance | `balance.webp` |
| 23 | ☎️ | téléphone à cadran | `telephone-a-cadran.webp` |
| 24 | ✉️ | lettre | `lettre.webp` |
| 25 | 📻 | radio | `radio.webp` |
| 26 | 🚿 | douche | `douche.webp` |
| 27 | 👙 | maillot de bain | `maillot-de-bain.webp` |
| 28 | 👡 | sandales | `sandales.webp` |
| 29 | ⚡ | fils abîmés, électricité | `fils-abimes.webp` |
| 30 | 🚑 | ambulance (SAMU) | `ambulance.webp` |
| 31 | 🚓 | voiture de police | `voiture-de-police.webp` |
| 32 | ⛪ | église | `eglise.webp` |
| 33 | 🗿 | menhir | `menhir.webp` |
| 34 | 🚄 | TGV | `tgv.webp` |
| 35 | 🚋 | tramway | `tramway.webp` |
| 36 | 🚁 | hélicoptère | `helicoptere.webp` |
| 37 | 🚸 | passage piéton | `passage-pieton.webp` |
| 38 | 🚢 | paquebot | `paquebot.webp` |
| 39 | 🏓 | ping-pong | `ping-pong.webp` |
| 40 | 🖋️ | plume et encre | `plume-et-encre.webp` |
| 41 | ⚔️ | chevaliers | `chevaliers.webp` |
| 42 | 🖼️ | tableau, musée | `tableau.webp` |
| 43 | 🧩 | puzzle | `puzzle.webp` |
| 44 | ➗ | maths | `maths.webp` |
| 45 | 🔬 | sciences | `sciences.webp` |
| 46 | 🎵 | musique | `musique.webp` |
| 47 | 🎦 | cinéma | `cinema.webp` |
| 48 | 🎹 | piano | `piano.webp` |
| 49 | 🔺 | pyramide | `pyramide.webp` |

#### IMG-8 · Derniers mots + rattrapage

Fichier `PS2-IMG-8.png` · **Carré 1:1 · 2K** · grille **7 × 7 (rattrapage compris)** · ingrédients : `PS2-IMG-1.png` (validée) + `ING-objets.png` · couverture cumulée des leçons après cette planche : **100 %**

Les 15 mots ci-dessous occupent les cases 1 à 15. Les cases 16 à 49 servent au **rattrapage** : Claude y ajoute, dans le prompt qu'il vous renvoie, les images ratées des planches IMG-1 à IMG-7 (mot manquant, doublon, image peu lisible). S'il n'y a rien à rattraper, utilisez ce prompt tel quel avec la grille 5 × 3.

```
Picture-dictionary board for young children: 15 different things, each one alone in its own cell, in this exact order, left to right then top to bottom (never draw the numbers): 1 turkey, 2 fog, 3 sandwich, 4 pancakes, 5 two hands holding, 6 child finger on lips, 7 child sitting down, 8 camera, 9 syringe (rounded), 10 padlock, 11 rowing boat, 12 statue of liberty, 13 violin, 14 globe with network lines, 15 fireworks.

Each picture shows the most typical, instantly recognizable version of the thing, simple and complete, front or three-quarter view, with no background scene. Animals are natural animals drawn the picture-book way (on four legs when they have four), never standing up like toys and never wearing clothes. People are simple round-faced children or adults in the same toy style, with varied skin tones and no likeness to any real person; emotions are shown on a simple round child face. Nothing scary, nothing sharp-looking.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.

Layout: a strict regular grid of 5 columns and 3 rows of equal, invisible cells, read left to right then top to bottom. Exactly one item per cell, centered in its cell. Every item is drawn at the same picture size, filling about 70 % of its cell (an ant is drawn as big as an elephant). Generous empty space around each item: nothing touches or overlaps a neighbour or the edge of the image. Background: perfectly flat, uniform light cool grey (#D5DAE1) over the whole image, no gradient, no floor, no cast shadows, no grid lines, no frames, no labels.
```

| Case | Emoji remplacé | Mot | Fichier |
|---|---|---|---|
| 1 | 🦃 | dinde | `dinde.webp` |
| 2 | 🌫️ | brouillard | `brouillard.webp` |
| 3 | 🥪 | sandwich | `sandwich.webp` |
| 4 | 🥞 | crêpes | `crepes.webp` |
| 5 | 🤝 | aider, soutenir | `aider.webp` |
| 6 | 🤫 | chut | `chut.webp` |
| 7 | 💺 | s'asseoir | `s-asseoir.webp` |
| 8 | 📷 | appareil photo | `appareil-photo.webp` |
| 9 | 💉 | vaccin | `vaccin.webp` |
| 10 | 🔒 | mot de passe, cadenas | `mot-de-passe.webp` |
| 11 | 🛶 | barque | `barque.webp` |
| 12 | 🗽 | New York (statue) | `new-york.webp` |
| 13 | 🎻 | violon | `violon.webp` |
| 14 | 🌐 | internet | `internet.webp` |
| 15 | 🎆 | feu d'artifice | `feu-d-artifice.webp` |

---

### 3.6 La marque, les magasins et les réseaux

**BR-1 · Quatre grands portraits de Tilou** — `PS2-BR1-tilou-portraits.png` · **Carré 1:1 · 2K** · ingrédients : `ING-tilou.png` + `PS2-TI1-tilou-fiche.png` · 3 essais

Quatre bustes de Tilou en très grand (chaque case fait 1 024 pixels) : c'est la matière de **l'icône**, des **photos de profil** et des **miniatures** où la mascotte occupe 55 à 85 % de la hauteur (étude 14, règle 1). Le halo de la perle est redessiné par Claude en vecteur (un halo flou se détoure mal).

```
Four large portraits of ONLY Tilou, the mascot of the attached reference, in a 2 × 2 grid, each showing the head and the upper body down to the waist, the body ending in a clean straight horizontal cut, filling about 80 % of its cell. Tilou, exactly as in the attached reference sheet: a small apricot-orange (#FF9A3C) peanut-shaped creature whose big rounded head merges into a soft body, a cream egg-shaped belly, very big glossy dark indigo eyes with two white highlights, soft pink cheeks, a tiny closed smile, short rounded arms with soft mitten tips, two small round feet, a thin dark indigo outline and a soft painted look, and on top of the head a single antenna. The antenna is normally curled like a question mark and ends in a small glowing yellow pearl (#FFD23F); when Tilou is delighted it stands perfectly straight up like an exclamation mark, the pearl at its top glowing brighter. Original character, no resemblance to any existing character. 1) delighted, facing us, big happy smile with no teeth, eyes as happy crescents, glowing cheeks, both hands raised at shoulder height, antenna straight up like an exclamation mark with a bright pearl at its top; 2) curious, three-quarter view looking toward the left side of the image, one hand on its chin, wide sparkling eyes, question-mark antenna with a glowing pearl; 3) excited, three-quarter view looking toward the right side of the image and pointing that way, small round "o" mouth, question-mark antenna with a glowing pearl; 4) cosy and sleepy, facing us, eyes closed, soft smile, antenna curled into a small spiral, pearl dim. Keep the thin dark indigo outline and the soft painted look of the reference.

Layout: a strict regular grid of 2 columns and 2 rows of equal, invisible cells, read left to right then top to bottom. Exactly one element per cell, centered in its cell, all elements at the same scale and seen from the same angle. Generous empty space around each element: nothing touches or overlaps a neighbour or the edge of the image. Background: perfectly flat, uniform light cool grey (#D5DAE1) over the whole image, no gradient, no floor, no cast shadows, no grid lines, no frames, no labels. No text, no letters, no logo, no watermark. Original character, no resemblance to any existing character.
```

| Case | Portrait | Fichier | Ce que Claude en fait |
|---|---|---|---|
| 1 | Ravi « ! » | `marque/tilou-ravi.png` | **Icône de l'app** (Tilou sur fond Indigo ou Lanterne, version adaptative Android : avant-plan et fond séparés), **bannière Android TV** 320 × 180, **photo de profil** des comptes, miniatures M4 |
| 2 | Curieux, regarde à gauche | `marque/tilou-curieux.png` | Miniatures où Tilou est à droite et regarde le sujet |
| 3 | Montre à droite | `marque/tilou-montre.png` | Miniatures où Tilou est à gauche, couvertures 9:16 |
| 4 | Endormi | `marque/tilou-dort.png` | Miniatures du soir, épingle « routine du soir », écran de pause |

**Ce que Claude compose sans crédit** (avec les découpes de BR-1, TI-2 et des fiches A, les polices de la marque et les couleurs des études 08, 14 et 15) :
- **l'icône** de l'app (512 × 512 pour Google Play, et les couches de l'icône adaptative) ;
- **l'image de présentation Google Play** (1 024 × 500) : les 8 animaux en saut de joie (case 15 de chaque fiche) et Tilou (TI-2, case 2), avec le titre ;
- **la bannière Android TV** (320 × 180) et **la bannière YouTube et Facebook** (2 560 × 1 440, zone sûre centrale) ;
- **les gabarits** de miniatures M1 à M10, de couvertures C1 à C6 et d'épingles P1 à P6 de l'étude 14, avec Tilou découpé (BR-1, TI-2) et les fonds de couleur pleine (pas besoin de Flow pour un fond uni à confettis) ;
- **la photo de groupe** « saut de joie » (ancien PS-92) en montage.

**BR-2 · Scène « histoire du soir »** — `PS2-BR2-scene-soir.png` · **Paysage 16:9 · 2K** · ingrédients : `PS2-TI2-tilou-poses.png` + `PS2-CH2-chambre-nuit.png` + `PS2-A0-famille.png` · 2 essais

Le fond de la série « Bonne nuit » (miniature M6 de l'étude 14), sans Somnole, suspendu avec les anciens compagnons. Le tiers gauche reste vide pour le titre.

```
Cosy bedtime scene in the bedroom of the attached night reference, seen from the front. On the right two thirds: Tilou, the small orange mascot of the attached pose sheet, asleep and sitting against a big soft cushion, eyes closed, its antenna curled into a small spiral with a dimmed pearl, next to the bear cub of the attached lineup, also asleep, both lit by a large open storybook that glows with warm golden light. A small paper lantern glows warm yellow (#FFD23F). The window shows a flat deep indigo night (#1E2A5E) with a soft crescent moon and a few stars. The left third of the image is a simple dark indigo wall with nothing on it, left empty for a title. Calm, warm, slow mood. Tilou keeps its thin dark indigo outline; everything else is soft 3D without outline.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.
```

**BR-3 · Scène « devoirs au calme »** — `PS2-BR3-scene-devoirs.png` · **Paysage 16:9 · 2K** · ingrédients : `PS2-TI2-tilou-poses.png` + `PS2-CH1-chambre-jour.png` · 2 essais

Le fond de la série « Révisons au calme » (miniature M7). La partie droite reste vide pour le titre.

```
Cosy study scene at dusk in the style of the attached bedroom reference: a small wooden desk next to a round window showing a soft blue evening sky, a warm desk lamp, a cup of hot cocoa, an open notebook, colored pencils, a small glowing paper lantern and a little hourglass. On the left half, Tilou, the small orange mascot of the attached pose sheet, sits at the desk writing carefully with a pencil, calm and focused, soft smile, antenna as a gentle question mark with a softly glowing yellow pearl. Warm cream tones (#FFF6E8), soft light. The right 40 % of the image is a calm plain cream wall, left empty for a title. Tilou keeps its thin dark indigo outline; everything else is soft 3D without outline.

Style: soft 3D children's illustration that looks like smooth matte vinyl toys, matching the attached reference: rounded shapes only, gentle key light from the top left, soft indigo-tinted shading, a subtle bright rim light along the edges, one small glossy highlight, soft pop colors, no black outline, no texture noise. Friendly, simple and readable from 3 meters away on a TV, for children aged 2 to 9. Original design with no resemblance to any existing character, toy or brand. No text, no letters, no numbers, no logo, no watermark.
```

---

## 4. Les vidéos

### 4.1 Ce qui vaut vraiment un crédit vidéo

**V1 · Le signe de Tilou** (priorité 1) — `PS2-V1-signe.mp4` · **Paysage 16:9 · 1080p** · mode **« Images vers vidéo »** (première et dernière image) · 2 lancements (1 rapide, 1 qualité)

- **Première image** : Claude la compose (`V1-debut.png`, 1 920 × 1 080) : TI-1 case 14 (Tilou « ? », perle allumée) au centre, sur le fond **veillée** de l'app (indigo `#10154A` → `#26348A`, halo chaud au sol).
- **Dernière image** : `V1-fin.png`, même cadre, TI-1 case 8 (ravi, bras levés, antenne « ! »), à la même place.
- **Cadrage** : Tilou occupe le tiers central, à 40 % de la hauteur. Ainsi, un recadrage vertical 9:16 au centre garde Tilou entier : la même vidéo sert de **première seconde des Reels, Shorts et TikTok**.
- **Usage dans l'app** : `splash.js` (`VIDEO`). Claude coupe les 2,4 s utiles, compresse (MP4 H.264 et WebM, moins de 1 Mo), et garde la première image comme affiche. Le son de Veo est retiré : on garde le jingle de la marque.

```
Animate the first frame into the last frame. Tilou, the small orange mascot of the reference, stands alone in the center of a calm dark indigo night background with a soft warm glow on the floor. Static camera, no cut. Tilou bounces gently twice in place with a soft squash and stretch, looking curious, its antenna curled like a question mark with a glowing yellow pearl. Then its eyes light up, the antenna uncurls and snaps straight up like an exclamation mark with a springy little overshoot, the pearl glows brighter with three tiny sparkles, and Tilou raises both arms happily. Smooth, cheerful, gentle, no flashes. The character keeps exactly its shape, colors and thin indigo outline. No text, no music, no voice.
```

**V2 · La révélation** (priorité 2) — `PS2-V2-revelation.mp4` · **Vertical 9:16 · 1080p** · mode **« Ingrédients vers vidéo »** · ingrédients : `ING-tilou.png` + `PS2-TI1-tilou-fiche.png` · 2 lancements

La vidéo de lancement des comptes (Reel, Short, TikTok) et de la page Google Play.

```
A cosy family living room at night, softly lit by a warm lamp. A TV screen on a low cabinet softly lights up with a warm glow. Tilou, the small orange mascot of the references, peeks over the bottom edge of the screen from the inside, both small hands on the frame, its question-mark antenna appearing first with its glowing yellow pearl. Then it pops its head and arms out of the screen, its eyes light up, the antenna snaps straight up like an exclamation mark, the pearl glows brighter, and it waves happily at the viewer. Slow gentle push-in camera, warm and magical mood, no flashes, no people. The character keeps exactly its shape, colors and thin indigo outline. No text, no music, no voice.
```

**V3 · Bonne nuit** (option, priorité 3) — `PS2-V3-bonne-nuit.mp4` · **Paysage 16:9 · 1080p** · « Images vers vidéo » · première image : CH-2 avec Tilou TI-2 case 13 (bâille) ; dernière image : CH-2 avec Tilou TI-2 case 14 (dort) · 0 à 2 lancements

À ne lancer que s'il reste des crédits : Claude obtient presque le même effet avec ces deux images (§ 4.2).

```
Animate the first frame into the last frame inside the same night bedroom. Tilou yawns slowly and stretches, its antenna slowly curls into a small spiral while the yellow pearl dims, then it sits down and closes its eyes, peacefully asleep, while a few soft small z shapes float up and fade. The paper lantern keeps glowing softly. Very calm and slow, static camera, no flashes. The character keeps exactly its shape, colors and thin indigo outline. No text, no music, no voice.
```

### 4.2 Ce que Claude anime lui-même, à partir d'images fixes

Tout est fait en `transform` et `opacity` (règle de performance de l'étude 15, § 4.7), sur des images WebP découpées, ou en SVG. Aucune de ces animations ne demande de crédit.

| Animation | Où dans l'app | Images fixes utilisées | Technique |
|---|---|---|---|
| **Clignement des yeux** | Partout, toutes les 4 à 6 s | Fiche de l'animal, cases **1, 2, 3** (ouverts, mi-clos, fermés) ; Tilou : TI-1 cases **1, 2, 3** | Échange d'images 1 → 2 → 3 → 2 → 1 en 180 ms au total ; deux images suffisent (1 et 3) en mode léger |
| **Respiration** | Partout, en boucle | Case **1** | Échelle verticale 1 → 1,02 ancrée aux pieds, 3,2 s, courbe `--soft` |
| **Regarder le focus** (sans 3D) | Profils, manège | Cases **1** et **4** (et 4 en miroir) | L'animal passe de face à trois-quarts vers l'élément choisi |
| **Tourner sur soi-même** (sans 3D) | Mon animal, ◀ ▶ | Cases **1, 4, 5, 6** + miroirs de 4 et 5 | 8 positions, fondu de 80 ms entre deux |
| **Coucou** | Manège, profils, bonjour | Cases **13, 14** | Alternance 13 ↔ 14, 4 fois, 160 ms par image |
| **Saut de joie** | Bonne réponse | Cases **1, 15** | Écrasement au départ (0,92), montée de 60 px avec étirement (1,06), passage à 15 en l'air, retour à 1, 500 ms, ressort |
| **Penche la tête** | « Presque » | Case **10** (ou 9) | Rotation de 6° autour du cou, 400 ms, ressort |
| **Danse** | Fin de leçon | Case **16** et son **miroir** | Alternance au tempo du jingle, petit rebond à chaque temps |
| **Câlin** | OK sur l'animal | Case **17** | Léger écrasement, 3 cœurs en SVG qui montent |
| **Dodo** | Pause, fin du temps | Case **18** + bonnet de nuit (ACC-1 case 12) + CH-2 | Respiration lente (4,5 s), « z » en SVG qui montent et s'effacent |
| **Clin d'œil, surprise** | Focus sur le profil, coffre | Cases **12, 11** | Échange d'images de 300 ms |
| **Habiller** (aperçu immédiat) | Mon animal | Case **1** + objet découpé (ACC) | Superposition aux 5 points d'accroche ; petit rebond de l'objet à la pose |
| **Antenne de Tilou « ? » → « ! »** | Exercice (bonne réponse), chargement sans vidéo | TI-1 cases **13 à 17** (5 étapes) posées sur la case **18** (sans antenne) | Claude redessine l'antenne en vecteur d'après les 5 étapes et fait passer le tracé de l'une à l'autre (450 ms, ressort) ; halo de la perle en dégradé radial SVG, 3 étincelles. Une version sans vecteur marche aussi : 3 images (13, 15, 17) échangées en 120 ms chacune |
| **Tilou parle** | Bulles, consignes | TI-1 cases **1** et **11** | Bouche ouverte quand la voix dépasse un seuil de volume |
| **Tilou bâille puis s'endort** (remplace V3) | Fin du temps | TI-2 cases **13, 14** + CH-2 | Fondu enchaîné 13 → 14 sur 1,5 s, le halo de la perle s'éteint en 2 s, « z » en SVG |
| **Tilou dépasse du bas de l'écran** | Profils | TI-2 case **15** | Montée de 120 px puis léger balancement (± 2°, 3 s) |
| **Tilou mime ◀ ▶ et OK** | Premier lancement | TI-2 cases **7, 8** | Légers mouvements latéraux, puis pression (écrasement 0,95) |
| **Rebond de chargement** (si V1 n'est pas faite) | Écran de chargement | TI-2 case **2** + antenne vectorielle | Deux rebonds, puis l'antenne « ? » → « ! » |
| **Décor qui dérive** | Parcours, thèmes | TH-5 (par thème) | Translation horizontale très lente (40 s), arrêtée en mode calme |

---

## 5. Le mode d'emploi

### 5.1 Nommer et envoyer les fichiers

1. **Une planche = un lancement** dans Flow, avec le format, les ingrédients et le prompt de la fiche.
2. **Gardez la meilleure sortie**, téléchargez-la dans la qualité demandée (2K le plus souvent), et nommez-la **exactement** comme dans le tableau du § 3, avec le numéro d'essai : `PS2-A1-licorne-v1.png`, `PS2-A1-licorne-v2.png`, `PS2-IMG-3-v1.png`, `PS2-V1-signe-v1.mp4`.
3. **Déposez-la** dans `etude/flow/recu/` (ou envoyez-la dans la conversation). Envoyez aussi l'autre sortie si elle a un bon détail : Claude peut prendre une case dans l'une et une case dans l'autre.
4. **Attendez la validation** pour les planches qui servent d'ingrédient ensuite (A0, CH-1, TI-1, IMG-1, TH-1 à TH-4) ; les autres peuvent s'enchaîner.

### 5.2 Ce que Claude vérifie avant de valider

| Contrôle | Comment | Si ça ne va pas |
|---|---|---|
| **Le compte et l'ordre** | Nombre d'éléments détectés = nombre de cases ; chaque case correspond à la liste (contrôle visuel case par case) | Prompt corrigé, ou la case manquante passe dans IMG-8 (imagier) ou dans le prochain essai |
| **La conformité au personnage** | Couleurs mesurées sur l'image et comparées aux codes de la fiche ; signes distinctifs présents (corne, plaques, rayures, taches, bout de queue blanc…) ; même hauteur et même tête que A0 ; pour Tilou : forme cacahuète, ventre en œuf, antenne en « ? », perle jaune, contour indigo | Retouche des couleurs par Claude si l'écart est faible ; nouvel essai sinon |
| **Le clignement** | Les cases 1, 2 et 3 superposées : seule la zone des yeux doit changer | Nouvel essai de la fiche, ou Claude redessine les paupières en vecteur sur la case 1 |
| **La lisibilité** | Chaque élément réduit à 64 px (pastille de profil) et à 170 px (carte d'exercice), vu en silhouette et en niveaux de gris ; l'imagier doit se reconnaître sans le mot | La case passe en rattrapage (IMG-8) |
| **L'absence de texte** | Aucune lettre, aucun chiffre, aucun faux logo | Effacement par Claude si c'est petit, sinon nouvel essai |
| **Pas de ressemblance avec un personnage existant** | Claude compare aux personnages connus (mascottes d'apps, dessins animés, jouets) ; **les fondatrices font une recherche d'image inversée** (Google Lens) sur A0, chaque fiche A, TI-1 et BR-1 | Modification de la forme distinctive (couleur, oreilles, motif), nouvel essai |
| **Le ton pour enfants** | Pas de dents, pas d'air triste ou effrayé, pas de rouge d'erreur, rien de pointu | Nouvel essai |
| **La vidéo** | Le personnage ne se déforme pas, pas de flash (règle WCAG 2.3.1 de l'étude 15), pas de filigrane visible gênant | Nouvel essai en mode rapide d'abord |

### 5.3 Comment Claude découpe

1. **Lecture de la grille** : la taille de l'image et le nombre de colonnes et de lignes donnent la position de chaque case.
2. **Le fond** : sa couleur est mesurée sur les bords de l'image ; tout ce qui s'en écarte nettement est un élément.
3. **Les éléments** : les taches détectées sont regroupées **par case** (une paire de baskets, des lunettes ou une étincelle forment plusieurs taches, mais une seule case). Si une case est vide ou en a deux, Claude le signale.
4. **Le détourage** : bord adouci, suppression du liseré gris du fond, export en PNG transparent.
5. **La même échelle** : toutes les découpes d'une planche gardent **le même rapport de taille** (pas de mise à l'échelle case par case) ; les animaux et Tilou sont alignés sur la ligne des pieds. C'est ce qui permet aux accessoires de tomber juste.
6. **Les points d'accroche** : pour chaque animal, Claude repère le sommet de la tête, les yeux, le cou, le torse et les pieds sur la case 1, et les enregistre dans un petit fichier (`animaux/<animal>/accroches.json`) lu par `companions.js` et `pet3d.js`.
7. **La planche-contact** : une page avec chaque découpe et son nom, envoyée aux fondatrices pour un dernier coup d'œil.
8. **L'intégration** : versions WebP (512 px pour les animaux et Tilou, 256 px pour l'imagier et les vignettes, 1 920 px pour les décors) dans `/home/user/tvapp/www/media/` : `animaux/`, `tilou/`, `accessoires/`, `imagier/`, `themes/<thème>/`, `chambre/`. Pour l'imagier, une table emoji → image (`imagier/index.json`) est lue au moment de l'affichage : chaque emoji qui a son image est remplacé, les autres restent affichés en attendant. Aucune leçon n'est modifiée.

### 5.4 Les droits

- **Une image faite par IA est mal protégée par le droit d'auteur** (études 03, § 9.2, et 14, § 6.4) : un concurrent pourrait la reprendre. Les décors, l'imagier et les accessoires peuvent être utilisés tels quels dans l'app ; ce sont les personnages qui comptent.
- **Tilou doit être repris par un humain** pour sa version finale (illustrateur ou vous-mêmes), avec une **cession de droits écrite** et **les étapes datées** (planches, croquis, fichiers sources), éventuellement déposées dans une **enveloppe Soleau** (INPI). Même chose, idéalement, pour les 8 animaux avant de les mettre sur des produits.
- **Ne citez jamais** un personnage, un studio, une marque ou un artiste dans un prompt (les prompts de ce document n'en citent aucun).
- **Conservez tout** : chaque essai, avec sa date et son prompt. C'est la preuve du travail humain de sélection et de retouche.
- **Vérifiez les conditions d'utilisation de Flow** pour l'usage commercial, et la présence d'un filigrane visible sur les vidéos selon votre abonnement (les images et vidéos de Google portent aussi un filigrane invisible, SynthID, sans effet sur l'usage).

---

## 6. La check-list, pour chaque planche avant de l'envoyer

- [ ] Le **format** est le bon (carré 1:1 ou paysage 16:9 ; vertical 9:16 pour V2).
- [ ] Les **ingrédients** joints sont ceux de la fiche, **3 au maximum**, et ce sont les versions **validées** (pas un ancien essai).
- [ ] Le **prompt** est collé **en entier**, tel quel, sans rien ajouter.
- [ ] **2 sorties** par prompt pour les images, **1** pour les vidéos.
- [ ] Sur l'image : **le bon nombre de cases**, une seule chose par case, rien qui se touche ni ne déborde.
- [ ] **Le fond est uni**, sans dégradé, sans sol ni ombre (planches à découper).
- [ ] **Aucun texte**, aucun chiffre, aucun logo n'est apparu.
- [ ] Les personnages ont **la même taille** d'une case à l'autre ; les yeux **mi-clos et fermés** sont dans la même pose que la vue de face.
- [ ] Pas de **dents**, pas d'air **triste** ni **effrayé**.
- [ ] Téléchargée en **2K** (1K pour TEST ; 1080p pour les vidéos).
- [ ] **Nommée** `PS2-<code>-<nom>-v<essai>` et déposée dans `etude/flow/recu/`.
- [ ] Pour A0, les fiches A, TI-1 et BR-1 : **recherche d'image inversée** faite, rien de ressemblant.
