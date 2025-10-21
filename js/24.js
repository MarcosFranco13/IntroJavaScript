//For Loop

for (let i = 0; i < 100; i++) {
   if (i % 2 === 0) {
    console.log(`El numero ${i} es par`);
   }else{
    console.log(`El número ${i} es impar`);
   }
    
}

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

for (let i = 0; i < carrito.length; i++) {
    const element = carrito[i].nombre;
    console.log(element);
    
}

//while Loop
let i = 0; //indice o valor inicial

while (i <= 10) { //condición
    
    if (i%2 === 0) {
        console.log(`El numero ${i} es par`);  
    }else{
    console.log(`El número ${i} es impar`);
   }
 

    i++; //incremento
}


//Do While Loop
 let a = 100;

 do {
    console.log(a)
 } while (a < 10);