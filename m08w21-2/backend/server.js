const express = require('express');
const morgan = require('morgan');
const products = require('./data/products');

const app = express();
const port = 3001;

// middleware
app.use(morgan('dev')); // logger
app.use(express.json()); // bodies will be JSON encoded
app.use(express.urlencoded({ extended: false })); 
// app.use(express.static('../frontend/build'));
app.use(express.static('public'));

// GET /products
app.get('/api/products', (req, res) => {
  // res.json(products);
  res.json(Object.values(products)); // send back an array of objects
});

// POST /products
app.post('/api/products', (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const price = Number(req.body.price);  // '7.99' 7.99
  const id = Math.random().toString(36).substring(2, 6); // a random 4 character string

  console.log(req.body);

  const newProduct = {
    id,
    name,
    description,
    price
  };

  products[id] = newProduct;

  res.status(201).json(newProduct);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
