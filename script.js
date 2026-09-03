const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');
if (reduceMotion) revealItems.forEach((item) => item.classList.add('visible'));
else {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: .12 });
  revealItems.forEach((item) => observer.observe(item));
}

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.navlinks');
function closeMenu() {
  navLinks?.classList.remove('mobile-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
  document.querySelectorAll('.nav-item').forEach((item) => {
    item.classList.remove('open');
    item.querySelector('button')?.setAttribute('aria-expanded', 'false');
  });
}
menuToggle?.addEventListener('click', () => {
  const open = !navLinks.classList.contains('mobile-open');
  navLinks.classList.toggle('mobile-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
});
document.querySelectorAll('.nav-item>button').forEach((button) => button.addEventListener('click', (event) => {
  event.stopPropagation();
  const item = button.parentElement;
  const open = !item.classList.contains('open');
  document.querySelectorAll('.nav-item').forEach((other) => {
    other.classList.remove('open');
    other.querySelector('button')?.setAttribute('aria-expanded', 'false');
  });
  item.classList.toggle('open', open);
  button.setAttribute('aria-expanded', String(open));
}));
document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav-item')) document.querySelectorAll('.nav-item').forEach((item) => item.classList.remove('open'));
});
document.querySelectorAll('.navlinks a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
addEventListener('resize', () => { if (innerWidth > 720) closeMenu(); }, { passive: true });

const flowData = {
  import: { eyebrow: 'CANON · DJI · DATEIEN', title: 'Medien direkt ins Projekt.', text: 'Verbinde eine unterstützte Canon Kamera, übernimm DJI-Aufnahmen oder wähle lokale Dateien. Visuals Studio ordnet sie direkt dem passenden Projekt zu.', list: ['Kamera und Quelle auswählen','Vorschau prüfen und Favoriten markieren','Metadaten strukturiert übernehmen'] },
  edit: { eyebrow: 'STUDIO EDITOR · LIGHTROOM', title: 'Aus Auswahl wird ein Look.', text: 'Bearbeite Licht, Farbe, Kontrast und Zuschnitt, verwende eigene Presets und binde Lightroom in deinen persönlichen Ablauf ein.', list: ['Looks geräteübergreifend verwenden','Feinanpassungen konzentriert durchführen','Auswahl und Bearbeitungsstatus behalten'] },
  plan: { eyebrow: 'CREATOR PLAN · KALENDER', title: 'Jeder Inhalt bekommt seinen Platz.', text: 'Verbinde Idee, Medien, Text und Termin in einem übersichtlichen Plan. So erkennst du jederzeit, was als Nächstes ansteht.', list: ['Ideen und Briefings sammeln','Medien einem Beitrag zuordnen','Termine und Status übersichtlich verfolgen'] },
  measure: { eyebrow: 'ACTIVITY · INSIGHTS', title: 'Verstehen, was funktioniert.', text: 'Behalte Aktivität und Entwicklung deiner Inhalte im Blick. Kompakte Vergleiche helfen dir, erfolgreiche Muster schneller zu erkennen.', list: ['Relevante Kennzahlen bündeln','Beiträge miteinander vergleichen','Erkenntnisse für neue Ideen nutzen'] }
};
const flowDemo = document.querySelector('.workflow-demo');
document.querySelectorAll('[data-flow]').forEach((button) => button.addEventListener('click', () => {
  const key = button.dataset.flow;
  const data = flowData[key];
  document.querySelectorAll('[data-flow]').forEach((item) => item.classList.toggle('active', item === button));
  flowDemo.dataset.state = key;
  document.getElementById('flowEyebrow').textContent = data.eyebrow;
  document.getElementById('flowTitle').textContent = data.title;
  document.getElementById('flowText').textContent = data.text;
  document.getElementById('flowList').innerHTML = data.list.map((item) => `<li>${item}</li>`).join('');
  flowDemo.animate([{opacity:.55,transform:'translateY(4px)'},{opacity:1,transform:'none'}],{duration:260,easing:'ease-out'});
}));

const editPhoto = document.querySelector('.edit-photo');
document.querySelectorAll('[data-look]').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('[data-look]').forEach((item) => item.classList.toggle('active', item === button));
  editPhoto.dataset.look = button.dataset.look;
  editPhoto.querySelector('span').textContent = button.textContent.toUpperCase();
}));
document.getElementById('demoLight')?.addEventListener('input', (event) => editPhoto.style.setProperty('--light', event.target.value / 100));
