class Producto{
    
    static contadorProductos=0;

    constructor(nombre,precio){
        this._idProducto=++Producto.contadorProductos;
        this._nombre=nombre;
        this._precio=precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre=nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio=precio;
    }

    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}€`;
    }
}


//Pasamos a la clase de producto

class Orden{
    static contadorOrden=0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructo(){
        this._idOrden=++Orden.contadorOrden;
        this._productos=[];
        //this._contadoProductosAgregados=0;
    }

    get _idOrden(){
        this._idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto); //añade el producto
            //this._productos[this._contadoProductosAgregados++] = productos; //Podemos expecificar el índice del producto
        } else {
            console.log('No se pueden agregar más productos')
        }
    }

    calcularTotal(){
        for(let productos of this._productos){
            totalVenta += productos.precio; //TotalVenta= totalVenta+producto.Precio
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productoOrden='';
        for (let productos of this._productos){
            productosOrden += productos.toString()+' ';
        }
        console.log(`Orden; ${this._idOrden} Total: ${this.calcularTotal}, Productos: ${productosOrden}`)
    }
}

let producto1 = new Producto('Pantalon', 200);
let producto2 = new Producto('Camisa', 100);
let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();