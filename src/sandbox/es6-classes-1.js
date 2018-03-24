
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGretting() {
    //return 'I am ' + this.name + ' Hi there';
    return `I am ${this.name}. Hi there.`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if(this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGretting() {
    let greeting = super.getGretting();

    if(this.homeLocation) {
      greeting += ` I am coming from ${this.homeLocation}.`
    }

    return greeting;
  }
}

const me = new Traveler('Rachel McAdams', 39, 'Edinburgh');
console.log(me.getGretting());

const other = new Traveler();
console.log(other.getGretting());
