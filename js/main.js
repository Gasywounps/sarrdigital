/* SarrDigital — interazioni: menu mobile, calcolatore OTA, reveal, form */

(function () {
  "use strict";

  /* ---------- Menu mobile ---------- */
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if ("IntersectionObserver" in window && !reduced) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach(function (el) {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("visible");
    });
  }

  /* ---------- Calcolatore commissioni OTA ---------- */
  var notti = document.getElementById("notti");
  var prezzo = document.getElementById("prezzo");
  var commissione = document.getElementById("commissione");
  var nottiOut = document.getElementById("notti-out");
  var prezzoOut = document.getElementById("prezzo-out");
  var commissioneOut = document.getElementById("commissione-out");
  var totale = document.getElementById("calc-total");
  var nota = document.getElementById("calc-note");

  function fmt(n) {
    return n.toLocaleString("it-IT", { maximumFractionDigits: 0 });
  }

  function aggiorna() {
    var n = parseInt(notti.value, 10);
    var p = parseInt(prezzo.value, 10);
    var c = parseInt(commissione.value, 10);

    nottiOut.textContent = fmt(n);
    prezzoOut.textContent = fmt(p) + " €";
    commissioneOut.textContent = c + "%";

    var ricavo = n * p;
    var commissioni = Math.round((ricavo * c) / 100);
    var cinqueAnni = commissioni * 5;

    totale.textContent = fmt(commissioni) + " €";
    nota.textContent =
      "Su 5 anni: " + fmt(cinqueAnni) + " € in commissioni. Un booking engine tuo si ripaga con le prime prenotazioni dirette.";
  }

  if (notti && prezzo && commissione) {
    [notti, prezzo, commissione].forEach(function (el) {
      el.addEventListener("input", aggiorna);
    });
    aggiorna();
  }

  /* ---------- Form contatti ---------- */
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var nome = form.nome.value.trim();
      var email = form.email.value.trim();
      var messaggio = form.messaggio.value.trim();
      var emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!nome || !email || !messaggio || !emailValid) {
        status.textContent = "Controlla i campi: nome, email valida e messaggio sono obbligatori.";
        status.className = "form-status err";
        return;
      }

      status.textContent = "Grazie, " + nome + "! La tua richiesta è stata inviata: ti rispondo entro 24h lavorative.";
      status.className = "form-status ok";
      form.reset();
    });
  }

  /* ---------- Anno footer ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
