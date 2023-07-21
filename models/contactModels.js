const mongoose = require("mongoose");
const contactshema = mongoose.Schema({
  Patient_Name: {
    type: String,
    required: [true, "Please add the contact name"],
  },
  Phone_Number: {
    type: String,
    required: [true, "Please add the contact email"],
  },
  Doctor_Name: {
    type: String,
    required: [true, "Please add the contact phone number"],
  },
  gender: {
    type: String,
    required: [true, "Please add the contact phone number"],
  },
  date_input: {
    type: String,
    required: [true, "Please add the contact phone number"],
  },
  status: {
    type: String,
    required: [true, "Please add the contact phone number"],
  },
  Patient_Age: {
    type: String,
    required: [true, "Please add the contact phone number"],
  },
  time_input: {
    type: String,
    required: [true, "Please add the contact phone number"],
  },
});

module.exports = mongoose.model("Contact", contactshema);
