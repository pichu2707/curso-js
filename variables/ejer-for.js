//Suma acumulativa
let maximo=5, acumuladorSuma=0;

for(let numero=1; numero<=maximo; numero++){
    // imprimimos lo que se suma
    console.log(`${acumuladorSuma} + ${numero}` )
    //Realizamos la suma parcial
    acumuladorSuma +=numero;
    console.log(acumuladorSuma);
}
console.log(acumuladorSuma);