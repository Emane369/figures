
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
