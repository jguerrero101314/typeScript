let flash2:{nombre:string, edad:number, poderes:String[], getNombre:()=>string} = {
  nombre:"Barry Allen",
  edad:24,
  poderes:["Puede correr muy rapido", "viajar por el tiempo"],
  getNombre(){

    return this.nombre;

  }
};

let superman2:{nombre:string, edad:number, poderes:String[], getNombre:()=>string} = {
  nombre:"CLark Kent",
  edad:500,
  poderes:["Puede volar", "Super velocidad"],
  getNombre(){
    return this.nombre;
  }
};
