"use strict";
var Avenger2 = /** @class */ (function () {
    function Avenger2(nombre, equipo, nombreReal) {
        this.puedePelear = true;
        this.peleasGanadas = 10;
        console.log("Se ejecuto el constructor");
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger2;
}());
var antman2 = new Avenger2("antman", "cap", "Scott Lang");
console.log(antman2);
