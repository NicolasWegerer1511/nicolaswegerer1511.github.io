(() => {
  const installStudioBranding = () => {
    document.querySelectorAll('img[src="nw-visuals-logo-v2.webp"]').forEach(img=>{
      img.src='visuals-studio-brand.webp';
      img.alt='Visuals Studio';
      img.classList.add('visuals-studio-brand');
    });

    const navlinks=document.querySelector('.navlinks');
    if(navlinks&&!navlinks.querySelector('.studio-home-link')){
      const home=document.createElement('a');
      home.className='studio-home-link';
      home.href='/';
      home.innerHTML='<span aria-hidden="true">⌂</span> Home';
      navlinks.prepend(home);
    }

    const heroCopy=document.querySelector('.hero-copy');
    if(heroCopy&&!heroCopy.querySelector('.studio-hero-logo')){
      const logo=document.createElement('img');
      logo.className='studio-hero-logo';
      logo.src='visuals-studio-brand.webp';
      logo.alt='Visuals Studio';
      heroCopy.prepend(logo);
    }

    if(!document.querySelector('.nw-back-to-company')){
      const link=document.createElement('a');
      link.className='nw-back-to-company';
      link.href='/';
      link.setAttribute('aria-label','Zurück zur NW Visuals Hauptseite');
      link.innerHTML='<span aria-hidden="true">⌂</span><b>Home</b>';
      document.body.appendChild(link);
    }

    if(!document.getElementById('studio-metal-branding')){
      const style=document.createElement('style');
      style.id='studio-metal-branding';
      style.textContent=`
        :root{--purple:#d3d8df;--blue:#a9b5c5}
        body{background:radial-gradient(circle at 72% 12%,rgba(178,188,201,.09),transparent 28%),#05060a}
        .brand img.visuals-studio-brand{width:188px;height:58px;object-fit:contain;object-position:left center;filter:drop-shadow(0 7px 18px rgba(0,0,0,.4))}
        .studio-home-link{display:inline-flex!important;align-items:center;gap:6px;color:#f5f5f7!important}.studio-home-link span{font-size:16px;color:#cfd5dd}
        .studio-hero-logo{display:block;width:min(390px,92%);height:auto;margin:0 0 18px;filter:drop-shadow(0 20px 38px rgba(0,0,0,.48))}
        h1 span,.section-title h2 span,.camera-copy h2 span{background:linear-gradient(100deg,#fafbfc,#d2d7de 55%,#95a2b2);-webkit-background-clip:text;color:transparent}
        .nav-cta{border-color:#444c58;background:#d6dce20c;color:#eef1f5!important}
        .button.primary{background:linear-gradient(110deg,#f7f8fa,#b5beca);color:#07080b}.button.primary:hover{background:linear-gradient(110deg,#fff,#c8d0da)}
        .release{border-color:#424a56;background:#ffffff04}.release i{background:#8fd8b5;box-shadow:0 0 15px #8fd8b5}
        .glow{background:radial-gradient(ellipse,rgba(182,190,201,.16),transparent 66%)}
        .nw-back-to-company{position:fixed;left:18px;bottom:18px;z-index:2500;display:inline-flex;align-items:center;gap:9px;min-height:44px;padding:0 16px;border:1px solid rgba(255,255,255,.17);border-radius:999px;background:rgba(11,13,19,.9);color:#f5f5f7;text-decoration:none;font:700 12px/1 -apple-system,BlinkMacSystemFont,"SF Pro Display","Segoe UI",sans-serif;box-shadow:0 14px 40px rgba(0,0,0,.4);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);transition:.2s}
        .nw-back-to-company:hover{transform:translateY(-2px);border-color:rgba(210,216,224,.55);background:rgba(25,28,34,.96)}
        .nw-back-to-company span{display:grid;place-items:center;width:24px;height:24px;border-radius:50%;background:rgba(214,220,228,.10);color:#eef1f5;font-size:15px}
        footer img.visuals-studio-brand{width:210px;max-width:100%;height:auto;object-fit:contain;object-position:left center}
        @media(max-width:720px){.brand img.visuals-studio-brand{width:154px;height:50px}.studio-hero-logo{width:min(320px,92%);margin-bottom:14px}.nw-back-to-company{left:12px;bottom:12px;min-height:42px;padding:0 13px;font-size:11px}.nw-back-to-company span{width:22px;height:22px}.studio-home-link{order:-10}}
      `;
      document.head.appendChild(style);
    }
  };

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',installStudioBranding,{once:true});
  else installStudioBranding();

  const core=document.createElement('script');
  core.src='script-core.js?v=210-full';
  core.defer=true;
  document.head.appendChild(core);
})();
