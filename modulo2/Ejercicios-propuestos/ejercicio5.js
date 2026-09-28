
/*
Ejercicio 5
Crea un programa que pida al usuario introducir números.
El ciclo continuará pidiendo números hasta que el usuario introduzca el número 0, momento en que el programa termina y muestra un mensaje de despedida.*/

//const prompt = require("prompt-sync")(); node js

let numero;

do {
    numero = parseInt(prompt('introduce un numero (0 para salir): '))
}while (numero!=0)
    
    console.log("muchas gracias");