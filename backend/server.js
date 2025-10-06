const express = require("express");
const cors = require("cors");
const { productosRouter } = require("./index");

const app = express();
app.use(express.json());

app.use(cors({ origin: ["http://localhost:3000", "http://localhost:5501"] }));

app.use((req, res, next) => {
  console.log(`[LOG] ${req.method} ${req.url}`);
  next();
});

app.use("/api/productos", productosRouter);

app.use((req, res, next) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

app.use((err, req, res, next) => {
  console.error(`[ERROR] ${err.message}`);
  res.status(err.status || 500).json({ error: err.message || "Error interno del servidor" });
  });

app.listen(3001, () => {
  console.log("Servidor backend escuchando en http://localhost:3001");
});
