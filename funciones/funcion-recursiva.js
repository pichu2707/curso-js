// Funciones recursivas
// Imprimir valores

function funcionRecursiva(numero){
    // Caso Base
    if(numero==1)
        console.log(numero);
    else{
        console.log(numero);
        funcionRecursiva(numero - 1);
    }
}

// Llamamos a la funcion recursiva
funcionRecursiva(3)