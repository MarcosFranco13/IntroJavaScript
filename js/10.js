//Objetos

const nombreProducto = "Monitor 20 Pulgadas";
const precio = 300;
const disponible = true;

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true               
};

console.log(producto);

//Para acceder a las propiedades del objeto
// console.log(producto.nombreProducto);
// console.log(producto.precio);
// console.log(producto.disponible);

//Otra forma de acceder a las propiedades del objeto
// console.log(producto["nombreProducto"]);
// console.log(producto["precio"]);
// console.log(producto["disponible"]);

//Agregar nuevas propiedades a un objeto
producto.imagen = 'imagen.jpg';

//Eliminar propiedades de un objeto
delete producto.disponible;

console.log(producto);