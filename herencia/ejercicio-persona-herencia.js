// Ejercicio Herencia Persona

class Persona{
    static contadorPersona=0;

    constructor(nombre,apellido,edad){
        this._idPersona=++Persona.contadorPersona;
        this.nombre=nombre;
        this.apellido=apellido;
        this._edad=edad;
        
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre=nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido=apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad=edad;
    }

    toString(){
        return `
            ${this._idPersona}
            ${this._nombre}
            ${this._apellido}
            ${this._edad}`;
    }
}

let persona1 = new Persona('Juan','Perez', 25);
console.log(persona1)
let persona2 = new Persona('María','Gutierrez', 36);
console.log(persona2)