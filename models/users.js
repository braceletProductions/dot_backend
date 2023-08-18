const mongoose = require('mongoose');
const uniqid = require('uniqid');

const users = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true,
    },
    phone: {
        type: String,
        unique: true,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    emailVerifyKey: {
        type: String,
        default: uniqid()
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    adminType: {
        type: String,
        default: "customer"
    },
    isSeller: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});

exports.Users = mongoose.model("Users", users);
