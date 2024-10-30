//GET en objetos de JS

let persona = {
    nombre:'Antonio',
    apellido:'Lázaro',
    email:'antoniolazaro@gmail.com',
    edad:50,
    get nombreCompelto(){
        //this es la variable que apunta al objeto que está ejecutando en este momento
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombreCompelto)

