const signUp = e =>{
    //let typedoc = document.getElementById('typedoc').value;
    let doc = document.getElementById('doc').value;
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let pwd = document.getElementById('pwd').value;
    let dir = document.getElementById('dir').value;
    //parse convierte los datos en objeto y llama al local storage
    //get item toma los datos del local storage para ser especifico
    //form data son los datos y || los guarda en un arreglo[]
    var nameRegex = /^[a-zA-Z ]{2,30}$/;
    var emailRegex = /\S+@\S+.\S+/;
    var docRegex = /^\d{10}$/;
    if (!nameRegex.test(name)) {
        alert("Ingresa un nombre valido porfavor");
        return false;
      }
      if (!emailRegex.test(email)) {
        alert("Ingresa un email valido porfavor");
        return false;
      }
      if (!docRegex.test(doc)) {
        alert("Ingresa un documento valido de identidad porfavor");
        return false;
      }
      if (lastname == "") {
        alert("No ingresaste tu apellido");
        return false;
      }
      if (pwd == "") {
        alert("No ingresaste ninguna contraseña");
        return false;
      }
      if (dir == "") {
        alert("Ingrese una direccion valida porfavor");
        return false;
      }

    let formData = JSON.parse(localStorage.getItem('formData'
    )) || [];
    //aca  vamos a validar  si existe el usuario 
    //.some es un dato boleano con el cual vamos a validar si es verdadero o no 
    //si es verdadero es porq el nombre ya existe si es falso no existiria y permite registrar
    //con el data llamamos a firstname ya lastname
    let exist = formData.length
    && JSON.parse(localStorage.getItem('formData')).some(data=>
        data.email.toLowerCase() == email.toLowerCase() &&
        data.doc.toLowerCase() == doc.toLowerCase());
    //con set item enviamos con .push enviamos la informacion al localstorage
    if (!exist) {
        formData.push({doc, name, lastname,email,pwd,dir});
        //con stringify le decimos que convierta los datos a string
        localStorage.setItem('formData', JSON.stringify(formData));
        //aca sacamos los datos del form con queryselector un elemento del html
        document.querySelector('form').reset();
        //se aplica doble comillas cuando estamos trabajando en un evento asignar funcion 
        //con esto seleccionamos el primer campo que rellenaremos
        document.getElementById('doc').focus;
        alert("Registro Exitoso");
    }else{
        alert("El usuario ya existe");
    }
    //previene que se recaargue y asi mientras falten datos por rellenar
    e.preventDefault();
}

function signIn(e) {

let datos = document.getElementById('email').value, password = document.getElementById('pwd').value;

let formData = JSON.parse(localStorage.getItem('formData')) || [];

let exist = formData.length &&
JSON.parse(localStorage.getItem('formData')).some (data => 
data.email == datos &&
data.pwd == password);

if (!exist) {
    alert("Correo y contraseña incorrectos")
}else{
    alert("inicio de sesion completo :3")
    window.location.href="productos.html"
}  
e.preventDefault();
}


    