// Clicker
// Make an object called clicker, which has a clickCount property, and a click method.
// Have the click method increment the clickCount by 1 each time it is called.
// 🔴 The commit message should read: 
// "Commit 1 - Clicker done"


const clicker = {
	clickCount: '',
	click() {
		this.clickCount ++;
		return this.clickCount;
	}, 
}

console.log(clicker.click());