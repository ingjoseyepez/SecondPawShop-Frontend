
const url = "http://localhost:8080/Producto/Verificando";
const HTMLResponse = document.getElementById("historial");

fetch(url)
  .then((response) => response.json())
  .then((productos) => {
    const table = tpl(productos);
    HTMLResponse.innerHTML = table;
  });

<<<<<<< HEAD


const tpl = (producto) => {
    producto.forEach((producto) => {
        let content = document.createElement("div");
        content.className = "main";
        HTMLResponse.innerHTML= `
            <table>
            <tr>
             <th>Productos</th>            
             <th>Nombres</th>            
             <th>Categoria</th>            
             <th>Descripcion</th>            
             <th>Cantidad</th>            
             <th>Precio</th>            
             <th>Acciones</th>            
            </tr>
            <tr>     
            <td>
            <img src="${producto.imagen}" alt="Imagen del artículo">
          </td>
          <td>
            <h2 class="card__title">${producto.nombre}</h2>
          </td>
          <td>
            <p class="card__category">${producto.categoria}</p>
          </td>
          <td>
            <p class="card__description">${producto.descripcion}</p>
          </td>
          <td>
            <p class="card__quantity">${producto.cantidad}</p>
          </td>
          <td>
            <p class="card__quantity">${producto.precio}</p>
          </td>
          <td>
            <div class="card__buttons">
              <button onclick="aceptarBtn()"  class="card__accept">Aceptar</button>
              <button onclick="rechazarBtn()" class="card__reject">Rechazar</button>
            </div>
          </td></tr>
        </table>
        `;
        HTMLResponse.append(content);
    });
    
  }
   const aceptarBtn = content.querySelector('.card__accept');
   aceptarBtn.addEventListener('click', () => {
     const id = `${producto.id}`;
     const updateUrl = `http://localhost:8081/Producto/Publicado/${id}`;
     fetch(updateUrl, { method: 'PUT' })
       .then(() => {
         // Actualizar la interfaz de usuario
         // aquí puedes borrar la fila correspondiente a este producto o cambiar su estilo
       })
       .catch((error) => {
         console.error('Error:', error);
       });
   });

   const rechazarBtn = content.querySelector('.card__reject');
   rechazarBtn.addEventListener('click', () => {
     const id = producto.id; 
     const updateUrl = ``; 
     fetch(updateUrl, { method: 'PUT' }) 
       .then(() => {
        
       })
       .catch((error) => {
         console.error('Error:', error);
       });
   });





=======
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
      <tr>
      <td class='centered'><img src="${producto.imagen}"></td>
      <td class='centered'><h2 class="card__title">${producto.nombre}</h2></td>
      <td class='centered'><p class="card__category">${producto.categoria}</p></td>
      <td class='centered'><p class="card__quantity">${producto.cantidadAComprar}</p></td>
      <td class='centered'><p class="card__quantity">${producto.precioTotal}</p></td>
      <td class='centered'><div class="card__buttons">
            <button class="card__accept">Aceptar</button>
            <button class="card__reject">Rechazar</button>
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
>>>>>>> ddcd7634645e49b1f1bae74f35944a587c76d05f
