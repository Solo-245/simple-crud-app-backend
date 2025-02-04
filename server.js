const express = require ('express');
const mongoose = require ('mongoose');
const connectToDB = require ('./db.js');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js')
const app = express();

const PORT = 8000;

connectToDB().then (() => {

   // middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/v1/products', productRoute);

app.get('/', (req, res) => {
   console.log('hello World')
   res.send(`<h1>
      Homepage
      </h1>`);
});


app.listen(PORT, () => {
   console.log(`Server is running on port: http://localhost:${PORT}`);
});

});