/* Petits Savants · design 2026 · icônes pleines et objets en volume doux (SVG).
 * Icônes : trait rond épais, toujours remplies quand actives. Objets : un volume, une lumière
 * en haut à gauche, une ombre teintée, un reflet. Aucun emoji. */
(function () {
  "use strict";
  var INK = "#1E2A5E", n = 0;
  function rg(id, a, b, c) { return '<radialGradient id="' + id + '" cx=".38" cy=".3" r=".8"><stop offset="0" stop-color="' + a + '"/><stop offset=".55" stop-color="' + b + '"/><stop offset="1" stop-color="' + c + '"/></radialGradient>'; }
  function wrap(vb, defs, body, cls) { return '<svg class="' + (cls || "ico") + '" viewBox="' + vb + '" aria-hidden="true"><defs>' + defs + "</defs>" + body + "</svg>"; }

  var I = {};
  I.star = function (on) {
    var id = "st" + (++n);
    var p = "M50 6L63 34L94 37L70 58L77 89L50 73L23 89L30 58L6 37L37 34Z";
    if (!on) return wrap("0 0 100 100", "", '<path d="' + p + '" fill="#E6E2F2" stroke="#CFC8E6" stroke-width="5" stroke-linejoin="round"/>');
    return wrap("0 0 100 100", rg(id, "#FFF6B8", "#FFD23F", "#F29A0C"),
      '<path d="' + p + '" fill="url(#' + id + ')" stroke="#E08A06" stroke-width="5" stroke-linejoin="round"/>' +
      '<path d="M36 40Q44 30 52 26" stroke="#fff" stroke-width="7" stroke-linecap="round" fill="none" opacity=".75"/>');
  };
  I.lantern = function (on) {
    var id = "ln" + (++n);
    var glow = on ? '<circle cx="50" cy="58" r="46" fill="url(#' + id + 'g)"/>' : "";
    return wrap("0 0 100 110", rg(id, on ? "#FFF6B8" : "#EEF0F8", on ? "#FFD23F" : "#D9DCEB", on ? "#F2A20C" : "#B9BDD3") +
      '<radialGradient id="' + id + 'g"><stop offset="0" stop-color="#FFE98A" stop-opacity=".7"/><stop offset="1" stop-color="#FFE98A" stop-opacity="0"/></radialGradient>',
      glow + '<path d="M50 4V18" stroke="' + INK + '" stroke-width="5" stroke-linecap="round"/><rect x="34" y="16" width="32" height="12" rx="6" fill="' + INK + '"/>' +
      '<path d="M26 40C26 28 74 28 74 40V76C74 90 26 90 26 76Z" fill="url(#' + id + ')"/>' +
      '<rect x="34" y="88" width="32" height="10" rx="5" fill="' + INK + '"/><path d="M36 44Q38 36 46 34" stroke="#fff" stroke-width="5" stroke-linecap="round" fill="none" opacity=".7"/>');
  };
  I.lock = function (c) { return wrap("0 0 48 48", "", '<rect x="9" y="21" width="30" height="22" rx="7" fill="' + (c || "#8E93B5") + '"/><path d="M16 22V16a8 8 0 0 1 16 0v6" stroke="' + (c || "#8E93B5") + '" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="24" cy="31" r="3.5" fill="#fff"/>'); };
  I.check = function (c) { return wrap("0 0 48 48", "", '<path d="M11 25l9 9 17-19" stroke="' + (c || "#fff") + '" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'); };
  I.speaker = function (c) { return wrap("0 0 48 48", "", '<path d="M8 19h8l11-9v28l-11-9H8z" fill="' + (c || INK) + '" stroke="' + (c || INK) + '" stroke-width="3" stroke-linejoin="round"/><path d="M33 17q5 7 0 14M38 12q9 12 0 24" stroke="' + (c || INK) + '" stroke-width="4" fill="none" stroke-linecap="round"/>'); };
  I.close = function (c) { return wrap("0 0 48 48", "", '<path d="M14 14l20 20M34 14L14 34" stroke="' + (c || INK) + '" stroke-width="6" stroke-linecap="round"/>'); };
  I.back = function (c) { return wrap("0 0 48 48", "", '<path d="M29 12L17 24l12 12" stroke="' + (c || INK) + '" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'); };
  I.chev = function (dir, c) { var d = dir === "l" ? "M29 12L17 24l12 12" : "M19 12l12 12-12 12"; return wrap("0 0 48 48", "", '<path d="' + d + '" stroke="' + (c || INK) + '" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'); };
  I.parent = function (c) { return wrap("0 0 48 48", "", '<rect x="11" y="21" width="26" height="20" rx="6" fill="' + (c || INK) + '"/><path d="M17 22v-5a7 7 0 0 1 14 0v5" stroke="' + (c || INK) + '" stroke-width="4.5" fill="none"/>'); };
  I.phone = function (c) { return wrap("0 0 48 48", "", '<rect x="14" y="5" width="20" height="38" rx="6" fill="none" stroke="' + (c || INK) + '" stroke-width="4.5"/><circle cx="24" cy="36" r="2.6" fill="' + (c || INK) + '"/>'); };
  I.paper = function (c) { return wrap("0 0 48 48", "", '<path d="M11 6h18l9 9v27H11z" fill="none" stroke="' + (c || INK) + '" stroke-width="4.5" stroke-linejoin="round"/><path d="M17 24h14M17 31h10" stroke="' + (c || INK) + '" stroke-width="4" stroke-linecap="round"/>'); };
  I.play = function (c) { return wrap("0 0 48 48", "", '<path d="M16 10l22 14-22 14z" fill="' + (c || INK) + '" stroke="' + (c || INK) + '" stroke-width="4" stroke-linejoin="round"/>'); };
  I.replay = function (c) { return wrap("0 0 48 48", "", '<path d="M12 24a12 12 0 1 0 4-9" stroke="' + (c || INK) + '" stroke-width="5.5" fill="none" stroke-linecap="round"/><path d="M10 8v9h9" stroke="' + (c || INK) + '" stroke-width="5.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'); };
  I.hanger = function (c) { return wrap("0 0 48 48", "", '<path d="M24 16a5 5 0 1 1 5-5M24 16v4L6 34h36L24 20" stroke="' + (c || INK) + '" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'); };
  I.plus = function (c) { return wrap("0 0 48 48", "", '<path d="M24 10v28M10 24h28" stroke="' + (c || INK) + '" stroke-width="7" stroke-linecap="round"/>'); };

  /* icônes de matière (forme + couleur : jamais la couleur seule) */
  I.subject = function (s, c) {
    c = c || "#fff";
    var b = {
      mots: '<path d="M10 12h28a6 6 0 0 1 6 6v14a6 6 0 0 1-6 6H22l-9 7v-7h-3a6 6 0 0 1-6-6V18a6 6 0 0 1 6-6z" fill="' + c + '"/>',
      nombres: '<rect x="5" y="25" width="17" height="17" rx="4" fill="' + c + '"/><rect x="26" y="25" width="17" height="17" rx="4" fill="' + c + '"/><rect x="15.5" y="5" width="17" height="17" rx="4" fill="' + c + '"/>',
      monde: '<path d="M40 8C18 8 8 20 8 32c0 4 1 7 2 9 3-10 10-17 20-21-8 6-13 13-15 22 3 1 6 2 10 2 16 0 21-14 15-36z" fill="' + c + '"/>',
      langues: '<path d="M14 38a10 10 0 0 1-1-20 13 13 0 0 1 25 1 9 9 0 0 1-2 19z" fill="' + c + '"/>',
      traces: '<path d="M8 36c8 0 10-24 18-24s4 22 10 22c4 0 6-6 6-10" stroke="' + c + '" stroke-width="6" fill="none" stroke-linecap="round"/>'
    }[s];
    return wrap("0 0 48 48", "", b);
  };

  /* objets d'exercice */
  I.obj = function (k) {
    var id = "ob" + (++n), d = "", b = "";
    if (k === "ballon") {
      d = rg(id, "#FFFFFF", "#F4F6FF", "#C7CDEA") + '<clipPath id="' + id + 'c"><circle cx="100" cy="100" r="78"/></clipPath>';
      b = '<circle cx="100" cy="100" r="78" fill="url(#' + id + ')"/>' +
        '<g clip-path="url(#' + id + 'c)" opacity=".92"><path d="M100 100L60 0H140Z" fill="#FF5C5C"/><path d="M100 100L200 60V140Z" fill="#4C9BFF"/><path d="M100 100L140 200H60Z" fill="#FFD23F"/><path d="M100 100L0 140V60Z" fill="#3FCB78"/></g>' +
        '<circle cx="100" cy="100" r="78" fill="url(#' + id + 's)"/><circle cx="100" cy="100" r="16" fill="#fff"/>' +
        '<ellipse cx="72" cy="62" rx="22" ry="12" fill="#fff" opacity=".7" transform="rotate(-35 72 62)"/>';
      d += '<radialGradient id="' + id + 's" cx=".4" cy=".35" r=".7"><stop offset=".6" stop-color="#1E2A5E" stop-opacity="0"/><stop offset="1" stop-color="#1E2A5E" stop-opacity=".28"/></radialGradient>';
    } else if (k === "lune") {
      d = rg(id, "#FFF7C2", "#FFD23F", "#E8A10C");
      b = '<path d="M128 26A78 78 0 1 0 172 132A62 62 0 1 1 128 26Z" fill="url(#' + id + ')"/><circle cx="88" cy="122" r="9" fill="#E8A10C" opacity=".35"/><circle cx="70" cy="92" r="6" fill="#E8A10C" opacity=".35"/>' +
        '<path d="M64 56Q80 40 100 36" stroke="#fff" stroke-width="9" stroke-linecap="round" fill="none" opacity=".7"/>';
    } else if (k === "pomme") {
      d = rg(id, "#FF9A8A", "#F0453A", "#B71F2A") + rg(id + "l", "#B6F0A0", "#4FC27F", "#1F8A63");
      b = '<path d="M100 56C80 40 34 44 32 98C30 146 64 184 100 172C136 184 170 146 168 98C166 44 120 40 100 56Z" fill="url(#' + id + ')"/>' +
        '<path d="M100 58C100 44 104 32 112 24" stroke="#7A4A2A" stroke-width="8" stroke-linecap="round" fill="none"/>' +
        '<path d="M108 40C120 22 146 20 156 28C146 44 124 50 108 40Z" fill="url(#' + id + 'l)"/><ellipse cx="66" cy="84" rx="14" ry="22" fill="#fff" opacity=".55" transform="rotate(20 66 84)"/>';
    } else if (k === "soleil") {
      d = rg(id, "#FFF7C2", "#FFC93F", "#F28A0C");
      var r = ""; for (var i = 0; i < 10; i++) r += '<path d="M100 8L112 34H88Z" fill="#FFB52E" transform="rotate(' + (i * 36) + ' 100 100)"/>';
      b = '<g class="spin">' + r + '</g><circle cx="100" cy="100" r="56" fill="url(#' + id + ')"/><ellipse cx="80" cy="76" rx="16" ry="9" fill="#fff" opacity=".7" transform="rotate(-30 80 76)"/>';
    } else if (k === "chest") {
      d = rg(id, "#FFC98A", "#E8893A", "#B45A1E");
      b = '<rect x="30" y="86" width="140" height="82" rx="16" fill="url(#' + id + ')"/><path d="M30 92C30 46 170 46 170 92Z" fill="url(#' + id + ')"/><rect x="30" y="84" width="140" height="14" fill="#B45A1E"/>' +
        '<rect x="88" y="84" width="24" height="40" rx="6" fill="#FFD23F"/><path d="M48 62Q70 48 96 46" stroke="#fff" stroke-width="7" stroke-linecap="round" fill="none" opacity=".55"/>';
    }
    return wrap("0 0 200 200", d, b, "obj");
  };
  I.sparkle = function (c) { return wrap("0 0 40 40", "", '<path d="M20 2l4.5 13.5L38 20l-13.5 4.5L20 38l-4.5-13.5L2 20l13.5-4.5z" fill="' + (c || "#FFD23F") + '"/>'); };

  window.Ico = I;
})();
