const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ HelloWorld: "hello" });
});

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

connectToDatabase();

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

const schema2 = mongoose.Schema({});
//const products_model = mongoose.model("product",schema);

const products_model = mongoose.model("product", schema);

app.get("/fetch", async (req, res) => {
  const result = await products_model.find();
  res.send(result);
});

app.post("/enter", async (req, res) => {
  //const product = new products_model(req.body);
  const data = { name: "hello", price: 5000 };
  const product = await products_model.create(req.body);
  if (!req.body) {
    res.send("No data was entered");
    return;
  }
  res.send(req.body);
});

app.post("/enter2", async (req, res) => {
  try {
    const product = await products_model.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.post("/test", async (req, res) => {
  const data = req.body;
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
