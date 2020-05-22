// function sumar(a:number,b:number):number{
//     return a + b;
// }
// let sumar4 = (a:number,b:number) => a+b;
// console.log(sumar4(1,2));
// function darOrden_hulk(orden:string):string{
//     return `hulk ${orden}`;
// };
// let darOrden_hulk = (orden:string) => `hulk ${orden}`;
// console.log(darOrden_hulk("Smash!!!!"))
var capitan_america = {
    nombre: "Hulk",
    darOrden_hulk: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!!!"); }, 1000);
    }
};
capitan_america.darOrden_hulk();
