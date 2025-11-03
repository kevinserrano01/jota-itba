const express = require("express");
const cors = require("cors");
const productosRouter = require("./routes/product.Routes.js");
const { connectDB } = require("./database/config");
const Producto = require("./models/producto");
const productosData = require("./productos.json");

require("dotenv").config();

const app = express();

// Conexión a la DB
connectDB();

// === FUNCIÓN DE SEED CON OPCION DE RESETEO ===
const seedProductos = async () => {
  try {
    const RESET_DB = process.env.RESET_DB === "true";

    if (RESET_DB) {
      console.log("Modo RESET_DB activado: Borrando todos los productos...");
      await Producto.deleteMany({});
      console.log("Colección 'productos' eliminada.");
    } else {
      const count = await Producto.countDocuments();
      if (count > 0) {
        console.log(`Ya hay ${count} productos en la base de datos. Saltando seed.`);
        return;
      }
    }

    console.log("Insertando productos iniciales...");
    const resultados = await Producto.insertMany(
      productosData.map(prod => ({
        ...prod,
        stock: prod.stock ?? 10
      }))
    );

    console.log(`${resultados.length} productos insertados correctamente.`);
  } catch (error) {
    console.error("Error en el seed:", error.message);
  }
};

// Middlewares
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[LOG] ${req.method} ${req.url}`);
  next();
});

// Rutas
app.use("/api/productos", productosRouter);

// Ruta no encontrada
app.use((req, res, next) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(`[ERROR] ${err.message}`);
  res.status(err.status || 500).json({ error: err.message || "Error interno del servidor" });
});

// Iniciar servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, async () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);

  // Ejecutar seed (con o sin reset)
  await seedProductos();
});