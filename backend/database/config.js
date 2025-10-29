// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/jota-store';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB conectado ✅');
  } catch (err) {
    console.error('Error de conexión ❌', err);
    process.exit(1);
  }
};

module.exports = { connectDB };