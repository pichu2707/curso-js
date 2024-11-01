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

async function miFuncionConPromesaYAwait() {
    let miPromesa = new Promise( resolver => {
        resolver('Promesa con await')
    });
    console.log(await miPromesa);
}

miFuncionConPromesaYAwait();
