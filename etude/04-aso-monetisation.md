# 04 · ASO, monétisation et croissance de Petits Savants

*Étude rédigée le 8 novembre 2026, jour de la mise en ligne sur Google Play. La fiche Play n'était pas consultable depuis la session de travail (play.google.com bloqué) : l'analyse s'appuie sur le site, les captures de `img/` et la fiche de contexte. Les chiffres de marché viennent des rapports publics cités. Les volumes de mots-clés sont **des estimations** : à vérifier avec AppTweak, Sensor Tower ou l'outil de planification de mots-clés Google Ads avant de figer la fiche.*

---

## Synthèse : les 10 décisions qui comptent le plus

1. **Rendre Premium « familial » tout de suite** : une seule application (même nom de paquet) pour la télé, la tablette et le téléphone, et un abonnement attaché au compte Google, pas à la télé. Pour les autres écrans (LG, Samsung, iPhone, navigateur), un **code famille** anonyme. C'est le premier argument de vente qui manque.
2. **Corriger le site** dès aujourd'hui : le bouton dit encore « Bientôt sur Google Play », et l'éditeur n'est pas renseigné (`[NOM DE L'ÉDITEUR]`), ce qui est à la fois un frein à la confiance et une obligation légale.
3. **Titre Play** : `Petits Savants: Maternelle CP` (29 caractères). « Maternelle » et « CP » sont les deux mots qui portent le plus de recherches de parents, bien plus que « télé ».
4. **Paywall** : un seul gros bouton « Essayer 14 jours gratuits », l'annuel présélectionné et affiché en « 3,33 €/mois », une frise de l'essai (jour 1, rappel jour 12, jour 14), et un affichage déclenché par le parent, dans l'espace parents, au bon moment (après la 3e leçon ou la première leçon verrouillée).
5. **Essai** : 14 jours sur l'annuel, 7 jours sur le mensuel, puis test A/B. Les essais longs convertissent mieux ([RevenueCat 2026](https://www.revenuecat.com/state-of-subscription-apps-2026/) : 42,5 % pour 17 à 32 jours contre 25,5 % pour 4 jours ou moins).
6. **Gratuit** : garder les 42 leçons, mais ajouter « 1 leçon offerte par jour » une fois le gratuit terminé, pour garder la série de jours et l'habitude, car en éducation près d'un quart des essais démarrent après J31 ([Adapty](https://adapty.io/blog/education-app-subscription-benchmarks/)).
7. **Offre « Fondateurs »** : accès à vie à 79,99 € jusqu'au 31 janvier 2027 (puis 99,99 €), pour les parents qui détestent les abonnements.
8. **Prix régionaux** : Suisse et Canada plus chers, Maroc et Afrique de l'Ouest à environ 35 à 45 % du prix français.
9. **Avis** : l'API d'avis intégrés fonctionne désormais sur Google TV ([Android Developers, mai 2025](https://android-developers.googleblog.com/2025/05/in-app-ratings-and-reviews-for-tv.html)) : la déclencher **dans l'espace parents**, après un moment de fierté (progrès visibles), jamais devant l'enfant.
10. **Mesure** : Play Console + RevenueCat avec identifiant anonyme aléatoire, et **reformuler la promesse** « aucune donnée collectée » en « aucune donnée sur votre enfant », car un abonnement suppose forcément un historique d'achat.

---

## 1. ASO Google Play, prêt à l'emploi

### 1.1 Comment Google Play classe une fiche

- Google Play indexe **le titre (30 caractères), la description courte (80) et la description longue (4 000)**. Il n'y a pas de champ de mots-clés caché comme sur iOS. Le titre pèse le plus, la description courte sert surtout à convaincre, la description longue porte la répétition naturelle des mots-clés ([AppTweak, ajouter des mots-clés sur Google Play](https://www.apptweak.com/en/aso-blog/how-to-add-keywords-to-apps-on-google-play)).
- Densité conseillée : 1 à 3 % pour les mots-clés principaux, au-delà de 4 % le risque de pénalité pour bourrage existe ([AppTweak, guide ASO Google Play](https://www.apptweak.com/en/aso-blog/aso-for-google-play-app-store-optimization-guide-for-android)).
- Le reste du classement dépend du taux de conversion de la fiche, de la rétention, des notes et de la qualité technique (Android vitals) ([AppTweak, facteurs de classement](https://www.apptweak.com/en/aso-blog/google-play-ranking-factors)). Pour une application neuve sans avis, **la conversion de la fiche et les 30 premiers avis comptent plus que les mots-clés**.
- **Particularité télé** : sur Google TV, on cherche peu et on tape mal à la télécommande. La découverte d'une application télé se fait surtout **depuis le téléphone ou le web** (« Installer sur d'autres appareils »). La fiche doit donc convaincre un parent sur son téléphone, et le site doit expliquer l'installation à distance.
- Règles de fiche : pas de majuscules abusives, pas de « n°1 », « gratuit », « meilleur » ni d'émojis dans le titre ; les noms de marques tierces sont à éviter.

### 1.2 Titre (30 caractères maximum)

| # | Titre | Car. | Pourquoi |
|---|---|---|---|
| **A (recommandé)** | `Petits Savants: Maternelle CP` | 29 | Les deux requêtes de parents les plus fortes du créneau ; « CP » capte aussi « apprendre à lire CP ». |
| B | `Petits Savants: Maternelle-CE2` | 30 | Montre toute l'étendue (2 à 9 ans), utile si le CE1/CE2 progresse dans les statistiques de recherche. |
| C | `Petits Savants: jeux éducatifs` | 30 | Vise le mot-clé générique le plus cherché, mais très concurrentiel (gros acteurs anglophones traduits). |

À tester en **expérience de fiche localisée** (A contre B) après les 1 000 premiers visiteurs (voir 1.10). « Télé » ne mérite pas le titre : presque personne ne tape « application éducative télé », alors que la vidéo, la feature graphic et la première capture montrent déjà la télé.

### 1.3 Description courte (80 caractères maximum)

| # | Texte | Car. |
|---|---|---|
| **A (recommandé)** | `Lire, compter, écrire : de la maternelle au CE2, sur la télé. Sans pub ni compte` | 80 |
| B | `Apprendre à lire et compter de la maternelle au CE2, sur la télé. Sans pub` | 74 |
| C | `Maternelle, CP, CE1 : le programme de l'école en jeux, lu à voix haute. Sans pub` | 80 |

La A réunit les verbes que tapent les parents (« lire », « compter », « écrire »), l'étendue (maternelle → CE2), la différence (la télé) et les deux réassurances qui comptent pour eux (pas de publicité, pas de compte). Une enquête PBS KIDS montrait déjà que 34 % des parents évitent délibérément les applis avec publicité ([App Developer Magazine](https://appdevelopermagazine.com/educational-content-apps-for-children/)).

### 1.4 Description longue (3 272 caractères, prête à coller)

> Remarque : la phrase sur les données a été volontairement reformulée (« aucune donnée **sur votre enfant** ») pour rester vraie quand l'abonnement sera suivi par RevenueCat (voir partie 4). Le paragraphe « Sur quelle télé ? » est à compléter quand la version tablette et téléphone sera sortie.

```
Petits Savants, c'est l'école à la maison sur la télé : des leçons puis des jeux éducatifs qui suivent le programme de l'Éducation nationale, de la toute petite section de maternelle (TPS, PS, MS, GS) au CP, au CE1 et au CE2. Pour les enfants de 2 à 9 ans.

Tout est lu à voix haute : même un enfant de 3 ou 4 ans qui ne sait pas encore lire joue seul, avec la télécommande.

★ D'ABORD UNE VRAIE LEÇON, PUIS LES EXERCICES
Chaque leçon commence par quelques images expliquées à voix haute. Viennent ensuite 5 exercices avec des réponses numérotées de 1 à 4. Une erreur ? « Presque ! », et on réessaie, sans pénalité ni chrono. L'enfant apprend sans stress, à son rythme.

★ 5 MATIÈRES, 151 LEÇONS
• Langage et français : couleurs, lettres, sons et rimes, syllabes, apprendre à lire des mots au CP, grammaire et compréhension au CE1 et au CE2.
• Nombres et maths : compter, comparer, additionner, soustraire, compléments à 10, tables de multiplication, lire l'heure, petits problèmes.
• Découvrir le monde : animaux, cinq sens, jour et nuit, météo, saisons, jours et mois, l'eau, fruits et légumes.
• Anglais : les premiers mots en anglais, prononcés par une voix anglaise, avec la traduction.
• Écriture : tracer les lignes, les lettres, les chiffres et son prénom, du doigt sur le téléphone.
Les leçons suivent la classe de chaque enfant : maternelle, CP, CE1 ou CE2.

★ LE TÉLÉPHONE DEVIENT UNE ARDOISE
Scannez le QR code affiché sur la télé : le téléphone devient une manette et une ardoise. L'enfant y trace ses lettres du doigt et les voit se remplir sur le grand écran. Rien à installer sur le téléphone.

★ UN COMPAGNON EN 3D QUI DONNE ENVIE DE REVENIR
Renard, ours, lapin, panda, licorne… L'animal choisi par l'enfant saute de joie à chaque bonne réponse et danse après trois d'affilée. Les étoiles gagnées lui offrent des cadeaux : chapeau, lunettes, couronne. Badges, série de jours et quête du jour motivent à faire un peu chaque jour.

★ POUR LES PARENTS
• Un profil par enfant : prénom, classe et animal. Idéal pour les frères et sœurs.
• Temps d'écran : une limite par jour et par enfant, avec un écran de pause tout doux.
• Les progrès : temps passé sur 7 jours, leçons terminées et réussite par matière.
• Espace parents protégé par un code à 4 chiffres.

★ SANS PUBLICITÉ, SANS COMPTE
Aucune publicité, aucun compte à créer, aucune donnée sur votre enfant n'est envoyée : profils et progrès restent sur la télé.

★ SUR QUELLE TÉLÉ ?
Android TV et Google TV (Sony, TCL, Philips, Hisense, Xiaomi, Chromecast avec Google TV…). Depuis votre téléphone, choisissez « Installer sur d'autres appareils » pour l'envoyer directement sur la télé.

★ GRATUIT POUR COMMENCER, PREMIUM POUR TOUT
Les 2 premières leçons de chaque matière, dans chaque classe, sont gratuites pour toujours (42 leçons). Premium débloque les 151 leçons et tous les cadeaux, pour tous les enfants de la famille : 4,99 € par mois ou 39,99 € par an (soit 3,33 € par mois), avec un essai gratuit. Sans engagement : annulez à tout moment dans Google Play.

Une application éducative créée en France par des parents, pour la soirée, le mercredi, le week-end ou les vacances : un vrai soutien scolaire en douceur, de la maternelle au CE2.

Une question, une idée ? Écrivez-nous : pondonda@gmail.com
```

