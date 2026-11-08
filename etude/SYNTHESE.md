# Petits Savants : synthèse de l'étude et plan d'action

*8 novembre 2026. Synthèse des 7 rapports d'experts du dossier `etude/`. Les détails, les sources et les modèles prêts à l'emploi sont dans chaque rapport.*

| # | Rapport | Ce qu'on y trouve de prêt à l'emploi |
|---|---|---|
| 01 | [Marché et concurrence](01-marche-concurrence.md) | 25 concurrents analysés, analyse SWOT, profils d'acheteurs, prix comparés |
| 02 | [Produit, design et pédagogie](02-produit-ux-pedagogie.md) | Audit écran par écran, carte du programme par classe, 12 types d'exercices, choix des voix, feuille de route |
| 03 | [Gamification et mascottes](03-gamification-mascottes.md) | Univers, 7 mascottes avec leurs prompts de design, 122 objets, barème des points, rituels |
| 04 | [Fiche Google Play et abonnement](04-aso-monetisation.md) | Titre et descriptions à coller, 8 captures, nouvel écran Premium, grille d'offres, projections |
| 05 | [Réseaux sociaux et contenus](05-reseaux-sociaux-contenus.md) | 30 titres YouTube, 40 idées de vidéos courtes, 12 scripts, calendrier jour par jour, bios |
| 06 | [Acquisition et partenariats](06-acquisition-partenariats.md) | Communiqué de presse, e-mails types (influenceuse, école, partenaire), plan à 90 jours, 3 budgets |
| 07 | [Marque, juridique et organisation](07-marque-juridique-organisation.md) | Plateforme de marque, 10 slogans, check-lists légales, 15 risques, répartition des rôles |
| 08 | [Identité de marque](08-identite-de-marque.md) + [planche visuelle](08-planche-identite.html) | Positionnement, manifeste, Tilou, logo, palette, jingle, comptine, brief illustrateur, budget |

---

## 1. Le diagnostic en 6 phrases

1. **Vous avez un vrai avantage unique** : aucune application scolaire française ne se joue à la télécommande. Sur Android TV, il n'y a que de la vidéo (Okoo, YouTube). Lingokids, Kaligo, Khan Kids et ANTON ne sont pas sur la télé. La télé représente 71 % du temps d'écran des 3-5 ans.
2. **Mais la télé seule est un petit marché.** On estime entre 0,6 et 0,9 million de foyers cibles avec Android TV. Et une pub vue sur un téléphone ne mène pas facilement à une installation sur la télé. **L'application tablette et téléphone est indispensable pour grandir.** Bonne nouvelle : un abonnement Google Play suit le compte Google, donc une seule application Android peut couvrir la télé, la tablette et le téléphone.
3. **Le contenu est trop mince pour justifier un abonnement à l'année.** 151 leçons, c'est environ 22 leçons par classe, à peine un mois d'école. L'objectif est d'environ 650 séances, en commençant par **un vrai parcours de lecture pour le CP**, le moment où les parents paient le plus volontiers.
4. **La voix de synthèse et les emojis font « amateur ».** La voix lit mal les sons isolés ([t], [ch]), ce qui est grave pour apprendre à lire. Les emojis sont ambigus : ⚽, c'est « ballon » ou « foot » ? Ce sont les deux premiers chantiers de qualité.
5. **La gamification actuelle est trop courte et pose un risque légal.** Les 6 cadeaux s'obtiennent en une semaine. Surtout, « Tous les cadeaux » est un argument Premium montré à l'enfant, ce qui le pousse à réclamer l'achat. Les règles Google Play Familles, le Code de la consommation (art. L.121-7) et la loi européenne sur les services numériques (DSA) l'interdisent.
6. **Plusieurs obligations légales sont à régler avant toute communication** : l'éditeur n'est pas indiqué, le contact est un Gmail personnel, il manque un médiateur de la consommation et un bouton « Résilier », et le site affiche encore « Bientôt sur Google Play ».

---

## 2. Les décisions recommandées (tranchées entre les rapports)

