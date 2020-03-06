const fs = require('fs');

const signUp = (req, res) => {
	if (req.method !== 'POST') {
		res.writeHead(405);
		res.write('Method not allowed');
		res.end();
		return;
	}
	req.on('request', (req, res) => {
		res.writeHead(201, { 'Content-Type': 'text/json' });
	});
	req.on('data', chunk => {
		const { username, telephone, password, email } = JSON.parse(chunk);
		if (username && telephone && password && email) {
			fs.writeFile(`./src/db/users/${username}.json`, chunk.toString(), err => {
				if (err) throw err;
			});
			req.on('end', () => {
				res.write(JSON.stringify({ status: 'success', user: { username, telephone, password, email } }));
				res.end();
			});
		}
	});
};

module.exports = signUp;
