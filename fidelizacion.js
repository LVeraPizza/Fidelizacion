// Seleccionamos el formulario y el contador de visitas
const form = document.getElementById("fidelizacionForm");
const contadorVisitas = document.getElementById("contadorVisitas");

// Función para mostrar el puntaje acumulado en pantalla
function mostrarPuntaje(telefono) {
    const puntos = localStorage.getItem(telefono) || 0;
    contadorVisitas.textContent = `Tu puntaje: ${puntos} puntos`;
}

// Evento de envío del formulario
form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    // Obtenemos el número de teléfono del cliente
    const telefono = document.getElementById("telefono").value;
    
    // Cargar el puntaje acumulado para el número de teléfono
    let puntos = localStorage.getItem(telefono) || 0;
    puntos = parseInt(puntos) + 1;
    
    // Guardar el nuevo puntaje en localStorage
    localStorage.setItem(telefono, puntos);
    
    // Mostrar el puntaje actualizado
    mostrarPuntaje(telefono);
    
    // Limpiar el formulario
    form.reset();
});

// Mostrar el puntaje al cargar la página (si el usuario ya está registrado)
document.addEventListener("DOMContentLoaded", () => {
    const telefono = document.getElementById("telefono").value;
    mostrarPuntaje(telefono);
});
