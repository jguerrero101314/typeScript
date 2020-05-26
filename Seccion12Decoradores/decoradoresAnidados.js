"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function planVillano(constructor) {
    constructor.prototype.imprimirPlan = function () {
        console.log("El plan de " + this.nombre + " es dominar el mundo!");
    };
}
function imprimible(constructor) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    };
}
var Villano4 = /** @class */ (function () {
    function Villano4(nombre, poder) {
        this.nombre = nombre;
        this.poder = poder;
    }
    Villano4 = __decorate([
        imprimible,
        planVillano
    ], Villano4);
    return Villano4;
}());
var lex1 = new Villano4("Lex luthor", "Super mente");
//lex.imprimirPlan();
lex1.imprimirPlan();
lex1.imprimir();
