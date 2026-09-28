/*
Calcula cuántos números impares hay entre 1 y un número n dado.
*/

let num8 = Number(prompt("ingrese numero para determinar cuantos numeros impares hay: "));
let resultado8 = 0;
let impar;

for(let i=1 ; i<=num8 ;i++){

     impar = (i%2);
        if(impar==1){resultado8++;}
        
}
console.log(`hay ${resultado8} numeros impares entre 1 y ${num8}`)
