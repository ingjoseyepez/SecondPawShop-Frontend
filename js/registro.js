const API_URL = 'http://localhost:8080/Usuario/registrar';
let products = [];
const createProduct = () => {
    const formData = new FormData(document.querySelector('#formAdd'));
  
    if(!formData.get('doc').length || !formData.get('name') || !formData.get('lastname') || !formData.get('email') || !formData.get('tel') || !formData.get('dir')|| !formData.get('pwd')) {
      document.querySelector('#msgFormAdd').innerHTML = '* Llena todos los campos';
      return;
    }
    document.querySelector('#msgFormAdd').innerHTML = '';
  
    const product = {
    idUsuario: formData.get('doc'),
    nombre: formData.get('name'),
    apellido: formData.get('lastname'),
    correo:formData.get('email'),
    celular:formData.get('tel'),
    direccion: formData.get('dir'),
    contrasena : formData.get('pwd'),
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
    document.querySelector('#formEdit').reset();
  }