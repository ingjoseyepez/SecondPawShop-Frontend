const url = "http://localhost:8081/Producto/Publicado";

const xhr = new XMLHttpRequest();
function onRequest(params) {
    if(this.readyState === 4 && this.status === 200){
        const data = JSON.parse(this.response);
        const HTMLResponse = document.getElementById("shopContent");
        const tpl = data.map((datos) => data )
     
        for (var i=0 ; i <data.length; i++) {
        let content = document.createElement("div");
        content.className = "card";
        HTMLResponse.innerHTML= `<figure>
        <img src="${data[i].imagen}">
        <div class="capa">
        <h3>${data[i].nombre}</h3>
        <p class="price">${data[i].descripcion}</p>
        </div>
        </figure>
        <h3>${data[i].nombre}</h3>
        <p class="price">${data[i].precio} $</p>
        `;
        HTMLResponse.append(content);
        
    }
}   
}

xhr.addEventListener("load",onRequest);
xhr.open("GET",`${url}`);
xhr.send();