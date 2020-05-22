"use strict";
var edad = 30;
var heroe = "Ricardo Tapia (Robin)";
var mensaje = imprimir(heroe, edad);
console.log(mensaje);
function imprimir(heroe, edad) {
    heroe = heroe.toLowerCase();
    edad = edad + 10;
    return heroe + " " + edad;
}
//# sourceMappingURL=app.js.map