const userModel = require('../model/userModel');
const encryptPassword = require('../utils/bcrypt');

const loginController = async (req, res) => {
    try {
        const {userMail, userPassword} = req.body;
        const user = await userModel.findOne({userMail, userPassword});

        if(!user) {
            return res.status(400).json({
                message: 'Invalid credentials'
            });
        }
        const isPasswordValid = encryptPassword.matchPwd(userPassword, user.userPassword);
        if(isPasswordValid) {
            return res.status(200).json({
                message: 'Login successful'
            });
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
        const {userId, userMail, userPassword} = req.body;
        const hashedPwd = encryptPassword.hasPwd(userPassword);

        const user = await userModel.create({
            userId: userId,
            userMail: userMail,
            userPassword: hashedPwd
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
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal error" });
    }
};    

module.exports = {loginController, registerController};