//Fetch API
function obtenerEmpleado(){

    const archivo = 'empleado.json'

    fetch(archivo)
        .then(resultado => {
            return resultado.json();
          })
        .then( datos => {
            // console.log(datos);

            const {empleados} = datos;
            // console.log(empleados);
            empleados.forEach(empleado => {
                // console.log(empleado);
                console.log(empleado.id);
                console.log(empleado.nombre);
                console.log(empleado.puesto);

                // document.querySelector('.contenido').textContent += empleado.nombre;
            });


        })
}

obtenerEmpleado();