// Clicker

const clicker = {
	clickCount: '',
	click() {
		this.clickCount ++;
		return this.clickCount;
	}, 
}

console.log(clicker.click());

//It's All About Me

// Create an object called myInformation.
// Assign to it your name, your current age, and a fact about you.
// Inside myInformation, create a method called statement that returns a statement about you including your name, this fact, and how old you will be in 10 years.

// Inside myInformation, create another function that can be used to increment the value of your age by 1 each time that you call it.

// It's your birthday! Call this new method that you made that will increase your age.
// Create another function that can be used to change the value of your name.
// You're feeling funky and decide that your new name is Rumpelstiltskin. Call the method that will update your name and assign this new name. Log your object to confirm the changes.

						/*
						const myInformation = {
							name: 'Irwin',
							age: 25,
							fact: 'Love mashed potatoes',
							statement() {
								 return myInformation, this.age += 10;
							},
							changeNameValue(){
								return this.age ++
								console.log(myInformation.changeNameValue());
							}
						}
						console.log(myInformation.statement())
						*/

// Greeter

const greeter = {
	hello(name) {
		return 'Oh Hello there, ' + name;
	},
	goodbye(name) {
		return 'Arrivederci, ' + name + '!';
	},
	whoAreYou(name) {
		return 'Oh right! ' + name + ', how could I forget...!';
	}
}

console.log(greeter.whoAreYou('Irwin'));


// Collecting Strings

// Make an object called stringCollector, which has:

// a collection property - an array to hold strings
// a collect method which takes a string as a parameter
// the string collector prefers the strings to be totally reversed in their collection, however, so make sure to reverse it before adding it to the collection
// add an admireCollection method which prints out each string in the collection to the console, one line at a time
// 🔴 The commit message should read: 
// "Commit 4 - Collecting Strings done"


// const stringCollector = [
	// 'string',
	// () => (string)
// ]




// ATM

const atm = {
	totalCash: 200,
	dispenseTwenties(num) {
		let withdrawAmt = num * 20;
		if (withdrawAmt <= this.totalCash) {
			this.totalCash -= withdrawAmt
			return withdrawAmt;
		} else {
			return null;
		}
	},
}
console.log(atm.dispenseTwenties(6))
console.log(atm.totalCash)

console.log(atm.dispenseTwenties(1))
console.log(atm.totalCash)

// Hungry Turtles
/*
Create an object called Leonardo.
Leonardo should have a name attribute of "Leonardo", a color attribute of "Blue", and a weapon attribute of "Katana".
Leonardo should also have a boolean property called pizzaEaten that is initially set to false.
Add a method to Leonardo called eatPizza() which does the following:
If pizzaEaten is true, print out "Leonardo has already eaten pizza" and set pizzaEaten to false.
If pizzaEaten is false, print out "Leonardo is eating pizza" and set pizzaEaten to true.
🔴 The commit message should read: 
"Commit 6 - Hungry Turtles done"
*/


const leonardo = {
	name: 'Leonardo',
	color: 'blue',
	weapon: 'Katana',
	pizzaEaten: false,
	eatPizza(){
		if (this.pizzaEaten) {
			return 'Leonardo has already eaten pizza', this.pizzaEaten = true;
		} else {
			return 'Leonardo is eating pizza', this.pizzaEaten = false;
		}
	}
}

console.log(leonardo.eatPizza())



// Calculator

/*
Create an object called calculator

Create a property called output

Create a method inside your object that will multiply two numbers and change the output value to this current value. This method should also log the value of output.

Create a function that will divide two numbers. It should also change the output value to this current value. This method should also log the value of output.

Practice using your calculator with some pairs (10, 2), (-2, 8), (2, 2).

If there's additional time, add methods for addition and subtraction

🔴 The commit message should read: 
"Commit 7 - Calculator done"
*/

const calculator = {
	output: ''
}































