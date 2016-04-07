class Animal {
	constructor(name) {
		this.name = name;
	}

	move(meters) {
		console.log(`${this.name} moved ${meters}m.`);
	}
}

class Bear extends Animal {
	constructor() {
		super('Bear');
	}

	move() {
		console.log("Dancing...");
		super.move(2);
	}
}

class Monkey extends Animal {
	constructor() {
		super('Monkey');
	}

	move() {
		console.log("Swinging...");
		super.move(5);
	}
}

var monkey = new Monkey();
var bear = new Bear();

monkey.move();
bear.move();
