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