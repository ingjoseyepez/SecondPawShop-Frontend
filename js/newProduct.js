const API_URL = 'http://localhost:8081/Producto/Crear';
const userData = JSON.parse(localStorage.getItem("userData"));
document.getElementById("Identificacion").value = userData.idUsuario;
let products = [];

const createProduct = () => {
  const formData = new FormData(document.querySelector('#formAdd'));

  if(!formData.get('identificacion').length || !formData.get('nombre-articulo').length || !formData.get('cate').length || !formData.get('descripcion-producto').length || !formData.get('cantidad').length ||!formData.get('precio').length||!formData.get('img').length) {
    document.querySelector('#msgFormAdd').innerHTML = '* Llena todos los campos';
    return;
  }
  document.querySelector('#msgFormAdd').innerHTML = '';

  const product = {
    idUsuarioFK:formData.get('identificacion'),  
    nombre: formData.get('nombre-articulo'),
    categoria: formData.get('cate'),
    descripcion: formData.get('descripcion-producto'),
    cantidad:formData.get('cantidad'),
    precio:formData.get('precio'),
    imagen:formData.get('img'),
  };

  console.log(product);

  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(product),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .catch(error => {
    alertManager('error', error);
  })
  .then(response => {
    alertManager('success', response.mensaje)
    getProducts();
  });
};


  
