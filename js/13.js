//Unir dos objetos con el spread operator

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true               
};

const medidas ={
    peso : '1kg',
    medida : '1m'   
}

//Rest operator
const nuevoProducto = {...producto, ...medidas};

console.log(nuevoProducto);
console.log(producto);