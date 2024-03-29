const mongoose = require("mongoose");
require("dotenv").config();
const { PASSWORD, DB, DBUSER, DB_BOOKS } = process.env;
const url = `mongodb+srv://${DBUSER}:${PASSWORD}@cluster0.6j0bx.mongodb.net/${DB}`;
const urlBooks = `mongodb+srv://${DBUSER}:${PASSWORD}@cluster0.6j0bx.mongodb.net/${DB_BOOKS}`;
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
