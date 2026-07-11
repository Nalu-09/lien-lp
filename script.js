// LIEN LP — minimal, restrained interactions only.
// 1) Scroll reveal for section blocks (respects prefers-reduced-motion via CSS).
// 2) No tracking / analytics here — see index.html <head> for the GA placeholder.

document.addEventListener('DOMContentLoaded', function () {
  var targets = document.querySelectorAll(
    '.section-title, .section-lead, .scatter-list, .check-list, ' +
    '.flow-diagram, .before-after, .screen-block, .capability-grid, ' +
    '.case-grid, .compare-list, .fit-grid, .step-list, .price-grid, .faq-list'
  );

  targets.forEach(function (el) { el.classList.add('reveal'); });

  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(function (el) { observer.observe(el); });
});
