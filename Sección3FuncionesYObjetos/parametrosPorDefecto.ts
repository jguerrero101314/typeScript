function nombreCompleto(nombre:string, apellido:string, capitalizado:boolean = true):string{

  if(capitalizado){
    return capitalizar(nombre) + " " + capitalizar(apellido);
  }else{
    return nombre + " " + apellido;
  }
  console.log(capitalizado);
  return nombre + " " + apellido;
}
function capitalizar(palabra:string):string{
  return palabra.charAt(0).toUpperCase() + palabra.substring(1).toLowerCase();
}
var nombre = nombreCompleto("tony","stark");
console.log(nombre);
