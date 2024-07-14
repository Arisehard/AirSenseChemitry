
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

        document.getElementById('resultText').innerText = `El resultado de la concentración de CO2 es: ${cCO2Ppm.toFixed(2)} ppm`;
        document.getElementById('resultModal').style.display = 'block';
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

function closeModal() {
    document.getElementById('resultModal').style.display = 'none';
}
