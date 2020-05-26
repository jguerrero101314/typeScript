"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Validaciones;
(function (Validaciones) {
    function validarTexto(texto) {
        if (texto.length > 3) {
            return true;
        }
        return false;
    }
    Validaciones.validarTexto = validarTexto;
})(Validaciones = exports.Validaciones || (exports.Validaciones = {}));
