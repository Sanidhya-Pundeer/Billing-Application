const userModel = require('../model/userModel');
const billModel = require('../model/billModel');
const encryptPassword = require('../utils/bcrypt');

const billCreation = async (req, res) => {
    const {billId, billTitle, userEmail, billAmount, billGenDate, billDueDate, status} = req.body;
    console.log(req.body);
    try {
        const bill = await billModel.findOne({billId});
        if(bill) {
            return res.status(400).json({message: 'Bill already exists'});
        }
        else{
            const newBill = new billModel({billId, billTitle, userEmail, billAmount, billGenDate, billDueDate, status});
            await newBill.save();
            return res.status(200).json({message: 'Bill created successfully'});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal error'});
    }
};



