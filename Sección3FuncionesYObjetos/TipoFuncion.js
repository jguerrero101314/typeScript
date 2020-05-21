"use strict";
function sumar(a, b) {
    return a + b;
}
function saludar(nombre) {
    return "Yo soy " + nombre;
}
function salvarMundo() {
    console.log("El mundo esta salvado!");
}
//let miFuncion:(a:number,b:number) => number;
//let miFuncion:(a:string) => string;
var miFuncion;
//miFuncion = 10;
/* miFuncion = sumar;
console.log(miFuncion(5,5));*/
/*miFuncion = saludar;
console.log(miFuncion("Batman"));*/
miFuncion = salvarMundo;
console.log(miFuncion());
