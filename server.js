const express = require('express');
const mongoose = require('mongoose');
const connectToDB = require('./db.js');
const appRouter = require('./app.js'); // Import appRouter
//const router = require (''); //import router

const app = express();
const PORT = 8000;

// Connect to Database
connectToDB()
  .then(() => {
    console.log('✅ Connected to Database Successfully');

    // Middleware (Apply JSON parsing)
    app.use(express.json()); 
    app.use(express.urlencoded({ extended: false }));

    // Use appRouter to register routes
    app.use('/api/v1', appRouter);

    // Root Route
    app.get('/', (req, res) => {
      res.send('<h1>Homepage</h1>');
    });

    // Start Server
    app.listen(PORT, () => {
      console.log(`🚀 Server is running at: http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Database Connection Failed:', error);
  });
