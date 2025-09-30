const express = require("express");
const { productosRouter } = require("./index");

const app = express();
app.use(express.json());
app.use("/api/productos", productosRouter);

app.listen(3001, () => {
  console.log("Servidor backend escuchando en http://localhost:3001");
});
