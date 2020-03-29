/** @format */

const express = require('express');
const products = require('./products');
const notExist = require('./routeIsNotExist');
const orders = require('./orders');
const { getUser, createUser } = require('./user');
const router = express.Router();

router
	.get('/products/:id', products)
	.post('/users', createUser)
	.get('/users/ids=:id', getUser)
	.post('/orders', orders)
	.get('*', notExist);

module.exports = router;
