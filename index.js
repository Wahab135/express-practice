const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send({"Hello World!":"hello"});
})

mongoose.connect('mongodb+srv://wahab:03315046101@nodeapitesting.8brpasx.mongodb.net/Node-API?retryWrites=true&w=majority'
).then(console.log("connection successful")).catch("Error connecting to database");

const schema = new mongoose.Schema(
  {
    name: String,
    price: String
  },

  {
    collection:"products"
  }
)

const products = mongoose.model('products', schema);


app.get('/products',async (req,res)=>
{
  const result = await products.find();
  res.send(result);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


