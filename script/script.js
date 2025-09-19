// Hero animation
window.addEventListener('load', ()=>{
  document.querySelector('.hero h1').style.opacity='1';
  document.querySelector('.hero h1').style.transform='translateY(0)';
  document.querySelector('.hero p').style.opacity='1';
  document.querySelector('.hero p').style.transform='translateY(0)';
  document.querySelector('.hero .btn-group').style.opacity='1';
  document.querySelector('.hero .btn-group').style.transform='translateY(0)';
});

// Fade-in scroll
const fadeElements = document.querySelectorAll('.card, .service, h2');
const fadeOnScroll = () => {
  const windowHeight = window.innerHeight;
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < windowHeight - 100){
      el.style.opacity = 1;
      el.style.transform = 'translateY(0) translateX(0)';
    }
  });
};
window.addEventListener('scroll', fadeOnScroll);
window.addEventListener('load', fadeOnScroll);

// Particles.js
particlesJS("particles-js", {
    particles: {
        number: { value: 50, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        move: { enable: true, speed: 1, direction: "none", out_mode: "out" }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        }
    },
    retina_detect: true
});
