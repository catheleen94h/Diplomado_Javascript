/*
Determina si una palabra o frase dada es o no un palíndromo.
Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.
*/

let palabra = prompt("ingrese la palabra a evaluar: ")

let comparacion = palabra.split('').reverse().join('');

let resultado = palabra == comparacion? "es un palíndromo" : 'NO es un palíndromo';

console.log(`la palabra ${palabra} ${resultado}`)