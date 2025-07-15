  //Función para entrar a los roles
document.getElementById('RolAdministrador').addEventListener('click', function(e) {
  e.preventDefault();  
  window.location.href = 'homeadministrador.html#inicio';
  }
);
document.getElementById('RolContador').addEventListener('click', function(e){
    e.preventDefault(); 
    window.location.href = 'homecontador.html#inicio';
  }
);
document.getElementById('RolJefe').addEventListener('click', function(e) {
      e.preventDefault(); 
    window.location.href = 'homejefe.html#inicio';
  }
);