  //Funcion para llamar mensaje de error en caso de email o contraseña errados 
const form = document.querySelector('.login-form');
const errorDiv = document.getElementById('error-message');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email !== password) {
    e.preventDefault();
    errorDiv.classList.add('active');
  } else {
    // Redirige a home.html
    window.location.href = 'home.html';
  }
});

  //Funcion para ocultar el mensaje de error botón "Regresar""
function ocultarError() {
  errorDiv.classList.remove('active');
}


  //Funcion para formulario de recuperacion de contraseña
document.querySelector('.links a').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('recovery-modal').classList.add('active');
});
  //Funcion para cancelar el mensaje de recuperacion de contraseña, botón "Cancelar"
function cerrarRecuperacion() {
  document.getElementById('recovery-modal').classList.remove('active');
}
//Funcion para enviar enlace al email de recuperacion de contraseña, botón "Enviar"
function enviarRecuperacion() {
  const email = document.getElementById('recovery-email').value;
  if(email.trim() === "") {
    alert("Por favor ingrese su correo electrónico.");
    return;
  }
  document.getElementById('recovery-modal').classList.remove('active');
  document.getElementById('recovery-modal2').classList.add('active');
}

  //Funcion para formulario de restablecer contraseña
function enviarRestablecer() {
  const password1 = document.getElementById('new-password').value;
  const password2 = document.getElementById('new-password-2').value;
  if(password1.length < 6||!/[A-Z]/.test(password1) ||!/\d/.test(password1) ||!/[!@#$%^&*(),.?":{}|<>]/.test(password1) ) {
    alert("La contraseña debe tener al menos 6 caracteres, una mayúscula, un número y un símbolo.");
    return;
  }
  if(password1 !== password2) {
    alert("Las contraseñas no coinciden.");
    return;
  }
  document.getElementById('recovery-modal2').classList.remove('active');
  document.getElementById('restablecido_exito').classList.add('active');
};
//Funcion para guardar nueva contraseña, botón "Restablecer"
function cerrarRecuperacion() {
  document.getElementById('recovery-modal').classList.remove('active');
  document.getElementById('recovery-modal2').classList.remove('active');
  document.getElementById('restablecido_exito').classList.remove('active');
}