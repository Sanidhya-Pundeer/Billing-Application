const express = require('express');
const {billCreation} = require('../controller/adminController');

const adminRouter = express.Router();

adminRouter.post('/billCreation', billCreation);

module.exports = adminRouter;