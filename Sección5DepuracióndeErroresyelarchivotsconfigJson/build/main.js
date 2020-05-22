"use strict";
/*!
Esto es un comentario multilinea
*/
var edad = 30;
var heroe = "Ricardo Tapia (Robin)";
var mensaje = imprimir(heroe, edad);
console.log(mensaje);
function imprimir(heroe, edad) {
    heroe = heroe.toLowerCase();
    edad = edad + 10;
    return heroe + " " + edad;
}
console.log("hola mundo");
//# sourceMappingURL=main.js.map