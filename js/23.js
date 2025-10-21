// Switch

const metodoPago = 'cheque';

switch(metodoPago){
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'cheque':
        console.log('El usuario pagara con cheque, revisaremos los fondos primer');
        break;
    case 'efectivo':
        console.log('Pagaste con efectivo');
        break;
    
    default:
        console.log('Aún no has pagado');
        break;
}