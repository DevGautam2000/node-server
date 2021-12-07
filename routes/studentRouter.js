const express = require("express");
const router = express.Router();
const Student = require("../schemas/StudentSchema");

router.get("/students", (req, res) => {
  Student.find()
    .then((students) => {
      res.send(students);
    })
    .catch((err) => res.status(400).json({ message: err }));
});

module.exports = router;
