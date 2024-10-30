//Hoisting y clases en JS

//let persona2 = new persona('María', 'Juarez'); //No es posible crear objetos antes de declarar la clase
//No se aplica el Hoisting

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

let persona2 = new Persona('María', 'Perez');
console.log(persona2);