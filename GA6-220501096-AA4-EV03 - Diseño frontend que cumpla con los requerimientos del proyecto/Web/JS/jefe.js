 document.addEventListener('DOMContentLoaded', function() {
  // Mostrar menú Inicio
    ocultarTodosLosFormularios();
  document.getElementById('inicio').style.display = 'block';

  document.querySelector('.main-nav > a.active').addEventListener('click', function(e) {
    e.preventDefault();
    ocultarTodosLosFormularios();
    document.getElementById('inicio').style.display = 'block';
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
  document.getElementById('crear-informe').style.display = 'none';
  document.getElementById('consultar-informe').style.display = 'none';
}
 
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
