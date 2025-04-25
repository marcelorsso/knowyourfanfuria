const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    twitterId: { type: String, required: true },
    name: { type: String, required: true },
    username: { type: String, required: true },
    profileImageUrl: String,
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
