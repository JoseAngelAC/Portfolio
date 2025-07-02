// Mostrar mensaje en consola
console.log("¡Bienvenido al portafolio de Tu Nombre!");

// Animar secciones al hacer scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Cambiar entre modo claro/oscuro
const themeBtn = document.createElement('button');
themeBtn.innerText = '🌙 Modo oscuro';
themeBtn.classList.add('toggle-theme');
document.body.appendChild(themeBtn);

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeBtn.innerText = document.body.classList.contains('dark') ? '☀️ Modo claro' : '🌙 Modo oscuro';
});
