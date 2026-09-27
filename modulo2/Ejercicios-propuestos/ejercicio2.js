/*
Ejercicio 2
Se necesita saber si un estudiante aprobó o no. 
Un estudiante aprueba con una nota igual o superior al 60%. Se tienen las siguientes notas:
•Parcial del 25%
•Quiz del 20%
•Talleres del 30%
•Parcial del 25%
Calcula un promedio para un estudiante X y asigna notas al azar para cada una de las actividades.
*/

let parcial = 0.25;
let quiz = 0.2;
let talleres = 0.3;
let parcial2 = 0.25;

let nota1 = 2.9;
let nota2 = 1.5;
let nota3 = 4.5;
let nota4 = 2.5;

notaMax= 5.0; //100%
minimoAprobar= (notaMax *60)/100;

let notaFinal = (nota1*parcial)+(nota2*quiz)+(nota3*talleres)+(parcial2*nota4);


let resultado = notaFinal>=minimoAprobar? "Aprobo" : "Reprobo";

console.log(`
Su nota es: ${notaFinal}
Estado: ${resultado} `)