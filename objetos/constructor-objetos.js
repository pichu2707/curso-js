// constructor de objetos en JS
//Funcion constructor de tipo persona

function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido=apellido;
    this.email=email;
    this.nombreCompleto=function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//usamos el método new para poder usar la función y sus parámetros
let padre = new Persona('Juan', 'Pérez', 'jperez@mail.com');
console.log(padre);
console.log(padre.nombreCompleto());
let madre = new Persona('María', 'Sanjuan', 'msanjuan@mail.com');
console.log(madre);
console.log(madre.nombreCompleto());