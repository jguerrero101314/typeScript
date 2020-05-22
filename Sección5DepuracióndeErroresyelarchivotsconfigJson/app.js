"use strict";
/*!
Esto es un comentario multilinea
*/
// esta variable contiene la edad
var edad = 30;
// heroe es el personaje principal
var heroe = "Ricardo Tapia (Robin)";
var mensaje = imprimir(heroe, edad);
console.log(mensaje);
function imprimir(heroe, edad) {
    heroe = heroe.toLowerCase();
    edad = edad + 10;
    return heroe + " " + edad;
}
