const mongoose = require ('mongoose');

const connectToDB = async () => {
   try{
      await mongoose.connect("mongodb+srv://solo:Backend@rest-cluster.sku0m.mongodb.net/?retryWrites=true&w=majority&appName=rest-cluster");

      console.log("Database Connected");

   } catch (error) {
      console.log(error);
   }
};

module.exports = connectToDB;




