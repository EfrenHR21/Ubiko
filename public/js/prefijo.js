document.addEventListener('DOMContentLoaded', function() {
  // Seleccionamos el input de telefono
  const telefonoInput = document.getElementById('telefono');
  
  // Agregar un listener para el evento 'input'
  telefonoInput.addEventListener('input', function() {
      let telefono = telefonoInput.value.trim();

      // Si el teléfono tiene 9 dígitos, agregar el prefijo 51
      if (telefono.length === 9) {
          // Si ya no tiene el prefijo 51, agregarlo
          if (!telefono.startsWith('51')) {
              telefonoInput.value = '51' + telefono;
          }
      }
  });
});
