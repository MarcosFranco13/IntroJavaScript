//Orden de las operaciones

let resultado;

resultado = 20 + 30 * 2;
//Primero se hacen las multiplicaciones y divisiones y despues las sumas y restas   

console.log(resultado);

resultado = (20 + 30) * 2; //Con parentesis cambiamos el orden de las operaciones

console.log(resultado); 

//Ejemplo Queremos ofrecer un descuento del 20% al carrito de compras

resultado = (100+200+300) * 0.2; //El total del carrito lo multiplicamos por el descuento

console.log(resultado);

//Cobro de IVA
resultado = (100 + 200 + 300) * 1.16; //El total del carrito lo multiplicamos por el IVA

console.log(resultado);

//incrementos
let puntaje = 10;

//puntaje = puntaje + 1;
puntaje += 10; //

puntaje++; //incrementa de 1 en 1
++puntaje; //incrementa de 1 en 1
puntaje--; //decrementa de 1 en 1

console.log(puntaje);

