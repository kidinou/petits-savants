# Fiche de production Google Flow

> **Mise à jour du 8 novembre 2026 : le plan de production est désormais dans [`16b-planches-flow-optimisees.md`](16b-planches-flow-optimisees.md).** Il remplace la liste, l'ordre et les prompts ci-dessous par **34 grandes planches** (au lieu de 62 prompts), découpées automatiquement par Claude, et **2 vidéos** seulement (+ 1 en option), les petites animations étant faites par Claude à partir d'images fixes. Ne lancez plus les prompts de cette fiche : gardez-la comme historique et comme référence des couleurs et des intentions.

*Tout ce qu'il faut générer, dans l'ordre. Pour chaque élément : le format, la qualité, les images à joindre en « ingrédients », le nom à donner au fichier, puis le prompt à copier-coller.*

**Les images de référence** sont dans le dossier `etude/planches/` :
- `P01-tilou-v2.jpg` : la fiche de Tilou (4 vues) ;
- `P01bis-compagnons-pop-v2.jpg` : les 6 mascottes côte à côte.

Pour les éléments qui le demandent, joignez aussi les fiches validées aux étapes précédentes (`PS-xx`).

> **Mise à jour du 8 novembre 2026 (étude 15, design 2026).** Décision des fondatrices : l'enfant choisit **un animal** comme compagnon et l'habille ; **Tilou** reste la mascotte de la marque (guide, chargement, logo, réseaux) ; les autres Pétillous ne sont plus des compagnons à choisir. Conséquences pour cette fiche :
> - **la nouvelle partie 0 (les animaux compagnons) passe en premier** ;
> - les parties 1.1 à 1.6 (fiches des 5 autres Pétillous) sont **suspendues** : à ne générer que si les fondatrices veulent garder ces personnages comme guides de matières ;
> - la partie 3 (accessoires) vise désormais **les animaux** (prompts adaptés au § 0.3) ; la 3.6 (Tilou en panoplies) reste utile pour les réseaux ;
> - la 4.1 (les doudous) est **abandonnée** : les animaux ne sont plus des doudous, ce sont les compagnons ;
> - la partie 9 bis (décors des thèmes) est nouvelle.
>
> Référence de style pour toute la partie 0 : `design-2026/00-planche-compagnons.png` (rendu « soft 3D » des maquettes) ; référence de proportions : `planches/P01-tilou-v2.jpg`.

**Règles pour toutes les images**
- Générez **4 variantes**, gardez la meilleure, et envoyez-la-moi avec son nom de fichier. Je la valide ou je vous renvoie un prompt corrigé.
- Le style est déjà décrit dans chaque prompt : rien à ajouter.
- Une image validée devient une référence : on la joint aux étapes suivantes.

---

## Le tableau récapitulatif

