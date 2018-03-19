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





////////////////


const greeter = {
	hello (name) {
		return "Hello" + name;
	}
}








