const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals=document.querySelectorAll('.reveal');
if(reduced){reveals.forEach(el=>el.classList.add('visible'));}else{const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12,rootMargin:'0px 0px -30px'});reveals.forEach(el=>observer.observe(el));}

const menu=document.querySelector('.menu'),links=document.querySelector('.links');
menu?.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));document.body.style.overflow=open?'hidden':'';});
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu?.setAttribute('aria-expanded','false');document.body.style.overflow='';}));

const stepData={
  de:{
    project:{eyebrow:'PROJEKTE · DIREKTER WORKFLOW',title:'Projekt anlegen. Direkt loslegen.',text:'Ein neues oder vorhandenes Projekt öffnet die zentrale Mediathek und legt Originale, Bearbeitungen und Exporte klar getrennt ab.',list:['Projektordner frei wählen oder öffnen','Relative Projektdatei für Backups','Aktives Projekt jederzeit sichtbar']},
    import:{eyebrow:'APPLE FOTOS · DATEIEN · CANON · DJI',title:'Originale direkt ins Projekt.',text:'Importiere mehrere Medien aus Apple Fotos und iCloud, lokalen Ordnern, Canon oder DJI. Originalqualität und Metadaten bleiben erhalten.',list:['Apple-Fotos-Alben und iCloud-Originale','Dateien, Ordner und gemountete Laufwerke','Duplikate automatisch überspringen']},
    create:{eyebrow:'CREATE · BEARBEITUNGEN · EXPORTE',title:'Bearbeiten. Sichern. Exportieren.',text:'Ein Klick öffnet ein Projektbild in Create. Bearbeitungen und Exporte landen automatisch in ihren eigenen Projektordnern.',list:['Echtzeit-Editor und eigene Presets','Bearbeitete Versionen getrennt sichern','Export ohne zusätzlichen Dateidialog']}
  },
  en:{
    project:{eyebrow:'PROJECTS · DIRECT WORKFLOW',title:'Create a project. Start immediately.',text:'A new or existing project opens the central media view and keeps originals, edits and exports clearly separated.',list:['Choose or open any project folder','Relative project file for backups','Active project always visible']},
    import:{eyebrow:'APPLE PHOTOS · FILES · CANON · DJI',title:'Originals straight into the project.',text:'Import multiple items from Apple Photos and iCloud, local folders, Canon or DJI while preserving original quality and metadata.',list:['Apple Photos albums and iCloud originals','Files, folders and mounted drives','Automatically skip duplicates']},
    create:{eyebrow:'CREATE · EDITS · EXPORTS',title:'Edit. Save. Export.',text:'One click opens project media in Create. Edits and exports are stored automatically in their dedicated project folders.',list:['Real-time editor and custom presets','Save edited versions separately','Export without another file dialog']}
  }
};
let currentLang=localStorage.getItem('nw-language')==='en'?'en':'de';
let currentStep='project';
function renderStep(){const d=stepData[currentLang][currentStep];document.querySelector('#stepEyebrow').textContent=d.eyebrow;document.querySelector('#stepTitle').textContent=d.title;document.querySelector('#stepText').textContent=d.text;document.querySelector('#stepList').innerHTML=d.list.map(x=>`<li>${x}</li>`).join('');}
document.querySelectorAll('.tabs button').forEach(button=>button.addEventListener('click',()=>{currentStep=button.dataset.step;document.querySelectorAll('.tabs button').forEach(b=>b.classList.toggle('active',b===button));renderStep();}));

