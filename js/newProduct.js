const API_URL = 'http://localhost:8081/Producto/Crear';
let products = [];
const createProduct = () => {
    const formData = new FormData(document.querySelector('#formAdd'));
  
    if(!formData.get('nombre-articulo').length || !formData.get('cate') || !formData.get('descripcion-producto') || !formData.get('cantidad') ||!formData.get('precio')) {
      document.querySelector('#msgFormAdd').innerHTML = '* Llena todos los campos';
      return;
    }
    document.querySelector('#msgFormAdd').innerHTML = '';
  
    const product = {
    idUsuarioFK:window.localStorage.getItem('idUsuario'),  
    nombre: formData.get('nombre-articulo'),
    categoria: formData.get('cate'),
    descripcion: formData.get('descripcion-producto'),
    cantidad:formData.get('cantidad'),
    precio:formData.get('precio'),
    }
  
    console.log(product)
  
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
      document.querySelector('#formAdd').reset();
    })
    .then(response => {
      alertManager('success', response.mensaje)
      getProducts();
    })
  }
  
  
