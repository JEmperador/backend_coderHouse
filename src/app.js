const express = require("express");
const app = express();
const router = require("./router");
const handlebars = require("express-handlebars");
const { Server } = require("socket.io");

const PORT = process.env.PORT || 8080;

app.use("/static", express.static("./src/public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", handlebars.engine());
app.set("views", "./src/views");
app.set("view engine", "handlebars");

router(app);

const httpServer = app.listen(PORT, (req, res) => {
  console.log(`Server running at port: ${PORT}`);
});

global.io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log(`New user joined: ${socket.id}`);

  socket.on("client:newProduct", (data) => {
    console.log(data);
  });

  socket.on("disconnect", () => {
    console.log(`User ${socket.id}`);
  })
});
