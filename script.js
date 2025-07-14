// Array
const actividades = ["ir al súper", "ir al gimnasio", "hacer la colada", "estudiar"];
console.log(actividades); //imprimir todo el array
console.log(actividades[3]) // imprimir estudiar

// objeto
// un solo coder -> muchas propiedades
const coder = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Barcelona",
    bootcamp: "SuperKode"
}
console.log(coder); // imprimir todo el objeto
console.log(coder.ciudad); // imprimir propiedad ciudad
console.log(coder["ciudad"]); // imprimir propiedad ciudad

// Array de objetos
//Accedemos primero al índice del array, y luego a la propiedad
// del objeto
let productosDeSupermercado = [
    {nombre: "Leche", precio: 4, color: "blanco"},
    {nombre: "café", precio: 3, color: "negro"},
    {nombre: "cachopo", precio: 7, color: "marrón"},
]

console.log(productosDeSupermercado); // imprimir el array de objetos completo
console.log(productosDeSupermercado[1]); // imprimir un elemento del array de objetos
console.log(productosDeSupermercado[1].nombre);
console.log(productosDeSupermercado[1]["nombre"]);

//Objetos de Array
//Accedemos primero a la propiedad del objeto (que es un array),
//y luego al índice
let generosDeMusica = {
    rock: ["Marea", "Mago de Oz", "Nirvana", "Metallica", "AC/DC"],
    pop: ["Melendi", "Marron 5", "La oreja de Van Gogh", "David Bisbal"]
}
console.log(generosDeMusica); // imprimir el objeto de array completo
console.log(generosDeMusica.pop);
console.log(generosDeMusica.rock[2]);






