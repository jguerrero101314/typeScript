"use strict";
/*!
Esto es un comentario multilinea
*/
let edad = 30;
let heroe = "Ricardo Tapia (Robin)";
let mensaje = imprimir(heroe, edad);
console.log(mensaje);
function imprimir(heroe, edad) {
    heroe = heroe.toLowerCase();
    edad = edad + 10;
    return heroe + " " + edad;
}
console.log("hola mundo");
let heroes = ["Batman", "Superman", "Robin"];
for (let heroe of heroes) {
    console.log(heroe);
}
//# sourceMappingURL=main.js.map