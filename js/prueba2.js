const url = "http://localhost:8080/Producto/Publicado";
const HTMLResponse = document.getElementById("shopContent");

fetch(url)
.then((response) => response.json())
.then((producto) => tpl(producto))



const tpl = (producto) => {
  for (var i=0 ; i <producto.length; i++) {
    let contenido = document.createElement("div");
   contenido.innerHTML = ` 
  <div class = card>
    <figure>
    <img src="${producto[i].imagen}">
    <div class="capa">
    <h3>${producto[i].nombre}</h3>
    <p class="price">${producto[i].descripcion}</p>
    </div>
    </figure>
    <h3>${producto[i].nombre}</h3>
    <p class="price">${producto[i].precio} $</p>
    <button class="comprar" id="btn-comprar">Comprar</button>
  </div>`;
HTMLResponse.append(contenido);
  }
}
  
