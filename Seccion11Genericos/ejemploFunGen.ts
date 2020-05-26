function functionGenerica<T>(arg:T){
  return arg;
}

type Heroe1 = {
  nombre:string;
  nombreReal:string
}
type Villano1 = {
  nombre:string;
  poder:string
}
let deadpool = {
  nombre: "Deadpool",
  nombreReal:"Wade Winston wilson",
  poder:"Regeneracion"
}
console.log(functionGenerica<Heroe1>(deadpool));
