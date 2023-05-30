class ProductManager {
  constructor() {
    this.products = [];
  }

  _getNextId = () => {
    const count = this.products.length;
    const nextId = count > 0 ? this.products[count - 1].id + 1 : 1;

    return nextId;
  };

  addProduct = (title, description, price, thumbnail, code, stock) => {
    const product = {
      id: this._getNextId(),
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    const [productExists] = this.products.filter((product) => product.code === code);

    if (productExists) {
      return console.log(`The product with the code: ${product.code} already exists\n`);
    } else {
      this.products.push(product);
    }

    return console.log(product);
  };

  getProducts = () => {
    return console.log(this.products);
  };

  getProductById = (id) => {
    const [productExists] = this.products.filter((product) => product.id === id);

    if (!productExists) {
      return console.log(`Not found\n`);
    }

    return console.log(productExists);
  }
}
