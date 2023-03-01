function enviarFormulario(event) {
    event.preventDefault(); // Prevenir el envío del formulario
  
    // Obtener los valores de los campos de entrada
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message  = document.getElementById("message ").value;
  
      // Crear un objeto con los valores de los campos
    var datos = {
    name: name,
    email: email,
    message : message 
    };
    
  
    // Enviar los datos del formulario a través de Formspree
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formspree.io/ing.joseyepez@gmail.com", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(datos));
  
    // Mostrar un mensaje de confirmación
    alert("Gracias por contactarnos. Nos pondremos en contacto contigo pronto.");
    return true;
  }