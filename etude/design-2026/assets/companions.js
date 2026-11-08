/* Petits Savants · design 2026 · les compagnons en « soft 3D » (SVG).
 *
 * Un générateur unique : tous les animaux partagent la MÊME BASE (corps « haricot », grosse
 * tête, petits bras, pieds ronds) et les MÊMES POINTS D'ACCROCHE (sommet de tête, yeux, cou,
 * torse, pieds). Un accessoire est donc dessiné une seule fois et va à tous les animaux.
 *
 * Le volume vient de la lumière, pas du trait : dégradé radial (lumière en haut à gauche),
 * ombre teintée (jamais grise), liseré de lumière sur les bords (« fresnel »), reflet
 * spéculaire, ombre portée au sol. Aucun filtre (pas de blur) : rapide sur une télé.
 *
 * Companion.svg(espèce, { wear: {...}, pose: "idle" | "joy" | "wave", cls: "..." })
 * Tilou.svg({ mood: "q" | "x", arms: "down" | "up" | "wave" })
 * Items.icon(id) : la vignette d'un accessoire pour le dressing. */
(function () {
  "use strict";
  var INK = "#1E2A5E";
  var uid = 0;

  /* ---------- couleurs ---------- */
  function rgb(h) { h = h.replace("#", ""); return [parseInt(h.substr(0, 2), 16), parseInt(h.substr(2, 2), 16), parseInt(h.substr(4, 2), 16)]; }
  function hex(a) { return "#" + a.map(function (v) { v = Math.max(0, Math.min(255, Math.round(v))); return (v < 16 ? "0" : "") + v.toString(16); }).join(""); }
  function mix(a, b, t) { var x = rgb(a), y = rgb(b); return hex([x[0] + (y[0] - x[0]) * t, x[1] + (y[1] - x[1]) * t, x[2] + (y[2] - x[2]) * t]); }

  /* Les animaux. main : la couleur ; light : la face éclairée ; shade : l'ombre (teintée) ;
   * belly : ventre et museau ; dark : truffe, pattes ; ears : la forme des oreilles. */
  var SPECIES = {
    licorne: { name: "La licorne", main: "#F7F1FF", light: "#FFFFFF", shade: "#BBA6EE", belly: "#FFFFFF", dark: "#C08BD8", nose: "#E58FB8",
      ears: "pointed", earIn: "#FFB3D1", horn: true, mane: ["#FF8CC6", "#B48CFF", "#7CC7FF", "#7FE3C4"], tail: "rainbow", feet: "#E3D4FF" },
    dinosaure: { name: "Le dinosaure", main: "#4FC27F", light: "#9BEBB2", shade: "#1F8A63", belly: "#FFF0B5", dark: "#1F7D5A", nose: "#1F6E50",
      ears: "none", plates: "#FF9A3C", spots: "#3AA86C", tail: "dino", snoutWide: true, feet: "#3DAA6D" },
    chat: { name: "Le chat", main: "#9DB3E8", light: "#D3E0FF", shade: "#5D72B8", belly: "#F4F7FF", dark: "#4E5F9E", nose: "#FF8FAE",
      ears: "pointed", earIn: "#FFB8CB", stripes: "#7187CC", tail: "cat", whiskers: true, feet: "#B9CAF2" },
    chien: { name: "Le chien", main: "#F6CF9A", light: "#FFEBCB", shade: "#C98E52", belly: "#FFF6E8", dark: "#8A532B", nose: "#4A2C1E",
      ears: "floppy", earColor: "#A9693A", patch: "#C98A4E", tail: "short", muzzle: true, tongue: true, feet: "#E8B87C" },
    lapin: { name: "Le lapin", main: "#FBEFF3", light: "#FFFFFF", shade: "#D9A9BE", belly: "#FFFFFF", dark: "#C98BA6", nose: "#FF7FA6",
      ears: "long", earIn: "#FFB3CB", tail: "puff", feet: "#F3DCE6" },
    panda: { name: "Le panda", main: "#FAFAF6", light: "#FFFFFF", shade: "#B9BDD6", belly: "#FFFFFF", dark: "#2E3352", nose: "#2E3352",
      ears: "round", earColor: "#2E3352", pandaEyes: "#2E3352", limbs: "#2E3352", tail: "puff", feet: "#2E3352" },
    renard: { name: "Le renard", main: "#FF8D3F", light: "#FFC690", shade: "#D0531A", belly: "#FFF6EA", dark: "#5A2E1E", nose: "#3A1E14",
      ears: "pointed", earIn: "#FFE7D2", earTip: "#5A2E1E", tail: "fox", foxMask: true, feet: "#5A2E1E" },
    ours: { name: "L'ours", main: "#B9835A", light: "#E2B486", shade: "#7D4E2E", belly: "#F3D9B8", dark: "#5A3620", nose: "#3A2216",
      ears: "round", earIn: "#E8C49C", muzzle: true, tail: "puff", feet: "#8E5E3C" }
  };

  /* ---------- petites aides SVG ---------- */
  function radial(id, stops, cx, cy, r, fx, fy) {
    return '<radialGradient id="' + id + '" cx="' + (cx || 0.5) + '" cy="' + (cy || 0.5) + '" r="' + (r || 0.5) + '"' +
      (fx !== undefined ? ' fx="' + fx + '" fy="' + fy + '"' : "") + ">" +
      stops.map(function (s) { return '<stop offset="' + s[0] + '" stop-color="' + s[1] + '"' + (s[2] !== undefined ? ' stop-opacity="' + s[2] + '"' : "") + "/>"; }).join("") + "</radialGradient>";
  }
  function linear(id, stops, x1, y1, x2, y2) {
    return '<linearGradient id="' + id + '" x1="' + (x1 || 0) + '" y1="' + (y1 || 0) + '" x2="' + (x2 || 0) + '" y2="' + (y2 === undefined ? 1 : y2) + '">' +
      stops.map(function (s) { return '<stop offset="' + s[0] + '" stop-color="' + s[1] + '"' + (s[2] !== undefined ? ' stop-opacity="' + s[2] + '"' : "") + "/>"; }).join("") + "</linearGradient>";
  }
  // Un volume doux : la forme, plus le liseré de lumière et le reflet.
  function vol(shape, fill, rimId, extra) {
    return shape.replace("/>", ' fill="url(#' + fill + ')"' + (extra || "") + "/>") +
      (rimId ? shape.replace("/>", ' fill="url(#' + rimId + ')"/>') : "");
  }
  function mirror(s) { return '<g transform="translate(400 0) scale(-1 1)">' + s + "</g>"; }

  var BODY = "M200 262C262 262 294 312 292 362C290 412 254 436 200 436C146 436 110 412 108 362C106 312 138 262 200 262Z";

  /* ---------- les accessoires portés (coordonnées communes à tous les animaux) ---------- */
  // Chaque accessoire : où il s'accroche, et son dessin. g(id) fabrique un dégradé local.
  var WEAR = {
    // tête
    cap: { slot: "hat", draw: function (g) {
      return '<path d="M118 102C118 44 162 26 200 26C238 26 282 44 282 102C240 90 160 90 118 102Z" fill="url(#' + g("cap", "#FF6B5E", "#FFA195", "#D93B3B") + ')"/>' +
        '<path d="M200 28C214 40 220 70 220 94" stroke="#C73434" stroke-width="5" fill="none" stroke-linecap="round" opacity=".55"/>' +
        '<path d="M150 42C164 34 186 30 204 31" stroke="#FFFFFF" stroke-width="9" fill="none" stroke-linecap="round" opacity=".45"/>' +
        '<path d="M114 100C150 88 250 88 286 100C300 104 306 116 296 120C252 108 150 108 104 122C94 116 100 104 114 100Z" fill="#E04848"/>' +
        '<path d="M116 104C100 108 66 112 58 124C70 136 120 128 158 114Z" fill="url(#' + g("visor", "#FF7B6E", "#FFB0A6", "#C93434") + ')"/>' +
        '<circle cx="200" cy="27" r="9" fill="#FFD23F"/><circle cx="197" cy="24" r="3.5" fill="#fff" opacity=".7"/>' +
        '<circle cx="232" cy="64" r="13" fill="#FFF6E8"/><path d="M226 64l4 4 8-9" stroke="#E04848" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
    } },
    beanie: { slot: "hat", draw: function (g) {
      return '<path d="M116 104C112 46 156 22 200 22C244 22 288 46 284 104Z" fill="url(#' + g("bean", "#5B8CFF", "#9BBCFF", "#2F5BD6") + ')"/>' +
        [140, 170, 200, 230, 260].map(function (x) { return '<path d="M' + x + ' 34C' + (x - 4) + ' 60 ' + (x - 4) + ' 80 ' + x + ' 96" stroke="#2F5BD6" stroke-width="4" opacity=".35" fill="none"/>'; }).join("") +
        '<rect x="106" y="88" width="188" height="34" rx="17" fill="url(#' + g("beanb", "#FFD23F", "#FFE98A", "#E3A80F") + ')"/>' +
        '<circle cx="200" cy="14" r="24" fill="url(#' + g("pom", "#FFF6E8", "#FFFFFF", "#E8CFA8") + ')"/>';
    } },
    crown: { slot: "hat", draw: function (g) {
      return '<path d="M128 104L120 40L160 70L200 26L240 70L280 40L272 104Z" fill="url(#' + g("crown", "#FFD23F", "#FFF1A6", "#E09A0B") + ')" stroke="#C98306" stroke-width="3" stroke-linejoin="round"/>' +
        '<rect x="126" y="94" width="148" height="18" rx="9" fill="#F2B81E"/>' +
        '<circle cx="200" cy="74" r="11" fill="#FF5C8A"/><circle cx="160" cy="84" r="8" fill="#5B8CFF"/><circle cx="240" cy="84" r="8" fill="#3FCB78"/>' +
        '<circle cx="196" cy="70" r="3.5" fill="#fff" opacity=".8"/>';
    } },
    party: { slot: "hat", draw: function (g) {
      return '<path d="M150 98L214 0L256 92Z" fill="url(#' + g("party", "#A57BFF", "#D2BCFF", "#6A3FD0") + ')"/>' +
        '<path d="M176 58L232 50M162 80L246 70M196 26L222 22" stroke="#FFD23F" stroke-width="8" stroke-linecap="round"/>' +
        '<circle cx="214" cy="0" r="14" fill="#FF5C8A"/>';
    } },
    flower: { slot: "hat", draw: function () {
      var p = ""; for (var i = 0; i < 6; i++) p += '<ellipse cx="0" cy="-22" rx="13" ry="21" fill="#FFFFFF" transform="rotate(' + (i * 60) + ')"/>';
      return '<g transform="translate(118 92) rotate(-14)">' + p + '<circle r="15" fill="#FFD23F"/><circle cx="-4" cy="-4" r="5" fill="#fff" opacity=".6"/></g>' +
        '<g transform="translate(156 70) scale(.62)">' + p.replace(/#FFFFFF/g, "#FFB3D1") + '<circle r="15" fill="#FFD23F"/></g>';
    } },
    // visage
    glasses: { slot: "face", draw: function () {
      return '<g fill="none" stroke="#1E2A5E" stroke-width="7"><circle cx="152" cy="176" r="38" fill="#BFE6FF" fill-opacity=".25"/><circle cx="248" cy="176" r="38" fill="#BFE6FF" fill-opacity=".25"/><path d="M190 172Q200 164 210 172"/></g>' +
        '<path d="M130 160Q140 150 152 150" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".8"/><path d="M226 160Q236 150 248 150" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".8"/>';
    } },
    // cou
    scarf: { slot: "neck", draw: function (g) {
      return '<path d="M124 276C150 296 250 296 276 276C284 286 284 300 276 308C250 324 150 324 124 308C116 300 116 286 124 276Z" fill="url(#' + g("scarf", "#FF5C8A", "#FF9BBB", "#D12E62") + ')"/>' +
        '<path d="M232 300C240 330 236 356 226 372L256 368C262 346 260 322 252 300Z" fill="#E8457A"/>' +
        '<path d="M230 352L258 348M234 336L258 332" stroke="#FFD23F" stroke-width="5"/>' +
        '<path d="M140 290C170 302 230 302 260 290" stroke="#FFD23F" stroke-width="6" fill="none" stroke-linecap="round"/>';
    } },
    bow: { slot: "neck", draw: function (g) {
      return '<path d="M200 298L158 276C148 272 142 280 142 298C142 316 148 324 158 320Z" fill="url(#' + g("bowl", "#2EC4B6", "#7FE6DC", "#178F86") + ')"/>' +
        '<path d="M200 298L242 276C252 272 258 280 258 298C258 316 252 324 242 320Z" fill="url(#' + g("bowr", "#2EC4B6", "#7FE6DC", "#178F86") + ')"/>' +
        '<rect x="186" y="284" width="28" height="28" rx="10" fill="#178F86"/>';
    } },
    // torse
    tee: { slot: "top", draw: function (g, s) {
      var stripes = ""; for (var y = 300; y < 420; y += 28) stripes += '<rect x="90" y="' + y + '" width="220" height="13" fill="#FFF6E8" opacity=".95"/>';
      return '<g clip-path="url(#' + s.clip + ')"><path d="M80 284H320V392Q200 418 80 392Z" fill="url(#' + g("tee", "#FF7A59", "#FFAE94", "#D9462A") + ')"/>' + stripes +
        '<path d="M80 284H320V392Q200 418 80 392Z" fill="url(#' + s.rim + ')"/><path d="M160 282Q200 304 240 282" stroke="#C73A22" stroke-width="7" fill="none"/></g>';
    }, sleeve: "#FF7A59" },
    raincoat: { slot: "top", draw: function (g, s) {
      return '<g clip-path="url(#' + s.clip + ')"><path d="M80 280H320V404Q200 426 80 404Z" fill="url(#' + g("rain", "#FFD23F", "#FFEFA0", "#E6A400") + ')"/>' +
        '<path d="M200 296V410" stroke="#D69A00" stroke-width="5"/><circle cx="214" cy="326" r="7" fill="#1E2A5E"/><circle cx="214" cy="360" r="7" fill="#1E2A5E"/>' +
        '<path d="M150 282L200 304L250 282" stroke="#E6A400" stroke-width="8" fill="none" stroke-linejoin="round"/>' +
        '<path d="M80 280H320V404Q200 426 80 404Z" fill="url(#' + s.rim + ')"/></g>';
    }, sleeve: "#FFD23F" },
    // pieds
    sneakers: { slot: "feet", draw: function (g) {
      function shoe(x) {
        return '<path d="M' + (x - 44) + ' 432C' + (x - 44) + ' 404 ' + (x - 22) + ' 396 ' + x + ' 396C' + (x + 26) + ' 396 ' + (x + 46) + ' 408 ' + (x + 46) + ' 432Z" fill="url(#' + g("shoe" + x, "#5B8CFF", "#A9C4FF", "#2F5BD6") + ')"/>' +
          '<rect x="' + (x - 48) + '" y="426" width="98" height="18" rx="9" fill="#FFFDF8"/>' +
          '<path d="M' + (x - 14) + ' 408L' + (x + 12) + ' 404M' + (x - 12) + ' 418L' + (x + 16) + ' 414" stroke="#FFFDF8" stroke-width="5" stroke-linecap="round"/>' +
          '<path d="M' + (x + 22) + ' 406Q' + (x + 36) + ' 412 ' + (x + 40) + ' 424" stroke="#FFD23F" stroke-width="6" fill="none" stroke-linecap="round"/>';
      }
      return shoe(158) + shoe(242);
    } },
    boots: { slot: "feet", draw: function (g) {
      function boot(x) {
        return '<path d="M' + (x - 30) + ' 380H' + (x + 26) + 'V420C' + (x + 44) + ' 420 ' + (x + 48) + ' 432 ' + (x + 48) + ' 444H' + (x - 34) + 'Z" fill="url(#' + g("boot" + x, "#FFD23F", "#FFF0A6", "#E3A300") + ')"/>' +
          '<rect x="' + (x - 34) + '" y="374" width="64" height="16" rx="8" fill="#F2B81E"/>';
      }
      return boot(158) + boot(242);
    } }
  };

  var COMPANION_ITEMS = {
    cap: { name: "Casquette", cat: "tete" }, beanie: { name: "Bonnet", cat: "tete" }, crown: { name: "Couronne", cat: "tete" },
    party: { name: "Chapeau de fête", cat: "tete" }, flower: { name: "Fleurs", cat: "tete" }, glasses: { name: "Lunettes", cat: "visage" },
    scarf: { name: "Écharpe", cat: "cou" }, bow: { name: "Nœud", cat: "cou" }, tee: { name: "Marinière", cat: "haut" },
    raincoat: { name: "Ciré", cat: "haut" }, sneakers: { name: "Baskets", cat: "pieds" }, boots: { name: "Bottes", cat: "pieds" }
  };

  /* ---------- le compagnon ---------- */
  function svg(kind, opts) {
    opts = opts || {};
    var S = SPECIES[kind] || SPECIES.renard;
    var id = "c" + (++uid);
    var wear = opts.wear || {};
    var defs = [];
    var lightKey = opts.light || "#FFF4D6"; // la couleur de la lumière ambiante (liseré)
    function g(name, main, light, shade) {
      var gid = id + name;
      defs.push(radial(gid, [[0, light], [0.55, main], [1, shade]], 0.38, 0.3, 0.8));
      return gid;
    }
    var body = g("b", S.main, S.light, S.shade);
    var belly = id + "be"; defs.push(radial(belly, [[0, "#FFFFFF"], [0.6, S.belly], [1, mix(S.belly, S.shade, 0.35)]], 0.42, 0.32, 0.75));
    var rim = id + "r"; defs.push(radial(rim, [[0.72, lightKey, 0], [0.93, lightKey, 0.0], [1, lightKey, 0.75]], 0.5, 0.42, 0.62));
    var occl = id + "o"; defs.push(linear(occl, [[0.55, S.shade, 0], [1, S.shade, 0.55]]));
    var eye = id + "e"; defs.push(radial(eye, [[0, "#4A5BA6"], [0.55, "#1E2A5E"], [1, "#10173A"]], 0.45, 0.35, 0.7));
    var cheek = id + "k"; defs.push(radial(cheek, [[0, "#FF7E9C", 0.75], [1, "#FF7E9C", 0]]));
    var shadow = id + "s"; defs.push(radial(shadow, [[0, "#1E2A5E", 0.32], [1, "#1E2A5E", 0]]));
    var spec = id + "p"; defs.push(radial(spec, [[0, "#FFFFFF", 0.85], [1, "#FFFFFF", 0]]));
    var clip = id + "cl";
    defs.push('<clipPath id="' + clip + '"><path d="' + BODY + '"/></clipPath>');
    var limb = S.limbs ? g("l", S.limbs, mix(S.limbs, "#ffffff", 0.3), mix(S.limbs, "#000000", 0.25)) : body;
    var feetG = g("f", S.feet, mix(S.feet, "#ffffff", 0.35), mix(S.feet, "#000000", 0.2));
    var ctx = { clip: clip, rim: rim };

    var out = [];
    out.push('<ellipse class="c-shadow" cx="200" cy="446" rx="128" ry="18" fill="url(#' + shadow + ')"/>');
    out.push('<g class="c-hop">');

    /* la queue, derrière */
    var tail = "";
    if (S.tail === "fox") {
      var tg = g("t", S.main, S.light, S.shade);
      tail = '<path d="M270 400C320 410 362 380 366 330C370 290 352 262 330 252C344 290 330 330 290 350Z" fill="url(#' + tg + ')"/>' +
        '<path d="M330 252C352 262 370 290 366 330C356 312 342 300 324 296C334 280 336 264 330 252Z" fill="#FFF6EA"/>';
    } else if (S.tail === "cat") {
      tail = '<path d="M272 392C318 396 346 370 344 334C342 306 360 290 378 298" stroke="' + S.shade + '" stroke-width="30" fill="none" stroke-linecap="round"/>' +
        '<path d="M272 392C318 396 346 370 344 334C342 306 360 290 378 298" stroke="' + S.main + '" stroke-width="20" fill="none" stroke-linecap="round"/>';
    } else if (S.tail === "dino") {
      var dg = g("t", S.main, S.light, S.shade);
      tail = '<path d="M262 352C312 352 352 374 384 418C344 424 300 424 262 418Z" fill="url(#' + dg + ')"/>' +
        '<path d="M300 362l10-20 10 26M334 376l12-18 6 26" fill="' + S.plates + '"/>';
    } else if (S.tail === "rainbow") {
      tail = S.mane.map(function (c, i) { return '<circle cx="' + (300 + i * 14) + '" cy="' + (392 - i * 22) + '" r="' + (30 - i * 3) + '" fill="' + c + '"/>'; }).join("") +
        '<circle cx="300" cy="388" r="12" fill="#fff" opacity=".35"/>';
    } else if (S.tail === "short") {
      tail = '<g class="c-tail"><path d="M276 378C304 372 320 350 316 330C330 340 332 372 304 392Z" fill="' + S.earColor + '"/></g>';
    } else if (S.tail === "puff") {
      var pg = g("t", S.limbs ? S.main : S.main, "#FFFFFF", S.shade);
      tail = '<circle cx="288" cy="398" r="26" fill="url(#' + pg + ')"/>';
    }
    if (S.tail !== "short") tail = '<g class="c-tail">' + tail + "</g>";
    out.push(tail);

    /* le corps */
    out.push('<g class="c-body">');
    out.push(vol('<path d="' + BODY + '"/>', body, rim));
    out.push('<path d="' + BODY + '" fill="url(#' + occl + ')"/>');
    if (!wear.top) out.push('<ellipse cx="200" cy="372" rx="58" ry="52" fill="url(#' + belly + ')"/>');
    if (S.spots && !wear.top) out.push('<circle cx="134" cy="330" r="9" fill="' + S.spots + '"/><circle cx="268" cy="340" r="7" fill="' + S.spots + '"/>');
    if (wear.top && WEAR[wear.top]) out.push(WEAR[wear.top].draw(g, ctx));
    out.push("</g>");

    /* les pieds */
    if (wear.feet && WEAR[wear.feet]) out.push(WEAR[wear.feet].draw(g, ctx));
    else out.push('<ellipse cx="156" cy="428" rx="38" ry="20" fill="url(#' + feetG + ')"/><ellipse cx="244" cy="428" rx="38" ry="20" fill="url(#' + feetG + ')"/>');

    /* les bras (accrochés à l'épaule : on peut les lever) */
    var sleeve = wear.top && WEAR[wear.top] ? WEAR[wear.top].sleeve : null;
    function arm(side) {
      var a = '<ellipse cx="112" cy="352" rx="24" ry="36" fill="url(#' + limb + ')" transform="rotate(16 112 352)"/>' +
        (sleeve ? '<path d="M96 326C104 312 126 308 138 318L132 346C120 342 104 340 96 326Z" fill="' + sleeve + '"/>' : "");
      return '<g class="c-arm c-arm-' + side + '">' + a + "</g>";
    }
    out.push(arm("l"));
    out.push(mirror(arm("r")));

    /* le cou */
    if (wear.neck && WEAR[wear.neck]) out.push(WEAR[wear.neck].draw(g, ctx));

    /* la tête */
    out.push('<g class="c-head">');
    var head = '<ellipse cx="200" cy="176" rx="' + (S.snoutWide ? 136 : 130) + '" ry="116"/>';

    // oreilles et éléments derrière la tête
    var back = "";
    if (S.ears === "pointed") {
      var eg = g("ea", S.main, S.light, S.shade);
      var ear = '<path d="M98 132C86 92 90 46 108 18C132 30 160 62 170 92Z" fill="url(#' + eg + ')"/>' +
        '<path d="M108 112C102 86 104 60 112 44C126 56 142 76 150 96Z" fill="' + S.earIn + '"/>' +
        (S.earTip ? '<path d="M108 18C100 32 96 46 96 58C104 50 116 44 128 42C122 32 116 24 108 18Z" fill="' + S.earTip + '"/>' : "");
      back += '<g class="c-ear c-ear-l">' + ear + "</g>" + mirror('<g class="c-ear c-ear-r">' + ear + "</g>");
    } else if (S.ears === "round") {
      var rg = g("ea", S.earColor || S.main, mix(S.earColor || S.main, "#ffffff", 0.35), mix(S.earColor || S.main, "#000000", 0.2));
      var re = '<circle cx="104" cy="90" r="40" fill="url(#' + rg + ')"/>' + (S.earIn ? '<circle cx="106" cy="94" r="22" fill="' + S.earIn + '"/>' : "");
      back += '<g class="c-ear c-ear-l">' + re + "</g>" + mirror('<g class="c-ear c-ear-r">' + re + "</g>");
    } else if (S.ears === "long") {
      var lg = g("ea", S.main, S.light, S.shade);
      var le = '<ellipse cx="150" cy="30" rx="32" ry="86" fill="url(#' + lg + ')" transform="rotate(-10 150 30)"/>' +
        '<ellipse cx="150" cy="36" rx="16" ry="64" fill="' + S.earIn + '" transform="rotate(-10 150 36)"/>';
      back += '<g class="c-ear c-ear-l">' + le + "</g>" + mirror('<g class="c-ear c-ear-r">' + le + "</g>");
    }
    if (S.plates) {
      back += '<g fill="' + S.plates + '"><path d="M160 72Q170 30 192 52Q186 64 184 76Z"/><path d="M186 66Q204 14 226 52Q218 62 214 72Z"/><path d="M214 72Q238 36 252 70Q246 78 240 84Z"/></g>';
    }
    if (S.mane) {
      back += S.mane.map(function (c, i) { return '<circle cx="' + (300 - i * 4) + '" cy="' + (78 + i * 40) + '" r="' + (44 - i * 4) + '" fill="' + c + '"/>'; }).join("") +
        '<circle cx="312" cy="252" r="30" fill="' + S.mane[0] + '"/><circle cx="286" cy="62" r="12" fill="#fff" opacity=".4"/>';
    }
    out.push(back);
    out.push(vol(head, body, rim));
    out.push('<ellipse cx="200" cy="176" rx="130" ry="116" fill="url(#' + occl + ')" opacity=".55"/>');

    // motifs du visage
    if (S.foxMask) out.push('<path d="M200 196C176 226 140 248 102 236C110 270 150 290 200 290C250 290 290 270 298 236C260 248 224 226 200 196Z" fill="' + S.belly + '"/>');
    if (S.stripes) out.push('<g fill="' + S.stripes + '"><path d="M200 64C194 76 194 92 200 104C206 92 206 76 200 64Z"/><path d="M172 70C166 80 166 92 170 100C178 92 180 80 178 70Z"/><path d="M228 70C234 80 234 92 230 100C222 92 220 80 222 70Z"/></g>');
    if (S.spots) out.push('<g fill="' + S.spots + '"><circle cx="150" cy="96" r="10"/><circle cx="172" cy="80" r="6"/><circle cx="262" cy="104" r="8"/></g>');
    if (S.pandaEyes) out.push('<g fill="' + S.pandaEyes + '"><ellipse cx="150" cy="182" rx="36" ry="44" transform="rotate(24 150 182)"/><ellipse cx="250" cy="182" rx="36" ry="44" transform="rotate(-24 250 182)"/></g>');
    if (S.patch) out.push('<ellipse cx="252" cy="170" rx="40" ry="36" fill="' + S.patch + '" opacity=".75"/>');
    if (S.muzzle || S.snoutWide) {
      var mg = id + "m"; defs.push(radial(mg, [[0, "#FFFFFF"], [0.7, S.belly], [1, mix(S.belly, S.shade, 0.3)]], 0.45, 0.3, 0.7));
      out.push('<ellipse cx="200" cy="224" rx="' + (S.snoutWide ? 70 : 52) + '" ry="' + (S.snoutWide ? 42 : 38) + '" fill="url(#' + mg + ')"/>');
    }
    out.push('<ellipse cx="146" cy="104" rx="46" ry="24" fill="url(#' + spec + ')" transform="rotate(-24 146 104)"/>');

    // les yeux (ils clignent)
    out.push('<g class="c-eyes">');
    [152, 248].forEach(function (x) {
      if (S.pandaEyes) out.push('<ellipse cx="' + x + '" cy="178" rx="26" ry="30" fill="#FFFFFF" opacity=".16"/>');
      out.push('<ellipse cx="' + x + '" cy="178" rx="22" ry="26" fill="url(#' + eye + ')"/>' +
        '<circle cx="' + (x + 8) + '" cy="168" r="8.5" fill="#fff"/><circle cx="' + (x - 7) + '" cy="189" r="4" fill="#fff" opacity=".85"/>');
    });
    out.push("</g>");
    if (opts.pose === "joy") {
      // yeux rieurs par-dessus (croissants) pendant le saut
      out.push('<g class="c-happy-eyes" fill="none" stroke="#1E2A5E" stroke-width="8" stroke-linecap="round"><path d="M132 182Q152 160 172 182"/><path d="M228 182Q248 160 268 182"/></g>');
    }

    // joues, truffe, bouche
    out.push('<ellipse cx="118" cy="218" rx="26" ry="16" fill="url(#' + cheek + ')"/><ellipse cx="282" cy="218" rx="26" ry="16" fill="url(#' + cheek + ')"/>');
    if (S.snoutWide) {
      out.push('<ellipse cx="184" cy="214" rx="5" ry="4" fill="' + S.nose + '"/><ellipse cx="216" cy="214" rx="5" ry="4" fill="' + S.nose + '"/>');
    } else {
      out.push('<path d="M186 204Q200 196 214 204Q212 216 200 220Q188 216 186 204Z" fill="' + S.nose + '"/><ellipse cx="195" cy="203" rx="5" ry="2.5" fill="#fff" opacity=".55"/>');
    }
    if (opts.pose === "joy") {
      out.push('<path d="M178 228Q200 262 222 228Z" fill="#1E2A5E"/><path d="M188 240Q200 254 212 240Q206 234 200 236Q194 234 188 240Z" fill="#FF7E9C"/>');
    } else {
      out.push('<path d="M184 230Q192 240 200 230Q208 240 216 230" stroke="#1E2A5E" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>');
      if (S.tongue) out.push('<path d="M194 236Q200 250 206 236Z" fill="#FF7E9C"/>');
    }
    if (S.whiskers) out.push('<g stroke="#4E5F9E" stroke-width="3.5" stroke-linecap="round" opacity=".55"><path d="M96 210L56 204M98 222L60 228"/><path d="M304 210L344 204M302 222L340 228"/></g>');

    // oreilles tombantes (devant)
    if (S.ears === "floppy") {
      var fg = g("ea", S.earColor, mix(S.earColor, "#ffffff", 0.3), mix(S.earColor, "#000000", 0.25));
      var fe = '<path d="M96 104C58 110 40 176 56 232C68 268 104 262 112 228C120 190 122 140 112 108Z" fill="url(#' + fg + ')"/>';
      out.push('<g class="c-ear c-ear-l">' + fe + "</g>" + mirror('<g class="c-ear c-ear-r">' + fe + "</g>"));
    }
    // crinière avant (licorne)
    if (S.mane) out.push('<path d="M150 82C170 52 226 44 262 70C246 74 240 92 242 112C214 92 180 90 150 104Z" fill="' + S.mane[0] + '"/>' +
      '<path d="M196 70C214 58 240 60 256 72C242 78 236 90 236 102C222 90 208 86 196 88Z" fill="' + S.mane[1] + '"/>' +
      '<path d="M230 76C246 70 266 76 276 92C264 92 256 100 254 112C246 98 238 90 230 88Z" fill="' + S.mane[2] + '"/>' +
      '<path d="M166 80Q190 64 214 64" stroke="#fff" stroke-width="6" stroke-linecap="round" fill="none" opacity=".5"/>');

    // accessoires de tête et de visage
    if (wear.face && WEAR[wear.face]) out.push(WEAR[wear.face].draw(g, ctx));
    if (wear.hat && WEAR[wear.hat]) out.push(WEAR[wear.hat].draw(g, ctx));
    if (S.horn) {
      var hg = id + "h"; defs.push(linear(hg, [[0, "#FFF4B8"], [0.5, "#FFD23F"], [1, "#F2A20C"]], 0, 0, 1, 0));
      var hy = wear.hat === "cap" || wear.hat === "beanie" ? -26 : 0;
      out.push('<g transform="translate(0 ' + hy + ')"><path d="M178 72L200 -28L222 72Q200 82 178 72Z" fill="url(#' + hg + ')"/>' +
        '<path d="M182 52L218 44M187 28L213 22M192 6L207 2" stroke="#E39A0C" stroke-width="5" stroke-linecap="round"/><path d="M197 -14L189 60" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".6"/></g>');
    }
    out.push("</g>"); // tête
    out.push("</g>"); // saut

    var cls = "comp comp-" + kind + " pose-" + (opts.pose || "idle") + (opts.cls ? " " + opts.cls : "");
    return '<svg class="' + cls + '" viewBox="0 -60 400 520" aria-hidden="true"><defs>' + defs.join("") + "</defs>" + out.join("") + "</svg>";
  }

  /* ---------- Tilou, la mascotte de la marque (garde son trait indigo) ---------- */
  function tilou(opts) {
    opts = opts || {};
    var id = "t" + (++uid);
    var mood = opts.mood || "q";
    var body = id + "b", halo = id + "h", belly = id + "be", eye = id + "e", spec = id + "s";
    var defs = radial(body, [[0, "#FFD4A0"], [0.5, "#FF9A3C"], [1, "#E8771E"]], 0.4, 0.3, 0.8) +
      radial(halo, [[0, "#FFF8C8", 1], [0.4, "#FFD23F", 0.6], [1, "#FFD23F", 0]]) +
      radial(belly, [[0, "#FFFFFF"], [0.7, "#FFF6E8"], [1, "#F6DDBC"]], 0.45, 0.35, 0.7) +
      radial(eye, [[0, "#4A5BA6"], [0.6, "#1E2A5E"], [1, "#10173A"]], 0.45, 0.35, 0.7) +
      radial(spec, [[0, "#FFFFFF", 0.8], [1, "#FFFFFF", 0]]);
    var P = "M120 40C166 40 194 72 192 112C191 132 184 142 188 156C206 180 212 216 202 242C190 272 160 284 120 284C80 284 50 272 38 242C28 216 34 180 52 156C56 142 49 132 48 112C46 72 74 40 120 40Z";
    var arms;
    if (opts.arms === "up") {
      arms = '<path d="M52 170C34 150 22 124 22 100" stroke="' + INK + '" stroke-width="30" stroke-linecap="round" fill="none"/><path d="M52 170C34 150 22 124 22 100" stroke="#F58A2C" stroke-width="21" stroke-linecap="round" fill="none"/>' +
        '<path d="M188 170C206 150 218 124 218 100" stroke="' + INK + '" stroke-width="30" stroke-linecap="round" fill="none"/><path d="M188 170C206 150 218 124 218 100" stroke="#F58A2C" stroke-width="21" stroke-linecap="round" fill="none"/>';
    } else if (opts.arms === "wave") {
      arms = '<path d="M40 190C26 200 16 214 14 228C24 232 40 226 50 214Z" fill="#F58A2C" stroke="' + INK + '" stroke-width="4" stroke-linejoin="round"/>' +
        '<g class="t-wave"><path d="M190 172C206 156 214 134 216 112C226 112 234 122 232 134C228 156 214 176 198 188Z" fill="#F58A2C" stroke="' + INK + '" stroke-width="4" stroke-linejoin="round"/></g>';
    } else {
      arms = '<path d="M40 190C26 200 16 214 14 228C24 232 40 226 50 214Z" fill="#F58A2C" stroke="' + INK + '" stroke-width="4" stroke-linejoin="round"/>' +
        '<path d="M200 190C214 200 224 214 226 228C216 232 200 226 190 214Z" fill="#F58A2C" stroke="' + INK + '" stroke-width="4" stroke-linejoin="round"/>';
    }
    var antenna = mood === "x"
      ? '<g class="t-ant t-ant-x"><circle cx="120" cy="-34" r="46" fill="url(#' + halo + ')" class="t-halo"/><path d="M120 44V-18" stroke="' + INK + '" stroke-width="17" stroke-linecap="round"/><path d="M120 44V-18" stroke="#F58A2C" stroke-width="9" stroke-linecap="round"/>' +
        '<circle cx="120" cy="-36" r="14" fill="#FFD23F" stroke="' + INK + '" stroke-width="3.5"/><circle cx="115" cy="-41" r="4.5" fill="#fff"/>' +
        '<g fill="#FFD23F" stroke="' + INK + '" stroke-width="2.5" stroke-linejoin="round" class="t-sparks"><path d="M166 -46l3 7 7 3-7 3-3 7-3-7-7-3 7-3z"/><path d="M72 -58l2.4 5.6 5.6 2.4-5.6 2.4L72 -42l-2.4-5.6L64 -50l5.6-2.4z"/></g></g>'
      : '<g class="t-ant t-ant-q"><path d="M120 44C120 26 142 18 142 -4C142 -26 126 -40 106 -38C88 -36 78 -24 78 -10" stroke="' + INK + '" stroke-width="17" stroke-linecap="round" fill="none"/>' +
        '<path d="M120 44C120 26 142 18 142 -4C142 -26 126 -40 106 -38C88 -36 78 -24 78 -10" stroke="#F58A2C" stroke-width="9" stroke-linecap="round" fill="none"/>' +
        '<circle cx="78" cy="-2" r="30" fill="url(#' + halo + ')" class="t-halo"/><circle cx="78" cy="-2" r="12" fill="#FFD23F" stroke="' + INK + '" stroke-width="3.5"/><circle cx="74" cy="-6" r="4" fill="#fff"/></g>';
    var eyes = '<g class="t-eyes"><ellipse cx="96" cy="116" rx="16" ry="19" fill="url(#' + eye + ')"/><ellipse cx="144" cy="116" rx="16" ry="19" fill="url(#' + eye + ')"/>' +
      '<circle cx="102" cy="108" r="6.5" fill="#fff"/><circle cx="150" cy="108" r="6.5" fill="#fff"/><circle cx="91" cy="124" r="3" fill="#fff"/><circle cx="139" cy="124" r="3" fill="#fff"/></g>';
    var mouth = mood === "x"
      ? '<path d="M108 140Q120 158 132 140Z" fill="' + INK + '"/>'
      : '<path d="M112 142Q120 149 128 142" stroke="' + INK + '" stroke-width="4" fill="none" stroke-linecap="round"/>';
    return '<svg class="tilou mood-' + mood + (opts.cls ? " " + opts.cls : "") + '" viewBox="0 -90 240 390" aria-hidden="true"><defs>' + defs + "</defs>" +
      '<ellipse cx="120" cy="290" rx="80" ry="9" fill="' + INK + '" opacity=".14"/>' +
      '<g class="t-hop">' + antenna +
      '<ellipse cx="90" cy="280" rx="26" ry="13" fill="#E8771E" stroke="' + INK + '" stroke-width="4"/><ellipse cx="150" cy="280" rx="26" ry="13" fill="#E8771E" stroke="' + INK + '" stroke-width="4"/>' +
      '<path d="' + P + '" fill="url(#' + body + ')" stroke="' + INK + '" stroke-width="4.5"/>' +
      '<ellipse cx="120" cy="214" rx="50" ry="58" fill="url(#' + belly + ')"/>' +
      '<ellipse cx="88" cy="70" rx="22" ry="12" fill="url(#' + spec + ')" transform="rotate(-30 88 70)"/>' + arms +
      '<ellipse cx="72" cy="140" rx="15" ry="9" fill="#FF8FA3" opacity=".8"/><ellipse cx="168" cy="140" rx="15" ry="9" fill="#FF8FA3" opacity=".8"/>' +
      eyes + mouth + "</g></svg>";
  }

  /* ---------- la vignette d'un accessoire (dressing) ---------- */
  var BOX = {
    cap: "50 10 260 130", beanie: "96 -16 208 150", crown: "110 16 180 110", party: "140 -20 130 130", flower: "84 40 110 90",
    glasses: "104 130 192 92", scarf: "110 266 180 120", bow: "130 262 140 70", sneakers: "96 384 208 66", boots: "112 368 176 84"
  };
  function icon(itemId) {
    var id = "i" + (++uid), defs = [];
    function g(name, main, light, shade) { var gid = id + name; defs.push(radial(gid, [[0, light], [0.55, main], [1, shade]], 0.38, 0.3, 0.8)); return gid; }
    var inner;
    if (itemId === "tee" || itemId === "raincoat") {
      var tee = itemId === "tee";
      var c = tee ? ["#FF7A59", "#FFAE94", "#D9462A"] : ["#FFD23F", "#FFEFA0", "#E6A400"];
      var gid = g("t", c[0], c[1], c[2]);
      inner = '<path d="M140 286L100 300L84 344L114 356L122 336V414H278V336L286 356L316 344L300 300L260 286Q200 306 140 286Z" fill="url(#' + gid + ')"/>';
      if (tee) for (var y = 314; y < 410; y += 26) inner += '<rect x="122" y="' + y + '" width="156" height="12" fill="#FFF6E8"/>';
      else inner += '<path d="M200 300V414" stroke="#D69A00" stroke-width="5"/><circle cx="214" cy="330" r="7" fill="#1E2A5E"/><circle cx="214" cy="366" r="7" fill="#1E2A5E"/>';
      return '<svg class="item-icon" viewBox="76 276 248 146" aria-hidden="true"><defs>' + defs.join("") + "</defs>" + inner + "</svg>";
    }
    inner = WEAR[itemId].draw(g, { clip: "", rim: "" });
    return '<svg class="item-icon" viewBox="' + BOX[itemId] + '" aria-hidden="true"><defs>' + defs.join("") + "</defs>" + inner + "</svg>";
  }

  window.Companion = { svg: svg, SPECIES: SPECIES, ITEMS: COMPANION_ITEMS };
  window.Tilou = { svg: tilou };
  window.Items = { icon: icon };
})();
