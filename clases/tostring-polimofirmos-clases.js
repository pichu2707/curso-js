// Sobreescritura en JS


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

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

    toString(){
        /**
         * Se aplica polimorfismo (multiples formas en tiempo de ejecución)
         * el método que se ejecuca depende si es una referencia de tipo padre
         * o de tipo hijo
         */
        return this.nombreCompleto();//this._nombre + ' ' + this._apellido;
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

    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ': ' + this._departamento;
    }
}

let persona1 = new Persona('María', 'Perez');
console.log(persona1);

let empleado1=new Empleado('Carlos', 'Cano', 'Informática');
console.log(empleado1);
// Cómo vemos podemos acceder al nombre completo de la clase padre
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());
console.log(persona1.toString());
