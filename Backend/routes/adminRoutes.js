const express = require('express');
const {billCreation,updateBills} = require('../controller/adminController');

const adminRouter = express.Router();

adminRouter.post('/billCreation', billCreation);
adminRouter.put('/updateBills',updateBills);

module.exports = adminRouter;