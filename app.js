const express = require("express");
const db = require("./db");
require("dotenv").config();

const Book = require("./schemas/BookSchema");
const Student = require("./schemas/StudentSchema");
const app = express();
const port = process.env.PORT || 5000;
const bookRouter = require("./routes/bookRouter");
const studentRouter = require("./routes/studentRouter");
app.use(express.json());

app.post("/books", (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const result = db.useDb("books");

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

app.post("/students", (req, res) => {
  const student_name = req.body.student_name;
  const reg_no = req.body.reg_no;
  const hobby = req.body.hobby;

  const newStudent = new Student({
    student_name,
    reg_no,
    hobby,
  });
  newStudent
    .save()
    .then((student) => {
      console.log("student details saved");
      res.json({ message: "Student Added", data: student });
    })
    .catch((err) => res.json(err));
});

app.get("/", (req, res) => {
  res.send(
    "Server running at " +
      port +
      "goto /api/books to see the books added and goto /api/students to see the students added "
  );
});

app.use("/api", bookRouter, studentRouter);

app.listen(port, (req, res) => {
  console.log("Server running at " + port);
});
