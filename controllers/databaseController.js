const mongoose = require("mongoose");
const productSchema = require("../models/productModel");
const userSchema = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const connectToDatabase = asyncHandler(async () => {
  mongoose
    .connect(
      "mongodb+srv://wahab:03315046101@nodeapitesting.8brpasx.mongodb.net/Node-API?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("connected to mongodb");
    })
    .catch((error) => {
      console.log(error.message);
    });
});

const products_model = mongoose.model("product", productSchema);
const user_model = mongoose.model("user", userSchema);
module.exports = { connectToDatabase, products_model, user_model };
