//Polimorfismos, podemos crear un método genérico en el que llamamos a diferentes clases

class Empleado{
    constructor(nombre,sueldo){
        this.nombre=nombre;
        this.sueldo=sueldo;
    }
    obtenerDetalles(){
        return `Empleado: nombre ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento=departamento;
    }

    obtenerDetalles(){
        return `Detalles: ${super.obtenerDetalles()}, departamente: ${this.departamento}`;
    }
}

function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
}


let empleado1 = new Empleado('Miguel', 2500);

let gerente1 = new Gerente('Antonio', 5000, 'Gerente');

imprimir(empleado1);
imprimir(gerente1);