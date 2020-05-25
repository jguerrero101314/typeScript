interface Xmen4{
  nombre:string;
  nombreReal?:string;
  regenerar(nombreReal:string):void;
}
class Mutante implements Xmen1 {
  nombre:string;
  regenerar(nombre:string){
    console.log("Hola " + nombre);
  }
}
let wolverine = new Mutante();
