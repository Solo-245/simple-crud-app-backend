const express = require('express');
const userRoute = require('./routes/user.route.js');
const productRoute = require('./routes/product.route.js');

const appRouter = express.Router(); // Use Router, not a full Express app

// Attach routes
appRouter.use('/users', userRoute);
appRouter.use('/products', productRoute);

module.exports = appRouter;
