# Temperature Conversion Module
This is a Node.js module exposing functions to convert temperature values between Fahrenheit and Celsius units.

# Example usage
```js
const { fahrenheit, celsius } = require('@stkuwanda/temperature-converter');
const celsius = fahrenheitToCelsius(100);
console.log(`100°F is ${celsius}°C`);
const fahrenheit = celsiusToFahrenheit(37);
console.log(`37°C is ${fahrenheit}°F`);
```

# Running tests
To run tests and ensure the module is working as expected, navigate to the module's root directory and execute:
```
$ npm run test
```

# License
This project is licensed under the MIT license.