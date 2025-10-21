 // String  o Cadenas de  Texto
const producto = "Monitor de 20\"";
const producto2 = String('Monitor 30 Pulgadas');
const producto3 = new String('Monitor 50 Pulgadas');

console.log(producto);//Mas utilizada
console.log(producto2);
console.log(producto3);
console.log(typeof producto3);

// Operaciones 

const tweet = "Este es un tweet de prueba";
const articulo2 = "Monitor HD";

// length es para la extension o tamaño del texto
console.log(tweet.length);
console.log(articulo2);

// IndexOf - nos muestra la posicion de una palabra que busquemos
console.log(tweet.indexOf('tweet'));
console.log(articulo2.indexOf('tweet'));

//includes (retona true o false)
console.log(tweet.includes('tweet'));
console.log(articulo2.includes('tweet'));