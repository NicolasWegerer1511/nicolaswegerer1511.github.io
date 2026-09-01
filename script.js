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
  button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    const item = button.parentElement;
    const open = item.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
    document.querySelectorAll('.nav-item').forEach((other) => {
      if (other !== item) {
        other.classList.remove('open');
        other.querySelector('button')?.setAttribute('aria-expanded','false');
      }
    });
  });
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav-item')) document.querySelectorAll('.nav-item').forEach((item) => item.classList.remove('open'));
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.navlinks');

function setMobileMenu(open) {
  navLinks?.classList.toggle('mobile-open', open);
  menuToggle?.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
  if (!open) {
    document.querySelectorAll('.nav-item').forEach((item) => {
      item.classList.remove('open');
      item.querySelector('button')?.setAttribute('aria-expanded','false');
    });
  }
}

menuToggle?.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  setMobileMenu(!navLinks?.classList.contains('mobile-open'));
});

navLinks?.querySelectorAll('.dropdown a, > a').forEach((link) => link.addEventListener('click', () => {
  setMobileMenu(false);
}));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMobileMenu(false);
});

addEventListener('resize', () => {
  if (innerWidth > 650) setMobileMenu(false);
}, { passive: true });

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

// Visuals Studio V18.6 live website augmentation.
(() => {
  const replaceText = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      node.nodeValue = node.nodeValue
        .replace(/Visuals Studio 17(?:\.0\.2)?/g, 'Visuals Studio 18.6')
        .replace(/VISUALS STUDIO V17/g, 'VISUALS STUDIO V18.6')
        .replace(/V17 Release Candidate/g, 'V18.6 Connected Studio')
        .replace(/V17 ·/g, 'V18.6 ·')
        .replace(/Release Candidate/g, 'Connected Studio')
        .replace(/Visual Editor Pro\+/g, 'Studio Editor')
        .replace(/Visual Editor/g, 'Studio Editor')
        .replace(/Editor Pro\+/g, 'Studio Editor Pro')
        .replace(/Canon Camera Center/g, 'Canon Quick Connect');
    } else if (node.nodeType === Node.ELEMENT_NODE && !['SCRIPT','STYLE'].includes(node.tagName)) {
      [...node.childNodes].forEach(replaceText);
    }
  };
  replaceText(document.body);

  const contact = document.querySelector('a[href^="mailto:"][href*="Visuals%20Studio%20Kontakt"]');
  if (contact) contact.href = 'mailto:Nicolas.Wegerer@web.de?subject=Visuals%20Studio%20Kontakt%20V18.6';

  const heroEyebrow = document.querySelector('.hero .eyebrow');
  if (heroEyebrow) heroEyebrow.textContent = 'VISUALS STUDIO V18.6 · MAC · IPHONE · IPAD · WIDGET';

  const heroLead = document.querySelector('.hero .lead');
  if (heroLead) heroLead.textContent = 'Creator Workflow, Studio Editor, Lightroom, Canon Quick Connect, DJI Media, iCloud/CloudKit, informative Widgets und Instagram Activity Center – als gemeinsames Connected Studio auf Mac, iPhone und iPad.';

  const sidebarEdit = [...document.querySelectorAll('.macbody aside span')].find((el) => el.textContent.trim() === 'Bearbeiten');
  if (sidebarEdit) sidebarEdit.textContent = 'Studio Editor';

  if (!document.getElementById('connected-v186-live')) {
    const section = document.createElement('section');
    section.id = 'connected-v186-live';
    section.className = 'new-v14 reveal visible';
    section.innerHTML = `
      <div class="section-heading">
        <div class="eyebrow">VISUALS STUDIO V18.6 · PRO WORKFLOW</div>
        <h2>Schneller verbinden.<br><span>Professioneller arbeiten.</span></h2>
        <p>V18.6 rückt die wichtigsten Werkzeuge nach vorne: Canon Quick Connect direkt im Studio, der neue Studio Editor, Cloud-Sync für iPhone und iPad sowie informative Widgets mit größenabhängigem Inhalt.</p>
      </div>
      <div class="new-grid">
        <article><b>CANON</b><h3>Canon Quick Connect</h3><p>Kamera auswählen, verbinden, Bilder übernehmen – in zwei klaren Schritten. Optimiert für EOS 5D Mark IV, EOS 6D/6D II, EOS 2000D-Familie und die EOS-R-Reihe.</p></article>
        <article><b>EDITOR</b><h3>Studio Editor</h3><p>Der bisherige Editor heißt jetzt Studio Editor – einheitlich auf iPhone, iPad, Mac und Website. Presets, Lightroom, Crops und Feinanpassungen bleiben im selben Workflow.</p></article>
        <article><b>ICLOUD</b><h3>Cloud Sync Test</h3><p>Backup auf dem iPhone hochladen, auf dem iPad laden und direkt prüfen, ob Presets oder Planer-Einträge über CloudKit angekommen sind.</p></article>
        <article><b>WIDGET</b><h3>Widgets nach Größe</h3><p>Small bleibt kompakt, Medium zeigt Inbox plus nächsten Post, Large zeigt Inbox, nächsten Content, Instagram-Status und Cloud-Verbindung. Sperrbildschirm-Widgets zeigen nur relevante Kurzinfos.</p></article>
        <article><b>DJI</b><h3>DJI Media Center</h3><p>Geführte Workflows über DJI Fly, DJI GO 4, DJI GO und DJI Mimo für Drohnen sowie Osmo Action/Pocket – anschließend direkter Import in Visuals Studio.</p></article>
        <article><b></b><h3>Apple Developer Program</h3><p>Visuals Studio nutzt CloudKit, App Groups, WidgetKit und APNs über das Apple Developer Program. Das Projekt ist unabhängig und wird nicht von Apple betrieben oder unterstützt.</p></article>
      </div>
      <p class="apple-dev-note"> Entwickelt mit Apple-Technologien über das Apple Developer Program. Visuals Studio ist ein unabhängiges Projekt und wird nicht von Apple, Canon, DJI, Meta oder Adobe betrieben oder unterstützt.</p>`;

    const target = document.getElementById('canon') || document.getElementById('faq') || document.querySelector('footer');
    if (target?.parentNode) target.parentNode.insertBefore(section, target);
  }

  const old = document.getElementById('connected-v182-live');
  if (old) old.remove();

  const style = document.createElement('style');
  style.textContent = `
    #connected-v186-live .new-grid article{min-height:230px}
    #connected-v186-live .new-grid article>b{display:inline-flex;min-height:30px;align-items:center;color:#b78cff;letter-spacing:.08em}
    #connected-v186-live .apple-dev-note{max-width:920px;margin:28px auto 0;padding:16px 18px;border:1px solid rgba(255,255,255,.08);border-radius:16px;background:rgba(255,255,255,.035);color:#858b98;font-size:12px;line-height:1.6;text-align:center}
    @media(max-width:650px){#connected-v186-live .new-grid article{min-height:0}}
  `;
  document.head.appendChild(style);
})();
