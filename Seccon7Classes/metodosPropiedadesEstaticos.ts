class Xmen2{
  static nombre:string = "Wolverine";
  constructor(){

  }
  static crearXmen(){
    console.log("Se creo usando un metodo estatico");
    return new Xmen2();
  }
}
//let Wolverine = new Xmen2();
//console.log(Wolverine.nombre);
//console.log(Xmen2.nombre);

let Wolverine2 = Xmen2.crearXmen();
console.log(Wolverine2);
