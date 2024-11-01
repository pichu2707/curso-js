let miPromesa = new Promise((resolver,rechazar)=> {
    let expresion = true;
    if(expresion)
        resolver('Resolvió correcto');
    else
        rechazar('Se pordujo un error');
});

miPromesa.then(
    valor=>console.log(valor),
    error=>console.log(error)
);
