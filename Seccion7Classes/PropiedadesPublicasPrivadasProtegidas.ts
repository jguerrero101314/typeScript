class Avenger3 {
public nombre:string;
protected  equipo:string;
private  nombreReal:string;
private  puedePelear:boolean = true;
private  peleasGanadas:number = 10;
  constructor(nombre:string, equipo:string, nombreReal:string){
    console.log("Se ejecuto el constructor");
    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal = nombreReal;
  }
}
let antman3:Avenger3 = new Avenger3("antman","cap","Scott Lang");
console.log(antman3);
