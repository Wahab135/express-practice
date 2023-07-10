const mongoose = require("mongoose");
const schema = require("../models/productModel");

const connectToDatabase = async () => {
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
};

const products_model = mongoose.model("product", schema);
module.exports = { connectToDatabase, products_model };
