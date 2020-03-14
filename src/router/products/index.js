const fs = require('fs');
const path = require('path');
const findByIDs = require('./findByIds');

const result = { status: '', products: [] };

const getProducts = (req, res) => {
	const { id } = req.params;
	const ids = id.split(',');
	fs.readFile(path.join(__dirname, '../../', 'db/products', 'all-products.json'), (err, data) => {
		if (err) throw err;
		const filtered = findByIDs(err, data, ids);
		res.type('json');
		if (filtered.length > 0) {
			result.status = 'success';
			result.products = filtered;
			res.send(result);
		} else {
			result.status = 'no products';
			res.send(result);
		}
		result.products = [];
		res.end();
	});
};

module.exports = getProducts;
