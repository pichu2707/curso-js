//trabajos con async

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

//async 

async function miFuncionConPromesa() {
    return 'Saludos asíncronos con promesas'
}

miFuncionConPromesa().then(valor => console.log(valor));