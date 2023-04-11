const userData = JSON.parse(localStorage.getItem("userData"));
const id= userData.idUsuario;
const url = "http://localhost:8080/Usuario/Historial/"+id;
const HTMLResponse = document.getElementById("table");

fetch(url)
.then((response) => response.json())
.then((producto) => tpl(producto))



const tpl = (producto) => {
    producto.forEach((producto) => {
        let content = document.createElement("div");
        content.className = "";
        HTMLResponse.innerHTML= `
            <table>
            <tr>
             <th>Productos</th>            
             <th>Nombres</th>            
             <th>Categoria</th>            
             <th>Descripcion</th>            
             <th>Cantidad</th>            
             <th>Precio</th>                      
            </tr>
            <tr>     
            <td>
            <img src="./asset/img/userPictures/sacoPerro.jpg" alt="Imagen del artículo">
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
            <p class="card__quantity">${producto.cantidadAComprar}</p>
          </td>
          <td>
            <p class="card__quantity">${producto.precioTotal}</p>
          </td>
         </tr>
            </table>
        `
        HTMLResponse.append(content);
    });
}