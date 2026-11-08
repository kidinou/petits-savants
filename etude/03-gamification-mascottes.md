# Gamification éthique et mascottes : le système « Pétillous »

*Étude 03, Petits Savants, novembre 2026. Rôle : game design pour les 2 à 9 ans et character design.*

> **En une phrase.** Remplacer « un animal générique + 6 cadeaux + une flamme » par une famille de 7 créatures propres à la marque, les **Pétillous**, menée par **Tilou**, une mascotte dont l'antenne en forme de « ? » se redresse en « ! » quand l'enfant comprend. Elle s'accompagne d'une économie qui récompense la maîtrise et la persévérance plutôt que le volume, d'un catalogue d'environ 120 objets sans hasard payant et d'une série qui ne culpabilise jamais. La même mascotte doit pouvoir vivre sur YouTube, en peluche et en coloriage.

---

## 1. Diagnostic du système actuel

Sources : captures `1-accueil.png`, `4-bravo.png`, `5-mon-animal.png`, `6-espace-parents.png`, `8-premium.png` et le site.

### Ce qui est déjà bon (à garder absolument)

| Élément | Pourquoi c'est bien |
|---|---|
| « Presque ! » et réessai sans pénalité | Pas d'échec punitif. C'est la base de la persévérance. |
| Mesure « du premier coup » (5/5) | Elle donne déjà un signal de **maîtrise**, et pas seulement de complétion. On s'en servira pour l'économie. |
| « Encore 14 min aujourd'hui » et limite de 30 min réglée par le parent | La limite est visible par l'enfant et l'animal « s'endort » à la fin. C'est rare et précieux. |
| Ni pub, ni compte, ni donnée collectée | C'est conforme à l'esprit des recommandations de la [CNIL](https://www.cnil.fr/fr/la-cnil-publie-8-recommandations-pour-renforcer-la-protection-des-mineurs-en-ligne) (pas de profilage). Les parents y verront un argument de confiance. |
| Animal qui saute, danse et dort, câlin sur « OK » | La relation affective existe déjà. |

### Ce qui pose problème

1. **Le catalogue est épuisé en une semaine.** Les 6 cadeaux coûtent 330 étoiles au total. Une leçon parfaite rapporte +20 et la quête +20, donc un enfant régulier possède tout en 5 à 7 jours (la capture montre déjà 124 étoiles). Ensuite, la monnaie ne sert plus à rien et la motivation extrinsèque s'effondre d'un coup.
2. **« Étoile » a deux sens.** Les ★★★ notent la qualité d'une leçon sur la carte, et les « étoiles » servent aussi de monnaie. Un enfant de 5 ans ne fait pas la différence, et un parent non plus.
3. **« Tous les cadeaux » sont un argument Premium.** C'est écrit sur l'écran Premium et sur le site. Mettre des objets désirables pour l'enfant derrière un paiement crée de la *pester power* (« Maman, achète ! »). Les [règles Familles de Google Play](https://support.google.com/googleplay/android-developer/answer/9893335) couvrent toute « offre d'achat intégré » et interdisent les pratiques de monétisation manipulatrices. Les [lignes directrices de la Commission sur l'article 28 du DSA](https://digital-strategy.ec.europa.eu/en/library/commission-publishes-guidelines-protection-minors) (juillet 2025) visent précisément l'exploitation du manque de littératie commerciale des enfants. Le risque est réglementaire mais aussi d'image : le jeu [Prodigy](https://www.axios.com/2021/02/19/prodigy-math-game-ftc-complaint) a fait l'objet d'une plainte de 22 associations auprès de la FTC, notamment parce que les membres payants obtenaient de meilleurs objets que les non-payants ([plainte complète](https://fairplayforkids.org/wp-content/uploads/2021/02/Prodigy_Complaint_Feb21.pdf)).
4. **La série de jours consécutifs (flamme 7) joue sur l'aversion à la perte.** Duolingo l'assume : son équipe rétention explique qu'à partir de 7 jours [l'aversion à la perte « s'enclenche »](https://www.lennysnewsletter.com/p/behind-the-product-duolingo-streaks), et la réparation payante de série a été recensée comme [motif trompeur](https://www.deceptive.design/articles/when-a-user-uses-duolingo-on-a-series-of-consecutive-days-this-is-called-a-streak-if-users-miss-a-day-they-can-pay-to-repair-it). Pour un enfant de 4 ans qui ne choisit pas ses journées (garde alternée, maladie, vacances), perdre sa flamme est injuste. Rien n'est prévu aujourd'hui pour la série perdue.
5. **La quête « Termine 3 leçons » mesure le volume.** Elle pousse à enchaîner, et non à varier ou à réviser. Avec 14 minutes restantes, l'enfant qui « veut finir sa quête » se presse et répond au hasard.
6. **Le badge « Sans faute » récompense la perfection.** La recherche de [Mueller et Dweck (1998)](https://www.columbia.edu/cu/psychology/courses/3615/Readings/Mueller_Dweck.pdf) montre que louer le résultat ou l'intelligence fragilise la motivation après un échec, alors que louer l'effort la protège. Il manque un badge de persévérance.
7. **Les animaux sont génériques.** Un renard, un ours, un panda ou une licorne ne s'enregistrent pas comme marque, ne racontent rien et ressemblent à cent autres applications. Ils ne peuvent porter ni peluche, ni chaîne YouTube, ni notoriété.
8. **Le bouton « Mon animal » apparaît à chaque fin de leçon.** Il tire l'enfant vers la boutique au moment où il devrait souffler. C'est discutable, mais secondaire.
9. **Les vignettes de cadeaux sont des emojis.** Leur style plat ne correspond pas à l'animal en 3D et l'ensemble manque de cohérence visuelle.

**Verdict.** La base éthique est saine (pas de pub, limite de temps, pas de pénalité). La couche de jeu, en revanche, est mince, s'épuise vite et emprunte deux mécaniques à risque : la série consécutive et des cadeaux réservés au Premium.

---

## 2. Principes de conception (le « contrat » du système)

Ces principes viennent de la recherche et de la réglementation. Ils servent de filtre à toute idée future.

1. **Récompenser l'apprentissage, jamais la simple présence.** On ne donne pas de cadeau de connexion quotidienne. La méta-analyse de [Deci, Koestner et Ryan (1999, 128 études)](https://depts.washington.edu/techdocs/papers/deciExtrinsicRewardsAndIntrinsicMotivation99.pdf) montre que les récompenses tangibles **attendues** et liées à la tâche sapent la motivation intrinsèque. L'expérience fondatrice de [Lepper, Greene et Nisbett (1973)](https://www.structural-learning.com/post/overjustification-effect) l'a montré chez des enfants de maternelle qui aimaient dessiner. On en tire trois règles : (a) la monnaie n'est **pas** affichée pendant l'exercice, seulement à la fin ; (b) une partie des récompenses est **inattendue** (surprises) ; (c) le retour est **informatif** (« tu as trouvé le son [ch] du premier coup ») et non contrôlant (« fais 3 leçons pour gagner »).
2. **Pas de hasard lié à une valeur.** Il n'y a ni coffre aléatoire, ni gacha, ni « œuf surprise » acheté avec des points. Le DSA recommande d'éviter les [loot boxes et les monnaies virtuelles intermédiaires](https://www.osborneclarke.com/insights/new-european-guidelines-issued-protect-minors-digital-environment). Notre monnaie ne s'achète **jamais** avec de l'argent réel, ce qui doit être écrit dans les CGU.
3. **Rien ne se perd et rien ne meurt.** C'est l'anti-Tamagotchi : le Tamagotchi original mourait après quelques heures de négligence, et des enfants en ont éprouvé une [culpabilité et un deuil réels](https://www.mentalfloss.com/article/642373/tamagotchi-history). Un Pétillou n'est jamais malade, triste ou affamé à cause d'une absence.
4. **Pas de pression du personnage.** L'étude de [Radesky et al. (JAMA Network Open, 2022)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9206186/) sur des enfants de 3 à 5 ans a trouvé un design manipulateur dans **80 %** des applications utilisées. Le premier procédé relevé est la « pression parasociale » : un personnage qui pleure ou supplie pour qu'on continue. Tilou ne supplie jamais.
5. **Les « coups de pouce » ne vont que vers le bien-être.** Le [Children's Code britannique (standard « nudge techniques »)](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/age-appropriate-design-a-code-of-practice-for-online-services/13-nudge-techniques/) interdit les incitations défavorables à l'enfant mais autorise celles qui encouragent les pauses. Le bouton le plus visible en fin de journée sera donc « Finir pour aujourd'hui ».
6. **Le parent reste le seul destinataire commercial.** Aucune offre Premium n'est montrée à l'enfant, et toutes les notifications vont au parent. C'est cohérent avec la [Recommandation CM/Rec(2018)7 du Conseil de l'Europe](https://rm.coe.int/16808d881a) (intérêt supérieur de l'enfant, responsabilité des entreprises) et avec la [recommandation 8 de la CNIL](https://cnil.fr/fr/recommandation-8-prevoir-des-garanties-specifiques-pour-proteger-linteret-de-lenfant).
7. **Le système repose sur l'autonomie, la compétence et le lien** (théorie de l'autodétermination). Pour l'autonomie, l'enfant choisit son compagnon, sa matière et ses objets. Pour la compétence, les stades suivent la maîtrise. Pour le lien, la mascotte se souvient de ce qu'on a appris ensemble.

### Ce qu'on retient des références

| Référence | À reprendre | À éviter |
|---|---|---|
| **Duolingo et Duo** | Une mascotte avec une vraie personnalité, déclinée partout ; le gel de série ([blog Duolingo](https://blog.duolingo.com/how-duolingo-streak-builds-habit)) | Les notifications culpabilisantes, devenues l'[ADN marketing de Duo](https://www.lippincott.com/ideas/go-to-brand-spotlight-duolingo/) (jusqu'à sa « mort » mise en scène en 2025, [Fast Company](https://www.fastcompany.com/91313082/duolingo-dead-duo-owl-social-media-campaign)) ; la réparation payante de série |
| **Khan Academy Kids** | Des personnages qui ont une **chambre** et des **collections qui grandissent** à mesure que l'enfant apprend ([aide Khan Kids](https://khankids.zendesk.com/hc/en-us/articles/360049358751-Learn-more-about-the-characters-inside-Khan-Academy-Kids)) ; Kodi en papier à imprimer ([Kodi On The Go](https://blog.khanacademy.org/kodi-on-the-go/)) | Rien de notable : c'est le modèle éthique de référence ([gratuit, sans pub](https://apps.apple.com/us/app/khan-academy-kids/id1378467217)) |
| **Lingokids** | Une famille de personnages par univers | Le contenu gratuit limité, les minuteurs frustrants et les plaintes de facturation ([avis parents Common Sense](https://www.commonsensemedia.org/app-reviews/lingokids-play-and-learn/user-reviews/adult)) |
| **Pokémon** | L'évolution par stades (grandir est un événement) ; le plaisir de compléter une collection | Les boosters à contenu aléatoire, qui relèvent du hasard payant |
| **Animal Crossing** | L'horloge réelle, les saisons, une maison à décorer, des fêtes annuelles ([GameSpot](https://www.gamespot.com/articles/how-animal-crossing-was-born-from-one-of-nintendos/1100-6475342/)) | L'« inconvénient volontaire » assumé par son créateur pour faire revenir le joueur ([Game Developer](https://gamedeveloper.com/design/book-excerpt-animal-crossing)) |
| **Tamagotchi** | Un attachement fort à une petite créature | La mort par négligence et la culpabilité ([Wellcome Collection](https://wellcomecollection.org/stories/digital-pets)) |
| **Toca Boca** | Le jeu ouvert : ni score, ni minuteur, ni « Game Over » ([analyse](https://screenwiseapp.com/guides/the-parents-guide-to-toca-boca-games-why-theyre-the-gold-standard)) ; la maison comme espace d'expression | La vente de lieux à l'unité, critiquée par les parents |
| **Prodigy** | Rien | Le pay-to-win, la [publicité pour l'abonnement adressée à l'enfant](https://www.edweek.org/technology/popular-interactive-math-game-prodigy-is-target-of-complaint-to-federal-trade-commission/2021/02) (16 incitations contre 4 problèmes de maths en 19 minutes, selon la plainte) |

---

## 3. L'univers et les mascottes

### 3.1 L'univers : l'Arbre-à-Pourquoi

**Lieu.** Au bout du ciel pousse un arbre immense, l'**Arbre-à-Pourquoi**. Chacune de ses grosses branches correspond à une matière : la branche des Mots, celle des Nombres, celle du Monde, celle des Langues et celle des Traces. Des cabanes rondes y sont accrochées, reliées par des passerelles et éclairées par des lanternes.

**Histoire (racontée en 30 secondes au premier lancement).**
> « Chaque fois qu'un enfant se pose une question, une petite lumière naît dans les feuilles de l'Arbre-à-Pourquoi : c'est un **Pétillou**. Les Pétillous sont curieux de tout, mais ils ne savent pas encore grand-chose. Quand l'enfant apprend, son Pétillou *pétille* : il grandit, il allume une lanterne de l'arbre et il décore sa cabane. Et quand vient le soir, Somnole bâille… et tout l'arbre s'endort. »

Il n'y a ni méchant ni menace, seulement une quête positive : rallumer toutes les lanternes de l'arbre, c'est-à-dire toutes les leçons. Le soir intégré au récit (Somnole) donne une **raison narrative à la limite de temps d'écran**.

**Vocabulaire maison** (cohérent et simple à prononcer) :
- **Étincelles ✨** : la monnaie qu'on dépense. Elles remplacent les « étoiles-monnaie ».
- **Étoiles ★** : la note de maîtrise d'une leçon sur la carte (1 à 3). Elles ne se dépensent pas.
- **Lanternes** : les jours où l'on a appris (la nouvelle série, voir § 5.5).
- **Lumières** : la jauge de croissance du Pétillou (leçons maîtrisées et révisions).
- **Pépins** : de toutes petites créatures-graines qui servent de compagnons.

### 3.2 La famille des Pétillous

Il y a 7 créatures. Chacune a une **silhouette unique, reconnaissable en ombre chinoise**. C'est le test numéro un d'un personnage de marque, car l'enfant doit pouvoir l'identifier en 64 px sur une télé à 3 mètres. Tous partagent le même ADN : un corps rond et doux, de grands yeux brillants, des joues qui s'illuminent quand ils sont contents (« ils pétillent »), des petites mains en moufle et des pieds courts.

Règle commune pour l'illustrateur : **pas de bouche moqueuse, pas de dents pointues, pas d'expression de reproche**. La palette va du chaud au pastel, avec un contraste suffisant sur le fond bleu clair de l'application (#EAF4FF environ).

---

#### ⭐ Tilou, le guide (mascotte principale de la marque)

- **Matière** : aucune, il les aime toutes. C'est le compagnon par défaut et la voix de l'application.
- **Personnalité** : curieux, enthousiaste et un peu étourdi. Il pose des questions plus qu'il ne donne de réponses. Il se trompe parfois, et c'est très bien comme ça.
- **Signature visuelle** : une **antenne enroulée en forme de point d'interrogation**, terminée par une petite boule lumineuse. Quand l'enfant trouve la bonne réponse, l'antenne **se redresse d'un coup en point d'exclamation** et la boule s'allume. C'est le geste de marque (voir § 8).
- **Style** : corps en forme de haricot, couleur abricot doré, ventre crème, joues roses lumineuses.
- **Phrase fétiche** : **« Ça pétille ! »** Après une erreur : « Presque ! On réessaie ensemble ? »

**Pourquoi Tilou est le « Duo » de Petits Savants.**
1. Il **incarne la promesse** du produit : passer de la question à la compréhension (« ? » → « ! »). Le hibou de Duolingo n'a pas de lien avec la langue ; Tilou, si.
2. Il est **généraliste** : il ne s'enferme pas dans une matière et peut parler de tout sur les réseaux.
3. Sa **silhouette** (haricot et antenne en « ? ») est simple, unique, faisable en peluche, en autocollant et en icône d'application.
4. Il permet un **positionnement opposé à Duo** : « la mascotte qui ne vous culpabilise jamais ». C'est un argument fort auprès des parents (§ 8).
5. Son nom est **bilingue** : deux syllabes, prononçable dès 2 ans, sans accent, utilisable en anglais.

**Prompt de design (illustrateur ou IA de concept)**
> *Original mascot character design sheet for a children's educational brand. A small bean-shaped creature, soft and squishy, apricot-golden body (#FFB347 to #FFC861 gradient), cream belly patch, rosy glowing cheeks, very large glossy dark eyes with two white highlights, tiny smiling mouth. On top of its head, a single curly antenna shaped like a question mark, ending in a small glowing yellow orb. Short stubby arms with mitten hands, two small round feet, no visible neck. Friendly, curious, slightly clumsy attitude. Rounded shapes only, no sharp angles. Flat-shaded 3D look like soft vinyl toy, gentle rim light, clean white background. Turnaround: front, 3/4, side, back. Plus expression sheet: curious, delighted (antenna straightened into an exclamation mark, orb glowing), thinking, sleepy, encouraging. Readable silhouette at small size. Original design, no resemblance to existing characters, no text, no logo.*

---

#### Babil, Langage et français

- **Personnalité** : un vrai moulin à paroles. Il adore les rimes et les chansons, et invente des mots rigolos.
- **Signature** : son corps a la forme d'une **bulle de bande dessinée**, et sa queue en est la pointe. Quand il parle, de petites lettres en relief s'échappent et flottent autour de lui.
- **Style** : violet lavande, ventre lilas, lettres colorées.
- **Phrase fétiche** : « Ça rime avec… quoi ? »
- **Prompt** : *Original cute creature shaped like a rounded comic speech bubble, lavender purple (#9B7BE0) with lilac belly, the bubble's pointed tail forms its little tail, big expressive eyes, wide happy open mouth as if singing, tiny mitten hands, small colorful 3D letters (a, b, o) floating around it. Soft vinyl-toy 3D render, rounded forms, white background, turnaround and 5 expressions (chatty, laughing, listening, surprised, sleepy). No text, original design.*

#### Pila, Nombres et maths

- **Personnalité** : méthodique, patient et fier de ses tours. Il est un peu maladroit : sa tour s'écroule parfois, et il en rit. Il apprend aux enfants que se tromper fait partie du jeu.
- **Signature** : son corps est fait de **3 blocs arrondis empilés** (tête, ventre, pieds) qui portent des points comme des faces de dé (1, 2, 3). Il peut se réempiler dans un autre ordre.
- **Style** : bleu canard et turquoise, points blancs.
- **Phrase fétiche** : « Patatras ! … On recompte ensemble ? Un, deux… trois ! »
- **Prompt** : *Original cute creature made of three stacked soft rounded cubes (head, belly, feet), teal and turquoise (#1FB5A8 / #6FDCD0), each cube has white dots like dice faces showing 1, 2, 3, big round eyes on the top cube, tiny arms coming out of the middle cube, cheerful and slightly wobbly pose as if balancing. Soft vinyl-toy 3D style, white background, turnaround + expressions (counting, proud, wobbling 'oops', laughing, sleepy). Original design, no text.*

#### Feuillette, Découvrir le monde

- **Personnalité** : exploratrice et observatrice. Elle s'émerveille d'une fourmi et pose toujours « Pourquoi ? ».
- **Signature** : un corps de graine ronde. Ses **deux oreilles sont deux grandes feuilles qui changent avec les saisons** (fleurs au printemps, vert vif en été, orange en automne, bout givré en hiver). Elle porte une loupe trop grande pour elle. Son nom joue sur « feuille » et « feuilleter ».
- **Style** : vert mousse et brun noisette, oreilles saisonnières.
- **Phrase fétiche** : « Regarde de plus près ! »
- **Prompt** : *Original cute seed-shaped creature, moss green body (#7CC46B) with hazelnut brown belly, two large leaf-shaped ears (show 4 seasonal variants: spring with tiny blossoms, summer bright green, autumn orange, winter frosted tips), holding an oversized magnifying glass, curious wide eyes, explorer attitude. Soft vinyl-toy 3D, rounded, white background, turnaround + expressions (amazed, observing, asking why, giggling, sleepy). Original design, no text.*

#### Nimbo, Anglais

- **Personnalité** : un voyageur jovial qui dit « Hello, hello ! » à tout le monde et collectionne les tampons de voyage.
- **Signature** : un **petit nuage dodu** qui porte un sac à dos couvert d'autocollants de voyage. Quand il est content, il fait tomber une pluie de confettis.
- **Style** : blanc nacré ombré de bleu ciel, sac rouge corail. Il ne porte aucun drapeau national.
- **Phrase fétiche** : « Hello, hello ! On dit ça comment en anglais ? »
- **Prompt** : *Original cute puffy cloud creature, pearly white with soft sky-blue shading (#BFE3FF), round body made of 4-5 soft puffs, big friendly eyes, rosy cheeks, wearing a small coral-red backpack covered with colorful travel stickers (abstract shapes, no flags, no text), confetti falling below it like happy rain. Soft vinyl-toy 3D, white background, turnaround + expressions (waving hello, laughing, listening, proud, sleepy). Original design.*

#### Plumo, Écriture

- **Personnalité** : soigneux, calme et un peu artiste. Il aime les chemins bien tracés.
- **Signature** : un corps **long et souple comme un ruban** et une petite **crête de plume** sur la tête. Le bout de sa queue est une mine de crayon colorée qui laisse une trace lumineuse dans l'air. Il « dessine » les lettres avec son corps.
- **Style** : jaune citron et vert anis, trace arc-en-ciel.
- **Phrase fétiche** : « Doucement… on suit le chemin ! »
- **Prompt** : *Original cute ribbon-like creature with a long soft flexible body, lemon yellow to lime green gradient (#FFE45C to #B7E35A), small feather crest on its head, the tip of its tail is a colored pencil tip leaving a glowing rainbow trail in the air shaped like a loop, gentle smiling eyes. Soft vinyl-toy 3D, white background, turnaround + poses (writing an 'a' in the air, proud, concentrating, encouraging, sleepy curled up). Original design, no text.*

#### Somnole, le gardien du repos (révisions et fin de session)

- **Rôle** : il n'a pas de matière. Il veille sur les **révisions** (« pendant qu'on dort, on range ce qu'on a appris », un clin d'œil réel à la consolidation de la mémoire pendant le sommeil) et sur la **fin du temps d'écran**.
- **Personnalité** : doux, lent et rassurant. C'est le grand frère qui bâille.
- **Signature** : un grand **coussin vivant**, rond et plat, aux paupières en croissant de lune. Il porte un bonnet de nuit étoilé et tient une petite lanterne.
- **Style** : bleu nuit et indigo, étoiles dorées.
- **Phrase fétiche** : « Ouaaah… On a bien appris. On range tout pour demain ? »
- **Prompt** : *Original large soft pillow-shaped creature, round and slightly flat, midnight blue to indigo (#3B4A9C) with tiny golden star speckles, crescent-moon shaped sleepy eyelids, calm gentle smile, wearing a floppy star-patterned nightcap, holding a small warm glowing lantern. Huggable proportions, soft plush-like 3D render, white background, turnaround + expressions (yawning, smiling, tucking in, gently waking, sleeping). Original design, no text.*

> **Choix du compagnon.** L'enfant choisit **un** compagnon parmi les 7. Tilou est proposé par défaut. Les autres le suivent sur leur branche et le guident dans leur matière. **Aucun personnage n'est payant.**
> **Migration.** Les animaux actuels (renard, ours…) deviennent des **doudous** posés dans la cabane : l'enfant ne perd pas son ami. Les cadeaux déjà achetés restent possédés.

**Vérification d'originalité avant toute production** : recherche des noms dans [data.inpi.fr](https://data.inpi.fr) et dans eSearch de l'EUIPO (classes 9, 16, 25, 28 et 41), recherche d'images inversée sur les concepts, et test « ça ressemble à quoi ? » auprès de 10 parents. Si un nom est pris, on garde le concept et on change de nom.

---

## 4. Le système de personnalisation

### 4.1 Les stades d'évolution (la croissance suit la maîtrise, pas le temps)

Le Pétillou grandit grâce aux **Lumières** : +1 par leçon terminée avec au moins 3/5 du premier coup, et +1 par révision réussie. Il **ne régresse jamais**.

| Stade | Lumières | Changement visible | Ce qui se débloque |
|---|---|---|---|
| 1. Étincelle | 0 | Une petite boule de lumière avec des yeux | Écharpe offerte dès la 1re leçon |
| 2. Petit Pétillou | 5 | Bébé : grosse tête, pas hésitants | La boutique et la cabane (chambre) |
| 3. Pétillou | 20 | Enfant : silhouette complète | Le jardin de la cabane et les danses |
| 4. Grand Pétillou | 50 | Plus grand, signature plus marquée (l'antenne de Tilou s'allonge) | L'observatoire (3e pièce, voir § 4.4) |
| 5. Pétillou Lumineux | 90 | Halo doux, joues dorées | Pelage « Pétillant doré » et cérémonie dans l'arbre |

Un enfant gratuit (42 leçons et leurs révisions) atteint le stade 5 : la croissance n'est **pas** réservée au Premium. L'évolution est un **événement rare et inattendu** : on ne montre pas de barre « encore 2 lumières ». C'est une surprise, ce qui limite l'effet de surjustification.

### 4.2 Raretés et coûts

| Rareté | Couleur du cadre | Coût en ✨ | Comment l'obtenir |
|---|---|---|---|
| Commun | Bleu | 15 à 30 | Boutique |
| Joli | Vert | 40 à 80 | Boutique |
| Précieux | Violet | 120 à 200 | Boutique, pour y aller par objectif d'épargne |
| **Merveille** | Or | **Ne s'achète pas** | Uniquement par la **maîtrise** ou la **persévérance** |
| Saison | Rouge | 0 pendant la quête d'événement, puis 40 à 80 dans la « Malle aux souvenirs » | Événements |
| Premium (P) | Petit ruban | Coûte **aussi** des ✨ | Réservé aux familles abonnées et invisible pour les enfants gratuits |

### 4.3 Le catalogue (122 objets)

Les objets « Commun » sont nombreux et pas chers pour que le premier achat soit facile. Les « Merveilles » ancrent l'idée que **la maîtrise rapporte ce que l'argent n'achète pas**. Les 6 cadeaux actuels sont intégrés (marqués ◆).

**1. Couleurs et motifs (12)**
| Rareté | Objets |
|---|---|
| Commun (20) | Miel, Menthe, Lavande, Corail |
| Joli (50) | Pois pétillants, Rayures arc-en-ciel, Taches de lune |
| Précieux (150) | Pelage étoilé phosphorescent (P), Dégradé aurore (P) |
| Merveille | Pétillant doré (stade 5) |
| Saison | Citrouille (Halloween), Givre (hiver) |

**2. Chapeaux (18)**
| Rareté | Objets |
|---|---|
| Commun (20 à 30) | Bonnet à pompon, Casquette ◆, Bob de plage, Béret de peintre, Chapeau de paille, Fleur ◆ |
| Joli (45 à 70) | Chapeau de fête ◆, Casque d'explorateur, Couronne de feuilles, Casque de cosmonaute (P), Bonnet de nuit étoilé, Toque de cuisinier |
| Précieux (120 à 180) | Couronne ◆, Chapeau-champignon lumineux (P), Couronne de lanternes (P) |
| Merveille | Toque du Savant (une unité entière à ★★★) |
| Saison | Bonnet de lutin d'hiver, Oreilles de printemps |

**3. Tenues (14)**
| Rareté | Objets |
|---|---|
| Commun (25 à 30) | Salopette, Pull à col roulé, Ciré jaune, Pyjama nuage |
| Joli (50 à 80) | Blouse de scientifique, Tenue d'explorateur, Cape de super-lecteur, Tutu, Maillot de sport (P) |
| Précieux (150 à 200) | Combinaison spatiale (P), Armure en carton, Costume de dragon-doudou (P) |
| Saison | Fantôme rigolo (drap à pois), Pull tricoté d'hiver |

**4. Accessoires (16)**
| Rareté | Objets |
|---|---|
| Commun (15 à 25) | Écharpe (offerte), Nœud papillon ◆, Lunettes rondes ◆, Sac à dos, Fleur à l'oreille, Badge « Je lis ! » |
| Joli (40 à 70) | Loupe géante, Cartable, Longue-vue, Ballon, Parapluie, Ukulélé (P) |
| Précieux (120 à 160) | Ailes de papillon lumineuses (P), Lanterne de poche |
| Merveille | **Médaille de persévérance** (20 exercices réussis après un « Presque ! ») |
| Saison | Panier d'œufs peints |

**5. Cabane : meubles (20)**
| Rareté | Objets |
|---|---|
| Commun (15 à 30) | Lit-feuille, Coussin, Tapis rond, Plante en pot, Lampe-champignon, Petite étagère, Tabouret, Boîte à trésors |
| Joli (40 à 80) | Bureau, Bibliothèque, Tableau noir, Globe, Hamac, Guirlande lumineuse, Fauteuil-nuage |
| Précieux (120 à 200) | Télescope (P), Piano (P), Aquarium à poissons-lumière (P) |

**6. Cabane : murs et sols (8)**
Commun (20) : Parquet clair, Moquette herbe, Papier peint à pois, Rayures douces. Joli (50) : Frise alphabet, Carte du monde, Ciel étoilé (P), Papier peint « chiffres » (P).

**7. Jardin et décor extérieur (10)**
Commun (25) : Lampions, Nichoir, Arche de fleurs. Joli (60) : Balançoire, Potager, Cerf-volant, Mare (P). Précieux (150) : Fontaine (P). Saison : Bonhomme de neige, Citrouilles-lanternes.

**8. Animations de réussite (8)**
Ce sont les réactions jouées après une bonne réponse. Commun (25) : Bulles, Cœurs, Roulade. Joli (60) : Pluie de lettres, Saut périlleux, Arc-en-ciel (P). Précieux (120) : Feu d'artifice d'antenne (P). Merveille : Éclair d'étincelles (5 leçons d'affilée sans aide).

**9. Danses (8)**
La Pétillante (offerte au stade 3), la Toupie (40), la Pluie (40), le Robot (60), la Vague (60), la Farandole (60), la Fusée (120, P), le Pas de l'escargot (120, P).

**10. Compagnons : les Pépins (8)**
Ce sont de minuscules créatures-graines qui suivent le Pétillou. **Aucun ne s'achète** : ils récompensent les **collections** (§ 4.5) et les grandes étapes. Les voici : Pépin-Mousse, Pépin-Bulle, Pépin-Braise, Pépin-Goutte, Pépin-Caillou, Pépin-Pollen, Pépin-Neige et Pépin-Lune.

**Bilan.** On compte 122 objets, dont 22 Premium (18 %). **100 objets sont accessibles aux familles gratuites**, y compris toutes les Merveilles, tous les Pépins et tous les objets de saison de base. La somme des objets achetables est d'environ **5 500 ✨**, soit 4 à 5 mois de pratique régulière (voir § 5.3). Après cela, les saisons renouvellent le catalogue (+10 à 15 objets par an).

### 4.4 La cabane à décorer

Elle comprend trois pièces débloquées par les stades : **la chambre** (stade 2), **le jardin** (stade 3) et **l'observatoire** (stade 4, avec un mobilier en partie Premium). On la navigue à la télécommande sur une **grille invisible de 4 × 3 emplacements** par pièce. Avec les flèches, on choisit une case ; avec les touches 1 à 4, on choisit parmi 4 objets possédés ; OK valide. Il n'y a pas de placement libre au pixel, impraticable sur télé. Sur tablette, on fera du glisser-déposer.

La cabane affiche aussi **l'Album des découvertes** : chaque unité terminée ajoute une carte illustrée (par exemple « Le chat chuchote : le son [ch] »). C'est une collection d'**apprentissages**, pas d'objets. Elle sert de base aux cartes physiques (§ 8).

### 4.5 Les collections, ou « panoplies »

Quand une panoplie est complète, le Pétillou joue une animation spéciale et un **Pépin** le rejoint :
- **Explorateur** : casque, tenue, loupe, longue-vue et sac à dos → Pépin-Mousse
- **Savant** : blouse, lunettes, tableau noir, globe et Toque du Savant → Pépin-Pollen
- **Dodo** : bonnet de nuit, pyjama nuage, lit-feuille, fauteuil-nuage et guirlande → Pépin-Lune
- **Pluie** : ciré, parapluie, danse de la Pluie et mare → Pépin-Goutte (avec une variante gratuite sans la mare)
- **Fête** : chapeau de fête, ballon, lampions et Farandole → Pépin-Bulle
- Les autres Pépins viennent des étapes : 1re unité dans chaque matière (Pépin-Caillou), stade 5 (Pépin-Braise) et événement d'hiver (Pépin-Neige).

### 4.6 Saisons et événements

Le calendrier est **annuel et prévisible**. Les événements utilisent l'horloge de la télé, comme Animal Crossing, mais **sans compte à rebours affiché à l'enfant** et **sans objet perdu pour toujours**. Après l'événement, ses objets rejoignent la **Malle aux souvenirs**, achetable toute l'année. Cela supprime la peur de rater quelque chose.

| Période | Événement | Quête d'événement (4 sessions sur 3 semaines) | Récompenses gratuites | Bonus Premium |
|---|---|---|---|---|
| Septembre | **La Rentrée de l'Arbre** | Faire une leçon dans 3 matières | Cartable, Badge « Je lis ! » | Papier peint « chiffres » |
| Fin octobre | **La Nuit des Citrouilles-lanternes** (rien d'effrayant) | Rallumer 5 lanternes (5 leçons) | Fantôme rigolo, Citrouilles, Pelage Citrouille | Animation chauve-souris-confettis |
| Décembre | **La Fête des Lanternes d'hiver** | 6 leçons dont 2 révisions | Pull tricoté, Bonhomme de neige, Pépin-Neige | Bonnet de lutin animé |
| Février | **Carnaval** | Essayer une matière nouvelle | Masque à plumes | Costume de dragon-doudou |
| Avril | **La Chasse aux œufs de printemps** | Trouver 5 œufs cachés dans les leçons de Découvrir le monde | Panier d'œufs, Oreilles de printemps | Arche de fleurs animée |
| Juin | **La Fête de la musique** | 3 leçons d'Anglais (comptines) | Danse la Farandole | Ukulélé doré |
| Juillet-août | **L'Arbre en vacances** | Mode léger : 1 leçon par semaine suffit | Bob de plage | — |

Le cadrage des fêtes reste **non confessionnel** (« lanternes d'hiver », « œufs de printemps »). On peut ajouter des « Fêtes du monde » dans la matière Découvrir le monde (Nouvel An lunaire, Diwali, Aïd…), à vocation culturelle et sans objet exclusif.

### 4.7 Premium sans frustrer les gratuits

1. **Premium vend du contenu, pas des récompenses.** Sur l'écran Premium, remplacer « Tous les cadeaux pour l'animal en 3D » par « Les 151 leçons et la cabane complète (observatoire et objets bonus de chaque saison) ».
2. **Les objets Premium sont invisibles pour l'enfant gratuit.** On n'affiche ni cadenas, ni « Demande à tes parents ». On les présente au parent, dans l'espace parents et sur l'écran Premium.
3. **Premium ne donne pas plus d'étincelles.** Ni multiplicateur, ni accélérateur : un enfant abonné doit **apprendre** pour obtenir ses objets.
4. **Aucun personnage, aucune Merveille et aucun Pépin ne sont payants.**
5. **Fin d'abonnement** : les objets déjà achetés restent possédés et visibles. Rien n'est retiré à l'enfant.

---

## 5. L'économie des étincelles

### 5.1 Comment on gagne

| Action | ✨ | Commentaire de design |
|---|---|---|
| Exercice réussi **du premier coup** | +2 | Récompense la maîtrise |
| Exercice réussi **au 2e essai** | +1 | Récompense la persévérance. Ce n'est jamais plus que le premier coup, donc se tromper exprès ne rapporte rien |
| Exercice réussi au 3e essai ou plus | 0 | L'exercice est validé et l'enfant est encouragé, mais pas payé (anti-hasard) |
| Leçon terminée (1re fois) | +10 | |
| Bonus maîtrise : 4/5 ou mieux du premier coup | +5 | Donne aussi ★★★ sur la carte |
| **Révision** à échéance (J+1, J+3, J+7, J+14, J+30) | +15 et les exercices | Une révision **vaut plus** qu'une leçon nouvelle : on favorise la mémoire à long terme |
| Leçon rejouée hors révision | 50 % la 1re fois du jour, puis 0 | Anti-farm |
| Défi du jour | +15 | Varié, jamais « fais X leçons » (§ 6.2) |
| Coffre de fin d'unité (carte) | +30 et un objet **visible avant l'ouverture** | Pas de hasard |
| Quêtes de la semaine (3 par semaine) | +25 chacune | Réalisables en 3 sessions |
| Semaine pétillante (4 lanternes sur 7, § 5.5) | +40 | |
| Bonus de retour (après 3 jours ou plus d'absence, une fois par 7 jours) | +20 et un petit cadeau | Le message est « Je suis content de te voir ! », jamais « Où étais-tu ? » |
| Persévérance : leçon terminée malgré au moins 3 « Presque ! » | +5 | Message : « Tu n'as rien lâché ! » |

**Pas de gain lié à la présence** : ni cadeau de connexion quotidienne, ni gain par minute passée, ni multiplicateur de série.

### 5.2 Exemple chiffré

Une leçon parfaite rapporte 10 (exercices) + 10 (fin) + 5 (maîtrise) = **25 ✨**. Une leçon laborieuse (3 au premier coup, 2 au second) rapporte 6 + 2 + 10 + 5 (persévérance) = **23 ✨**. **L'effort rapporte presque autant que la facilité.** C'est voulu : un enfant en difficulté ne doit pas voir son Pétillou « s'appauvrir ».

### 5.3 Rythme de déblocage

| Moment | ✨ cumulées (environ) | Ce que l'enfant obtient |
|---|---|---|
| **Minute 1** (choix du compagnon) | 0 | Le Pétillou au stade Étincelle |
| **Minute 3 à 4** (1re leçon finie) | 20 à 25 | **L'écharpe est offerte**, puis 1er achat possible (Commun à 15 ou 20) : **premier objet en moins de 5 minutes** |
| Fin de la 1re session (15 min, 3 leçons) | 60 à 70 | 2 à 3 objets Communs |
| Jour 2 | 120 | 1er défi du jour, 1re révision |
| Fin de la semaine 1 | 300 à 350 | Stade 2, la cabane s'ouvre, 1er objet Joli |
| Semaine 3 | 900 | Stade 3, jardin, 1er Précieux par épargne |
| Mois 2 | 2 000 | 1re panoplie complète et 1er Pépin |
| Mois 4 à 5 | 5 500 | Catalogue de base complet (hors saisons) ; stade 4 ou 5 selon la pratique |

Hypothèse : 4 à 5 jours de pratique par semaine, 3 à 4 leçons ou révisions par jour, soit 60 à 80 ✨ par jour, ce qui correspond à la limite de 20 à 30 min déjà réglée par les parents.

### 5.4 Garde-fous anti-triche et anti-course aux points

- **Réponses au hasard** : une réponse donnée **avant la fin de la lecture de la consigne** puis fausse ne rapporte rien. Après trois cas de suite, Tilou dit doucement « Écoute bien la question, j'adore l'écouter avec toi ». Il n'y a aucune punition visible.
- **Leçon « forcée »** (au moins 3 exercices réussis au 3e essai ou plus) : la leçon est validée sans ★★★ et **reprogrammée en révision le lendemain**.
- **Farm de leçons faciles** : rendement dégressif (§ 5.1), et les leçons d'une classe inférieure à celle du profil rapportent 50 %.
- **Horloge de la télé trafiquée** : l'application enregistre la dernière date vue. Si l'horloge recule, les défis, quêtes et lanternes du jour ne se rouvrent pas. Les événements se basent sur la date réseau quand elle est disponible.
- **Profils multiples** : les étincelles sont attachées à chaque profil et ne se transfèrent pas. Un profil neuf repart de zéro.
- **Plafond doux** : au-delà de 120 ✨ dans la journée, les gains sont divisés par deux, sans message. En pratique, la limite de temps parentale intervient avant.
- **Achat réversible** : un objet acheté peut être **rendu et remboursé à 100 % le jour même**. Cela réduit le regret et les achats impulsifs.
- **Mesurer sans données** : puisque rien ne remonte au serveur, on n'a ni test A/B ni analytics. On valide l'économie par des **sessions de test avec 8 à 12 familles** (observation, carnet de bord sur 3 semaines). C'est éthique et suffisant à cette échelle.

### 5.5 Temps d'écran sain et série sans culpabilité

**On remplace la flamme consécutive par la « Semaine pétillante ».** Une rangée de 7 lanternes (L à D) s'allume chaque jour où l'enfant a appris (1 leçon ou 1 révision suffit). **L'objectif est de 4 lanternes sur 7**, réglable par le parent entre 3 et 5. Atteindre l'objectif rapporte +40 ✨ et une lanterne dorée dans l'arbre.

- On garde **un compteur qui ne descend jamais** : « Tu as appris pendant 37 jours avec Tilou ». C'est la fierté sans la peur.
- **Jours dodo** : les jours non pratiqués s'affichent comme une lanterne endormie avec un petit « zzz », jamais comme une lanterne cassée ou rouge.
- **Mode vacances ou maladie** dans l'espace parents : tout est en pause.
- **Si les parents préfèrent la série classique** (option) : un **gel automatique** est gagné tous les 7 jours de pratique, avec un maximum de 2 en réserve. Il s'applique tout seul sans rien demander et ne s'achète jamais. Quand la série casse malgré tout, Tilou dit : « Ta série repart ! Ton record de 12 jours est gardé dans ta cabane. » On ne montre ni flamme éteinte ni visage triste.

**Fin de session et limite de temps** : 3 minutes avant la limite, Somnole apparaît et bâille sur le côté de l'écran. On ne commence pas de nouvelle leçon, on termine celle en cours (pas de coupure en plein exercice). À la limite, on lance le rituel du coucher (§ 6.4). **Aucune récompense** n'est donnée pour un temps passé au-delà, et aucune offre n'invite à « encore une ». Une fois la quête du jour remplie, le bouton principal devient **« Finir pour aujourd'hui »** et « Continuer » passe au second plan.

### 5.6 Adaptation par âge

| Âge | Mode | Différences |
|---|---|---|
| 2 à 4 ans (TPS à MS) | **Mode Petits** | **Pas de boutique et pas de chiffres** : à la fin de chaque leçon, le Pétillou « trouve » un cadeau (le suivant dans un ordre prédéfini). L'habillage se fait en choisissant parmi 3 objets possédés. Tout est guidé à la voix. |
| 5 et 6 ans (GS et CP) | Boutique simplifiée | Prix affichés aussi en points ✨ jusqu'à 30 ; filtre « ce que je peux m'offrir » |
| 7 à 9 ans (CE1 et CE2) | Boutique complète | **Tirelire à objectif** : l'enfant épingle un objet et voit son épargne progresser. C'est un vrai exercice de calcul (« il me manque 35 ✨ »). Collections et Album complets. |

---

## 6. Les rituels quotidiens

### 6.1 L'ouverture (20 secondes maximum)
1. On voit la cabane : le Pétillou se réveille, s'étire et l'antenne de Tilou se déroule.
2. Il accueille l'enfant par son prénom et lui rappelle **ce qu'il a appris**, pas ce qu'il a manqué : « Bonjour Léa ! Hier, tu as trouvé le son [ch]. Ça pétille encore ! »
3. Il propose **une** chose : le défi du jour ou la révision du jour. Un seul appui sur OK lance la leçon ; « Retour » mène à la carte libre.
4. On ne montre jamais un écran du type « tu as raté hier ».

### 6.2 Le défi du jour
C'est un seul défi par jour, choisi localement selon des règles simples, et **jamais quantitatif** :
- « Révise une leçon avec Somnole » (si une révision est due) ;
- « Rends visite à Feuillette » (la matière la moins pratiquée de la semaine) ;
- « Trouve 3 réponses du premier coup en Nombres » ;
- « Écris une lettre avec Plumo sur le téléphone » (pour faire découvrir le mode ardoise).

Récompense : +15 ✨ et une lanterne de défi dans l'arbre. **Un défi non fait disparaît sans trace.** Il ne s'accumule pas, ce qui évite la dette.

### 6.3 Le coffre
Le **coffre de fin d'unité** sur la carte est conservé, mais **son contenu est visible avant l'ouverture** (par exemple « Dans ce coffre : la loupe géante et 30 ✨ »). La surprise tient dans l'animation (le couvercle saute, les étincelles jaillissent, le Pétillou essaie l'objet), pas dans le hasard. Pour les 7 à 9 ans, le coffre peut proposer **un choix entre 2 objets visibles**, ce qui renforce l'autonomie.

### 6.4 La fin de session (le rituel du coucher)
1. Somnole arrive avec sa lanterne.
2. **Récapitulatif informatif** en trois images : « Aujourd'hui tu as appris : le son [v], compter jusqu'à 7, *hello* ».
3. On montre les lanternes allumées dans l'arbre, ce qui rend le progrès visible.
4. Le Pétillou range un objet, enfile son pyjama et s'endort. La musique baisse.
5. Un seul bouton : **« Bonne nuit, Tilou ! »** (ou « Au revoir »), sans « Encore une leçon ».

Ce rituel apprend la **fin choisie** et pas la coupure brutale. C'est exactement le « nudge » de bien-être autorisé par l'ICO.

### 6.5 Les notifications, aux parents seulement
L'enfant ne reçoit **aucune notification** (et la télé ne s'y prête pas). Pour les parents, sans compte ni serveur :
- **Bilan hebdomadaire** dans l'espace parents (affiché le dimanche à l'ouverture du code).
- **Carte postale QR** : un QR code dans l'espace parents ouvre sur le téléphone une page statique du site. Les données y sont encodées **dans le fragment de l'URL** (#…), qui n'est pas transmis au serveur. Cela respecte le « aucune donnée collectée ».
- **Plus tard, dans l'application téléphone** : des notifications locales sur option (*opt-in*), avec au maximum 1 par semaine par défaut et une option quotidienne. Exemples de ton :
  - « Cette semaine, Léa a allumé 5 lanternes et appris 4 nouveaux sons. 🎉 »
  - « Une révision est prête pour Léa en Nombres : 3 minutes suffisent. »
  - « Léa a obtenu la Médaille de persévérance : elle a réussi 20 exercices après s'être trompée. Dites-lui bravo ! »
- **À ne jamais écrire** : « Léa va perdre sa série ! », « Tilou est triste », ou une promotion Premium cachée dans un bilan.

---

## 7. Cohérence avec la télécommande

- **Boutique** : une grille de 4 colonnes. Les touches **1 à 4** changent de catégorie (Têtes, Tenues, Cabane, Danses), les flèches parcourent la grille et **OK** ouvre une fiche (aperçu porté en 3D et prix).
- **Achat** : un écran de confirmation avec deux gros boutons, « Oui, je l'offre (40 ✨) » et « Non ». Il n'y a ni achat en un clic ni bouton pré-sélectionné sur « Oui » : le focus est sur « Non » pour les moins de 6 ans.
- **Téléphone en manette** : l'enfant décore la cabane au doigt, et c'est là que la tablette prend le relais.

---

## 8. La mascotte comme outil marketing

### 8.1 Le principe : un personnage, deux publics
- **Dans l'application**, Tilou parle à l'**enfant** : il est tendre, encourageant et se trompe parfois.
- **Sur les réseaux**, Tilou parle aux **parents** : c'est le même personnage, mais l'humour vise le quotidien des parents (le cartable oublié, les « pourquoi » à 7 h du matin). **Positionnement : « Tilou ne vous enverra jamais de notification culpabilisante. »** C'est le contre-pied assumé du hibou de Duolingo, dont l'humour repose sur la [culpabilité](https://designbuddy.substack.com/p/is-duolingo-unethical).
- **Ce qui ne change jamais**, consigné dans une **bible de personnage** de 10 pages : la silhouette, les couleurs, le geste « ? → ! », la phrase « Ça pétille ! », la voix (un comédien unique), les interdits (Tilou ne se moque pas, ne supplie pas, ne vend pas).
- **Réglementation** : les vidéos pour enfants publiées sur YouTube doivent être déclarées « conçues pour les enfants » (pas de commentaires ni de publicité personnalisée). TikTok et Instagram ciblent **uniquement les parents**, car ces plateformes interdisent les moins de 13 ans.

### 8.2 Déclinaisons

| Support | Idée concrète | Coût et difficulté |
|---|---|---|
| **YouTube (Shorts et vidéos longues)** | « **La minute Pourquoi** » : Tilou pose une vraie question (« Pourquoi la lune change de forme ? »), son antenne reste en « ? », Feuillette explique en 45 s, l'antenne passe à « ! ». C'est un format sériel pour les enfants et les familles. | Faible si l'animation se fait en Rive ou Blender avec les modèles de l'application |
| **TikTok et Reels (parents)** | Tilou face caméra en mode « parent épuisé » ; « Les 5 questions que votre enfant de 4 ans pose avant 8 h » ; les coulisses du couple fondateur | Faible |
| **Filtre ou effet** | Une antenne « ? » sur la tête, qui passe à « ! » quand on ouvre la bouche ou hausse les sourcils. Attention : Meta a **fermé Spark AR le 14 janvier 2025** ([Social Media Today](https://www.socialmediatoday.com/news/metas-shutting-down-its-spark-ar-studio/725443/)). Il faut viser Snapchat Lens Studio ou l'outil d'effets de TikTok (disponibilité à vérifier), ou un **filtre directement dans l'application téléphone** (la caméra du parent et Tilou dans le cadre). | Moyen |
| **Coloriages imprimables (Pinterest)** | 1 coloriage par semaine (un Pétillou et une notion : « Colorie les objets qui commencent par [ch] »), au format A4 avec le logo et l'adresse du site | Très faible, dérivé du *line art* de l'illustrateur |
| **Tableau des lanternes à imprimer** | Une affiche pour le frigo : l'enfant colle une lanterne-autocollant chaque jour d'apprentissage. Elle relie l'écran et le monde réel. | Très faible |
| **Autocollants** | Planche des 7 Pétillous et de 7 expressions ; à glisser dans des colis ou à offrir dans les écoles et salons | 0,10 à 0,30 € la planche en volume (estimation imprimeur en ligne) |
| **Cartes à collectionner** | Les cartes de l'**Album des découvertes** (une notion par carte et un Pétillou), en paquets **à contenu connu**, jamais en boosters aléatoires. Une version PDF est gratuite. | Moyen |
| **Peluche** | **Somnole d'abord** : un doudou du coucher, cohérent avec son rôle et facile à fabriquer (forme de coussin, peu de couture). Tilou ensuite. Prototype puis série minimale de 500 à 1 000 pièces chez un fabricant ; conformité **EN 71** et marquage CE obligatoires (directive sur la sécurité des jouets). | Élevé : à lancer seulement après validation de la marque |
| **Kodi-like à imprimer** | « **Tilou en voyage** » : un Tilou en papier à découper que l'enfant emmène partout et photographie (le parent partage). L'idée de [Kodi On The Go](https://blog.khanacademy.org/kodi-on-the-go/) est reprise avec un personnage original. | Très faible |

**Règle d'or** : un objet physique ne débloque **jamais** d'objet exclusif dans l'application. Sinon, on recrée un achat incitatif adressé à l'enfant.

---

## 9. Plan de production (budget limité)

### 9.1 Étapes

| Phase | Durée | Qui et quoi | Budget indicatif |
|---|---|---|---|
| 0. Vérification des noms | 1 semaine | Recherche INPI et EUIPO des 7 noms et de « Pétillous » | 0 € |
| 1. Exploration par IA | 1 à 2 semaines | Moodboards et variantes avec une IA d'image (les prompts du § 3). **Usage interne uniquement**, jamais publié tel quel. On interdit les prompts citant un personnage ou un artiste existant. | 20 à 60 € d'abonnement |
| 2. Character design humain | 3 à 5 semaines | **Illustrateur freelance** : redessin complet, *turnaround*, 6 expressions par personnage, palette, bible. Sur Malt, des illustrateurs affichent [autour de 250 à 350 € par jour](https://copeps.fr/actualites/tarif-horaire-illustrateur-freelance/) ; les budgets « mascotte » publiés vont de [moins de 300 € à 3 000 €](https://graphiste.com/projects/51921-creation-de-mascotte). Prévoir **Tilou : 600 à 1 200 €**, les 6 autres : **300 à 600 € chacun**, et la bible : 400 à 800 €. | **2 800 à 5 600 €** |
| 3. Modèles 3D | 4 à 6 semaines | Freelance Blender : un **squelette commun** aux 7 personnages avec des **points d'accroche** (tête, cou, dos, main, pieds), pour qu'un même chapeau s'adapte à tous par simple décalage d'échelle. Export glTF pour l'application. Compter 500 à 1 500 € par personnage (estimation), Tilou plus cher. | 3 500 à 8 000 € |
| 4. Objets | En continu | **60 objets en V1** (pas 122 d'un coup), en low-poly par un freelance (20 à 60 € l'objet, estimation) ou en interne avec une IA pour les textures. Le reste arrive au fil des saisons. | 1 500 à 3 500 € pour la V1 |
| 5. Animation | 3 semaines | **3D (Blender)** : saut, danse, sommeil, joie, « Presque ». **Rive** pour la 2D interactive (Tilou dans les bulles d'accueil, antenne « ? → ! » pilotée par l'état de l'exercice) : ses *state machines* réagissent aux données de l'application ([comparatif Wikimedia](https://phabricator.wikimedia.org/T433250)). **Lottie** pour les effets simples joués en boucle (confettis). **Spline** pour un Tilou 3D interactif sur le site. | 1 000 à 3 000 € |
| 6. Voix | 1 semaine | Un **comédien** pour Tilou (60 à 100 répliques génériques : accueil, encouragements, fin). Cela corrige en partie le point faible « voix de synthèse ». | 500 à 1 500 € (estimation, droits compris) |
| 7. Protection | En parallèle | Marques et enveloppe Soleau (§ 9.2) | 350 à 1 700 € |

**Total** : environ **10 000 à 23 000 €** pour la version complète. Une **version « maigre »** à 5 000 ou 7 000 € est possible : Tilou et 2 autres personnages en 3D, 40 objets, et des personnages secondaires en 2D Rive seulement pendant 6 mois.

### 9.2 Droits d'auteur et marques

- **Une image générée par IA est mal protégée.** Aux États-Unis, le [rapport du Copyright Office (janvier 2025)](https://copyrightalliance.org/ai-report-part-2-copyrightability/) conclut que même des prompts détaillés ne suffisent pas à faire de l'utilisateur un auteur. En France, le droit d'auteur protège une œuvre portant « l'empreinte de la personnalité » d'un auteur humain. Une image brute d'IA risque donc de n'appartenir à personne, et un concurrent pourrait la copier.
- **Remède** : la version finale doit être **dessinée et modélisée par un humain**, et il faut **conserver les étapes** (croquis, fichiers sources datés) pour prouver le travail. On peut dater le tout avec une **enveloppe Soleau** (INPI, environ 15 €).
- **Contrat avec l'illustrateur** : une **cession de droits d'auteur** écrite, conforme au Code de la propriété intellectuelle (art. L131-3 : chaque droit cédé, son étendue, sa destination, son lieu et sa durée). Elle doit couvrir explicitement l'application, la publicité, les réseaux sociaux, les **produits dérivés** (peluches, cartes, papeterie), la modification et l'animation par des tiers, et l'usage mondial. Sans cette clause, la peluche ne pourra pas être fabriquée.
- **Dépôt de marque** : déposer « Petits Savants », « Tilou » et « Pétillous », et éventuellement la silhouette de Tilou comme marque figurative.
  - **INPI** : [190 € pour une classe, +40 € par classe supplémentaire](https://www.inpi.fr/realiser-demarches/propriete-intellectuelle/deposant-et-cout-dune-marque). Les 5 classes utiles sont 9 (applications), 41 (éducation et divertissement), 28 (jouets et peluches), 16 (papeterie, autocollants, cartes) et 25 (vêtements), soit **350 € par marque**.
  - **EUIPO** (Union européenne, utile pour l'export) : [850 € pour une classe, 50 € pour la 2e, 150 € par classe à partir de la 3e](https://www.tramatm.com/en/country-guide/european-union), soit **1 350 € pour 5 classes** (tarif à confirmer sur le site de l'EUIPO).
  - **Ordre conseillé** : INPI d'abord pour Tilou et Petits Savants, puis EUIPO dans les 6 mois (droit de priorité) si l'export se confirme.
- Vérifier aussi les **conditions d'utilisation de l'outil d'IA** (usage commercial autorisé ou non) et **faire relire les concepts** par une recherche d'images inversée.

---

## 10. Feuille de route conseillée

1. **Sprint 1 (2 semaines, sans graphisme nouveau)** : séparer étoiles et étincelles, appliquer la nouvelle table de gains, mettre en place la Semaine pétillante et le gel automatique, retirer « tous les cadeaux » de l'argument Premium, ajouter la Médaille de persévérance et mettre « Finir pour aujourd'hui » en bouton principal.
2. **Sprint 2 (en parallèle de la phase 2 de production)** : rituels d'ouverture et de coucher, défi du jour varié, coffre transparent.
3. **V2 (environ 3 mois)** : arrivée de Tilou et des Pétillous, stades, cabane (chambre et jardin), 60 objets, migration des animaux en doudous.
4. **V3** : observatoire, panoplies, Pépins, premier événement saisonnier (Fête des Lanternes d'hiver si le calendrier le permet, sinon Carnaval), coloriages et tableau des lanternes imprimables.
5. **Ensuite** : chaîne YouTube « La minute Pourquoi », cartes, et la peluche Somnole quand la marque sera déposée et la communauté amorcée.

---

### Sources principales
- Réglementation et éthique : [Google Play, politique Familles](https://support.google.com/googleplay/android-developer/answer/9893335), [Commission européenne, lignes directrices art. 28 DSA](https://digital-strategy.ec.europa.eu/en/library/commission-publishes-guidelines-protection-minors), [ICO, Children's Code, *nudge techniques*](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/age-appropriate-design-a-code-of-practice-for-online-services/13-nudge-techniques/), [Conseil de l'Europe, CM/Rec(2018)7](https://rm.coe.int/16808d881a), [CNIL, 8 recommandations](https://www.cnil.fr/fr/la-cnil-publie-8-recommandations-pour-renforcer-la-protection-des-mineurs-en-ligne), [CNIL, recommandation 6 (le design)](https://cnil.fr/fr/node/317).
- Recherche : [Deci, Koestner et Ryan 1999](https://depts.washington.edu/techdocs/papers/deciExtrinsicRewardsAndIntrinsicMotivation99.pdf), [Deci, Koestner et Ryan 2001](https://www.selfdeterminationtheory.org/SDT/documents/2001_DeciKoestnerRyan.pdf), [Mueller et Dweck 1998](https://www.columbia.edu/cu/psychology/courses/3615/Readings/Mueller_Dweck.pdf), [Radesky et al. 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC9206186/), [Michigan Medicine sur l'étude Radesky](https://www.michiganmedicine.org/health-lab/design-tricks-commonly-used-monetize-young-childrens-app-use).
- Cas : [plainte Prodigy (Fairplay)](https://fairplayforkids.org/wp-content/uploads/2021/02/Prodigy_Complaint_Feb21.pdf), [Duolingo et les séries](https://blog.duolingo.com/how-duolingo-streak-builds-habit), [Lenny's Newsletter sur les séries Duolingo](https://www.lennysnewsletter.com/p/behind-the-product-duolingo-streaks), [Khan Academy Kids, personnages](https://khankids.zendesk.com/hc/en-us/articles/360049358751-Learn-more-about-the-characters-inside-Khan-Academy-Kids), [Tamagotchi (Mental Floss)](https://www.mentalfloss.com/article/642373/tamagotchi-history).
- Production : [Rive comparé à Lottie (Rive)](https://rive.app/blog/rive-as-a-lottie-alternative), [INPI, coût d'une marque](https://www.inpi.fr/realiser-demarches/propriete-intellectuelle/deposant-et-cout-dune-marque), [rapport du Copyright Office sur l'IA (résumé)](https://copyrightalliance.org/ai-report-part-2-copyrightability/), [IPWatchdog sur ce rapport](https://ipwatchdog.com/2025/01/29/part-two-copyright-office-ai-report-says-creative-prompting-doesnt-constitute-authorship/).

*Les tarifs de production (3D, objets, voix, autocollants, peluche) sont des estimations à confirmer par devis. Les tarifs INPI et EUIPO sont ceux publiés en 2025.*
