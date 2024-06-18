function elegirRol(rol) {
    localStorage.setItem('rolUsuario', rol);
    window.location.href = './pages/registro.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const rolUsuario = localStorage.getItem('rolUsuario');
    if (rolUsuario) {
        const elementoGerente = document.querySelector('.gerente');
        const elementoVendedor = document.querySelector('.vendedor');

        if (rolUsuario === 'gerente') {
            elementoGerente.style.display = 'block';
            elementoGerente.classList.add('centrado');

            elementoVendedor.style.display = 'none';
            elementoVendedor.classList.remove('centrado');
        } else if (rolUsuario === 'vendedor') {
            elementoVendedor.style.display = 'block';
            elementoVendedor.classList.add('centrado');
            elementoGerente.style.display = 'none';
            elementoGerente.classList.remove('centrado');
        }
    }
});

