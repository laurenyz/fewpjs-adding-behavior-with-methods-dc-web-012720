class Cat {
  constructor(name, sex) {
    this.name = name
    this.sex = sex
  }
  speak() {
    console.log(`${this.name} says meow!`)
  }
}

class Dog {
  constructor(name, sex) {
    this.name = name
    this.sex = sex
  }
  speak() {
    `${this.name} says woof!`
  }
}

class Bird {
  constructor(name,sex) {
    this.name = name
    this.sex = sex
  }
  speak() {
    if (this.sex == "male") {
      `It's me!  ${this.name}, the parrot!`
    } else {
      `${this.name} says squawk!`
    }
  }
}

cat = new Cat("Sasha", "female")
console.log(cat.name)
cat.speak()