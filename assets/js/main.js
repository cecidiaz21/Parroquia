// Main JS for index and donaciones
document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.menu-toggle');
  const links=document.querySelector('.nav .links');
  if(toggle){toggle.addEventListener('click',()=>{links.style.display = (links.style.display === 'flex') ? 'none' : 'flex';});}

  // Simple contact form handler (no backend)
  const contactForm=document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit',(e)=>{
      e.preventDefault();
      alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
      contactForm.reset();
    });
  }
});