| Sujet | Décision | Pourquoi |
|---|---|---|
| **Cible marketing** | On parle **aux parents** partout. Seule une chaîne YouTube « conçue pour les enfants » s'adresse aux enfants. | Ce sont les parents qui paient. La loi interdit de pousser un enfant à réclamer un achat. |
| **Positionnement** | « L'école sur la télé du salon : une vraie leçon, en famille, sans pub, rien sur votre enfant ne quitte la maison. » Un écran **partagé et accompagné**. | C'est votre seul avantage unique. Afficher « dès 2 ans » heurte les recommandations officielles sur les écrans : montrer l'adulte à côté de l'enfant. |
| **Promesse vie privée** | Remplacer « Aucune donnée collectée » par **« Rien sur votre enfant ne quitte la maison »**. | Dès qu'on suivra les abonnements (RevenueCat, statistiques), la première promesse deviendra fausse. |
| **Essai gratuit** | **14 jours** sur l'annuel, 7 jours sur le mensuel. Tester ensuite un essai sans carte. | Les essais longs convertissent nettement mieux : 42,5 % de médiane pour 17 à 32 jours, contre 25,5 % pour moins de 4 jours (RevenueCat). |
| **Prix** | Garder **39,99 €/an**. Tester **5,99 €/mois** au lieu de 4,99 €. | Vous êtes parmi les moins chers (Lingokids : 89,99 €/an, Kaligo : 83,88 €/an). L'annuel, mis en avant à « 3,33 €/mois », est le cœur des revenus. |
| **Offre de lancement** | Jusqu'au 31 janvier 2027 : **prix fondateurs à 29,99 € la 1ʳᵉ année** et **accès à vie à 79,99 €** (puis 99,99 €), en nombre limité. Codes cadeaux pour Noël. | C'est la saison des cadeaux, et les grands-parents sont une cible. Ça crée de l'urgence sans dark pattern. |
| **Offre gratuite** | Garder les 42 leçons gratuites. Une fois le gratuit terminé, ajouter **une leçon Premium offerte par jour**. | Un enfant ne voit que les leçons de sa classe, soit 2 à 4 jours de jeu. La leçon offerte entretient l'habitude. |
| **Écran Premium** | Un seul gros bouton « Essayer 14 jours gratuits », une frise de l'essai avec rappel au jour 12. **Affiché seulement après le code parent**, jamais devant l'enfant. | L'écran actuel n'a pas de bouton d'action clair et il est accessible à l'enfant. |
| **Fuite de revenus** | Fermer l'accès illimité sur les télés autres qu'Android TV (code famille via RevenueCat). | Aujourd'hui, ces télés ont tout gratuitement. |
| **Mascotte** | Passer des animaux génériques à un **univers original et protégeable** (piste du rapport 03 : l'Arbre-à-Pourquoi, les Pétillous, avec **Tilou** comme mascotte principale). **Décision des fondateurs : l'enfant choisit son compagnon parmi 6 Pétillous**, Tilou restant le visage de la marque. Les animaux 3D actuels deviennent des doudous. | Un renard ou un panda génériques ne peuvent pas être déposés comme marque. Une créature unique devient le visage de la marque, en peluche comme en vidéo. Le rapport 05 nommait les animaux actuels, le rapport 03 l'emporte. |
| **Points et cadeaux** | Des points qui récompensent la **maîtrise et l'effort**, pas le volume. La flamme est remplacée par une « **Semaine pétillante** » (4 jours sur 7). Aucun hasard payant. Les objets Premium sont invisibles pour les enfants gratuits. | Gamification éthique : c'est un argument de vente auprès des parents, à l'opposé des applications qui culpabilisent l'enfant. |
| **Voix** | Une voix humaine enregistrée pour les sons et les syllabes. Une voix de synthèse de qualité générée à l'avance pour le reste (Azure ou ElevenLabs). Budget de 2 000 à 5 000 €. | Apprendre à lire exige des sons exacts. |
| **Ordre des plateformes** | 1) Version tablette et téléphone de la même application Android. 2) iPad et iPhone. 3) Fire TV via l'Amazon Appstore. 4) Samsung et LG dans leurs magasins officiels. Huawei plus tard. | Grossir le marché au moindre coût : moins de 600 € de frais directs, l'essentiel est du temps de développement. |
| **Réseaux** | Semaine 1 : Instagram et Facebook, Pinterest, TikTok (en reprenant les Reels). Semaine 2 : YouTube Parents. Mois 2 ou 3 : YouTube Enfants, avec 10 vidéos d'avance. | Environ 11 h par semaine à deux. Pinterest est le canal le plus rentable pour récolter des e-mails de parents. |
| **Publicité payante** | Seulement pour **tester les messages** au début, et couper tout canal qui coûte plus de 40 € par abonné. | Le parcours de la pub sur téléphone vers une installation sur la télé coûte cher. L'agent estime un abonné entre 40 et 120 € en pub, pour 20 à 40 € de revenu par abonné. |
| **Image des enfants** | **Aucun visage d'enfant** dans les contenus de marque : mains, dos, écran, mascotte. | Lois du 19 octobre 2020 et du 19 février 2024 : les obligations sont lourdes dès que l'image d'un enfant est exploitée. |
| **Structure** | Une **SAS à deux**, avec pacte d'associés et cession des droits de chacun à la société. Compte Google Play transféré à la société. | Protège le couple et l'adresse personnelle, rend possible la Bourse French Tech (jusqu'à 30 000 €, pour une société de moins d'un an). |

