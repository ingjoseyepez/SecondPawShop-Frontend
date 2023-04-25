console.log('Comprobando si isInitialized existe');
const isInitialized = document.cookie.split(';').some((item) => item.trim().startsWith('isInitialized='));
console.log('isInitialized: ', isInitialized);

if (!isInitialized) {
  console.log('Inicializando el localStorage y guardando la cookie "isInitialized"');
  window.localStorage.setItem('isLoggedIn', false);
  document.cookie = 'isInitialized=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
}
