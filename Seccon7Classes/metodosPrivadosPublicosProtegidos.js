"use strict";
var Avenger4 = /** @class */ (function () {
    function Avenger4(nombre, equipo, nombreReal) {
        this.puedePelear = true;
        this.peleasGanadas = 10;
        console.log("Se ejecuto el constructor");
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    Avenger4.prototype.bio = function () {
        var msj = this.nombre + " " + this.nombreReal + " " + this.equipo;
        console.log(msj);
    };
    Avenger4.prototype.cambiaEquipoPublico = function (nuevoEquipo) {
        return this.cambiarEquipo(nuevoEquipo);
    };
    Avenger4.prototype.cambiarEquipo = function (nuevoEquipo) {
        if (nuevoEquipo === this.equipo) {
            return false;
        }
        else {
            return true;
        }
    };
    return Avenger4;
}());
var antman4 = new Avenger4("antman", "cap", "Scott Lang");
//console.log(antman4);
antman4.bio();
console.log(antman4.cambiaEquipoPublico("cap"));
