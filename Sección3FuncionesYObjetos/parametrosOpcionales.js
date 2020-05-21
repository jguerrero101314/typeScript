"use strict";
function nombreCompleto(nombre, apellido) {
    if (apellido) {
        return nombre + ' ' + apellido;
    }
    else {
        return nombre;
    }
}
var nombreA = nombreCompleto("joel");
console.log(nombreA);
