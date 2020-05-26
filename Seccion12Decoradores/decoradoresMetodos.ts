function editable(esEditable:boolean){
  return function(target:any, nombrePropiedad:string, descriptor:PropertyDescriptor){
    if(!esEditable){
      console.log("No es editable")
    }
      descriptor.writable = esEditable;

  }
}


class Villano5 {
  constructor(public nombre:string){}
  @editable(true)
  plan(){
    console.log("Es dominar el mundo");
  }
}
let lex5 = new Villano5("Lex luthor");
lex5.plan = function(){
  console.log("Es cortar flores");
}
lex5.plan();
