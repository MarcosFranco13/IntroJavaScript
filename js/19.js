
function sumar(n1, n2){
    return n1+n2;
}

const resultado = sumar(2,3);

console.log(resultado);

// Ejemplo mas complejo

let total = 0;

function agregarCarrito(precio){
    return total += precio;

}

function calcularImpuesto(total){
    return total * 1.15;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

console.log(total);

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar con impuesto es de: ${totalPagar}`);