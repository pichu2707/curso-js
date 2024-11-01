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

let empleado1 = new Empleado('Miguel', 2500);
console.log(empleado1.obtenerDetalles());
let gerente1 = new Gerente('Antonio', 5000, 'Gerente');
console.log(gerente1.obtenerDetalles());