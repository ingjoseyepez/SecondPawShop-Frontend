//Funciones
function iniciarlizarIsLogin (){
    if (!isInitialized) {
      // Inicializar el localStorage y guardar la cookie "isInitialized"
      localStorage.setItem('isLoggedIn', false);
      document.cookie = 'isInitialized=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
    }
}
// Obtener el valor de la cookie "isInitialized"
const isInitialized = document.cookie.split(';').some((item) => item.trim().startsWith('isInitialized='));
iniciarlizarIsLogin();