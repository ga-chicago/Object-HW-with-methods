console.log("hello")

//#1.

const clicker = {
	clickCount: 0,
	click() {
		this.clickCount += 1;
		return this.clickCount;
		console.log("this.clickCount")
	}
}
// hello
// clicker
// {clickCount: 0, click: ƒ}
// clicker.clickCount
// 0
// clicker.click()
// 1

//////////////
//retype if it doesn't work 

/////////////////
const myInformation = {
		name: "Noemi",
 		age: 31,
 		fact: "I am not a quiter",
 		statement () {
 			return this.name + " " + this.fact + " " + this.age + " " + 10;

		},
		changeNameValue() {
			return this.age ++
			console.log(this.changeNameValue)
		}
	}

console.log(myInformation.statement());





////////////////## Greeter


const greeter = {
	hello (name) {
		return "Hello" + name;
	},
	goobye (name) {
		return "Farewell " + '' + name + '!';

	},
	whoAreYou (name) {
		return "Oh right ! " + '' + name + " how could I forget";
	}

}
greeter.whoAreYou('Mathew')
greeter.goobye('Lisa')

//////## Collecting Strings
const stringCollector = {
	collection: [str1, str2],
	collect(collection){
	},
	function reverseString(str){
    return str;
	},
	admireCollection ()	{
    return reverseString.admireCollection();
	}

	}

// function reverseString(str) {
//     return str;
// ///the correct way to do it is this one

const stringCollector = {

	collection:[],
	//method that will push given string into array backwards.
	collect(somestring){
		const arrayOfString = somestring.split('');
		const reversedString = arrayOfString.reverse('').join('');
		this.collection.push(reversedString);
		console.log(reversedString, 'this is something');
	},
	admireCollection(){
		//method to print collection array one word at a time
		for (let i = 0; i < this.collection.length; i ++){
			console.log(this.collection[i]);
		}
	}

}

stringCollector.collect("I've got a feeling that today is going to be a good day");
stringCollector.collection();



///////////////## ATM
const atm = {
	totalCash: '200',
	dispenseTwenties (intervalOfTwenty) {
		const toDispense = 20 * intervalOfTwenty;
		if(this.totalCash - toDispense >= 0){
			this.totalCash -= toDispense;
		}
		return toDispense ;
	} else {
		return null
	}
}


///////////////## Hungry Turtles
const Leonardo ={
	color: "Blue",
	weapon: "Katana",
},
	pizzaEaten = false,
	eatPizza () => {

	}if(pizzaEaten = true){
	return "Leonardo has already eaten pizza";	
	}else if(pizzaEaten = false ){
		return "Leonard is eating pizza"
	}

	
}

/////////////////////////## Calculator
const calculator = {
	output: null,
	multiply (num1, num2) {
		console.log(this.output= num1 * num1);

	},
	divide (num3 / num4) {
		return this.output = num3 / num4;
		console.log(this.output);
	}
}
calculator.divide
































