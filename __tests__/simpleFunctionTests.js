const {
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
} = require("../src/simpleFunctions.js");

describe("add", () => {
  it("a function to add two numbers", () => {
    expect(add(0, 5)).toBe(5);
    expect(add(1, 10)).toBe(11);
    expect(add(2, 8)).toBe(10);
    expect(add(3, 6)).toBe(9);
    expect(add(3.123123123587, 3.000000000001)).toBe(6.123123123588);
    expect(add(4, 11234564596879872)).toBe(11234564596879876);
  });
});

describe("sub", () => {
  it("a function to subtract two numbers", () => {
    expect(sub(0, 5)).toBe(-5);
    expect(sub(1, 10)).toBe(-9);
    expect(sub(8, 2)).toBe(6);
    expect(sub(6.123123123588, 3.123123123587)).toBe(3.000000000001);
    expect(sub(11234564596879876, 4)).toBe(11234564596879872);
  });
});

describe("mult", () => {
  it("a function to multiply two numbers", () => {
    expect(mult(0, 5)).toBe(0);
    expect(mult(-1, 10)).toBe(-10);
    expect(mult(2, 8)).toBe(16);
    expect(mult(3, 6)).toBe(18);
    expect(mult(10000000000000002, 4)).toBe(40000000000000008);
  });
});

describe("div", () => {
  it("a function to divide two numbers", () => {
    expect(div(0, 5)).toBe(0);
    expect(div(1, 10)).toBe(0.1);
    expect(div(12, 3)).toBe(4);
    expect(div(22, -2)).toBe(-11);
    expect(div(1, 0)).toBe(null);
    expect(div(40000000000000008, 4)).toBe(10000000000000002);
  });
});

describe("sum", () => {
  it("a function that takes an array of numbers and returns the sum of all elements", () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(sum(numbers)).toBe(15);

    const emptyArray = [];
    expect(sum(emptyArray)).toBe(0);

    const singleElementArray = [10];
    expect(sum(singleElementArray)).toBe(10);

    const negativeNumbers = [-1, -2, -3, -4, -5];
    expect(sum(negativeNumbers)).toBe(-15);

    const decimalNumbers = [0.1, 0.2, 0.3, 0.4, 0.5];
    expect(sum(decimalNumbers)).toBe(1.5);

    const mixedNumbers = [1, -2, 3, -4, 5];
    expect(sum(mixedNumbers)).toBe(3);
  });
});

describe("findMax", () => {
  it("a function to find the maximum number in an array", () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(findMax(numbers)).toBe(5);

    const emptyArray = [];
    expect(findMax(emptyArray)).toBe(null);

    const singleElementArray = [10];
    expect(findMax(singleElementArray)).toBe(10);

    const negativeNumbers = [-1, -2, -3, -4, -5];
    expect(findMax(negativeNumbers)).toBe(-1);

    const decimalNumbers = [0.1, 0.2, 0.7, 0.4, 0.5];
    expect(findMax(decimalNumbers)).toBe(0.7);

    const mixedNumbers = [1, -2, 32, -4, 5];
    expect(findMax(mixedNumbers)).toBe(32);
  });
});

describe("findMin", () => {
  it("a function to find the minimum number in an array", () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(findMin(numbers)).toBe(1);

    const emptyArray = [];
    expect(findMin(emptyArray)).toBe(null);

    const singleElementArray = [10];
    expect(findMin(singleElementArray)).toBe(10);

    const negativeNumbers = [-1, -2, -3, -4, -5];
    expect(findMin(negativeNumbers)).toBe(-5);

    const decimalNumbers = [0.1, 0.2, 0.7, 0.4, 0.5];
    expect(findMin(decimalNumbers)).toBe(0.1);

    const mixedNumbers = [1, -2, 32, -4, 5];
    expect(findMin(mixedNumbers)).toBe(-4);
  });
});

describe("stringReverse", () => {
  it("a function that takes a string and returns the reversed string", () => {
    expect(stringReverse("abcdefg")).toEqual("gfedcba");
    expect(stringReverse("ey edip adanada pide ye")).toEqual(
      "ey edip adanada pide ye"
    );
    expect(stringReverse(" a.")).toEqual(".a ");
    expect(stringReverse("cat")).toEqual("tac");
    expect(stringReverse("")).toEqual("");
  });
});

describe("stringLength", () => {
  it("a function that takes a string and returns the length of the string", () => {
    expect(stringLength("abcdefg")).toBe(7);
    expect(stringLength("ey edip adanada pide ye")).toBe(23);
    expect(stringLength(" a")).toBe(2);
    expect(stringLength("cat")).toBe(3);
    expect(stringLength("")).toBe(0);
  });
});

describe("allCaps", () => {
  it("a function that takes an array of strings and returns a new array with all elements capitalized.", () => {
    const inputArray = [
      "make me capitalized",
      "me too",
      "NOT ME, I AM AlREADY PERFECT"
    ];
    expect(allCaps(inputArray)).toEqual([
      "MAKE ME CAPITALIZED",
      "ME TOO",
      "NOT ME, I AM ALREADY PERFECT"
    ]);
  });
});
