
const url = "http://localhost:8080/Producto/Verificando";
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