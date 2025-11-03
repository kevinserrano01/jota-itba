const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema(
  {
    id: Number,
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    precio: {
      type: Number,
      required: true,
      min: 0
    },
    imagenURL: {
      type: String,
    },
    descripcion: {
      type: String,
      required: true
    },
    medidas: {
      type: String,
      default: ""
    },
    materiales: {
      type: String,
      default: ""
    },
    acabado: {
      type: String,
      default: ""
    },
    peso: {
      type: String,
    },
    stock: {
      type: Number,
      min: 0
    }
  },
  { timestamps: true }
);

const Producto = mongoose.model("Producto", productoSchema);
module.exports = Producto;