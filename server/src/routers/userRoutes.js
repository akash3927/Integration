/** @format */

const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/user', (req, res) => {
	res.json({
		message: 'inside routes its fine',
	});
});

router.post('/adddata', async (req, res) => {
	const name = req.body.name;
	const password = req.body.password;

	const user = new User({
		name,
		password,
	});
	const newUser = await user.save();
	res.json(newUser);
	// console.log(name, password);
	// res.send(name, password);
});

module.exports = router;
