const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const bcrypt = require('bcrypt');

var uniqueValidator = require('mongoose-unique-validator');
mongoose.models={};
const userSchema = new Schema({
    usertype: {
        type: String,
    },
    username: {
        type: String,
        required: [true, 'Please provide username'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide password']
    },
    fName: String,
    lName: String,
    address: String,
    lNum: {
        type: String,
        
        unique: true
    },
    dob: {
        type: Date,
        
        unique: true

    },

    userId: String,
    carDetails: String,
    image1: String,
    image2: String,
    Date: Date,
    Time: String,
    appointmentId: { type: Schema.Types.ObjectId, ref: "appointment" }
});
userSchema.plugin(uniqueValidator)

userSchema.pre('save', function (next) {
    const userNew = this
    bcrypt.hash(userNew.password, 10, (error, hash) => {
        userNew.password = hash
        next()
    })
})

const User = mongoose.model("user", userSchema);
module.exports = User;