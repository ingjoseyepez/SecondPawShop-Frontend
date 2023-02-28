function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var nameRegex = /^[a-zA-Z ]{2,30}$/;
    var emailRegex = /^\S+@\S+\.\S+$/;
  
    if (!nameRegex.test(name)) {
      alert("Por favor ingrese un nombre valido.");
      return false;
    }
    if (!emailRegex.test(email)) {
      alert("Por favor, introduce una dirección de correo electrónico válida.");
      return false;
    }
    if (message == "") {
      alert("Por favor ingrese un mensaje.");
      return false;
    }
    sendEmail();
    limpiarFormulario();
    return false;
  }
  function sendEmail(){
    console.log("Email sent")
  }
  function limpiarFormulario(){
    document.getElementById("name").value = ""
  }