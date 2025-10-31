const express = require("express");
const cors = require("cors");
const productosRouter = require("./routes/product.Routes.js");
const { connectDB } = require("./database/config");

configDotenv();

const app = express();

// Conexión a la DB
connectDB();

// Middlewares globales
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[LOG] ${req.method} ${req.url}`);
  next();
});

// Rutas
app.use("/api/productos", productosRouter);

app.use((req, res, next) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

app.use((err, req, res, next) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(`[ERROR] ${err.message}`);
  res.status(err.status || 500).json({ error: err.message || "Error interno del servidor" });
});

// Inicializar servidor
app.listen(3001, () => {
  console.log("Servidor backend escuchando en http://localhost:3001");
});
