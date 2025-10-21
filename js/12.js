// "use strict";//ejecuta en modo estricto
//Metodo de Object

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true               
};


Object.seal(producto);//Cierra el objeto, no permite agregar o eliminar propiedades, pero si modificar las existentes

producto.precio = 'Nuevo Precio'; // Modificar una propiedad existente

// Object.freeze(producto); //Congela el objeto, no permite agregar, eliminar o modificar propiedades

producto.imagen = "imagen.jpg"; // Agregar nuevas propiedades

console.log(Object.isFrozen(producto)); // Verifica si el objeto esta congelado

 console.log(producto);

 