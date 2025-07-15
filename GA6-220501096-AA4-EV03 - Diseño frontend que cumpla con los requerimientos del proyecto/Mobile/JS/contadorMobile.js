document.addEventListener(  'DOMContentLoaded', function () {
  const secciones = [
    'inicio',
    'registrar-conteo',
    'conteo'
  ];

  const submenus = [
    'submenu-registrar',  
  ];


    // Acciones de submenús
  document.querySelectorAll('.submenu button').forEach(btn => {
    btn.addEventListener('click', function () {
      const target = this.dataset.section;
      mostrarSeccion(target)
      console.log(target) 
;
    });
  });

function ocultarSecciones() {
  secciones.forEach(id => {
    document.getElementById(id)?.classList.add('oculto');
  });
}

function ocultarSubmenus() {
  submenus.forEach(id => {
    document.getElementById(id)?.classList.remove('activa');
  });
}
  function resetBotonesInferiores() {
    document.querySelectorAll('.menu-inferior button').forEach(btn => {
      btn.classList.remove('activo');
    });}

function mostrarSeccion(id) {
    ocultarSecciones();
    ocultarSubmenus();
    resetBotonesInferiores();
    document.getElementById(id)?.classList.remove('oculto');
  }


  // Acciones de botones inferiores
document.querySelectorAll('.menu-inferior button').forEach(boton => {
  boton.addEventListener('click', function () {
    ocultarSecciones();
    ocultarSubmenus();
    document.querySelectorAll('.menu-inferior button').forEach(btn => btn.classList.remove('activa'));
    this.classList.add('activo');

    const submenu = this.dataset.submenu;
    const seccion = this.dataset.section;

    if (submenu) {
      document.getElementById(`submenu-${submenu}`)?.classList.add('activa');
    } else if (seccion) {
      document.getElementById(seccion)?.classList.remove('oculto');
    }
  });
});

function ocultarTodo() {
  ocultarSecciones();
  ocultarSubmenus();
}
    // Mostrar inicio al cargar
  mostrarSeccion('inicio');

document.querySelectorAll('button[data-section]').forEach(btn => {
  btn.addEventListener('click', function () {
    const target = this.dataset.section;
    mostrarSeccion(target);
  });
});

});


