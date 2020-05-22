"use strict";
var nombre2 = "bruce";
var nombre3 = 'ricardo';
function getNombres() {
    return nombre2 + " " + nombre3;
}
var mensaje1 = "1. Esta es una linea normal\n2. Hola " + nombre2 + "\n3. Robin " + nombre3 + "\n4. Los nombres son: " + getNombres() + "\n5. " + (5 + 7) + "\n";
console.log(mensaje1);
