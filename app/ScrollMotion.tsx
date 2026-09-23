'use client';
import { useEffect } from 'react';
export default function ScrollMotion() {
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | undefined;
    const elements = [...document.querySelectorAll<HTMLElement>('.section-heading, .studio-grid, .service, .creator-section > div, .manifesto, .steps article, .client-card')];
    const reset = () => { observer?.disconnect(); elements.forEach(el => el.classList.remove('reveal-pending')); };
    const start = () => {
      reset();
      if (media.matches || !('IntersectionObserver' in window)) return;
      observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.remove('reveal-pending'); observer?.unobserve(entry.target); }
      }), { threshold: 0.08 });
      elements.forEach(el => {
        el.classList.add('scroll-reveal');
        if (el.getBoundingClientRect().top > window.innerHeight) { el.classList.add('reveal-pending'); observer?.observe(el); }
      });
    };
    start(); media.addEventListener('change', start);
    const showFocused = (event: FocusEvent) => { (event.target as HTMLElement)?.closest('.reveal-pending')?.classList.remove('reveal-pending'); };
    document.addEventListener('focusin', showFocused);
    return () => { reset(); media.removeEventListener('change', start); document.removeEventListener('focusin', showFocused); };
  }, []);
  return null;
}
