const socket = io();

document.getElementById("realTimeFormCreate").onsubmit = (e) => {
  e.preventDefault();

  const title = document.querySelector("input[name=title]").value
  const description = document.querySelector("input[name=description]").value
  const price = Number(document.querySelector("input[name=price]").value)
  const thumbnail = document.querySelector("input[name=thumbnail]").value
  const code = document.querySelector("input[name=code]").value
  const stock = Number(document.querySelector("input[name=stock]").value)
  const category = document.querySelector("input[name=category]").value

  const product = {title, description, price, thumbnail, code, stock, category}

  socket.emit("client:newProduct", product)
};

