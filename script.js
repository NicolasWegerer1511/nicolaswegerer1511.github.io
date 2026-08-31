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
document.querySelectorAll('.nav-item button').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const open = item.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
    document.querySelectorAll('.nav-item').forEach((other) => {
      if (other !== item) { other.classList.remove('open'); other.querySelector('button').setAttribute('aria-expanded','false'); }
    });
  });
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav-item')) document.querySelectorAll('.nav-item').forEach((item) => item.classList.remove('open'));
});
