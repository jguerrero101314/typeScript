var thor = {
    nombre: "Thor",
    arma: "Mjolnir"
};
var ironMan1 = {
    nombre: "IronMan",
    arma: "Armorsuit"
};
var capitanAmerica = {
    nombre: "Capitan America",
    arma: "Escudo"
};
var avengers_ = [thor, ironMan1, capitanAmerica];
for (var _i = 0, avengers_1 = avengers_; _i < avengers_1.length; _i++) {
    var avengers = avengers_1[_i];
    console.log(avengers.nombre, avengers.arma);
}
// for (let i in avengers_){
//     let avengers = avengers_[i];
//     console.log(avengers.nombre, avengers.arma);
// }
// for (let i = 0; i <= avengers_.length - 1; i++){
//     let avengers = avengers_[i];
//     console.log(avengers.nombre, avengers.arma);
// }
