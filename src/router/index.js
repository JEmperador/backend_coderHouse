const productsController = require("../controllers/product/controller.products")

const router = (app) => {
    app.use("/api/products", productsController)
}

module.exports = router;