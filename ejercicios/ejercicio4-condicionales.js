// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor.

let miNombre = "Javi";

if (miNombre) {
    console.log(miNombre);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos.

let usuario = "user";
let password = "1234";

if (usuario === "user" && password === "1234") {
    console.log("Usuario y contraseña correctos");
} else {  
    console.error("Usuario o contraseña incorrectos");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje.

let numero = 0;

if (numero > 0) {
    console.log("El número es positivo");
} else if (numero < 0) {
    console.log("El número es negativo");
} else {
    console.log("El número es cero");  
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan.

let edad = 13;
let restante = 18 - edad;

if (edad < 18) {
    if (restante === 1) {
        console.log(`No puedes votar, te falta ${restante} año`);
    } else if (restante > 1) {
        console.log(`No puedes votar, te faltan ${restante} años`);
    }
    } else {
        console.log("Es mayor de edad y puede votar");
    }

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad .

if (edad >= 18) {
    console.log("adulto");
} else {
    console.log("menor");
}

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes".

let mes = "febrero";

if (mes === "enero" || mes === "febrero" || mes === "diciembre") {
    console.log("Invierno");
} else if (mes === "marzo" || mes === "abril" || mes === "mayo") {
    console.log("Primavera");
} else if (mes === "junio" || mes === "julio" || mes === "agosto") {
    console.log("Verano");
} else if (mes === "septiembre" || mes === "octubre" || mes === "noviembre") {
    console.log("Otoño");
}

// 7. Muestra el número de dí­as que tiene un mes dependiendo de la variable del ejercicio anterior.

if (mes === "enero" || mes === "marzo" || mes === "mayo" || mes === "julio" || mes === "agosto" || mes === "octubre" || mes === "diciembre") {
    console.log("31 días");
} else if (mes === "febrero") { 
    console.log("28 días");
} else {   
    console.log("30 días");
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.

let idioma = "de";

switch (idioma) {
    case "es":
        console.log("Hola");
        break;
    case "en":
        console.log("Hello");
        break;
    case "fr":
        console.log("Bonjour");
        break;
    case "de":
        console.log("Hallo");
        break;
    default:
        console.log("Idioma no soportado");
    }

// 9. Usa un switch para hacer de nuevo el ejercicio 6.

switch (mes) {
    case "enero":
        console.log("Invierno");
        break;
    case "febrero":
        console.log("Invierno");
        break;
    case "marzo":
        console.log("Primavera");
        break;
    case "abril":
        console.log("Primavera");  
        break;
    case "mayo":
        console.log("Primavera");  
        break;
    case "junio":
        console.log("Verano");
        break;
    case "julio":
        console.log("Verano");
        break;
    case "agosto":
        console.log("Verano");
        break;
    case "septiembre":
        console.log("Otoño");
        break;
    case "octubre":
        console.log("Otoño");
        break;
    case "noviembre":
        console.log("Otoño");
        break;
    case "diciembre":
        console.log("Invierno");
    }

// 10. Usa un switch para hacer de nuevo el ejercicio 7.

switch (mes) {
    case "enero":
        console.log("31 días");
        break;
    case "febrero":
        console.log("28 días");
        break;
    case "marzo":
        console.log("31 días");
        break;
    case "abril":
        console.log("30 días");  
        break;
    case "mayo":
        console.log("31 días");  
        break;
    case "junio":
        console.log("30 días");
        break;
    case "julio":
        console.log("31 días");
        break;
    case "agosto":
        console.log("31 días");
        break;
    case "septiembre":
        console.log("30 días");
        break;
    case "octubre":
        console.log("31 días");
        break;
    case "noviembre":
        console.log("30 días");
        break;
    case "diciembre":
        console.log("31 días");
    }
