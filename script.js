// Array lista de elementos
const actividades = ["ir al súper", "ir al gimnasio", "hacer la colada", "estudiar"];
console.log(actividades); // Imprimir todo el array completo
console.log(actividades[3]) // Imprimir solo el cuarto elemento del array (posición 3, porque empieza en 0) -> estudiar

// Objeto
// Representa a una sola persona coder, con varias características (propiedades)
const coder = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Barcelona",
    bootcamp: "SuperKode"
}
console.log(coder); // Imprimir todo el objeto completo
// Imprime solo la propiedad "ciudad" de dos formas distintas
console.log(coder.ciudad); // Forma habitual: acceso con punto → Resultado: "Barcelona"
console.log(coder["ciudad"]); // Forma alternativa: acceso con corchetes → Resultado: "Barcelona"

// Array de objetos
// Accedemos primero al índice del array, y luego a la propiedad del objeto
// Cada objeto representa un producto del supermercado
let productosDeSupermercado = [
    {nombre: "Leche", precio: 4, color: "blanco"},
    {nombre: "café", precio: 3, color: "negro"},
    {nombre: "cachopo", precio: 7, color: "marrón"},
]

console.log(productosDeSupermercado); // Imprimir todo el array con todos los productos
console.log(productosDeSupermercado[1]); // Imprimir solo el segundo producto del array (índice 1)
console.log(productosDeSupermercado[1].nombre); // Imprimir solo el nombre del segundo producto (forma con punto)
console.log(productosDeSupermercado[1]["nombre"]); // Imprimir el mismo valor, pero con corchetes (forma alternativa)

// Objetos con arrays como propiedades
// Accedemos primero a la propiedad del objeto (que es un array),y luego al índice
// Cada propiedad (rock, pop) es una lista de artistas de ese género
let generosDeMusica = {
    rock: ["Marea", "Mago de Oz", "Nirvana", "Metallica", "AC/DC"],
    pop: ["Melendi", "Marron 5", "La oreja de Van Gogh", "David Bisbal"]
}
console.log(generosDeMusica); // Imprimir el objeto de array completo
console.log(generosDeMusica.pop); // Imprimir una lista del objeto. La lista completa de artistas de pop
console.log(generosDeMusica.rock[2]); // Imprimir el tercer artista de la lista rock (posición 2)






