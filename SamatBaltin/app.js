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


























