const mongoose = require("mongoose");

// Definisi Schema
const todoSchema = new mongoose.Schema({
  title: {
    type: String, // Jenis data adalah String
    required: true, // Field ini wajib diisi
  },
  completed: {
    type: Boolean, // Jenis data adalah Boolean (true/false)
    default: false, // Nilai default jika tidak diisi
  },
  createdAt: {
    type: Date, // Jenis data adalah Date
    default: Date.now, // Nilai default adalah waktu sekarang
  },
});

// Membuat Model
const Todo = mongoose.models.Todo || mongoose.model("Todo", todoSchema); // Membuat model bernama 'Todo'

// Mengeksport Model
module.exports = Todo;


//benda ini schema akan buat model dalam bentuk objek dan ia akan masuk ke dalam mongoDB