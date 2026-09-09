// Progressive enhancement: content stays visible if JavaScript or animation is unavailable.
(() => {
  const home = document.querySelector('.home-draft--editorial, .preview-page');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!home || reducedMotion.matches || !('IntersectionObserver' in window) || !Element.prototype.animate) return;

  const activeAnimations = new Set();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      // Never hide content that has received keyboard focus.
      if (reducedMotion.matches || entry.target.contains(document.activeElement)) return;
      const animation = entry.target.animate(
        [{ opacity: 0.35, transform: 'translateY(14px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 520, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
      );
      activeAnimations.add(animation);
      animation.onfinish = animation.oncancel = () => activeAnimations.delete(animation);
    });
  }, { threshold: 0.08 });

  home.querySelectorAll('[data-reveal], .bibliography > li, .service-teaching__section, .service-teaching__item, .cv > .card, .preview-page--news .news tr').forEach((element) => observer.observe(element));
  home.addEventListener('focusin', () => activeAnimations.forEach((animation) => animation.cancel()));
  reducedMotion.addEventListener('change', (event) => {
    if (!event.matches) return;
    observer.disconnect();
    activeAnimations.forEach((animation) => animation.cancel());
  });
})();
