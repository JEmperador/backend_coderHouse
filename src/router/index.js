const productsController = require("../controllers/product/controller.products");
const cartsController = require("../controllers/cart/controller.carts");
const viewsControllerAsinc = require("../controllers/views/controller.views");
const viewsControllerSinc = require("../controllers/views/controller.viewsSinc");

const router = (app) => {
  app.use("/api/products", productsController);
  app.use("/api/carts", cartsController);
  app.use("/", viewsControllerAsinc);
  app.use("/realTimeProducts", viewsControllerSinc);
};

module.exports = router;
