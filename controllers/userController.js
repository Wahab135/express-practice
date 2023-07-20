const asyncHandler = require("express-async-handler");
const databaseController = require("./databaseController");
const userModel = databaseController.user_model;
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { generateToken } = require("./jwtController");

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

  res.status(200).send({ message: "User added!" });
});

const login = asyncHandler(async (req, res) => {
  let { email, password } = req.body;
  if (!email || !password) {
    throw new Error("all fields are mandatory!");
  }
  const existingUser = await userModel.findOne({ email: email });
  console.log(password, existingUser.password);
  password = password.toString();
  const isPasswordMatch = await bcrypt.compare(password, existingUser.password);
  if (existingUser && isPasswordMatch) {
    const token = generateToken({
      userId: existingUser._id,
      email: existingUser.email,
    });
    res.status(200).send({ message: "Login Successful!", token: token });
  }
});

const show = asyncHandler(async (req, res) => {
  const users = await userModel.find({});
  res.send(users);
});
module.exports = { registerUser, login, show };
