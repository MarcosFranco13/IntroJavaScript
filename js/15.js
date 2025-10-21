//java script no existen los arreglos asociativos

//Array Methods

//arreglo unidimensional
const meses = new Array('Enero','Febrero','Marzo','Abril', 'Mayo');
// console.table(meses);


//arreglo de objetos
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

//forEach

meses.forEach(function(mes){
    if(mes=='Marzo'){
        console.log('Marzo si existe');
    }
});

//includes ayuda a saber si un elemento existe dentro de un arreglo

let resultado = meses.includes('Diciembre');
console.log(resultado); //false

//some ideal para arreglo de objetos 

resultado = carrito.some(function(producto){  
    return producto.nombre === 'Celular'
});

//reduce  ayuda a sumar o concatenar los valores de un arreglo
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0)

console.log(resultado); //3350

//filter ayuda a filtrar elementos de un arreglo
resultado = carrito.filter(function(producto){
    return producto.precio >400
});

//arroew function
resultado = carrito.some( producto => producto.nombre === 'Celular' );

console.log(resultado); //true  