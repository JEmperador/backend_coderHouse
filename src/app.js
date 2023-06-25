const express = require("express");
//const ProductManager = require("./managers/product/productManager");
const app = express();
//const productManager = new ProductManager();
const router = require("./router")

const port = 8080;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

router(app)

/* app.get("/", (req, res) => {
  res.json({
    message:
      "Welcome, to access the products go to the route localhost:8080/products",
  });
});

app.get("/products", async (req, res) => {
  const { limit } = req.query;
  try {
    const products = await productManager.getProducts();
    if (!limit || limit < 1) {
      res.status(200).json(products);
    } else {
      const limitedProducts = products.slice(0, limit);
      res.status(206).json(limitedProducts);
    }
  } catch (err) {
    res.status(400).json({ error400: "Bad Request" });;
  }
});

app.get("/products/:pid", async (req, res) => {
  let { pid } = req.params;

  try {
    const product = await productManager.getProductById(Number(pid));
    res.status(200).json(product);
  } catch (err) {
    res.status(404).json({ error404: "Not Found" });;
  }
}); */

app.listen(port, (req, res) => {
  console.log(`Server running at port: ${port}`);
});