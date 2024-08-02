class Product {
	constructor(
		public id: string,
		public price: number,
		public description: string,
	) {}

	display(): void {
		console.log(`
		id:${this.id},
		price: ${this.price},
		desc: ${this.description}
		`);
	}
}

class Book extends Product {
	constructor(
		public id: string,
		public price: number,
		public description: string,
		public author: string,
		public title: string,
	) {
		super(id, price, description);
	}

	display() {
		super.display();
		console.log(`
		author: ${this.author},
		title: ${this.title}
		`);
	}
}

class Electronic extends Product {
	constructor(
		public id: string,
		public price: number,
		public description: string,
		public brand: string,
		public model: string,
	) {
		super(id, price, description);
	}

	display(): void {
		super.display();
		console.log(`
		brand: ${this.brand},
		model: ${this.model}
		`);
	}
}

const book = new Book('1', 200, 'the best book', 'aldod', 'the dod');
book.display();

const electronic = new Electronic('2', 2000, 'the best book', 'HP', 'zedbook');
electronic.display();