// CLICKER

const clicker = {
	clickCount: 0,
	click () {
		this.clickCount += 1;
		return this.clickCount;
	}
};

console.log(clicker.click());

// IT'S ALL ABOUT ME

const myInformation = {
	name: "Tyler Earls",
	age: 24,
	fact: "Star Trek fan",
	statement () {
		return ("My name is " + this.name + ", I will be " + (this.age + 10) + " years old in 10 years, and something interesting about me is I am a " + this.fact + ".");
	},
	birthday () {
		this.age += 1;
	},
	changeName () {
		this.name = "Rumpelstiltskin";
	}
}
console.log(myInformation.statement());
myInformation.birthday();
console.log(myInformation.age);
myInformation.changeName();
console.log(myInformation.name);

// GREETER

const greeter = {
	hello (name) {
		return ("Oh hello there, " + name + "!");
	},
	goodbye (name) {
		return ("Arrivederci, " + name + "!");
	},
	whoAreYou (name) {
		return ("Oh right! " + name + ", how could I forget...?");
	}
};

console.log(greeter.hello("Tyler"));
console.log(greeter.goodbye("Tyler"));
console.log(greeter.whoAreYou("Tyler"));

// COLLECTING STRINGS

const stringCollector = {
	collection: [],
	collect (string) {
		// split into array, reverse, then rejoin as string.
		const backwardsString = string.split("").reverse().join("");
		this.collection.push(backwardsString);
	},
	admireCollection (array) {
		// need to store to empty string
		let stringCollection = "";
		for (let i = 0; i < array.length; i++) {
			// need to add space so it reads one at a time
			stringCollection += array[i] + " ";
			console.log(stringCollection);
		}
	}
}
console.log(stringCollector.collect("hello"));
// adding to collection to test it out
stringCollector.collect("hello");
stringCollector.collect("goodbye");
stringCollector.collect("okay");
// it works
stringCollector.admireCollection(stringCollector.collection);

// ATM

const atm = {
	totalCash: 200,
	dispenseTwenties (cash) {
		// define variable for how much cash is taken out
		let cashWithdrawn = 20 * cash;
		// update value of total cash
		this.totalCash -= cashWithdrawn
		// set condition for insufficient funds
		if (this.totalCash <= 0) {
			return null;
		}
		// if sufficient funds, return amount taken out
		return cashWithdrawn;
	}
}

// console.log(atm.dispenseTwenties(6)); // returns 120
// console.log(atm.dispenseTwenties(12)); // returns null

const Leonardo = {
	name: "Leonardo",
	color: "blue",
	weapon: "katana",
	pizzaEaten: false,
	eatPizza () {
		if (this.pizzaEaten) {
			// if evaluates to true
			this.pizzaEaten = false;
			// have to reset value before return
			return (this.name + " has already eaten pizza.");
		} else {
			this.pizzaEaten = true;
			return (this.name + " is eating pizza.");
		}
	}
}
// Leonardo.eatPizza();
// console.log(Leonardo.eatPizza()); works either way

