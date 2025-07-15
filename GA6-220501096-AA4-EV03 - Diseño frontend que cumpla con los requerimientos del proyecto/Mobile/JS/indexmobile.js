// Función iniciar sesión
document.querySelector('.form-mobile').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email || !password) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  if (email !== password) {
    mostrarError(); // Mostrar modal de error
  } else {
    window.location.href = 'homemobile.html';
  }
});

function mostrarError() {
  document.getElementById('error-message').classList.add('active');
}

function ocultarError() {
  document.getElementById('error-message').classList.remove('active');
}

function abrirRecuperacion() {
  document.getElementById('modal-recuperacion').classList.add('active');
}

function cerrarModal() {
  document.getElementById('modal-recuperacion').classList.remove('active');
}

function enviarRecuperacion() {
  const correo = document.getElementById('email-recuperacion').value;
  if (correo.trim() === "") {
    alert("Por favor, ingresa tu correo.");
    return;
  }
  document.getElementById('modal-recuperacion').classList.remove('active');
  document.getElementById('modal-nueva-clave').classList.add('active');
}

function restablecerClave() {
  const clave1 = document.getElementById('nueva-clave').value;
  const clave2 = document.getElementById('confirmar-clave').value;

  const requisitos = clave1.length >= 6 &&
                     /[A-Z]/.test(clave1) &&
                     /\d/.test(clave1) &&
                     /[!@#$%^&*(),.?":{}|<>]/.test(clave1);

  if (!requisitos) {
    alert("La contraseña no cumple los requisitos.");
    return;
  }

  if (clave1 !== clave2) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  document.getElementById('modal-nueva-clave').classList.remove('active');
  document.getElementById('modal-exito').classList.add('active');
}

function cerrarTodo() {
  document.getElementById('modal-recuperacion').classList.remove('active');
  document.getElementById('modal-nueva-clave').classList.remove('active');
  document.getElementById('modal-exito').classList.remove('active');
}
