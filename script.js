const animElements = document.querySelectorAll('.scroll-anim');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Opcional: solo animar una vez
    }
  });
}, { threshold: 0.1 });

animElements.forEach(el => observer.observe(el));
document.querySelectorAll('.card').forEach(card => {
  card.classList.add('scroll-anim');
});
// Agregar la clase a todas las tarjetas
document.querySelectorAll('.card').forEach(card => {
  card.classList.add('scroll-anim');
});

// Ahora activa el observer
const animElements = document.querySelectorAll('.scroll-anim');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

animElements.forEach(el => observer.observe(el));
