"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avenger5 = /** @class */ (function () {
    function Avenger5(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
    Avenger5.prototype.getNombre = function () {
        return this.nombre;
    };
    Avenger5.prototype.getNombre2 = function () {
        return this.nombre;
    };
    return Avenger5;
}());
var Xmen = /** @class */ (function (_super) {
    __extends(Xmen, _super);
    function Xmen(a, b) {
        return _super.call(this, a, b) || this;
    }
    Xmen.prototype.getNombre2 = function () {
        return _super.prototype.getNombre2.call(this);
    };
    return Xmen;
}(Avenger5));
var ciclope1 = new Avenger5("Ciclope", "Scott");
var ciclope2 = new Xmen("Ciclope2", "Scott2");
console.log(ciclope1);
console.log(ciclope2);
console.log(ciclope2.getNombre2());
