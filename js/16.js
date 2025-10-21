//Funciones

//Ventajas de las funciones es que podemos reutilizar el codigo y organizarlo mejor
//Nota El HOISTING es un comportamiento por defecto de JavaScript
//que consiste en que las declaraciones de funciones y variables son movidas
//al inicio del archivo antes de que se ejecute el codigo
//YA QUE LAS FUNCIONES SE PUEDEN LLAMAR ANTES DE SER DECLARADAS
//Y LAS VARIABLES CON VAR NO SE INICIALIZAN HASTA LA LINEA DONDE SE ENCUENTRAN

//Declaracion de la funcion
function sumar(){
    console.log(10+10);
}

sumar(); //llamada a la funcion

//Expresion de la funcion sirve para asignarla a una variable luego se llama a la variable


const sumar2 = function() {
    console.log(3+3)
}

sumar2(); //llamada a la funcion

//IIFE - Immediately Invoked Function Expression son funciones que se ejecutan a si mismas
//sirven para no mesclar variables osea que no afecten a otras partes del codigo de otro archivo
(function(){
    console.log('Esto es una funcion IIFE');
})();

