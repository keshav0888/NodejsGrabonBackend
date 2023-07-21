const express = require("express");
const router = express.Router();
const {
  getData,
  createData,
  deleteData,
  updateData,
} = require("../controllers/dataController");
router.route("/").get(getData);
router.route("/").post(createData);
router.route("/").put(updateData);
router.route("/").delete(deleteData);
module.exports = router;
