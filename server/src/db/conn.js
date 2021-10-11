/** @format */

const mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost:27017/integration', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('db is fine');
	})
	.catch((e) => {
		console.error((e) => error);
	});
