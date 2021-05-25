"use strict";

let datos = document.getElementById("datos"),
  salidaBoleta = document.getElementById("salidaBoleta"),
  salidaNombre = document.getElementById("salidaNombre"),
  salidaGrupo = document.getElementById("salidaGrupo"),
  salidaMateria = document.getElementById("salidaMateria"),
  txtFecha = datos["fecha"],
  salidaFecha = document.getElementById("salidaFecha");

function procesa() {
  let boleta = datos["boleta"].value.trim(),
    fecha = new Date(txtFecha.value),
    nombre = datos["nombre"].value.trim(),
    grupo = datos["grupo"].value.trim(),
    Materia = datos["materia"].value.trim(),
    MiFecha;
  MiFecha =
    fecha.getDate() +
    1 +
    "/" +
    (fecha.getMonth() + 1) +
    "/" +
    fecha.getFullYear();
  salidaBoleta.textContent = "La boleta introducida es: " + boleta;
  salidaNombre.textContent = "nombre introducido es:  " + nombre;
  salidaGrupo.textContent = "El grupo introducido es: " + grupo;
  salidaMateria.textContent = "La materia introducida es: " + Materia;
  salidaFecha.textContent = "Fecha: " + MiFecha;
}
