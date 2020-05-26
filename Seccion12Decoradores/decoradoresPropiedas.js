"use strict";
function editable(esEditable) {
    return function (target, nombrePropiedad, descriptor) {
        descriptor.writable = esEditable;
    };
}
function editableProp(esEditable) {
    return function (target, nombrePropiedad) {
        var descriptor = {
            writable: esEditable
        };
        return descriptor;
    };
}
var Villano6 = /** @class */ (function () {
    function Villano6(nombre) {
        this.nombre = nombre;
    }
    //@editable(false)
    Villano6.prototype.plan = function () {
        console.log("Es dominar el mundo");
    };
    return Villano6;
}());
var lex6 = new Villano6("Lex luthor");
lex6.plan();
