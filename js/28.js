//Classes en java Script

class Producto {

    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
         return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }

    getPrecio(){
        return this.precio;
    }

}


const producto2 = new Producto('Monitor Curvo de 49"', 800, true);
const producto3 = new Producto('Laptop', 5000, false);

//Herencia 
//Permite evitar codigo duplicado o redundante
class Libro extends Producto{ //Extends es la funcion que nos permite establecer una herencia de otra classe que se denomira padre
    constructor(nombre, precio, isbn){
        super(nombre,precio);//La funcion permite ir al contructor padre y buscara los valores que le pases.
        this.isbn = isbn;
    }

    formatearProducto(){
         return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }

    getPrecio(){
     super.getPrecio()
     console.log(`Y si hay en existencia`);
    }

}

const libro = new Libro('JavaScript la Revolución', 120, '125488778449456');
console.log(libro.formatearProducto());
console.log(libro.getPrecio());


console.log(producto2.formatearProducto())
console.log(producto3.formatearProducto())
console.log(producto2.getPrecio())