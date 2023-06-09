const fs = require("fs");

class ProductManager {
  static #path = "../mock/products.json";
  constructor() {
    this.products = [];
    ProductManager.#path;
  }

  _getNextId = () => {
    const data = fs.readFileSync(ProductManager.#path);
    const products = JSON.parse(data);

    const count = products.length;
    const nextId = count > 0 ? products[count - 1].id + 1 : 1;

    return nextId;
  };

  addProduct = async (title, description, price, thumbnail, code, stock) => {
    const products = await this.getProducts();

    try {
      const product = {
        id: this._getNextId(),
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };

      if (products.find((product) => product.code === code)) {
        return console.log(
          `The product with code: ${product.code} already exists\n`
        );
      } else {
        products.push(product);
        await fs.promises.writeFile(
          ProductManager.#path,
          JSON.stringify(products, null, "\t")
        );

        return console.log(products);
      }
    } catch (err) {
      return console.log(err);
    }
  };

  getProducts = async () => {
    try {
      const data = await fs.promises.readFile(ProductManager.#path, "utf-8");
      const products = JSON.parse(data);
      return products;
    } catch (err) {
      console.log("File not found");
      return [];
    }
  };

  getProductById = async (id) => {
    const products = await this.getProducts();
    try {
      const itemId = Object.values(products).find(
        (product) => product.id === id
      );

      if (itemId === undefined) {
        return console.error("Product does not exist");
      } else {
        return console.log(itemId);
      }
    } catch (err) {
      return console.error(err);
    }
  };

  updateProduct = async (id, propsProduct) => {
    const products = await this.getProducts();
    try {
      const index = await products.findIndex((product) => product.id === id);

      if (index === -1) {
        return console.log("Product does not exist");
      } else {
        if (
          propsProduct.hasOwnProperty("id") ||
          propsProduct.hasOwnProperty("code")
        ) {
          return console.log("Cannot update 'id' or 'code' property");
        }

        Object.assign(products[index], propsProduct);
        await fs.promises.writeFile(
          ProductManager.#path,
          JSON.stringify(products),
          "utf-8"
        );
        const updatedProduct = products[index];

        return console.log(updatedProduct);
      }
    } catch (err) {
      return console.error(err);
    }
  };

  deleteProduct = async (id) => {
    let products = await this.getProducts();
    try {
      const product = Object.values(products).find((e) => e.id === id);

      if (product) {
        products = products.filter((item) => item.id !== id);
        await fs.promises.writeFile(
          ProductManager.#path,
          JSON.stringify(products),
          "utf-8"
        );

        return console.log("Product removed");
      } else {
        return console.error("Product does not exist");
      }
    } catch (err) {
      return console.error(err);
    }
  };
}

const manager = new ProductManager();

/* const consulta = async () => {
  console.log("----------Consulta de productos----------");
  const queryProducts = await manager.getProducts();
  console.log(queryProducts);
};
consulta(); */

/* const carga = async () => {
  console.log("----------Carga de producto----------");
  const product1 = await manager.addProduct("Producto prueba2", "Este es un producto prueba2", 2002, "Sin imagen2", "abc1232", 252);
};
carga(); */

/* const consultaPorId = async () => {
  console.log("----------Consulta de producto por id----------");
  const idProduct = await manager.getProductById(1);
};
consultaPorId(); */

/* const actualizar = async () => {
  console.log("----------Actualizacion de producto----------");
  const productUpdate1 = await manager.updateProduct(1, { title: "producto prueba modificado", description: "Lorem Ipsum modificado", stock: 50 });
};
actualizar(); */

/* const borrar = async () => {
  console.log("----------Borra producto por id----------");
  const idDelete = await manager.deleteProduct(1);
};
borrar(); */

/* const main = async () => {
  console.log("consulta");

  console.log(await manager.getProducts());

  console.log("carga");

  await manager.addProduct(
    "Producto prueba",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc123",
    25
  );

  await manager.addProduct(
    "Producto prueba2",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc124",
    25
  );

  await manager.addProduct(
    "Producto prueba3",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc125",
    25
  );

  console.log("consulta por ID");

  await manager.getProductById(2);

  console.log("update");

  const dato = {
    id: 5, //Este campo deberia generar un error porque no debe cargarse
    title: 'Producto prueba0',
    price: 2000,
    code: 'asd123', //Este campo deberia generar un error porque no debe cargarse
    thumbnail: 'Sin imagen0',
    stock: 25
  }

  await manager.updateProduct(3, dato);

  console.log("delete");

  await manager.deleteProduct(3);

  console.log("carga");

  await manager.addProduct(
    "Producto prueba4",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc123",
    25
  );

  console.log("consulta");

  console.log(await manager.getProducts());
};

main(); */
