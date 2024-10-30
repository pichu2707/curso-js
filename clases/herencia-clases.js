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

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido=apellido;
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departameto){
        super(nombre, apellido); //llamar al constructor de la clase padre
        this._departamento = departameto;
    }

    get departameto(){
        return this._departamento;
    }

    set departameto(departameto){
        this._departamento = departameto;
    }
}

let persona1 = new Persona('María', 'Perez');
console.log(persona1);

let empleado1=new Empleado('Carlos', 'Cano', 'Informática');
console.log(empleado1);