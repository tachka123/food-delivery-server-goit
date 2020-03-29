/** @format */

const fs = require('fs');
const path = require('path');
const uuid = require('uuid');
const allProducts = require('../../db/products/all-products.json');
const date = require('date-and-time');
const ordersPath = path.join(__dirname, '../../', 'db', 'orders');

const orders = (req, res) => {
	const result = { status: 'success', order: '' };
	const { user, products, deliveryAdress, deliveryType } = req.body;
	if (!user || !products || !deliveryType || !deliveryAdress) {
		result.status = 'error';
		result.errorMessage = 'some of fields are empty';
		res.send(result);
		res.end();
		return;
	}

	const findProductsById = allProducts.filter(item =>
		products.includes(item.id)
	);

	if (findProductsById.length !== products.length) {
		result.status = 'error';
		result.order = null;
		result.errorMessage = 'can`t find one of products';
		res.send(result);
		res.end();
		return;
	}
	const fileName = date.format(new Date(), 'YYYY.MMM.DD..HH.mm.ss');

	fs.mkdir(`${ordersPath}/${user}`, { recursive: true }, err => {
		if (err) throw err;
		return;
	});

	fs.writeFile(
		`${ordersPath}/${user}/${fileName}.json`,
		JSON.stringify({
			user,
			products,
			deliveryAdress,
			deliveryType,
			id: uuid.v1(),
		}),
		err => {
			if (err) throw err;
			return;
		}
	);

	result.order = {
		id: uuid.v1(),
		user,
		products,
		deliveryType,
		deliveryAdress,
	};
	res.type('application/json');
	res.send(JSON.stringify(result));

	res.end();
};

module.exports = orders;
