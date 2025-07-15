 document.addEventListener('DOMContentLoaded', function() {
  // Mostrar menú Inicio
    ocultarTodosLosFormularios();
  document.getElementById('inicio').style.display = 'block';

  document.querySelector('.main-nav > a.active').addEventListener('click', function(e) {
    e.preventDefault();
    ocultarTodosLosFormularios();
    document.getElementById('inicio').style.display = 'block';
    document.getElementById('registrar-conteo').style.display = 'none';
    document.getElementById('ingreso-registrar-conteo').style.display = 'none';
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
  document.getElementById('registrar-conteo').style.display = 'none';
  document.getElementById('ingreso-registrar-conteo').style.display = 'none';
}

 //Funcion para mostrar sesión registrar conteo
document.addEventListener('DOMContentLoaded', function() {
  const btnRegistrarConteo = document.getElementById('mostrar-registrar-conteo');
  const registrarConteoDiv = document.getElementById('registrar-conteo');

  btnRegistrarConteo.addEventListener('click', function(e) {
    e.preventDefault();
    ocultarTodosLosFormularios();
    registrarConteoDiv.style.display = 'block';
  });
}); 

 //Funcion para ingresar a registrar conteo
document.addEventListener('DOMContentLoaded', function() {
  const btnIngresoConteo = document.getElementById('btn-ingreso-conteo');
  const ingresoConteoDiv = document.getElementById('ingreso-registrar-conteo');

  btnIngresoConteo.addEventListener('click', function(e) {
    e.preventDefault();
    ocultarTodosLosFormularios();
    ingresoConteoDiv.style.display = 'block';
  });
});


