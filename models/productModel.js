const mongoose = require("mongoose")

const schema = mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "Please enter product name"],
      },
      price: {
        type: Number,
        required: [true, "Please enter price"],
      },
    },
    {
      timestamps: true,
    }
  );
  module.exports = schema
