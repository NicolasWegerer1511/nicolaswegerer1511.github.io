const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals=document.querySelectorAll('.reveal');
if(reduced){reveals.forEach(el=>el.classList.add('visible'));}else{const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target);}}),{threshold:.12,rootMargin:'0px 0px -35px'});reveals.forEach(el=>io.observe(el));}

const menu=document.querySelector('.menu');
const links=document.querySelector('.links');
menu?.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));document.body.style.overflow=open?'hidden':'';});
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu?.setAttribute('aria-expanded','false');document.body.style.overflow='';}));
document.querySelectorAll('.navgroup>button').forEach(button=>button.addEventListener('click',()=>button.parentElement.classList.toggle('open')));

if(!reduced&&matchMedia('(pointer:fine)').matches){document.querySelectorAll('.tilt').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(1100px) rotateY(${x*5}deg) rotateX(${-y*4}deg) translateY(-3px)`;});card.addEventListener('pointerleave',()=>card.style.transform='');});}

const en={
 nav_services:'Services',nav_work:'Products',nav_process:'How we work',nav_about:'About NW',nav_contact:'Start a project',
 hero_kicker:'DIGITAL PRODUCTS · BUILT IN SENDEN',hero_title:'We build digital<br>tools. <em>Not decoration.</em>',hero_text:'Websites, apps and custom software that simplify processes, look professional and work in everyday business.',hero_cta:'Discuss a project',hero_more:'View our work',
 proof_1:'Custom developed',proof_2:'One direct contact',proof_3:'From idea to operation',ui_title:'Everything in one place.',
 services_kicker:'SERVICES',services_title:'One partner.<br><em>Four disciplines.</em>',services_intro:'Technology becomes valuable when it removes work. Every project starts with the real need — not with a standard package.',
 s1_title:'Websites & product pages',s1_text:'Fast, responsive websites with clear guidance, strong design and a clean technical foundation.',s2_title:'Apps & custom software',s2_text:'Purpose-built applications for Mac, iPhone, iPad and business workflows.',s3_title:'Digitisation & automation',s3_text:'Less duplicate work, clear data paths and digital processes that fit the company.',s4_title:'Support & continuous development',s4_text:'We stay involved after launch: maintenance, new functions, optimisation and support.',
 product_kicker:'OWN PRODUCT',product_title:'The complete creator workflow.<br><em>Built for Mac.</em>',product_text:'Visuals Studio 21.0 combines Capture, Library Pro, editing, planning, publishing, performance and support in one clear Mac app.',product_cta:'Discover the product',product_release:'Planned release · Late autumn 2026',
 process_kicker:'HOW WE WORK',process_title:'Clear process.<br><em>Strong result.</em>',process_intro:'Short paths, understandable decisions and visible progress from the first idea to the finished product.',p1_title:'Understand',p1_text:'Goal, users and bottlenecks are clarified together.',p2_title:'Design',p2_text:'Structure, design and functions become tangible.',p3_title:'Build',p3_text:'The solution is built cleanly, responsively and verifiably.',p4_title:'Evolve',p4_text:'Launch, support and meaningful next steps.',
 about_kicker:'ABOUT NW VISUALS',about_title:'Direct. Personal.<br><em>Technically clear.</em>',about_text:'NW Visuals is an owner-managed software and digital company based in Senden, Germany. We develop solutions that look great and make a measurable difference in daily use.',about_role:'Owner · NW Visuals',
 cta_kicker:'READY FOR THE NEXT STEP?',cta_title:'An idea becomes<br><em>a real product.</em>',cta_text:'Tell us briefly what you have in mind. The first conversation is direct and without obligation.',footer_claim:'Digital products that actually work.'
};
const de={};
document.querySelectorAll('[data-i18n]').forEach(el=>de[el.dataset.i18n]=el.textContent);
document.querySelectorAll('[data-i18n-html]').forEach(el=>de[el.dataset.i18nHtml]=el.innerHTML);
function setLanguage(lang){const dict=lang==='en'?en:de;document.documentElement.lang=lang;document.querySelectorAll('[data-i18n]').forEach(el=>{const value=dict[el.dataset.i18n];if(value)el.textContent=value;});document.querySelectorAll('[data-i18n-html]').forEach(el=>{const value=dict[el.dataset.i18nHtml];if(value)el.innerHTML=value;});document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));localStorage.setItem('nw-language',lang);}
document.querySelectorAll('.lang button').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.lang)));
setLanguage(localStorage.getItem('nw-language')==='en'?'en':'de');
