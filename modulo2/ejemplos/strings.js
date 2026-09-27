const nombre2 = "Diana Carolina"
const apellido = "Hinestroza Gonzales"

console.log(nombre2.charAt(1));

// ---- concat ----

console.log(nombre2.concat(" "+ apellido));

// --- includes ---

console.log(nombre2.includes("a","i","o")); // true

// -- substrings

console.log(nombre2.substring(0,3)); // Dia
console.log(nombre2.substring(6,10)); // Caro


// --- replace ---
const nombre = "Diana";

console.log(nombre.replace("Diana","Alejandra"));

console.log(nombre.replace("Diana","Ana"));

console.log(nombre.replace("iana","arcy"));

// -- replaceAll --

const emoji = "😍 ❤️ 😍 ❤️";

console.log(emoji.replaceAll("❤️","😭"));


// Upper-Case --- Lower-Case --

const pais= "Estados Unidos"

console.log(pais.toLowerCase());
console.log(pais.toUpperCase());

