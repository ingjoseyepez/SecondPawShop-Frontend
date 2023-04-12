const form = {
  id: document.querySelector("#idusuario"),
  password: document.querySelector("#pwd"), 
  submit: document.querySelector("#submit-btn") 
};

let button = form.submit.addEventListener("click", (e) => {
  e.preventDefault();
  const login = "http://localhost:8080/Usuario/login";

  fetch(login, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idUsuario: form.id.value,
      contrasena: form.password.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.error) {
        alert("Error Password or Username");
      } else {
        // Almacena la información del usuario en localStorage
        localStorage.setItem("username", data.username);
        localStorage.setItem("role", data.rol);
        
        // Redirige al usuario a la página correspondiente según el rol
        if (data.rol === "CLIENTE") {
          window.open("User-info.html", "_self");
        } else if (data.rol === "ADMIN") {
          window.open("Admin-newProduct.html", "_self");
        }
      }
    })
    .catch((err) => {
      console.log(err);
      alert("Error Password or Username");
    });
});

// En las páginas posteriores, verifica si el usuario está conectado
const username = localStorage.getItem("username");
const role = localStorage.getItem("role");

if (!username || !role) {
  // No hay información del usuario en localStorage, redirige al usuario a la página de inicio de sesión
  window.open("login.html", "_self");
} else {
  // El usuario está conectado, haz algo aquí...
}
  