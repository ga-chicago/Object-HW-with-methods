const clicker = {
	clickCount: 0,
	click(){
		this.clickCount += 1;
	}
}

const myInformation = {
	name: "Samat",
	age: 28,
	facts: ['male', 'student'],
	statement(){
		console.log(this.name);
		console.log(this.facts);
		console.log(this.age += 10);
	},
	ageIncr(){
		this.age += 1;
		return this.age
	},
	nameChange(name){
		this.name = name;
		return this.name
	}
}
myInformation.nameChange('Rumpelstiltskin');


const greeter = {
	hello(name){
		return "Oh hello there, " + name;
	},
	goodbye(name){
		return "Arrivederci, " + name;
	},
	whoAreYou(name){
		return "Oh right! " + name + " how could i forget...";
	}
}