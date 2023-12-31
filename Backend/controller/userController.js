const userModel = require('../model/userModel');
const billModel = require('../model/billModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey = process.env.SECRET_KEY;
const encryptPassword = require('../utils/bcrypt');

const generateToken = (userId, userType) => {
    const payload = {
      user: {
        id: userId,
        type: userType,
      },
    };
    return jwt.sign(payload,secretKey, { expiresIn: '1h' });
  };

const adminLogin = async (req, res) => {
    try {
        const { userMail, userPassword } = req.body;
        const admin = await userModel.findOne({ userMail });

        if (!admin || admin.userType !== 'ADMIN') {
            return res.status(400).json({ message: 'Invalid admin credentials' });
        }

        const isPasswordValid = encryptPassword.matchPwd(userPassword, admin.userPassword);
        if (isPasswordValid) {
            const token = generateToken(admin._id, admin.userType);
            return res.status(200).json({
              message: 'Admin login successful',
              token,
            });
          } else {
            return res.status(400).json({
              message: 'Invalid admin credentials',
            });
          }
        } catch (error) {
          console.log(error);
          res.status(500).json({ message: 'Internal error' });
        }
};

const userLogin = async (req, res) => {
    try {
        const { userMail, userPassword } = req.body;
        const user = await userModel.findOne({ userMail });

        if (!user || user.userType !== 'USER') {
            return res.status(400).json({ message: 'Invalid user credentials' });
        }
        const isPasswordValid = encryptPassword.matchPwd(userPassword, user.userPassword);
        if (isPasswordValid) {
            const token = generateToken(user._id, user.userType);
            return res.status(200).json({
              message: 'User login successful',
              token,
            });
          } else {
            return res.status(400).json({
              message: 'Invalid User credentials',
            });
          }
        } catch (error) {
          console.log(error);
          res.status(500).json({ message: 'Internal error' });
        }
};


const loginController = async (req, res) => {
    try {
        const {userMail, userPassword,userType} = req.body;
        const user = await userModel.findOne({userMail});

        if(!user) {
            return res.status(400).json({message: 'Invalid credentials'});
        }
        const isPasswordValid = encryptPassword.matchPwd(userPassword, user.userPassword);
        if (isPasswordValid) {
            if (userType === 'ADMIN') {
                return res.status(200).json({ message: 'Admin login successful' });
            } else {
                return res.status(200).json({ message: 'User login successful' });
            }            
        }
        else {
            return res.status(400).json({
                message: 'Invalid credentials'
            });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal error" });
        };
    }; 

const registerController = async (req, res) => {
    try {
        const {userName, userMail, userPassword,userType} = req.body;
        const hashedPwd = encryptPassword.hasPwd(userPassword);
    
        const exist = await userModel.findOne({userMail});

        if(!exist){
            const user = await userModel.create({
                userName: userName,
                userMail: userMail,
                userPassword: hashedPwd,
                userType:userType
            });
            if(user){
                res.status(200).json({
                    message: 'Registration successful'
                });
            }
            else {
                res.status(400).json({
                    message: 'Registration failed'
                });
            }
        }
        else{
            res.status(400).json({
                message: 'User already exists'
            });
        }

        
    } catch (error) {
        if (error.code === 11000 && error.keyPattern && error.keyPattern.userMail) {
            res.status(400).json({ message: 'UserMail already exists' });
        } else {
            console.error(error);
            res.status(500).json({ message: 'Internal error' });
        }
    }
};    
const payController = async (req, res) => {
    const { id } = req.params;
    const status = 'paid';

    try {
        console.log({ id, status });
        const updatedBill = await billModel.findOneAndUpdate(
            { billId: id },
            { $set: { status } },
            { new: true }
        );
        if (!updatedBill) {
            return res.status(400).json({ message: 'Bill not found' });
        } else {
            return res.status(200).json({ message: 'Bill updated successfully' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal error' });
    }
};

const getUserBills = async (req, res) => {
    const{userMail} = req.params;

    try {
        const bills = await billModel.find({ userEmail: userMail });
        
        if (!bills || bills.length === 0) {
            return res.status(404).json({ message: 'No bills found' });
        }
        else{
            res.status(200).json(bills);
        }

    } catch (error) {
        res.status(500).json({message: 'Internal error'});
    }
};


module.exports = {loginController, registerController,payController,getUserBills};