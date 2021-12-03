const express = require("express");
require("./db");
require("dotenv").config();

const Book = require("./models/BookModel");
const app = express();
const port = process.env.PORT || 5000;
const bookRouter = require("./routes/bookRouter");
app.use(express.json());

app.post("/", (req, res) => {
  const title = req.body.title;
  const author = req.body.author;

  const newBook = new Book({
    title,
    author,
  });
  newBook
    .save()
    .then((book) => {
      console.log("book saved");
      res.json({ message: "Book Added", data: book });
    })
    .catch((err) => res.json(err));
});

app.get("/", (req, res) => {
  res.send(
    "Server running at " + port + "\ngoto to /api/books to see the books added"
  );
});

app.use("/api", bookRouter);

app.listen(port, (req, res) => {
  console.log("Server running at " + port);
});
