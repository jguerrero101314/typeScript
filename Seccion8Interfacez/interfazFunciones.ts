interface DosNumerosFunc{
  ( num1:number, nun2:number ) : number
}
let sumar2:DosNumerosFunc;
sumar2 = function(a:number,b:number){

  return a + b;
}
let restar:DosNumerosFunc;
restar = function(numero1:number, numero2:number){
  return numero1 - numero2;
}
console.log(sumar2(4,2));
