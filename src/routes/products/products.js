const fs = require('fs');

const products = (req, res) => {
	if (req.method !== 'GET') {
		res.writeHead(405);
		res.write('Method not allowed');
		res.end();
		console.log('Wrong method');
		return;
	}
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
		console.log('products GET completed');
	});
};

module.exports = products;
