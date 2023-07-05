const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send({"Hello World!":"hello"});
})

mongoose.connect('mongodb+srv://wahab:03315046101@nodeapitesting.8brpasx.mongodb.net/Node-API?retryWrites=true&w=majority'
).then(console.log("connection successful")).catch("Error connecting to database");

const schema = new mongoose.Schema;

const products_model = mongoose.model('products', schema);


app.get('/fetch',async (req,res)=>
{
  const result = await products_model.find();
  res.send(result);
})

app.post('/enter', async(req,res)=>
{
  const product = new products_model({
    "name": "bike",
    "price": 4500
  })
  await product.save();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


