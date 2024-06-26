const {
  arrowSum,
  arrowMult,
  arrowArrayElementWiseSquare,
  arrowStringLength
} = require("../src/arrowFunctions.js");

describe("arrowSum", () => {
  it("a function to add two numbers", () => {
    expect(arrowSum(0, 5)).toBe(5);
    expect(arrowSum(1, 10)).toBe(11);
    expect(arrowSum(2, 8)).toBe(10);
    expect(arrowSum(3, 6)).toBe(9);
    expect(arrowSum(3.123123123587, 3.000000000001)).toBe(6.123123123588);
    expect(arrowSum(4, 11234564596879872)).toBe(11234564596879876);
  });
});

describe("arrowMult", () => {
  it("a function to multiply two numbers", () => {
    expect(arrowMult(0, 5)).toBe(0);
    expect(arrowMult(-1, 10)).toBe(-10);
    expect(arrowMult(2, 8)).toBe(16);
    expect(arrowMult(3, 6)).toBe(18);
    expect(arrowMult(10000000000000002, 4)).toBe(40000000000000008);
  });
});

describe("arrowArrayElementWiseSquare", () => {
  it("a function that takes an array of numbers and returns a new array with each element squared", () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(arrowArrayElementWiseSquare(numbers)).toEqual([1, 4, 9, 16, 25]);

    const emptyArray = [];
    expect(arrowArrayElementWiseSquare(emptyArray)).toEqual([]);

    const singleElementArray = [10];
    expect(arrowArrayElementWiseSquare(singleElementArray)).toEqual([100]);

    const negativeNumbers = [-1, -2, -3, -4, -5];
    expect(arrowArrayElementWiseSquare(negativeNumbers)).toEqual([
      1,
      4,
      9,
      16,
      25
    ]);

    const decimalNumbers = [0.1, 0.2, 0.3, 0.4, 0.5];
    expect(arrowArrayElementWiseSquare(decimalNumbers)).toEqual([
      0.01,
      0.04,
      0.09,
      0.16,
      0.25
    ]);

    const mixedNumbers = [1, -2, 3, -4, 5];
    expect(arrowArrayElementWiseSquare(mixedNumbers)).toEqual([
      1,
      4,
      9,
      16,
      25
    ]);
  });
});

describe("arrowStringLength", () => {
  it("a function that takes a string and returns the length of the string", () => {
    expect(arrowStringLength("abcdefg")).toBe(7);
    expect(arrowStringLength("ey edip adanada pide ye")).toBe(23);
    expect(arrowStringLength(" a")).toBe(2);
    expect(arrowStringLength("cat")).toBe(3);
    expect(arrowStringLength("")).toBe(0);
  });
});
