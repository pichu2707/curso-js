// 1. Crea un array que almacene cinco animales.

let animales = ["perro", "gato", "pez", "pájaro", "tortuga"];

// 2. Añade dos más. Uno al principio y otro al final.

animales.unshift("elefante"); //introducimos el animal delante
animales.push("mono"); // introducimos el animal detrás

console.log(animales);

// 3. Elimina el que se encuentra en tercera posición.

console.log(animales[2]);

// 4. Crea un set que almacene cinco libros.

let mySet = new Set(["libro1", "libro2", "libro3", "libro4", "libro5"]);
console.log(mySet);

// 5. Añade dos más. Uno de ellos repetido.

mySet.add("libro6");
mySet.add("libro7");
mySet.add("libro7");

console.log(mySet);


// 6. Elimina uno concreto a tu elección.

mySet.delete("libro3");
console.log(mySet);

// 7. Crea un mapa que asocie el número del mes a su nombre.
let myMap = new Map([
    [1, "enero"],
    [2, "febrero"],
    [3, "marzo"],
    [4, "abril"],
    [5, "mayo"],
    [6, "junio"],
    [7, "julio"],
    [8, "agosto"],
    [9, "septiembre"],
    [10, "octubre"],
    [11, "noviembre"],
    [12, "diciembre"]
]); 

console.log(myMap);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor.

if (myMap.has(5)) {
    console.log(myMap.get(5));
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano.

myMap.set("verano", ["junio", "julio", "agosto"]);
console.log(myMap);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map.

let array = ["uno", "dos", "tres"];
console.log(array);
let set = new Set(array);
console.log(set);
let map = new Map();
map.set("set", set);
console.log(map);
