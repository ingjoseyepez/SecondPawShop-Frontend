document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function mostrar_menu(){

    nav.style.right = "0px";
    background_menu.style.display = "block";
}

function ocultar_menu(){

    nav.style.right = "-250px";
    background_menu.style.display = "none";
}
const cerrarSesionBtn = document.getElementById("logout-button");
cerrarSesionBtn.addEventListener("click", cerrarSesion);
function cerrarSesion() {
    // Elimina la cookie que indica que el usuario ha iniciado sesión
    document.cookie = "sesion=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  
    // Redirige al usuario a la página de inicio de sesión
    window.location.href = "./Login.html";
  }