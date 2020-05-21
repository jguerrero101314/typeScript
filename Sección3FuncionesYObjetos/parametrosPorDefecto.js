"use strict";
function nombreCompleto(nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = true; }
    if (capitalizado) {
        return capitalizar(nombre) + " " + capitalizar(apellido);
    }
    else {
        return nombre + " " + apellido;
    }
    console.log(capitalizado);
    return nombre + " " + apellido;
}
function capitalizar(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.substring(1).toLowerCase();
}
var nombre = nombreCompleto("tony", "stark");
console.log(nombre);
