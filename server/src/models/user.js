/** @format */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	password: {
		type: Number,
		required: true,
	},
});

const userModel = mongoose.model('userData', userSchema);
module.exports = userModel;
