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

// Visuals Studio V18.2 live website augmentation.
(() => {
  document.querySelectorAll('.eyebrow').forEach((el) => {
    el.textContent = el.textContent
      .replace(/VISUALS STUDIO V17/g, 'VISUALS STUDIO V18.2')
      .replace(/V17 ·/g, 'V18.2 ·');
  });

  const releaseLink = [...document.querySelectorAll('.dropdown b')].find((el) => el.textContent.includes('V17 Release Candidate'));
  if (releaseLink) releaseLink.textContent = 'V18.2 Connected Studio';

  const contact = document.querySelector('a[href^="mailto:"][href*="Visuals%20Studio%20Kontakt"]');
  if (contact) contact.href = 'mailto:Nicolas.Wegerer@web.de?subject=Visuals%20Studio%20Kontakt%20V18.2';

  const heroEyebrow = document.querySelector('.hero .eyebrow');
  if (heroEyebrow) heroEyebrow.textContent = 'VISUALS STUDIO V18.2 · MAC · IPHONE · IPAD · WIDGET';

  const heroLead = document.querySelector('.hero .lead');
  if (heroLead) heroLead.textContent = 'Creator Workflow, Visual Editor, Lightroom, Canon Camera Center, DJI Media Center, iCloud/CloudKit, Widgets und Instagram Activity Center – als gemeinsames Connected Studio auf Mac, iPhone und iPad.';

  if (!document.getElementById('connected-v182-live')) {
    const section = document.createElement('section');
    section.id = 'connected-v182-live';
    section.className = 'new-v14 reveal visible';
    section.innerHTML = `
      <div class="section-heading">
        <div class="eyebrow">VISUALS STUDIO V18.2 · CONNECTED STUDIO</div>
        <h2>Ein Studio.<br><span>Alle Geräte. Alle Medien.</span></h2>
        <p>V18.2 verbindet den Creator Workflow jetzt mit iCloud, Widgets sowie neuen geführten Canon- und DJI-Verbindungszentren.</p>
      </div>
      <div class="new-grid">
        <article><b></b><h3>Apple Developer Program</h3><p>Die Entwicklung nutzt das Apple Developer Program mit CloudKit, App Groups, WidgetKit und APNs-Vorbereitung. Das ermöglicht private iCloud-Synchronisierung, gemeinsame Widget-Daten und die technische Grundlage für Push Notifications.</p></article>
        <article><b>WIDGET</b><h3>Visuals Studio Widgets</h3><p>Small, Medium, Large und Sperrbildschirm: je nach Größe mit ungelesenen Instagram-Aktivitäten, Studio-Status, nächstem geplanten Post und letztem Refresh.</p></article>
        <article><b>CANON</b><h3>Canon Camera Center</h3><p>Geführter Workflow für EOS 5D Mark IV, EOS 6D/6D II, EOS 2000D-Familie und die EOS-R-Reihe. Kamera auswählen, Hersteller-Verbindung nutzen, Medien importieren und direkt im Editor weiterarbeiten.</p></article>
        <article><b>DJI</b><h3>DJI Media Center</h3><p>Geführte Workflows über DJI Fly, DJI GO 4, DJI GO und DJI Mimo für aktuelle und ältere Drohnen sowie Osmo Action/Pocket-Geräte – anschließend direkter Import in Visuals Studio.</p></article>
        <article><b>ICLOUD</b><h3>CloudKit Sync</h3><p>Planer, Entwürfe, gespeicherte Personen und eigene Presets können über die private iCloud-Datenbank zwischen den Visuals-Studio-Geräten synchronisiert werden.</p></article>
        <article><b>PUSH</b><h3>Push Ready</h3><p>APNs ist als Apple-Push-Grundlage vorgesehen. Für echte Instagram-Ereignisse im Sperrbildschirm folgt die Serverkette Meta Webhook → HTTPS → APNs.</p></article>
      </div>
      <p class="apple-dev-note"> Entwickelt mit Apple-Technologien über das Apple Developer Program. Visuals Studio ist ein unabhängiges Projekt und wird nicht von Apple, Canon, DJI, Meta oder Adobe betrieben oder unterstützt.</p>`;

    const canon = document.getElementById('canon');
    const target = canon || document.getElementById('faq') || document.querySelector('footer');
    if (target?.parentNode) target.parentNode.insertBefore(section, target);
  }

  const style = document.createElement('style');
  style.textContent = `
    #connected-v182-live .new-grid article{min-height:230px}
    #connected-v182-live .new-grid article>b{display:inline-flex;min-height:30px;align-items:center;color:#b78cff;letter-spacing:.08em}
    #connected-v182-live .apple-dev-note{max-width:920px;margin:28px auto 0;padding:16px 18px;border:1px solid rgba(255,255,255,.08);border-radius:16px;background:rgba(255,255,255,.035);color:#858b98;font-size:12px;line-height:1.6;text-align:center}
    @media(max-width:650px){#connected-v182-live .new-grid article{min-height:0}}
  `;
  document.head.appendChild(style);
})();
