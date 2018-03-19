// CLICKER
//1. Make an object called clicker, which has a clickCount property, and a click method.
//2. Have the click method increment the clickCount by 1 each time it is called.

const clicker = {
	clickCount: 0,
	click () {
		return this.clickCount += 1
	}
}



// IT'S ALL ABOUT ME
//1. Create an object called myInformation.
//2. Assign to it your name, your current age, and a fact about you.
//3. Inside myInformation, create a method called statement that returns a statement about you including your name, 
//	 this fact, and how old you will be in 10 years.
//4. Inside myInformation, create another function that can be used to increment the value of your age by 1 each time that you call it.

const myInformation = {
 	name: 'Alyssa',
 	age: 28,
 	fact: 'I play ultimate frisbee.',
 	statement () {
 		const agePlus10 = this.age += 10;
 		return "I am " + this.name + " and I am 28." + this.fact + " I will be " + agePlus10 + " in 10 years.";
 	},
 	increaseAge () {
 		const ageIncrease = this.age += 1;
 		return ageIncrease
 	},
 	changeName (name) {
 		newName = name
		return this.name = newName
 	}
}

//5. It's your birthday! Call this new method that you made that will increase your age.
myInformation.increaseAge();

//6. Create another function that can be used to change the value of your name.

// SEE ABOVE

//7. You're feeling funky and decide that your new name is Rumpelstiltskin. Call the method that will update your name 
//	 and assign this new name. Log your object to confirm the changes.
myInformation.changeName("Rumpelstiltskin");
myInformation; //<--- returns object info with new name Rumpelstiltskin assigned



//GREETER
//1. Create an object called greeter.
//2. Inside the greeter object, create a method called hello that takes a name as a parameter and returns a greeting message 
//	 followed by the name parameter.
//3. Create another method inside greeter called goodbye that takes a name as a parameter and returns a farewell greeting followed 
//	 by the name parameter.
//4. Create a final method inside greeter called whoAreYou that takes a name as a parameter and returns "Oh right! ", followed by the 
//	 name parameter, followed by " how could I forget...!"

const greet = {
	hello (name) {
		return "Oh hello there, " + name
	},
	goodbye (name) {
		return "Hasta mañana, " + name
	},
	whoAreYou (name) {
		return "Oh right! " + name + " how could I forget...!"
	}
}


//5. Play around executing your functions by accessing them through the object.
// <-- All worked - yay!
