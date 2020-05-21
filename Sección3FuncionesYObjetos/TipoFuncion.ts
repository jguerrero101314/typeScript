function sumar(a:number,b:number):number{
  return a + b;
}
function saludar(nombre:string):string{
  return "Yo soy " + nombre;
}
function salvarMundo():void{
  console.log("El mundo esta salvado!");
}

//let miFuncion:(a:number,b:number) => number;
//let miFuncion:(a:string) => string;
let miFuncion:() => void;
//miFuncion = 10;
/* miFuncion = sumar;
console.log(miFuncion(5,5));*/
/*miFuncion = saludar;
console.log(miFuncion("Batman"));*/
miFuncion = salvarMundo;
console.log(miFuncion());
