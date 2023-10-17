const billModel = require('../model/billModel');
const { v4 } = require('uuid');

const billCreation = async (req, res) => {
    const {billTitle, userEmail, billAmount} = req.body;
    const uuid = v4();
    const billId = uuid.slice(0, 8);
    const billGenDate = new Date();
    const status = 'unpaid';
    const billDueDate = new Date();
    billDueDate.setDate(billGenDate.getDate() + 7);

    try {
        const bill = await billModel.findOne({billId});
        if(bill) {
            return res.status(400).json({message: 'Bill already exists'});
        } else {
            const newBill = new billModel({billId, billTitle, userEmail, billAmount, billGenDate, billDueDate, status});
            await newBill.save();
            return res.status(200).json({message: 'Bill created successfully'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal error'});
    }
};

module.exports = {billCreation};
