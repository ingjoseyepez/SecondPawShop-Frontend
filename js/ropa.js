const url = "http://localhost:8080/Producto/ropa";
const HTMLResponse = document.getElementById("shopContent");

fetch(url)
.then((response) => response.json())
.then((producto) => tpl(producto))



const tpl = (producto) => {
  producto.forEach((producto) => {
    let contenido = document.createElement("div");
    contenido.innerHTML = `
      <div class="card">
        <figure>
          <img src="${producto.imagen}">
          <div class="capa">
            <h3>${producto.nombre}</h3>
            <p class="price">${producto.descripcion}</p>
          </div>
        </figure>
        <h3>${producto.nombre}</h3>
        <p class="price">${producto.precio} $</p>
        <button class="comprar" id="btn-comprar">Comprar</button>
      </div>
    `
    HTMLResponse.append(contenido);
  });
}
