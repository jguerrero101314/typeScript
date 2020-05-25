interface Xmen1 {
  nombre:string,
  poder:string
}

function enviarMision(xmen:Xmen1){
  console.log("Enviando a: " + xmen.nombre);
}
function enviarCuartel(xmen:Xmen1){
  console.log("Enviando al cuartel: " + xmen.nombre);
}

let wolverine1:Xmen1 = {
  nombre: "Wolverine",
  poder: "Regeneracion"
}
enviarMision(wolverine1);
enviarCuartel(wolverine1);
