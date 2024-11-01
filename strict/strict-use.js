//Modo estricto en JS   
"use strict" //así se define que se use el modo estricto
/**
 * Este modo no nos dejará usar variables que no estén declarados primero
 * En este ejemplo vemos que no podemos usar estas variables
 */

x=10;
console.log(x);

miFuncion();
function miFuncion(){
    "use strict"
    y=15;
}