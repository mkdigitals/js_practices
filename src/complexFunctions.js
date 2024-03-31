const isEven = number => number % 2 === 0;

const calculateAverage = numbers => {
  const total = numbers.reduce((accumulator, curval) => {
    return accumulator + curval;
  }, 0);
  return total / numbers.length;
};

const countVowels = string => {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < string.length; i += 1) {
    for (let j = 0; j < vowels.length; j += 1) {
      if (string[i] === vowels[j]) {
        count += 1;
      }
    }
  }
  return count;
};

const findCommonElements = (array0, array1) => {
  const output = [];
  for (let i = 0; i < array0.length; i += 1) {
    for (let j = 0; j < array1.length; j += 1) {
      if (array0[i] === array1[j]) {
        output.push(array0[i]);
      }
    }
  }
  return output;
};

const findLongestString = strings => {
  let longestLength = 0;
  let longestWord = "";
  // strings.forEach(string => {
  //   longestLength =
  //     string.Length > longestLength ? string.Length : longestLength;
  //   longestWord = string.Length > longestLength ? string : longestWord;
  // });

  for (let i = 0; i < strings.length; i += 1) {
    if (strings[i].length > longestLength) {
      longestLength = strings[i].length;
      longestWord = strings[i];
    }
  }

  return longestWord;
};

const countCharacters = string => {
  const result = {};

  for (let i = 0; i < string.length; i += 1) {
    if (result[string[i]]) {
      result[string[i]] += 1;
    } else {
      result[string[i]] = 1;
    }
  }
  return result;
};

const getValuesByKey = (array, key) => array.map(value => value[key]);

const sumSubArrays = matrix => {
  const result = matrix.map(vector => {
    return vector.reduce((acc, val) => {
      return acc + val;
    }, 0);
  });
  return result;
};

module.exports = {
  isEven,
  calculateAverage,
  countVowels,
  findCommonElements,
  findLongestString,
  countCharacters,
  getValuesByKey,
  sumSubArrays
};
