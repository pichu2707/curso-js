//Paso por referencia
function cambiarValorReferencia(parametro){
    parametro[0]=20;
}

// llamamos a la función
let arreglo = [10];
cambiarValorReferencia(arreglo)
console.log(arreglo)