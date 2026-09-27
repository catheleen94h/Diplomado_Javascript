/*
Ejercicio 5

Declara una variable para almacenar una cantidad de minutos y conviértela a horas y minutos restantes.
Imprime ambos valores.
*/

let minutos = 250;

//tomo las horas
let horas = parseInt(minutos/60);

// tomo los minutos restantes
let minutos2 = minutos % 60;

//Imprimo en la consola
console.log(`${minutos} minutos son: ${horas} hrs ${minutos2} min`);