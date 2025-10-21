//Destructuring objects sacar propiedades de un objeto
const producto = {
    nombreProducto : "Monitor 20 Pulgadas\"",
    precio : 300,
    disponible : true               
};

//Asignacion de varibale a propiedades del objeto

//Forma antigua
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);

//destructuring
const {precio, nombreProducto} = producto;
console.log(nombreProducto);