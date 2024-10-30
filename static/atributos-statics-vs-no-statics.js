// atributos estáticos vs no estáticos
class Persona{

    static contadorObjetoPersona=0; //atributo de nuestra clase
    
    email='Valor default email'; //atributo de nuestros objetos

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido=apellido;
        Persona.contadorObjetoPersona++;
        console.log(`Se incrementa contador: ` + Persona.contadorObjetoPersona)
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


let persona1=new Persona('Antonio', 'García');
let persona2=new Persona('María', 'Gutierrez');
console.log(Persona.contadorObjetoPersona);
console.log(Persona.email);
