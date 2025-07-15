 document.addEventListener('DOMContentLoaded', function() {
  // Mostrar menú Inicio
    ocultarTodosLosFormularios();
  document.getElementById('inicio').style.display = 'block';

  document.querySelector('.main-nav > a.active').addEventListener('click', function(e) {
    e.preventDefault();
    ocultarTodosLosFormularios();
    document.getElementById('inicio').style.display = 'block';
    document.getElementById('crear-usuario').style.display = 'none';
    document.getElementById('consultar-usuario').style.display = 'none';
    document.getElementById('modificar-usuario').style.display = 'none';
    document.getElementById('eliminar-usuario').style.display = 'none';
    document.getElementById('calendario-mes').style.display = 'none';
    document.getElementById('asignar-conteo').style.display = 'none';
    document.getElementById('crear-informe').style.display = 'none';
    document.getElementById('consultar-informe').style.display = 'none';
  });})

  // Oculta inicio al dar clic en cualquier submenú
  const submenus = document.querySelectorAll('.submenus a');
  submenus.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('inicio').style.display = 'none'; 
    });
  }); 

  // Oculta todos los submenús al dar clic en uno solo
  function ocultarTodosLosFormularios() {
  document.getElementById('inicio').style.display = 'none';
  document.getElementById('crear-usuario').style.display = 'none';
  document.getElementById('consultar-usuario').style.display = 'none';
  document.getElementById('modificar-usuario').style.display = 'none';
  document.getElementById('eliminar-usuario').style.display = 'none';
  document.getElementById('calendario-mes').style.display = 'none';
  document.getElementById('asignar-conteo').style.display = 'none';
  document.getElementById('crear-informe').style.display = 'none';
  document.getElementById('consultar-informe').style.display = 'none';
}
 
 //Funcion para mostrar el formulario de crear usuario
document.addEventListener('DOMContentLoaded', function() {
  const btnCrearUsuario = document.getElementById('mostrar-crear-usuario');
  const crearUsuarioDiv = document.getElementById('crear-usuario');

  btnCrearUsuario.addEventListener('click', function(e) {
    e.preventDefault();
    ocultarTodosLosFormularios();
    crearUsuarioDiv.style.display = 'block';
  });
}); 
 //Funcion para formulario de restablecer contraseña
function enviarRegistrar() {
  document.getElementById('registro_exito').classList.add('active');
}
function cerrarRegistro() {
  document.getElementById('registro_exito').classList.remove('active');
}
//Funcion para seleccionar una opcion de creacion de usuario
function seleccionar(boton) {
  const todos = document.querySelectorAll(".opcion");
  todos.forEach(el => el.classList.remove("seleccionado"));
  boton.classList.add("seleccionado");
}

 //Funcion para mostrar el formulario de consultar usuario
document.addEventListener('DOMContentLoaded', function() {
  const btnConsultarUsuario = document.getElementById('mostrar-consultar-usuario');
  const consultarUsuarioDiv = document.getElementById('consultar-usuario');

  btnConsultarUsuario.addEventListener('click', function(e) {
    e.preventDefault();
    ocultarTodosLosFormularios();
    consultarUsuarioDiv.style.display = 'block';
  });
}); 

 //Funcion para mostrar el formulario de modificar usuario
document.addEventListener('DOMContentLoaded', function() {
  const btnModificarUsuario = document.getElementById('mostrar-modificar-usuario');
  const modificarUsuarioDiv = document.getElementById('modificar-usuario');

  btnModificarUsuario.addEventListener('click', function(e) {
    e.preventDefault();
    ocultarTodosLosFormularios();
    modificarUsuarioDiv.style.display = 'block';
  });
});

 //Funcion para mostrar el formulario de eliminar usuario
document.addEventListener('DOMContentLoaded', function() {
  const btnEliminarUsuario = document.getElementById('mostrar-eliminar-usuario');
  const eliminarUsuarioDiv = document.getElementById('eliminar-usuario');

  btnEliminarUsuario.addEventListener('click', function(e) {
    e.preventDefault();
    ocultarTodosLosFormularios();
    eliminarUsuarioDiv.style.display = 'block';
  });
});

//Funcion para elimanar, confirmar y cerrar ventana de confirmacion. 
function eliminarRegistro() {
  document.getElementById('confirmacion-eliminar').classList.add('active');
}
function cerrarConfirmacion() {
  document.getElementById('confirmacion-eliminar').classList.remove('active');
}
function confirmarEliminar() {
  cerrarConfirmacion();
  alert('Eliminado correctamente');
}

 //Funcion para mostrar el calendario mes
document.addEventListener('DOMContentLoaded', function() {
  const btnCalendarioMes = document.getElementById('mostrar-calendario-mes');
  const calendarioMesDiv = document.getElementById('calendario-mes');

  btnCalendarioMes.addEventListener('click', function(e) {
    e.preventDefault();
    ocultarTodosLosFormularios();
    calendarioMesDiv.style.display = 'block';
  });
});

 //Funcion para mostrar sesión asignar conteo
document.addEventListener('DOMContentLoaded', function() {
  const btnAsignarConteo = document.getElementById('mostrar-asignar-conteo');
  const asignarConteoDiv = document.getElementById('asignar-conteo');

  btnAsignarConteo.addEventListener('click', function(e) {
    e.preventDefault();
    ocultarTodosLosFormularios();
    asignarConteoDiv.style.display = 'block';
  });
}); 

 //Funcion para mostrar sesión crear informe
document.addEventListener('DOMContentLoaded', function() {
  const btnCrearInforme = document.getElementById('mostrar-crear-informe');
  const crearInformeDiv = document.getElementById('crear-informe');

  btnCrearInforme.addEventListener('click', function(e) {
    e.preventDefault();
    ocultarTodosLosFormularios();
    crearInformeDiv.style.display = 'block';
  });
}); 

 //Funcion para mostrar lista de informes
document.addEventListener('DOMContentLoaded', function() {
  const btnConsultarInforme = document.getElementById('mostrar-consultar-informe');
  const consultarInformeDiv = document.getElementById('consultar-informe');

  btnConsultarInforme.addEventListener('click', function(e) {
    e.preventDefault();
    ocultarTodosLosFormularios();
    consultarInformeDiv.style.display = 'block';
  });
}); 
