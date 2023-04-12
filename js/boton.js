const myButton = document.querySelector('#my-button');

// Verificar si el usuario está conectado
const username = localStorage.getItem('username');
const role = localStorage.getItem('role');

if (!username || !role) {
  // El usuario no está conectado, deshabilitar el botón
  myButton.disabled = true;
} else {
  // El usuario está conectado, habilitar el botón
  myButton.disabled = false;
}
const logoutButton = document.querySelector('#logout-button');

// Agregar un evento de clic al botón
logoutButton.addEventListener('click', function() {
  // Borrar la información del usuario almacenada en localStorage
  localStorage.removeItem('username');
  localStorage.removeItem('role');

  // Redirigir al usuario a la página de inicio de sesión
  window.location.href = 'login.html';
});