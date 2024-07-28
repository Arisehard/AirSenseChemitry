
function scrollToForm() {
    document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' });
}

function showResults() {
    const length = document.getElementById('input-length').value;
    const width = document.getElementById('input-width').value;
    const height = document.getElementById('input-height').value;
    const personas = document.getElementById('input-personas').value;
    const tiempo = document.getElementById('input-nana').value;

    if (length && width && height && personas && tiempo) {
        const volume = length * width * height;
        const ach = 3; // Tasa de ventilación (ACH)
        const co2EmissionPerPerson = 0.03; // Tasa de emisión de CO2 por persona en l/s

        // Paso 1: Calcular la tasa de ventilación efectiva
        const vTotal = volume * ach;

        // Paso 2: Calcular la emisión total de CO2
        const eTotalCO2PerSecond = co2EmissionPerPerson * personas;
        const eTotalCO2PerHour = eTotalCO2PerSecond * 3600; // Convertir a l/h

        // Paso 3: Calcular la concentración de CO2
        const cCO2 = (eTotalCO2PerHour * volume) / vTotal;

        // Convertir litros a partes por millón (ppm)
        const cCO2Ppm = (cCO2 / volume) * 1e6;

        document.getElementById('resultText').innerText = `La concentración de CO₂ emitida: ${cCO2Ppm.toFixed(2)} ppm`;
        document.getElementById('resultModal').style.display = 'block';
    } else {
        alert('Por favor, completa todos los campos.');
    }
}
    ////////// ico hamburger
    document.addEventListener('DOMContentLoaded', function() {
        const hamburgerMenu = document.getElementById('hamburger-menu');
        const navMenu = document.getElementById('nav-menu');
        const modals = document.querySelectorAll('.modal');
        const links = document.querySelectorAll('.nav-menu a');
        const closeButtons = document.querySelectorAll('.close');
    
        // Alternar el menú de navegación
        hamburgerMenu.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    
        // Abrir el modal correspondiente al hacer clic en un enlace del menú
        links.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const modalId = this.getAttribute('data-modal');
                const modal = document.getElementById(modalId);
                modal.style.display = 'block';
            });
        });
    
        // Cerrar el modal al hacer clic en el botón de cerrar
        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const modal = this.closest('.modal');
                modal.style.display = 'none';
            });
        });
    
        // Cerrar el modal al hacer clic fuera del contenido del modal
        window.addEventListener('click', function(event) {
            modals.forEach(modal => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });
    });
    /////////final
    


function closeModal() {
    document.getElementById('resultModal').style.display = 'none';
}


