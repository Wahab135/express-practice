const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/productRoutes");
const databaseController = require("./controllers/databaseController");
const app = express();
const port = 3005;

app.use(express.json());

app.use("/", router);

databaseController.connectToDatabase();
products_model = databaseController.products_model;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
