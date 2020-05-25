class Avenger4 {
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
  public  bio():void{
    let msj:string = `${this.nombre} ${this.nombreReal} ${this.equipo}`
    console.log(msj);
  }
  public cambiaEquipoPublico(nuevoEquipo:string):boolean{
    return this.cambiarEquipo(nuevoEquipo);
  }
  private cambiarEquipo(nuevoEquipo:string):boolean{
    if(nuevoEquipo === this.equipo){
      return false;
    }else{
      return true;
    }
  }
}
let antman4:Avenger4 = new Avenger4("antman","cap","Scott Lang");
//console.log(antman4);
antman4.bio();
console.log(antman4.cambiaEquipoPublico("cap"));
