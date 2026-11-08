# Petits Savants : ce qu'il faut retenir et ce qu'on doit faire

*Le résumé à partager entre nous deux. Version « 0 € » : on n'investit rien pour l'instant, et ce sont les réseaux sociaux qui font le marketing et la vente.*

---

## 1. Ce qui a été fait

Une étude complète par 8 experts (des agents IA spécialisés), environ 75 000 mots, tout est dans le dossier `etude/` :

1. **Marché et concurrence** : 25 concurrents analysés, nos prix comparés, nos cibles.
2. **Produit, design et pédagogie** : audit de chaque écran, ce qui manque dans le programme, la voix, les plateformes.
3. **Gamification et mascottes** : un univers, des mascottes, 122 objets à gagner, le système de points.
4. **Fiche Google Play et abonnement** : textes prêts à coller, nouvel écran Premium, offres, projections.
5. **Réseaux sociaux** : stratégie par réseau, plus de 100 idées de contenus, 12 scripts, calendrier jour par jour.
6. **Acquisition et partenariats** : presse, influence, partenaires, modèles d'e-mails, communiqué de presse.
7. **Marque, juridique et organisation** : obligations légales, risques, répartition des rôles.
8. **Identité de marque** : positionnement, mascotte Tilou, logo, couleurs, sons, avec une planche visuelle.
9. **Planches pour Google Flow** : 18 planches de design à générer, avec les prompts prêts à coller.

Le fichier `SYNTHESE.md` résume tout avec le plan d'action complet.

---

## 2. Les 10 choses à retenir

1. **On a un vrai avantage unique : personne ne fait l'école sur la télé.** Aucune application scolaire française ne se joue à la télécommande. Les concurrents (Lingokids, Kaligo, Khan Kids) ne sont que sur tablette. La télé, c'est 71 % du temps d'écran des 3-5 ans.
2. **Mais la télé seule ne suffira pas.** Peu de foyers ont une télé Android. Il faudra une version tablette et téléphone. Bonne nouvelle : c'est la même application Android, et l'abonnement Google Play suit le compte Google.
3. **Le contenu est trop mince pour un abonnement à l'année.** 151 leçons, ça fait environ 22 par classe, à peine un mois d'école. Objectif : environ 650 séances, en commençant par **la lecture au CP**, là où les parents paient le plus volontiers.
4. **La voix de synthèse et les emojis font « amateur ».** La voix lit mal les sons isolés ([t], [ch]), ce qui est grave pour apprendre à lire. Les emojis sont ambigus (⚽, c'est « ballon » ou « foot » ?).
5. **On parle aux parents, pas aux enfants.** Ce sont eux qui paient. La loi interdit de pousser un enfant à réclamer un achat.
6. **Notre message** : « L'école sur la télé du salon. » Le contraire de « l'écran-sucette » qu'on donne pour occuper l'enfant : un écran partagé, une vraie leçon, sans pub.
7. **Notre mascotte : Tilou**, une petite goutte abricot dont l'antenne en « ? » devient « ! » quand l'enfant comprend. Elle est originale, donc on peut la protéger, contrairement à un renard ou un panda génériques. Les animaux actuels deviennent « le doudou de Tilou ».
8. **Les points doivent récompenser l'effort, pas le temps passé.** Pas de flamme qui culpabilise : une « Semaine pétillante » (4 jours sur 7 suffisent). Rien de payant au hasard.
9. **La publicité payante ne serait pas rentable de toute façon** : un abonné coûterait plus cher en pub qu'il ne rapporte. Notre choix « 0 € et réseaux sociaux » est donc le bon.
10. **Ne jamais montrer le visage d'un enfant** (même les nôtres) dans les vidéos : les lois de 2020 et 2024 sont très strictes. On filme des mains, des dos, l'écran, Tilou.

---

## 3. À faire dans l'application (pour le développeur)

### 🔴 Tout de suite (obligatoire ou bloquant)
- [ ] **Mettre l'écran Premium derrière le code parent.** Aujourd'hui l'enfant peut y accéder seul.
- [ ] **Retirer « Tous les cadeaux pour l'animal » des arguments Premium** montrés à l'enfant. À remplacer par « Toutes les leçons ». Les objets réservés au Premium doivent être invisibles pour un enfant non abonné, sans cadenas ni « demande à tes parents ».
- [ ] **Ajouter un bouton « Résilier mon abonnement »** (obligatoire, règle des 3 clics).
- [ ] **Fermer l'accès illimité sur les télés autres qu'Android TV** : aujourd'hui elles ont tout gratuitement.
- [ ] **Passer l'essai gratuit à 14 jours** sur l'annuel (7 jours sur le mensuel). Les essais longs convertissent nettement mieux.
- [ ] **Nouvel écran Premium** : un seul gros bouton « Essayer 14 jours gratuits », l'annuel présenté à « 3,33 €/mois », une frise de l'essai avec un rappel au jour 12. Détails dans le rapport 04, § 3.2.
- [ ] **Offre de lancement jusqu'au 31 janvier 2027** : 29,99 € la première année. Ça se configure gratuitement dans la Play Console.
- [ ] **Demander un avis** dans l'espace parents, après des progrès visibles (la demande d'avis intégrée de Google fonctionne sur Google TV).

