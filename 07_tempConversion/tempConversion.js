const convertToCelsius = function(fahrenheit) {
  let fToCel = (fahrenheit - 32) * (5 / 9);
  let cRounded = Math.round(fToCel * 10) / 10;
  return cRounded;
};

const convertToFahrenheit = function(celsius) {
  let cToFahr = (celsius * (9 / 5) + 32);
  let fRounded = Math.round(cToFahr * 10) / 10;
  return fRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
