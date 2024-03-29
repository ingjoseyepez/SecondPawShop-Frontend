//Variables
let url = "https://deployinrailway-production.up.railway.app/Producto/Publicado";
const HTMLResponse = document.getElementById("shopContent");

function traerProductos() {
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
          <button class="comprar" id="btn-comprar" data-values="${producto.idUsuarioFK}-${producto.nombre}-${producto.precio}">Comprar</button>
        </div>
      `
      HTMLResponse.append(contenido);
    });
  }
}

traerProductos(); // cargar los productos al cargar la página

function cambiarUrl() {
  const nuevaUrl = "https://deployinrailway-production.up.railway.app/Producto/salud";
  url = nuevaUrl;
  HTMLResponse.innerHTML = "";
  traerProductos(); // cargar los productos desde la nueva URL
}
function cambiarUrl_a() {
  const nuevaUrl = "https://deployinrailway-production.up.railway.app/Producto/accesorio";
  url = nuevaUrl;
  HTMLResponse.innerHTML = "";
  traerProductos(); // cargar los productos desde la nueva URL
}
function cambiarUrl_r() {
  const nuevaUrl = "https://deployinrailway-production.up.railway.app/Producto/ropa";
  url = nuevaUrl;
  HTMLResponse.innerHTML = "";
  traerProductos(); // cargar los productos desde la nueva URL
}
function cambiarUrl_b() {
  const nuevaUrl ="https://deployinrailway-production.up.railway.app/Producto/bienestar";
  url = nuevaUrl;
  HTMLResponse.innerHTML = "";
  traerProductos(); // cargar los productos desde la nueva URL
}





  
