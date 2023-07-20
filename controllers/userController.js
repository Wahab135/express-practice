const asyncHandler = require("express-async-handler");
const databaseController = require("./databaseController");
const userModel = databaseController.user_model;
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const registerUser = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;
  if (!userName || !email || !password) {
    throw new Error("all fields are mandatory!");
  }
  const existingUser = await userModel.findOne({ email: email });
  if (existingUser) {
    res.status(500).send("User already exists!");
    return;
  }
  const hashedPassword = await bcrypt.hash(password.toString(), 10);
  const user = await userModel.create({
    userName: userName,
    password: hashedPassword,
    email: email,
  });
  res.send("added user!");
});

const login = asyncHandler(async (req, res) => {});

const show = asyncHandler(async (req, res) => {
  const users = await userModel.find({});
  res.send(users);
});
module.exports = { registerUser, login, show };
