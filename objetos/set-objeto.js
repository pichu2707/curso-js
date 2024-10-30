//set en JS

let persona = {
    nombre:'Antonio',
    apellido:'Lázaro',
    email:'antoniolazaro@gmail.com',
    edad:50,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompelto(){
        //this es la variable que apunta al objeto que está ejecutando en este momento
        return this.nombre + ' ' + this.apellido;
    }
}


console.log(persona.idioma);
// como vemos podemos cambiar el lang desde aquí fuera
persona.lang='en'
// aquí está lo que nos ofrece por consola
console.log(persona.lang);
console.log(persona.idioma)