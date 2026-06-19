// =============================================
// Friends Food — JS mínimo
// Scroll-reveal para las tarjetas de combos
// =============================================

document.addEventListener('DOMContentLoaded', function () {

  // Scroll-reveal con IntersectionObserver
  var cards = document.querySelectorAll('.combo-card');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          // Pequeño delay escalonado entre tarjetas
          setTimeout(function () {
            entry.target.classList.add('is-visible');
          }, i * 150);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    cards.forEach(function (card) {
      observer.observe(card);
    });
  } else {
    // Fallback para browsers muy viejos
    cards.forEach(function (card) {
      card.classList.add('is-visible');
    });
  }

});
