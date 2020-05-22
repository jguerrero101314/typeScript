let nombre2:string = "bruce";
let nombre3:string = 'ricardo';
function getNombres():string{
    return `${nombre2} ${nombre3}`
}
let mensaje1:string = `1. Esta es una linea normal
2. Hola ${nombre2}
3. Robin ${nombre3}
4. Los nombres son: ${getNombres()}
5. ${5 + 7}
`;
console.log(mensaje1);