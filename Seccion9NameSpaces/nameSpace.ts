//nameSpace.ts

namespace Validaciones{
 export  function validarTexto(texto:string):boolean{
    if(texto.length > 3){
      return true;
    }
    return false;
  }

  export function validarFecha(fecha:Date):boolean{
    if(isNaN(fecha.valueOf())){
      return false;
    }
    return true;
  }
}


let hoy = new Date();
console.log(
 Validaciones.validarFecha(hoy),
 Validaciones.validarTexto("Joel")
);
