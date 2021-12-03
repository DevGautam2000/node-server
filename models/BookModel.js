const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: String,
  author: String,
});

const bookModel = mongoose.model("detail", bookSchema);

module.exports = bookModel;
