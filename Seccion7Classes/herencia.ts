class Avenger5{


  constructor(public nombre:string, private nombreReal:string){}
  public getNombre():string{
    return this.nombre;
  }
  protected getNombre2():string{
    return this.nombre;
  }
}
class Xmen extends Avenger5{
  constructor( a:string, b:string  ){
    super(a,b);
  }
  public getNombre2():string{
    return super.getNombre2();
  }
}
let ciclope1:Avenger5 = new Avenger5("Ciclope","Scott");
let ciclope2:Xmen = new Xmen("Ciclope2","Scott2");
console.log(ciclope1);
console.log(ciclope2);
console.log(ciclope2.getNombre2());
