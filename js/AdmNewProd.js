const url = "http://localhost:8081/Producto/Verificando";
const HTMLResponse = document.getElementById("table");

fetch(url)
.then((response) => response.json())
.then((producto) => tpl(producto))



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
              <button class="card__accept">Aceptar</button>
              <button class="card__reject">Rechazar</button>
            </div>
          </td></tr>
        </table>
        `;
        HTMLResponse.append(content);
    });
}