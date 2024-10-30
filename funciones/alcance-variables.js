// Alcance de Variables en JS

let variableGlobal = 5;

// Modificar el valor
variableGlobal=10;

//Definición funcion
function miFuncion(variableLocal){
    console.log(variableLocal);
    // Modificamos la variable global
    variableGlobal=20;
}

//Llamamos la funcion
miFuncion(variableGlobal)