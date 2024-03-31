class Rectangle {
  constructor (width, height) {
    this.width = width;
    this.height = height;
  };

  area = () => {
    return this.width * this.height;
  };

  perimeter = () => {
    return (this.width + this.height) * 2;
  }
}

class Circle {
  constructor (radius) {
    this.radius = radius;
  }

  area = () => {
    return ((this.radius) ** 2) * Math.PI;
  }

  circumference = () => {
    return this.radius * 2 * Math.PI;
  }
}

const createPerson = (name, age, gender) => {
  const person = {
    name : name,
    age : age,
    gender : gender
  }
  return person;
} 

const personArray = () => {
  const resultArray = [];
  let randomName = "";
  let randomAge = 0;
  let randomGender = ""; 
  const randomArrayLength = Math.floor(Math.random() * 10) + 1;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomNameLength = 0;
  for (let i = 0; i < randomArrayLength; i += 1) {
    randomNameLength = Math.floor(Math.random() * 10) + 1;
    randomName = "";
    for(let j = 0; j < randomNameLength; j += 1) {
      randomName += characters.charAt(Math.floor(Math.random()*characters.length));
    }

    randomAge = Math.floor(Math.random()*100);

    if (Math.random() > 0.5) {
      randomGender = "male";
    } else {
      randomGender = "female";
    }

    resultArray.push(createPerson(randomName, randomAge, randomGender));

  }

  return resultArray;
}

const totalAge = people => {
  const sigma = people.reduce((accumulator, person) => {
    return accumulator + person.age;
  }, 0);
  return sigma;
}

module.exports = {
  Rectangle,
  Circle,
  createPerson,
  personArray,
  totalAge
};