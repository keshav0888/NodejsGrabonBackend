const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModels");
const getData = asyncHandler(async (req, res) => {
  const DataShema = await Contact.find();
  if (!DataShema) {
    res.status(404);
    throw new Error("Data not found");
  }
  res.status(200).json(DataShema);
});

const createData = asyncHandler(async (req, res) => {
  const {
    Patient_Name,
    Phone_Number,
    Doctor_Name,
    gender,
    date_input,
    status,
    Patient_Age,
    time_input,
  } = req.body;
  if (
    !Patient_Name ||
    !Phone_Number ||
    !Doctor_Name ||
    !gender ||
    !date_input ||
    !status ||
    !Patient_Age ||
    !time_input
  ) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const Data = Contact.create({
    Patient_Name,
    Phone_Number,
    Doctor_Name,
    gender,
    date_input,
    status,
    Patient_Age,
    time_input,
  });
  res.status(200).send("data Inserted");
});

const updateData = asyncHandler(async (req, res) => {
  const {_id } = req.body;
  console.log(req.body)
  console.log(_id)
  const updateData = await Contact.findByIdAndUpdate(_id, req.body, {
    new: true,
  });
  res.status(200).send("Data Updated");
});

const deleteData = asyncHandler(async (req, res) => {
  const { _id } = req.body;
  const deleteData = await Contact.findByIdAndDelete(_id);
  res.status(200).send("Data Deleted");
});

module.exports = { getData, createData, updateData, deleteData };
