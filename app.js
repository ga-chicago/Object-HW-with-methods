// 🐘 Remember to test each of your answers!

// Clicker
// Make an object called clicker, which has a clickCount property, and a click method.
// Have the click method increment the clickCount by 1 each time it is called.

const clicker = {
	clickCount: 0,
		clickMethod(click) {
			if(click === "yes")
			this.clickCount += 1;
			return this.clickCount

		}
		
}

clicker.clickMethod("yes");

---> 1	

