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
        const volume = length * width * height; // Volumen de la habitación en metros cúbicos
        
        // Tasa de emisión de CO2 por persona en l/min (0.03 l/s * 60 s/min)
        const Tiemmpo = tiempo*60
        const co2EmissionPerPersonPerMinute = 0.03 * Tiemmpo; 
        
       
        // Paso 2: Calcular la Emisión Total de CO2 por Persona en 60 Minutos
        const eTotalCO2PerMinute = co2EmissionPerPersonPerMinute;
    
        // Paso 3: por personas
        const cCO2Ppm = eTotalCO2PerMinute * personas; // Emisión total de CO2 en litros por hora
    

        let resultMessage;
        if (cCO2Ppm <= 800) {
            resultMessage = `La concentración de CO₂ es segura (${cCO2Ppm.toFixed(2)} ppm).`


        } else if (cCO2Ppm <= 1100){
            resultMessage = ` Advertencia: La concentración de CO₂ está por encima de los niveles recomendados. (${cCO2Ppm.toFixed(2)}ppm).
            Ventilación: Abre las ventanas y las puertas para permitir la entrada de aire fresco y la salida del aire viciado. Esto ayuda a diluir el CO₂ y a renovar el aire en la habitación. 
            Mantenimiento del Espacio: Asegúrate de que los sistemas de ventilación y aire acondicionado estén limpios y funcionando correctamente para garantizar una buena circulación del aire.`;
        }

    else if (cCO2Ppm > 1101){
        ;
        resultMessage = `Advertencia: La concentración de CO₂ es alta (${cCO2Ppm.toFixed(2)} ppm).
        Es importante actuar rápidamente para reducirlos y mejorar la calidad del aire. Aquí tienes algunas medidas que puedes tomar:
        Plantas de Interior: Coloca plantas en la habitación, ya que algunas pueden ayudar a absorber CO₂ y liberar oxígeno. Ejemplos de plantas eficaces incluyen la palma areca, la lengua de suegra y el potus.
        Purificadores de Aire: Utiliza un purificador de aire con filtro de carbón activado, que puede ayudar a reducir los niveles de CO₂ y otros contaminantes en el aire.
        Mantenimiento de Sistemas de Ventilación: Asegúrate de que los sistemas de ventilación y aire acondicionado estén limpios y funcionando correctamente, para garantizar una circulación adecuada del aire.`;
    }

        document.getElementById('resultText').innerText = resultMessage;
        document.getElementById('resultModal').style.display = 'block';
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

// Código para el menú de hamburguesa y modales
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

function closeModal() {
    document.getElementById('resultModal').style.display = 'none';
}
