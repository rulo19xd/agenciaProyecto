document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form-container form');
    form.addEventListener('submit', vendedorSubmit);
});

function vendedorSubmit(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let cuit = document.getElementById('cuit').value;
    
    if (name !== '' && email !== '' && cuit !== '') {
        alert('Vendedor agregado con éxito.');
        window.location.href = '../index.html';
        form.reset();
    } else {
        alert('Por favor completa todos los campos requeridos.');
    }
}
