const express = require("express");
const router = express.Router();
const Book = require("../models/BookModel");

router.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.send(books);
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

module.exports = router;
