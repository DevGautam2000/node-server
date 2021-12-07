const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  student_name: String,
  reg_no: String,
  hobby: String,
});

const studentModel = mongoose.model("details", studentSchema);

module.exports = studentModel;
