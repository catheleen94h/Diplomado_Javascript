/*
Ejercicio 1
Una tienda ofrece descuentos dependiendo de la cantidad de productos que se compran.
Si se compran más de 10 productos, se tiene un 20% de descuento; si se compran entre 5 y 10, 
se obtiene un 10%, y si se compran menos de 5, no hay descuento.
Crea las variables necesarias para satisfacer el ejercicio.

*/

let qtyProductos = 20;
let valorProductos = 100000;


let descuento = qtyProductos > 10 ? 0.2
              : qtyProductos>= 5 && qtyProductos <=10 ?  0.1
              :  0;

let totalPagar = valorProductos - (valorProductos*descuento);

console.log(`
    productos:      ${qtyProductos}
    valor compra:   ${valorProductos}
    Descuento:      ${descuento*100}%
    Valor a pagar:  ${totalPagar}`)