const mobileNavigation = window.matchMedia('(max-width: 1024px)');

for (const nav of document.querySelectorAll('.header .nav')) {
  const toggle = nav.querySelector('.menu');
  const links = nav.querySelector('.links');
  if (!toggle || !links) continue;

  const groups = [...nav.querySelectorAll('.navgroup > button')];

  function setGroup(button, open) {
    button.parentElement.classList.toggle('open', open);
    button.setAttribute('aria-expanded', String(open));
  }

  function setMenu(open, restoreFocus = false) {
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    if (!open) groups.forEach(button => setGroup(button, false));
    if (mobileNavigation.matches) links.inert = !open;
    if (restoreFocus) toggle.focus();
  }

  toggle.addEventListener('click', () => setMenu(!links.classList.contains('open')));
  groups.forEach(button => {
    setGroup(button, false);
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      groups.forEach(group => setGroup(group, group === button && open));
    });
  });
  links.addEventListener('click', event => {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('click', event => {
    if (!nav.contains(event.target)) setMenu(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    if (links.classList.contains('open')) setMenu(false, true);
    else groups.filter(button => button.getAttribute('aria-expanded') === 'true').forEach(button => {
      setGroup(button, false);
      button.focus();
    });
  });
  function updateLayout() {
    setMenu(false);
    links.inert = mobileNavigation.matches;
  }
  mobileNavigation.addEventListener('change', updateLayout);
  updateLayout();
}
