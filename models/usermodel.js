const mongoose = require("mongoose");
const userShema = mongoose.Schema({
  user_id: {
    type: String,
    required: [true, "Please add the username"],
  },
  email: {
    type: String,
    required: [true, "Please add the email"],
  },
  password: {
    type: String,
    required: [true, "Please add the password"],
  },
});

module.exports = mongoose.model("User", userShema);
