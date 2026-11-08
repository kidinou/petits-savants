/* Petits Savants · design 2026 · la scène, le focus télécommande et les sons d'interface.
 * - La scène 1920×1080 est mise à l'échelle de la fenêtre.
 * - Flèches : le focus va vers l'élément .f le plus proche dans la direction (navigation
 *   spatiale), OK/Entrée déclenche l'événement "ok".
 * - Les sons sont synthétisés (Web Audio) : « tic » de bois au déplacement (hauteur selon la
 *   colonne), « pop » à la validation, jingle « Ça pétille » sol-la-DO pour une réussite.
 * - ?calm=1, ?text=m|l, ?theme=rose… pour tester les réglages d'accessibilité et les thèmes. */
(function () {
  "use strict";
  var stage = document.getElementById("stage");
  function fit() {
    var s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    stage.style.transform = "scale(" + s + ")";
    stage.style.left = (window.innerWidth - 1920 * s) / 2 + "px";
    stage.style.top = (window.innerHeight - 1080 * s) / 2 + "px";
  }
  window.addEventListener("resize", fit); fit();

  var q = {}; location.search.replace(/[?&](\w+)=([^&]*)/g, function (m, k, v) { q[k] = decodeURIComponent(v); });
  if (q.calm) document.documentElement.setAttribute("data-calm", "");
  if (q.text) document.documentElement.setAttribute("data-text", q.text);
  if (q.theme) document.documentElement.setAttribute("data-theme", q.theme);

  /* ---------- sons ---------- */
  var ac = null;
  function ctx() { if (!ac) { try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { ac = null; } } return ac; }
  function note(freq, t, dur, vol, type) {
    var c = ctx(); if (!c) return;
    var o = c.createOscillator(), g = c.createGain();
    o.type = type || "sine"; o.frequency.value = freq;
    g.gain.setValueAtTime(0, c.currentTime + t);
    g.gain.linearRampToValueAtTime(vol, c.currentTime + t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + t + dur);
    o.connect(g); g.connect(c.destination); o.start(c.currentTime + t); o.stop(c.currentTime + t + dur + 0.05);
  }
  var calm = !!q.calm;
  var Sfx = {
    tic: function (col) { note(660 + (col || 0) * 70, 0, 0.06, calm ? 0.03 : 0.06, "triangle"); },
    pop: function () { note(520, 0, 0.09, calm ? 0.05 : 0.1); note(780, 0.02, 0.07, calm ? 0.03 : 0.06); },
    yes: function () { [392, 440, 523.25].forEach(function (f, i) { note(f, i * 0.13, i === 2 ? 0.8 : 0.22, 0.12); note(f * 2, i * 0.13, i === 2 ? 0.6 : 0.15, 0.04); }); },
    almost: function () { note(392, 0, 0.25, 0.08); note(440, 0.15, 0.4, 0.08); }
  };
  window.Sfx = Sfx;

  /* ---------- focus ---------- */
  function rect(el) { var r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; }
  function current() { return stage.querySelector(".f.is-focus"); }
  function setFocus(el) {
    var cur = current(); if (cur === el || !el) return;
    if (cur) cur.classList.remove("is-focus");
    el.classList.add("is-focus");
    var all = [].slice.call(stage.querySelectorAll(".f"));
    Sfx.tic(all.indexOf(el) % 4);
    stage.dispatchEvent(new CustomEvent("focuschange", { detail: el }));
  }
  function move(dx, dy) {
    var cur = current(); var all = [].slice.call(stage.querySelectorAll(".f")).filter(function (e) { return e !== cur && e.offsetParent !== null; });
    if (!cur) { if (all[0]) setFocus(all[0]); return; }
    var a = rect(cur), best = null, bestScore = Infinity;
    all.forEach(function (e) {
      var b = rect(e), vx = b.x - a.x, vy = b.y - a.y;
      var along = vx * dx + vy * dy; if (along <= 4) return;
      var across = Math.abs(vx * dy - vy * dx);
      var score = along + across * 2.2;
      if (score < bestScore) { bestScore = score; best = e; }
    });
    if (best) setFocus(best);
  }
  document.addEventListener("keydown", function (e) {
    var k = e.key;
    if (k === "ArrowLeft") move(-1, 0); else if (k === "ArrowRight") move(1, 0);
    else if (k === "ArrowUp") move(0, -1); else if (k === "ArrowDown") move(0, 1);
    else if (k === "Enter" || k === " ") { Sfx.pop(); stage.dispatchEvent(new CustomEvent("ok", { detail: current() })); }
    else return;
    e.preventDefault();
  });
  stage.addEventListener("click", function (e) {
    var f = e.target.closest ? e.target.closest(".f") : null;
    if (f) { setFocus(f); Sfx.pop(); stage.dispatchEvent(new CustomEvent("ok", { detail: f })); }
  });
  stage.addEventListener("mouseover", function (e) { var f = e.target.closest ? e.target.closest(".f") : null; if (f) setFocus(f); });
  window.PS = { setFocus: setFocus, params: q };
})();
