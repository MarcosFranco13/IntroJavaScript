//Arreglos o arrays
const numeros = [10, 20, 30, 40, 50]; //Arreglo de números
console.table(numeros);

const meses = new Array('Enero','Febrero','Marzo','Abril', 'Mayo');
console.table(meses);


const arreglo = ["Hola", 10, true, null, {nombre: 'Juan', trabajo: 'Desarrollador'}, [1,2,3]];
console.table(arreglo);

//Acceder a los valores de un arreglo
console.log(numeros[4]);
console.log(numeros[2]);
console.log(numeros[200]); //undefined

//Conocer la extensión de un arreglo
console.log(meses.length);

//Recorrer un arreglo
meses.forEach(function(mes){
    console.log(mes);
})

//Agregar un elemento al arreglo original

numeros[5]=60; //No es recomendable

numeros.push(70,80); //Forma recomendada pero no se utiliza mucho ya que no es recomendable modificar los arreglos

numeros.unshift(-10,-20); //Agrega al inicio del arreglo

console.table(numeros);

// meses.pop(); //Elimina el último elemento del arreglo

// meses.shift(); //Elimina el primer elemento del arreglo

meses.splice(2,1); //Elimina un elemento en específico, en este caso el índice 2 y la cantidad de elementos a eliminar es 1

console.table(meses);

//Rest operator o spread operator

const nuevoArreglo = [...meses, 'Junio']; //Forma recomendada de agregar un elemento a un arreglo sin modificar el original
console.table(nuevoArreglo);