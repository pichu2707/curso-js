//imprimir objetos en JS

let persona = {
    nombre:'Antonio',
    apellido:'Lázaro',
    email:'antoniolazaro@gmail.com',
    }

//concatenar cada valor de cada propiedad
console.log(persona.nombre + ', ' + persona.apellido);

//for in
for( nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}
