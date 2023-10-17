const express = require('express');
const {loginController, registerController, payController} = require('../controller/userController'); 

const userRouter = express.Router();

userRouter.post('/login', loginController);
userRouter.post('/register', registerController);
userRouter.put('/pay/:id', payController);
module.exports = userRouter; 