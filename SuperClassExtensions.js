// https://www.codewars.com/kata/55a14cd026f2a4b196000092

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return this.name + " makes a noise, ";
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    return super.speak() + this.name + " goes meow.";
  }
}
