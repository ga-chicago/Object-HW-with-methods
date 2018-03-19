//Clicker

const clicker = {
	clickCount: 0,
	click() {
		this.clickCount++;
	}
}

clicker.click();
console.log(clicker.clickCount);

