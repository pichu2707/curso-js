//Cadenas y funciones en JS 
//Cadenas inmutables en JS (No se pueden cambiar los valores)

function cambiarValor(parametro){
    parametro='Adios';
}

//Llamamos a la función
let argumento='Hola';
// se podría crear una variable nueva con un argumento='Hola mundo' por ejemplo
console.log(`Antes funcion: ${argumento}`);
cambiarValor(argumento);
console.log(argumento);