| N° | Élément | Format | Qualité | Images à joindre | Nom du fichier |
|---|---|---|---|---|---|
| **0. Les animaux compagnons (nouveau, en premier)** ||||||
| 0.1 à 0.8 | Fiche de chaque animal (licorne, dinosaure, chat, chien, lapin, panda, renard, ours) | Paysage 16:9 | 2K | 00-planche-compagnons, P01-tilou-v2 | `PS-A1-licorne.png` … `PS-A8-ours.png` |
| 0.9 | Les 8 animaux côte à côte | Paysage 16:9 | 2K | les 8 fiches validées | `PS-A9-famille-animaux.png` |
| 0.10 | Expressions d'un animal (test sur la licorne, puis les autres) | Paysage 16:9 | 2K | sa fiche | `PS-A10-expr-licorne.png` … |
| 0.11 à 0.14 | Test d'habillage : les 8 avec la même tenue (4 tenues) | Paysage 16:9 | 2K | PS-A9 + planches d'accessoires | `PS-B1-casquette.png` … `PS-B4-pyjama.png` |
| 0.15 | La chambre de l'animal, de jour | Paysage 16:9 | 2K | aucune | `PS-C1-chambre-jour.png` |
| 0.16 | La même chambre, la nuit | Paysage 16:9 | 2K | PS-C1 | `PS-C2-chambre-nuit.png` |
| **1. Les mascottes (suspendu, voir la note en tête)** ||||||
| 1.1 | Fiche de Babil (rose) | Paysage 16:9 | 2K | P01-tilou-v2, P01bis-compagnons-pop-v2 | `PS-11-babil.png` |
| 1.2 | Fiche de Pila (bleu) | Paysage 16:9 | 2K | idem | `PS-12-pila.png` |
| 1.3 | Fiche de Feuillette (vert) | Paysage 16:9 | 2K | idem | `PS-13-feuillette.png` |
| 1.4 | Fiche de Nimbo (violet) | Paysage 16:9 | 2K | idem | `PS-14-nimbo.png` |
| 1.5 | Fiche de Plumo (turquoise) | Paysage 16:9 | 2K | idem | `PS-15-plumo.png` |
| 1.6 | Les 6 côte à côte, sans chevauchement | Paysage 16:9 | 2K | P01-tilou-v2 + les 5 fiches 1.1 à 1.5 | `PS-16-famille.png` |
| **2. Les expressions et les poses** ||||||
| 2.1 à 2.6 | Expressions de chaque mascotte (1 image par mascotte) | Paysage 16:9 | 2K | La fiche de la mascotte | `PS-21-expr-tilou.png` … `PS-26-expr-plumo.png` |
| 2.7 | Poses de Tilou | Paysage 16:9 | 2K | P01-tilou-v2 | `PS-27-poses-tilou.png` |
| 2.8 | Les 5 stades d'évolution de Tilou | Paysage 16:9 | 2K | P01-tilou-v2 | `PS-28-stades.png` |
| **3. Les accessoires** ||||||
| 3.1 | 18 chapeaux, seuls | Carré 1:1 | 2K | PS-16-famille | `PS-31-chapeaux.png` |
| 3.2 | Test : les 6 avec le même chapeau | Paysage 16:9 | 2K | PS-16-famille + PS-31-chapeaux | `PS-32-test-chapeau.png` |
| 3.3 | 14 tenues, seules | Carré 1:1 | 2K | PS-16-famille | `PS-33-tenues.png` |
| 3.4 | 16 accessoires, seuls | Carré 1:1 | 2K | PS-16-famille | `PS-34-accessoires.png` |
| 3.5 | 10 objets de saison | Carré 1:1 | 2K | PS-16-famille | `PS-35-saisons.png` |
| 3.6 | Tilou en 5 panoplies | Paysage 16:9 | 2K | P01-tilou-v2 + 3.1, 3.3, 3.4 | `PS-36-panoplies.png` |
| **4. L'univers** ||||||
| 4.1 | Les 5 doudous (anciens animaux) | Paysage 16:9 | 2K | PS-16-famille | `PS-41-doudous.png` |
| 4.2 | Somnole, le gardien du soir | Paysage 16:9 | 2K | PS-16-famille | `PS-42-somnole.png` |
| 4.3 | Les 8 Pépins | Paysage 16:9 | 2K | PS-16-famille | `PS-43-pepins.png` |
| 4.4 | La cabane : la chambre | Paysage 16:9 | 2K | aucune | `PS-44-chambre.png` |
| 4.5 | La cabane : le jardin | Paysage 16:9 | 2K | PS-44-chambre | `PS-45-jardin.png` |
| 4.6 | La cabane : l'observatoire | Paysage 16:9 | 2K | PS-44-chambre | `PS-46-observatoire.png` |
| 4.7 | 20 meubles de la cabane | Carré 1:1 | 2K | PS-44-chambre | `PS-47-meubles.png` |
| **5. Les images des leçons** ||||||
| 5.1 | Imagier test : 24 mots | Carré 1:1 | 2K | aucune | `PS-51-imagier-test.png` |
| **6. La marque et les magasins** ||||||
| 6.1 | Icône de l'application | Carré 1:1 | 2K | P01-tilou-v2 | `PS-61-icone.png` |
| 6.2 | Image de présentation Google Play | Paysage 16:9 | 2K | PS-16-famille | `PS-62-feature.png` |
| 6.3 | Bannière Android TV | Paysage 16:9 | 1K | P01-tilou-v2 | `PS-63-banniere-tv.png` |
| **7. Les réseaux sociaux** ||||||
| 7.1 | Photo de profil des comptes | Carré 1:1 | 1K | P01-tilou-v2 | `PS-71-profil.png` |
| 7.2 | Bannière YouTube et Facebook | Paysage 16:9 | 2K | PS-16-famille | `PS-72-banniere.png` |
| 7.3 | Modèle d'épingle Pinterest | Vertical 2:3 | 2K | P01-tilou-v2 | `PS-73-pin.png` |
| 7.4 | Modèle de couverture Reel et TikTok | Vertical 9:16 | 2K | P01-tilou-v2 | `PS-74-cover.png` |
| **8. Les vidéos (Veo, dans Flow)** ||||||
| 8.1 | Écran de chargement de l'application | Paysage 16:9 | 1080p | P01-tilou-v2 | `PS-81-chargement.mp4` |
| 8.2 | Le signe de Tilou (« ? » → « ! ») pour les réseaux | Vertical 9:16 | 1080p | P01-tilou-v2 | `PS-82-signe.mp4` |
| 8.3 | Bonne nuit (fin du temps d'écran) | Paysage 16:9 | 1080p | P01-tilou-v2 + PS-44-chambre | `PS-83-bonne-nuit.mp4` |
| 8.4 | La révélation : Tilou sort de la télé | Vertical 9:16 | 1080p | P01-tilou-v2 | `PS-84-revelation.mp4` |

| **9 bis. Les décors des thèmes (nouveau)** ||||||
| 9.1 à 9.4 | Jeu de décor par thème : jungle, princesse, espace, océan | Paysage 16:9 | 2K | 03-parcours.png (mise en page) | `PS-T1-jungle.png` … `PS-T4-ocean.png` |

**L'ordre compte** : faites d'abord la partie 1 et envoyez-la-moi. Les parties 2 et 3 en dépendent. Les parties 4 à 8 peuvent se faire dans n'importe quel ordre ensuite.

---

## Les prompts à copier-coller

### 0. Les animaux compagnons

**Le principe** : 8 animaux qui partagent **la même base** (même hauteur, grosse tête ronde, corps en haricot, petits bras, pieds ronds, mêmes points d'accroche : sommet de la tête, yeux, cou, torse, pieds). C'est ce qui permet de dessiner chaque accessoire une seule fois. Le style est celui des maquettes : **volume doux de jouet en vinyle mat, lumière d'en haut à gauche, ombres teintées, pas de contour noir**, grands yeux brillants indigo à deux reflets, joues roses.

**La liste**

| N° | Animal | Couleurs (corps · ventre · détail) | Signes distinctifs | Nom proposé dans l'app |
|---|---|---|---|---|
| 0.1 | Licorne | blanc lilas `#F7F1FF` · blanc · ombre lilas `#BBA6EE` | corne dorée torsadée, crinière et queue en boules pastel (rose `#FF8CC6`, lilas `#B48CFF`, bleu `#7CC7FF`, menthe `#7FE3C4`), oreilles pointues | Praline |
| 0.2 | Dinosaure | vert `#4FC27F` · crème jaune `#FFF0B5` | plaques orange `#FF9A3C` sur la tête et la queue, museau large, taches vertes plus foncées, pas d'oreilles | Croc |
| 0.3 | Chat | bleu lavande `#9DB3E8` · blanc bleuté | oreilles pointues roses dedans, trois rayures sur le front, moustaches, queue fine en S | Myrtille |
| 0.4 | Chien | biscuit `#F6CF9A` · crème | grandes oreilles tombantes marron `#A9693A`, tache autour d'un œil, petite langue rose | Biscotte |
| 0.5 | Lapin | rose très pâle `#FBEFF3` · blanc | longues oreilles roses dedans, queue en pompon, truffe rose | Guimauve |
| 0.6 | Panda | blanc `#FAFAF6` · noir bleuté `#2E3352` | taches autour des yeux, oreilles, bras et pieds noirs | Bambou |
| 0.7 | Renard | orange `#FF8D3F` · crème | masque blanc des joues, oreilles pointues à bout brun, grande queue à bout blanc | Noisette |
| 0.8 | Ours | brun `#B9835A` · beige `#F3D9B8` | oreilles rondes, museau beige, petite queue | Caramel |

*Évitez l'orange vif pour un autre animal que le renard : c'est la couleur de Tilou.*

**0.1 à 0.8 · Fiche de chaque animal** — Paysage 16:9 · 2K · joindre `design-2026/00-planche-compagnons.png` et `planches/P01-tilou-v2.jpg`

Copiez ce prompt et remplacez la partie entre crochets par la ligne de l'animal :

```
Character turnaround sheet of a cute baby [ANIMAL] for a children's TV learning app, in the exact style of the attached companion sheet: soft 3D look like a matte vinyl toy, gentle light from the top left, soft colored shadows, subtle bright rim light on the edges, no black outline. Chibi proportions: very big round head (about 55 % of the height), small bean-shaped body with a lighter belly, short rounded arms, round feet, big glossy dark indigo eyes with two white highlights, soft pink cheeks, tiny closed smile, no teeth. Four views side by side at exactly the same height, evenly spaced, not overlapping: front, three-quarter, side, back. Plain warm cream background, soft contact shadow under each view, no text, no labels.
```

| N° | Remplacer [ANIMAL] par |
|---|---|
| 0.1 | `unicorn, lilac-white body (#F7F1FF) with lilac shadows, a golden twisted horn, a mane and tail made of soft pastel puffs (pink, lilac, sky blue, mint), small pointed ears with pink inside` |
| 0.2 | `dinosaur, fresh green body (#4FC27F), pale yellow belly, rounded orange plates (#FF9A3C) on top of the head and along the tail, wide friendly snout with two small nostrils, a few darker green spots, no ears, thick short tail` |
| 0.3 | `kitten, soft lavender-blue body (#9DB3E8), white-blue belly, pointed ears pink inside, three small darker stripes on the forehead, thin whiskers, thin S-shaped tail` |
| 0.4 | `puppy, biscuit-beige body (#F6CF9A), cream belly and muzzle, big floppy brown ears (#A9693A), a light brown patch around one eye, tiny pink tongue, short wagging tail` |
| 0.5 | `bunny, very pale pink body (#FBEFF3), white belly, long upright ears pink inside, pink nose, round pompom tail` |
| 0.6 | `panda cub, white body, dark navy-black (#2E3352) round ears, eye patches, arms and feet, white belly, small round tail` |
| 0.7 | `fox cub, bright orange body (#FF8D3F), cream belly and white cheek mask, pointed ears with dark brown tips, big fluffy tail with a white tip` |
| 0.8 | `bear cub, warm brown body (#B9835A), beige muzzle and belly (#F3D9B8), round ears, small round tail` |

**0.9 · Les 8 ensemble** — Paysage 16:9 · 2K · joindre les 8 fiches validées

```
The 8 reference baby animals standing in a row, left to right: unicorn, dinosaur, kitten, puppy, bunny, panda, fox, bear. Exactly the same height and the same body base, evenly spaced with clear space between each one, nobody overlapping, all fully visible, front view, same happy idle pose. Same soft 3D matte vinyl toy style, light from the top left, soft contact shadows. Plain warm cream background, no text.
```

**0.10 · Expressions** — Paysage 16:9 · 2K · joindre la fiche de l'animal

```
Expression and pose sheet of the reference baby animal only, 8 full-body poses in a 4 × 2 grid, evenly spaced: idle smiling, waving with one arm, jumping for joy with both arms up and eyes as happy crescents, head tilted wondering (never sad), dancing, hugging itself with eyes closed, sleeping with a small night cap, looking to its right. Same body, colors and soft 3D style as the reference. No teeth. Plain cream background, no text.
```

**0.11 à 0.14 · Test d'habillage** — Paysage 16:9 · 2K · joindre `PS-A9` et la planche d'accessoires concernée

```
The same 8 baby animals in a row as in the reference, evenly spaced, not overlapping, all wearing the same outfit, placed identically: [TENUE]. Ears, horn and head features stay visible (the unicorn horn goes through the hat). Same soft 3D style. Plain cream background, no text.
```

| N° | Remplacer [TENUE] par |
|---|---|
| 0.11 | `a red baseball cap with a yellow button, a red and cream striped sailor shirt, blue sneakers with white soles` |
| 0.12 | `a blue knitted beanie with a cream pompom and a yellow band, a pink knitted scarf` |
| 0.13 | `round dark indigo glasses, a yellow raincoat with two buttons, yellow rain boots` |
| 0.14 | `a starry night cap and cloud-pattern pyjamas` |

**0.15 · La chambre de l'animal, de jour** — Paysage 16:9 · 2K · aucune image

```
Wide illustration of a cosy child-sized bedroom for a small toy animal, seen from the front like a stage, soft 3D matte toy style, light from the top left: warm peach walls, a big arched window on the left showing green rolling hills and a sun, light wooden floor, a round striped rug in the center-left (empty, to place a character on it), a small shelf and a plant on the sides. Large simple shapes readable from far away, empty right half (a menu will be placed there). No characters, no text.
```

**0.16 · La chambre, la nuit** — Paysage 16:9 · 2K · joindre `PS-C1`

```
The same bedroom as the reference at night: the window shows a deep blue starry sky and a crescent moon, warm light from a small paper lantern, a small leaf-shaped bed on the rug with a pillow and a blanket. Calm, soft, no characters, no text.
```

**Les accessoires adaptés aux animaux** — dans la partie 3, remplacez dans chaque prompt `sized for the small creatures of the reference` par `sized for the baby animals of the reference (big round head, small body)`, joignez `PS-A9` à la place de `PS-16-famille`, et ajoutez à la fin : `Soft 3D matte vinyl toy style, light from the top left, no black outline.` Les 12 objets des maquettes (casquette, bonnet, couronne, chapeau de fête, fleurs, lunettes, écharpe, nœud, marinière, ciré, baskets, bottes) sont prioritaires ; le reste des listes peut suivre.

---

### 1. Les mascottes

**1.1 à 1.5 · Fiche de chaque mascotte** — Paysage 16:9 · 2K · joindre `P01-tilou-v2` et `P01bis-compagnons-pop-v2`

Copiez ce prompt et remplacez la partie entre crochets par la ligne de la mascotte :

```
Character turnaround sheet of ONLY [MASCOTTE] from the reference lineup: same soft peanut-shaped body as the orange reference character, same cream egg-shaped belly, same big glossy dark eyes with white highlights, same pink cheeks, same short rounded arms and feet, same thin dark indigo outline, same soft painted style. Four views side by side at exactly the same height, evenly spaced, not overlapping: front, three-quarter, side, back. Simple thin closed smile, no teeth. Plain cream background, no text, no labels.
```

| N° | Remplacer [MASCOTTE] par |
|---|---|
| 1.1 | `the bubblegum pink creature (#FF4FA3) with a speech-bubble-shaped tuft on its head` |
| 1.2 | `the electric blue creature (#1E90FF) with a round fluffy pompom on its head and three dark dots on its belly` |
| 1.3 | `the apple green creature (#4CD137) with two green leaf-shaped ears` |
| 1.4 | `the vivid violet creature (#A66BFF) with a small white fluffy cloud on its head, with no backpack and no straps` |
| 1.5 | `the turquoise creature (#00C9C8) with a ribbon-like curl on its head ending in a small pencil tip` |

**1.6 · Les 6 côte à côte** — Paysage 16:9 · 2K · joindre `P01-tilou-v2` et les 5 fiches validées

```
The 6 reference characters standing in a row, left to right: orange (question-mark antenna with glowing yellow pearl), pink (speech-bubble tuft), blue (pompom), green (leaf ears), violet (cloud), turquoise (pencil curl). Exactly the same height, evenly spaced with clear space between each one, nobody overlapping, all fully visible, front view, same pose, simple smiles with no teeth. Plain cream background, soft shadow under each, no text.
```

### 2. Les expressions et les poses

**2.1 à 2.6 · Expressions** — Paysage 16:9 · 2K · joindre la fiche de la mascotte (P01-tilou-v2 pour Tilou, PS-11 à PS-15 pour les autres)

```
Expression sheet of the reference character only, 8 head-and-body portraits in a 4 × 2 grid, evenly spaced: curious (head tilted), very happy (eyes as happy crescents, cheeks glowing), thinking, "almost" (small soft pout, kind eyebrows, never sad), encouraging (one hand raised), proud and clapping, surprised (round eyes), sleeping (eyes closed, tiny z). Same body, colors and style as the reference. No teeth. Plain cream background, no text.
```
*Pour Tilou uniquement, ajoutez à la fin :* `The antenna is a question mark when curious or thinking, and snaps straight up into an exclamation mark with a bright glowing pearl when very happy or proud.`

**2.7 · Poses de Tilou** — Paysage 16:9 · 2K · joindre `P01-tilou-v2`

```
Pose sheet of the reference character only, 8 full-body poses in a 4 × 2 grid, evenly spaced: jumping for joy, dancing with both arms up, hugging a small fox plush toy, sitting, walking, pointing to its right, holding a big magnifying glass, yawning and stretching. Same body, colors and style as the reference. No teeth. Plain cream background, no text.
```

**2.8 · Les 5 stades d'évolution** — Paysage 16:9 · 2K · joindre `P01-tilou-v2`

```
Growth chart of the reference character in 5 stages on one line, left to right, growing in size: 1) a tiny glowing ball of warm light with two small eyes and a tiny antenna stub; 2) a baby version with an oversized head and tiny wobbly body; 3) the reference character; 4) a slightly taller version with a longer antenna; 5) the same as 4 with a soft golden glow around the body and golden cheeks. Plain cream background, no text.
```

### 3. Les accessoires

**3.1 · 18 chapeaux** — Carré 1:1 · 2K · joindre `PS-16-famille`

```
Item sheet of 18 hats sized for the small creatures of the reference, each hat alone and centered in its own cell of an even 6 × 3 grid, same scale, same front-facing angle, generous empty space around each: pompom beanie, baseball cap, beach bucket hat, painter's beret, straw hat, big flower to wear on the head, party hat, explorer helmet, crown of leaves, astronaut helmet, starry night cap, chef's hat, golden crown, glowing mushroom hat, crown of tiny paper lanterns, scholar's cap with tassel, winter elf hat, spring bunny-ear headband. Same soft painted style and thin indigo outline as the reference, bright pop colors. Plain cream background, no text.
```

**3.2 · Test : les 6 avec le même chapeau** — Paysage 16:9 · 2K · joindre `PS-16-famille` et `PS-31-chapeaux`

```
The same 6 creatures in a row as in the reference, evenly spaced, not overlapping, each wearing the same red party hat from the hat sheet, placed identically on top of the head, behind or around their head feature (antenna, tuft, pompom, leaves, cloud, curl) so it stays visible. Plain cream background, no text.
```

**3.3 · 14 tenues** — Carré 1:1 · 2K · joindre `PS-16-famille`

```
Item sheet of 14 outfits sized for the small creatures of the reference, each alone and centered in its own cell of an even grid, same scale, front view, generous empty space around each: overalls, turtleneck sweater, yellow raincoat, cloud-pattern pyjamas, scientist lab coat, explorer outfit with pockets, reader's superhero cape with a book symbol, tutu, sports jersey, space suit, cardboard knight armour, cosy dragon costume, friendly polka-dot ghost sheet, knitted winter sweater. Same soft painted style and thin indigo outline, bright pop colors. Plain cream background, no text.
```

**3.4 · 16 accessoires** — Carré 1:1 · 2K · joindre `PS-16-famille`

```
Item sheet of 16 small accessories, each alone and centered in its own cell of an even 4 × 4 grid, same scale, generous empty space around each: knitted scarf, bow tie, round glasses, small backpack, flower to tuck behind the ear, round badge with an open book, giant magnifying glass, school satchel, spyglass, balloon, umbrella, ukulele, glowing butterfly wings, pocket lantern, round medal on a ribbon, basket of painted eggs. Same soft painted style and thin indigo outline, bright pop colors. Plain cream background, no text.
```

**3.5 · 10 objets de saison** — Carré 1:1 · 2K · joindre `PS-16-famille`

```
Item sheet of 10 seasonal items, each alone and centered in its own cell of an even 5 × 2 grid, same scale, generous empty space around each: friendly polka-dot ghost sheet, smiling pumpkin lantern, knitted winter sweater, small snowman, winter elf hat, feathered carnival mask, basket of painted eggs, arch of spring flowers, beach bucket hat, golden ukulele. Same soft painted style and thin indigo outline, bright pop colors. Plain cream background, no text.
```

**3.6 · Tilou en 5 panoplies** — Paysage 16:9 · 2K · joindre `P01-tilou-v2`, `PS-31`, `PS-33`, `PS-34`

```
The orange reference character shown 5 times side by side, evenly spaced, each wearing a complete themed set from the item sheets: 1) explorer (explorer helmet, explorer outfit, magnifying glass, backpack); 2) scientist (lab coat, round glasses, scholar's cap); 3) bedtime (starry night cap, cloud pyjamas, holding a small pillow); 4) rainy day (yellow raincoat, umbrella); 5) party (party hat, balloon, bow tie). The antenna always stays visible. Plain cream background, no text.
```

### 4. L'univers

**4.1 · Les 5 doudous** — Paysage 16:9 · 2K · joindre `PS-16-famille`

```
Five small plush toys in a row, sewn soft-toy look with visible stitches, slightly worn and loved, embroidered eyes: a fox plush, a bear plush, a rabbit plush, a panda plush, a unicorn plush. Same size, front view, evenly spaced. Same soft painted style and thin indigo outline as the reference. Plain cream background, no text.
```

**4.2 · Somnole** — Paysage 16:9 · 2K · joindre `PS-16-famille`

```
Original character sheet in the same style as the reference creatures: a big soft living cushion, rounded corners, deep night-blue fabric (#2E3D7C) with small embroidered yellow stars, a long starry night cap with a pompom, sleepy kind half-closed eyes, small stubby arms holding a tiny glowing paper lantern. Front, three-quarter and side views, then 3 small expressions: yawning, gently smiling, sleeping. No teeth. Plain cream background, no text.
```

**4.3 · Les 8 Pépins** — Paysage 16:9 · 2K · joindre `PS-16-famille`

```
Sheet of 8 tiny seed-shaped companion creatures, each the size of a bean, with two dot eyes, pink cheeks and a tiny sprout on top, in an even 4 × 2 grid, each with its own theme and pop color: moss, bubble, ember, water drop, pebble, pollen, snowflake, moon. Same soft painted style and thin indigo outline as the reference. Plain cream background, no text.
```

**4.4 · La chambre** — Paysage 16:9 · 2K · aucune image

```
Wide illustration of the inside of a cosy round wooden cabin built in a giant tree, seen from the front like a stage, for a children's TV app. Empty room ready to be decorated: light wooden floor, round window showing a starry sky, soft warm light, bright pop accents, large simple shapes readable from far away. Soft painted style, thin dark outline. No characters, no text.
```

**4.5 · Le jardin** — Paysage 16:9 · 2K · joindre `PS-44-chambre`

```
Same style as the reference room: a small garden on a wide tree branch outside the cabin, with paper lanterns, a little fence and flowers, daylight, bright pop colors, seen from the front like a stage, empty space to place items. No characters, no text.
```

**4.6 · L'observatoire** — Paysage 16:9 · 2K · joindre `PS-44-chambre`

```
Same style as the reference room: a small round observatory room at the very top of the tree with a dome window open to the stars, night, warm lamp light, seen from the front like a stage, empty space to place items. No characters, no text.
```

**4.7 · 20 meubles** — Carré 1:1 · 2K · joindre `PS-44-chambre`

```
Furniture item sheet for the reference cabin, each item alone and centered in its own cell of an even 5 × 4 grid, front view, same scale, generous empty space around each: leaf-shaped bed, cushion, round rug, potted plant, mushroom lamp, small shelf, stool, treasure box, desk, bookcase, chalkboard, globe, hammock, string lights, cloud-shaped armchair, telescope, small piano, aquarium with glowing fish, birdhouse, swing. Same style as the reference, bright pop colors. Plain cream background, no text.
```

### 5. Les images des leçons

**5.1 · Imagier test** — Carré 1:1 · 2K · aucune image

```
Picture-dictionary sheet for children learning to read, 24 everyday things in an even 6 × 4 grid, one per cell, each instantly recognizable, simple, front or three-quarter view, same scale, generous space around each: ball, moon, cup, fir tree, tomato, rabbit, hand, cat, motorbike, turtle, house, sun, apple, fish, car, book, shoe, bird, flower, boat, key, cake, dog, star. Soft painted style, thin dark indigo outline, bright pop colors. Plain white background, no text, no letters.
```
*Si le rendu vous plaît, je vous prépare la liste complète des mots des leçons, rangée en planches de 24.*

### 6. La marque et les magasins

**6.1 · Icône de l'application** — Carré 1:1 · 2K · joindre `P01-tilou-v2`

```
App icon, square with rounded corners. Bright solid background in electric blue (#1E90FF). The orange reference character's upper half fills about 60 % of the icon, rising from the bottom edge, big glossy eyes, pink cheeks, simple smile, and its antenna standing straight up as an exclamation mark ending in a bright glowing yellow pearl near the top. Bold, simple, high contrast, readable at very small size. No text.
```

**6.2 · Image de présentation Google Play** — Paysage 16:9 · 2K · joindre `PS-16-famille`
*(Je la recadrerai au format exigé, 1024 × 500, et j'ajouterai le texte moi-même.)*

```
Wide banner for a children's learning app: on the right half, the 6 reference creatures standing in a row, happy, waving, evenly spaced; on the left half, a big rounded TV screen showing a simple colorful lesson with four answer cards. Bright white background with a few pop-colored confetti dots. Leave the top-left area empty for a title. No text.
```

**6.3 · Bannière Android TV** — Paysage 16:9 · 1K · joindre `P01-tilou-v2`
*(Je la recadrerai au format exigé, 320 × 180, et j'ajouterai le nom.)*

```
Simple wide banner, bright white background with pop-colored confetti dots, the orange reference character on the left side, smiling, antenna as an exclamation mark with a glowing yellow pearl, leaving the right two thirds empty for the app name. No text.
```

### 7. Les réseaux sociaux

**7.1 · Photo de profil** — Carré 1:1 · 1K · joindre `P01-tilou-v2`

```
Round profile picture composition: the orange reference character's head and shoulders, centered, big smile, antenna as an exclamation mark with a glowing yellow pearl, on a solid bubblegum pink background (#FF4FA3). Simple, bold, readable when very small. No text.
```

**7.2 · Bannière YouTube et Facebook** — Paysage 16:9 · 2K · joindre `PS-16-famille`

```
Very wide banner: the 6 reference creatures in a row in the middle third of the image, happy, evenly spaced, on a bright white background with pop-colored confetti dots and soft rounded shapes on the sides. Keep everything important in the central horizontal band. No text.
```

**7.3 · Modèle d'épingle Pinterest** — Vertical 2:3 · 2K · joindre `P01-tilou-v2`

```
Vertical background for a printable worksheet pin: bright white with pop-colored confetti dots around the border, the orange reference character in the bottom-right corner pointing up toward the center, a large empty space in the middle and top for text. No text.
```

**7.4 · Modèle de couverture Reel et TikTok** — Vertical 9:16 · 2K · joindre `P01-tilou-v2`

```
Vertical cover background: solid bubblegum pink (#FF4FA3) with a few white and yellow confetti dots, the orange reference character in the lower third, big and happy, antenna as an exclamation mark, leaving the top half empty for a big title. No text.
```

### 8. Les vidéos

**8.1 · Écran de chargement** — Paysage 16:9 · 1080p · 3 secondes · joindre `P01-tilou-v2`

```
The orange reference character alone in the center of a plain white background, front view, static camera. It bounces gently twice looking curious with its question-mark antenna, then the antenna straightens up into an exclamation mark, the pearl lights up bright yellow with little sparkles, and it raises both arms happily. Smooth, cheerful, 3 seconds, no text, no sound needed.
```

**8.2 · Le signe de Tilou** — Vertical 9:16 · 1080p · 4 secondes · joindre `P01-tilou-v2`

```
The orange reference character on a solid bubblegum pink background, looking at something off-screen with its question-mark antenna, then its eyes light up, the antenna snaps straight up into an exclamation mark with a soft springy bounce and the pearl glows bright yellow with sparkles. Static camera, 4 seconds, no text.
```

**8.3 · Bonne nuit** — Paysage 16:9 · 1080p · 6 secondes · joindre `P01-tilou-v2` et `PS-44-chambre`

```
Inside the reference cabin room at night, the orange reference character yawns, its antenna slowly curls into a small spiral and the pearl dims, then it lies down on a leaf-shaped bed and closes its eyes, a few small z letters float up. Calm, slow, static camera, 6 seconds, no text.
```

**8.4 · La révélation** — Vertical 9:16 · 1080p · 6 secondes · joindre `P01-tilou-v2`

```
A cosy living room at night, a TV screen softly lights up, and the orange reference character peeks over the bottom edge of the screen, hands on the frame, then pops its head out, antenna snapping into an exclamation mark with a glowing pearl, and waves at the viewer. Warm, magical, slow push-in camera, 6 seconds, no text.
```


### 9 bis. Les décors des thèmes

Chaque thème à univers (étude 15, § 5) a besoin d'un jeu d'images qui remplace les collines et les nuages du thème Pop. Une image par thème suffit pour commencer : je la découpe en plans.

**9.1 à 9.4 · Jeu de décor** — Paysage 16:9 · 2K · joindre `design-2026/03-parcours.png` (pour la place laissée à la route et aux leçons)

```
Wide background for a children's TV learning app in a soft 3D matte toy style, light from the top left, made of three clearly separated horizontal layers (far, middle, front) so it can be cut apart: [UNIVERS]. Keep the middle third of the image calm and low in detail because a winding path with round lesson buttons will be drawn over it. Large simple shapes readable from far away, soft colors, no characters, no text.
```

| N° | Fichier | Remplacer [UNIVERS] par |
|---|---|---|
| 9.1 | `PS-T1-jungle.png` | `a friendly jungle: big round leaves and lianas in the far layer, soft green hills in the middle, ferns and a few flowers in the front, a small colorful parrot sitting on a branch on the right edge` |
| 9.2 | `PS-T2-princesse.png` | `a pastel fairy-tale land: a small lilac castle with pointed towers far away, soft lilac and pink hills in the middle, flowers and little pennant flags in the front` |
| 9.3 | `PS-T3-espace.png` | `a gentle outer space at night: deep indigo sky with soft stars and two small round planets with rings far away, smooth violet moon hills in the middle, small craters and a tiny friendly rocket in the front corner` |
| 9.4 | `PS-T4-ocean.png` | `a sunny seaside: turquoise sea with soft waves far away, sandy dunes in the middle, shells, a starfish and small rocks in the front corners` |

---

## Ce que je fais avec vos fichiers

- **Je valide ou je corrige** : je compare à la fiche de référence (forme, couleurs, antenne, lisibilité de loin) et je vous renvoie un prompt ajusté si besoin.
- **Je les intègre dans l'application** :
  - les fiches des animaux servent de référence aux modèles 3D et aux dessins de secours (les animaux restent les compagnons, Tilou reste la mascotte) ;
  - les accessoires deviennent les cadeaux ;
  - la chambre (0.15, 0.16) devient le décor de « Mon animal » et de l'écran de pause ;
  - les décors des thèmes (9 bis) vont dans `media/themes/` ;
  - l'imagier remplace les emojis ;
  - la vidéo 8.1 remplace le dessin de l'écran de chargement.
- **Je prépare les formats des magasins** : je recadre l'icône, l'image de présentation Google Play et la bannière télé aux tailles exigées, et j'ajoute les textes.

**Rappel** : une image faite par IA est mal protégée par le droit d'auteur. Pour la version finale des mascottes, une reprise par un humain reste nécessaire (vous-mêmes, ou un illustrateur), en gardant les étapes datées.
