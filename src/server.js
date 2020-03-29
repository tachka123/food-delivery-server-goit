/** @format */

'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router/router');

const app = express();

const startServer = port => {
	app
		.use(bodyParser.urlencoded({ extended: false }))
		.use(bodyParser.json())
		.use('/', router);

	app.listen(port);
	console.log(`Server has been started at ${port}`);
};

module.exports = startServer;
