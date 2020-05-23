class Avenger6{
  private _nombre:string
  constructor(nombre?:string){
    this._nombre = nombre;
  }
  get nombre():string{
    console.log("Paso por el get nombre()");
    if(this._nombre){
      return this._nombre;
    }else{
        return "No tiene un nombre el avenger";
    }
  }
  set nombre(nombre:string){
    if(nombre.length <=  3){
    //  console.error("El nombre debe contener mas de 3 caracteres");
    throw new Error("Auxilio!!! esto no debe de pasar....");
    //  return;
    }
      console.log("Se llamo el set del nombre");
    this._nombre = nombre;
  }
}
let ciclope:Avenger6 = new Avenger6("Wolverine");
  console.log(ciclope.nombre);
  ciclope.nombre = "Lee"
