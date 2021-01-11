class ShoppingCart {

  constructor() {
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }

  total() {
    return this.items.map(item => {
      return item.quantity;
    }).reduce((prev, current) => {
      return prev + current;
    }, 0);
  }

  static call() {
    console.log("Static");
  }

  static self() {
    return this;
  }
}

class GeneralShape {

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get() {
    return this.width * this.height;
  }
}

class RandomShape extends GeneralShape {
  constructor(width, height) {
    super(width, height);
  }
}

const cart = new ShoppingCart();
cart.add({name: "Bread", quantity: 3});
console.log(cart.total());
ShoppingCart.call();

const shape = new RandomShape(10, 20);
console.log(shape.get());