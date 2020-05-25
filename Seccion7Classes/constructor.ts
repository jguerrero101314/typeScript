class Avenger2 {
  nombre:string;
  equipo:string;
  nombreReal:string;
  puedePelear:boolean = true;
  peleasGanadas:number = 10;
  constructor(nombre:string, equipo:string, nombreReal:string){
    console.log("Se ejecuto el constructor");
    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal = nombreReal;
  }
}
let antman2:Avenger2 = new Avenger2("antman","cap","Scott Lang");
console.log(antman2);
