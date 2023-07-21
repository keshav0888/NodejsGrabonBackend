const express = require("express");
const router = express.Router();
const {
  userRegister,
  userLogin,
  userCurrent,
} = require("../controllers/userController");
router.route("/register").get(userRegister);
router.route("/login").post(userLogin);
router.route("/current").get(userCurrent);
module.exports = router;
