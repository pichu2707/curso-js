// 1. Crea una variable para cada operación aritmética.

let a= 3;
let b= 5;

// 2. Crea una variable para cada tipo de operaciÃ³n de asignaciÃ³n, que haga uso de las variables utilizadas para las operaciones aritmÃ©ticas.

console.log(a+b); //Suma
console.log(a-b); //Resta
console.log(a*b); //Multiplicación
console.log(a/b); //División
console.log(a%b); //Módulo
console.log(a**b); //Potencia
a++;
console.log(a++); //Incremento
console.log(a--); //Decremento

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación.

let numero = 3;
let numero2 = 5;
let string="3";

console.log(numero==string); //Comparación de igualdad
console.log(numero!=numero2); //Comparación de desigualdad
console.log(typeof numero == typeof numero2); //Comparación de tipo
console.log(typeof numero === typeof numero2);
console.log(numero<numero2); 


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación.

console.log(numero===string); //Comparación de igualdad estric
console.log(numero>numero2);
console.log(numero<string);
console.log(numero===numero2);
console.log(numero2==string);

// 5. Utiliza el operador lógico and.

console.log(true && false);
console.log(true && true);
console.log(false && false);
console.log(false && true);

// 6. Utiliza el operador lógico or.

console.log(true || false);
console.log(true || true);
console.log(false || false);
console.log(false || true);

// 7. Combina ambos operadores lógicos.

console.log(true || (true && false));
console.log(false || !(false && true));

// 8. Añade alguna negación.

console.log(!(true || false));

// 9. Utiliza el operador ternario.

const day = "martes";

day=="lunes" ? console.log("Hoy es lunes") : console.log("Hoy no es lunes");

// 10. Combina operadores aritméticos, de comparación y lógicas.

let c = 2;
let d = 3;

console.log(c+d>=5 && c*d<10);
