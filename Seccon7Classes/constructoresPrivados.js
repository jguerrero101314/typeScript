"use strict";
var Apocalipsis = /** @class */ (function () {
    function Apocalipsis(nombre) {
        this.nombre = nombre;
    }
    Apocalipsis.llamarApocalipsis = function () {
        if (!Apocalipsis.instancia) {
            Apocalipsis.instancia = new Apocalipsis("Soy Apocalipsis... el unico");
        }
        return Apocalipsis.instancia;
    };
    return Apocalipsis;
}());
//No funciona
//let apocalipsisFalso = new Apocalipsis("Soy Apocalipsis!!! (falso)");
// si funciona
var real = Apocalipsis.llamarApocalipsis();
console.log(real);
