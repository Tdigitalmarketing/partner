/**
 * TDigital — revelação de elementos ao entrar na viewport.
 * Técnico e neutro: o efeito visual em si é definido pelo CSS de cada LP.
 *
 * Uso:
 *   <div data-reveal>...</div>
 *   <div data-reveal data-reveal-delay="150">...</div>
 *
 * CSS esperado na LP (exemplo — cada projeto define o seu):
 *   [data-reveal]{opacity:0;transform:translateY(24px);transition:.6s ease}
 *   [data-reveal].is-visible{opacity:1;transform:none}
 */
export function initReveal({
  selector = '[data-reveal]',
  visibleClass = 'is-visible',
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
  once = true,
} = {}) {
  const items = document.querySelectorAll(selector);
  if (!items.length) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add(visibleClass));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting) {
        const delay = Number(el.dataset.revealDelay || 0);
        window.setTimeout(() => el.classList.add(visibleClass), delay);
        if (once) observer.unobserve(el);
      } else if (!once) {
        el.classList.remove(visibleClass);
      }
    });
  }, { threshold, rootMargin });

  items.forEach((el) => observer.observe(el));
  return observer;
}

/** Marca o link de navegação da seção atualmente visível. */
export function initScrollSpy({
  linkSelector = '[data-nav-link]',
  activeClass = 'is-active',
} = {}) {
  const links = [...document.querySelectorAll(linkSelector)];
  const sections = links
    .map((l) => document.querySelector(l.getAttribute('href') || ''))
    .filter(Boolean);
  if (!sections.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((l) => l.classList.remove(activeClass));
      const link = links.find((l) => l.getAttribute('href') === `#${entry.target.id}`);
      link?.classList.add(activeClass);
    });
  }, { threshold: 0.4 });

  sections.forEach((s) => observer.observe(s));
  return observer;
}
