"use strict";
function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre);
    xmen.regenerar("Logan");
}
var wolverine3 = {
    nombre: "Wolverine",
    poder: "Regeneracion",
    regenerar: function (x) {
        console.log("Se ha regenerado " + x);
    }
};
enviarMision(wolverine3);
