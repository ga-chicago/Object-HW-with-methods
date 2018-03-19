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



