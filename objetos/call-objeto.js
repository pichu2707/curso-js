let persona = {
    nombre: 'Miguel',
    apellido: 'Sanz',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona2 = {
    nombre:'Carlos',
    apellido:'Cano',
}

//Uso call
//el método persona1.nombreCompleto con los datos del persona2

console.log(persona.nombreCompleto());

console.log(persona.nombreCompleto.call(persona2))

//argumentos en la expresión call

let persona3 = {
    nombre: 'Miguel',
    apellido: 'Sanz',
    nombreCompleto: function(titulo, tel){
        return titulo + ':' + this.nombre + ' ' + this.apellido + ',' + tel;
    }
}

console.log(persona.nombreCompleto.call(persona3, 'Autonomo', '123456789'));