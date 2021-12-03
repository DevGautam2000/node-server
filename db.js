const mongoose = require("mongoose");
require("dotenv").config();
const { PASSWORD, DB } = process.env;
const pass = PASSWORD;
const database = DB;
const url = `mongodb+srv://${database}:${pass}@cluster0.6j0bx.mongodb.net/books`;
const db = mongoose.connection;

mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

db.on("connected", () => {
  console.log("db connection success");
});
db.on("error", () => {
  console.log("db connection failure");
});

module.exports = db;
