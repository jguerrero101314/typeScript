let flash2:{nombre:string, edad:number, poderes:String[], getNombre:()=>string} = {
  nombre:"Barry Allen",
  edad:24,
  poderes:["Puede correr muy rapido", "viajar por el tiempo"],
  getNombre(){

    return this.nombre;

  }
};

flash.getNombre();
