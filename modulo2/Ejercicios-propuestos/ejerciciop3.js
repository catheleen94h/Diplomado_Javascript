/* Ejercicio 3
Una empresa tiene almacenada la información de sus empleados en diccionarios de datos.
La empresa otorgará unos bonos a los empleados que tuvieron más de 60 ventas.
Determina si un empleado tiene o no bono. */

const empleados = [
    { nombre: "Ana", ventas: 32 },
    { nombre: "Fernando", ventas: 67 },
    { nombre: "Carla", ventas: 70 }
];

// Opcion 1: Usando el método forEach (el más directo)
empleados.forEach(empleado => {
    if (empleado.ventas > 60) {
        console.log(`El empleado ${empleado.nombre} TIENE derecho a bono.`);
    } else {
        console.log(`El empleado ${empleado.nombre} NO tiene derecho a bono.`);
    }
});

