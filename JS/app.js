//Clicker


const clicker = {
	clickCount:0,

	click(){
		return this.clickCount += 1;
	}
}


clicker.click();
clicker.click();
clicker.click();


console.log(clicker.click());



//It's All About Me

const myInformation = {

	name: 'Amjad',
	age:21,
	type: 'human',
	statement (){
		return this.name +" is a " + this.type + " and will be " + (this.age + 10) + " in ten years." 
	},
	incrementAge(){
		return this.age += 1;
	},
	changeName(newName){
		this.name = newName;
		return this.name;
	}

}

console.log(myInformation.statement());



console.log(myInformation.incrementAge());

console.log(myInformation.changeName('Rumpelstiltskin'));


// Greeter


const greeter = {
	hello(name){
		return 'Good morning '+ name;
	},
	goodbye(name){
		return 'See you later, ' + name;
	},
	whoAreYou(name){
		return 'Oh right! ' + name + " how could i forget...!";
	}

}
console.log(greeter.hello('Joe'));
console.log(greeter.goodbye('Josh'));
console.log(greeter.whoAreYou('John'));








