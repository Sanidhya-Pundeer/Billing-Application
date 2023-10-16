const {default: mongoose} = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: String,
    userMail: String,
    userPassword: String
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;