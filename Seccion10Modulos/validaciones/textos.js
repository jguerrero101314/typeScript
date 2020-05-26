"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerError = void 0;
var MENSAJES = [
    "El texto es muy corto",
    "El texto es muy largo"
];
function obtenerError(numError) {
    if (numError > MENSAJES.length) {
        return " el codigo de error no existe";
    }
    return MENSAJES[numError];
}
exports.obtenerError = obtenerError;
