
document.addEventListener('deviceready', onDeviceReady, false);

function scrollToForm() {
    document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' });
}

function animateButton(button) {
    button.classList.add('clicked');
    setTimeout(() => {
        button.classList.remove('clicked');
    }, 200);
}

function showResults() {
    const length = document.getElementById('input-length').value;
    const width = document.getElementById('input-width').value;
    const height = document.getElementById('input-height').value;
    const personas = document.getElementById('input-personas').value;
    const tiempo = document.getElementById('input-nana').value;

    if (length && width && height && personas && tiempo) {
        const result = length * width * height * personas * tiempo;
        document.getElementById('resultText').innerText = `El resultado de la multiplicación es: ${result}`;
        document.getElementById('resultModal').style.display = 'block';
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

function closeModal() {
    document.getElementById('resultModal').style.display = 'none';
}

