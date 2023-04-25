//Funciones
function agregarAlCarrito (values){
  // Definir los datos a enviar
  const url = "https://deployinrailway-production.up.railway.app/Venta/AgregarAlCarro";
  const userData = JSON.parse(localStorage.getItem("userData"));
  const data = {
    idUsuarioPropetario: values[0],
    nombreProducto: values[1],
    idUsuarioComprador: userData.id,
    cantidadAComprar: 1,
    precioTotal: values[2]
  };

  // Configurar la solicitud POST
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  // Realizar la solicitud
  fetch(url, requestOptions)
    .then(response => {
      if (response.ok) {
        alert('¡Se agregó al carrito!');
        return response.json();
      } else {
        throw new Error('Error en la respuesta del servidor');
      }
    })
    .then(data => {
      // Aquí puedes hacer algo con la respuesta del servidor en formato JSON
      console.log(data);
    })
    .catch(error => console.error(error));
}

function crearLisent() {
    document.addEventListener('click', function(event) {
        // Verificar si el elemento clickeado es el botón "miBoton"
        if (event.target && event.target.id === 'btn-comprar') {
          if (isLogin == 'true'){
            const values = event.target.dataset.values.split('-');
            agregarAlCarrito(values);
          }else if(isLogin == 'false'){
            alert("¡Debes iniciar sesión para hacer compras!");
          }else{
            console.log ("Algo salió mal");
          }
          
        }
    });
}

//Variables y logica
crearLisent ();
