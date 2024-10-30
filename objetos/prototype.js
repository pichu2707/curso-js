//uso de prototype

function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido=apellido;
    this.email=email;
    this.nombreCompleto=function(){
        return this.nombre + ' ' + this.apellido;
    }
}
//Creamos un valor por defecto de tel para cualquier objeto. 
Persona.prototype.tel = '555444333'

//usamos el método new para poder usar la función y sus parámetros
let padre = new Persona('Juan', 'Pérez', 'jperez@mail.com');
console.log(padre);
//Aquí podemos modificar el valor que le hemos creado
padre.tel='666555444'
console.log(padre)
let madre = new Persona('María', 'Sanjuan', 'msanjuan@mail.com');
console.log(madre);
console.log(madre.nombreCompleto());