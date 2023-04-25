//Funciones
function reedirigirPerfil () {
  
  let idUser = localStorage.getItem("usuarioId");

  fetch('https://deployinrailway-production.up.railway.app/Usuario/getRole/'+idUser, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
  })
  .then(res => {
    if (res.status === 409) {
      console.log('No hay sesión iniciada');
    } else {
      return res.text();
    }
  })
  .then(data => {
    if (data === "CLIENTE") {
      window.open("User-info.html", "_self");
    } else if (data === "ADMIN") {
      window.open("Admin-newProduct.html", "_self");
    }
  })
  .catch(error => {
    console.error('Error al hacer la petición:', error);
  });

}

function iniciarSesion (e){
  e.preventDefault();
  const login = "https://deployinrailway-production.up.railway.app/Usuario/login";

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
        document.querySelector("#formLogin").reset();
        alert("Error Password or Username");
      } else {
        // Almacena la información del usuario en localStorage
        localStorage.setItem("usuarioId",data.id);
        localStorage.setItem("userData",JSON.stringify(data));
        localStorage.setItem("isLoggedIn", true);
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
      document.querySelector("#formLogin").reset();
      alert("Error Password or Username");
    });
}

//Variables y lógica
const form = {
  id: document.querySelector("#idusuario"),
  password: document.querySelector("#pwd"), 
  submit: document.querySelector("#submit-btn") 
};

if (isLogin === 'true'){
  reedirigirPerfil();
}else if (isLogin === 'false'){
  let button = form.submit.addEventListener("click", (e) => {
    iniciarSesion (e);
  });
}else {
  console.log("Algo salió mal");
}


