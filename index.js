// convert fahrenheit to celsius
function fahrenheitToCelsius(fahrenheit) {
	return ((fahrenheit - 32) * 5) / 9;
}

// convert celsius to fahrenheit
function celsiusToFahrenheit(celsius) {
	return (celsius * 9) / 5 + 32;
}

module.exports = { fahrenheitToCelsius, celsiusToFahrenheit };
