// CLICKER
//1. Make an object called clicker, which has a clickCount property, and a click method.
//2. Have the click method increment the clickCount by 1 each time it is called.

const clicker = {
	clickCount: 0,
	click () {
		return this.clickCount += 1
	}
}