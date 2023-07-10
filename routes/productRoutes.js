const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController")

router.get("/", productController.defaultRoute);

router.get("/fetch", productController.fetchRoute);

router.post("/enter", productController.enterRoute);

router.post("/test", productController.testRoute);

module.exports = router;
