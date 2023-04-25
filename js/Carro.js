//Funciones
function mostrarCarro(){
  if (isLogin == 'true'){
    traerCarrito();
  }else if (isLogin == 'false'){
    alert("¡No has iniciado sesión! ¡No hay nada en el carro para mostrar!");
  }else {
    alert ("Algo salió mal");
  }
}

function traerCarrito (){
  
  fetch(url)
  .then((response) => response.json())
  .then((productos) => {
    const table = tpl(productos);
    HTMLResponse.innerHTML = table;
  });

  const tpl = (productos) => {
    let table = `
    <table>
      <tr>
        <th>Productos</th>
        <th>Nombres</th>
        <th>Cantidad</th>
        <th>Precio</th>
        <th>Total</th>
        <th>Aciones</th>
      </tr>
    `;
    productos.forEach((producto) => {
      table += `
      <tr>
        <td>
          <img src="${producto.imagen}" alt="Imagen del artículo">
        </td>
        <td>
          <h2 class="card__title">${producto.nombreproducto}</h2>
        </td>
        <td>
          <p class="card__quantity">${producto.cantidadacomprar}</p>
        </td>
        <td>
          <p class="card__quantity">${producto.precio}</p>
        </td>
        <td>
          <p class="card__quantity">${producto.preciototal}</p>
        </td>
        <td>
          <div class="card__buttons">
            <button onclick="comprarProducto(${producto.idUsuarioPropietario},'${producto.nombreproducto}')" class="card__accept"><i class="fa-solid fa-square-check accion"></i></button>
            <button onclick="cancelarProducto(${producto.idUsuarioPropietario},'${producto.nombreproducto}')" class="card__reject"><i class="fa-solid fa-rectangle-xmark accion"></i></button>
          </div>
        </td>
      </tr>
      `;
    });
    table += `
    </table>
    `;
    return table;

  };
}

//Variables y logica
const userData = JSON.parse(localStorage.getItem("userData"));
const id = userData.id;
const url = "https://deployinrailway-production.up.railway.app/Venta/Carro/"+id;
const HTMLResponse = document.getElementById("listCar");

mostrarCarro();

const cancelarProducto = (idUsuarioFK, nombre) => {
  const confirmacion = confirm(`¿Seguro que deseas CANCELAR el producto ${nombre} en el carrito?`);
  if (confirmacion) {
    const url = 'https://deployinrailway-production.up.railway.app/Venta/Carro/Cancelar';

    // Crea el objeto JSON
    const data = { "idusuariopropetario": idUsuarioFK, 
                   "nombreproducto": nombre , 
                   "idusuariocomprador": id
                  };

    // Convierte el objeto JSON en una cadena JSON
    const jsonData = JSON.stringify(data);

    // Realiza la solicitud PUT
    fetch(url, {
      method: 'PUT',
      body: jsonData,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al realizar la solicitud PUT');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      
    })
    .catch(error => {+
      location.reload();
      console.error(error);
    });
        

  }
};

const comprarProducto = (idUsuarioFK, nombre) => {
  const confirmacion = confirm(`¿Seguro que deseas COMPRAR el producto ${nombre}?`);
  if (confirmacion) {
    const url = 'https://deployinrailway-production.up.railway.app/Venta/Carro/Comprar';

    // Crea el objeto JSON
    const data = { "idusuariopropetario": idUsuarioFK, 
                   "nombreproducto": nombre , 
                   "idusuariocomprador": id
                  };

    // Convierte el objeto JSON en una cadena JSON
    const jsonData = JSON.stringify(data);

    // Realiza la solicitud PUT
    fetch(url, {
      method: 'PUT',
      body: jsonData,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al realizar la solicitud PUT');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      
    })
    .catch(error => {+
      location.reload();
      console.error(error);
    });
        

  }
};