### 🟠 Dans les 3 mois
- [ ] **Version tablette et téléphone** de la même application Android.
- [ ] **La voix** : enregistrer nous-mêmes les sons et les syllabes (gratuit, avec un bon micro de téléphone dans une pièce calme). Pour le reste, une voix de synthèse de qualité générée à l'avance.
- [ ] **Remplacer les emojis** par des illustrations faites avec Google Flow (planche P18).
- [ ] **Intégrer Tilou** et le nouveau système de points et d'objets : premier objet gagné en moins de 5 minutes.
- [ ] **Une leçon Premium offerte par jour** quand l'enfant a fini les leçons gratuites de sa classe.
- [ ] **Publier sur l'Amazon Appstore** (Fire TV), c'est gratuit.

### 🟡 Dans les 6 à 12 mois
- [ ] **Le parcours lecture du CP** : 60 séances (son → syllabe → mot → dictée → petite histoire).
- [ ] **Passer de 151 à environ 650 séances**, avec d'autres exercices que le QCM : tri, association, remise en ordre, dictée, calcul mental…
- [ ] Révisions espacées, un test de niveau au départ, un bilan clair pour les parents.
- [ ] iPad et iPhone, puis Samsung et LG dans leurs magasins officiels.

---

## 4. À faire pour le marketing, à 0 €

### Cette semaine
- [ ] **Réserver @petitssavants** sur Instagram, Facebook, TikTok, YouTube et Pinterest (gratuit).
- [ ] **Coller la nouvelle fiche Google Play** : titre, descriptions et légendes des captures sont prêts dans le rapport 04, § 1.2 à 1.6.
- [ ] **Corriger le site** : le nom de l'éditeur (« [NOM DE L'ÉDITEUR] » est affiché), le bouton « Bientôt sur Google Play », une page Mentions légales.
- [ ] **Demander à 20 ou 30 proches** d'installer l'application, de l'essayer, puis de laisser un avis honnête. On ne donne rien en échange d'un avis.

### Ce mois-ci : la machine à contenus
- [ ] **Ordre d'ouverture des réseaux** : semaine 1 Instagram, Facebook, Pinterest et TikTok, semaine 2 YouTube Parents, mois 2 ou 3 YouTube Enfants.
- [ ] **Suivre le calendrier jour par jour** du rapport 05, § 6.1 (9 novembre au 6 décembre).
- [ ] **Un tournage par semaine** pour 3 ou 4 vidéos courtes, publiées sur Reels, TikTok et Shorts en même temps. 40 idées et 10 scripts sont prêts dans le rapport 05.
- [ ] **Pinterest en priorité** : c'est le canal le plus rentable. Des fiches à imprimer gratuites, et une fiche offerte contre l'e-mail du parent, avec Brevo ou MailerLite en version gratuite.
- [ ] **Groupes Facebook** de parents, d'école à la maison et d'expatriés : la règle « 9 aides pour 1 mention de l'application ».
- [ ] **Envoyer le communiqué de presse** (rapport 06, § 3.4) à la presse régionale et aux sites tech, comme Univers Freebox et Frandroid. L'angle : « un couple de parents a mis l'école sur la télé du salon ».
- [ ] **Enseignantes ambassadrices et petites influenceuses payées en Premium** au lieu d'argent : 12 mois de Premium contre une story ou un Reel honnête. Mention « Publicité » obligatoire, même payée en Premium.
- [ ] **Parrainage** avec les codes promo Google Play : gratuit, et ça permet de savoir d'où viennent les abonnés.
- [ ] **Contacter Free** : la Freebox Pop fait déjà tourner les applications Android TV.

