
/* Determina si un número es perfecto o no.

Un número perfecto es un número entero positivo que es igual a la suma de sus divisores propios positivos.

*/

let numero1 = parseInt(prompt("Ingrese un número:"));
let suma1 = 0;

for (let i = 1; i < numero1; i++) {
    if (numero1 % i === 0) {
        suma1 += i;
    }
}

if (suma1 === numero1) {
    console.log("El número es perfecto");
} else {
    console.log("El número no es perfecto");
}