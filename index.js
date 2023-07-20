const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const productRouter = require("./routes/productRoutes");
const databaseController = require("./controllers/databaseController");
const app = express();
const port = 3005;
const userRouter = require("./routes/userRoutes");
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/", productRouter);

databaseController.connectToDatabase();
products_model = databaseController.products_model;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
