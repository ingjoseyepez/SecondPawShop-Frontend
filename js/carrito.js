//Funciones
function crearLisent(isLogin) {
    document.addEventListener('click', function(event) {
        // Verificar si el elemento clickeado es el botón "miBoton"
        if (event.target && event.target.id === 'btn-comprar') {
            console.log("¿Hola?");
          if (isLogin == 'true'){
            console.log("Está logeado");
          }else if(isLogin == 'false'){
            alert("¡Debes iniciar sesión para hacer compras!");
          }else{
            console.log ("Algo salió mal");
          }
          
        }
    });
}

//Variables y logica
crearLisent (isLogin);
