function Phone(brand, price, color, screen) {
    this.brand = brand;
    this.price = price;
	this.color = color;
	this.screen = screen;
}
Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " the price is " + this.price + " and the screen " + this.screen + " inch.");
}
var galaxyS6 = new Phone("Samsung", 1400, "blue", 5.1);
var iPhone6S = new Phone("Apple", 2250, "silver", 4.7);
var one = new Phone("OnePlus", 1000, "black", 5.5);

galaxyS6.printInfo();
iPhone6S.printInfo();
one.printInfo();
