/*
Una empresa de seguridad tiene como reto desarrollar un software para validar contraseñas, necesita que el software solicite contraseñas a los usuarios hasta que esta sea correcta, debe mostrar alertas cada vez que la contraseña sea incorrecta y una alerta cuando sea correcta.
*/
let contrasena = "Ws123";
let ingreso;

do{  ingreso = prompt("ingrese su contraseña: ")

    if (ingreso !== contrasena) {
        alert("Contraseña incorrecta. Intente nuevamente.");}
}
while (contrasena !== ingreso)

    alert("Contraseña correcta")
