console.log("This is my Homework!")

//CLICKER
const clicker = {
	clickCount: 0,
	click(){
		return this.clickCount +=1;
	}
}

//ITS ALL ABOUT ME
const myInformation = {
	name: 'Marie',
	age: 26,
	funFact: 'I used to be a pilot.',
	statement (){
		return "My name is " + myInformation.name + ". I am " + myInformation.age + " years old, and " + myInformation.funFact;
	}
}

//GREETER
const greeter = {
	hello (name) {
		return "Oh hello there, " + name + "!";
	},
	goodbye (name) {
		return "Arrivederci, " + name + "!"
	},
	whoAreYou (name) {
		return "Oh right!  " + name + " how could I forget...!"
	}
}