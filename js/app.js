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

function cerrarSesion() {
    
    localStorage.clear();
    localStorage.setItem('isLoggedIn', false);
    // Redirige al usuario a la página de inicio de sesión
    window.location.href = "./Login.html";
    alert("¡Has cerrado tu sesión!");
}

const isLogin = localStorage.getItem('isLoggedIn');
const cerrarSesionBtn = document.getElementById("logout-button");


if (isLogin === 'true'){
    cerrarSesionBtn.style.visibility = "visible";
    cerrarSesionBtn.addEventListener("click", cerrarSesion);
    
}else if (isLogin === 'false'){
    cerrarSesionBtn.style.visibility  = "hidden";
}else {
    localStorage.setItem('isLoggedIn', false);
}