const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const router = require("./routes/productRoutes");
const databaseController = require("./controllers/databaseController");
const app = express();
const port = 3005;

app.use(cors());
app.use(express.json());

app.use("/", router);

databaseController.connectToDatabase();
products_model = databaseController.products_model;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
