# 17 · Revue du code de Petits Savants TV

*Étude 17, Petits Savants, 8 novembre 2026. Rôle : ingénierie principale (apps web embarquées sur télé : WebView Android TV, LG webOS, Samsung Tizen) et qualité du code. Base : `/home/user/tvapp` en version 0.7.0 (commit `c85f9c1`, 551 leçons), lu en entier : `README.md`, `www/` (HTML, CSS, `js/`, `phone/`), `android/app/src/main/java/`, le manifeste Android, `scripts/`, `tests/`. Aucun fichier de l'app n'a été modifié. Les numéros de ligne sont ceux de ce commit : un autre agent corrige en ce moment des textes dans `www/js`, ils peuvent glisser de quelques lignes.*

**Méthode.** Lecture ligne à ligne ; hypothèses vérifiées par des tests Playwright écrits à part (port 8172, Chromium 1243 avec WebGL logiciel SwiftShader, processeur ralenti ×4 et ×8 par le protocole DevTools pour imiter un boîtier télé) ; une sonde Java contre une copie de `LocalServer.java` ; un inventaire Node de toutes les phrases lues à voix haute (chaque leçon de chaque classe générée 40 fois). Les scripts sont dans le dossier de travail de la revue (`speech-inventory.cjs`, `specs/review.spec.mjs`, `java/Probe.java`).

**Gravité.** **Bloquant** : à corriger avant la prochaine version publiée. **Important** : dans le mois, et avant les chantiers Lumière douce, Récré et À la maison. **Mineur** : à glisser au fil de l'eau. **Effort** : S (moins d'une demi-journée), M (1 à 3 jours), L (plus de 3 jours).

---

## 0. En bref

