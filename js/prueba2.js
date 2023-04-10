const url = "http://localhost:8081/Producto";
const HTMLResponse = document.getElementById("shopContent");

const xhr = new XMLHttpRequest();
function onRequest(params) {

    if(this.readyState === 4 && this.status === 200){
      const data = JSON.parse(this.response);
      console.log(data);
      const tpl = data.map((producto) => `
      <div class = card>
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
      </div>` );

      console.log(tpl);
      HTMLResponse.innerHTML=`${tpl}`;
      
      
      
        /*
      
        let content = document.createElement("div");
        content.className = "card";
        
        HTMLResponse.append(content);
        /*
       

        
        comprar.addEventListener("click", () => {
            const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
        
            if (repeat) {
              carrito.map((prod) => {
                if (prod.id === product.id) {
                  prod.cantidad++;
                }
              });
            } else {
              carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
              });
              console.log(carrito);
              console.log(carrito.length);
              carritoCounter();
              saveLocal();
            }
          })

          
      }
      */
 }   
}

xhr.addEventListener("load",onRequest);
xhr.open("GET",`${url}/Publicado`);
xhr.send();