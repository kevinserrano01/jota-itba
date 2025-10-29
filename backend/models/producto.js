import { Schema, model } from 'mongoose';

// Esquema de producto
const productoSchema = new Schema({
  nombre: String,
  precio: Number,
  imagen: String,
  descripcion: String,
  medidas: String,
  materiales: String,
  acabado: String,
  peso: Number
}, { timestamps: true });
export default model('Producto', productoSchema);