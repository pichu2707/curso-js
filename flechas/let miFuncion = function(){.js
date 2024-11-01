let miFuncion = function(){
    console.log('Estoy en mi función');
}

miFuncion();

let miFuncionFlecha = () => {
    console.log('Ahora estoy en la función flecha');
}

miFuncionFlecha()

//Con la función flecha no afecta el hoisting con lo que no se puede nombrar antes de generar la propia función

const miFuncionFlecha2 = () => console.log('Ahora estoy en la segunda función flecha');
miFuncionFlecha2();

const saludar = ()=>{
    return 'Saludos desde la función flecha saludar '
}

console.log(saludar());

const saludar2 = () => 'Saludos desde la función flecha saludar 2';
console.log(saludar2());

const regresaObjeto = () => ({nombre:'Juan', aprellido: 'Perez'});
console.log(regresaObjeto());

const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros('Saludos con paramétros');


const functionConVariosParametros = (op1, op2) => {
    let resultado = op1 + op2;
    return `Resultado ${resultado}`;
}
console.log(functionConVariosParametros(3, 8));