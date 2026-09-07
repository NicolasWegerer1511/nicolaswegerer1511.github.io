const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems=document.querySelectorAll('.reveal');
if(reduceMotion){revealItems.forEach(el=>el.classList.add('visible'));}else{const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target);}}),{threshold:.1,rootMargin:'0px 0px -25px'});revealItems.forEach(el=>io.observe(el));}
const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.navlinks');
function closeMenu(){nav?.classList.remove('mobile-open');menu?.setAttribute('aria-expanded','false');document.body.style.overflow='';}
menu?.addEventListener('click',()=>{const open=!nav.classList.contains('mobile-open');nav.classList.toggle('mobile-open',open);menu.setAttribute('aria-expanded',String(open));document.body.style.overflow=open?'hidden':'';});
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
addEventListener('resize',()=>{if(innerWidth>720)closeMenu();},{passive:true});

function installNWVisualsBranding(){
  document.querySelectorAll('a.brand').forEach(link=>{
    link.classList.add('brand-image');
    link.innerHTML='<img src="nw-visuals-brand.webp" alt="NW Visuals">';
  });

  const aboutWord=document.querySelector('.about-word');
  if(aboutWord){
    aboutWord.classList.add('about-logo-panel');
    aboutWord.innerHTML='<img src="nw-visuals-brand.webp" alt="NW Visuals">';
  }

  const projectCopy=document.querySelector('.project-copy');
  if(projectCopy&&!projectCopy.querySelector('.nw-project-logo')){
    const logo=document.createElement('img');
    logo.className='nw-project-logo';
    logo.src='projects/visuals-studio/visuals-studio-brand-dark.webp?v=vs-original-2';
    logo.alt='Visuals Studio';
    const status=projectCopy.querySelector('.project-status');
    status?.insertAdjacentElement('afterend',logo);
  }

  if(!document.getElementById('nw-metal-branding')){
    const style=document.createElement('style');
    style.id='nw-metal-branding';
    style.textContent=`
      :root{--purple:#cfd4dc;--blue:#a9b4c3;--cyan:#dfe4ea}
      .a1{background:#7e8795;opacity:.10}.a2{background:#b5c0cd;opacity:.07}
      .brand.brand-image{display:flex;align-items:center;gap:0;min-width:174px}
      .brand-image img{display:block;width:176px;height:52px;object-fit:contain;object-position:left center;filter:drop-shadow(0 8px 18px rgba(0,0,0,.35))}
      .hero h1 span,.section-head h2 span,.target h2 span,.about-copy h2 span,.contact h2 span,.partner-head h2 span,.project-copy h3 span{background:linear-gradient(100deg,#f8f9fb 0%,#c8ced7 48%,#8f9baa 100%);-webkit-background-clip:text;color:transparent}
      .eyebrow i{background:linear-gradient(90deg,#eef1f5,#8896a8)}
      .button.primary{background:linear-gradient(105deg,#f3f5f7,#9ca8b7);color:#090c12;box-shadow:0 13px 40px rgba(165,175,190,.17)}
      .button.primary:hover{box-shadow:0 18px 50px rgba(190,200,214,.23)}
      .service.featured{border-color:#49515d;background:linear-gradient(145deg,rgba(42,47,55,.78),rgba(11,16,24,.97))}
      .service:before{background:#a9b2bf}.service-icon{color:#d7dbe1}.service-icon.web i{background:#dfe3e8}.service-icon.web i:nth-child(2){background:#aeb8c5}.service-icon.web i:last-child{background:#7f8c9c}.service li:before,.solution-list article>b,.process-grid article>div{color:#bfc6d0}
      .project-showcase{border-color:#3f4651;background:radial-gradient(circle at 82% 20%,rgba(186,198,212,.12),transparent 30%),radial-gradient(circle at 15% 85%,rgba(115,125,140,.16),transparent 36%),linear-gradient(145deg,#11161e,#090d13)}
      .project-visual:before{background:radial-gradient(circle,rgba(190,198,209,.18),rgba(122,136,153,.08) 50%,transparent 70%)}
      .nw-project-logo{display:block;width:min(430px,100%);height:auto;margin:18px 0 24px;filter:drop-shadow(0 16px 34px rgba(0,0,0,.5))}
      .project-copy h3{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}
      .about-logo-panel{padding:38px;display:grid;place-items:center;-webkit-text-stroke:0!important}
      .about-logo-panel:after{background:#9ca6b3;opacity:.10}
      .about-logo-panel img{position:relative;z-index:2;width:min(390px,94%);height:auto;filter:drop-shadow(0 22px 45px rgba(0,0,0,.45))}
      .signature>i{background:linear-gradient(135deg,#d9dde3,#808c9d);color:#0a0d12}
      .ticker i{color:#b8c0cb}
      @media(max-width:720px){.brand.brand-image{min-width:145px}.brand-image img{width:145px;height:46px}.nw-project-logo{width:min(360px,100%);margin-top:16px}.about-logo-panel{min-height:240px;padding:24px}.about-logo-panel img{width:min(310px,96%)}}
    `;
    document.head.appendChild(style);
  }
}

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',installNWVisualsBranding,{once:true});
else installNWVisualsBranding();
