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



function changeImage(thumbnail) {
    // Encuentra el contenedor principal (la tarjeta de producto)
    const cardProduct = thumbnail.closest('.card-product');

    // Encuentra la imagen principal dentro de esa tarjeta
    const mainImage = cardProduct.querySelector('.main-image');

    // Cambia la fuente de la imagen principal a la de la miniatura seleccionada
    mainImage.src = thumbnail.src;

    // Asegúrate de que la imagen principal se ajuste correctamente
    mainImage.style.objectFit = 'contain'; // Se asegura que la imagen encaje dentro del contenedor sin deformarse
    mainImage.style.width = '100%'; // Se ajusta el ancho al contenedor
    mainImage.style.maxHeight = '300px'; // Se limita la altura máxima
    mainImage.style.overflow = 'hidden'; // Evita que el contenido exceda el contenedor
}
