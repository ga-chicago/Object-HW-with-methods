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
	},
	ageAdd (){
		return this.age +=1;
	},
	nameChange (name){
		return this.name = name;
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

//COLLECTING STRINGS
const stringCollector = {
	collection: [],
	collect(string) {
		this.collection.push(string.split("").reverse().join(""));	
	},
	admireCollection(){
		for(i = 0; i < this.collection.length; i++){
			console.log(this.collection[i]); //Returning in a for loop will exit immediately
	}
}
}

//ATM
const ATM = {
	totalCash: 122,
	dispenseTwenties (numTwenties) {
		if (this.totalCash / (numTwenties * 20) >= 0 && this.totalCash >= (numTwenties * 20)){
			return this.totalCash -= (numTwenties * 20);
		} else
			return null;
	}
}

//HUNGRY TURTLES

const leonardo = {
	name: 'Leonardo',
	color: 'Blue',
	weapon: 'Katana',
	pizzaEaten: false,
	eatPizza(bool){
		if(this.pizzaEaten === true){
			console.log("Leonardo has already eaten pizza");
			return this.pizzaEaten = false;
		} else 
			console.log("Leonardo is eating pizza");
			return this.pizzaEaten = true;
	}
}

const calculator = {
	output: 10,
	multiply(num1, num2){
		console.log(this.output = (num1 * num2));
	},
	divide (num1, num2){
		console.log(this.output = (num1 / num2));
	},
	addition(num1,num2){
		console.log(this.output = (num1 + num2));
	},
	subtraction(num1,num2){
		console.log(this.output = (num1 - num2));
	}

}

