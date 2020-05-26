function planVillano(constructor:Function){

constructor.prototype.imprimirPlan = function(){
  console.log("El plan de " + this.nombre + " es dominar el mundo!");
  }
}
@planVillano
class Villano3 {
  constructor(public nombre:string){
  }
}
let lex = new Villano3("Lex luthor");
//lex.imprimirPlan();
(<any>lex).imprimirPlan();
