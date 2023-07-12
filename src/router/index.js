const productsController = require("../controllers/product/controller.products");
const cartsController = require("../controllers/cart/controller.carts");
const viewsController = require("../controllers/views/controller.views")

const router = (app) => {
  app.use("/api/products", productsController);
  app.use("/api/carts", cartsController);
  app.use('/', viewsController)
};

module.exports = router;
