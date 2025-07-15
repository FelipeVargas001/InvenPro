  //Función para entrar a los roles
document.getElementById('RolAdministrador').addEventListener('click', function(e) {
  e.preventDefault();  
  window.location.href = 'homeadmimobile.html#inicio';
  }
);
document.getElementById('RolContador').addEventListener('click', function(e){
    e.preventDefault(); 
    window.location.href = 'homeContadorMobile.html#inicio';
  }
);
document.getElementById('RolJefe').addEventListener('click', function(e) {
      e.preventDefault(); 
    window.location.href = 'homeJefeMobile.html#inicio';
  }
);