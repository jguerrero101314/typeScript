//Decorador de class
function consola(constructor:Function){
  console.log(constructor);
}

@imprimirConsola(false)
class Villano {
  constructor(public nombre:string){
  }
}
//Decoradores de fabrica - Factory decorators
function imprimirConsola(imprimir:boolean):Function{

  if(imprimir){
    return consola;
  }else{
    return null;
  }

}
