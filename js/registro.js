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
    .then(res => {
      if (res.status === 409) {
        alert("Usuario ya existente, vuelva a intentarlo");
        document.querySelector('#formAdd').reset();
        throw new Error('El usuario ya existe');
         // Aquí lanzamos una excepción con un mensaje personalizado
      } else {
        alert("Usuario creado exitosamente.");
        document.querySelector('#formAdd').reset();  
        return res.json(); // En caso contrario, devolvemos los datos en formato JSON
      }
    })
    .catch(error => {
      alertManager('error', error.message); // Mostramos el mensaje personalizado de la excepción
      
    })
    .then(response => {
      alertManager('success', response.mensaje);
      getProducts();
      
    })
    .catch(error => {
      alertManager('error', error.message); // Si ocurre algún otro error, lo mostramos en la alerta
    });
  }