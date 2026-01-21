// MODULO 1 TAB

function openPage(pageName, elmnt, color) {
  // Ocultar todos los paneles
  const panels = document.getElementsByClassName('tabs__panel');
  for (let i = 0; i < panels.length; i++) {
    panels[i].classList.remove('tabs__panel--active');
  }

  // Remover clase activa de todos los botones
  const buttons = document.getElementsByClassName('tabs__link');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = '';
  }

  // Mostrar el panel seleccionado
  const selectedPanel = document.getElementById(pageName);
  if (selectedPanel) {
    selectedPanel.classList.add('tabs__panel--active');
  }

  // Marcar el botón como activo
  elmnt.style.backgroundColor = color;
}

// Abrir la pestaña por defecto al cargar
document.addEventListener('DOMContentLoaded', function() {
  const defaultOpen = document.getElementById('defaultOpen');
  if (defaultOpen) {
    openPage('News', defaultOpen, 'green');
  }
});

// MODULO 2 SLIDESHOW

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slideshow__slide");
  let dots = document.getElementsByClassName("slideshow__dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("slideshow__dot--active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("slideshow__dot--active");
}