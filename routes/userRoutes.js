const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const userModel = require("../models/userModel");
const databaseController = require("../controllers/databaseController");
const user_Model = databaseController.user_model;
router.get("/", (req, res) => {
  res.send("get request tested.");
});

router.get("/show", userController.show);

router.post("/login", userController.login);

router.post("/test", (req, res) => {
  res.send(req.body);
});

router.post("/register", userController.registerUser);
module.exports = router;
