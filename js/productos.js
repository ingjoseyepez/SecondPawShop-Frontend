//Funciones
function iniciarlizarIsLogin (){
  if (!isInitialized) {
    // Inicializar el localStorage y guardar la cookie "isInitialized"
    localStorage.setItem('isLoggedIn', false);
    document.cookie = 'isInitialized=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
  }
}



// Obtener el valor de la cookie "isInitialized"
const isInitialized = document.cookie.split(';').some((item) => item.trim().startsWith('isInitialized='));
const url = "http://localhost:8080/Producto/Publicado";
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



  
