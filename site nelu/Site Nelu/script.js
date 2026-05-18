// ─── SCROLL REVEAL ───────────────────────────────────────────────────────────
// Observa todos os elementos com classe .reveal e os torna visíveis
// quando entram no viewport, com leve atraso escalonado entre eles.

const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => revealObserver.observe(el));