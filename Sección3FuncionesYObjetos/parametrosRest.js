"use strict";
function nombreCompleto(nombre) {
    var losDemasParametros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        losDemasParametros[_i - 1] = arguments[_i];
    }
    return nombre + " " + losDemasParametros.join(" ");
}
var superMan = nombreCompleto("Clark", "Joseph", "Kent");
var ironMan = nombreCompleto("Anthony", "Edward", "Tony", "Stark");
console.log(superMan);
console.log(ironMan);
