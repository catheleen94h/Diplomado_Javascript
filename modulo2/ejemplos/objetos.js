const personaje = {
    nombre:"Goku",
    raza: "Saiyajin",
    edad: 35,
    poder: 9000

}

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje.raza);
console.log(personaje.edad);
console.log(personaje.poder);

//agregar una nueva propiedad

personaje.hermano = "Raditz";

console.log(personaje);

//modificar una propiedad

personaje.edad = 22;

console.log(personaje);

//eliminar una propiedad
delete personaje.hermano;

console.log(personaje);



const personajes = {
    nombre1:"Goku",
    raza: "Saiyajin",
    edad: 35,
    poder: 9000,
    informacion: { 
            planeta: "Tierra",
            serie: "Dragon Ball Z",
            Coordenadas: {
                latitud: 12.3456,
                longitud: 45.6789
            }
    }

}

console.log(personajes.informacion.planeta);

const {nombre1, informacion:{planeta,serie} } = personajes

console.log(nombre1);
console.log(planeta);
console.log(serie);
console.log(personajes);

//--- proteger objetos

Object.freeze(personajes)

   personajes.nombre1 = "vegeta" // no modifica la variable por que esta protegida
   personajes.imagen = "goku.jpg" // no modifica la variable por que esta protegida

   console.log(Object.keys(personajes));
   console.log(Object.values(personajes));
