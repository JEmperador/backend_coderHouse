const socket = io();

const formCreate = document.getElementById("realTimeFormCreate");
const formDelete = document.getElementById("realTimeFormDelete");

//Envia el front
formCreate.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("input[name=title]").value;
  const description = document.querySelector("input[name=description]").value;
  const price = Number(document.querySelector("input[name=price]").value);
  const thumbnail = document.querySelector("input[name=thumbnail]").value;
  const code = document.querySelector("input[name=code]").value;
  const stock = Number(document.querySelector("input[name=stock]").value);
  const category = document.querySelector("input[name=category]").value;

  const product = {
    title,
    description,
    price,
    thumbnail,
    code,
    stock,
    category,
  };

  socket.emit("client:newProduct", product);

  formCreate.reset();
});

//Envia el front
formDelete.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = Number(document.querySelector("input[name=id]").value);

  socket.emit("cliente:deleteProduct", id);

  formDelete.reset();
});

//Respuesta del back
socket.on("server:list", (data) => {
  const divList = document.getElementById("list");
  let cards = "";
  data.forEach((card) => {
    cards += `
      <div style="border-radius: 5px; background-color: white; width: 250px; display: flex; flex-direction: column; justify-content: center; align-items: center; margin: 5px">
          <div>
              ${card.title} - ${card.category}
          </div>
          <div>
              <img src=${card.thumbnail} alt="img - ${card.thumbnail}">
          </div>
          <p>${card.description}</p>
          <div>
              <p>Precio: ${card.price} - Stock: ${card.stock}</p>
          </div>
      </div>`;
  });

  divList.innerHTML = cards;
});
