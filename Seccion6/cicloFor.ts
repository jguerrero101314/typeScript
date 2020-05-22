let thor = {
    nombre: "Thor",
    arma: "Mjolnir"
};

let ironMan1 = {
    nombre: "IronMan",
    arma: "Armorsuit"
}

let capitanAmerica = {
    nombre: "Capitan America",
    arma: "Escudo"
};

let avengers_ = [thor, ironMan1, capitanAmerica];
for(let avengers of avengers_){
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