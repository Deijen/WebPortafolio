/**
 * 
 * 
// Variables para controlar el desplazamiento
let currentIndex = 0; // Índice actual de la posición
const slideHeight = 300; // Altura de cada slide en píxeles

// Seleccionar elementos
const slideLeft = document.querySelector('.slide-left');
const slideRight = document.querySelector('.slide-right');
const arrowUp = document.getElementById('arrow-up');
const arrowDown = document.getElementById('arrow-down');

// Función para desplazar las slides
function moveSlides(direction) {
    const slidesCount = document.querySelectorAll('.slide-left .slide').length; // Total de slides
    const maxIndex = slidesCount - 1;

    if (direction === 'up') {
        currentIndex = Math.max(0, currentIndex - 1); // No exceder el límite superior
    } else if (direction === 'down') {
        currentIndex = Math.min(maxIndex, currentIndex + 1); // No exceder el límite inferior
    }

    // Desplazar las slides
    const offset = -currentIndex * slideHeight; // Calcular el desplazamiento
    slideLeft.style.transform = `translateY(${offset}px)`;
    slideRight.style.transform = `translateY(${offset}px)`;
}

// Añadir eventos a los botones
arrowUp.addEventListener('click', () => moveSlides('up'));
arrowDown.addEventListener('click', () => moveSlides('down'));
 */