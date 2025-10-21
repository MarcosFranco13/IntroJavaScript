//POO

// Object Literal
const producto = {
    nombre: 'Table',
    precio: 500
}

//Object Constructor
function Producto(nombre, precio, disponible) { //clases
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
    
}

//Prototypes va a ser una función que está asociada a un tipo de objeto, es decir, este producto puede funciones que solamente pueden 
//ser utilizadas en ese tipo de objeto cliente.

//Nos permite crear funciones que solo se utilizan en un objeto en especifico.

Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}

const producto2 = new Producto('Monitor Curvo de 49"', 800, true);
const producto3 = new Producto('Laptop', 5000, false);
const producto4 = new Producto('Celular', 21000, true);




function formatearProducto(producto, precio){
    return `El producto ${producto.nombre} tiene un precio de: $ ${producto.precio}`;
}

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(producto4.formatearProducto());




