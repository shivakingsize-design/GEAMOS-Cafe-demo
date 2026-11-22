// Mobile navigation
const toggle=document.querySelector('.menu-toggle'),links=document.getElementById('links');
toggle.addEventListener('click',()=>{const o=links.classList.toggle('open');toggle.setAttribute('aria-expanded',o);});
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');toggle.setAttribute('aria-expanded',false);}));

// Header border on scroll
const hdr=document.querySelector('header');
addEventListener('scroll',()=>hdr.classList.toggle('scrolled',scrollY>10),{passive:true});

// Menu tabs
const tabs=document.querySelectorAll('.tab');
tabs.forEach(t=>t.addEventListener('click',()=>{
  tabs.forEach(x=>x.setAttribute('aria-selected',x===t));
  document.querySelectorAll('.panel').forEach(p=>p.classList.toggle('active',p.id===t.getAttribute('aria-controls')));
}));

// Reveal on scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
