const express = require("express");
const app = express();
const router = require("./router")
const handlebars = require("express-handlebars")

const port = 8080;

app.use("/static", express.static("./src/public"))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.engine("handlebars", handlebars.engine())
app.set("views", "./src/views")
app.set("view engine", "handlebars")

router(app)

app.listen(port, (req, res) => {
  console.log(`Server running at port: ${port}`);
});