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

const stringCollector = {
	collection: [],
	collect(str){
		let rev = str.split("");
		console.log(rev);
		rev.reverse();
		console.log(rev);
		let joinStr = rev.join("")
		console.log(joinStr);
		// collection = joinStr;
		// admireCollection() {
  //           for(row of stringCollector.collection){
  //               console.log(row) 
  //               for (element of row){
  //                   console.log(element)
        //         }
        //     }
        // }
	}
}



const atm = {
	totalCash: 200,
	dispenseTwenties(num){
		let toDisp = 20 * num;
		if (this.totalCash - toDisp >= 0) {
			return this.totalCash -= toDisp;
		} else {
			return null
		}
	}
}



const leonardo = {
	name: "Leonardo",
	color: "Blue",
	weapon: "Katana",
	pizzaEaten: false,
	eatPizza(pizza){
		if(pizza === true){
			this.pizzaEaten = false;
			return "Leonardo has already eaten pizza"
		} else {
			this.pizzaEaten = true;
			return "Leonardo is eating pizza"
		}
	}
}



const calculator = {
	output1: 0,
	output2: 0,
	output3: 0,
	output4: 0,
	multiply(a, b){
		return this.output1 = a * b;
	},
	divide(a,b){
		return this.output2 = a / b;
	},
	add(a, b){
		return this.output3 = a + b;
	},
	substract(a, b){
		return this.output4 = a - b;
	}
}

calculator.multiply(10, 2);
calculator.add(-2, 8);
calculator.divide(2, 2);
calculator.substract(10, 2);