### Les outils gratuits
CapCut, Canva (version gratuite), Meta Business Suite pour programmer Instagram et Facebook, Metricool (version gratuite), Google Flow pour les visuels, Brevo ou MailerLite pour les e-mails. Compter environ **11 h par semaine à deux** (15 h le premier mois).

---

## 5. Le design avec Google Flow

Tout est dans `09-planches-google-flow.md`. L'ordre :

1. **Tilou d'abord** (planche P01). On le valide avant tout le reste, puis on l'utilise comme image de référence (« ingrédient ») pour toutes les autres planches.
2. Ses expressions, ses poses et ses 5 stades d'évolution.
3. Les accessoires : chapeaux, tenues, objets, couleurs, à chaque fois seuls **et** portés par Tilou.
4. L'univers : la cabane, l'Arbre-à-Pourquoi, Somnole, les autres personnages.
5. Les illustrations qui remplacent les emojis des exercices.

À savoir : une image brute d'IA est mal protégée par le droit d'auteur. Pour que Tilou nous appartienne vraiment, il faut le retoucher ou le redessiner nous-mêmes, en gardant les étapes (croquis datés).

---

## 6. À 0 €, ce qu'on ne peut pas éviter ou qu'il faut savoir

On peut faire tout le marketing à 0 €. Quelques obligations restent pourtant gratuites mais indispensables, et d'autres coûtent un peu :

- **Gratuit mais obligatoire** :
  - les mentions légales avec le nom de l'éditeur (sanctionnable jusqu'à 75 000 €) ;
  - un statut pour encaisser les abonnements : la **micro-entreprise** se crée gratuitement en ligne. C'est la solution à 0 €, la SAS (plus protectrice) peut venir plus tard.
- **Obligatoire, avec un petit coût** : l'adhésion à un **médiateur de la consommation**, obligatoire pour vendre un abonnement à des particuliers. Quelques dizaines d'euros par an chez certains médiateurs, à vérifier.
- **Recommandé, pas obligatoire, quand on pourra** :
  - un nom de domaine, environ 10 € par an, pour avoir une adresse e-mail pro au lieu du Gmail ;
  - le dépôt de la marque à l'INPI, environ 230 € pour 2 classes. Sans dépôt, quelqu'un peut déposer le nom avant nous.
- **La Bourse French Tech** (jusqu'à 30 000 €) demande une société de moins d'un an, donc une SAS ou une SARL plutôt qu'une micro-entreprise. À garder en tête si on veut un financement.

---

## 7. Ce qui reste à vérifier nous-mêmes

Certains sites étaient bloqués pendant l'étude (Google Play, l'INPI…). Avant de décider :

- que « Petits Savants », « Tilou » et « Pétillous » sont libres à l'INPI (data.inpi.fr) — « Tilou » est un surnom courant, le nom de secours est « Quilou » ;
- les prix des concurrents dans les magasins d'applications ;
- les règles officielles de Google Play pour les applications familiales et de YouTube pour les vidéos « conçues pour les enfants » ;
- les points juridiques, idéalement avec un expert-comptable ou un avocat : les rapports ne sont pas un avis juridique.

---

## 8. Les chiffres à avoir en tête

- **Nos prix** : 4,99 €/mois et 39,99 €/an, parmi les moins chers (Lingokids : 89,99 €/an, Kaligo : 83,88 €/an). On garde l'annuel, on peut tester 5,99 €/mois.
- **Projections à 12 mois** (estimations) : environ 2 200 € dans le scénario prudent, 20 000 € dans le scénario central, 92 000 € dans le scénario ambitieux. **Ce qui fait la différence, c'est le nombre d'installations.**
- **Nos meilleures cibles** : les parents de 30 à 42 ans, les grands-parents à Noël, les familles qui font l'école à la maison (environ 30 600 enfants) et les familles françaises à l'étranger (plus de 400 000 élèves dans le réseau français).
