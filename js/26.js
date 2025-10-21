//This palabra reservada
//Hace referencia a las propiedades del objeto sobre el cual se esta ejecutando  

const reservacion ={
    nombre: 'Juan',
    apellido: 'De la torre',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this. total}`);
    }
}

console.log(reservacion.informacion());