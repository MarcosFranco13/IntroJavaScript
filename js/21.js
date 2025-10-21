//Arrow Function
const sumar2 = function(n1,n2) {
    console.log(n1+n2);
}

sumar2(5,10); 

const sumar3 = (n1,n2) => console.log(n1+n2);


sumar3(10,10); 

const aprendiendo = (Tecnologia) => console.log(`Aprendiendo ${Tecnologia}`);

aprendiendo('JavaScript');

//Si es un solo parametro no son necesarios los parentesis

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

meses.forEach(mes =>{
    if(mes=='Marzo'){
        console.log('Marzo si existe');
    }
});

let resultado;
resultado = carrito.some(producto => producto.nombre === 'Celular PRO');
console.log(resultado); //false

resultado = carrito.reduce((total, producto) => total + producto.precio, 0)
console.log(resultado); //3350

//filter ayuda a filtrar elementos de un arreglo
resultado = carrito.filter(producto => producto.precio < 400 );
console.log(resultado);

//arroew function
resultado = carrito.some( producto => producto.nombre === 'Celular' );

console.log(resultado); //true  