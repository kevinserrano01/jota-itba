const express = require("express");
const cors = require("cors");
const { productosRouter } = require("./index");

const app = express();

// Configuración de CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Time-Zone-Offset');
  
  // Responder a preflight requests
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(express.json());

<<<<<<< HEAD
app.use(cors({ origin: "http://localhost:3000" }));
=======
app.use(cors({ origin: "http://localhost:5173" }));
>>>>>>> 2ce65a7d5d9ae92ffb58b81496087628a6fbf6d4

app.use((req, res, next) => {
  console.log(`[LOG] ${req.method} ${req.url}`);
  next();
});

app.use("/api/productos", productosRouter);

app.use((err, req, res, next) => {
  res.status(404).json({ error: "Ruta no encontrada" });
  });

app.use((err, req, res, next) => {
  console.error(`[ERROR] ${err.message}`);
  res.status(err.status || 500).json({ error: err.message || "Error interno del servidor" });
  });

app.listen(3001, () => {
  console.log("Servidor backend escuchando en http://localhost:3001");
});
