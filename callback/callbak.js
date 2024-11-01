//callback

function miFuncion1(){
    console.log('funcion1 ')
}

function miFuncion2(){
    console.log('funcion 2')
}

miFuncion1();
miFuncion2();

//Funcion de tipo callback
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, functionCallback){
    let res = op1+op2
    functionCallback(`Resultado: ${res}`)
}

sumar(5,3, imprimir);