const express = require("express");
const router = express.Router();
const Book = require("../schemas/BookSchema");

router.get("/books", (req, res) => {
  Book.find()
    .then((books) => {
      res.send(books);
    })
    .catch((err) => res.status(400).json({ message: err }));
});

module.exports = router;
