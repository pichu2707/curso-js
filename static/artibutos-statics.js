//static en JS



class Persona{

    static contadorObjetoPersona=3;

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

        static saludar(){
            console.log("saludos desde método static");
        }

        static saludar2(persona){
            console.log(persona.nombre);
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

console.log(persona1.contadorObjetoPersona);
console.log(Persona.contadorObjetoPersona);
//desde la clase hija también funciona
console.log(Empleado.contadorObjetoPersona);


