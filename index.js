class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  toText() {
    console.log(`${this.name} ${this.price} in total. ${this.containedVAT()}`);
  }
  containedVAT() {
    // console.log(`${(this.price * 0.16).toFixed(2)} € VAT incl.`);
    return `${(this.price - this.price / 1.16).toFixed(2)} € VAT incl. (16%)`;
  }
}

const tracksuit = new Product("Adidas tracksuit", 150.0);
const shoes = new Product("Puma running shoes", 85.99);
const socks = new Product("Socks set", 4.99);

tracksuit.toText(); // Adidas tracksuit 150.00 € in total. 24.00 € VAT incl. (16%).
shoes.toText();
socks.toText();

tracksuit.containedVAT(); // 24.00 € VAT incl.

// 2 Cart
class Cart {
  constructor() {
    this.products = [];
  }
  addProduct(shoppedProduct) {
    if (shoppedProduct instanceof Product) {
      this.products.push(shoppedProduct);
      return `Total products: ${this.products.length}`;
    } else {
      return "This product is not available in the shop";
    }
  }
  getProductInfoCart() {
    this.products.forEach((product) => {
      product.toText();
    });
  }
  getTotalItemsPrice() {
    return this.products
      .reduceRight((acc, item) => (acc += item.price), 0)
      .toFixed(2);
  }
}
const e04Cart = new Cart();

// console.log(e04Cart);

console.log(e04Cart.addProduct(tracksuit));
console.log(e04Cart.addProduct(shoes));
console.log(e04Cart.addProduct(socks));
console.log(e04Cart.addProduct(1234));
console.log("--------------------");

console.log(e04Cart);
console.log("--------------------");
e04Cart.getProductInfoCart();
console.log(e04Cart.getTotalItemsPrice());
