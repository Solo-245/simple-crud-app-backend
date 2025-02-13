const express = require ('express');
const userRouter = express.Router();
const User = require ('../models/user.js');
const { signUserUp, signUserIn } = require ('../controllers/user.controler.js');


userRouter.get("/", (req, res) => {
   res.send("Welcome Home!")
});

userRouter.post("/signup", signUserUp);
userRouter.post("/signin", signUserIn);



module.exports = userRouter;











module.exports = userRouter;