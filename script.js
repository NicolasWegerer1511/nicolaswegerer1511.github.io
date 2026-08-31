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

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.navlinks');
menuToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('mobile-open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
navLinks?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navLinks.classList.remove('mobile-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const labPhoto = document.querySelector('.lab-photo');
const labLabel = document.querySelector('.lab-label');
document.querySelectorAll('.preset-buttons button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.preset-buttons button').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    labPhoto.dataset.preset = button.dataset.preset;
    labLabel.textContent = button.textContent.toUpperCase();
  });
});

const sliderConfig = {
  exposure: ['--bright', (value) => 1 + value / 120, (value) => `${value >= 0 ? '+' : ''}${(value / 100).toFixed(2)}`],
  warmth: ['--sat', (value) => 1 + value / 120, (value) => `${value >= 0 ? '+' : ''}${value}`],
  contrast: ['--contrast', (value) => 1 + value / 120, (value) => `${value >= 0 ? '+' : ''}${value}`]
};
Object.entries(sliderConfig).forEach(([id, config]) => {
  const slider = document.getElementById(id);
  const output = document.getElementById(`${id}Value`);
  slider?.addEventListener('input', () => {
    const value = Number(slider.value);
    labPhoto?.style.setProperty(config[0], config[1](value));
    if (output) output.textContent = config[2](value);
  });
});
