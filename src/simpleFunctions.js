const add = (op0, op1) => {
  return op0 + op1;
};

const sub = (op0, op1) => {
  return op0 - op1;
};

const mult = (op0, op1) => {
  return op0 * op1;
};

const div = (op0, op1) => {
  return op1 === 0 ? null : op0 / op1;
};

const sum = numbers => {
  const sigma = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return sigma;
};

const findMax = numbers => {
  let maxVal = Number.NEGATIVE_INFINITY;
  if (numbers.length === 0) {
    return null;
  }
  for (let i = 0; i < numbers.length; i += 1) {
    if (maxVal < numbers[i]) {
      maxVal = numbers[i];
    }
  }
  return maxVal;
};

const findMin = numbers => {
  let minVal = Number.POSITIVE_INFINITY;
  if (numbers.length === 0) {
    return null;
  }
  for (let i = 0; i < numbers.length; i += 1) {
    if (minVal > numbers[i]) {
      minVal = numbers[i];
    }
  }
  return minVal;
};

const stringReverse = string => {
  let reversedString = "";
  reversedString = "";
  for (let i = string.length - 1; i >= 0; i -= 1) {
    reversedString += string[i];
  }
  return reversedString;
};

const stringLength = string => string.length;

const allCaps = strings => strings.map(string => string.toUpperCase());

module.exports = {
  add,
  sub,
  mult,
  div,
  sum,
  findMax,
  findMin,
  stringReverse,
  stringLength,
  allCaps
};
