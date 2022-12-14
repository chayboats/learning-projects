// Temperature in Kelvin stored in 'tempKelvin'
let tempKelvin = 355;

// Kelvin temperature converted to Celsius stored in 'tempCelsius'
let tempCelsius = tempKelvin - 273.15;

// Celsius temperature converted to Fahrenheit stored in 'tempFahrenheit'
let tempFahrenheit = tempCelsius * 5/9 + 32;
console.log(tempFahrenheit);

// The message for the day's temperature will be stored in 'tempMessage' and read 'Today's temperature in Lafayette will be "tempFahrenheit" degrees fahrenheit.' 
//'tempFahrenheit' will be rounded down
let tempMessage = 'Today\'s temperature in Lafayette will be ' + Math.floor(tempFahrenheit) + ' degrees fahrenheit.'; 