---

## 3. Le plan d'action

### 🔴 Cette semaine : les bases (gratuit ou presque)
- [ ] **Site** : remplacer « [NOM DE L'ÉDITEUR] », créer une page Mentions légales (éditeur, directeur de la publication, hébergeur), et passer « Bientôt sur Google Play » à un vrai lien vers le store.
- [ ] Réserver les **noms de domaine** (petitssavants.fr, .com, .app…) et créer **contact@petitssavants.fr** pour remplacer le Gmail personnel partout.
- [ ] Réserver **@petitssavants** sur Instagram, Facebook, TikTok, YouTube, Pinterest et Threads, avec la double authentification.
- [ ] Faire la recherche de marque INPI et TMview sur « petits savants », « petit savant » et les noms de mascottes. Prendre rendez-vous avec un expert-comptable pour la SAS.
- [ ] **Dans l'application** : mettre l'écran Premium derrière le code parent, retirer l'argument « tous les cadeaux » vu par l'enfant, et ajouter un bouton « Résilier mon abonnement ».
- [ ] **Fiche Google Play** : coller le nouveau titre, la description courte et la description longue (rapport 04, § 1.2 à 1.4), puis refaire les 8 captures avec leurs légendes.
- [ ] Demander à **20 ou 30 proches et bêta-testeurs** d'installer, d'essayer, puis de laisser un avis honnête, sans contrepartie.

### 🟠 Ce mois-ci (novembre à mi-décembre) : Noël et lancement
- [ ] Mettre en place l'**essai de 14 jours**, les **prix fondateurs**, l'**accès à vie** et les **codes cadeaux** de Noël.
- [ ] Ouvrir les réseaux et suivre le **calendrier jour par jour** du rapport 05 (9 novembre au 6 décembre : Black Friday, calendrier de l'Avent). Un tournage par semaine, 3 ou 4 vidéos, et une fiche à imprimer par semaine.
- [ ] Lancer **Pinterest et une fiche gratuite contre un e-mail** (Brevo ou MailerLite), et commencer la newsletter des parents.
- [ ] **Relations presse** : envoyer le communiqué (rapport 06, § 3.4) à la presse régionale, Univers Freebox, Frandroid et aux sites pour parents. L'angle : « un couple de parents a mis l'école sur la télé du salon ».
- [ ] Recruter **10 enseignantes ambassadrices** et **10 micro-influenceuses** payées en Premium, avec mention « Publicité » et contrat écrit dès 1 000 € par an.
- [ ] Immatriculer la SAS, signer le pacte et les cessions de droits, adhérer à un médiateur, compléter les CGU et CGV.
- [ ] Recruter un **illustrateur** (priorité n° 1) pour la mascotte principale, avec une cession de droits écrite.

### 🟡 Dans les 3 mois (décembre à février)
- [ ] **Voix** : enregistrer les sons et les syllabes, puis générer les autres voix à l'avance.
- [ ] **Nouvelle direction artistique** : la mascotte, une couleur par matière, et les premières illustrations faites maison à la place des emojis.
- [ ] **Nouveau système de points et de cadeaux** : premier objet en moins de 5 minutes, Semaine pétillante, cabane.
- [ ] **Version tablette et téléphone** de l'application Android, avec un abonnement commun.
- [ ] Publier sur **l'Amazon Appstore (Fire TV)**, postuler au badge Google Play « **Approuvé par les enseignants** ».
- [ ] Démarcher les **partenaires** : Free (la Freebox Pop fait déjà tourner l'application), mutuelles (MAE, MAIF, MGEN), plateformes d'avantages salariés (Leeto, Swile), éditeurs de cahiers de vacances.
- [ ] Déposer la demande de **Bourse French Tech** et visiter **Educatech Expo** (2 au 4 décembre 2026, à confirmer).

### 🟢 Dans les 6 à 12 mois
- [ ] **Parcours CP complet** : 60 séances syllabiques (son → syllabe → mot → dictée → petite histoire), puis la fluence de lecture au micro.
- [ ] **Passer de 151 à environ 650 séances**, avec 12 types d'exercices au-delà du QCM, des révisions espacées, un test de positionnement et un bilan clair pour les parents.
- [ ] **iPad et iPhone**, puis Samsung et LG dans leurs magasins officiels.
- [ ] **YouTube Enfants** avec les mascottes et une comptine originale (« Le Train des Sons »).
- [ ] **Offre d'été** « Préparer le CP sur la télé » ou « cahier de vacances sur la télé », à préparer pour mai.
- [ ] Demander le label **Reconnu d'intérêt pédagogique**, créer un **comité pédagogique** (enseignante, orthophoniste), déposer la marque à l'EUIPO avant la fin du délai de 6 mois.
- [ ] **Produits dérivés** : coloriages, autocollants, puis une peluche (Somnole en premier).

---

## 4. Les chiffres à garder en tête

- **Projections à 12 mois** (rapport 04, estimations) :

  | Scénario | Installations | Abonnés payants | Revenu net |
  |---|---|---|---|
  | Prudent | 5 000 | ~100 | ~2 200 € |
  | Central | 25 000 | ~925 | ~20 000 € |
  | Ambitieux | 80 000 | ~4 160 | ~92 000 € |

  **Le vrai frein, c'est le nombre d'installations**, pas le taux de conversion.
- **Plan d'acquisition à 90 jours** (rapport 06, estimations) : de 100 à 700 abonnés payants selon le budget (0 €, 500 € ou 2 000 € par mois).
- **Les budgets à prévoir** : voix 2 000 à 5 000 €. Mascotte et univers 5 000 à 7 000 € en version allégée, 10 000 à 23 000 € en version complète. Marque 230 à 310 € à l'INPI, environ 1 200 € pour l'extension européenne. Outils pour les réseaux 35 à 60 € par mois.
- **Le temps** : environ 11 h par semaine à deux pour les réseaux, 15 h le premier mois.
- **Les cibles prioritaires** : les parents de 30 à 42 ans, les grands-parents à Noël, les **familles qui font l'école à la maison** (environ 30 600 enfants, très prescriptrices) et les **familles francophones à l'étranger** (612 établissements français, plus de 400 000 élèves).

---

## 5. Ce qui reste à vérifier

Le réseau de cette session bloquait plusieurs sites, dont Google Play, l'aide Google, l'INPI, l'EUIPO, RevenueCat et Adapty. Le quota de recherches web a aussi été atteint en fin d'étude. Avant de décider, vérifiez donc vous-mêmes :

1. **Les marques** : disponibilité de « Petits Savants » et des noms de mascottes à l'INPI, l'EUIPO et TMview, et des noms de domaine.
2. **Les prix des concurrents**, dans les magasins d'applications.
3. **Les mots-clés** : leurs volumes de recherche, avec AppTweak ou l'outil de planification de mots-clés de Google Ads.
4. **Les règles officielles** de Google Play Familles, du badge « Approuvé par les enseignants » et des vidéos YouTube « conçues pour les enfants ».
5. **Le paiement sur Samsung et LG**, et les prix en francs CFA.
6. **Les dates** des salons et des concours 2026-2027.
7. **Le juridique** : faites valider la structure, les CGU, les CGV et le pacte par un avocat ou un expert-comptable. Les rapports ne sont pas des avis juridiques.

Chaque rapport liste en détail les points marqués « à vérifier » ou « estimation ».
