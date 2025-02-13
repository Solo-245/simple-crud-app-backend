const User = require ('../models/user.js');
const bcrypt = require ("bcrypt");

// Register User
const signUserUp = async (req, res) => {
   try { 
       let { firstName, lastName, phoneNumber, password, email } = req.body;
      const user = await User.findOne({
         email: email
      });
        if (!user) {    
      //hash the password using bcrypt
            const saltRound = 10;
           //const genSalt = await bcrypt.genSalt(saltRound);
            const hashedPassword = await bcrypt.hash(password, saltRound);
            console.log(hashedPassword);
      
      if (!firstName || !lastName || !phoneNumber || !password || !email) {
         return res.status(400).json({ error: "All fields are required" });
      }

      const newUser = new User({
         firstName, lastName, phoneNumber, password: hashedPassword, email
      });

      await newUser.save();
      res.status(201).json({ message: 'User Saved Successfully!' });}
      else{
         console.log(user);
         res.send({ message: 'User already exists' });
      }

   } catch (err) {
      console.error("❌ Error Saving User:", err);
      res.status(500).json({ error: "Internal Server Error" });
   }
};

const signUserIn = async (req, res) => {
    try{ 
       let { password, email } = req.body;
      const user = await User.findOne({
         email
      });
        if (user) {
            // res.status(400).send("User does not exist");
         const isValid = await bcrypt.compare( password, user.password );
         if (isValid) {
           res.status(200).json({ message: 'Welcome Home' });
         }else {
            res.status(400).send("Invalid Password")}; 
         }else{
       res.status(500).json({message: "User Login Failed"})}; 
    }catch (error) {
      res.status(500).json({message: "❌ Error Signing In User:", error});
    }
};
module.exports = { signUserUp, signUserIn
};


