let suma = function( a:number, b:number){
    return a+b;
};

console.log(suma(5,3));

let sumaFlecha=(a:number, b:number)=> a+b;
console.log(sumaFlecha(5,5));

var obtenerNombre = function(){
    return 'Miguel Ilustre';
}
console.log(obtenerNombre());

let obtenerNombreFlecha = () => 'Miguel Ilustre Flecha';
console.log(obtenerNombreFlecha());