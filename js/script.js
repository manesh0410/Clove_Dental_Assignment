// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
  const open = mobileNav.style.display === 'block';
  mobileNav.style.display = open ? 'none' : 'block';
  hamburger.classList.toggle('open', !open);
});

// Smooth scroll for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
    // close mobile nav if open
    if(window.innerWidth < 992) mobileNav.style.display = 'none';
  })
});

// Form handling - lead form
document.getElementById('leadForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = this.name.value.trim();
  const phone = this.phone.value.trim();
  const agree = document.getElementById('agree').checked;
  if(!name || !phone || !agree){
    alert('Please fill name, phone and accept terms.');
    return;
  }
  // Simple success simulation
  this.reset();
  alert('Thanks! Your appointment request has been submitted. We will call you shortly.');
});

// small mini form
document.getElementById('miniForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thanks! We will contact you.');
  this.reset();
});

// marquee pause on hover
const statsTrack = document.getElementById('statsTrack');
if(statsTrack){
  statsTrack.addEventListener('mouseenter', ()=> statsTrack.style.animationPlayState = 'paused');
  statsTrack.addEventListener('mouseleave', ()=> statsTrack.style.animationPlayState = 'running');
}

// Patient grid scroll buttons
const grid = document.getElementById('patientGrid');
document.getElementById('scrollLeft').addEventListener('click', ()=> grid.scrollBy({left:-260, behavior:'smooth'}));
document.getElementById('scrollRight').addEventListener('click', ()=> grid.scrollBy({left:260, behavior:'smooth'}));

// Accordion logic (Why choose us) — only one open at a time + image swap
document.querySelectorAll('.accordion-item').forEach(item=>{
  const header = item.querySelector('.accordion-header');
  const body = item.querySelector('.accordion-body');

  header.addEventListener('click', () => {
    // close others
    document.querySelectorAll('.accordion-item').forEach(it=>{
      if(it !== item) it.classList.remove('open');
    });

    // toggle this
    item.classList.toggle('open');

    // update body height for animation
    if(item.classList.contains('open')){
      body.style.height = body.scrollHeight + 'px';
      // swap image
      const src = header.dataset.image;
      const dyn = document.getElementById('dynamicImage');
      if(src && dyn) dyn.src = src;
    } else {
      body.style.height = '0';
    }
  });

  // ensure closed by default
  body.style.height = '0';
});

// FAQ expand simple toggle
document.querySelectorAll('.faq-item').forEach(el=>{
  el.addEventListener('click', ()=> {
    el.classList.toggle('open');
    // simple visual toggle - we don't show extra text here, just indicate open
    if(el.classList.contains('open')){
      el.style.borderColor = 'var(--orange)';
    } else {
      el.style.borderColor = '#eee';
    }
  })
});

// Back to top
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', ()=>{
  if(window.scrollY > 450) backTop.style.display = 'block'; else backTop.style.display = 'none';
});
backTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

// Accessibility: close mobile nav on resize to desktop
window.addEventListener('resize', ()=>{
  if(window.innerWidth >= 992){
    mobileNav.style.display = 'none';
  }
});
