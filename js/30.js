//Promises

const usuarioAutentificado = new Promise((resolve, reject) =>{
    const auth = false;

    if (auth) {
        resolve('Usuario Autentificado');//El promise se cumple
    }else{
        reject('No se pudo iniciar sesión');//El promise no se cumple
    }
});

usuarioAutentificado
    .then( function(resultado){
        console.log(resultado)
    })
    .catch(function(error){
        console.log(error)
    })

//En los primises existen 3 valores 
//Pending : Quiere decir que el promise no se ha cumplido pero tampoco se ha rechazado
//Fulfilled: Ya se cumplio
//Rejected: Se ha rechazado o no se pudo cumplir