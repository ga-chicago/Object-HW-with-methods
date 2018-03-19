// #1 clicker

const clicker = {
	clickCount: 0,
	click () {
		this.clickCount += 1;
		return this.clickCount;
	}
}

// #2 it's all abut me

const myInformation = {
	name: "Hannah",
	age: 22,
	fact: "I moved to Chicago two weeks ago.",
	getOlder() {
		this.age += 1;
		return this.age;
	},
	newName() {
		this.name = "Rumpelstiltskin"
		console.log(this.name)
	}
}

myInformation.getOlder()
myInformation.newName()


// #3 greeter
const greeter = {
	hello(name) {
		return ("Hello, " + name)
	}, 
	goodbye(name) {
		return ("Arrivederci, " + name)
	}, 
	whoAreYou(name) {
		return ("Oh right! " + name + " How could I forget...!")
	}
}

greeter.whoAreYou("Hannah")