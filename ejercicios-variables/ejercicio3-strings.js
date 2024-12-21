// 1. Concatena dos cadenas de texto.

let string1 = 'Hola';
let string2 = 'Mundo'; 

let string3 = string1 + ' ' + string2;
console.log(string3);

// 2. Muestra la longitud de una cadena de texto.

console.log(string3.length);

// 3. Muestra el primer y último carácter de un string.

console.log(string3[0]);
console.log(string3[9]);

// 4. Convierte a mayúsculas y minúsculas un string.

console.log(string3.toLocaleUpperCase());

// 5. Crea una cadena de texto en varias lí­neas.

let string4 = `hola
mundo`;

console.log(string4);

// 6. Interpola el valor de una variable en un string.

let nombre = "Javi";
let apellido = "Lázaro";

let frase = `Mi nombre es ${nombre} y mi apellido es ${apellido}`;
console.log(`Mi nombre es ${nombre} y mi apellido es ${apellido}`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones.
for (let i = 0; i < frase.length; i++) {
    if (frase[i] === " ") {
        frase = frase.replace(" ", "-");
        console.log(frase);
    }
}

// 8. Comprueba si una cadena de texto contiene una palabra concreta.

console.log(frase.includes("Javi"));

// 9. Comprueba si dos strings son iguales.

let string5 = "Hola Mundo";
let string6 = "hola mundo";

console.log(string5 === string6);
console.log(string5.toLowerCase() === string6.toLowerCase());

// 10. Comprueba si dos strings tienen la misma longitud.

console.log(string5.length === string6.length);