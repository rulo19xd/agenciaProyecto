document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('form-registro');
    loginForm.addEventListener('submit', registroSubmit);
});

let error = "Por favor completa todos los campos."

function registroSubmit(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let user = username.trim();
    let pass = password.trim();
    
    if (user !== '' && pass !== '') {
        alert('Registro exitoso para usuario: ' + user);
        window.location.href = '../index.html';
    } else {
        alert(error);
    }
}




