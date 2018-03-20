//Homework 19 March 2018

//1. Clicker
//Make an object called clicker, which has a clickCount property,
//and a click method.

const clicker = {
  clickCount: 0,
  click() {
//Have the click method increment the clickCount by 1 each time
//it is called.
      return this.clickCount += 1;
  }
}

//2. Its All About Me
const myInformation = {
  name: "Zoe",
  age: 26,
  fact: "I've never had a cavity.",
  getOlder () {
            this.age += 1;
            return this.age;
  },
  newName () {
          this.name = "Rumplestiltskin"
          console.log(this.name);
  }
}

myInformation.getOlder();
myInformation.newName()

//3. Greeter
const greeter = {
  hello(name) {
    return ("Hello, " + name)
  },
  goodbye(name) {
      return ("До свидания, " + name)
  },
  whoAreYou(name) {
      return ("OHHH right!" + name + "how could I forget?!")
  }
}
