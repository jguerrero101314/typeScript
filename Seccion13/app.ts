
import  "jquery";
import  "sweetalert";
console.log("Hola mundo");
$(document).ready(function(){
  console.log("Pagina lista y cargada");
  //$("h1").text("Hola desde TypeScript");
  //$("p").text("Hola desde este parrafo...");
//  $("h1").css("background-color","red");
});

$("#botAlerta").on("click",function(){
 Swal.fire('Any fool can use a computer')
});
