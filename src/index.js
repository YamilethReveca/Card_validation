import validator from './validator.js';

document.addEventListener('DOMContentLoaded', function () {
  // Obtener referencia a los campos de entrada
  const numeroTarjetaInput = document.getElementById('numeroTarjeta');
  const nombreUsuarioInput = document.getElementById('nombreUsuario');
  const codigoInput = document.getElementById('codigo');

  // Obtener referencias a las tarjetas
  const card1 = document.getElementById('tarjeta1');
  const card2 = document.getElementById('tarjeta2');
  const copiaNumeroTarjeta = document.getElementById('copiaNumeroTarjeta');
  const validacionNumeroTarjeta = document.getElementById('validacionNumeroTarjeta')


  // Función para validar el número de tarjeta
  function validarNumeroTarjeta() {
    const cardNumber = numeroTarjetaInput.value.trim();
    if (cardNumber.length >= 13) {
      const isValid = validator.isValidCardNumber(cardNumber);
      const lastFourDigits = validator.maskify(cardNumber);
      document.getElementById('copiaNumeroTarjeta').innerHTML = `<span>${isValid ? lastFourDigits : 'Inválido'}</span>`;
    } else {
      document.getElementById('copiaNumeroTarjeta').innerHTML = `<span>${cardNumber}</span>`;
    }
  }

  numeroTarjetaInput.addEventListener('input', validarNumeroTarjeta);

  const selectMes = document.getElementById('month');
  const selectAño = document.getElementById('year');

  function actualizarValores() {
    const mostrarMes = document.getElementById('copiaMes');
    const mostrarAño = document.getElementById('copiaAño');

    mostrarMes.textContent = selectMes.options[selectMes.selectedIndex].text;
    mostrarAño.textContent = selectAño.value;
  }

  selectMes.addEventListener('change', actualizarValores);
  selectAño.addEventListener('change', actualizarValores);

  // Función para enfocar elementos de la tarjeta 1 y desenfocar la tarjeta 2
  function tarjeta1() {
    card1.classList.add('focused');
    card2.classList.remove('focused');
  }

  // Función para enfocar elementos de la tarjeta 2 y desenfocar la tarjeta 1
  function tarjeta2() {
    card2.classList.add('focused');
    card1.classList.remove('focused');
  }


  // Event listeners para detectar cambios de enfoque
  numeroTarjetaInput.addEventListener('focus', tarjeta1);
  nombreUsuarioInput.addEventListener('focus', tarjeta1);
  codigoInput.addEventListener('focus', tarjeta2);



  // Función para mostrar solo la tarjeta 1
  function showCard1() {
    card1.classList.add('visible');
    card1.classList.remove('hidden');
    card2.classList.add('hidden');
    card2.classList.remove('visible');
  }

  // Función para mostrar solo la tarjeta 2
  function showCard2() {
    card1.classList.add('hidden');
    card1.classList.remove('visible');
    card2.classList.add('visible');
    card2.classList.remove('hidden');
  }

  // Mostrar la tarjeta 1 inicialmente
  showCard1();




  // Función para actualizar el número de la tarjeta en la tarjeta 1
  function actualizarNumeroTarjeta() {
    const cardNumber = numeroTarjetaInput.value.trim();
    let lastFourDigits = '';
    if (cardNumber.length >= 4) {
      lastFourDigits = cardNumber.slice(-4); // Obtener los últimos 4 dígitos
      copiaNumeroTarjeta.innerHTML = `<span>**** **** **** ${lastFourDigits}</span>`;
    } else {
      copiaNumeroTarjeta.innerHTML = '<span>**** **** **** ****</span>'; // Placeholder
    }

    // Validar el número de tarjeta
    const isValid = validator.isValidCardNumber(cardNumber);
    validacionNumeroTarjeta.textContent = isValid ? 'Válido' : 'Inválido';
    validacionNumeroTarjeta.style.color = isValid ? 'green' : 'red';
  }



  numeroTarjetaInput.addEventListener('input', actualizarNumeroTarjeta);

  // Función para actualizar el nombre del usuario en la tarjeta
  function actualizarNombreUsuario() {
    const nombreUsuario = nombreUsuarioInput.value.trim();
    document.getElementById('copiaNombreUsuario').textContent = nombreUsuario;
  }

  nombreUsuarioInput.addEventListener('input', actualizarNombreUsuario);


  // Event listeners para manejar el enfoque
  numeroTarjetaInput.addEventListener('focus', showCard1);
  nombreUsuarioInput.addEventListener('focus', showCard1);
  codigoInput.addEventListener('focus', showCard2);

  // Opcional: Event listener para manejar el desenfoque si se desea
  numeroTarjetaInput.addEventListener('blur', showCard1);
  nombreUsuarioInput.addEventListener('blur', showCard1);
  codigoInput.addEventListener('blur', showCard2);


  // Función para actualizar el CVV en la tarjeta
  function actualizarCVV() {
    const cvv = codigoInput.value.trim();
    document.getElementById('tres').textContent = cvv;
  }

  // Añadir un evento para actualizar el CVV cada vez que se cambie su valor
  codigoInput.addEventListener('input', actualizarCVV);

  // Inicialmente enfocar la primera tarjeta
  tarjeta1();
});
