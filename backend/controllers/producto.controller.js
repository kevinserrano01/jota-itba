const Producto = require("../models/producto.js");

// Crear un producto
exports.createProducto = async (req, res) => {
  const ultimo = await Producto.findOne().sort({ id: -1 });
  const nuevoId = ultimo ? ultimo.id + 1 : 1;
  try {
    const producto = await Producto.create({
    ...req.body,
    id: nuevoId
  });
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los productos
exports.getProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un producto por su ID
exports.getProductoById = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) return res.status(404).json({ error: "Producto no encontrado" });
    res.json(producto);
  } catch (error) {
    res.status(400).json({ error: "ID inválido" });
  }
};

// Actualizar (PUT)
exports.updateProducto = async (req, res) => {
  try {
    const producto = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!producto) return res.status(404).json({ error: "Producto no encontrado" });
    res.json(producto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// Eliminar
exports.deleteProducto = async (req, res) => {
  try {
    const producto = await Producto.findOneAndDelete( {id: req.params.id} );
    if (!producto) return res.status(404).json({ error: "Producto no encontrado" });
    res.json({ mensaje: "Producto eliminado" });
  } catch (error) {
    res.status(400).json({ error: "ID inválido" });
  }
};