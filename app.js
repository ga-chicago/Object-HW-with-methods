// 🐘 Remember to test each of your answers!

// Clicker
// Make an object called clicker, which has a clickCount property, and a click method.
// Have the click method increment the clickCount by 1 each time it is called.

const clicker = {
	clickCount: 0,
		clickMethod(click) {
			this.clickCount += 1;
			return this.clickCount

		}
		
}

clicker.clickMethod("yes");

---> 1	




// Create an object called myInformation.
// Assign to it your name, your current age, and a fact about you.
// Inside myInformation, create a method called statement that returns a statement about you including your name, this fact, and how old you will be in 10 years.
// Inside myInformation, create another function that can be used to increment the value of your age by 1 each time that you call it.
// It's your birthday! Call this new method that you made that will increase your age.
// Create another function that can be used to change the value of your name.
// You're feeling funky and decide that your new name is Rumpelstiltskin. Call the method that will update your name and assign this new name. Log your object to confirm the changes.

const myInformation = {
	name: "Sam",
	age: 25,
	fact: "Favorite team is Arsenal.",
		moreInfo() {
			console.log(this.name)
			console.log(this.age + 10)
			console.log(this.fact)

		},

		ageincrease() {
			this.age +=1;
			return this.age + " It's your Birthday!"
		},

		nameChange() {
			this.name = "Rumpelstiltskin"
		}

}



// Create an object called greeter.
// Inside the greeter object, create a method called hello that takes a name as a parameter and returns a greeting message followed by the name parameter.
// Example: Oh hello there, Matthew

// Create another method inside greeter called goodbye that takes a name as a parameter and returns a farewell greeting followed by the name parameter.
// Example: Arrivederci, Matthew!

// Create a final method inside greeter called whoAreYou that takes a name as a parameter and returns "Oh right! ", followed by the name parameter, followed by " how could I forget...!"
// Example: Oh right! Matthew how could i forget...!

// Play around executing your functions by accessing them through the object.

const greeter = {
	message(name) {
		return "Hello there " + name
	},
		goodbyeMessage(name) {
			return "See ya later, " + name
		},
		finalMessage(name) {
			return "Oh right! " + name + " how could ! forget!"
		}
}


greeter.message("Sam");
"Hello there Sam"

greeter.goodbyeMessage("Sam");
"See ya later, Sam"

greeter.finalMessage("Sam");
"Oh right! Sam how coould ! forget!"




// Make an object called stringCollector, which has:

// a collection property - an array to hold strings
// a collect method which takes a string as a parameter
// the string collector prefers the strings to be totally reversed in their collection, however, so make sure to reverse it before adding it to the collection
// add an admireCollection method which prints out each string in the collection to the console, one line at a time


// Come back to this one. Confused 


const reverseOrder = (array) => {
	return 
}

 

const stringCollector = {
		 collection: ["Hi", "hello", "bye"],
		
		stringCollector
			collect(str) {
				console.log(collection.reverse())
				return collection.reverse();
			

			}

		}


// need for of loop from earlier




// ATM
// Make an object called atm which has two properties:

// totalCash, the total amount of cash in the atm
// dispenseTwenties, a method with takes a number of twenties and, if there is enough cash, returns the total number of cash it is giving out.
// If there is not enough cash, return null instead.
// For example, if the atm has 200 dollars left, the call to dispenseTwenties(6) should return 120, and update the totalCash to 80. However a call to dispenseTwenties(11) should return null.


const ATM = {
	totalCash: 200,
		dispenseTwenties(num) {
			if(num * 20 < this.totalCash) { // if the number * 20 is less than the number in total cash then return the number
			this.totalCash = this.totalCash - num * 20	// take away the total dollar amount from total ATM
			return num * 20
			
		} else {
			return null


		}
	
	}
}

ATM.dispenseTwenties(4);

80

ATM.totalCash;

120


// Create an object called Leonardo.
// Leonardo should have a name attribute of "Leonardo", a color attribute of "Blue", and a weapon attribute of "Katana".
// Leonardo should also have a boolean property called pizzaEaten that is initially set to false.
// Add a method to Leonardo called eatPizza() which does the following:
// If pizzaEaten is true, print out "Leonardo has already eaten pizza" and set pizzaEaten to false.
// If pizzaEaten is false, print out "Leonardo is eating pizza" and set pizzaEaten to true.

const Leonardo = {
	name: "Leonardo",
	color: "blue",
	weapon: "Katana",
	pizzaEaten: false,
		eatPizza() {
			if(this.pizzaEaten === false) {
				this.pizzaEaten = true
			return "Leonardo is eating pizza"

		} else {
			this.pizzaEaten = false
			return "Leonardo has already eaten pizza"	
			
		}

	}
}

Leonardo.eatPizza(false);
"Leonardo is eating pizza"

Leonardo.pizzaEaten;

true



	



