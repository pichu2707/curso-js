let miPromesa = new Promise((resolver,rechazar)=> {
    let expresion = true;
    if(expresion)
        resolver('Resolvió correcto');
    else
        rechazar('Se pordujo un error');
});

let promesa = new Promise((resolver) => {
    console.log('inicio promesa');
    setTimeout( ()=> resolver('saludos con promesa y timeout'), 3000);
    console.log('final promesa');
});
promesa.then(valor=>console.log(valor));
