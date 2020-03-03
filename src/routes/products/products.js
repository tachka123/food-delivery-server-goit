const fs = require('fs');

const products = (req, res) => {
	fs.readFile('./assets/productsJson.json', 'utf-8', (err, data) => {
		if (err) {
			res.writeHead(404);
			res.write('File not found!');
			res.end();
			throw err;
		}
		res.writeHead(200, { 'Content-Type': 'text/json' });
		res.write(data);
		res.end();
		console.log('products GET');
	});
};

module.exports = products;
