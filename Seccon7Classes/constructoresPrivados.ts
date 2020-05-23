class Apocalipsis{
  static instancia:Apocalipsis;
  private constructor(public nombre:string){
  }
  static llamarApocalipsis(){
    if(!Apocalipsis.instancia){
      Apocalipsis.instancia = new Apocalipsis("Soy Apocalipsis... el unico");
    }
    return Apocalipsis.instancia;
  }
}
//No funciona
//let apocalipsisFalso = new Apocalipsis("Soy Apocalipsis!!! (falso)");

// si funciona
let real = Apocalipsis.llamarApocalipsis();
console.log(real);
