const express = require("express");
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

app.use((req, res, next) => {
  console.log(`[LOG] ${req.method} ${req.url}`);
  next();
});

app.use("/api/productos", productosRouter);

app.use((err, req, res, next) => {
  console.error(`[ERROR] ${err.mesage}`);
  res.status(err.status || 500).json({ error: err.message || "Error interno del servidor" });
  });

app.listen(3001, () => {
  console.log("Servidor backend escuchando en http://localhost:3001");
});
