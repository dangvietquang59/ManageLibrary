const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  Title: String,
  Author: String,
  Genre: String,
  Summary: String,
  Quantity: Number,
  Status: String,
  Image: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
