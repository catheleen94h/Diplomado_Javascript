/*
Ahora, a parte del número perfecto, se necesita calcular el factorial de un número.
El factorial de un entero positivo n, el factorial de n o n factorial, se define en principio como el producto de todos los números enteros positivos desde 1 (es decir, los números naturales) hasta n.
*/

let numero = parseInt(prompt("Ingrese un número:"));

// Número perfecto
let suma = 0;

for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
        suma += i;
    }
}

if (suma === numero) {
    console.log("El número es perfecto");
} else {
    console.log("El número no es perfecto");
}

// Factorial
let factorial = 1;

for (let i = 1; i <= numero; i++) {
    factorial *= i;
}

console.log("El factorial de " + numero + " es: " + factorial);