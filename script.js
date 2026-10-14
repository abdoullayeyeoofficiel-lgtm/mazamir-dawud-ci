/* ===== MAZÂMÎR DÂWÛD CI · script.js ===== */

// Année auto dans le footer
document.querySelectorAll('#year').forEach(e=>e.textContent=new Date().getFullYear());

// Menu mobile
const burger=document.getElementById('burger');
const nav=document.getElementById('nav');
if(burger){burger.addEventListener('click',()=>{nav.classList.toggle('open');burger.textContent=nav.classList.contains('open')?'✕':'☰';});}
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{if(nav)nav.classList.remove('open');if(burger)burger.textContent='☰';}));

// Reveal au scroll
const io=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}});
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// FAQ accordéon
document.querySelectorAll('.faq-q').forEach(q=>{
  q.addEventListener('click',()=>{
    const item=q.parentElement;
    document.querySelectorAll('.faq-item').forEach(i=>{if(i!==item)i.classList.remove('open');});
    item.classList.toggle('open');
  });
});

// Newsletter (démo)
document.querySelectorAll('.newsletter-form').forEach(f=>{
  f.addEventListener('submit',e=>{
    e.preventDefault();
    const inp=f.querySelector('input');
    if(inp.value){alert('JazâkAllâhu khayran ! Vous êtes bien inscrit(e) : '+inp.value);inp.value='';}
  });
});

// Partage social
document.querySelectorAll('[data-share]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const url=encodeURIComponent(window.location.href);
    const txt=encodeURIComponent(document.title);
    const type=btn.dataset.share;
    let link='';
    if(type==='fb')link=`https://www.facebook.com/sharer/sharer.php?u=${url}`;
    if(type==='wa')link=`https://wa.me/?text=${txt}%20${url}`;
    if(type==='tw')link=`https://twitter.com/intent/tweet?text=${txt}&url=${url}`;
    window.open(link,'_blank','width=600,height=500');
  });
});

// Header shrink au scroll
window.addEventListener('scroll',()=>{
  const h=document.querySelector('.header');
  if(h)h.style.boxShadow=window.scrollY>20?'0 8px 30px rgba(11,110,79,.12)':'none';
});