const {
  isEven,
  calculateAverage,
  countVowels,
  findCommonElements,
  findLongestString,
  countCharacters,
  getValuesByKey,
  sumSubArrays
} = require("../src/complexFunctions.js");

describe("isEven", () => {
  it("should return true if the number is even", () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(4)).toBe(true);
    expect(isEven(10)).toBe(true);
  });

  it("should return false if the number is odd", () => {
    expect(isEven(3)).toBe(false);
    expect(isEven(7)).toBe(false);
    expect(isEven(11)).toBe(false);
  });
});

describe("calculateAverage", () => {
  it("should return the average of all elements in the array", () => {
    expect(calculateAverage([1, 2, 3, 4, 5])).toBe(3);
    expect(calculateAverage([10, 20, 30, 40, 50])).toBe(30);
  });
});

describe("countVowels", () => {
  it("should return the number of vowels in the string", () => {
    expect(countVowels("hello")).toBe(2);
    expect(countVowels("world")).toBe(1);
  });
});

describe("findCommonElements", () => {
  it("should return a new array containing elements common to both arrays", () => {
    expect(findCommonElements([1, 2, 3, 4], [3, 4, 5, 6])).toEqual([3, 4]);
    expect(findCommonElements(["apple", "banana", "orange"], ["banana", "grape"])).toEqual(["banana"]);
  });
});

describe("findLongestString", () => {
  it("should return the longest string from the array", () => {
    expect(findLongestString(["apple", "banana", "orange"])).toBe("banana");
    expect(findLongestString(["cat", "dog", "elephant"])).toBe("elephant");
  });
});

describe("countCharacters", () => {
  it("should return an object with the count of each character in the string", () => {
    expect(countCharacters("hello")).toEqual({ h: 1, e: 1, l: 2, o: 1 });
    expect(countCharacters("world")).toEqual({ w: 1, o: 1, r: 1, l: 1, d: 1 });
  });
});

describe("getValuesByKey", () => {
  it("should return a new array with the values of the specified key from each object", () => {
    const objects = [{ name: "John", age: 25 }, { name: "Jane", age: 30 }];
    expect(getValuesByKey(objects, "name")).toEqual(["John", "Jane"]);
    expect(getValuesByKey(objects, "age")).toEqual([25, 30]);
  });
});

describe("sumSubArrays", () => {
  it("should return a new array with the sum of each sub-array", () => {
    expect(sumSubArrays([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([6, 15, 24]);
    expect(sumSubArrays([[10, 20], [30, 40, 50], [60]])).toEqual([30, 120, 60]);
  });
});