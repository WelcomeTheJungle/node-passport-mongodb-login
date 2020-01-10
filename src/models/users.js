const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const { Schema } = mongoose;

const userSchema = new Schema({
    email: String,
    pass: String
});

userSchema.methods.encryptPass = (pass) => {
    return bcrypt.hashSync(pass, bcrypt.genSaltSync(10));
}

userSchema.methods.validatePass = function(pass) {
    return bcrypt.compareSync(pass, this.pass);
}

module.exports = mongoose.model('users', userSchema);
