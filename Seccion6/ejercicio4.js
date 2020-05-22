// Convierta este archivo de ES5 a ES6 - JavaScript 2015
// OJO: No es a TypeScript, solo JAVASCRIPT


// ==============================
//  Spiderman info
// ==============================
// Constantes?
const HEROE = "Spiderman";

// Declaracion de variables?
let spiderman = "Peter Parker",
    venom = "Eddie Brock";

// Destructuracion de arreglos?
let versiones = ["Spider-Man 2099", "Spider-Girl", "Ultimate Spider-Man"];
let [heroe1, heroe2, heroe3] = versiones;
console.log(" heroe1: " + heroe1 + "\n" + " heroe2: " + heroe2 + "\n" + " heroe3: " + heroe3);

let spiderman2099 = versiones[0];
let spidergirl = versiones[1];
let ultimate = versiones[2];

// Destructuracion de objetos?
let villanos = {
    venom1: "Eddie Brock",
    carnage: "Cletus Kasady",
    sandman: "William Baker"
};
let { venom1, carnage, sandman } = villanos;
console.log(" villano1: " + venom1 + "\n" + " villano2: " + carnage + "\n" + " villano3: " + sandman);

let venom2 = villanos.venom;
let carnage2 = villanos.carnage;
let sandman3 = villanos.sandman;

// Ciclo for Of?
console.log("******************************");
console.log("       Ciclo normal \n");
console.log("******************************");
for (let i = 0; i <= versiones.length - 1; i++) {
    let spider = versiones[i];
    console.log(" " + spider);
}


console.log("******************************");
console.log("       Ciclo for Of \n");
console.log("******************************");
for (heroe of versiones) {
    console.log(" " + heroe);
}