Occurrences des termes clés : maternelle ×4, CP ×2 (+ titre), CE1/CE2 ×3, lire/lecture ×2, compter ×1 (+ courte), jeux éducatifs ×1, application éducative ×1, soutien scolaire ×1, anglais ×3. On reste sous 3 % de densité. Il reste ~700 caractères : à utiliser pour un avis de parent ou d'enseignant **réel** dès qu'il existe (« Ma fille de GS réclame son renard tous les soirs », prénom et ville), et pour la mention tablette/téléphone.

### 1.5 Mots-clés français à cibler

Échelle des estimations (relatives, sur Google Play France) : volume ●●●●● = très recherché, ● = rare ; concurrence = difficulté d'entrer dans le top 10 pour une application neuve. **À valider** avec AppTweak (essai gratuit) ou le Keyword Planner Google Ads (la recherche web donne une bonne idée de la demande des parents).

| Mot-clé | Intention du parent | Volume (est.) | Concurrence (est.) | Où le placer |
|---|---|---|---|---|
| jeux éducatifs | découvrir, occuper utilement | ●●●●● | Très forte (Khan Academy Kids, Kiddopia, Lingokids, Anton…) | Titre C / description |
| jeux éducatifs enfants | idem | ●●●●● | Très forte | Description |
| application maternelle | trouver une appli pour son enfant de 3-5 ans | ●●●● | Forte | **Titre A**, description |
| jeux maternelle / jeu maternelle | idem, plus ludique | ●●●● | Forte | Description |
| apprendre à lire | inquiétude CP, entrée à l'école | ●●●●● | Très forte (Lalilo, GraphoGame, Kaligo, méthodes syllabiques) | Courte, description |
| apprendre à lire CP | idem, ciblé | ●●●● | Forte | **Titre A** (CP), description |
| apprendre à lire GS / grande section | anticipation du CP | ●●● | Moyenne | Description, blog |
| jeu éducatif 3 ans / 4 ans / 5 ans | âge précis | ●●● chacun | Moyenne | Description (« 3 ou 4 ans »), fiches personnalisées |
| application éducative | générique | ●●●● | Forte | Description |
| CP / CE1 / CE2 (seuls) | classe de l'enfant | ●●●● | Moyenne (beaucoup d'applis de devoirs) | Titre A, description |
| soutien scolaire CE1 / CE2 | rattrapage, devoirs | ●●● | Moyenne (Kartable, Schoolmouv : collège surtout) | Description, site |
| maths CP / calcul CE1 / tables de multiplication | exercices ciblés | ●●●● (tables) | Forte sur « tables » | Description, blog |
| apprendre à compter | maternelle | ●●● | Moyenne | Courte, description |
| apprendre à écrire / écriture maternelle / tracer les lettres | graphisme | ●●● | Moyenne | Description, capture 6 |
| anglais enfant / anglais maternelle | ouverture | ●●●● | Forte (Lingokids) | Description |
| programme éducation nationale | caution scolaire | ●● | Faible | Description |
| sons et syllabes / phonologie | parents informés, enseignants | ●● | Faible | Description, blog |
| sans pub / sans publicité enfant | réassurance | ●● | Faible | Courte |
| jeux éducatifs télé / application enfant Android TV / Google TV enfant | équiper la télé | ● à ●● | **Très faible** (quasi vide en français) | Description, fiche « télé » |
| école à la maison | IEF, vacances | ●● | Faible | Description, site |
| cahier de vacances | été (saisonnier, pic juin-août) | ●●●● en saison | Moyenne | Contenu promotionnel de juillet, fiche personnalisée d'été |

Stratégie : **gagner d'abord les niches faibles** (télé, GS, programme, sons et syllabes, 4 ans), qui donnent des installations qualifiées et améliorent le classement global, puis monter sur « maternelle », « CP » et « apprendre à lire » quand la note et la conversion de la fiche le permettent. « Jeux éducatifs » seul est un objectif à 12 mois, pas à 3 mois.

### 1.6 Les 8 captures d'écran

