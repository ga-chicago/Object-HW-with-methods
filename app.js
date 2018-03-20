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
	statement () {
		return {
			name: "Noemi",
 			age: 31,
 			fact: "I am not a quiter."

		}
	}
}
myInformation.statement()





////////////////## Greeter


const greeter = {
	hello (name) {
		return "Hello" + name;
	},
	goobye (name) {
		return "Farewell" + '' + name + '!';

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
	collect (this.collection) {
	},
	function reverseString(str) {
    return str;
	},
	admireCollection ()	{
    return reverseString.admireCollection();
	}

	}
}
// function reverseString(str) {
//     return str;
// }



// const reverseWordOrder = (str) => {
//   const splitString = str.split(" ");
//   const reverseArray = splitString.reverse();
//   return joinArray = reverseArray.join(" ");

// }
// console.log(reverseWordOrder("Ishmael me call"));
// // console.log(reverseWordOrder("Ishmael me Call"));
// console.log(reverseWordOrder("I use Lâncome on my comb"));
// // console.log(reverseWordOrder("I use Lâncome on my comb"));
// // > => "Call me Ishmael"
// > => "comb my on Lâncome use I"

///////////////## ATM
const atm = {
	totalCash: '200',
	dispenseTwenties (num) {
		return totalCash / dispenseTwenties
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
	output: "",
	multiply (num1 * num2) {
		console.log(multiply());

	},
	divide (num3 / num4) {

	}
}

































