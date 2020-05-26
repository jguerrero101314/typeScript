"use strict";
var Avenger6 = /** @class */ (function () {
    function Avenger6(nombre) {
        this._nombre = nombre;
    }
    Object.defineProperty(Avenger6.prototype, "nombre", {
        get: function () {
            console.log("Paso por el get nombre()");
            if (this._nombre) {
                return this._nombre;
            }
            else {
                return "No tiene un nombre el avenger";
            }
        },
        set: function (nombre) {
            if (nombre.length <= 3) {
                //  console.error("El nombre debe contener mas de 3 caracteres");
                throw new Error("Auxilio!!! esto no debe de pasar....");
                //  return;
            }
            console.log("Se llamo el set del nombre");
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    return Avenger6;
}());
var ciclope = new Avenger6("Wolverine");
console.log(ciclope.nombre);
ciclope.nombre = "Lee";