Google Play affiche les captures **téléphone/tablette** sur le Play Store mobile et les captures **TV (1920×1080, obligatoires pour une appli TV)** sur Google TV. Pour une application télé, faites des visuels « mis en scène » : la capture dans un cadre de télé, dans un salon, avec une légende de 3 à 6 mots en Fredoka, lisible en vignette. Pour le téléphone, utilisez le format paysage 16:9 (les captures paysage s'affichent en grand sur la fiche mobile). Ordre pensé pour qu'on comprenne tout avec **les trois premières**.

| # | Capture source | Légende (titre / sous-titre) | Ce qu'on montre |
|---|---|---|---|
| 1 | `1-accueil.png` dans un salon | **L'école de la maternelle au CE2** / sur la télé du salon | Un enfant de dos sur le canapé, télécommande en main, la carte des leçons. Badges « Sans pub » et « Programme de l'école ». |
| 2 | `2-lecon.png` | **D'abord une vraie leçon** / en images, lue à voix haute | La leçon du son [t] ; une bulle « 🔊 lu à voix haute ». |
| 3 | `3-exercice.png` | **Il répond seul, même sans savoir lire** / réponses de 1 à 4 à la télécommande | Une télécommande dessinée avec les touches 1-4. |
| 4 | `4-bravo.png` | **« Presque ! », on réessaie** / sans pénalité, avec plein d'étoiles | Confettis, série de jours. |
| 5 | `5-mon-animal.png` | **Son compagnon en 3D** / renard, panda, licorne… à habiller | Les 5 animaux côte à côte (à produire). |
| 6 | `7-ecriture-telephone.png` | **Le téléphone devient une ardoise** / il trace ses lettres du doigt | Un téléphone en main devant la télé, le L qui se remplit. |
| 7 | `6-espace-parents.png` | **Vous suivez ses progrès** / temps d'écran limité, code parent | Bulle « 30 min par jour ». |
| 8 | Nouvelle : grille des 5 matières + classes | **5 matières, 151 leçons** / lire, compter, monde, anglais, écriture | Les 5 pastilles de couleur et la frise TPS → CE2. |

Ne **pas** mettre la capture du paywall (`8-premium.png`) dans la fiche : elle n'aide pas à télécharger. Le prix est déjà dans la description.

Le jour où la version tablette existe, refaire 4 captures **tablette** (7 et 10 pouces) : Google met en avant les applis qui en fournissent pour les grands écrans, et c'est l'écran des voyages et des salles d'attente.

### 1.7 Vidéo de présentation (YouTube, 30 à 45 s, paysage, sans publicité sur la vidéo)

| Temps | Image | Son / texte |
|---|---|---|
| 0-3 s | Gros plan : le renard 3D saute de joie sur la télé | Rire d'enfant + « Bravo ! ». Texte : **L'école à la maison, sur la télé** |
| 3-10 s | Enfant de 4 ans sur le canapé, télécommande ; la leçon du son [t] lue à voix haute | Voix de la leçon (l'actuelle, ou idéalement une voix humaine enregistrée pour la vidéo) |
| 10-18 s | Exercice, touche 3, « Presque ! », réessai, réussite | Texte : **Il joue seul, même sans savoir lire** |
| 18-25 s | Le grand frère trace un « L » sur le téléphone, la lettre se remplit sur la télé | Texte : **Le téléphone devient une ardoise** |
| 25-32 s | Le parent ouvre l'espace parents : progrès, 30 min par jour, puis l'écran de pause où l'animal s'endort | Texte : **Sans pub. Sans compte. Temps d'écran maîtrisé.** |
| 32-40 s | Grille 5 matières, TPS → CE2, logo, « Disponible sur Google Play » | Texte : **151 leçons du programme. Essai gratuit.** |

Les 3 premières secondes doivent fonctionner **sans le son** (la vidéo démarre souvent muette). Tourner chez vous, avec un enfant de la famille et l'accord des deux parents, visage peu visible ou de dos. Budget : 0 € au téléphone, ou 300 à 800 € avec un vidéaste local.

### 1.8 Icône

L'icône actuelle (tête de renard plate sur fond bleu très pâle) est sympathique mais **se perd sur le fond blanc du Play Store** et ne dit rien d'« école ».
- Garder le renard (c'est la mascotte), mais sur un **fond bleu franc** (#1C8FD6, la couleur de « Langage ») ou jaune soleil, pour le contraste.
- Agrandir la tête (elle doit occuper ~70 % de la zone sûre), ajouter **un petit élément scolaire** : une ardoise, un crayon derrière l'oreille ou un mortier de diplômé.
- Aucun texte dans l'icône (illisible et refusé dans certaines grilles).
- Tester 2 variantes en **expérience de fiche** (graphismes par défaut) : renard + ardoise sur fond bleu, contre renard sur fond jaune.
- Pour Android TV, la **bannière 320×180** affichée dans le lanceur doit porter le nom « Petits Savants » en Fredoka et le renard : c'est elle que l'enfant reconnaîtra sur l'écran d'accueil de la télé.

### 1.9 Feature graphic (1024×500)

La version actuelle est propre (nom, slogan, « De la TPS au CE2 », la télé avec la carte), mais :
- l'écran montré dans la télé est **trop petit et trop chargé** pour être lu en vignette ; remplacez-le par l'écran de l'exercice (4 grosses images) ou par le renard 3D en grand ;
- « De la TPS au CE2 » parle aux enseignants ; pour les parents, écrivez **« De 2 à 9 ans · Maternelle au CE2 »** ;
- ajoutez la promesse « Sans pub » en pastille ;
- gardez la zone centrale libre : sur certaines surfaces, Google pose un bouton lecture au centre quand une vidéo est liée.

### 1.10 Fiches personnalisées et expériences

Google Play permet **jusqu'à 50 fiches personnalisées** (nom, icône, descriptions, graphismes) ciblées par pays, par campagne Google Ads, par **URL dédiée**, ou vers les utilisateurs inactifs, et des **groupes de fiches** pour ne changer que quelques éléments ([Play Console, fiches personnalisées et expériences](https://play.google.com/console/about/customstorelistings/) ; [aide Play Console, expériences de fiche](https://support.google.com/googleplay/android-developer/answer/12053285?hl=en)). On ne peut pas cibler directement l'âge de l'enfant : on passe par des **URL de fiche** reliées aux pages du site, aux épingles Pinterest et aux campagnes.

| Fiche | Ciblage | Ce qui change |
|---|---|---|
| **Maternelle (3-5 ans)** | URL, liée aux pages « maternelle » du site et aux épingles Pinterest maternelle | Titre B ou « Petits Savants: jeux maternelle » ; description qui commence par les couleurs, les sons, compter jusqu'à 10 ; captures avec un profil « MS » ; légende « Il joue seul, même sans savoir lire ». |
| **CP – apprendre à lire (6 ans)** | URL, liée aux articles « apprendre à lire » | Description qui ouvre sur les sons, les syllabes, la lecture de mots ; captures de leçons de lecture CP. |
| **CE1-CE2 (7-9 ans)** | URL, liée aux pages « soutien scolaire » | Tables, heure, problèmes, grammaire ; ton plus « grand » ; mettre en avant l'anglais. |
| **Télé** | URL, liée à la page « Installer sur la télé » du site et aux posts « écran du salon » | Première capture : la télé dans le salon ; paragraphe d'ouverture « Faites de la télé un écran qui fait grandir » ; mode d'emploi « Installer sur d'autres appareils ». |
| **Belgique** | Pays BE | Remplacer TPS/PS/MS/GS par **« 1re, 2e, 3e maternelle »**, CP → **« 1re primaire »**, CE1/CE2 → **« 2e/3e primaire »** ; mentionner « programme français ». |
| **Suisse romande** | Pays CH | « 1H-2H » (enfantine) à « 5H » ; prix en CHF. |
| **Canada (Québec)** | Pays CA | « préscolaire, 1re à 3e année » ; noter que le contenu suit le programme français. |
| **Familles françaises à l'étranger et Afrique francophone** | Pays MA, SN, CI, CM, TN, DZ… + URL pour les réseaux d'expatriés (AEFE, groupes Facebook « Français à… ») | « Le programme de l'école française, où que vous soyez » ; insister sur le français et le suivi du programme pour un retour en France ; prix local. |
| **Utilisateurs inactifs** | Ciblage « inactifs » | « Nouvelles leçons, nouveaux cadeaux pour son animal » ; mettre en avant les nouveautés. |
| **Saison : cahier de vacances** (juin-août) | Pays FR, BE | « Révisions de l'été, de la MS au CE2 » ; à combiner avec un contenu promotionnel. |

**Expériences de fiche (A/B)** : une seule à la fois, au moins 7 jours et jusqu'à atteindre la significativité. Ordre conseillé : 1) icône, 2) première capture (salon contre écran nu), 3) description courte, 4) titre A contre B. Attendez d'avoir quelques centaines de visiteurs de fiche par semaine, sinon le test ne conclut jamais ([guide 2026 AppLaunchFlow](https://www.applaunchflow.com/blog/google-play-store-listing-experiments-guide-2026)).

### 1.11 Contenu promotionnel (ex-LiveOps), Teacher Approved, section Enfants

- **Contenu promotionnel** : des cartes d'événements et d'offres visibles dans le Play Store (types : remise, essai d'abonnement, contenu ajouté…), limitées dans le temps, **réservé aux applications qui remplissent les critères des « outils de croissance premium »** ([Play Console, Promotional content](https://play.google.com/console/about/programs/liveopsbeta/) ; [consignes](https://services.google.com/fh/files/helpcenter/google_play_promotional_content_guidelines.pdf)). Vérifiez l'éligibilité dans la Play Console ; si elle n'est pas ouverte, ré-essayez tous les trimestres. Calendrier type : rentrée (fin août), Toussaint, Noël (« un abonnement à offrir »), février, Pâques, cahier de vacances (juillet). Un programme permanent n'est pas accepté : chaque carte doit être un vrai événement.
- **Teacher Approved / onglet Enfants** : on ne postule pas. Les applications conformes au **Règlement Familles** deviennent éligibles et une partie est évaluée par des enseignants sur la qualité du design, l'attrait pour l'enfant, l'enrichissement, **la place des achats intégrés** et l'adéquation à l'âge ([Android Developers Blog, nov. 2022](https://android-developers.googleblog.com/2022/11/helping-kids-and-families-find-high-quality-apps-for-kids.html) ; [TechCrunch](https://techcrunch.com/2022/11/16/google-play-streamlines-policies-around-kids-apps-as-regulations-tighten/)). L'onglet Enfants est sur le Play Store **mobile**, ce qui est un argument de plus pour la version tablette. Pour maximiser les chances : paywall uniquement derrière l'espace parents, aucune pression sur l'enfant (pas de cadenas sur l'animal qui « pleure »), des illustrations moins génériques que les émojis, une voix plus naturelle.
- **Badge « Conforme au Règlement Familles »** dans la section Sécurité des données : remplir la déclaration avec soin.

---

## 2. Les autres magasins

Rappel des commissions : Google Play prend **15 % sur les abonnements** dès le premier jour ([aide Play Console, frais de service](https://support.google.com/googleplay/android-developer/answer/112622)) ; Apple prend 15 % avec le [Small Business Program](https://developer.apple.com/app-store/small-business-program/) (moins d'un million de dollars de revenus).

| Magasin | Y aller ? | Ordre | Coût direct | Effort | Commentaire |
|---|---|---|---|---|---|
| **Google Play phone + tablette** (même appli) | **Oui, priorité absolue** | 1 (T1 2027) | 0 € (compte déjà payé) | 4 à 8 semaines de dev : interface tactile, réponses au doigt, format portrait/paysage | Débloque l'onglet Enfants, Teacher Approved, 90 % du trafic de recherche Play, et le multi-appareils. |
| **App Store iPad + iPhone** | **Oui** | 2 (T2 2027) | 99 $/an + un Mac (ou Mac en location ~30 €/mois) | 6 à 10 semaines si le code est web/multiplateforme, plus si natif | En France, les familles aisées (cœur de cible d'un abonnement éducatif) sont très équipées en iPad. Catégorie Enfants : achats et liens **derrière un contrôle parental**, pas d'analytique tierce ni de publicité, tranches d'âge 5 et moins / 6-8 / 9-11 ([Apple, Kids](https://developer.apple.com/kids/)). Partage familial des abonnements possible (jusqu'à 5 membres, à activer) ([Apple, Family Sharing](https://developer.apple.com/kids/)). Apple TV : pas avant d'avoir validé l'iPad. |
| **Amazon Appstore (Fire TV)** | **Oui, mais léger** | 3 (T1-T2 2027) | 0 € | 1 à 3 semaines : remplacer Google Play Billing par **Amazon In-App Purchasing**, tests sur Fire TV Stick (~40 €) | L'Appstore Android ferme sur les téléphones (20 août 2025) mais **reste sur Fire TV et tablettes Fire** ([Amazon Developer](https://developer.amazon.com/apps-and-games/blogs/2025/02/upcoming-changes-to-amazon-appstore-for-android-devices-and-coins-program)). Les Fire TV sont nombreuses en France (Toshiba, Grundig, Sticks). Attention : les nouveaux Fire TV sous **Vega OS** n'exécutent plus les APK Android ; vérifier la compatibilité appareil par appareil. Supprimer alors la mention « installée à la main » du site. |
| **Samsung Tizen (TV Seller Office)** | Oui, après avoir réglé le paiement | 4 (S2 2027) | 0 € d'inscription, mais **partenariat requis** et certification Samsung ([Samsung Seller Office](https://developer.samsung.com/tv/distribute/seller-office) ; [checklist](https://developer.samsung.com/tv/distribute/launch-checklist)) | Certification de 2 à 6 semaines, retours possibles | Samsung revendique 5 millions de Smart TV actives en France ([Samsung Newsroom](https://news.samsung.com/fr/samsung-5-millions-de-smart-tv)) : c'est le premier parc. Aujourd'hui l'appli y est « en mode développeur », donc invisible pour le grand public. Prévoir le paiement (Samsung Checkout selon pays, ou code famille acheté ailleurs : à valider avec Samsung). |
| **LG Content Store (webOS, Seller Lounge)** | Oui, juste après Samsung | 5 (S2 2027) | 0 € d'inscription (à vérifier sur le Seller Lounge) | Contrôle qualité LG de quelques semaines | Le code web est en grande partie commun avec Tizen. Même question du paiement. |
| **Huawei AppGallery** | **Non pour l'instant** | 6 (2028, si demande d'Afrique) | 0 € | 1 à 2 semaines (HMS IAP) | Huawei pèse ~3 % des mobiles au Maroc ([StatCounter](https://gs.statcounter.com/vendor-market-share/mobile-tablet-/morocco)), encore moins en France ; pas de télés. Faible retour. |

**Conséquence immédiate** : tant que Samsung et LG sont ouverts « tout gratuit » en mode développeur, il n'y a pas d'incitation à payer pour ces familles, mais aussi peu d'utilisateurs. Dès la publication officielle sur ces magasins, il faut un paiement : le plus simple est que l'abonnement se prenne **sur le téléphone** (Google Play ou App Store) et s'active sur la télé LG/Samsung grâce au **code famille** (voir 3.6). Vérifiez les règles de chaque magasin sur les achats faits ailleurs avant de publier.

**Budget « tous magasins » la première année** : 99 $ (Apple) + ~40 € (Fire TV Stick de test) + éventuellement un Mac mini d'occasion (~400 €) = **moins de 600 €**, l'essentiel du coût étant votre temps de développement.

---

## 3. Monétisation

### 3.1 Analyse du paywall actuel (`8-premium.png`)

**Ce qui va bien**
- Honnête et clair : prix, renouvellement, résiliation, « Rien n'est payé pendant l'essai ». C'est exactement ce que demandent les règles de Google Play et ce qui rassure un parent.
- L'annuel est mis en avant (« Le plus avantageux », cadre jaune) et son prix mensuel équivalent (3,33 €) est affiché.
- « Pour tous les enfants de cette télé » : bon argument familial.
- « Plus tard » est visible : pas de dark pattern.

**Ce qui freine la conversion**
1. **Il n'y a pas de bouton d'action.** On ne voit pas « Commencer l'essai » : le parent doit deviner qu'il faut cliquer sur une carte. Sur une télé, chaque clic de télécommande en plus coûte cher.
2. **Le prix annuel est affiché en gros (39,99 €)** et l'équivalent mensuel en petit. Côte à côte avec 4,99 €, l'œil compare 39,99 à 4,99. Il faut inverser : **3,33 €/mois** en gros, « 39,99 € facturés une fois par an » en petit, et « **–33 %** » (4,99 × 12 = 59,88 €).
3. **« 7 jours gratuits » répété deux fois** : prend de la place sans rien apprendre.
4. **Les bénéfices sont des fonctionnalités** (« 151 leçons ») et non des résultats pour l'enfant (« Il apprend à lire avant le CP »). Aucun visuel du contenu verrouillé, aucune preuve sociale.
5. **« Pour tous les enfants de cette télé »** : c'est justement la limite ! Le parent comprend que la tablette n'est pas incluse.
6. **Pas de frise de l'essai** : la peur d'oublier d'annuler est le premier frein au démarrage d'un essai. Une frise « aujourd'hui / rappel / fin » lève ce frein.
7. **Moment d'affichage inconnu** : s'il apparaît quand l'enfant tombe sur un cadenas, c'est l'enfant qui le voit, pas le parent. C'est mauvais pour la conversion et risqué pour Teacher Approved.
8. Rien n'est fait **après « Plus tard »** : pas de deuxième chance, pas de rappel.

### 3.2 Le paywall amélioré

**Où et quand l'afficher**
- **Jamais en plein jeu devant l'enfant.** Quand l'enfant arrive sur une leçon Premium : écran doux côté enfant (« Cette leçon est dans le coffre de Premium. Demande à un grand ! » + le renard qui montre une clé) et **le paywall ne s'ouvre qu'après le code parent**.
- **Moment 1 : fin de l'onboarding parent** (après choix du code et création du profil) : une carte légère « Essayer Premium 14 jours » avec « Plus tard » en évidence. Environ 70 à 80 % des essais démarrent le jour de l'installation ([Adapty](https://adapty.io/blog/education-app-subscription-benchmarks/) : 71,3 % à J0 en éducation ; [RevenueCat 2025](https://revenuecat.com/state-of-subscription-apps-2025) : 80 % le premier jour).
- **Moment 2 (le meilleur) : après la 3e leçon réussie** ou le **premier coffre**, quand la quête du jour est validée et que le parent voit l'enfant content : notification douce dans l'espace parents « Léa a terminé 3 leçons ! Voici ce qui l'attend » avec la carte des leçons à venir.
- **Moment 3 : quand le gratuit de la classe est fini.**
- **Moment 4 : écran de progrès hebdomadaire** dans l'espace parents (« Cette semaine, Léa a appris 6 sons »), avec un lien discret vers Premium.

**Maquette texte (télé, 1920×1080, navigation à la télécommande, focus par défaut sur le bouton principal)**

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ [ ← ]  Tout Petits Savants, pour toute la famille                            │
│        Léa a déjà appris 3 sons. Il en reste 38 à découvrir en GS et au CP.   │
│                                                                              │
│  [Vignettes : 4 leçons verrouillées de la classe de Léa, avec le renard]     │
│                                                                              │
│  ✓ Les 151 leçons, de la maternelle au CE2, au fil des années               │
│  ✓ Tous les cadeaux pour son animal                                          │
│  ✓ Tous vos enfants, sur la télé, la tablette et le téléphone               │
│  ✓ Sans pub, sans compte, rien sur votre enfant ne quitte la maison         │
│                                                                              │
│  ( ● ) ANNUEL  « Le plus choisi par les familles »            –33 %         │
│        3,33 € / mois · 39,99 € facturés une fois par an                      │
│  ( ○ ) MENSUEL  4,99 € / mois · sans engagement                              │
│                                                                              │
│  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓                               │
│  ┃   Essayer 14 jours gratuits                   ┃  ← focus par défaut         │
│  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛                               │
│  Aujourd'hui : tout est ouvert · Jour 12 : on vous rappelle · Jour 14 : 1er  │
│  paiement, sauf si vous annulez (2 clics dans Google Play)                   │
│                                                                              │
│  [ Accès à vie : 79,99 € ]   [ Restaurer / J'ai un code famille ]  [ Plus tard ] │
│  petites mentions légales : renouvellement automatique, résiliation…          │
└──────────────────────────────────────────────────────────────────────────────┘
```

Points clés : le prénom de l'enfant et le nombre de leçons restantes **dans sa classe** (personnalisation, fortement corrélée à la conversion), annuel présélectionné, ancrage par la remise (–33 %) puis par l'accès à vie (79,99 € fait paraître 39,99 € raisonnable), « Le plus choisi » seulement quand ce sera vrai. Le rappel du jour 12 : sur télé, une notification système n'est pas fiable ; affichez **une bannière dans l'espace parents et à l'accueil** (« Votre essai se termine dans 2 jours ») à partir de J12. Cette honnêteté réduit les remboursements et les avis à une étoile.

**Après « Plus tard »** : ne plus montrer le paywall complet avant 3 jours. Au 2e refus, proposer une fois **le mensuel à 1,99 € le premier mois** (offre « deuxième chance » à éligibilité gérée par l'application, voir 3.7).

### 3.3 L'offre gratuite (42 leçons) : trop généreuse ?

**Non, elle est bien calibrée, et même un peu courte pour un enfant donné.** Les 42 leçons sont réparties sur toutes les classes : un enfant de GS ne voit que **les leçons gratuites de sa classe**, soit environ 6 à 10 leçons. Avec la quête du jour « Termine 3 leçons », il les finit en **2 à 4 jours**. C'est assez pour prouver la valeur, pas assez pour que le parent se dise « c'est suffisant ».

Comparaison : RevenueCat mesure 12,1 % de conversion téléchargement → payant pour les paywalls durs contre 2,2 % pour le freemium ([RevenueCat 2025](https://revenuecat.com/state-of-subscription-apps-2025)), mais un paywall dur est **incompatible** avec le positionnement « gratuit pour toujours », avec Teacher Approved et avec le bouche-à-oreille entre parents. Après conversion, la rétention à un an est quasi identique (27 % contre 28 %) ([RevenueCat 2026](https://www.revenuecat.com/state-of-subscription-apps-2026/)).

**Recommandations**
- Garder les 42 leçons (et le message « 42 leçons gratuites pour toujours », fort en ASO et en confiance).
- **Ajouter « la leçon du jour offerte »** quand le gratuit de la classe est épuisé : une leçon Premium par jour et par enfant, tirée au hasard. Ainsi la série de jours, la quête et l'animal restent vivants, l'habitude se crée, et le parent qui n'a pas pris l'essai le jour 1 peut convertir plus tard (23,5 % des essais en éducation démarrent après J31, record toutes catégories, selon [Adapty](https://adapty.io/blog/education-app-subscription-benchmarks/)).
- Rendre les **révisions** des leçons gratuites illimitées (elles le sont sans doute déjà) et laisser **les premiers cadeaux** gratuits, mais garder la couronne et les cadeaux à venir (mascottes personnalisables) dans Premium : c'est le levier « enfant » le plus fort, tant qu'il reste doux.
- Mettre en avant dans le paywall ce qui est perdu : « 38 leçons de GS vous attendent ».

### 3.4 Stratégie d'essai

| Option | Pour | Contre | Verdict |
|---|---|---|---|
| 7 jours avec carte (actuel) | Revenu rapide, standard | Une semaine d'école = 5 jours utiles ; peu de temps pour voir un progrès | Garder pour le **mensuel** |
| **14 jours avec carte** | Deux semaines de routine, le parent voit des progrès ; les essais longs convertissent mieux (17-32 j : 42,5 % ; ≤4 j : 25,5 %, [RevenueCat 2026](https://www.revenuecat.com/state-of-subscription-apps-2026/)) | Encaissement décalé d'une semaine | **Défaut pour l'annuel** |
| 30 jours avec carte | Conversion encore plus haute | Plus d'oublis, plus de remboursements, revenu décalé | À tester plus tard (rentrée) |
| Essai sans carte (« reverse trial ») : tout ouvert 7 jours sur l'appareil, puis paywall | Zéro friction, l'enfant goûte à tout | Conversion finale plus faible (il faut un 2e geste), contournable par réinstallation (marginal) | **Test A/B** contre 14 jours avec carte, sur 50 % des nouveaux, quand vous aurez >1 000 installations/mois |

Sur Google Play, un essai d'abonnement exige toujours un moyen de paiement ; l'essai « sans carte » ne peut donc être qu'une ouverture gérée par l'application. Adapty observe que les acheteurs passés par un essai génèrent **+50,4 % de LTV à 12 mois** en éducation par rapport aux achats directs ([Adapty](https://adapty.io/blog/education-app-subscription-benchmarks/)) : gardez l'essai.

### 3.5 Grille d'offres recommandée (France, TTC)

| Produit | Prix | Rôle |
|---|---|---|
| Mensuel | 4,99 €/mois, essai 7 j | Porte d'entrée, sans engagement |
| **Annuel** | **39,99 €/an, essai 14 j** | Produit principal, affiché « 3,33 €/mois » |
| Offre de lancement annuel (nov. 2026 → 31 janv. 2027) | **29,99 € la 1re année**, puis 39,99 € | Créer les premiers abonnés et avis ; « prix de lancement » (offre « nouveaux clients » sur l'abonnement annuel) |
| **Accès à vie « Famille fondatrice »** | **79,99 €** jusqu'au 31 janv. 2027, puis **99,99 €** (≈ 2,5 ans d'annuel) | Pour les anti-abonnement, trésorerie immédiate. Produit intégré unique (non consommable). Ne pas l'afficher en premier : c'est un ancrage. |
| Abonnement « à offrir » | 39,99 € (code d'un an) | Noël et anniversaires : grands-parents ; vendu via codes promo personnalisés ou plus tard sur le site |

Prix de marché comparables : Lunii+ à 9,90 €/mois après 3 mois à 6,90 € ([Lunii](https://lunii.com/en-eu/lunii-abonnement)) ; BayaM affiche des achats de 3,99 € à 89,99 € ([App Store](https://apps.apple.com/FR/app/id1078411766)). À 39,99 €/an, Petits Savants est **plutôt bas** ; ne baissez pas le prix, augmentez la valeur perçue (multi-appareils, nouvelles leçons).

Le **prix annuel pourra monter à 44,99 €** quand l'application aura la tablette, de meilleures illustrations et 200 leçons : testez-le alors sur les nouveaux utilisateurs uniquement.

### 3.6 Plan familial multi-appareils (télé + tablette + téléphone)

**Le problème** : aujourd'hui Premium est « pour tous les enfants de cette télé ». Le parent qui veut aussi la tablette dans la voiture croit devoir payer deux fois.

**La solution en 3 étages**

1. **Une seule application Android** (`com.petitssavants.android`) qui fonctionne sur télé, tablette et téléphone. Un abonnement Google Play appartient au **compte Google**, pas à l'appareil : sur chaque appareil connecté au même compte, l'application retrouve l'abonnement au lancement (requête des achats actifs, sans bouton). Écrire partout : « **Premium suit votre compte Google sur toutes vos télés, tablettes et téléphones Android.** »
2. **Le code famille** pour le reste (télé et compte Google différents, LG, Samsung, iPhone, navigateur) : après l'achat, l'espace parents affiche un code de 8 caractères + QR code (« PS-7KQ2-M9XA »). Sur un autre appareil : Espace parents › « J'ai un code famille ». Techniquement : RevenueCat avec un **identifiant d'utilisateur aléatoire** (aucun e-mail, aucun nom) ; le code famille est cet identifiant ou un alias. C'est exactement le schéma qu'utilise RevenueCat pour les abonnements multiplateformes ([RevenueCat, abonnements multiplateformes](https://www.revenuecat.com/blog/engineering/cross-platform-subscription)). Limiter à **6 appareils** par code, révocables dans l'espace parents.
3. **Les progrès restent locaux** (promesse tenue) : seul le droit Premium voyage. Plus tard, en option, une synchronisation chiffrée de bout en bout des profils, désactivée par défaut.

Bonus Apple : activer le **Partage familial** pour l'abonnement iOS (jusqu'à 5 membres de la famille).

À ne pas faire : un « plan famille » plus cher. La cible achète pour **la famille** dès le départ ; un deuxième niveau de prix complique la décision. Si un jour un niveau supérieur existe, ce sera pour **des contenus** (CM1-CM2, fiches imprimables), pas pour des appareils.

### 3.7 Codes promo, reconquête, win-back

**Codes promo Google Play** ([documentation](https://developer.android.com/google/play/billing/promo) ; [aide Play Console](https://support.google.com/googleplay/android-developer/answer/6321495)) :
- jusqu'à **10 000 codes à usage unique par trimestre et par abonnement**, ou un **code personnalisé** réutilisable (limite de 2 000 à 99 999 utilisations), qui donne **3 à 90 jours gratuits** et ne marche que pour les non-abonnés.
- Usages : `MAITRESSE` (60 jours pour les enseignants, Instagram « maîtresses »), `RENTREE` (30 jours), codes uniques pour les bêta-testeurs (1 an), pour les créateurs de contenu (sans exiger d'avis : interdit), pour les associations (parents d'élèves, AEFE, bibliothèques).
- Sur la télé, saisir un code est pénible : affichez un **QR code** dans l'espace parents qui ouvre la page d'utilisation du code sur le téléphone.

**Offres à éligibilité gérée par l'application** (« deuxième chance », reconquête, montée de gamme mensuel → annuel) : Google permet des offres dont l'application décide l'éligibilité, par exemple un deuxième essai gratuit ou une offre aux anciens abonnés, vendues seulement dans l'application ([aide Play Console, comprendre les abonnements](https://support.google.com/googleplay/android-developer/answer/12154973?hl=en)).
- **Mensuel → annuel** : au 2e renouvellement mensuel, bannière parents « Passez à l'année : 34,99 € au lieu de 39,99 € (vous avez déjà payé 9,98 €) ».
- **Désabonné (annulation en cours)** : à l'ouverture, « Premium s'arrête le 12 mars. Restez pour 2,49 €/mois pendant 3 mois ? »
- **Ancien abonné de plus de 60 jours** : « 50 % sur la première année : 19,99 € » à la rentrée ou en janvier.

**Win-back natif du Play Store** : Google annonce des offres de reconquête montrées directement aux anciens abonnés dans le Play Store, et teste les remises à l'annulation et les offres vers un plan moins cher ([Android Developers Blog, sept. 2026](https://android-developers.googleblog.com/2026/09/unlocking-Google-play-subscription-growth.html) ; [Android Authority](https://www.androidauthority.com/google-play-usage-based-billing-subscriptions-3716927/)). Configurez une offre win-back dès que la Console la propose : c'est gratuit, sans développement et sans donnée personnelle de votre côté. Attention : seulement ~5 % des abonnés annuels qui annulent reviennent un jour ([heise, d'après RevenueCat](https://heise.de/-11310636)) : l'effort doit porter sur **la rétention avant l'échéance** (nouvelles leçons visibles, bilan annuel « Léa a appris 42 sons cette année » un mois avant le renouvellement).

**Google Play Points** : programme sur sélection, avec un formulaire d'intérêt ; coupons sans développement ou objets intégrés remisés de 40 à 99 % ([Play Console, Play Points](https://play.google.com/console/about/programs/googleplaypoints/) ; [Android Developers](https://developer.android.com/guide/playpoints)). Postulez dès 1 000 abonnés environ ; ce n'est pas prioritaire avant.

**Délai de grâce et suspension de compte** : activez-les (récupération des paiements échoués, très fréquents sur les cartes de télé).

### 3.8 Prix régionaux

Google a retiré les modèles de tarification le 27 octobre 2025 : les prix se règlent produit par produit, pays par pays ([aide Play Console](https://support.google.com/googleplay/android-developer/answer/13542779)). Google propose une conversion automatique ; **remplacez-la** dans ces pays :

| Pays | Mensuel | Annuel | Accès à vie | Remarques |
|---|---|---|---|---|
| France, Belgique, Luxembourg, Monaco | 4,99 € | 39,99 € | 99,99 € | TVA différente (BE 21 %) : garder le même prix affiché |
| **Suisse** | 5,50 CHF | **44 CHF** | 109 CHF | Pouvoir d'achat élevé, références locales plus chères |
| **Canada** | 6,99 CAD | **54,99 CAD** | 139,99 CAD | Taxes ajoutées au paiement au Canada |
| **Maroc** | 19 MAD | **149 MAD** (~14 €) | 349 MAD | ~35 % du prix français ; vérifier les moyens de paiement locaux |
| **Sénégal, Côte d'Ivoire, Cameroun, Bénin, Togo, Mali, Burkina** | 1 500 FCFA | **12 000 FCFA** (~18 €) | 29 000 FCFA | Si la devise locale n'est pas proposée, Google facture en USD (2,49 $/19,99 $) ; la facturation opérateur (Orange, MTN) existe dans certains pays et compte énormément |
| Tunisie, Algérie | — | — | — | Vérifier la possibilité d'achat dans Google Play pour ces pays (souvent limitée) ; sinon codes famille vendus localement plus tard |
| Diaspora (États-Unis, Royaume-Uni, Émirats) | 5,99 $ / 4,99 £ / 22 AED | 44,99 $ / 39,99 £ / 169 AED | — | Fiche « familles à l'étranger » |

### 3.9 Projections chiffrées (12 mois, à partir du 8 novembre 2026)

**Taux de référence**
- Installation → essai : 10,9 % en moyenne toutes catégories ([Adapty 2026](https://adapty.io/state-of-in-app-subscriptions-report/)) ; 4,3 % pour les apps peu chères, 9,8 % pour les chères ([RevenueCat 2025](https://revenuecat.com/state-of-subscription-apps-2025)).
- Essai → payant : 25,6 % en moyenne Adapty, l'éducation étant parmi les plus hauts ; 42,5 % pour les essais de 17 à 32 jours (RevenueCat 2026).
- Téléchargement → payant en freemium : ~2,1-2,2 % médian (RevenueCat 2025 et 2026).
- LTV à 12 mois en éducation : 45,10 $ en moyenne (Adapty, apps établies).
- Spécificités Petits Savants : application télé (moins de « curieux », plus de familles motivées), pas de compte, prix bas, aucun avis au départ, pas encore de tablette.

**Hypothèses de revenu net par payant (année 1)** : annuel 39,99 € TTC → 33,33 € HT → **28,33 €** après 15 % Google ; mensuel 4,99 € → **3,53 €/mois net**, conservé ~5 mois en moyenne → 17,6 €. Mix 65 % annuel / 35 % mensuel, un peu d'accès à vie et d'offres de lancement : **~22 € net par payant** sur l'année 1.

| | Prudent | Central | Ambitieux |
|---|---|---|---|
| Ce qui se passe | Télé seule toute l'année, pas de vidéo, pas d'avis avant février | Fiche optimisée, 100 avis à 4,5+, tablette/téléphone Android en mars, Fire TV, Pinterest + blog | Central + iPad en juin, Samsung/LG officiels en septembre, une mise en avant Play ou un passage presse/influenceur |
| Installations sur 12 mois | 5 000 | 25 000 | 80 000 |
| Installation → essai | 5 % (250) | 8 % (2 000) | 10 % (8 000) |
| Essai → payant | 35 % (88) | 40 % (800) | 45 % (3 600) |
| Achats directs, offres tardives, à vie | +0,3 % (15) | +0,5 % (125) | +0,7 % (560) |
| **Payants cumulés** | **~100** (2,0 %) | **~925** (3,7 %) | **~4 160** (5,2 %) |
| **Revenu net 12 mois** | **~2 200 €** | **~20 000 €** | **~95 000 €** |
| Abonnés actifs au mois 12 | ~70 | ~650 | ~3 000 |
| Revenu net récurrent mensuel au mois 12 | ~150 € | ~1 400 € | ~6 500 € |

Lecture : le scénario central demande surtout **la version tablette/téléphone** (le volume de recherche est là) et **des avis**. Sans eux, on reste dans le prudent quel que soit le paywall. Les leviers de conversion (paywall, essai de 14 jours, prix) font passer de 2 % à ~3,7 % ; les leviers de volume (plateformes, ASO, contenus) font passer de 5 000 à 25 000 ou 80 000 installations. **Le volume est le premier problème.**

Indicateurs pour savoir dans quel scénario vous êtes à 90 jours : installations/semaine (prudent < 100, central ~ 400-500, ambitieux > 1 200), installation → essai (≥ 8 %), annulation pendant l'essai (≤ 50 %).

---

## 4. Mesurer sans collecter de données d'enfants

### 4.1 Le principe

Mesurer **des appareils et des achats, jamais des enfants** : pas de prénom, pas de classe, pas d'identifiant publicitaire, pas de suivi des réponses, pas de SDK publicitaire ni d'attribution. Le Règlement Familles rend le développeur responsable des données collectées par tous ses SDK, analytiques et facturation compris ([aide Play Console, SDK publicitaires auto-certifiés](https://support.google.com/googleplay/android-developer/answer/12918983)) ; pour les besoins d'analyse, Google recommande l'**App set ID** plutôt que l'identifiant publicitaire ([aide Play Console, Familles](https://support.google.com/googleplay/android-developer/answer/11043825)). Sur iOS, la catégorie Enfants interdit l'analytique tierce qui identifie ([Apple, Kids](https://developer.apple.com/kids/)).

### 4.2 Les sources, par ordre de priorité

| Source | Ce qu'elle donne | Données d'enfants ? |
|---|---|---|
| **Play Console › Statistiques** | Visiteurs de fiche, **taux de conversion de la fiche** par source (recherche, exploration, URL) et par pays ; installations ; **installateurs conservés** à J1, J7, J15, J30 ; désinstallations ; termes de recherche menant à la fiche | Non, agrégats Google |
| **Play Console › Abonnements** | Essais, conversions, annulations, rétention par période, **raisons d'annulation** (enquête Google), revenus par pays et par offre | Non |
| **Play Console › Android vitals** | Plantages, ANR, démarrages lents par appareil (télés bas de gamme !) | Non |
| **Liens UTM** (`&referrer=utm_source=pinterest&utm_campaign=fiches_gs`) | Installations par canal dans les rapports d'acquisition | Non |
| **RevenueCat** (gratuit jusqu'à 2 500 $ de revenu mensuel suivi) | Conversion d'essai, churn, **LTV par cohorte**, MRR, remboursements, A/B de paywall (Experiments) ; et le **code famille** | Identifiant aléatoire + historique d'achat. Ne **pas** appeler la collecte d'identifiants d'appareil ni d'attributs (e-mail, nom) |
| **Compteurs agrégés internes (optionnels)** | Ex. : nombre de leçons terminées par jour et par matière, toutes télés confondues | Uniquement si envoyés **sans identifiant**, par lots, arrondis (seuil minimal de 20), et uniquement si le parent l'accepte dans l'espace parents (« Aider Petits Savants à s'améliorer ») |

### 4.3 Les mesures à suivre (tableau de bord hebdomadaire)

| Mesure | Source | Objectif à 6 mois |
|---|---|---|
| Conversion de la fiche (visiteur → installation) | Play Console | ≥ 30 % (France, catégorie Éducation) |
| Rétention installateurs J1 / J7 / J30 | Play Console | 45 % / 25 % / 12 % |
| Installation → essai | RevenueCat / Play Console | ≥ 8 % |
| Essai → payant | RevenueCat | ≥ 40 % (essai 14 j) |
| Part annuel / mensuel | RevenueCat | ≥ 60 % annuel |
| Churn mensuel des mensuels | RevenueCat | ≤ 12 %/mois |
| Renouvellement annuel (à M12) | RevenueCat | ≥ 45 % |
| LTV à 12 mois par payant | RevenueCat | ≥ 25 € net |
| Note moyenne / nb d'avis | Play Console | ≥ 4,5 / 100 avis à J+90 |
| Taux de remboursement | Play Console | ≤ 3 % |

### 4.4 Concilier avec la promesse « aucune donnée collectée »

Dès qu'il y a un abonnement suivi (RevenueCat, code famille), **« aucune donnée collectée » n'est plus exact** : la section Sécurité des données doit déclarer l'**historique d'achat** et un **identifiant d'appareil ou autre** (collectés, non partagés, à des fins de fonctionnement de l'app et d'analyse). Une promesse inexacte est un risque (refus Play, perte de confiance). Nouvelle formulation, plus forte et vraie :

> **Rien sur votre enfant ne quitte la maison.** Ni compte, ni publicité, ni pistage. Les profils et les progrès restent sur la télé. Seul votre abonnement est vérifié, de façon anonyme.

À mettre à jour : site (chips du héros, carte « Vie privée »), politique de confidentialité (liste des sous-traitants : Google, RevenueCat ; finalités ; durée), description Play, fiche Sécurité des données.

---

## 5. Les 100 premiers avis

### 5.1 Où et quand demander

- L'**API d'avis intégrés** fonctionne désormais sur Google TV : l'utilisateur note à la télécommande et dicte ou tape son avis sur le téléphone ([Android Developers Blog, mai 2025](https://android-developers.googleblog.com/2025/05/in-app-ratings-and-reviews-for-tv.html)). Google limite l'affichage (quota) et interdit de poser une question du type « Vous aimez ? » avant, ou de mettre un bouton qui déclenche la fenêtre ([Android Developers, In-App Review](https://developer.android.com/guide/playcore/in-app-review?hl=fr)).
- **Dans l'espace parents uniquement**, jamais dans l'écran de l'enfant (il noterait 5 étoiles pour voir le renard danser, ce qui ne vaut rien, et c'est contraire à l'esprit du Règlement Familles).
- Déclencheurs, un seul par appareil et par mois maximum :
  1. le parent ouvre les progrès **et** l'enfant a terminé au moins 8 leçons **et** a une série de 3 jours ;
  2. le parent revient dans l'espace parents le lendemain d'un badge « 5 jours de suite » ;
  3. 10 jours après le début de l'abonnement (pas pendant l'essai, pas juste après un paiement).
- Ne jamais demander après un bug, une limite de temps d'écran atteinte ou un paywall refusé.
- Pour les avis écrits, ajouter en bas de l'espace parents un lien discret « Nous écrire » (e-mail) : les mécontents vous écrivent au lieu de noter 1 étoile.

### 5.2 Les sources honnêtes des premiers avis

| Source | Comment | Avis attendus en 90 jours |
|---|---|---|
| Entourage (familles, amis parents, collègues) | Message personnel : « Si l'appli plaît à vos enfants, un avis honnête nous aiderait beaucoup. » Pas d'avis de vous-mêmes ni de votre famille proche (interdit et détectable). | 15-25 |
| Bêta-testeurs (test fermé) | Les testeurs fermés donnent un retour privé, pas public : passez-les en production, offrez-leur **1 an de Premium par code promo**, en remerciement de leur aide, **sans condition d'avis** | 10-20 |
| Enseignants (maternelle, CP) | Code `MAITRESSE` 60 jours ; comptes Instagram et groupes Facebook d'enseignants ; ils recommandent aux parents, ce qui vaut plus qu'un avis | 10-20 + bouche-à-oreille |
| Groupes de parents (Facebook « mamans de… », forums, Discord IEF) | Présentation transparente « nous sommes deux parents, voici notre appli », demander des **retours**, pas des avis | 15-30 |
| Demande dans l'application (5.1) | Automatique | 30-60 |

Interdits (règles Google) : avis payés ou en échange d'un avantage (« Premium contre 5 étoiles »), avis groupés, faux comptes. Un code offert est un cadeau, jamais une contrepartie.

### 5.3 Répondre aux avis

Répondre à **tous** les avis les 3 premiers mois, sous 48 h, signé d'un prénom (« Claire, co-fondatrice »). Les réponses sont publiques : elles s'adressent aux futurs parents autant qu'à l'auteur.

- **5 étoiles** : « Merci ! Le renard de [prénom de l'enfant si l'avis le cite] est content. Une matière qu'il aimerait voir en plus ? »
- **Problème technique** : « Désolés ! Quelle télé avez-vous (marque, modèle) ? Écrivez-nous à pondonda@gmail.com, on corrige vite. » Puis répondre à nouveau après la correction : Google signale la mise à jour de la réponse, beaucoup de parents remontent leur note.
- **« Trop cher / tout est payant »** : « Merci pour votre retour. 42 leçons restent gratuites pour toujours, et une leçon Premium est offerte chaque jour. Premium (3,33 €/mois à l'année) finance de nouvelles leçons, sans publicité. »
- **Voix robotique / émojis** : « Vous avez raison, c'est notre chantier n°1 : de vraies voix et de vraies illustrations arrivent dans les prochaines mises à jour. »
- Ne jamais contester sur le fond un avis d'enfant ou de parent, ne jamais citer de donnée personnelle.

---

## 6. Le site : une vraie page de conversion avec du SEO

### 6.1 Corrections immédiates (cette semaine)

1. **Remplacer « Bientôt sur Google Play »** par le badge officiel « Disponible sur Google Play », avec un lien UTM (`https://play.google.com/store/apps/details?id=com.petitssavants.android&referrer=utm_source%3Dsite%26utm_medium%3Dhero`).
2. **Renseigner l'éditeur et créer les mentions légales** (obligation de la loi pour la confiance dans l'économie numérique, art. 6 III, [Service-Public.fr](https://entreprendre.service-public.fr/vosdroits/F31228)) : nom de l'entreprise ou de l'entrepreneur individuel, adresse (une domiciliation suffit), SIREN/SIRET, téléphone ou e-mail, **directeur de la publication**, **hébergeur** (GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis), et, si elle existe, le numéro de TVA. Pour vendre un abonnement, il vous faut une structure (micro-entreprise au minimum ; une SAS si vous visez d'autres magasins et des factures). Le même nom doit apparaître comme **développeur sur Google Play** et dans les conditions d'abonnement.
3. **Adresse e-mail professionnelle** : `bonjour@petitssavants.fr` plutôt qu'un Gmail personnel (confiance + délivrabilité). Un **nom de domaine** (~10 €/an) : `petitssavants.fr`, branché sur GitHub Pages. C'est aussi meilleur pour le SEO qu'un sous-dossier `github.io`.
4. **Mettre à jour la promesse vie privée** (voir 4.4).
5. Ajouter un **visage** : « Qui sommes-nous ? » (le couple, pourquoi l'application, une photo). Pour une app d'enfants vendue à des parents, c'est un facteur de confiance majeur ; les parents veulent des signes d'efficacité et de recommandation ([Joan Ganz Cooney Center, via Game Developer](https://www.gamedeveloper.com/business/making-sense-of-children-s-educational-apps)).

### 6.2 Restructurer la page d'accueil pour convertir

Ordre conseillé :
1. **Héros** : « Votre enfant apprend à lire et à compter… sur la télé du salon » / sous-titre « De 2 à 9 ans, le programme de l'école, lu à voix haute. Sans pub, sans compte. » / bouton principal **« Essayer gratuitement »** (Google Play) + bouton secondaire « Voir la vidéo » / sous le bouton : « 42 leçons gratuites pour toujours · Essai Premium 14 jours ».
2. **Vidéo de 40 s** (la même que sur Play).
3. **« Pour qui ? »** : 3 cartes cliquables Maternelle / CP / CE1-CE2, menant aux pages dédiées (et aux fiches Play personnalisées correspondantes).
4. **Comment ça marche** (existe déjà, très bien).
5. **Ce que disent les parents et les enseignants** (dès les premiers avis réels).
6. **Installer sur la télé en 1 minute** : « Sur votre téléphone, ouvrez Google Play › Installer sur d'autres appareils › votre télé », avec une capture d'écran du téléphone. Puis la table des télés.
7. **Prix** (existant, mis à jour : « télé, tablette et téléphone », 14 jours, accès à vie).
8. **FAQ** (existante) + « Est-ce que mon enfant passe trop de temps devant l'écran ? » (réponse : limite par jour, écran de pause, 15 minutes suffisent).

### 6.3 Le blog : répondre aux questions des parents

GitHub Pages sert des pages statiques : un générateur simple (Eleventy, Hugo, Jekyll natif de GitHub Pages) suffit. Un article tous les 15 jours, 1 000 à 1 800 mots, avec une **fiche PDF** et un appel vers l'application à la fin. Les requêtes ci-dessous ont un volume de recherche Google réel et saisonnier (estimations, à vérifier dans Google Search Console après 3 mois) :

| Article (requête cible) | Saison | Fiche gratuite associée |
|---|---|---|
| Exercices GS à imprimer : 20 fiches pour la grande section | toute l'année, pic septembre | Pack 10 fiches GS (sons, nombres jusqu'à 10) |
| Apprendre à lire en GS : faut-il commencer avant le CP ? | sept.-janv. | Le tableau des sons, à afficher |
| Apprendre à lire au CP : les étapes mois par mois | août-octobre | Calendrier de lecture du CP |
| Mon enfant confond b et d : que faire ? | toute l'année | Fiche b/d/p/q |
| Exercices de graphisme en maternelle (PS, MS, GS) | sept.-nov. | Lignes et boucles à tracer |
| Apprendre à écrire son prénom en maternelle | septembre | Modèle de prénom en écriture cursive (généré à la demande plus tard) |
| Tables de multiplication : astuces et jeux pour le CE1-CE2 | janvier-mars | Tables illustrées |
| Lire l'heure au CE1 : méthode facile | toute l'année | Horloge à découper |
| Cahier de vacances maternelle / CP : notre programme de l'été gratuit | mai-juillet | **Cahier de vacances 20 jours** (aimant à e-mails majeur) |
| Combien de temps d'écran à 3, 6 et 9 ans ? | toute l'année | Charte d'écran familiale à imprimer |
| Préparer l'entrée en CP : la check-list | juin-août | Check-list |
| Anglais en maternelle : les 50 premiers mots | toute l'année | Imagier anglais |
| Les meilleures applications éducatives sans pub (comparatif honnête) | décembre (cadeaux), rentrée | — |

Chaque article : titre exact de la requête, sommaire, images, encadré « En 15 minutes par jour sur la télé » vers Petits Savants avec un lien UTM, données structurées `Article` et `FAQPage`, et lien vers la fiche Play personnalisée de l'âge concerné.

### 6.4 Fiches gratuites contre une adresse e-mail

- Formulaire **Brevo** (société française, offre gratuite jusqu'à 300 e-mails/jour) intégré en HTML sur GitHub Pages, **double opt-in**, case de consentement non pré-cochée, lien vers la politique de confidentialité du site (distincte de celle de l'application, c'est un traitement de données de **parents**, pas d'enfants : base légale le consentement, droit de désinscription en un clic, conformément au RGPD et aux recommandations de la CNIL sur la prospection par e-mail).
- Séquence automatique de 5 e-mails sur 14 jours : 1) la fiche ; 2) « 3 jeux sans écran pour travailler les sons » ; 3) présentation de Petits Savants (vidéo) ; 4) témoignage + « comment l'installer sur la télé » ; 5) code `FICHES30` (30 jours gratuits par code promo personnalisé).
- Puis une lettre mensuelle (nouvelles fiches, nouvelles leçons). Objectif : 1 000 abonnés à 6 mois ; un taux de 3 à 5 % vers un essai est un bon résultat.

### 6.5 Pinterest

Pinterest est le moteur de recherche n°1 des parents et enseignants pour « fiches maternelle », « activités GS », « graphisme ». Créer un compte professionnel, 6 tableaux (Maternelle, GS, CP lecture, Maths CE1, Graphisme, Anglais), **3 à 5 épingles par semaine** au format 1000×1500 : la fiche en aperçu + titre lisible (« 10 fiches de sons GS à imprimer, gratuit »). Chaque épingle pointe vers l'article du blog (pas directement vers Play). Une épingle vit des mois, voire des années : c'est le canal gratuit le plus rentable pour ce type de produit.

### 6.6 SEO technique

- Titre de page d'accueil : « Petits Savants · Application éducative maternelle au CE2 sur la télé » ; balises `og:` et Twitter pour un bel aperçu quand les parents partagent le lien sur WhatsApp.
- Données structurées `SoftwareApplication` (nom, système, catégorie EducationalApplication, prix, note quand elle existera).
- Un `sitemap.xml`, Google Search Console, et la version anglaise déjà présente (`en.html`) reliée par `hreflang` dans les deux sens.
- Des pages par âge et par télé (« Application éducative pour Android TV », « … pour Fire TV », « … pour Samsung ») : peu de concurrence, intention très qualifiée.
- Vitesse : images en WebP, `loading="lazy"` (déjà fait).

---

## 7. Plan d'action sur 90 jours

| Semaine | Action |
|---|---|
| S1 | Corriger le site (bouton Play, éditeur, mentions légales, promesse vie privée) ; nouvelle fiche Play (titre A, courte A, description longue) ; captures 1-8 ; répondre à chaque avis |
| S2 | Offre de lancement 29,99 € et accès à vie 79,99 € ; codes promo bêta-testeurs et enseignants ; vidéo de 40 s |
| S3-S4 | Nouveau paywall (bouton, 3,33 €/mois, frise, 14 jours sur l'annuel) ; déclenchement côté parent ; demande d'avis intégrée ; RevenueCat avec identifiant aléatoire |
| S5-S6 | Fiches personnalisées Belgique, Suisse, Canada, Afrique ; prix régionaux ; première expérience de fiche (icône) |
| S5-S10 | Version tablette et téléphone de l'application Android ; code famille |
| S6-S12 | Blog : 6 articles + 6 fiches ; Brevo ; Pinterest 3 épingles/semaine ; contenu promotionnel « Noël » si éligible |
| S8-S12 | Amazon Appstore (Fire TV) ; préparation iPad ; « leçon du jour offerte » ; offre de reconquête |

---

## Sources principales

- RevenueCat, [State of Subscription Apps 2026](https://www.revenuecat.com/state-of-subscription-apps-2026/), [édition éducation](https://www.revenuecat.com/state-of-subscription-apps-2026-education), [édition 2025](https://revenuecat.com/state-of-subscription-apps-2025), [abonnements multiplateformes](https://www.revenuecat.com/blog/engineering/cross-platform-subscription)
- Adapty, [State of In-App Subscriptions 2026](https://adapty.io/state-of-in-app-subscriptions-report/), [benchmarks éducation](https://adapty.io/blog/education-app-subscription-benchmarks/), [essai ou achat direct](https://adapty.io/blog/free-trial-vs-direct-purchase-subscription-apps/)
- Google Play Console : [fiches personnalisées et expériences](https://play.google.com/console/about/customstorelistings/), [expériences de fiche](https://support.google.com/googleplay/android-developer/answer/12053285?hl=en), [contenu promotionnel](https://play.google.com/console/about/programs/liveopsbeta/), [consignes du contenu promotionnel](https://services.google.com/fh/files/helpcenter/google_play_promotional_content_guidelines.pdf), [comprendre les abonnements](https://support.google.com/googleplay/android-developer/answer/12154973?hl=en), [codes promo](https://developer.android.com/google/play/billing/promo), [Play Points](https://developer.android.com/guide/playpoints), [prix par pays](https://support.google.com/googleplay/android-developer/answer/13542779), [frais de service](https://support.google.com/googleplay/android-developer/answer/112622), [SDK auto-certifiés Familles](https://support.google.com/googleplay/android-developer/answer/12918983), [API d'avis intégrés](https://developer.android.com/guide/playcore/in-app-review?hl=fr)
- Android Developers Blog : [avis intégrés sur la TV (2025)](https://android-developers.googleblog.com/2025/05/in-app-ratings-and-reviews-for-tv.html), [croissance des abonnements, win-back (2026)](https://android-developers.googleblog.com/2026/09/unlocking-Google-play-subscription-growth.html), [Teacher Approved et Règlement Familles (2022)](https://android-developers.googleblog.com/2022/11/helping-kids-and-families-find-high-quality-apps-for-kids.html)
- AppTweak : [mots-clés Google Play](https://www.apptweak.com/en/aso-blog/how-to-add-keywords-to-apps-on-google-play), [guide ASO Google Play](https://www.apptweak.com/en/aso-blog/aso-for-google-play-app-store-optimization-guide-for-android), [facteurs de classement](https://www.apptweak.com/en/aso-blog/google-play-ranking-factors)
- Amazon : [fin de l'Appstore Android sur mobiles](https://developer.amazon.com/apps-and-games/blogs/2025/02/upcoming-changes-to-amazon-appstore-for-android-devices-and-coins-program) ; Samsung : [Seller Office](https://developer.samsung.com/tv/distribute/seller-office), [5 millions de Smart TV en France](https://news.samsung.com/fr/samsung-5-millions-de-smart-tv) ; Apple : [Kids](https://developer.apple.com/kids/), [Small Business Program](https://developer.apple.com/app-store/small-business-program/)
- Comportement des parents : [PBS KIDS via App Developer Magazine](https://appdevelopermagazine.com/educational-content-apps-for-children/), [Joan Ganz Cooney Center via Game Developer](https://www.gamedeveloper.com/business/making-sense-of-children-s-educational-apps)
- Mentions légales : [Service-Public.fr Entreprendre](https://entreprendre.service-public.fr/vosdroits/F31228)

*Limites : les pages RevenueCat, Adapty et Android Developers Blog n'ont pas pu être ouvertes en entier depuis la session (domaines non autorisés) ; les chiffres cités viennent de leurs extraits publics. Les volumes de mots-clés, les règles de paiement Samsung/LG et la disponibilité des devises FCFA dans Google Play sont à confirmer avant décision.*
