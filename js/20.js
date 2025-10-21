//Metodos de propiedad

const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo Cancion con el id: ${id}`);
    },
    pausar: function(){
        console.log('Pausando...');
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la Playlist de: ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la Playlist de: ${nombre}`);
    }

}

reproductor.borrarCancion = function(id){
    console.log(`Borrando Cancion... ${id}`);
}

console.log(reproductor);

reproductor.reproducir(3840);

reproductor.pausar();

reproductor.borrarCancion(20);

reproductor.crearPlaylist('POP 2000');

reproductor.reproducirPlaylist('POP 2000');