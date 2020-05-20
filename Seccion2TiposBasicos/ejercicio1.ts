// Tipos
let batman:string = "Bruce";
let superman:string = "Clark";

let existe:boolean = false;

// Tuplas
let parejaHeroes:[string,string] = [batman,superman];
let villano:[string,number,boolean] = ["Lex Lutor",5,true];

// Arreglos
let aliados:string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
enum Fuerza{
  acuaman =0,
  batman=1,
  flash=5,
  superman=100
};
let fuerzaFlash:number = Fuerza.flash;
let fuerzaSuperman:number = Fuerza.superman;
let fuerzaBatman:number = Fuerza.batman;
let fuerzaAcuaman:number = Fuerza.acuaman;

// Retorno de funciones
function activar_batiseñal():string{
  return "activada";
}

function pedir_ayuda():void{
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
let poder:string = "100";
let largoDelPoder:number = poder.length;
console.log( largoDelPoder );

let poder2:number = 100;
let largoDelPoder2:number = poder2.toString().length;
console.log( largoDelPoder2 );
