//throws
'use strict'

try{
    let x=10
    //x=10;
    //miFunction();
    throw 'Mi error';
} catch(error){
    console.log(error);
} finally {
    console.log('termina la revisión de errores');
}
console.log('Continuamos..')

// Ejemplo

let resultado=-5;

try{
 if (isNaN(resultado)) throw 'No es un número';
 else if( resultado === '') throw 'resultado está vacío';
 else if(resultado >= 0) throw 'El valor es positivo';
 else if(resultado < 0) throw 'El valor es negativo';
}catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}