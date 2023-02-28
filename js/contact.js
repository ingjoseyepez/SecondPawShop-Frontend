function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var nameRegex = /^[a-zA-Z ]{2,30}$/;
    var emailRegex = /^\S+@\S+\.\S+$/;

  
    if (!nameRegex.test(name)) {
      alert("Please enter a valid name.");
      return false;
    }
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    if (message == "") {
      alert("Please enter a message.");
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