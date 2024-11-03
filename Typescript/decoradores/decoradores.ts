function Saludar(target:Function):avoid{
    target.prototype.saludos = function():avoid{
        console.log("hola desde decoradores");
    }
}

@Saludar
class Hola{
    constructor(){}
}

let hola1 = new Hola();
hola1.saludos();