const ProductManager = require("../../managers/product/productManager");
const productManager = new ProductManager();
const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  //const products = await productManager.getProducts();
  //res.render("realTimeProducts", {products: products});
  res.render("realTimeProducts", {});
});

module.exports = router;
