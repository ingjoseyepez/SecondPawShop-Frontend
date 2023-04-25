if (isLogin === 'false'){
  window.open("index.html", "_self");
  alert("¡Necesitas estar logeado para acceder a estos")
}

const API_URL = 'https://deployinrailway-production.up.railway.app/Usuario/Actualizar';
const userData = JSON.parse(localStorage.getItem("userData"));


document.getElementById("Identificacion").value = userData.id;
document.getElementById("name").value = userData.nombre;
document.getElementById("apellido").value = userData.apellido;
document.getElementById("email").value = userData.correo;
document.getElementById("telefono").value = userData.celular;
document.getElementById("dir").value = userData.direccion;
document.getElementById("password").value = userData.contrasena;

const updateProduct = () => {
  const product = {
    idUsuario: document.querySelector('#formEdit #Identificacion').value,
    nombre: document.querySelector('#formEdit #name').value,
    apellido: document.querySelector('#formEdit #apellido').value,
    correo: document.querySelector('#formEdit #email').value,
    celular: document.querySelector('#formEdit #telefono').value,
    direccion: document.querySelector('#formEdit #dir').value,
    contrasena: document.querySelector('#formEdit #password').value,
  }

  if(!product.idUsuario || !product.nombre || !product.apellido || !product.correo || !product.celular || !product.direccion || !product.contrasena) {
    document.querySelector('#msgFormEdit').innerHTML = '* Los campos no deden estar vacios';
    return;
  }
  document.querySelector('#msgFormEdit').innerHTML = '';

  fetch(API_URL, {
    method: 'PUT',
    body:JSON.stringify(product),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    res.json()
    userData.nombre = product.nombre;
    userData.apellido = product.apellido;
    userData.correo = product.correo;
    userData.celular = product.celular;
    userData.direccion = product.direccion;
    userData.contrasena = product.contrasena;
    localStorage.setItem("userData",JSON.stringify(userData));
    
  })
  .catch(error => {
    alertManager('error', error);

  })
  .then(response => {
    alertManager('success', response.mensaje);    
  });

}
