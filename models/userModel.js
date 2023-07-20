const mongoose = require("mongoose");
const express = require("express");

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Please enter userName"],
    },
    email: {
      type: String,
      required: [true, "Please enter userName"],
      unique: [true, "Email already in use"],
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = userSchema;
