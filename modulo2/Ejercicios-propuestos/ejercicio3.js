/*
Crea las tablas de multiplicar del 1 al 10.
*/

let num3=1;

for(let i=1; i<11; i++) {
 console.log(`-- Tabla del ${i}--`)

 for(let j=0; j<10; j++) {
    console.log(`
    ${i} x ${num3} = ${i*num3}
    `)
      num3++;
      if(num3>10){num3=1;}
    }

}