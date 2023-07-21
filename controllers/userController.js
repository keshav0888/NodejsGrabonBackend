const asyncHandler = require("express-async-handler");
const User = require("../models/usermodel");
const connectDb = require("../config/dbConnection.js");
const userRegister = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandotory");
  }
  //const userAvailable = User.findOne(email);
  //  console.log(userAvailable);
  // if (userAvailable) {
  //   res.status(400);
  //   throw new Error("already register with this email");
  // }
  const register = User.create({
    username,
    email,
    password,
  });
  res.status(200).json("User data added succusscfully");
});

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandotory");
  }
  const query = { email: email };
  console.log(email);
  User.findOne(query)
    .exec()
    .then((userdata) => {
      if (password == userdata.password) {
        res.status(200).json("user login success");
      } else {
        res.status(200).json("user login failed");
      }
    })
    .catch((err) => {
      console.error(err);
    });
  res.status(200).json("user login failed");
});
const userCurrent = asyncHandler(async (req, res) => {
  res.status(200).json("user current");
});
module.exports = { userRegister, userLogin, userCurrent };



