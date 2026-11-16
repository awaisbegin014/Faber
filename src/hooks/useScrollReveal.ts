import { useEffect } from 'react';

export function useScrollReveal(
  selector = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-child'
) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const delay = target.dataset.revealDelay;
            if (delay) {
              target.style.transitionDelay = `${delay}ms`;
            }
            target.classList.add('reveal-visible');
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
}
