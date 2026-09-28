/*
Calcula la suma de todos los números pares hasta un número n dado.
*/

let num7 = Number(prompt("ingrese numero hasta donde llega la suma de pares: "));
let resultado7 =0;
let par;

for(let i=0 ; i<=num7 ;i++){

     par = (i%2);
        if(par==0){resultado7 += i;}
        
}
console.log(`la suma de todos los números pares hasta ${num7} es: ${resultado7}`)