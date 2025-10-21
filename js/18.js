// Funciones con parametros y argumentos

//Declaracion de la funcion
sumar(2,3); //2 y 5 son argumentos
function sumar(numero1, numero2){ //numero1 y numero2 son parametros
    console.log(numero1+numero2);
}


//Expresion de la funcion sirve para asignarla a una variable luego se llama a la variable
//parametros por default son aquellos que se asignan en la declaracion de la funcion
const sumar2 = function(n1 = 0 , n2 = 0) {
    console.log(n1+n2)
}
sumar2(5,10); 
sumar2(10); 