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
