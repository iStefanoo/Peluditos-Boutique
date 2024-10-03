document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los desplegables de talla
    const sizeSelectors = document.querySelectorAll('.size-select');

    sizeSelectors.forEach(function(select) {
        // Agrega un event listener al cambio de talla
        select.addEventListener('change', function() {
            // Selecciona el contenedor del precio y la talla seleccionada
            const priceContainer = this.closest('.card-product').querySelector('.price');
            const basePrice = parseFloat(priceContainer.getAttribute('data-base-price'));
            const selectedOption = this.options[this.selectedIndex];
            const priceIncrement = parseFloat(selectedOption.getAttribute('data-price-increment'));

            // Calcula el nuevo precio
            const newPrice = basePrice + priceIncrement;
            priceContainer.textContent = `${newPrice}€`;
        });
    });
});



const hamburgerMenu = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');

hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cerrar el menú al hacer clic fuera de él
document.addEventListener('click', (event) => {
    // Verifica si el clic fue fuera del menú y del botón de hamburguesa
    if (!navMenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        navMenu.classList.remove('active'); // Cierra el menú
    }
});



let currentSlide = 0;

function changeSlide(direction) {
    const sliderImages = document.querySelector('.slider-images');
    const totalImages = document.querySelectorAll('.slider-image').length;

    currentSlide += direction;

    if (currentSlide >= totalImages) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalImages - 1;
    }

    const offset = -currentSlide * 100;
    sliderImages.style.transform = `translateX(${offset}%)`;
}

