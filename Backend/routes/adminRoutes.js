const express = require('express');
const {billCreation,updateBills,deleteBills,getAllBills} = require('../controller/adminController');

const adminRouter = express.Router();

adminRouter.post('/billCreation', billCreation);
adminRouter.put('/updateBills/:id',updateBills);
adminRouter.delete('/deleteBills/:id',deleteBills); 
adminRouter.get('/getAllBills',getAllBills);


module.exports = adminRouter;