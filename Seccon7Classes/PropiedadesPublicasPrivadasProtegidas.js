"use strict";
var Avenger3 = /** @class */ (function () {
    function Avenger3(nombre, equipo, nombreReal) {
        this.puedePelear = true;
        this.peleasGanadas = 10;
        console.log("Se ejecuto el constructor");
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger3;
}());
var antman3 = new Avenger3("antman", "cap", "Scott Lang");
console.log(antman3);
