const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduced) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: .14 });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll', Math.min(scrollY / 900, 1));
  }, { passive: true });
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
}
