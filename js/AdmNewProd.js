if (isLogin === 'false'){
  window.open("index.html", "_self");
  alert("¡Necesitas estar logeado para acceder a estos")
}

//variables
const url = "https://deployinrailway-production.up.railway.app/Producto/Verificando";
const HTMLResponse = document.getElementById("historial");

fetch(url)
  .then((response) => response.json())
  .then((productos) => {
    const table = tpl(productos);
    HTMLResponse.innerHTML = table;
  });

const tpl = (productos) => {
  let table = `
    <table>
      <thead>
        <tr>
        <th>Productos</th>
        <th>Nombres</th>
        <th>Categoria</th>
        <th>Cantidad</th>
        <th>Precio</th>
        <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
  `;
  productos.forEach((producto) => {
    table += `
      <tr data-id="${producto.id}">
      <td class='centered'><img src="${producto.imagen}"></td>
      <td class='centered'><h2 class="card__title">${producto.nombre}</h2></td>
      <td class='centered'><p class="card__category">${producto.categoria}</p></td>
      <td class='centered'><p class="card__quantity">${producto.cantidad}</p></td>
      <td class='centered'><p class="card__quantity">${producto.precio}</p></td>
      <td class='centered'><div class="card__buttons">
            <button onclick="publicarProducto(${producto.idUsuarioFK},'${producto.nombre}')" class="card__accept">Aceptar</button>
            <button onclick="eliminarProducto(${producto.idUsuarioFK},'${producto.nombre}')" class="card__reject">Rechazar</button>
          </div></td>
      </tr>
    `;
  });
  table += `
      </tbody>
    </table>
  `;
  return table;

};

const eliminarProducto = (idUsuarioFK, nombre) => {
  const confirmacion = confirm(`¿Seguro que deseas ELIMINAR el producto ${nombre}?`);
  if (confirmacion) {
    const url = `https://deployinrailway-production.up.railway.app/Producto/Eliminar/${idUsuarioFK}/${nombre}`;

    fetch(url, {
      method: 'DELETE'
    })
      .then(() => {
        console.log('Producto eliminado correctamente');
        location.reload();
        // Remover la fila correspondiente al producto eliminado del DOM
        const filaProductoEliminado = document.querySelector(`tr[data-id="${idUsuarioFK}"]`);
        filaProductoEliminado.remove();
      })
      .catch(error => console.error(error));

    
  }
};

const publicarProducto = (idUsuarioFK, nombre) => {
  const confirmacion = confirm(`¿Seguro que deseas PUBLICAR el producto ${nombre}?`);
  if (confirmacion) {
    const url = 'https://deployinrailway-production.up.railway.app/Producto/VerificandoToPublicado';

    // Crea el objeto JSON
    const data = { "idUsuarioFK": idUsuarioFK, "nombre": nombre };

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

