//Funciones
function mostrarCarro(){
  if (isLogin == 'true'){
    console.log("Hola");
  }else if (isLogin == 'false'){
    alert("¡No has iniciado sesión! ¡No hay nada en el carro para mostrar!");
  }else {
    alert ("Algo salió mal");
  }
}

//Variables y logica
mostrarCarro();