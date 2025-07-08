function buscarFigura() {
  const input = document.getElementById('buscar').value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const nombre = card.querySelector('h3').textContent.toLowerCase();
    const esDestacada = card.classList.contains('destacada');

    if (esDestacada || nombre.includes(input)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function filtrar(categoria) {
  const cards = document.querySelectorAll('.card');
  const terminoBusqueda = document.getElementById('buscar').value.toLowerCase();

  cards.forEach(card => {
    const nombre = card.querySelector('h3').textContent.toLowerCase();
    const coincideBusqueda = nombre.includes(terminoBusqueda);
    const coincideCategoria = categoria === 'todos' || card.classList.contains(categoria);
    const esDestacada = card.classList.contains('destacada');

    if (esDestacada || (coincideBusqueda && coincideCategoria)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

