const {default: mongoose} = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    userMail: { type: String, required: true, unique: true, index: true },
    userPassword: { type: String, required: true }
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;