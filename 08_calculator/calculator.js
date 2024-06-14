const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0)
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current, 1)
};

const power = function(num, power) {
  return Math.pow(num, power)
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
