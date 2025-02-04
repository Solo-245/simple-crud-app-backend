const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true, default: 0},
    description: {type: String, required: true},
    image: {type: String, required: false},
    quantity: {type: Number, required: true, default: 0}
},{
   timestamps: true
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;