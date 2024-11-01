//trabajos con async y await

let miPromesa = new Promise((resolver,rechazar)=> {
    let expresion = true;
    if(expresion)
        resolver('Resolvió correcto');
    else
        rechazar('Se pordujo un error');
});

let promesa = new Promise((resolver) => {
    setTimeout( ()=> resolver('saludos con promesa y timeout'), 3000);
});
promesa.then(valor=>console.log(valor));

//async con await
async function miFuncionConPromesa() {
    return 'Saludos con promise y aysnc'
}

async function miFuncionConPromesaAwait() {
    let miPromesa = new Promise( resolver => {
        resolver('Promesa con await y Timeout')
    });
    console.log(await miPromesa);
}

async function miFuncionConPromesaAwaitYTimeout() {
    console.log('inicio de la función await y timeout');
    let miPromesa = new Promise(resolver => {
        setTimeout(()=> resolver('promesa con await y timeout'),3000);
    });
    console.log(await miPromesa);
    console.log('fin de la función')
}
miFuncionConPromesaAwaitYTimeout();
