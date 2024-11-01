class DispositivoEntrada{
    constructor(tipoEntrada,marca){
        this._tipoEntrada=tipoEntrada;
        this._marca=marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada=tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca=marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones=0;

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idRaton=++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `Raton: [idRaton ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`; 
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclado=0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado=++Teclado.contadorTeclado;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `Teclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}`
    }
}

class Monitor{
    static contadorMonitores=0;

    constructor(marca, tamaño){
        this._idMonitor=++Monitor.contadorMonitores;
        this._marca=marca;
        this._tamaño=tamaño;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    toString(){
        return `Monitor: [diMonitor:  ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}]`;
    }
}

class Computadora{
    static contadorComputadoras=0;

    constructor(nombre,monitor,raton,teclado){
        this._idComputadora=++Computadora.contadorComputadoras;
        this._nombre=nombre;
        this._monitor=monitor;
        this._raton=raton;
        this._teclado=teclado;
    }

    toString(){
        return `Computadora: ${this._idComputadora}: 
        ${this._nombre}
        ${this._monitor}
        ${this._raton}
        ${this._teclado}`;
    }

}

class Orden{
    static contadorOrdenes=0;

    constructor(){
        this._idOrden=++Orden.contadorOrdenes;
        this._computadoras=[];
    }

    get idOrden(){
        this._idOrden
}
    agregarComputadoras(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let computadorasOrden='';
        for(let computadora of this._computadoras){
            computadorasOrden += `\n${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }

    
}

//Creación de ratón
let raton1 = new Raton('USB', 'HP');
let raton2 = new Raton('Bluetooth', 'Fujitsu');
console.log(raton1.toString());
console.log(raton2.toString());

//Creación de teclados
let teclado1= new Teclado('USB', 'MSI');
let teclado2= new Teclado('Bluetooth','Dell');
console.log(teclado1.toString());
console.log(teclado2.toString());

//Creación de monitores
let monitor1= new Monitor('Acer', 27);
let monitor2= new Monitor('LG', 31);
console.log(monitor1.toString());
console.log(monitor2.toString());

//Creando computadoras
let computadora1=new Computadora('HP', monitor1, teclado1, monitor1);
console.log(computadora1.toString());
console.log(`${computadora1}`)
let computadora2=new Computadora('ACER', monitor2, teclado2, raton2);
// Creando orden
let orden1 = new Orden();
orden1.agregarComputadoras(computadora1);
orden1.agregarComputadoras(computadora1);
orden1.agregarComputadoras(computadora2);
orden1.mostrarOrden();

let orden2=new Orden();
orden2.agregarComputadoras(computadora2);
orden2.agregarComputadoras(computadora2);
orden2.agregarComputadoras(computadora1);
orden2.mostrarOrden();