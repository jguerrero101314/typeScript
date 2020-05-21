type Heroe = {
  nombre:string,
  edad:number,
  poderes:String[],
  getNombre:()=>string
}
let flash3:Heroe = {
  nombre:"Barry Allen",
  edad:24,
  poderes:["Puede correr muy rapido", "viajar por el tiempo"],
  getNombre(){

    return this.nombre;

  }
};

let superman3:Heroe = {
  nombre:"CLark Kent",
  edad:500,
  poderes:["Puede volar", "Super velocidad"],
  getNombre(){
    return this.nombre;
  }
};
