// Suma acumulativa con while y dowhile

let maximo =5, acumuladorSuma=0, numero=0;

while(numero<=maximo){
    acumuladorSuma +=numero;
    numero++;
    console.log(acumuladorSuma);
}

let maximo1=5, acumuladorSuma1=0, numero1=0;

do {
    acumuladorSuma1 += numero1;
    numero1++;
    console.log(acumuladorSuma1);
} while (numero1<=maximo1);