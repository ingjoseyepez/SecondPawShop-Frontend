const API_URL = 'http://localhost:3000/products';
let products = [];
let deleteId = null;

window.addEventListener('DOMContentLoaded', () => {
  getProducts();
})

const getProducts = () => {
  fetch(API_URL)
  .then(response => response.json())
  .catch(error => {
    alertManager('error', 'Ocurrión un problema al cargar los productos');
  })
  .then(data => {
    products = data.data;
    renderResult(products);
  })
}

const productsList = document.querySelector('#productsList');

const renderResult = (products) => {
  let listHTML = "";
  products.forEach(product => {
    listHTML += `
      <div class="card">
        <div>Nombre: ${product.Nombre}</div>
        <div>Color: ${product.Color}</div>
        <div>Precio: ${product.Precio}</div>
        <div class="options">
          <button type="button" onclick="editProduct(${product.Id})">Editar</button>
          <button type="button" onclick="openModalConfirm(${product.Id})">Eliminar</button>
        </div>
      </div>
    `
  })
  productsList.innerHTML = listHTML;
}