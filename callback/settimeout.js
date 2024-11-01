// Llamadas asíncronas con uso setTimeOut

function miFuncionCallback(){
    console.log('Saludo asíncorono después de 3 seg');
}

setTimeout(miFuncionCallback,3000); // después de 3 segundos

setTimeout(function(){console.log('Saludo después de 2 segundog')}, 2000);

setTimeout(()=> console.log('Saludo despueś de 5 segundos'),5000);
