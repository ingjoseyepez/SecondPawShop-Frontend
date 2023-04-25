if (isLogin === 'false'){
  window.open("index.html", "_self");
  alert("¡Necesitas estar logeado para acceder a estos")
}

const API_URL = 'http://localhost:8080/Producto/Crear';
const userData = JSON.parse(localStorage.getItem("userData"));
document.getElementById("Identificacion").value = userData.id;
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


  
