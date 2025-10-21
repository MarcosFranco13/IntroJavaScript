//ForEach y map

const carrito= [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Television 50 Pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800}
]

//Foreach se usa solamente para arreglos - principalmente para mostrarlo en pantalla o consola
carrito.forEach( producto => console.log(producto.nombre));

//map - sirve principalmente para crear un nuevo arreglo
carrito.map( producto => console.log(producto.nombre));

const arreglo2 = carrito.map( producto => producto.nombre);
const arreglo3 = carrito.map( producto => `${producto.nombre} - ${producto.precio}`);

 console.log(arreglo2);
  console.log(arreglo3);