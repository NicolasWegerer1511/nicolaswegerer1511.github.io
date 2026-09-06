(() => {
  const addBackButton = () => {
    if (document.querySelector('.nw-back-to-company')) return;
    const link = document.createElement('a');
    link.className = 'nw-back-to-company';
    link.href = '/';
    link.setAttribute('aria-label', 'Zurück zur NW Visuals Hauptseite');
    link.innerHTML = '<span aria-hidden="true">←</span><b>Zurück zu NW Visuals</b>';
    document.body.appendChild(link);

    const style = document.createElement('style');
    style.textContent = `
      .nw-back-to-company{position:fixed;left:18px;bottom:18px;z-index:2500;display:inline-flex;align-items:center;gap:9px;min-height:44px;padding:0 16px;border:1px solid rgba(255,255,255,.16);border-radius:999px;background:rgba(11,13,19,.86);color:#f5f5f7;text-decoration:none;font:700 12px/1 -apple-system,BlinkMacSystemFont,"SF Pro Display","Segoe UI",sans-serif;letter-spacing:.01em;box-shadow:0 14px 40px rgba(0,0,0,.38);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);transition:transform .2s ease,border-color .2s ease,background .2s ease}
      .nw-back-to-company:hover{transform:translateY(-2px);border-color:rgba(167,122,255,.65);background:rgba(25,22,36,.94)}
      .nw-back-to-company span{display:grid;place-items:center;width:24px;height:24px;border-radius:50%;background:rgba(167,122,255,.14);color:#c9adff;font-size:15px}
      @media(max-width:720px){.nw-back-to-company{left:12px;bottom:12px;min-height:42px;padding:0 13px;font-size:11px}.nw-back-to-company span{width:22px;height:22px}}
    `;
    document.head.appendChild(style);
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addBackButton, {once:true});
  else addBackButton();

  const core = document.createElement('script');
  core.src = 'script-core.js?v=203-full';
  core.defer = true;
  document.head.appendChild(core);
})();
