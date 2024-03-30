const arrowSum = (a, b) => a + b;
const arrowMult = (a, b) => a * b;
const arrowArrayElementWiseSquare = numbers =>
  numbers.map(number => number ** 2);
const arrowStringLength = string => string.length;

module.exports = {
  arrowSum,
  arrowMult,
  arrowArrayElementWiseSquare,
  arrowStringLength
};
