const databaseController = require("./databaseController");
const products_model = databaseController.products_model;

const defaultRoute = async (req, res) => {
  res.send("Hello world, app is running!!")
};

const enterRoute = async (req, res) => {
  try {
    const product = await products_model.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const testRoute = async (req, res) => {
  const data = req.body;
  res.json(data);
};

const fetchRoute = async (req, res) => {
  const result = await products_model.find();
  res.send(result);
};

module.exports = { defaultRoute, enterRoute, testRoute, fetchRoute };
