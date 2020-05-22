let edad:number = 30;
let heroe:string = "Ricardo Tapia (Robin)";

let mensaje = imprimir(heroe,edad);
console.log(mensaje);
function imprimir(heroe:string,edad:number):string{
  heroe = heroe.toLowerCase();
  edad = edad + 10;

  return heroe + " " + edad;
}
