# Atlas Tech

![heroImg](https://github.com/JEmperador/backend_coderHouse/assets/88438404/76e3c8df-9130-4cc6-91d8-727ee6943b5d)

Este proyecto es una aplicacion para carritos de compras en desarrollo.

# Descripcion

En esta aplicación podrá cargar productos usando endpoints como también carritos de compras con sus respectivos endpoints

# Manejadores y Clases

## Products
- `addProduct(title, description, price, thumbnail, code, stock, category)`: Agrega un nuevo producto.
- `getProducts()`: Obtiene todos los productos.
- `getProductById(id)`: Obtiene un producto por su ID.
- `updateProduct(id, propsProduct)`: Actualiza un producto por su ID.
- `deleteProduct(id)`: Elimina un producto por su ID.


## Carts
- `createCart()`: Crea un nuevo carrito y lo agrega a la lista de carritos existentes.
- `getCarts()`: Obtiene todos los carritos existentes.
- `getCartById(idCart)`: Obtiene un carrito por su ID.
- `updateCart(idCart, idProduct, quantity)`: Actualiza un carrito añadiendo un producto con una cantidad determinada.
- `deleteCart(idCart)`: Elimina un carrito por su ID.

# Endpoints

## Products
- POST: localhost:8080/api/products
    - Con los siguientes campos obligatorios: title(string), description(string), price(number), code(string), stock(number), category(string)
    - El siguiente no es obligatorio: thumbnail(string)

- GET: localhost:8080/api/products
    - Listara todos los productos cargados.

- GET: localhost:8080/api/products/{`productId`}
    - Listara el producto, donde el parámetro `productId` es el id del producto.

- PUT: localhost:8080/api/products/{`productId`}
    - Permite editar las propiedades del producto usando como referencia el `productId`.
    - Todos los campos son editables menos: id y code.

- DELETE: localhost:8080/api/products/{`productId`}
    - Permite eliminar un producto usando como referencia el `productId`.

## Carts
- POST: localhost:8080/api/carts/
    - Crea un nuevo carrito con su propio id.

- POST: localhost:8080/api/carts/{`cartId`}/product/{`productId`}
    - Agrega al carrito usando como referencia el {`cartId`} el producto con el {`productId`}
    - En el body debe cargarse el campo quantity(number) con la cantidad deseada, si no especifica cantidad por defecto sera 1.

- GET: localhost:8080/api/carts
    - Listara todos los carritos cargados.

- GET: localhost:8080/api/carts/{`cartId`}
    - Listara el carrito, donde el parámetro `cartId` es el id del carrito.

- DELETE: localhost:8080/api/carts/{`cartId`}
    - Permite eliminar un carrito usando como referencia el `cartId`.

# Configuración del Servidor
Para configurar el servidor, siga los siguientes pasos:

1. Clone este repositorio.
2. Ejecute el siguiente comando para instalar las dependencias:
```git
    npm install
```
3. Inicie el servidor usando el siguiente comando
    - Si desea levantar el servidor con nodemon:
    ```git
        npm run dev
    ```
    - Si desea levantar el servidor con node:
    ```git
        npm run start
    ```
5. El servidor estará disponible en `http://localhost:8080`.

# Tecnologías utilizadas

- JavaScript
- Node.js
- Express.js
- Nodemon
