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
  fact: "I've never had a cavity",
  statement () {
    return ("My name is " + this.name + "." + "I will be " + (this.age + 10) + " years old in 10 years, and a fun fact about me is " + this.fact + ".");
  },
  getOlder () {
            this.age += 1;
  },
  newName () {
          this.name = "Rumplestiltskin"
  }
}

console.log(myInformation.statement());
myInformation.getOlder();
console.log(myInformation.age);
myInformation.newName();
console.log(myInformation.name);

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

console.log(greeter.goodbye("Zoe"));

//4. Collecting strings

const stringCollector = {
  collection: [],
  collect(string) {
  //need to reverse strings. split into array and then
  //reverse and then join as new string.
  const stringReverse = string.split("").reverse().join("");
  this.collection.push(stringReverse);
},
  //add an admireCollection method which prints out each string in the collection
  //to the console, one line at a time
  admireCollection (array) {
    let stringCollection = "";
    for (let i = 0; i < array.length; i++) {
      stringCollection += array[i] + " ";
      console.log(stringCollection);
    }
  }
}
stringCollector.collect("Moog");
stringCollector.collect("Roland");
stringCollector.collect("Korg");
stringCollector.collect("Yamaha");

console.log(stringCollector.admireCollection(stringCollector.collection));
