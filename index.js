// convert fahrenheit to celsius
function fahrenheitToCelsius (fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// convert celsius to fahrenheit
function celsiusToFahrenheit (celsius) {
  return (celsius * 9) / 5 + 32;
}

module.exports = { fahrenheitToCelsius, celsiusToFahrenheit };

// $ node --print "require('./').fahrenheitToCelsius(100)"
// $ node --print "require('./').celsiusToFahrenheit(37.7778)"

// $ npm run lint --> test for code formatting issues
// $ npm run lint -- --fix --> fix code formatting issues automatically
