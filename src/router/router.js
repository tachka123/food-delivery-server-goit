const express = require('express');
const products = require('./products');
const notExist = require('./routeIsNotExist');
const { getUser, createUser } = require('./user');
const router = express.Router();

router
	.get('/products/:id', products)
	.post('/users', createUser)
	.get('/users/:id', getUser)
	.get('*', notExist);

module.exports = router;
