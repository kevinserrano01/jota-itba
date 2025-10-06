const express = require("express")
const createError = require("http-errors")
const fs = require("fs/promises"); // Usamos fs.promises porque vamos a trabajar con fn async solo
const path = require("path");
const productosRouter = express.Router()

//Ruta absoluta al archivo JSON
const filePath = path.join(__dirname, "./productos.json")

// Función auxiliar para leer el archivo JSON
const leerProductos = async () => {
  const data = await fs.readFile(filePath, "utf-8")
  return JSON.parse(data) 
}

// Función auxiliar para guardar el array actualizado de los productos en el archivo.json
const guardarProductos = async (productos) => {
  await fs.writeFile(filePath, JSON.stringify(productos, null, 2)) 
}

// Ruta GET /api/productos → devuelve todos los productos
productosRouter.get('/', async (req, res, next) => {
  leerProductos()
    .then(productos => res.json(productos))
    .catch(err => next(createError(500, "Error al leer los productos")))
})

// Ruta para ver un producto por ID
productosRouter.get('/:id', async (req, res, next) => {
  const id = parseInt(req.params.id);
  leerProductos()
    .then(productos => {
      const producto = productos.find(m => m.id === id);
      if (!producto) return next(createError(404, "El producto solicitado no existe"));
      res.json(producto);
    })
    .catch(err => next(createError(500, "Error al buscar el producto por ID")));
});

// Crear nuevo Producto
productosRouter.post('/', async (req, res, next) => {
  const { nombre, precio, descripcion } = req.body;
  if (!nombre || !precio) {
    return next(createError(400, "Faltan datos: nombre y precio son obligatorios"));
  }
  leerProductos()
    .then(productos => {
      const nuevoProducto = {
        id: productos.length ? productos[productos.length - 1].id + 1 : 1,
        nombre,
        precio,
        descripcion
      };
      productos.push(nuevoProducto);
      return guardarProductos(productos).then(() => res.status(201).json(nuevoProducto));
    })
    .catch(err => next(createError(500, "Error al guardar el nuevo producto")));
});

// Modificar un producto por su id
productosRouter.patch('/:id', async (req, res, next) => {
  const id = parseInt(req.params.id);
  const { nombre, precio, descripcion } = req.body;
  leerProductos()
    .then(productos => {
      const producto = productos.find(m => m.id === id);
      if (!producto) return next(createError(404, "El producto solicitado no existe"));

      if (nombre) producto.nombre = nombre;
      if (precio) producto.precio = precio;
      if (descripcion) producto.descripcion = descripcion;

      return guardarProductos(productos).then(() => res.json(producto));
    })
    .catch(err => next(createError(500, "Error al modificar el producto")));
});

// Eliminar un producto por su id
productosRouter.delete('/:id', async (req, res, next) => {
  const id = parseInt(req.params.id);
  leerProductos()
    .then(productos => {
      const index = productos.findIndex(m => m.id === id);
      if (index === -1) return next(createError(404, "El producto solicitado no existe"));

      const productoEliminado = productos.splice(index, 1)[0];
      return guardarProductos(productos).then(() => res.json(productoEliminado));
    })
    .catch(err => next(createError(500, "Error al eliminar el producto")));
});

module.exports = { productosRouter }