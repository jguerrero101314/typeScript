interface Xmen1 {
  nombre:string,
  poder:string,
  regenerar?(nombreReal:string):void
}

function enviarMision(xmen:Xmen1){
  console.log("Enviando a: " + xmen.nombre);
  xmen.regenerar("Logan");
}
let wolverine3:Xmen1 = {
  nombre: "Wolverine",
  poder: "Regeneracion",
  regenerar(x:string){
    console.log("Se ha regenerado " + x);
  }
}
enviarMision(wolverine3);
