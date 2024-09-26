const validator = {
  // Función para validar el número de tarjeta usando el algoritmo de Luhn
  isValidCardNumber: function(cardNumber) {
    // Eliminar espacios en blanco y guiones (si los hay)
    cardNumber = cardNumber.replace(/\s/g, '').replace(/-/g, '');

    // Verificar que el número de tarjeta contenga solo números y tenga una longitud válida
    if (/^\d+$/.test(cardNumber) && cardNumber.length === 16) {
      // Aplicar algoritmo de Luhn
      let sum = 0;
      let shouldDouble = false;
      for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber.charAt(i), 10);
        if (shouldDouble) {
          digit *= 2;
          if (digit > 9) {
            digit -= 9;
          }
        }
        sum += digit;
        shouldDouble = !shouldDouble;
      }
      return (sum % 10 === 0);
    } else {
      return false; // Si el número de tarjeta no es válido
    }
  },

  // Función para ocultar todos los dígitos de la tarjeta excepto los últimos cuatro
  maskify: function(cardNumber) {
    // Verificar que la longitud del número de tarjeta sea mayor o igual a 4
    if (cardNumber.length >= 4) {
      const lastFourDigits = cardNumber.slice(-4); // Obtener los últimos cuatro dígitos
      const maskedNumber = lastFourDigits.padStart(cardNumber.length, '#'); // Ocultar los demás dígitos con #
      return maskedNumber;
    } else {
      return cardNumber; // En caso de que el número de tarjeta tenga menos de 4 dígitos, devolverlo sin cambios
    }
  }
};

export default validator;