1. **Le code est sain et lisible** : ES5 partout, pas de dépendance, des commentaires qui disent pourquoi, 60 tests Playwright qui couvrent les parcours réels, une vraie discipline (`esc()` sur les prénoms, actions du téléphone filtrées par écran). La base tient. Les défauts sont concentrés dans quatre zones.
2. **Le serveur local Android est le point faible** : un seul message WebSocket malformé, envoyé par n'importe quel appareil du Wi-Fi sans connaître le code, **fait planter l'app** (vérifié). Le relais n'a qu'un code à 4 chiffres, sans limite d'essais ni contrôle d'origine, et n'importe qui peut prendre la place de la télé.
3. **La promesse « rien ne quitte la maison » a trois fuites** : la sauvegarde automatique Android (`allowBackup="true"`) envoie les prénoms, le code parent et les progrès sur le Google Drive de la télé ; une voix de synthèse « réseau » envoie les phrases (dont le prénom) à Google ; le relais expose les prénoms à tout le réseau local.
4. **Quatre bugs touchent l'enfant tous les jours** : « Rejouer » contourne la pause du temps d'écran ; les explications longues sont **coupées au milieu** (121 diapositives dépassent la limite de 12 s) ; « Revoir la leçon » remet les exercices à zéro ; un argument mal formé venu du téléphone casse l'écran du parcours.
5. **Performance** : le rendu par `innerHTML` n'est **pas** le problème (2 à 10 ms par écran à CPU ×4). Le coût est dans l'animal 3D sur WebGL logiciel (20 images/s mesurées au lieu de 60, et une fuite de tampons WebGL à chaque changement de profil), dans `three.min.js` chargé au démarrage, et dans des canevas d'écriture quatre fois trop grands.
6. **Avant Lumière douce, la Récré et À la maison**, il faut : un système de **migrations** du stockage (aujourd'hui, une version inattendue efface tout), découper `app.js` et `parent.js`, centraliser la règle « qu'est-ce qui est ouvert » (leçons, cadeau, jeux, fiches), sortir les couleurs du JavaScript en jetons CSS, et un registre de nettoyage (minuteurs, boucles, écouteurs).
7. **La voix** sonne mal pour des raisons surtout réparables sans rien acheter (choix de la voix, débit et hauteur, découpage, normalisation des textes, fin de phrase réelle). Pour la qualité « produit », la bonne cible est **hybride** : sons, syllabes et lettres **enregistrés**, leçons et consignes fixes en **voix neuronale générée à l'avance** (environ 20 à 35 Mo), et la synthèse de la télé seulement pour ce qui est tiré au hasard.

---

## 1. Ce qui a été mesuré

| Mesure | Résultat | Commentaire |
|---|---|---|
| Démarrage, `DOMContentLoaded` | 69 ms (CPU ×1), 158 ms (×4), 281 ms (×8) | 1,5 Mo de ressources décodées, 9,6 Mo de tas JavaScript. Un boîtier type Mi Box est entre ×4 et ×8. |
| Coût d'exécution des scripts à CPU ×4 | `three.min.js` 84 ms ; contenus 101 ms (français 26, maths 27, monde 38, anglais 10) ; `qrcode.js` 5 ms | Sur un boîtier, compter 2 à 3 fois plus. |
| Première entrée dans un profil (WebGL à froid) | jusqu'à 1,6 s | Création du contexte et compilation des shaders par SwiftShader, une fois. |
| Rendu complet d'un écran par `innerHTML` (CPU ×4) | leçon 2 à 10 ms (46 éléments) ; parcours 4 à 22 ms (118 éléments, 9 Ko de HTML) | Négligeable devant la peinture et la 3D. |
| Cadence avec l'animal 3D, écran de leçon, CPU ×4, WebGL logiciel | **20 images/s** | Le fil principal est saturé par le rendu logiciel. |
| Tampons WebGL après 30 changements de profil | 28 → **188 créés, 0 libéré** | Fuite confirmée (§ 2.3, L1). |
| Message WebSocket de longueur négative | `NegativeArraySizeException` non rattrapée dans le fil `ps-conn` | Sur Android, cela tue le processus de l'app (§ 4, S1). |
| `GET /%E0` sur `npm start` | le serveur Node s'arrête (`URIError`) | § 4, S9. |
| Phrases françaises distinctes lues (40 tirages par leçon) | 40 650 (1,33 M caractères) ; diapositives : 1 672 (86 000 caractères) ; anglais : 1 180 (17 000 caractères) ; 545 contiennent le prénom | § 7. |
| Diapositives dont la phrase dépasse 176 caractères (limite de 12 s) | **121** sur 1 847 | § 2.1, B2. |

---

## 2. Bugs

### 2.1 Logique

| N° | Gravité | Où | Problème | Correction | Effort |
|---|---|---|---|---|---|
| B1 | **Important** | `www/js/app.js:698` (`actions.replay`), `:336-345` (`startLesson`), `:435` (`quit`), `:792-800` (`tick`) | **La pause du temps d'écran se contourne.** Quand le temps est écoulé pendant une leçon, `S.timeUp` passe à vrai, mais « Rejouer » sur l'écran Bravo relance une leçon sans contrôle (vérifié : on arrive sur `lesson`). Même chose pendant les 10 s qui suivent un « Quitter » : `go("home")` ne regarde pas le temps et `actions.start` non plus. Un enfant peut enchaîner les leçons indéfiniment. | Un seul garde-fou dans `startLesson()` (et `actions.review`) : si `S.timeUp` ou `Store.minutesLeft() <= 0`, `go("pause")`. `actions.quit` passe par `actions.home`. Sur l'écran Bravo, masquer « Rejouer » quand `S.timeUp`. | S |
| B2 | **Important** | `app.js:451` (`speechMs`, plafond 12 000 ms), `:513-527` | **Les explications longues sont coupées.** La durée d'une diapositive est *estimée* (68 ms par caractère, plafonnée à 12 s), puis la diapositive suivante, ou l'image suivante, appelle `Speech.say()` qui **annule** la phrase en cours. 121 diapositives (grammaire et monde en CE et CM : « Nom, verbe, adjectif », 239 caractères, environ 17 s à débit 0,9) sont tronquées au milieu. Sur une voix plus lente, même les phrases courtes se chevauchent. | Piloter les diapositives par la **fin réelle** de la parole : `SpeechSynthesisUtterance.onend` dans le navigateur, `UtteranceProgressListener.onDone` côté Android renvoyé à la page (`window.PS_SPOKEN(id)`). Garder l'estimation comme filet de sécurité (fin forcée à estimation × 2). Voir § 7.5. | M |
| B3 | **Important** | `app.js:537` (`teachShow`) | **« Revoir la leçon » remet les exercices à zéro** : il rappelle `startLesson()`, qui régénère 5 nouvelles questions. Vérifié : au 3e exercice, `qi` repasse de 2 à 0 et les bonnes réponses sont perdues. | `teachShow` ne fait que `S.teach = { slides: …, i: 0, resume: true }` puis `go("teach")` ; `teachStart` revient à `go("lesson")` sans toucher `S.questions`, `S.qi`, `S.firstTry`. | S |
| B4 | **Important** | `app.js:157-164`, `:213-216` | **La « leçon cadeau » s'obtient avant d'avoir fini les leçons gratuites**, et l'ordre des unités n'est pas tenu. La leçon courante est calculée *par unité*, et les flèches d'unité sont toujours actives : dans l'unité 2, la première leçon est « courante » même si l'unité 1 n'est pas commencée. Comme sa position dans la matière est ≥ 2, elle devient le cadeau du jour. Le README dit « une fois les leçons gratuites faites » et un test s'appelle « finishing one unlocks moving to the next ». | Trancher la règle produit. Proposition : la leçon courante se calcule sur **toute la matière** (première leçon non faite, toutes unités confondues) ; les unités suivantes se regardent mais leurs leçons ne démarrent pas ; le cadeau n'est proposé que si `position === courante globale`. La règle va dans le module d'accès unique (§ 5, M3). | S |
| B5 | **Important** | `app.js:273-277`, `:303-308`, `:313-322`, `:813-827` | **Un argument mal formé venu du téléphone casse l'app.** Le téléphone n'envoie que des actions permises par l'écran, mais leurs **arguments ne sont pas validés** : `review("abc:zz")` met `S.unit[...]` à `NaN`, puis l'écran du parcours lève `TypeError` à chaque affichage (vérifié) jusqu'à ce qu'on rechoisisse un profil. Même effet avec `subject("x")`, `start("99")`. Un bug du téléphone suffit, pas besoin d'attaque. | Valider chaque argument (`/^\d+$/`, bornes) en tête d'action ; dans `onPhone`, entourer l'appel d'un `try/catch` qui renvoie à un écran sûr (`go("home")` ou `profiles`) et consigne l'erreur. | S |
| B6 | Mineur | `app.js:646`, `:699` | `S.timeUp` reste vrai après minuit : une leçon commencée à 23 h 58 se termine sur la pause alors que le nouveau jour a tout son temps. | Dans `actions.home`, ne tenir compte que de `Store.minutesLeft()` (recalculé) ; remettre `S.timeUp` à faux si du temps est disponible. | S |
| B7 | Mineur | `app.js:311` | « Écouter » sur l'unité retire les crochets avec `/\[(\w+)\]/`, qui ne reconnaît pas les lettres accentuées : « Les sons [é], [è], [eu], [o] » est lu avec ses crochets. Les titres lus au focus (« Le son [è] : è, ê, ai, ei ») passent aussi tels quels à la synthèse. | Passer par la normalisation de la voix (§ 7.5) : `[é]` devient le son enregistré ou « é », `ai, ei` deviennent « a, i ; e, i ». | S |
| B8 | Mineur | `app.js:591-604` | En écriture, le bouton « Sur papier » est à la portée de l'enfant et « J'ai écrit ! » vaut **toujours** une réussite du premier coup : 3 étoiles, badge « Sans faute », étoiles à dépenser, sans rien écrire. Il change aussi un réglage parent (`Store.setParent`). | Les réponses sur papier font avancer et donnent des étoiles, mais pas de « premier coup » ni de badge ; le choix papier ou écran reste un réglage parent (le bouton de l'écran ouvre la confirmation par code ou disparaît). | S |
| B9 | Mineur | `android/.../MainActivity.java:37-43`, `:117-120` | Avant que le moteur vocal soit prêt, `speak` est ignoré : la première phrase (« Qui apprend aujourd'hui ? ») se perd souvent. Si l'anglais britannique n'est pas installé, `setLanguage` n'est pas appelé et **l'anglais est lu avec la voix française**. | Mettre en file la dernière phrase jusqu'à `ttsReady` ; repli `en-GB` → `en-US` → `en` ; dire à la page quelles langues existent pour afficher un conseil dans l'Espace parents (« Installez la voix anglaise »). | S |
| B10 | Mineur | `www/js/platform.js:210-228` | La touche OK maintenue répète l'événement : un enfant qui garde OK enfoncé traverse plusieurs écrans (Bravo → parcours → nouvelle leçon). | Ignorer `e.repeat` pour OK et Retour. | S |
| B11 | Mineur | `MainActivity.java:76-77` | Si `PS.back()` lève une erreur, le résultat vaut `"null"` et l'activité se ferme : Retour quitte l'app sur n'importe quelle erreur de page. | Fermer seulement si le résultat vaut exactement `"false"`. | S |
| B12 | Mineur | `www/phone/phone.js:101`, `www/js/trace.js:105-108`, `LocalServer.java:308,318` | Le téléphone renvoie **tous** les traits toutes les 60 ms. Un long gribouillis dépasse 512 Ko et le relais coupe la connexion en plein tracé ; le trafic croît comme le carré de la longueur du tracé. | Envoyer seulement les nouveaux points (`{type:"ink-add", stroke, points}`) et un message complet à la fin de chaque trait. | M |
| B13 | Mineur | `app.js:261-272` | La « Révision du jour » choisit toujours la même leçon (la première ayant le moins d'étoiles) tant qu'elle n'a pas 3 étoiles : elle n'est pas « du jour ». | Mémoriser la date de dernière pratique par leçon et choisir la moins récente parmi les plus faibles (répétition espacée simple). Cette date sert aussi à la Récré (`days[].ids`). | S |
| B14 | Mineur | `app.js:234`, `:667` ; `store.js:34` | La flamme affiche « 6/4 » quand l'enfant a joué 6 jours ; le badge « 10 leçons » et la quête du jour se gagnent en rejouant la même leçon. | Afficher « 4/4 » et un signe « réussi » au-delà ; compter les leçons **différentes** pour le badge (la Récré a besoin du même compteur). | S |

### 2.2 Cas limites

| N° | Gravité | Où | Cas | Correction | Effort |
|---|---|---|---|---|---|
| E1 | **Important** | `www/js/store.js:63-68` | **Stockage illisible ou d'une autre version = tout est effacé.** Si `JSON.parse` échoue (écriture tronquée, coupure de courant) ou si `v !== 2`, `data()` repart d'un modèle vide, et la prochaine sauvegarde (10 s plus tard) écrase les anciennes données. Lumière douce (lot 1) prévoit justement de changer le format. | Avant de repartir à vide, copier la valeur brute dans `ps.data.v2.bak-<date>` ; remplacer le test `v !== 2` par une chaîne de **migrations** (§ 5, M1). | S |
| E2 | Mineur | `store.js:69-71` | Stockage plein ou interdit (mode privé d'un navigateur de télé, `SecurityError`) : `save()` avale l'erreur. Le parent croit que tout est enregistré ; tout est perdu au redémarrage. | Drapeau `Store.healthy` ; bandeau dans l'Espace parents (« Cette télé n'enregistre pas les progrès ») ; un test qui fait échouer `setItem`. | S |
| E3 | Mineur | `LocalServer.java:367-380`, `scripts/serve.mjs:98-103` | Télé sans Wi-Fi : l'adresse du QR code devient `127.0.0.1` ou `localhost`, inutilisable par un téléphone. Si l'adresse change en cours de route, le QR garde l'ancienne jusqu'à la reconnexion. | Si l'hôte est une adresse locale, afficher « La télé n'est pas sur le Wi-Fi » au lieu du QR. | S |
| E4 | Mineur | `store.js:52-56` | Le jour vient de l'horloge de la télé : un enfant qui recule l'heure récupère son temps d'écran et un nouveau cadeau. | Garder `lastSeen` (horodatage) ; si l'horloge recule de plus d'une heure, garder le jour le plus tardif vu. | M |
| E5 | Mineur | `store.js:119-126` | `Store.progress(id)` **crée** une progression pour un identifiant inconnu (et remet la série à zéro) : appelé avec un profil supprimé, il fabrique une entrée orpheline, enregistrée à la prochaine écriture. La suppression elle-même est bien gérée (`parent.js:350-355` remet `S.child` à `null`). | Séparer la lecture (`progressOf(id)`, sans effet) de la création ; ne créer que pour un enfant existant. | S |
| E6 | Mineur | `premium.js:79-89` | Hors ligne, un abonnement annulé reste actif indéfiniment (dernière réponse gardée). Voulu pour les familles qui paient ; à borner. | Délai de grâce (par exemple 30 jours sans réponse de Google Play), puis retour à la partie gratuite. | S |
| — | Vérifié, sans défaut | `store.js:52-56`, `app.js:722` | Changement d'heure : `day()` passe par `setDate()` en heure locale et les jours de la semaine par `new Date(jour + "T12:00:00")` : robuste à l'heure d'été et d'hiver. | Ajouter quand même le test (§ 6, T6). | — |

### 2.3 Fuites

| N° | Gravité | Où | Fuite | Correction | Effort |
|---|---|---|---|---|---|
| L1 | **Important** | `www/js/pet3d.js:359-366`, `:221-222`, `:77-90` | **Géométries et matériaux WebGL jamais libérés.** Chaque changement de profil reconstruit l'animal (un matériau par boule, de nouvelles géométries de cône et de tore) et `scene.remove()` ne libère rien ; chaque cadeau porté ou retiré fait pareil. Mesuré : +160 tampons en 30 changements, 0 supprimé. Sur un boîtier avec peu de mémoire graphique, cela finit en perte de contexte. | `dispose()` récursif (géométries et matériaux) avant de retirer un modèle ou un accessoire ; un cache de matériaux par couleur et de géométries par forme (5 à 10 objets au lieu de 70). | S |
| L2 | **Important** | `pet3d.js:52-75` | **Pas de gestion de la perte de contexte WebGL** (fréquente sur télé quand l'app passe en arrière-plan ou manque de mémoire). Le dessin du renard a été retiré de l'emplacement : il reste un trou. | Écouter `webglcontextlost` (empêcher le comportement par défaut, `Pet.ok = false`, remettre le dessin dans l'emplacement) et `webglcontextrestored` (tout reconstruire). | S |
| L3 | Mineur | `app.js:573` | La démonstration d'écriture en mode papier n'est pas rangée dans `demo` : elle ne s'arrête que parce que le canevas est détaché (`trace.js:148`). Correct aujourd'hui, fragile avec les transitions de Lumière douce (l'ancien écran restera affiché 450 ms). | `demo = T.demo(...)`, et plus largement le registre de nettoyage (§ 5, M6). | S |
| L4 | Mineur | `MainActivity.java:98-112` | Ni `web.onPause()`/`onResume()`, ni `pauseTimers()`, ni arrêt de la voix quand on quitte l'app : la télé peut dire « Bravo » par-dessus l'app suivante. Pas de `onRenderProcessGone` : si le moteur de rendu meurt (manque de mémoire), Android tue l'app. | Cycle de vie complet ; `tts.stop()` dans `onPause` ; un `WebViewClient` qui recrée la WebView dans `onRenderProcessGone`. | S |
| L5 | Mineur | `LocalServer.java:86-104` | Un fil par connexion, sans limite, et aucune limite de temps de lecture (`setSoTimeout(0)`) : quelques centaines de connexions ouvertes et muettes épuisent la mémoire. | Réserve de fils bornée (16) ; 10 s pour lire l'en-tête HTTP ; nombre de connexions par adresse plafonné. | S |
| L6 | Mineur | `LocalServer.java:240-243`, `serve.mjs:93-96` | Les « salles » de chaque code ne sont jamais retirées. | Retirer la salle quand elle n'a plus ni télé ni téléphone. | S |
| L7 | Mineur | `store.js:131-136`, `app.js:795` | L'historique des jours grossit sans fin et tout le stockage est réécrit toutes les 10 s. Sans effet aujourd'hui (quelques Ko). | Agréger les jours de plus de 400 jours. | S |

### 2.4 Vieux moteurs

| N° | Gravité | Où | Problème | Correction | Effort |
|---|---|---|---|---|---|
| O1 | **Important** | `www/css/app.css` (environ 120 `gap` sur des boîtes flex) ; `android/app/build.gradle.kts` (`minSdk = 24`) | Le JavaScript est en ES5 (vérifié : ni `let`, ni flèches, ni gabarits) et three.js r149 ne demande que les classes ES2015. Mais **la mise en page exige Chrome 84** (propriété `gap` en flex). L'APK s'installe dès Android 7 et sur les Fire TV, dont la WebView peut être plus ancienne : boutons collés, grilles cassées, sans message. webOS 22 et Tizen 6.5 (Chromium 87 et 85) sont au-dessus, comme le dit le README. | Au démarrage, mesurer le support (une boîte flex de test avec `gap` dont on lit la largeur), et sur Android lire la version de la WebView (`WebView.getCurrentWebViewPackage()`, API 26+). En dessous : un écran « Mettez à jour Android System WebView » plutôt qu'une app cassée. | M |
| O2 | Mineur | `www/js/*.js` | Corollaire : puisque Chrome 84 est déjà le plancher réel, la discipline ES5 ne protège plus rien. On peut passer à une syntaxe ES2017 (`const`, flèches, gabarits avec échappement), **sans modules** (le paquet LG et le paquet Samsung ouvrent l'app depuis des fichiers, où les modules sont refusés). | Fixer la cible par un contrôle en intégration continue (`es-check es2017 www/js/**/*.js`, sans `vendor/`). | S |
| O3 | Mineur | `platform.js:113-140` | Samsung Tizen n'a pas de `speechSynthesis` : l'app y est muette (dit dans le README). | Les voix enregistrées ou générées à l'avance (§ 7) règlent le problème sur toutes les télés. | (§ 7) |
| — | Vérifié | `platform.js:63`, `trace.js:148`, `phone.js` | `closest` (Chrome 41), `isConnected` (54), événements de pointeur (55), `focus({ preventScroll })` (64, avec repli) : tous sous le plancher de 84. | — | — |

---

## 3. Performance sur une télé modeste

**Ce qui ne coûte presque rien.** Redessiner tout l'écran par `innerHTML` : 2 à 22 ms à CPU ×4, pour 46 à 118 éléments. Inutile de passer à un DOM virtuel ou à des mises à jour fines : c'est la peinture et la 3D qui coûtent.

| N° | Gravité | Où | Constat | Optimisation et critère mesurable | Effort |
|---|---|---|---|---|---|
| P1 | **Important** | `pet3d.js:57-64`, `:276-349` | **L'animal 3D sature le fil principal en WebGL logiciel** : 20 images/s mesurées sur l'écran de leçon à CPU ×4. Le rendu tourne à 30 images/s en continu, même au repos ; l'anticrénelage est actif ; le canevas fait toujours 480 × 480 alors qu'il s'affiche entre 150 et 440 px de scène (75 à 220 px réels sur une Mi Box, dont la scène fait 960 px) ; environ 70 objets donc 70 appels de dessin. | (1) `failIfMajorPerformanceCaveat: true` à la création : sur WebGL logiciel, on garde l'animal dessiné. (2) Mode « lite » (prévu par Lumière douce, lot 1) : sonde de cadence au démarrage, sous 40 images/s pas de 3D. (3) `antialias: false`, taille = emplacement × échelle de la scène × `devicePixelRatio`. (4) Rendu **à la demande** : 30 images/s pendant une réaction, 10 au repos, arrêt après 20 s d'inactivité. (5) Fusion des géométries par matériau (`BufferGeometryUtils.mergeGeometries`). **Critères** : écran de leçon à CPU ×4 ≥ 50 images/s ; `renderer.info.render.calls` ≤ 15 ; 0 tampon perdu après 30 changements de profil. | M |
| P2 | **Important** | `www/index.html:11-12` | `three.min.js` (600 Ko) et `qrcode.js` (57 Ko) sont chargés et exécutés **avant** le premier écran : 84 ms à CPU ×4, 200 à 300 ms sur un boîtier, avant même de savoir s'il y a WebGL. | Charger `three.min.js` en injectant un `<script>` après le premier écran (pendant l'écran de chargement, qui dure 2,4 s de toute façon) ; `qrcode.js` à l'ouverture de l'appairage. Marche depuis `file://`. **Critère** : `DOMContentLoaded` à CPU ×4 sous 80 ms (158 aujourd'hui). | S |
| P3 | Important | `trace.js:87-100`, `:143-168` | **Les canevas d'écriture sont quatre fois trop grands sur une Mi Box** : leur taille est `offsetWidth × devicePixelRatio`, qui ignore la réduction de la scène (densité 2, échelle 0,5). On peint 2 080 × 1 248 pixels pour en afficher 1 040 × 624. La démonstration redessine à chaque image le guide (lettre géante, contour en pointillés) ; le tableau le redessine à chaque mouvement du doigt et à chaque message du téléphone. | Multiplier par l'échelle de la scène (exposer `PS_PLATFORM.scale`) ; dessiner le guide une fois dans un canevas hors écran et le recopier (`drawImage`) ; démonstration à 30 images/s. **Critère** : temps de peinture de l'écran d'écriture divisé par 4 (DevTools, Performance). | S |
| P4 | Mineur | `app.css:403-404` (`.seg-fill`), `:436-438` (`autofill`), `:117` (`.bar-fill`) | Les barres de progression animent `width` : calcul de mise en page à chaque image pendant 2,6 s après chaque bonne réponse, et pendant chaque diapositive. | Animer `transform: scaleX()` avec `transform-origin: left`. | S |
| P5 | Mineur | `app.css:94`, `:98`, `:180`, `:198`, `:348`, `:625-630` ; `app.js:680-688` | Animations infinies sur des écrans où l'enfant attend (bulle « Commencer ! », coffre, confettis, curseur) ; 90 confettis animés pour la quête ; `filter: drop-shadow` sur chaque emoji d'avatar ; 4 dégradés radiaux en fond plein écran ; 106 `box-shadow`. En raster logiciel, chacun repeint de grandes zones. | Le mode « lite » coupe les animations infinies et réduit la pluie à 20 confettis ; supprimer le `drop-shadow` ; un seul dégradé de fond. Lumière douce interdit déjà filtres et flous : le vérifier par un test (aucun `filter` ni `backdrop-filter` calculé sur les écrans de l'enfant). | S |
| P6 | Mineur | `index.html:15-20` | Les 551 leçons (580 Ko) sont exécutées au démarrage : 101 ms à CPU ×4. Acceptable aujourd'hui. Avec la Récré (environ 250 Ko d'art) et l'Atelier (84 fiches), cela doublera. | Charger les contenus **par cycle** à l'entrée dans un profil (maternelle, cycle 2, cycle 3), par injection de `<script>`. Gain d'environ 60 % pour un enfant de maternelle. Seuil fixé par l'étude 12 : agir si le démarrage s'allonge de plus de 150 ms. | M |
| P7 | Mineur | `app.js:42-58` | Pour mesurer sur de vraies télés, le code n'a aucun repère de temps. | Des `performance.mark()` (scripts chargés, premier écran, premier rendu 3D) et un panneau caché dans l'Espace parents (5 appuis sur la version) qui affiche ces temps, la cadence et le moteur WebGL (`WEBGL_debug_renderer_info`). | S |

**Mémoire** : 9,6 Mo de tas JavaScript, raisonnable. La seule croissance trouvée est la fuite WebGL (L1).

---

## 4. Sécurité et vie privée

| N° | Gravité | Où | Problème | Correction | Effort |
|---|---|---|---|---|---|
| S1 | **Bloquant** | `android/.../LocalServer.java:305-311`, `:101-126` | **N'importe quel appareil du Wi-Fi fait planter l'app.** La longueur d'un message WebSocket sur 64 bits peut être négative : `new byte[(int) len]` lève `NegativeArraySizeException`, que `handle()` ne rattrape pas (il ne rattrape que `IOException`). Sur Android, une exception non rattrapée dans n'importe quel fil tue le processus. Il n'est même pas besoin du bon code : tout code à 4 chiffres ouvre une salle. Vérifié par une sonde Java. | Refuser `len < 0` ; rattraper `RuntimeException` (et `Throwable`) dans chaque fil de connexion ; exiger le masquage des messages venant des clients ; un test unitaire avec des messages malformés. | S |
| S2 | **Important** | `LocalServer.java:222-261` ; `serve.mjs:105-135` ; `link.js:24-27` ; `parent.js:66-84` | **Le relais n'est protégé que par 4 chiffres.** 9 000 codes, aucune limite d'essais, aucun contrôle d'`Origin`. (a) Comme « téléphone », un appareil du réseau lit l'état envoyé aux téléphones (**les prénoms des enfants** sont dans les titres et les boutons, `app.js:123`, `:250`) et peut essayer les 10 000 codes parent par messages `pinDigit` (aucune limite d'essais). (b) Comme « télé », il **prend la place de la vraie télé** (la précédente est fermée, `:247-249`) et peut afficher un faux clavier de code sur le téléphone du parent, puis recevoir les chiffres tapés. | La télé tire un secret aléatoire de 128 bits (gardé en local) et s'enregistre avec ; une seconde « télé » avec un autre secret est refusée. Le QR code porte un jeton de téléphone d'au moins 64 bits, plus les 4 chiffres pour la saisie manuelle, qui ne valent que pendant que l'écran d'appairage est ouvert. Contrôle `Origin` = `Host`. Limite de connexions par adresse. Code parent : délai croissant après 3 erreurs. | M |
| S3 | **Important** | `android/app/src/main/AndroidManifest.xml:14` | **`android:allowBackup="true"`** : la sauvegarde automatique d'Android copie les données de l'app, dont le stockage de la WebView (`app_webview/` : prénoms, classes, code parent, progrès), sur le Google Drive du compte de la télé. Cela contredit la politique de confidentialité (« l'app ne collecte rien ») et la promesse aux parents. | `android:allowBackup="false"` (ou des règles `dataExtractionRules` et `fullBackupContent` qui excluent `app_webview`). Vérifier avec `adb shell bmgr backupnow com.petitssavants.android`. | S |
| S4 | **Important** | `platform.js:115-119` ; `MainActivity.java:37-43`, `:117-120` | **La synthèse vocale peut envoyer les phrases, prénom compris, à Google.** Côté Android, une voix « réseau » de Google TTS envoie le texte à Google ; dans un navigateur, les voix dont `localService` vaut `false` (« Google français » dans Chrome) aussi. 545 phrases distinctes contiennent le prénom (« Bonjour Léa ! »). | Ne choisir que des voix locales : `!voice.isNetworkConnectionRequired()` côté Android (`tts.getVoices()`), `localService === true` côté navigateur. Sans voix locale, lire les phrases sans le prénom. | S |
| S5 | **Important** | `LocalServer.java:65` | Le serveur écoute **sur tout le réseau en permanence**, même dans une famille qui n'utilise jamais le téléphone. | Deux écoutes : `127.0.0.1` pour la page de la télé (toujours) ; le réseau local seulement quand le parent active « Téléphone » ou ouvre l'appairage, avec un interrupteur dans l'Espace parents. | M |
| S6 | Mineur | `phone.js:88`, `:128`, `:132` ; `render.js:49`, `:52`, `:62-63` | La page du téléphone insère sans échappement des champs de l'état reçu (`s.pet`, `b.emoji`, `o.emoji`, `v.char`, couleurs dans un `style`). Aujourd'hui l'état vient de la télé, donc de confiance ; avec S2, une fausse télé injecte du HTML et du script dans le téléphone du parent. | Tout échapper ; couleurs filtrées par `/^#[0-9a-f]{6}$/i`. Indispensable avant d'envoyer l'art de la Récré au téléphone. | S |
| S7 | Mineur | `LocalServer.java:251-253` | L'en-tête `Host` est recopié tel quel dans du JSON (`{"type":"info","host":"…"}`). | Valider `[0-9A-Za-z.:\-\[\]]+`, sinon l'adresse du réseau local. | S |
| S8 | Mineur | `LocalServer.java:171`, `serve.mjs:27` | Aucun en-tête de sécurité sur les pages servies. | `X-Content-Type-Options: nosniff`, `Content-Security-Policy: default-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'` (il n'y a aucun script en ligne), `Referrer-Policy: no-referrer`. | S |
| S9 | Mineur | `scripts/serve.mjs:24` | `decodeURIComponent` est hors du `try` : `GET /%E0` **arrête le serveur** (vérifié). C'est le serveur du parcours « navigateur de la télé ». | Décoder dans le `try` ; répondre 400. | S |
| S10 | Mineur | `store.js:90`, `parent.js:80` | Code parent stocké en clair. | Empreinte salée (le SHA-256 de `premium.js` existe déjà) et délai après 3 erreurs (voir S2). | S |
| S11 | Mineur | `premium.js:33` | Le code d'accès des testeurs Google est **le même pour toutes les télés** jusqu'au 31 janvier 2027 : s'il fuit, tout le monde a Premium. Le casser hors ligne (10¹² codes × 10 000 tours de SHA-256) demande quelques jours de cartes graphiques, ce qui reste un faible risque. Sur une télé rootée, la valeur `ps.premium = "1"` suffit. | Durée courte (30 jours) et un nouveau code à chaque soumission ; accepter le reste (pas de serveur, c'est un choix). | S |
| S12 | Mineur | `link.js:23-27`, `phone.js:211` | Un téléphone appairé une fois (celui d'un invité) se reconnecte pour toujours ; rien ne permet de le révoquer. | « Oublier les téléphones » dans l'Espace parents : nouveau code, nouveau jeton. | S |

**Conformité à la promesse « rien sur l'enfant ne quitte la maison ».** L'app elle-même n'appelle rien sur Internet (aucune adresse externe dans `www/`, polices embarquées, aucun outil de mesure). Google Play voit l'achat du compte parent, ce qui est attendu et doit être dit dans la politique de confidentialité. Les trois fuites réelles sont **S3** (sauvegarde Drive), **S4** (voix réseau) et **S2/S5** (prénoms lisibles sur le réseau local). Les trois se corrigent en moins de 3 jours.

---

## 5. Maintenabilité : ce qu'il faut refactoriser d'abord

**État des lieux.** `app.js` (895 lignes) mêle le routeur, `mount()`, huit écrans de l'enfant, le moteur de leçon, l'écriture, le temps d'écran, les touches et les messages du téléphone. `parent.js` (605 lignes) mêle l'Espace parents, la page Premium, le code d'accès et l'appairage. Les deux partagent un objet d'état `S` d'une quarantaine de champs (`S.pin`, `S.form`, `S.code`, `S.pcFocus`, `S.premiumBack`…), modifié depuis les deux fichiers. `app.css` (765 lignes) est un empilement de couches datées (« 0.2 », « 0.3 », « 0.4 », « Thème pop », « Design pop v2 » à partir de la ligne 612) où chaque couche surcharge les précédentes (deux `@keyframes shake`, l. 337 et 695).

| N° | Gravité | Où | Problème | Proposition | Effort |
|---|---|---|---|---|---|
| M1 | **Important** | `store.js:63-68` | **Pas de migrations.** Lumière douce (lot 1) change l'animal (emoji → espèce), `wear` (chaîne → 5 emplacements), ajoute `theme` et `a11y` ; la Récré ajoute `p.recre` et `days[].ids` ; l'Atelier ajoute `p.atelier`. Aujourd'hui, toute version inattendue efface tout (E1). | `var MIGRATIONS = { 2: function (d) { …; d.v = 3; } }` appliquées dans l'ordre à la lecture, après une copie de sauvegarde ; des fichiers d'exemple v2 dans `tests/fixtures/` et un test par migration. | M |
| M2 | **Important** | `app.js`, `parent.js` | Fichiers trop longs, responsabilités mêlées, état partagé. Lumière douce réécrit tous les écrans (lot 3) : c'est le moment de découper, **avant**, pour que la refonte touche un fichier par écran. | Sans outil de compilation, des `<script>` ordonnés : `js/core/router.js` (`go`, `mount`, état du téléphone et actions permises, touches), `js/core/cleanup.js` (M6), `js/core/access.js` (M3), `js/core/time.js` (temps d'écran, puis récré), `js/screens/<écran>.js` (profiles, home, teach, lesson, trace, reward, rewards, pause, welcome, pin, form, parents, parentChild, settings, premium, code, pair). Chaque écran garde son état dans `S.screens.<nom>`. Déplacement mécanique, protégé par les 60 tests. | M à L (2 à 3 j) |
| M3 | **Important** | `app.js:161-164`, `:267`, `:316-319` ; `parent.js:426-437` ; `premium.js:69-70` | **La règle « qu'est-ce qui est ouvert » est recopiée trois fois** (parcours, révision, démarrage) et une quatrième pour le décompte de la page Premium. La Récré ajoute `gameLocked`, l'Atelier les fiches gratuites, Lumière douce les cadeaux par emplacement. | Un module `Access` : `lessonState(child, subj, ui, idx)` → `"done" | "current" | "gift" | "premium" | "later"`, `gift(child)`, `gameLocked(game)`, `ficheLocked(fiche)`, testé seul. Les écrans ne font que l'afficher. Corrige B4 au passage. | M |
| M4 | **Important** | `app.js:288-295`, `:76-81`, `:189-190` (couleurs passées à `A.icon`, `#7A4E00`…) ; `art.js` ; `store.js:21-28` ; `phone.js:11` ; `app.css` | **Les couleurs vivent dans le JavaScript** (couleurs des matières, des icônes, des avatars en `style=""`) et en double sur le téléphone. Les thèmes de Lumière douce (§ 5.2 de l'étude 15) supposent que **seul le CSS** connaît les couleurs. | Avant le lot 1 : toutes les couleurs en propriétés CSS (`--subj-*`, `--ink`, `--surface`…) ; le JavaScript ne pose que des classes ou `data-subject` ; les icônes SVG en `currentColor`. Découper `app.css` en `tokens.css`, `components.css`, `screens/*.css` et supprimer la pile de surcharges. | M |
| M5 | Important | partout où l'on écrit du HTML | Le HTML est assemblé par concaténation, et l'échappement dépend de penser à `esc()` à chaque champ. Aucun oubli dangereux trouvé côté télé, mais la Récré et l'Atelier vont ajouter des centaines de textes. | Un petit assistant `html\`…${valeur}…\`` qui échappe par défaut (gabarits ES2015, possibles puisque le plancher réel est Chrome 84, O2), et `raw()` pour le HTML voulu (icônes). | M |
| M6 | Important | `app.js:33-39` ; `platform.js:210-228` | Le nettoyage ne connaît que `setTimeout` et une démonstration. La Récré a besoin d'intervalles, de boucles `requestAnimationFrame`, d'écouteurs sur `document` ; Lumière douce de transitions. `platform.js` ne laisse pas un écran prendre les flèches. | Réaliser d'abord les changements prévus par l'étude 12 (§ 4.3 et 4.4) : `later`, `every`, `frame`, `onCleanup`, `handlers.key`, `routeKey`. Ils servent aussi aux transitions. | S |
| M7 | Mineur | `app.js:42-58` ; `pet3d.js:6-9` | `mount()` remplace l'écran d'un coup, et **un seul** canevas WebGL voyage d'emplacement en emplacement. Le lot 4 (ancien écran gardé 450 ms, animal qui « vole » d'un écran à l'autre) suppose deux calques et l'animal dans les deux. | Prévoir `mount(html, { transition })` qui renvoie une promesse ; pour la couche sortante, une image figée de l'animal (`canvas.toDataURL()` ou le SVG des compagnons), jamais un second contexte WebGL. | M |
| M8 | Mineur | `platform.js:109-140` | `Speech.say(texte, langue)` ne prévient pas de la fin, n'a pas de file et ne connaît pas les enregistrements. | Le service « Voix » du § 7.5, préalable à B2 et à toute amélioration de la voix. | M |
| M9 | Mineur | `store.js:52`, `premium.js:91`, `tests/helpers.mjs` ; `parent.js:251` et `app.js:723` ; `parent.js:244-249` et `content/core.js:170-178` | Doublons : trois fonctions « jour », deux listes des initiales des jours, deux façons de lister les matières d'une classe (celle de `parent.js` ignore les matières désactivées), la version écrite dans quatre fichiers. | Une seule fonction par besoin ; un script `npm run version <x.y.z>`. | S |
| M10 | Mineur | `releases/` | Les paquets 0.6.2 (dont un APK de 3,7 Mo) sont dans git, alors que l'app est en 0.7.0. | Les retirer du dépôt ; les publications GitHub suffisent. | S |

**Ordre conseillé avant les trois chantiers** : M1 et M6 (une journée, sans risque), puis M3, puis M2 et M4 ensemble (ils touchent les mêmes lignes), puis M5. Compter **6 à 8 jours** pour une personne. Ensuite, le lot 1 de Lumière douce et la PR 1 de la Récré se posent sur une base propre, et l'Atelier (`content/atelier.js`, `p.atelier`) n'a besoin que de M1 et M3.

---

## 6. Tests

**Ce qui est bien couvert** : premier lancement, leçons complètes à la télécommande, unités, écriture au pointeur et au téléphone, Espace parents, Premium (gratuit, cadeau du jour, hors ligne, code d'accès), plateformes (touches Samsung, retour du navigateur), téléphone (actions refusées hors écran), et chaque question de chaque leçon générée de nombreuses fois. Côté Android : service des fichiers, relais, choix des offres.

**Ce qui manque**, par priorité :

| N° | Priorité | Test à ajouter | Couvre |
|---|---|---|---|
| T1 | Haute | Relais : messages malformés (longueur négative ou énorme, non masqués, fragmentés), connexion muette, 500 connexions, seconde « télé » refusée, `Origin` étranger refusé (JUnit pour `LocalServer`, Node pour `serve.mjs`), et `GET /%E0`. | S1, S2, S9, L5 |
| T2 | Haute | Temps d'écran : « Rejouer », « Quitter » puis démarrer, révision, quand le temps est écoulé ; leçon commencée à 23 h 58 (`page.clock`). Le test de la revue (`review.spec.mjs`) sert de point de départ. | B1, B6 |
| T3 | Haute | Diapositives : un faux `AndroidTTS` qui « parle » à 12 caractères par seconde et signale la fin ; aucune phrase n'est coupée, la diapositive avance à la fin réelle. | B2 |
| T4 | Haute | Actions du téléphone forgées : pour chaque action permise, des arguments aléatoires (`NaN`, négatif, énorme, texte) ; aucune erreur de page, l'écran reste utilisable. | B5 |
| T5 | Haute | Stockage : `setItem` qui lève une erreur, JSON corrompu (la sauvegarde est gardée), migration v2 → v3 sur des fichiers d'exemple. | E1, E2, M1 |
| T6 | Moyenne | Fuseau `Europe/Paris` (option `timezoneId`) aux nuits de changement d'heure (25 octobre 2026, 28 mars 2027) : `day()`, semaine, flamme. | § 2.2 |
| T7 | Moyenne | WebGL : perte de contexte (`WEBGL_lose_context`) → le renard dessiné revient ; nombre de tampons stable après 30 changements de profil ; cadence ≥ 50 images/s à CPU ×4. | L1, L2, P1 |
| T8 | Moyenne | Vieux moteurs : `es-check` sur `www/js`, règle de lint CSS « Chrome ≥ 84 », et le test de support de `gap` de O1. | O1, O2 |
| T9 | Moyenne | Fuites de minuteurs : envelopper `setTimeout`, `setInterval` et `requestAnimationFrame` dans un script d'initialisation ; après avoir quitté chaque écran, rien ne reste actif (c'est le test 11 de la Récré, généralisé). | L3, M6 |
| T10 | Moyenne | Vie privée : aucune requête hors de l'hôte local sur tout le parcours ; la page du téléphone affiche échappé un état contenant `<img onerror>` ; le manifeste Android a `allowBackup="false"` (simple lecture du fichier). | S3, S6 |
| T11 | Basse | Budget de performance en intégration continue : `DOMContentLoaded` à CPU ×4, poids total du JavaScript, nombre d'éléments par écran. | P2, P6 |
| T12 | Basse | Voix : après normalisation, aucune phrase lue ne contient « [ », « ] », un chiffre romain ou un sigle non prévu ; chaque bouton focalisable des écrans de l'enfant a un libellé lisible. | B7, § 7 |
| T13 | Basse | Android : retour arrière (B11), file d'attente de la voix avant `ttsReady` (B9), avec Robolectric. | B9, B11 |

---

## 7. La synthèse vocale : état des lieux et options

### 7.1 Comment elle marche aujourd'hui

- **Une seule entrée**, `Speech.say(texte, langue)` (`platform.js:124-139`). Sur Android TV, elle passe par le pont `window.AndroidTTS.speak` (`MainActivity.java:114-121`) : `TextToSpeech` avec le moteur par défaut de la télé, `Locale.FRANCE` ou `Locale.UK`, débit 0,9, **file vidée à chaque phrase** (`QUEUE_FLUSH`), aucune voix choisie (celle du moteur), aucun retour de fin. Ailleurs, `speechSynthesis` : **la première voix française de la liste**, `en-GB` pour l'anglais, débit 0,9, hauteur 1,1, `cancel()` avant chaque phrase.
- **Qui parle** : chaque écran (titre, consigne, bravo), chaque bouton de l'enfant au focus (250 ms après le déplacement, `platform.js:64-73`), les diapositives (phrase, puis chaque image), les réponses en anglais.
- **Durées** : estimées (68 ms par caractère, plafond de 12 s), pas mesurées. **Samsung** : muet. **Tests** : `Speech.last` garde la dernière phrase.

### 7.2 Pourquoi elle sonne mal

1. **La voix n'est pas choisie.** La première voix française de la liste est souvent la plus ancienne ou la plus compacte (sur Windows, une voix SAPI ; sur certains boîtiers, une voix Pico ou une voix « réseau »). Côté Android, le moteur donne sa voix par défaut, pas forcément la meilleure installée.
2. **Hauteur 1,1 et débit 0,9** : sur des voix par concaténation, changer la hauteur ajoute des artefacts métalliques. Pour les voix neuronales locales récentes, 1,0 est meilleur.
3. **Les sons isolés sont lus comme des noms de lettres** : 27 phrases sont une seule lettre (« u », « r », « b »), 67 une syllabe de deux lettres (« ma », « No »), plus les crochets (« [é] ») et les graphies (« gne », « ill », « ai, ei »). C'est le défaut le plus grave pour apprendre à lire (déjà relevé dans A-RETENIR).
4. **Aucune normalisation du texte** : « Louis XIV », « CE1 », « 120000 centimètres », « 3 kilomètres 250 mètres », les blancs « … » sont laissés au moteur, qui les lit différemment d'une télé à l'autre.
5. **Coupures** : chaque déplacement du focus et chaque image d'une diapositive coupent la phrase en cours ; le plafond de 12 s coupe 121 explications (B2).
6. **Monologues** : des phrases jusqu'à 342 caractères d'un seul tenant, sans pause entre les idées.
7. **Anglais** : lu avec la voix française si la voix anglaise manque (B9).
8. **Pas d'identité** : chaque télé a une autre voix ; Filou n'a pas « sa » voix.

### 7.3 Les volumes (inventaire mesuré)

| Catégorie | Phrases distinctes | Caractères | Durée parlée (environ 14 caractères/s) | Générable à l'avance ? |
|---|---|---|---|---|
| Diapositives des leçons (français) | 1 672 | 86 000 | environ 1 h 40 | **Oui** (texte presque fixe) |
| Consignes des exercices (français) | 18 657 (10 690 une fois les nombres et le prénom remplacés) | 1 040 000 | — | **Non** telles quelles : tirées au hasard. Oui par **gabarits** (« Combien de [objets] ? » + nombre). |
| Réponses lues au focus (français) | 20 437 | 198 000 | — | En partie : mots de l'imagier, nombres, couleurs |
| Tout l'anglais | 1 180 | 17 000 | environ 20 min | **Oui, en entier** |
| Textes de l'interface (écrans, boutons, bravos) | environ 300 | environ 8 000 | environ 10 min | **Oui** |
| Phrases avec le prénom | 545 | — | — | Non : le prénom est inconnu à l'avance |

### 7.4 Les options

| Option | Qualité | Coût | Poids | Hors ligne | Télés | Effort |
|---|---|---|---|---|---|---|
| **A. Mieux utiliser la voix de la télé** : choisir la meilleure voix **locale** (Android : `getVoices()`, `fr_FR`, qualité la plus haute, `!isNetworkConnectionRequired()` ; navigateur : `localService`, nom contenant « Natural », « Neural », « Premium » ou « Enhanced », `fr-FR` avant `fr-CA`) ; laisser le parent choisir et écouter ; débit 0,85 à 0,95 selon la classe, hauteur 1,0 ; découper en phrases (`QUEUE_ADD`, 200 ms de silence entre deux) ; fin de phrase réelle. | Moyenne, variable selon la télé | 0 € | 0 | Oui si une voix locale est installée | Android, LG, navigateur ; pas Samsung | S à M |
| **B. Normaliser les textes** : un lexique français (sons, sigles, chiffres romains, unités, grands nombres, blancs) appliqué avant toute voix. | Gain net sur toutes les options | 0 € | quelques Ko | Oui | Toutes | S à M |
| **C. Voix humaine enregistrée** pour ce qui s'apprend : environ 36 sons, 400 syllabes, 26 lettres, 300 mots de l'imagier, soit environ 800 extraits d'environ 0,8 s (11 min). | Excellente, et juste pour la phonologie | Une journée d'enregistrement et deux de montage (bon micro de téléphone, pièce calme, normalisation à −16 LUFS) | environ 2 Mo (Opus 24 kbit/s) | Oui | Toutes, Samsung compris | M |
| **D. Voix neuronale générée à l'avance et embarquée** pour les diapositives, les textes fixes et tout l'anglais (150 000 à 250 000 caractères). Fournisseurs en nuage (Google Cloud, Azure, Amazon Polly : de l'ordre de 15 à 16 $ par million de caractères pour les voix neuronales, davantage pour les voix « studio » ; tarifs à vérifier au moment de l'achat) ou modèles libres en local (Piper, Kokoro sous licence Apache 2.0 ; licence de chaque voix à vérifier ; **XTTS-v2 exclu**, licence non commerciale). | Très bonne, une voix unique pour Filou | Moins de 10 € par génération complète | 18 à 35 Mo en Opus 24 kbit/s (25 à 45 Mo en AAC 32 kbit/s). Supportable : APK de base jusqu'à 200 Mo, ou un paquet d'assets Play installé avec l'app | Oui | Toutes | M |
| **E. Gabarits** pour les consignes tirées au hasard : parties fixes générées (D) + nombres de 0 à 1 000 et mots de l'imagier (C ou D), assemblés à la lecture. | Bonne, jointures audibles mais acceptables pour des enfants | Faible | + 5 à 10 Mo | Oui | Toutes | L |
| **F. Synthèse neuronale sur la télé** (sherpa-onnx et un modèle Piper ou VITS, en natif Android) : tout texte, prénom compris, sans réseau. | Bonne | 0 € | 20 à 65 Mo par voix | Oui | Android seulement (en WebAssembly sur LG et Samsung, sans doute trop lent) | L, plus une mesure de vitesse sur une Mi Box |
| G. Synthèse en nuage au moment de jouer | Excellente | Par phrase | 0 | **Non** | — | **Exclue** : hors ligne impossible, et le texte (prénom compris) sortirait de la maison. |

**Le prénom.** Trois solutions sans rien envoyer : (1) le dire avec la voix de la télé, collé à la phrase enregistrée ; (2) des phrases sans prénom quand la voix est enregistrée ; (3) **embarquer les 2 000 prénoms les plus donnés en France**, générés à l'avance (environ 20 min, 4 Mo) : si le prénom de l'enfant y est, Filou le dit avec sa voix. La liste est dans l'app, rien ne sort.

### 7.5 L'architecture à préparer (avant de choisir le fournisseur)

1. **Un service « Voix »** (`js/voice.js`, remplace `Speech`) : `Voice.say(texte ou clé, { lang, onEnd, queue })`, `Voice.stop()`, événements de début et de fin. Ordre de recherche : **enregistrement** → **voix générée** → **synthèse de la télé** (voix locale choisie). Un seul `HTMLAudioElement` ou un `AudioContext` partagé avec les sons (préchargement des extraits de l'écran suivant).
2. **La normalisation** (option B) en entrée de toutes les voies. C'est aussi elle qui calcule la **clé** d'un extrait : empreinte du texte normalisé + identifiant de la voix.
3. **Un manifeste** `media/voice/manifest.json` (clé → fichier, durée). La durée réelle sert à piloter les diapositives (B2), même quand la voix de la télé est utilisée (on garde alors la fin signalée par le moteur).
4. **Les contenus marquent ce qui s'enregistre** : `say: "Écoute le son {son:ou}"` ; `{son:…}`, `{lettre:…}`, `{syllabe:…}` renvoient aux extraits de C et ne passent jamais par la synthèse.
5. **Un script de construction** (`scripts/voice/`) : extraire toutes les phrases déterministes (sur le modèle de l'inventaire de cette revue), normaliser, ne générer que ce qui manque (cache par clé), encoder (ffmpeg, Opus mono 24 kbit/s, −16 LUFS), écrire le manifeste. Les fichiers générés sont commités. Seuls les textes des leçons partent chez le fournisseur, jamais une donnée d'enfant.
6. **Tests** : chaque phrase déterministe a son extrait ; budget de poids ; aucune phrase coupée (T3) ; `Voice.last` remplace `Speech.last`.

### 7.6 Recommandation par étapes

| Étape | Contenu | Effort | Résultat |
|---|---|---|---|
| 0 | B2 (fin de parole réelle), option A (voix locale choisie, réglage parent, débit et hauteur), option B (normalisation), B9 | 3 à 4 jours | Plus de coupures ; la meilleure voix de chaque télé ; plus de prénom envoyé à Google |
| 1 | Service « Voix » et manifeste ; **enregistrement des sons, syllabes et lettres** par les fondatrices (option C) | 1 semaine + l'enregistrement | La lecture au CP devient juste, sur toutes les télés |
| 2 | Voix neuronale générée à l'avance (option D) pour les diapositives, l'interface et tout l'anglais ; les 2 000 prénoms | 1 à 2 semaines | Filou a sa voix ; Samsung parle enfin ; environ 25 à 40 Mo de plus |
| 3 | Gabarits des consignes (option E), ou essai de la synthèse sur la télé (option F) mesuré sur une Mi Box | 2 à 3 semaines | La voix de la télé ne sert plus qu'en secours |

Le coût en euros est négligeable (moins de 50 € par an de génération). Les vrais coûts sont le temps humain (enregistrement, relecture à l'oreille) et le poids de l'app.

---

## 8. Plan de corrections ordonné

| Ordre | Lot | Contenu | Effort |
|---|---|---|---|
| 1 | **Avant la prochaine version** (environ 2 jours) | S1 (plantage du serveur), S3 (sauvegarde Drive), S4 (voix locales seulement), S9 (`serve.mjs`), B1 (pause contournée), B3 (« Revoir la leçon »), B5 (arguments du téléphone), E1 (sauvegarde avant remise à zéro), L2 (perte de contexte WebGL), B11 ; tests T1 (partie plantage), T2, T4 | 9 × S |
| 2 | **Relais et voix, première passe** (environ 1 semaine) | S2, S5, S6, S7, S8, S10, S12 (relais et code parent) ; B2 et l'étape 0 de la voix (§ 7.6) ; B9, B10 ; tests T1 complet, T3, T10 | M + M + S |
| 3 | **Performance** (3 à 4 jours) | L1, P1, P2, P3, P4, P5, P7, L4, L5, L6 ; tests T7, T11 | M + plusieurs S |
| 4 | **Refactorisation avant les chantiers** (6 à 8 jours) | M1, M6, M3 (corrige B4), M2 et M4 ensemble, M5, M9, M10, O1, O2 ; E2 à E6 ; B6, B7, B8, B12, B13, B14 ; tests T5, T6, T8, T9, T12, T13 | M à L |
| 5 | **Puis, en parallèle** | Lumière douce lots 1 et 2 ; Récré PR 1 (qui reprend M6) ; Atelier lot 1 (qui a besoin de M1 et M3) ; voix étapes 1 et 2 | selon les études 12, 13 et 15 |

Total des lots 1 à 4 : **environ 4 semaines** pour une personne, dont la moitié (lot 4) prépare directement les trois chantiers.

---

## 9. Résumé

1. Code sain, lisible, bien testé (60 tests) ; les problèmes sont concentrés et se corrigent vite.
2. **Bloquant** : un message WebSocket malformé venu de n'importe quel appareil du Wi-Fi fait planter l'app Android (vérifié) ; correction en moins d'une heure.
3. **Vie privée** : `allowBackup="true"` envoie prénoms, code parent et progrès sur Google Drive ; une voix « réseau » envoie les phrases avec le prénom à Google ; le relais à 4 chiffres expose les prénoms au réseau local.
4. **Bugs du quotidien** : « Rejouer » contourne la pause ; 121 explications coupées au milieu ; « Revoir la leçon » efface les exercices faits ; un argument mal formé du téléphone casse le parcours.
5. Le cadeau du jour peut se prendre avant d'avoir fini les leçons gratuites (unités non verrouillées) : règle à trancher.
6. Stockage illisible ou d'une autre version : tout est effacé sans copie ; il faut des migrations avant Lumière douce.
7. Performance : `innerHTML` n'est pas le problème (2 à 22 ms par écran à CPU ×4).
8. Le coût est dans la 3D en WebGL logiciel (20 images/s), une fuite de tampons WebGL, `three.min.js` chargé au démarrage et des canevas d'écriture quatre fois trop grands.
9. La mise en page exige Chrome 84 (`gap`) alors que l'APK vise Android 7 et Fire TV : détecter et prévenir.
10. Avant les chantiers : découper `app.js`/`parent.js`, un module unique d'accès, couleurs en jetons CSS, registre de nettoyage, échappement par défaut.
11. Tests à ajouter en priorité : relais malformé, temps d'écran, diapositives non coupées, arguments forgés, stockage.
12. Voix : d'abord voix locale choisie, débit et hauteur, normalisation, fin réelle (3 à 4 jours, 0 €).
13. Puis sons et syllabes enregistrés (2 Mo) et voix neuronale générée à l'avance (20 à 35 Mo, moins de 10 € par génération), hors ligne et sur toutes les télés.
14. Plan : 2 jours d'urgences, puis relais et voix, performance, refactorisation : environ 4 semaines pour une personne.
