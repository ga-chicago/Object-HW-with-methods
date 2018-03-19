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