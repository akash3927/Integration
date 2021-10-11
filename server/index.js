/** @format */

const express = require('express');
const app = express();
const conn = require('./src/db/conn');
const userModel = require('./src/models/user');
const userRoutes = require('./src/routers/userRoutes');
const port = process.env.port || 4000;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);
app.get('/', (req, res) => {
	res.json({
		message: 'route working',
	});
});
app.listen(port, () => {
	console.log(`app is running on ${port}`);
});
