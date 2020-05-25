"use strict";
function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel: " + xmen.nombre);
}
var wolverine1 = {
    nombre: "Wolverine",
    poder: "Regeneracion"
};
enviarMision(wolverine1);
enviarCuartel(wolverine1);
