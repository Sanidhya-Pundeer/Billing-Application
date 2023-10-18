const express = require('express');
const {loginController, registerController, payController,getUserBills} = require('../controller/userController'); 

const userRouter = express.Router();

userRouter.post('/login', loginController);
userRouter.post('/register', registerController);
userRouter.put('/pay/:id', payController); 
userRouter.get('/getUserBills/:userMail',getUserBills);

module.exports = userRouter; 