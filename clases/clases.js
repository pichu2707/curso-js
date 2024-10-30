//clases en JS

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido=apellido;
    }
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre=nombre;
    }
}

let persona1= new Persona('Juan', 'Perez');
console.log(persona1);

let persona2= new Persona('Carlos', 'Cano');
console.log(persona2);