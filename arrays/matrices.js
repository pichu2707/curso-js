// Matrices en JS

// declaración de una matriz

let matriz = [[],[]];

// modificar los valores de nuestra matriz

//renglón 0
matriz[0][0]=100;
matriz[0][1]=200;
matriz[0][2]=300;

//renglón 1
matriz[1][0]=400;
matriz[1][1]=500;
matriz[1][2]=600;

console.log(`Elemento[0][1] = ${matriz[0][1]}`);
console.log(`Elemento[1][2] = ${matriz[1][2]}`);

//Iteración en la matriz
//renglones
for(let ren=0; ren < matriz.length; ren++){
    //columnas
    for(let col = 0; col < matriz[ren].length; col++){
        console.log(`Elemento[${ren}][${col}]}] = ${matriz[ren][col]}`);
    }
}