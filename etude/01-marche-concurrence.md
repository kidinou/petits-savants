# Petits Savants : étude de marché et concurrentielle

*Rédigée le 8 novembre 2026, jour de la publication sur Google Play. Base : fiche de contexte (00-contexte.md), captures d'écran de l'app, et recherches web.*

> **Comment lire ce document.** Chaque chiffre sourcé porte un lien. La mention **[Estimation]** signale un calcul ou une hypothèse de notre part. La mention **[Non vérifié]** signale une information connue avant cette étude mais qui n'a pas pu être revérifiée en ligne pendant la session.
>
> **Limites de la collecte.** Les pages des éditeurs (App Store, Kaligo, Adapty, RevenueCat, etc.) n'étaient pas consultables directement depuis cet environnement : play.google.com et la plupart des sites étaient bloqués. Les chiffres viennent donc des extraits fournis par le moteur de recherche. Le quota de recherches a été atteint avant d'avoir couvert Edumoov, Educlick, Schoolmouv, Ouiz, Mon Kit Maternelle et Logiciel éducatif. Pour ces acteurs, nous donnons ce que nous savons en le signalant. **Avant toute décision chiffrée, vérifiez les prix des concurrents dans les stores.**

---

## 1. Résumé pour les fondateurs

1. **Sur la télé, en français, il n'existe pas de concurrent direct visible qui suive le programme scolaire avec des exercices.** Les seules offres « enfants » sérieuses sur Android TV sont des offres vidéo, comme [Okoo de France Télévisions](https://www.universfreebox.com/?p=60268), qui est gratuit. Les leaders de l'apprentissage, comme Lingokids, Kaligo, Bayam ou Khan Academy Kids, visent le téléphone et la tablette. C'est un vrai **océan bleu**, mais un océan **petit et difficile à trouver**.
2. **La télé est l'écran principal des petits.** Chez les 3-5 ans, elle représente [71 % du temps d'écran quotidien](https://www.santepubliquefrance.fr/index.php/presse/temps-decran-des-enfants-de-3-a-11-ans-un-usage-precoce-quotidien-et-marque-par-les) selon Santé publique France. Le pari « télé du salon » a donc une base solide.
3. **Les prix (4,99 €/mois, 39,99 €/an) sont bas** face à Kaligo (7,99 €/mois, 83,88 €/an), Lingokids (14,99 €/mois, 89,99 €/an) et Bayam (5,99 à 9,99 €/mois). Ils sont **cohérents avec le niveau actuel du produit** : emojis, voix de synthèse, QCM uniquement. Il ne faut pas les baisser. Il faut plutôt **monter la valeur perçue**.
4. **L'essai de 7 jours est court.** Selon RevenueCat, les essais de 17 à 32 jours convertissent mieux, avec une [médiane de 42,5 %](https://www.revenuecat.com/state-of-subscription-apps-2026/), contre 25,5 % pour les essais de moins de 4 jours. Nous conseillons de tester un essai de 14 jours.
5. **Deux urgences de crédibilité.** D'abord, le nom de l'éditeur manque sur le site (« [NOM DE L'ÉDITEUR] »). Ensuite, la synthèse vocale prononce les **sons isolés** de façon peu fiable ([ch], [v]…), alors que les leçons de phonologie reposent dessus. Pour un parent ou un orthophoniste, c'est éliminatoire.
6. **Le calendrier est favorable.** Le lancement tombe 7 semaines avant Noël, et les grands-parents cherchent des cadeaux « utiles ». Un code cadeau ou une offre à vie limitée peut créer le premier pic de ventes.

---

## 2. Le marché

### 2.1 Taille de la cible en France

| Indicateur | Chiffre | Source |
|---|---|---|
| Élèves du 1er degré (rentrée 2025) | 6 154 900 | [DEPP, note 25-58](https://www.education.gouv.fr/depp/les-effectifs-dans-le-premier-degre-6155-millions-d-eleves-scolarises-la-rentree-2025-467612) |
| dont maternelle | 2 231 600 | idem |
| dont élémentaire (CP-CM2) | 3 864 600 | idem |
| Tendance | -107 000 élèves en un an, baisse prévue jusqu'en 2029 | [DEPP prévisions](https://www.education.gouv.fr/depp/previsions-d-effectifs-d-eleves-du-premier-degre-la-baisse-devrait-se-poursuivre-jusqu-en-2029-452706) |
| Enfants en instruction en famille (IEF) | 30 644 en 2024-25, environ 28 800 à 30 000 en 2025-26 | [Vie publique](https://www.vie-publique.fr/en-bref/299312-instruction-en-famille-quel-bilan-quatre-ans-apres-la-reforme), [Banque des territoires](https://www.banquedesterritoires.fr/josiane-corneloup-linstruction-en-famille-est-devenue-une-liberte-conditionnelle) |

**[Estimation] Cible TPS-CE2 en France : environ 4,5 millions d'enfants.** Le calcul additionne la maternelle (2,23 M) et environ 3/5 de l'élémentaire pour le CP, le CE1 et le CE2 (2,3 M). En comptant environ 1,4 enfant de cette tranche d'âge par foyer concerné, on obtient **environ 3,2 millions de foyers**.

**[Estimation] Foyers réellement atteignables par l'app Android TV.**
- [93 % des foyers ont une télé et 85 % de ces télés sont connectées](https://www.arcep.fr/fileadmin/user_upload/pole-numerique-arcep-arcom/arcom-referentiel-des-usages-numeriques-2025-infographies.pdf) (Arcom 2025). Médiamétrie mesure plus bas, avec [72 % de foyers équipés d'une TV connectée](https://lareclame.fr/mediametrie-etude-watch-2025-328295), selon une définition différente.
- Il n'existe **aucun chiffre public fiable** sur la part d'Android TV et de Google TV en France. Nous l'estimons à **25-35 % des foyers connectés**, en additionnant les téléviseurs Sony, TCL, Philips et Xiaomi, les clés Google TV et les box d'opérateurs : [Freebox Pop et Mini 4K, Bbox Must et Ultym, RED by SFR Connect TV, décodeur Orange Home Cinema](https://bonforfait.fr/box-internet/android-tv).
- Cela donne **environ 0,6 à 0,9 million de foyers cibles** équipés d'un appareil Android TV ou Google TV. C'est une base suffisante pour une petite équipe, mais pas énorme.

**Le marché parascolaire existe déjà, sur papier.** Les cahiers de vacances pèsent [plus de 30 M€ et 4,7 millions d'exemplaires par an](https://www.livreshebdo.fr/article/les-meilleures-ventes-de-livres-du-30-juin-au-6-juillet-2025-freida-mcfadden-plus-forte-que), dont près de la moitié pour Passeport (Hachette), d'après NielsenIQ. On en vend environ 4,2 millions pendant l'été 2025. Ce chiffre prouve que les parents paient volontiers pour « faire réviser » leur enfant selon le programme. L'enjeu est de transformer cette dépense ponctuelle, d'environ 7 à 10 € par cahier **[Estimation]**, en abonnement.

Le secteur edtech français pèse [1,8 Md€ en 2025](https://www.letudiant.fr/educpros/actualite/edtech-un-marche-francais-en-essor-qui-doit-se-structurer.html) (EY-Parthenon / EdTech France). Il est surtout porté par la formation professionnelle, à 66 %. Le segment scolaire grand public reste **petit et fragmenté**, sans chiffre B2C fiable publié.

### 2.2 Temps d'écran des 3-9 ans : ce que disent les données

Ces chiffres viennent de l'enquête Enabee de Santé publique France, [publiée en septembre 2025 sur des données de 2022](https://www.santepubliquefrance.fr/index.php/presse/temps-decran-des-enfants-de-3-a-11-ans-un-usage-precoce-quotidien-et-marque-par-les).
- **3-5 ans : 1 h 22 par jour en moyenne. 6-8 ans : 1 h 53.** Le temps d'écran **double le week-end et pendant les vacances**.
- **La télé représente 71 % du temps d'écran des 3-5 ans** et reste l'écran dominant jusqu'à la fin du primaire.
- 15 % des moins de 6 ans ont déjà leur propre tablette.
- Les inégalités sont fortes : 72 % des 3-5 ans dépassent une heure par jour dans les familles les moins diplômées, contre 35 % dans les plus diplômées.
- Un enfant de 3,5 à 6,5 ans exposé aux écrans **le matin avant l'école** a [3 fois plus de risque de trouble primaire du langage](https://cardiologie.lequotidiendumedecin.fr/actus-medicales/sante-publique/une-exposition-des-jeunes-enfants-aux-ecrans-des-le-matin-et-sans-en-discuter-multiplie-le-risque-de), surtout quand on n'en parle pas en famille.
- Santé publique France a publié en octobre 2026 un dossier, « Grandir avec les écrans ».

**Ce que ça implique pour Petits Savants.**
- **Le climat est très défavorable aux écrans pour les plus petits.** La commission d'experts mandatée par l'Élysée en 2024 recommande **pas d'écran avant 3 ans** et un usage limité et accompagné entre 3 et 6 ans **[Non vérifié dans cette session]**. Afficher une cible « dès 2 ans » ou « TPS » est donc **risqué en communication**. Mieux vaut présenter l'âge minimal comme « dès 3 ans, avec un adulte ».
- **C'est aussi un argument à retourner.** Sur la télé du salon, l'écran est partagé et visible des parents, et le temps est limité par l'espace parents. Le téléphone sert d'ardoise. C'est l'inverse de la tablette isolée. Ce positionnement d'**« écran actif et accompagné »** est le meilleur angle face à la culpabilité des parents. Il faut éviter toute promesse médicale.
- **Le pic d'usage tombe le week-end et pendant les vacances.** C'est là que se jouent l'acquisition (campagnes la veille des vacances scolaires) et les quêtes du jour.

### 2.3 La télé connectée dans les familles

- **YouTube est déjà l'« appli enfants » de la télé.** Selon l'Arcom, il est devenu [la principale offre gratuite d'animation et de jeunesse en France](https://www.advanced-television.com/2025/06/13/france-youtube-main-foc-animation-offering/). [66 à 67 % des utilisateurs de YouTube le regardent sur leur téléviseur](https://csimagazine.com/csi/arcom-2026-AV-study.php). Les parents savent donc lancer une app sur la télé pour leurs enfants. Il reste à leur proposer quelque chose de plus utile.
- Les foyers avec enfants comptent [9,8 écrans en moyenne](https://www.cbnews.fr/node/14380), soit 1,5 fois la moyenne nationale, et 73 % des 4-14 ans ont un écran personnel.
- **Google TV et Android TV dans le monde.** On compte [plus de 270 millions d'appareils actifs par mois](https://9to5google.com/2024/09/23/google-tv-android-270-million-devices-growth/) (septembre 2024, chiffre repris par [Google en mai 2025](https://android-developers.googleblog.com/2025/05/engage-users-google-tv-excellent-apps.html?hl=be)). [9to5Google rapporte environ 300 millions à la Google I/O 2026](https://9to5google.com/?p=715425), soit une croissance ralentie à +11 %. Amazon revendique [plus de 200 millions de Fire TV vendus](https://www.lowpass.cc/p/10-years-android-tv-270-million-devices).
- **Tendance en Europe.** Selon Omdia, Android TV, Tizen et webOS [perdent des parts au profit de VIDAA](https://www.phonandroid.com/?p=2693423), le système de Hisense, qui pourrait passer de 9 % à 17 % d'ici 2030. Concentrer tout l'effort sur Android TV revient donc à miser sur une plateforme **stable mais pas en croissance**.
- **En France, les box d'opérateurs comptent beaucoup.** Free a été le premier à passer sous Android TV, avec la Freebox Mini 4K puis la Freebox Pop. Bouygues équipe ses Bbox Must et Ultym. RED by SFR et Orange proposent aussi des décodeurs Android TV ([CableReview](https://www.cablereview.fr/internet/guides/box-et-decodeurs-android-tv/), [bonforfait](https://bonforfait.fr/box-internet/android-tv)). Okoo y a obtenu une place éditoriale. C'est **le canal le plus sous-estimé** pour Petits Savants (voir la recommandation n° 9).

### 2.4 La francophonie hors de France

| Zone | Ce qu'on sait | Intérêt pour Petits Savants |
|---|---|---|
| **Francophonie mondiale** | [396 millions de francophones, dont 65 % en Afrique, et 150 millions de moins de 15 ans](https://www.financialafrik.com/2026/03/18/lafrique-locomotive-de-la-langue-francaise-rapport-oif/) (OIF, mars 2026) | Énorme volume, mais très peu payant aujourd'hui |
| **Français de l'étranger** | [1 784 975 inscrits au registre fin 2025](https://alliancesolidaire.org/2026/08/20/rapport-2026-sur-les-francais-de-letranger-entre-modernisation-et-restrictions-budgetaires/), entre 2,8 et 3,2 millions en réalité. [120 935 élèves français dans le réseau AEFE](https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE2279.pdf) en 2024 | **Persona à fort pouvoir d'achat et à forte motivation** (garder le français, suivre le programme français) |
| **Belgique (FWB)** | Programme différent (tronc commun, « 1re primaire » et non « CP »). Pas de concurrent télé identifié | Marché proche. Adapter les **noms de niveaux**, pas tout le contenu |
| **Suisse romande** | Programme PER, « 1H-8H ». Pouvoir d'achat élevé **[Non vérifié]** | Prix en CHF à prévoir. Niche rentable |
| **Québec et Canada** | Offre publique gratuite forte : [Boukili (TFO)](https://outilstice.com/boukili-application-gratuite-apprentissage-lecture-enfants/), Alloprof **[Non vérifié]**. Vocabulaire différent (maternelle, 1re année…) | Concurrence gratuite. Intérêt surtout chez les expatriés français |
| **Afrique francophone** | Smartphone Android dominant, box TV Android bon marché, faible usage des cartes bancaires **[Non vérifié]** | À moyen terme seulement, via des partenariats (opérateurs, Canal+) et un prix local très bas |

**À retenir.** L'argument « programme de l'Éducation nationale » parle aux familles françaises de France et de l'étranger. Il parle beaucoup moins aux Belges, aux Suisses et aux Québécois. Pour ces pays, il faut présenter l'app comme « les bases en français, en maths et en anglais, de 3 à 8 ans ».

---

## 3. La concurrence

### 3.1 Tableau de synthèse

Les prix indiqués sont les derniers trouvés. Les tarifs App Store ou Play peuvent différer selon le pays ou la date.

| App | Éditeur | Âges | Prix | Modèle | **Télé ?** | Mascotte / gamification |
|---|---|---|---|---|---|---|
| **Petits Savants** | Couple fondateur | 2-9 ans | 4,99 €/mois, 39,99 €/an, tous les enfants de la télé | Freemium (42 leçons) + essai 7 j | **Oui, natif** | Animal 3D, étoiles, flamme, quêtes, cadeaux |
| **Kaligo Famille** | Learn & Go | 3-8 ans, écriture | [7,99 €/mois, ou 83,88 €/an (6,99 €/mois)](https://www.kaligo-family.com/fr/tarifs/), tarif dégressif selon le nombre d'enfants | Essai 7 j | Non, tablette avec stylet | Univers ludique. Version école à [199,99 €/classe/an](https://www.mesjeuxtablettesenfants.com/jeu-kaligo-ecole-420.html) |
| **Lingokids** | Monkimun (Espagne) | 2-8 ans, anglais et « playlearning » | [14,99 €/mois, 89,99 €/an](https://apps.apple.com/FR/app/id1002043426) (App Store FR), [71,99 €/an selon un tracker](https://opentherank.com/fr/education-pricing/lingokids/) | Freemium + essai | **Non**, sauf [Lingokids Theater, vidéos seulement, sur Apple TV](https://help.lingokids.com/hc/en-us/articles/360008947257-Device-Requirements-for-Lingokids) | Personnages forts, chansons, très marketé |
| **Bayam** | Bayard / Milan | 3-10 ans | [5,99 €/mois ou 54,99 €/an, 6 profils, 2 €/mois pour les abonnés Bayard](https://alloforfait.fr/actualites/132848-bayam-plateforme-enfants-sans-publicite-ni-algorithme.html). Le store affiche 6,99 € à 9,99 € par mois | Abonnement, 1er mois offert (selon les périodes) | Version télé **non confirmée**. Distribuée [chez Orange](https://alloforfait.fr/?p=54867) | Vidéos, podcasts, jeux, sans pub ni algorithme, chrono parental |
| **Pili Pop** | Pili Pop Labs | 5-12 ans, langues | [À partir de 9,99 €/mois](https://www.citizenkid.com/article/top-applis-apprendre-anglais-enfants-a1057083), achats de 4,99 € à 59,99 € | 40 parties gratuites puis abonnement. [Un abonnement donne accès à 3 langues](https://alternativeto.net/software/pili-pop/about) | Non | Personnages, reconnaissance vocale |
| **ANTON** | solocode (Allemagne) | Maternelle à 6e | **Gratuit en entier**. [Plus 9,99 €, Famille 19,99 € (par an)](https://alternativeto.net/software/anton/about) | Gratuit + options | Non (web, mobile) | Avatar, pièces, mini-jeux |
| **Kidiquest** | Indépendant FR | Primaire | [2,99 €/mois ou 19,99 €/an pour 1 enfant, jusqu'à 8,99 €/mois ou 59,99 €/an pour 4](https://apps.apple.com/fr/app/id1578698255) | Prix par nombre d'enfants | Non | Jeu vidéo d'aventure |
| **Khan Academy Kids** | Khan Academy (ONG) | 2-8 ans | [100 % gratuit, sans pub ni abonnement](https://apps.apple.com/FR/app/id1378467217) | Gratuit (dons) | Non | Personnages animaux, plus de 1 000 activités. **Version française non confirmée** |
| **Duolingo ABC** | Duolingo | 3-8 ans | Gratuit | Gratuit | Non | Lecture **en anglais uniquement**. Des parents français [réclament une version FR](https://apptail.io/app/learn-to-read-duolingo-abc-xjq/france) |
| **ABCmouse** | Age of Learning (USA) | 2-8 ans | [9,99 €, 17,99 € ou 79,99 € sur l'App Store FR](https://apps.apple.com/FR/app/id586328581), offre Basic gratuite | Abonnement | Non | Contenu en anglais |
| **Kidomi** | USA | 3-12 ans | Environ 5,49 €/mois ou 32,99 €/an (App Store IE) | Abonnement | Non | [Plus disponible sur l'App Store français](https://iphoneaddict.fr/apps/education/kidomi.html) |
| **Lalilo** | Renaissance | GS-CE1, lecture | [Plus de version gratuite depuis le 12/11/2025](https://intercom.help/lalilo/en/articles/12768668-why-will-there-be-no-free-version-of-lalilo-anymore-after-november-12th-2025). Licence classe achetée par l'enseignant (90 USD aux États-Unis) | **100 % école** | Non | Accès maison seulement avec le code de l'enseignant |
| **GCompris** | KDE (libre) | 2-10 ans | Gratuit, libre (AGPL) | Gratuit | Android et F-Droid. **Version télé non confirmée** | Plus de 100 activités, graphisme daté |
| **Lumni / Okoo** | France Télévisions | Maternelle-lycée / 3-12 ans | Gratuit | Service public | **Okoo est sur Android TV** et sur les box. [Lumni « sur tous les écrans »](https://www.francetvpro.fr/contenu-de-presse/67590799) | Vidéos, quiz. Pas de parcours d'exercices sur la télé |
| **Les Fondamentaux** | Réseau Canopé | Primaire | Gratuit | Service public | Web, YouTube | [400 à 600 films courts](https://outilstice.com/les-fondamentaux-videos-pedagogiques/) |
| **Boukili** | TFO (Ontario) | 4 ans et plus, lecture | Gratuit | Service public | Non | [Bibliothèque de livres numériques à niveaux](https://outilstice.com/boukili-application-gratuite-apprentissage-lecture-enfants/) |
| **Marbotic** | Marbotic (FR) | 3-6 ans | [Pièces en bois à environ 34,99 € qui débloquent les apps](https://www.mac4ever.com/ipad/96538-les-enfants-vont-jouer-avec-les-chiffres-jusqu-a-100-grace-a-la-nouvelle-application-de-marbotic) | Achat unique, objet physique | Non (tablette) | Manipulation réelle, Montessori |
| **Poisson Rouge** | Indépendant | 2-6 ans | Gratuit (boutique, dons) | Gratuit | Web | [Univers sans texte, très poétique](https://www.commonsensemedia.org/website-reviews/poissonrouge) |
| **Mila** | Mila Learn (pas Hachette) | Enfants avec troubles « dys » | Inconnu | Outil de rééducation | Non | [Rééducation par la musique et le rythme](https://www.mgen.fr/fileadmin/documents/edtech/2019/Mila.pdf). À classer comme **outil d'orthophonie**, pas comme concurrent grand public |
| **Cahiers de vacances** (Passeport, Nathan, Bordas…) | Hachette, Nathan, Magnard… | PS à 3e | Environ 7 à 10 € l'unité **[Estimation]** | Achat unique, saisonnier | Papier | **Concurrent réel du budget parent** |

**Acteurs non revérifiés dans cette session** (quota atteint) :
- **Logiciel éducatif** (logicieleducatif.fr) : site gratuit financé par la publicité, très utilisé par les enseignants de maternelle et de primaire **[Non vérifié]**.
- **Edumoov** : outil de gestion de classe pour enseignants (cahier journal, livret). Ce n'est **pas un concurrent** **[Non vérifié]**.
- **Educlick** : non identifié avec certitude.
- **Schoolmouv** : vidéos et quiz pour le collège et le lycée, sur abonnement. Ce n'est **pas un concurrent direct**, mais c'est un **relais logique pour l'après-CE2** **[Non vérifié]**.
- **Ouiz** et **Mon Kit Maternelle** : aucune app identifiable sous ces noms. À préciser par les fondateurs.

### 3.2 Ce que les parents adorent et ce qu'ils détestent

Synthèse tirée des avis trouvés : [Trustpilot Lingokids](https://fr.trustpilot.com/review/lingokids.com), [Common Sense Media](https://www.commonsensemedia.org/app-reviews/lingokids-play-and-learn/user-reviews/adult), fiches des stores et presse.

**Ce qu'ils adorent :**
- l'absence de publicité et d'algorithme (Bayam, Khan Academy Kids, Okoo) ;
- le **chronomètre et le contrôle parental** qui empêche l'enfant de sortir de l'app (Bayam) ;
- un **seul abonnement pour toute la fratrie** (Bayam avec 6 profils, ANTON Famille, Pili Pop avec 3 langues) ;
- un lien visible avec l'école : Lalilo, Kaligo et Les Fondamentaux sont recommandés par les enseignants ;
- la gratuité totale, quand elle existe : ANTON et Khan Academy Kids sont très bien notés, avec 4,7 sur l'App Store FR pour Khan Academy Kids.

**Ce qu'ils détestent :**
- **le prix, surtout le mensuel.** Lingokids à 14,99 €/mois est jugé « trop cher » de façon récurrente, avec une note de 3,6/5 sur Trustpilot FR ;
- **un service client absent** et des problèmes de résiliation et de facturation : accès coupé, double paiement ([Sikayetvar](https://www.sikayetvar.com/en/lingokids-us/lingokids-cut-access-early-and-demanded-extra-despite-my-active-subscription)) ;
- les **contenus en anglais** imposés aux enfants francophones (Duolingo ABC, ABCmouse, Khan Academy Kids) ;
- **la fin brutale de la gratuité** (Lalilo, novembre 2025) ;
- les bugs et le manque de contenu une fois le parcours terminé.

**Ce que ça apprend à Petits Savants.**
- Le « sans compte, sans pub, rien ne sort de l'appareil » est un **argument différenciant fort**, à mettre en tête de la fiche Play.
- La **résiliation doit être limpide**. L'écran premium (capture 8) le fait déjà bien.
- Les parents punissent le flou sur le prix. Ils punissent aussi un catalogue trop vite terminé. 151 leçons reste un **volume modeste** : à 3 leçons par jour, un enfant d'une classe donnée épuise sa part en quelques semaines **[Estimation]**.

### 3.3 Marketing visible des concurrents

- **Lingokids** : énorme budget d'acquisition, publicités Meta et YouTube, influenceurs parents, partenariats Amazon Fire et Alexa.
- **Bayam** : s'appuie sur la **base d'abonnés des magazines Bayard** (offre à 2 €/mois) et la distribution chez **Orange**.
- **Kaligo, Lalilo** : **prescription par les enseignants** (B2B2C), puis offre famille. Kaligo est passé du stylet en classe à une version famille.
- **Pili Pop** : partenariat avec [Fleurus Presse](https://www.cbnews.fr/node/17246) (magazines jeunesse).
- **Okoo et Lumni** : service public, présence éditoriale sur les box d'opérateurs.
- **Cahiers de vacances** : grande distribution, qui pèse [jusqu'à 44 % des ventes de Passeport](https://www.livreshebdo.fr/article/le-grand-retour-des-cahiers-de-vacances-en-tete-des-ventes), et un pic en juin et juillet.

**Le schéma gagnant en France est clair : emprunter une audience existante** (magazines, opérateurs, école) plutôt que l'acheter.

---

## 4. Le positionnement « télé »

### 4.1 Y a-t-il des concurrents sérieux sur Android TV ou Google TV en français ?

Nos recherches n'ont trouvé **aucune app d'apprentissage scolaire structuré en français, conçue pour la télécommande**. Les offres jeunesse présentes sur la télé sont :
- **de la vidéo** : Okoo, YouTube, Netflix Kids, Disney+, Gulli Max, et peut-être Bayam (non confirmé) ;
- **des jeux génériques**, souvent en anglais et souvent financés par la publicité ;
- des apps mobiles « étirées » sur la télé, sans vraie navigation à la télécommande.

Les grands acteurs de l'apprentissage ne sont pas sur la télé. Lingokids n'a qu'une app de **vidéos** sur Apple TV. Khan Academy Kids, ANTON, Kaligo et Lalilo sont **absents** de la télé.

**C'est donc un océan bleu, mais il y a une raison à ça :**
1. **Petite base installée.** Les foyers avec enfant de 3 à 8 ans **et** un appareil Android TV ou Google TV sont environ 0,6 à 0,9 million en France **[Estimation]**.
2. **Découvrabilité faible.** Le Play Store télé est peu fréquenté et la page d'accueil Google TV met en avant films et séries. Les parents ne vont pas chercher « maths CP » sur leur télé. **Il faut qu'ils découvrent l'app ailleurs** (téléphone, réseaux sociaux, école, bouche-à-oreille), puis l'installent sur la télé.
3. **Achat sur la télé.** Saisir un moyen de paiement à la télécommande est pénible. Un **parcours d'achat par QR code sur le téléphone** du parent est recommandé. Petits Savants a déjà la mécanique QR code pour la manette, il suffit de l'étendre au paiement. Attention : sur une app distribuée par Google Play, les règles de facturation Play s'appliquent. Une vente web hors Play n'est possible que dans les cadres prévus (programme de facturation alternative et offres externes dans l'EEE) **[À vérifier avec la doc Google Play]**.
4. **Fuite de revenus.** Sur les télés autres qu'Android TV, **tout est ouvert**. Si la page web ou l'APK circule, c'est un premium gratuit pour tous. Installer à la main sur Fire TV ou en mode développeur sur LG et Samsung n'est **pas un canal grand public** : ces versions servent surtout de démonstration.
5. **Plateforme stable mais pas en croissance.** VIDAA progresse. Apple TV est absent, alors que c'est un écran fréquent chez les expatriés aisés **[Non vérifié]**.
6. **Risque d'image.** Les mots « écran » et « télé » sont négatifs pour les jeunes enfants dans le débat public (voir 2.2).

### 4.2 Verdict

La télé est **un excellent différenciateur et un bon argument marketing** (« les révisions sur la télé du salon, comme un jeu en famille »). Mais c'est **un marché trop étroit pour suffire seul**. La bonne stratégie : **« la télé d'abord, mais pas seulement »**.
- On garde la télé comme expérience phare et comme argument.
- On ajoute une **app tablette et téléphone** qui partage l'abonnement. Il faudra une forme de compte ou de code d'activation, en option, pour ne pas renoncer au « sans compte ».
- On obtient une **présence éditoriale chez les opérateurs**, à commencer par Free et Bouygues, comme l'a fait Okoo.

---

## 5. Les prix

### 5.1 Comparaison

| Offre | Mensuel | Annuel | Annuel ramené au mois | Multi-enfants |
|---|---|---|---|---|
| ANTON Famille | n.c. | ~19,99 € | ~1,67 € | Oui (5) |
| Kidiquest (1 enfant / 4 enfants) | 2,99 € / 8,99 € | 19,99 € / 59,99 € | 1,67 € / 5 € | Payant par enfant |
| **Petits Savants** | **4,99 €** | **39,99 €** | **3,33 €** | **Oui, tous les enfants de la télé** |
| Bayam | 5,99 € (jusqu'à 9,99 € en store) | 54,99 € | 4,58 € | 6 profils |
| Kaligo Famille | 7,99 € | 83,88 € | 6,99 € | Tarif dégressif |
| Pili Pop | ~9,99 € | n.c. | n.c. | 3 langues |
| Lingokids Plus | 14,99 € | 89,99 € (71,99 € selon un tracker) | 7,50 € | Oui |
| Cahier de vacances | n.a. | ~8 € par an et par enfant **[Estimation]** | n.a. | Non |

**Lecture.** Petits Savants est placé **dans le bas du milieu de gamme**. Il est moins cher que les apps premium (Kaligo, Lingokids, Bayam) et plus cher que les apps quasi gratuites (ANTON, Khan). Pour une famille de 2 enfants, c'est **très compétitif**, puisque l'abonnement couvre toute la télé.

### 5.2 Ce que disent les données sur les abonnements

- **Durée de l'essai.** RevenueCat 2026 donne une médiane de conversion de [42,5 % pour les essais de 17 à 32 jours, contre 25,5 % pour les essais de moins de 4 jours](https://www.revenuecat.com/state-of-subscription-apps-2026/). L'essai de 7 jours se situe entre les deux.
- **L'éducation fidélise.** C'est la catégorie où les **annulations au premier mois des plans annuels sont les plus basses** : [30 % dans les 30 premiers jours](https://www.revenuecat.com/state-of-subscription-apps-2026-education). En revanche, [95 % des abonnés annuels qui annulent ne reviennent jamais](https://heise.de/-11310636). Il faut donc soigner le premier renouvellement.
- **Adapty, catégorie éducation** ([benchmark](https://adapty.io/blog/education-app-subscription-benchmarks/)) :
  - LTV moyenne sur 12 mois de **45,10 $**, la 3e meilleure catégorie ;
  - les utilisateurs passés par un essai ont une **LTV supérieure de 50,4 %** à ceux qui achètent directement ;
  - **23,5 % des essais démarrent 31 jours ou plus après l'installation**, un record toutes catégories. Les parents testent d'abord la partie gratuite, puis s'abonnent plus tard. Cela **valide le modèle « gratuit pour toujours + essai »** de Petits Savants ;
  - l'éducation est la catégorie qui utilise le plus les **remises** (14,3 % des offres) ;
  - toutes catégories confondues, Adapty mesure **10,9 % d'installations qui démarrent un essai et 25,6 % d'essais qui deviennent payants** ([source](https://adapty.io/blog/trial-conversion-rates-for-in-app-subscriptions/)).
- **Aucune donnée publique trouvée sur les apps éducatives pour enfants sur télé.** Par prudence, nous partons d'une conversion plus faible que sur mobile.

**[Estimation] Ordre de grandeur pour la première année :**
- 20 000 installations × 10 % d'essais × 30 % de conversion donnent **environ 600 abonnés payants**.
- Avec 70 % d'annuels et une commission Google de 15 % sur les abonnements, le revenu net est d'environ **20 000 à 25 000 €**.
- Pour en vivre, il faut **multiplier par 5 à 10** soit les installations, soit le passage aux plateformes mobiles.

### 5.3 Recommandations de prix

1. **Garder 39,99 €/an comme offre phare.** Ne pas baisser.
2. **Tester le mensuel à 5,99 €.** Aujourd'hui, l'annuel ne représente que 8 mois de mensuel. À 5,99 €, l'annuel paraît plus avantageux (-44 %) et la majorité des achats basculera vers l'annuel, qui retient mieux.
3. **Allonger l'essai à 14 jours**, au moins sur l'annuel. Mesurer avec un test A/B sur Play Console. Les données plaident pour un essai plus long, et une semaine d'école ne suffit pas à créer une habitude.
4. **Offre de lancement jusqu'au 31 janvier 2027 : 29,99 € la première année** (« prix fondateurs »). C'est cohérent avec la culture de remise du secteur, et cela crée une urgence.
5. **Accès à vie en édition limitée : 89,99 €**, plafonné à environ 500 familles ou limité aux fêtes. Il colle au positionnement « tout reste sur l'appareil, sans compte », plaît aux grands-parents et finance le développement tout de suite. Risque : il cannibalise l'annuel. D'où la limite.
6. **Code cadeau** (« Offrez une année de Petits Savants ») vendu sur le site pour Noël, avec une carte à imprimer. C'est le canal grands-parents. Point à vérifier : les codes promo Play pour abonnement et les conditions de vente hors Play.
7. **Pack famille.** Il existe déjà : un abonnement couvre tous les enfants de la télé. **Le dire bien plus fort** (« un prix pour toute la fratrie »). Quand l'app mobile sortira, prévoir « 1 abonnement = télé + tablettes de la maison ».
8. **Prix régionaux.** Fixer à la main des prix en CHF et en CAD. Prévoir un prix bas pour l'Afrique quand le paiement local le permettra.

---

## 6. SWOT de Petits Savants

| **Forces** | **Faiblesses** |
|---|---|
| Seule app scolaire **pensée pour la télécommande** en français | **Voix de synthèse**, peu fiable sur les sons isolés et les phonèmes (cœur du programme de lecture) |
| Couverture de 5 matières de la TPS au CE2, **alignée sur le programme officiel** | **Illustrations en emojis**, un rendu « amateur » face à Lingokids ou Bayam |
| **Sans pub, sans compte, aucune donnée collectée**, un argument rare | **QCM uniquement** : on y reconnaît plus qu'on ne produit (sauf l'ardoise téléphone) |
| Un abonnement pour **tous les enfants de la télé** | **151 leçons**, un catalogue vite parcouru |
| Gamification déjà complète : flamme, quêtes, coffre, animal 3D | **Aucun avis, aucune notoriété, aucun canal marketing** |
| Téléphone en **manette ou ardoise** par QR code, une idée originale | **Éditeur non renseigné** sur le site, ce qui nuit à la confiance et pose un problème légal |
| Prix bas, avec une partie gratuite généreuse (42 leçons) | Pas d'app tablette ou téléphone. Paiement seulement sur Android TV, **contenu ouvert ailleurs** |
| Petite équipe, coûts faibles, rapide | Ressources limitées pour la voix, l'illustration et l'acquisition |
| **Opportunités** | **Menaces** |
| La télé représente **71 % du temps d'écran des 3-5 ans**. Le parent cherche un « bon » contenu pour cet écran | **Rejet croissant des écrans** chez les petits (recommandations officielles, presse) |
| **Aucun concurrent d'apprentissage sur la télé** | Un acteur établi (Bayard, Lingokids, France TV avec Lumni) peut porter une app sur la télé en quelques mois |
| **Noël 2026**, grands-parents en quête de cadeaux utiles | Offres **gratuites de qualité** : ANTON, Khan Academy Kids, Lumni, Les Fondamentaux, GCompris |
| **Box d'opérateurs** Android TV (Free, Bouygues, SFR, Orange) qui cherchent du contenu jeunesse | Base Android TV **stagnante**, montée de VIDAA, Apple TV absent |
| Familles **expatriées** (1,8 million d'inscrits) et **IEF** (environ 30 000 enfants) très motivées | **Baisse démographique** : -107 000 élèves par an |
| Lalilo devenu 100 % école : **les parents perdent leur outil de lecture gratuit** | Règles Google Play Familles et facturation : un refus ou un retrait de l'app est un risque existentiel |
| Écrans interactifs en classe, souvent sous Android **[Non vérifié]** | La synthèse vocale vient du système de la télé : la qualité varie selon les modèles |

---

## 7. Persona d'acheteurs

### 7.1 Le parent « rassuré-actif » (cœur de cible)
- **Profil :** 30-42 ans, 1 à 3 enfants de 3 à 8 ans, a déjà une télé Google TV ou une Freebox, regarde YouTube Kids sur la télé le week-end.
- **Motivations :** remplacer du temps de dessin animé par quelque chose d'utile sans culpabiliser, suivre « où il en est par rapport à l'école », un prix unique pour la fratrie.
- **Freins :** « encore un écran », peur de l'abonnement oublié, défiance envers les apps inconnues (pas d'avis, pas d'éditeur), voix robotique.
- **Message :** « 15 minutes de révision sur la télé, à la place d'un dessin animé. Sans pub, sans compte, vous gardez la main sur le temps d'écran. »
- **Où le trouver :** Instagram et Facebook parents, groupes d'école, Pinterest (fiches maternelle), YouTube.

### 7.2 Les grands-parents
- **Motivations :** offrir un cadeau « intelligent », jouer avec les petits-enfants quand ils les gardent. La télé est l'écran qu'ils maîtrisent le mieux.
- **Freins :** installation technique, paiement en ligne, peur de se tromper de niveau.
- **Offre adaptée :** **code ou carte cadeau** (annuel ou à vie), notice d'installation illustrée en une page, numéro ou mail de support humain.
- **Moment :** novembre et décembre, anniversaires.

### 7.3 Les familles en instruction en famille (IEF)
- **Volume :** environ 30 000 enfants ([Vie publique](https://www.vie-publique.fr/en-bref/299312-instruction-en-famille-quel-bilan-quatre-ans-apres-la-reforme)), très connectés entre eux via des forums et des groupes Facebook.
- **Motivations :** **suivre le programme** pour le contrôle annuel de l'inspection, varier les supports, garder une trace des progrès.
- **Freins :** contenu trop léger (5 exercices par leçon), QCM seulement, impossible **d'exporter ou d'imprimer** un bilan pour l'inspecteur, progrès limités à 7 jours.
- **Offre adaptée :** bilan de compétences par niveau à exporter en PDF, historique complet, correspondance claire avec les attendus de fin de cycle. Ils sont **prescripteurs** : un avis positif dans un groupe IEF vaut des centaines d'installations.

### 7.4 Les expatriés et familles francophones à l'étranger
- **Volume :** 1,78 million d'inscrits au registre, 2,8 à 3,2 millions en réalité. Environ 121 000 élèves français dans le réseau AEFE, et beaucoup d'autres dans des écoles locales.
- **Motivations :** **maintenir le français** et le niveau « programme français » pour un retour éventuel. Le français est souvent une langue minoritaire à la maison. Ils sont prêts à payer.
- **Freins :** télé locale pas toujours Android TV, **Apple TV fréquent** **[Non vérifié]**, prix en devise, contenu « Anglais » inutile pour eux, voix de synthèse à l'accent incertain selon la langue de la télé.
- **Offre adaptée :** app tablette et téléphone en priorité, option pour masquer la matière Anglais, prix en USD, CAD et CHF, communication via les groupes « Français à [ville] », les associations FLAM et les lepetitjournal.com locaux.

### 7.5 Les enseignants (maternelle, CP-CE2)
- **Motivations :** des activités pour l'**écran interactif ou le vidéoprojecteur** de la classe, en collectif. Le format « 4 réponses numérotées » s'adapte bien à un vote en classe entière.
- **Freins :** budget (achat par la mairie ou l'école), RGPD (point fort ici : aucune donnée collectée), passage par le GAR et les marchés publics, matériel hétérogène.
- **Valeur pour Petits Savants :** surtout un **prescripteur**. Un enseignant qui l'utilise en classe le recommande aux parents. Nous conseillons une **licence « classe » gratuite ou très bon marché** en échange de visibilité, plutôt qu'un vrai canal de revenu à court terme. Lalilo montre que le passage au 100 % payant pour l'école est possible, mais long.

### 7.6 Les orthophonistes
- **Motivations :** des exercices de **conscience phonologique**, de lexique et de numération à prolonger à la maison.
- **Freins majeurs :** **voix de synthèse** (une prononciation des phonèmes imprécise est rédhibitoire), pas de réglage fin de la difficulté, pas de suivi détaillé. Il existe déjà des outils spécialisés comme Mila.
- **Conclusion :** **pas une cible tant que la voix n'est pas humaine.** Ils pourront devenir des prescripteurs plus tard, avec un mode « orthophonie » (sons isolés enregistrés, paires minimales).

---

## 8. Recommandations stratégiques

### 8.1 Matrice impact / effort

| # | Recommandation | Impact | Effort | Quand |
|---|---|---|---|---|
| 1 | **Renseigner l'éditeur** (raison sociale, mentions légales, politique de confidentialité, contact) sur le site et la fiche Play | Élevé (confiance, conformité Play Familles) | Très faible | **Cette semaine** |
| 2 | **Optimiser la fiche Play** : vidéo de 30 s filmée dans un vrai salon, captures avec des légendes « pour les parents », mots-clés (« apprendre à lire », « maternelle », « CP », « maths CE1 », « télé ») | Élevé | Faible | Novembre |
| 3 | **Demander un avis aux parents** au bon moment : dans l'espace parents, après 3 jours de série ou un coffre ouvert (In-App Review API) | Élevé (0 avis aujourd'hui) | Faible | Novembre |
| 4 | **Offre de Noël** : prix fondateurs à 29,99 € la première année, **code ou carte cadeau**, accès à vie limité à 89,99 € | Élevé (premier pic de revenus) | Faible à moyen | Avant le 1er décembre |
| 5 | **Fermer la fuite de revenus** sur les télés hors Play : déverrouillage par code acheté sur le site, ou version de démonstration limitée | Moyen à élevé | Moyen | T1 2027 |
| 6 | **Remplacer la synthèse vocale par des voix humaines enregistrées**, en commençant par les leçons de Langage (sons, rimes) puis les consignes | **Très élevé** (crédibilité pédagogique, avis, orthophonistes) | Moyen (environ 151 leçons, enregistrement en studio ou par une voix professionnelle) | T1 2027 |
| 7 | **Tester un essai de 14 jours et un mensuel à 5,99 €** (A/B test dans Play Console) | Moyen à élevé | Faible | Dès 300 essais cumulés |
| 8 | **Contenu court sur YouTube, Instagram et TikTok** : « 1 minute pour apprendre le son [ch] avec Renard », extraits d'écran de l'app, coulisses des fondateurs. **YouTube est regardé sur la télé** : une chaîne de capsules est un tremplin direct vers l'app télé. Pinterest pour les parents et l'IEF (fiches à imprimer qui renvoient vers l'app) | Élevé (seul canal gratuit à grande échelle) | Moyen et continu | Dès maintenant, 3 publications par semaine |
| 9 | **Démarcher les opérateurs** (Free, Bouygues, SFR, Orange) pour une mise en avant dans l'univers jeunesse de leurs box, voire un bundle comme [Bayam chez Orange](https://alloforfait.fr/?p=54867) | **Très élevé** si ça aboutit | Moyen (dossier, rendez-vous, délais longs) | T1-T2 2027 |
| 10 | **App tablette et téléphone** avec abonnement partagé (code d'activation, compte facultatif) | **Très élevé** (taille du marché multipliée) | Élevé | T2 2027 |
| 11 | **Remplacer les emojis par des illustrations maison** cohérentes avec l'animal 3D, en commençant par les écrans vus le plus souvent | Élevé (valeur perçue, prix) | Élevé (illustrateur) | T2 2027 |
| 12 | **Diversifier les exercices** : glisser-déposer, tracé sur l'ardoise téléphone, dictée de sons, « vrai ou faux », chronométré en duo parent-enfant | Élevé (rétention, IEF) | Élevé | 2027 |
| 13 | **Personnalisation de la mascotte** (projet des fondateurs) : plus de cadeaux, tenues saisonnières, habitat | Moyen (rétention) | Moyen | Après les n° 6 et 11 |
| 14 | **Pack IEF et enseignants** : bilan PDF, historique complet, mode « classe », licence gratuite pour les enseignants prescripteurs | Moyen | Moyen | 2027 |
| 15 | **Partenariats presse jeunesse et éditeurs** (modèle Pili Pop avec Fleurus) : abonnement offert ou réduit aux lecteurs d'un magazine | Moyen à élevé | Moyen | 2027 |
| 16 | **Expatriés** : prix en devises, option « masquer l'Anglais », communication FLAM et AEFE ; Apple TV ensuite | Moyen | Faible (prix), élevé (Apple TV) | 2027 |
| 17 | **Afrique francophone** : via un opérateur ou un partenaire, prix local | Incertain | Élevé | Plus tard |

### 8.2 Ordre conseillé

**Gains rapides (novembre-décembre 2026) :** n° 1, 2, 3 et 4. Ils ne coûtent presque rien et conditionnent tout le reste : sans éditeur visible ni avis, aucune publicité ou partenariat ne convertira.

**Paris structurants (premier semestre 2027) :** n° 6 (voix), puis n° 10 (mobile) et n° 9 (opérateurs). La voix humaine passe **avant** les mascottes personnalisables. Un parent pardonne une mascotte simple, pas un « ch » mal prononcé.

**Positionnement à adopter partout :**
> **« Petits Savants, les révisions de la maternelle au CE2 sur la télé du salon. Sans pub, sans compte, un seul prix pour toute la fratrie. »**

À éviter :
- « dès 2 ans » en titre (risque d'image, voir 2.2) ;
- comparer frontalement avec des apps gratuites ;
- promettre des effets sur le langage ou les apprentissages sans étude.

### 8.3 Indicateurs à suivre dès maintenant

- Taux de passage installation → essai (repère Adapty : environ 11 %).
- Taux de passage essai → payant (repère : 25 à 40 %).
- Part d'annuels parmi les abonnés.
- Rétention à J7 et J30 : série de jours moyenne, leçons par enfant et par semaine.
- Note moyenne et nombre d'avis sur Play.
- Coût d'acquisition par canal, dès qu'on paie de la publicité.
- Délai entre l'installation et le démarrage de l'essai. Adapty montre que beaucoup d'essais démarrent après 31 jours en éducation : ne pas juger un canal trop tôt.

---

## Sources principales

- Santé publique France, [enquête Enabee, temps d'écran des 3-11 ans](https://www.santepubliquefrance.fr/index.php/presse/temps-decran-des-enfants-de-3-a-11-ans-un-usage-precoce-quotidien-et-marque-par-les)
- DEPP, [effectifs du premier degré, rentrée 2025](https://www.education.gouv.fr/depp/les-effectifs-dans-le-premier-degre-6155-millions-d-eleves-scolarises-la-rentree-2025-467612)
- Arcom, [Référentiel des usages numériques 2025](https://www.arcep.fr/fileadmin/user_upload/pole-numerique-arcep-arcom/arcom-referentiel-des-usages-numeriques-2025-infographies.pdf) ; [Arcom 2026, YouTube sur la télé](https://csimagazine.com/csi/arcom-2026-AV-study.php)
- 9to5Google, [270 millions d'appareils Google TV et Android TV](https://9to5google.com/2024/09/23/google-tv-android-270-million-devices-growth/)
- RevenueCat, [State of Subscription Apps 2026](https://www.revenuecat.com/state-of-subscription-apps-2026/) ; Adapty, [benchmarks éducation](https://adapty.io/blog/education-app-subscription-benchmarks/)
- OIF, [La langue française dans le monde 2026](https://www.francophonie.org/sites/default/files/2026-04/Synthese_rapport_Langue_francaise_dans_le_monde_2026.pdf)
- Vie publique, [bilan de l'instruction en famille](https://www.vie-publique.fr/en-bref/299312-instruction-en-famille-quel-bilan-quatre-ans-apres-la-reforme)
- Livres Hebdo, [cahiers de vacances](https://www.livreshebdo.fr/article/les-meilleures-ventes-de-livres-du-30-juin-au-6-juillet-2025-freida-mcfadden-plus-forte-que)
- Pages tarifs et fiches citées dans le tableau de la section 3.1.
