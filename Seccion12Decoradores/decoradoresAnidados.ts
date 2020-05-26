function planVillano(constructor:Function){

constructor.prototype.imprimirPlan = function(){
  console.log("El plan de " + this.nombre + " es dominar el mundo!");
  }
}
function imprimible(constructor:Function){

constructor.prototype.imprimir = function(){
  console.log(this);
  }
}
@imprimible
@planVillano
class Villano4 {
  constructor(public nombre:string,public poder:string){
  }
}
let lex1 = new Villano4("Lex luthor","Super mente");
//lex.imprimirPlan();
(<any>lex1).imprimirPlan();
(<any>lex1).imprimir();
