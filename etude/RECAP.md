# Petits Savants : le point complet

*Tout ce qui a été fait, décidé et ce qui reste à faire. Les détails sont dans les rapports du dossier `etude/`. Le référentiel `00-REFERENTIEL.md` liste les règles à vérifier avant et après chaque création.*

---

## 1. Les études

| N° | Rapport | En une phrase |
|---|---|---|
| 01 | Marché et concurrence | Personne ne fait l'école sur la télé à la télécommande : c'est votre avantage unique. |
| 02 | Produit, design et pédagogie | Le premier audit, et la feuille de route pédagogique. |
| 03 | Gamification et mascottes | Récompenser l'effort, jamais rendre accro ni culpabiliser. |
| 04 | Fiche Google Play et abonnement | Les textes, l'écran Premium, les offres, les projections. |
| 05 | Réseaux sociaux et contenus | Stratégie, calendrier, idées, scripts. |
| 06 | Acquisition et partenariats | Les leviers gratuits, la presse, les partenaires. |
| 07 | Marque, juridique et organisation | Les obligations, les risques, la répartition des rôles. |
| 08 | Identité de marque | « L'école sur la télé du salon », Tilou. |
| 09 | Premières planches Flow | Premières planches de personnages (base pour Tilou). |
| 11 | Fiche de production Flow | Chaque image à générer : format, qualité, images à joindre, prompt. |
| 12 | La Récré | Comment reprendre vos jeux de « La Récré » sur la télé. |
| 13 | Atelier et outils | 84 activités en famille, les minuteurs de Minuto, les routines. |
| 14 | Visuels et contenus des réseaux | Miniatures, couvertures, épingles, 16 séries. |
| 15 | Design 2026 « Lumière douce » | La nouvelle direction visuelle et 7 maquettes. |
| 00 | Référentiel | Toutes les règles et les check-lists. |

---

## 2. Les décisions prises

- **Le compagnon de l'enfant est un animal qu'il choisit** (licorne, dinosaure, chat, chien…) et qu'il habille. **Tilou** reste la mascotte de la marque (guide, logo, chargement, réseaux).
- **De la toute petite section au CM2**, rien avant la maternelle.
- **On parle aux parents** ; jamais d'incitation à l'achat envers l'enfant ; jamais de visage d'enfant dans les contenus.
- **0 € de budget** : marketing par les réseaux sociaux, outils gratuits.
- **Les programmes officiels les plus récents** comme référence, mis à jour quand ils changent.
- **Les outils parents (minuteurs, routines) sont gratuits, le contenu est Premium.**
- **Musique** : libre de droits (Pixabay, avec la source notée), jamais pendant les leçons.
- **Le design « Lumière douce »**, avec des thèmes et des réglages d'accessibilité.

---

## 3. Ce qui a changé dans l'application (projet « tvapp », branche `claude/determined-franklin-k8m1zr`)

**Le contenu**
- **551 leçons** au lieu de 151, **de la TPS au CM2**. Par matière : français 173, maths 176, le monde 101, anglais 69, écriture 32.
- Un vrai **parcours de lecture au CP**.
- Le **CM1 et le CM2** ajoutés : français, maths (décimaux, fractions, proportionnalité), sciences, histoire, géographie, EMC, anglais.
- **Deux relectures** :
  - une relecture pédagogique : 73 corrections ;
  - un contrôle de conformité aux programmes : terminologie, niveaux, manques comblés.
- Les réponses de maths **recalculées automatiquement** : aucune erreur.
- Les **leçons gratuites** n'ont jamais changé, et personne ne perd sa progression.

**Pour l'enfant**
- Un **écran de chargement** avec Tilou (« ? » qui devient « ! »).
- Un **design pop** et une couleur par matière (en attendant la refonte « Lumière douce »).
- La **révision du jour**, la **leçon cadeau du jour** une fois les leçons gratuites finies, et la **Semaine pétillante** (4 jours sur 7, sans série à perdre).
- **L'écriture sur papier**, pour les familles qui ne veulent pas prêter un téléphone.
- **Pour les enfants qui ne lisent pas** : des icônes sur les boutons, et chaque bouton dit son nom à voix haute.

**Pour les parents et l'abonnement**
- Plus rien ne pousse l'enfant à acheter : les cadeaux Premium sont invisibles pour un enfant non abonné.
- Un écran Premium plus clair : « Essayer gratuitement », « −33 % » sur l'annuel, et « Résilier ou gérer l'abonnement ».
- Le **rapport parents** affiche les leçons à revoir et une idée d'activité sans écran.

**La publication**
- **Version 0.7.0** prête : fiche Google Play (titre, descriptions, notes de version), site, conditions et confidentialité à jour.

---

## 4. Ce qui vous attend

### 🔴 Avant de publier la version 0.7.0
1. **Votre conjoint** relit la branche `claude/determined-franklin-k8m1zr` du projet « tvapp », la fusionne, puis publie (voir `play/README.md`).
2. **Essai sur une vraie télé** : animations, voix (dont l'alphabet anglais), quelques leçons de chaque classe.
3. **Play Console** : l'essai de 14 jours sur l'annuel et le prix de lancement à 29,99 € la première année.

### 🟠 Obligations légales, à faire vite
4. **L'identité de l'éditeur** (statut, SIREN, adresse) et un **médiateur de la consommation**, pour les mentions légales et les conditions.
5. **Les marques** : vérifier « Petits Savants », « Tilou » et « La Récré » (proche de « La Grande Récré ») sur data.inpi.fr.

### 🟡 Le design et les images
6. **Valider la direction « Lumière douce »** à partir des maquettes. Je l'applique ensuite à l'application, en 6 lots ; les 5 premiers n'ont besoin d'aucune nouvelle image.
7. **Google Flow** (fiche 11) : commencer par l'imagier test, puis les animaux.

### 🟢 Ensuite
8. **Je construis**, dans cet ordre conseillé :
   - le nouveau design, les thèmes et les réglages d'accessibilité ;
   - le premier lancement : prénom, animal, papier ou téléphone, temps d'écran ;
   - la Récré : 8 jeux ;
   - l'espace « À la maison » : minuteurs, routines, atelier.
9. **Les réseaux** : ouvrir les comptes et suivre le calendrier (rapports 05 et 14).

---

## 5. Ce qui reste à vérifier

Plusieurs sites étaient bloqués depuis la session : eduscol, education.gouv.fr, Google Play, l'INPI. Plusieurs points ont donc été traités de mémoire et restent à confirmer :
- **Dans les textes officiels des programmes** :
  - la répartition de quelques notions : les homophones entre CE1 et CE2, le conditionnel au CM2, la place exacte de certaines notions du nouveau programme de sciences de 2026 entre CM1 et CM2 ;
  - la puberté, laissée de côté volontairement : c'est à vous de décider si on l'aborde.
- **Les prix des concurrents, les volumes de mots-clés**, et les règles officielles de Google Play et de YouTube.
- **Le juridique**, avec un avocat ou un expert-comptable : statut, conditions de vente, pacte entre associés.

---

## 6. Les liens

- **La démo de l'application** (design actuel, 551 leçons) : https://claude.ai/artifact/YBQr8BHfZ2z6d5Hmt2y3a5
- **Les maquettes du nouveau design** : https://claude.ai/artifact/B7nuwyS85CfEdnQUrb99rw
- **Le code** : GitHub, projet `kidinou/tvapp`, branche `claude/determined-franklin-k8m1zr`.
- **Les études et le site** : GitHub, projet `kidinou/petits-savants`, même branche.
