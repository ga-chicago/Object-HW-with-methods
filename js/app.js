//Clicker

const clicker = {
	clickCount: 0,
	click() {
		this.clickCount++;
	}
}

clicker.click();
console.log(clicker.clickCount);

//It's All About Me

const myInformation = {
	name: 'Ben',
	age: 25,
	fact: "I have a degree in Chemical Engineering",
	statement() {
		return "I am "+this.name+", "+this.fact+", and I will be "+(this.age+10)+" in 10 years.";
	},
	birthday() {
		this.age++;
		console.log("Celebrate!");
	},
	changeName(newName) {
		this.name = newName;
	}
}

console.log(myInformation.statement());

myInformation.birthday();

myInformation.changeName("Rumpelstiltskin");

console.log(myInformation);

//Greeter

const greeter = {
	hello(name) {
		return "Oh hi, "+name+".";
	},
	goodbye(name) {
		return "Ok, bye "+name+".";
	},
	whoAreYou(name) {
		return "Oh right! "+name+" how could I forget...!";
	}
}

const name = "Mark";

console.log(greeter.hello(name));
console.log(greeter.whoAreYou(name));
console.log(greeter.goodbye(name));

//Collecting Strings

const stringCollector = {
	collection: [],
	collect(str) {
		let revStr = "";
		for (let i in str) {
			revStr = str[i] + revStr;
		}
		this.collection.unshift(revStr);
	},
	admireCollection() {
		for (let str of this.collection) {
			console.log(str);
		}
	}
}

stringCollector.collect("Ben");
stringCollector.collect("racecar");
stringCollector.collect("beeees");
stringCollector.admireCollection();

//ATM

const atm = {
	totalCash: 0,
	dispenseTwenties(numOfTwen) {
		let total = numOfTwen * 20;
		if (total <= this.totalCash) {
			this.totalCash -= total;
			return total;
		}
		else {
			return null;
		}
	},
	fillATM() {
		this.totalCash = 2000;
	}
}

atm.fillATM();
console.log(atm.dispenseTwenties(10));
console.log(atm.totalCash);
console.log(atm.dispenseTwenties(200));

//Hungry Turtles

const Leonardo = {
	name: "Leonardo",
	color: "Blue",
	weapon: "Katana",
	pizzaEaten: false,
	eatPizza() {
		if (this.pizzaEaten === true) {
			console.log("Leonardo has already eaten pizza");
			this.pizzaEaten = false;
		}
		else {
			console.log("Leonardo is eating pizza");
			this.pizzaEaten = true;
		}
	}
}

Leonardo.eatPizza();
Leonardo.eatPizza();
console.log(Leonardo.pizzaEaten);


