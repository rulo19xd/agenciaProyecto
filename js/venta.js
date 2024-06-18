document.addEventListener('DOMContentLoaded', function() {
    const ventaForm = document.getElementById('ventaForm');
    ventaForm.addEventListener('submit', VentaSubmit);
});

let errorVenta = "Por favor completa todos los campos del formulario de venta.";

function VentaSubmit(event) {
    event.preventDefault(); // Evita la recarga de la página

    let saleDate = document.getElementById('saleDate').value;
    let price = document.getElementById('price').value;
    let package = document.getElementById('package').value;
    
    // Aquí puedes agregar más validaciones si es necesario
    if (saleDate !== '' && price !== '' && package !== '') {
        alert('Venta del paquete ' + package + ' ha sido completada.');
        window.location.href = '../index.html';
    } else {
        alert(errorVenta);
    }
}
