// https://www.codewars.com/kata/56f935002e6c0d55fa000d92

class Shark extends Animal {
  constructor(name, age, status, legs, species) {
    super(name, age, (legs = 0), (species = "shark"), status);
  }
}

class Cat extends Animal {
  constructor(name, age, status, legs, species) {
    super(name, age, (legs = 4), (species = "cat"), status);
  }

  introduce() {
    return super.introduce() + "  Meow meow!";
  }
}

class Dog extends Animal {
  constructor(name, age, status, master, legs, species) {
    super(name, age, (legs = 4), (species = "dog"), status);
    this.master = master;
  }

  greetMaster() {
    return "Hello " + this.master;
  }
}
