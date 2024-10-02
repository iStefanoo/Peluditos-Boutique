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
