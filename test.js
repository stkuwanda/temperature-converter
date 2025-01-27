const assert = require('node:assert');
const { fahrenheitToCelsius, celsiusToFahrenheit } = require('./index');

// test fahrenheitToCelsius
assert.strictEqual(fahrenheitToCelsius(32), 0, '32°F should convert to 0°C');
assert.strictEqual(fahrenheitToCelsius(212), 100, '212°F should convert to 100°C');

// test celisiusToFahrenheit
assert.strictEqual(celsiusToFahrenheit(0), 32, '0°C should convert to 32°F');
assert.strictEqual(celsiusToFahrenheit(100), 212, '100°C should convert to 212°F');

console.log('All test passed!');
