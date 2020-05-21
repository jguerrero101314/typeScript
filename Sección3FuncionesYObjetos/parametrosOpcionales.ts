function nombreCompleto(nombre:string, apellido?:string):string{

if(apellido){
    return nombre + ' ' + apellido;
}else{
    return nombre;
}

}
let nombreA = nombreCompleto("joel");
console.log(nombreA);
