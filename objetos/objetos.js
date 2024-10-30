//los objetos nativos no contienen atributos ni métodos
let x = 10;
console.log(x.length); //vemos que no está definido

let persona = {
    nombre:'Antonio',
    apellido:'Lázaro',
    email:'antoniolazaro@gmail.com',
    edad:50,
    nombreCompelto: function(){
        //this es la variable que apunta al objeto que está ejecutando en este momento
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.email);

console.log(persona);
console.log(persona.nombreCompelto())

let persona2 = new Object();

persona2.nombre = 'Carlos';
persona2.telefono = '666555444';
persona2.direccion = 'Saturno 24';


console.log(persona2.telefono);
console.log(persona['apellido']);

//for in para recorrer cada una de las propiedades de nuestro objeto

for (nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}

//Agregar una propiedad
persona.tel='555444333';

console.log(persona); //Vemos que ya tenemos el teléfono metido

//quitar objetos 
delete persona.tel;
console.log(persona)