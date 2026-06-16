// Formulario
const inscripcion = document.getElementById("inscripcion");

// Select de torneos
const selectTorneo = document.getElementById("torneo");

// Filas de la tabla
const filas = document.querySelectorAll("table tr");

// Cargar los torneos automáticamente
for (let i = 1; i < filas.length; i++) {

    let nombreTorneo = filas[i].cells[0].textContent;

    let opcion = document.createElement("option");

    opcion.value = nombreTorneo;
    opcion.textContent = nombreTorneo;

    selectTorneo.appendChild(opcion);
}

// Enviar formulario
inscripcion.addEventListener("submit", function(e){

    e.preventDefault();

    alert("¡Inscripción realizada correctamente!");

    inscripcion.reset();

});