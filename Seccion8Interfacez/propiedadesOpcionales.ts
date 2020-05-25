interface Xmen1 {
  nombre:string,
  poder?:string
}

function enviarMision1(xmen:Xmen1){
  console.log("Enviando a: " + xmen.nombre);
}
function enviarCuartel1(xmen:Xmen1){
  console.log("Enviando al cuartel: " + xmen.nombre);
}

let wolverine2= {
  nombre: "Wolverine"
}
enviarMision1(wolverine2);
enviarCuartel1(wolverine2);
