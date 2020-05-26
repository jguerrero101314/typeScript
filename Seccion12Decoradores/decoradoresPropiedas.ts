function editable(esEditable:boolean){
  return function(target:any, nombrePropiedad:string, descriptor:PropertyDescriptor){
      descriptor.writable = esEditable;

  }
}
function editableProp(esEditable:boolean){
  return function(target:any, nombrePropiedad:string):any{
    let descriptor:PropertyDescriptor = {
      writable:esEditable
    }
    return descriptor;
  }
}


class Villano6 {
   nombre:string;
  @editableProp(true)
  constructor(nombre:string){
    this.nombre = nombre;
  }
  //@editable(false)
  plan(){
    console.log("Es dominar el mundo");
  }
}
let lex6 = new Villano6("Lex luthor");
lex6.plan();
