abstract class Mutantes{// X-MEN
  constructor(nombre:string, public nombreReal:string){
  }
}
class Xmen3 extends Mutantes{

}

let wolverine = new Xmen3("wolverine","logan");
console.log(wolverine);
