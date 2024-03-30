/* eslint-disable no-multi-str */
const {
  Rectangle,
  Circle,
  createPerson,
  personArray,
  totalAge
} = require("../src/classesAndObjects.js");

describe("Rectangle", () => {
  it("Create a class called `Rectangle` with properties `width` \
  and `height`, and methods `area()` and `perimeter()", () => {
    const rectangle = new Rectangle(5, 10);
    expect(rectangle.width).toBe(5);
    expect(rectangle.height).toBe(10);
    expect(rectangle.area()).toBe(50);
    expect(rectangle.perimeter()).toBe(30);

    const rectangle2 = new Rectangle(2, 1.2);
    expect(rectangle2.width).toBe(2);
    expect(rectangle2.height).toBe(1.2);
    expect(rectangle2.area()).toBe(2.4);
    expect(rectangle2.perimeter()).toBe(6.4);
  });
});

describe("Circle", () => {
  it("Create a class called `Circle` with properties `radius`\
   and methods `area()` and `circumference()`.", () => {
    const circle = new Circle(5);
    expect(circle.radius).toBe(5);
    expect(circle.area()).toEqual(25 * Math.PI());
    expect(circle.circumference()).toEqual(10 * Math.PI());
  });
});

describe("createPerson", () => {
  it("should create aan object representing a person with properties: `name`, `age`, and `gender`", () => {
    const person = createPerson('John', 25, 'male');
    expect(person.name).toBe('John');
    expect(person.age).toBe(25);
    expect(person.gender).toBe('male');
  });
});

describe("personArray", () => {
  it("Create an array of objects representing multiple persons", () => {
    const people = personArray();
    expect(Array.isArray(people)).toBe(true);
    expect(people.length).toBeGreaterThan(0);
    people.forEach(person => {
      expect('name' in person).toBe(true);
      expect('age' in person).toBe(true);
      expect('gender' in person).toBe(true);
    });
  });
});
describe("totalAge", () => {
  it("should return the total age of all persons", () => {
    const persons = [
      createPerson("John", 25, "male"),
      createPerson("mohn", 2, "female"),
      createPerson("dohn", 35, "male")
    ];
    expect(totalAge(persons)).toBe(62);
  });
});
