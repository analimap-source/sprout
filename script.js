// Sprout - Grupo Alquimia
// Interacción del panel del salón (salon.html).
// En el prototipo, al enviar la evidencia el reto pasa a "En revisión".
// Los puntos solo se suman cuando un auxiliar lo verifica (eso se haría en la versión real).

document.querySelectorAll('[data-enviar]').forEach(function (boton) {
  boton.addEventListener('click', function () {
    var reto = boton.closest('.reto');
    var estado = reto.querySelector('.estado');
    var detalle = reto.querySelector('.reto-detalle');
    var contador = document.getElementById('contador-revision');

    estado.textContent = 'En revisión';
    estado.className = 'estado estado-revision';
    detalle.textContent = 'Evidencia enviada, esperando revisión.';

    if (contador) {
      contador.textContent = String(Number(contador.textContent) + 1);
    }

    boton.remove();
  });
});