const en={
  home:'NW Visuals',workflow:'Workflow',features:'Features',integrations:'Integrations',roadmap:'Roadmap',store:'App Store info',
  badge:'MAC APP · VERSION 22.6.0 · BUILD 2260',hero_title:'One project.<br><em>Everything in flow.</em>',hero_text:'Create a project, bring in originals from Apple Photos, local folders, Canon or DJI, edit in Create and export cleanly into the project folder.',discover:'Explore 22.6.0',availability:'AVAILABILITY',release:'Planned release · Late autumn 2026',only_store:'Later available exclusively through Apple’s App Stores',
  side_projects:'Projects',side_photos:'Apple Photos',source_mix:'APPLE PHOTOS · CANON · DJI',rail_projects:'PROJECTS',rail_photos:'APPLE PHOTOS',rail_local:'LOCAL MEDIA',rail_exports:'EXPORTS',opened:'Open',media_count:'24 media items',before:'BEFORE',after:'AFTER',light:'Light',project_library:'PROJECT MEDIA',account_eyebrow:'ACCOUNT · FIRST LAUNCH',folder_structure:'PROJECT · FOLDER STRUCTURE',apple_photos:'Apple Photos',legal_imprint:'Legal notice',legal_privacy:'Privacy',legal_terms:'Terms of use',legal_deletion:'Data deletion',active_project:'ACTIVE PROJECT',new_project:'+ New project',originals:'ORIGINALS',quality:'Original quality',edits:'EDITS',non_destructive:'stored separately',exports:'EXPORTS',ready:'ready',continue:'CONTINUE',project_media:'Canon · 24 project items',imported:'24 originals imported',project_status:'PROJECT STATUS',secured:'Saved',
  wf_title:'Three steps.<br><em>One direct project flow.</em>',wf_intro:'Visuals Studio 22.6.0 keeps originals, edits and exports automatically separated — from the first import to the finished file.',tab_project:'01 Project',tab_import:'02 Import',tab_create:'03 Create & Export',
  f_title:'Fewer detours.<br><em>More project flow.</em>',f_intro:'The essential tools connect directly and store every stage in the right place.',
  editor_title:'Your look. Instantly visible.',editor_text:'Smart Enhance, cropping, precise tonal controls, 14 built-in looks and custom presets. Edits are stored separately from the original.',
  library_title:'All project media at a glance.',library_text:'Fast preview grids, search and sorting take you straight into Create with one click.',planned:'Originals, edits and exports are counted separately.',
  account_title:'Start locally. Account optional.',account_text:'Core features work without an account. An NW Visuals account adds optional cloud and device features. Pro purchases will only be enabled with complete StoreKit 2 integration.',
  deliver_title:'Originals remain originals.',deliver_text:'Imports, edits and exports are stored automatically in separate project folders. Existing files are never overwritten.',folder_originals:'Originals',folder_edits:'Edits',folder_exports:'Exports',
  i_title:'Connected directly<br><em>to your project.</em>',i_intro:'Every integration is described according to its actually implemented state.',
  apple_text:'Browse albums and iCloud Photos, select multiple originals and import them with metadata directly into the active project.',
  canon_text:'USB detection, model display and EDSDK session; media from camera or card folders is imported directly into Originals.',
  dji_text:'Import files or complete mounted drives; DCIM and subfolders are scanned while duplicates are skipped.',
  lr_text:'Open an image in Lightroom or Lightroom Classic and bring the export back into the editor.',
  ig_text:'Planning, publishing and available insights through the configured Meta connection.',
  r_title:'Included today.<br><em>Planned next.</em>',current:'In the current build',next:'Still in development',
  c1:'Direct project workflow for new and existing projects',c2:'Automatic folders for originals, edits and exports',c3:'Apple Photos, file, Canon and DJI imports into the active project',c4:'Preview grid, search, sorting and direct launch into Create',c5:'Original quality, metadata and duplicate protection',
  n1:'Library Pro ratings, favourites and albums',n2:'Metadata, collections and fast filters',n3:'Production StoreKit billing',n4:'Complete live sync of all studio content',n5:'Extended direct camera image transfer',
  av_title:'Planned release: Late autumn 2026.',av_text:'The Mac app is the complete studio. iPhone and iPad are planned as mobile companions. There is no public direct download.',planned_for:'PLANNED FOR',footer:'Project, Create and Export for Mac.'
};
const de={};document.querySelectorAll('[data-t]').forEach(el=>de[el.dataset.t]=el.textContent);document.querySelectorAll('[data-th]').forEach(el=>de[el.dataset.th]=el.innerHTML);
function setLanguage(lang){currentLang=lang;const dict=lang==='en'?en:de;document.documentElement.lang=lang;document.querySelectorAll('[data-t]').forEach(el=>{if(dict[el.dataset.t])el.textContent=dict[el.dataset.t];});document.querySelectorAll('[data-th]').forEach(el=>{if(dict[el.dataset.th])el.innerHTML=dict[el.dataset.th];});document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));localStorage.setItem('nw-language',lang);renderStep();}
document.querySelectorAll('.lang button').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.lang)));
setLanguage(currentLang);
