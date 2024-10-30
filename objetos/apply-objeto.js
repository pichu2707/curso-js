//Método apply en JS

let persona = {
    nombre: 'Miguel',
    apellido: 'Sanz',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}

let persona2 = {
    nombre:'Carlos',
    apellido:'Cano',
}

let arreglo = ['Autonomo', '123456789'];
console.log(persona.nombreCompleto.apply(persona2, arreglo));