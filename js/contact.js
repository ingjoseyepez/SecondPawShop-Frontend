function validateForm() {
    // Obtener los campos de entrada
    var nombre = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var nameRegex = /^[a-zA-Z ]{2,30}$/;
    var emailRegex = /^\S+@\S+\.\S+$/;
    // Validar el campo nombre
    if (nombre == "") {
      alert("Por favor ingrese su nombre");
      return false;
    }
    
    // Validar el campo email
    if (email == "") {
      alert("Por favor ingrese su dirección de correo electrónico");
      return false;
    } else if (!(/\S+@\S+\.\S+/).test(email)) {
      alert("Por favor ingrese una dirección de correo electrónico válida");
      return false;
    }  

    if (message == "") {
      alert("Please enter a message.");
      return false;
    }

  alert("El formulario se ha enviado correctamente");
  return true;
  }


 