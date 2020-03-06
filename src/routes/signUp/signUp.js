const fs = require('fs');

const signUp = (req, res) => {
	if (req.method !== 'POST') {
		res.writeHead(405);
		res.write('Method not allowed');
		res.end();
		return;
	}
	req.on('data', chunk => {
		const { username, telephone, password, email } = JSON.parse(chunk);
		if (username && telephone && password && email) {
			fs.writeFile(`./src/db/users/${username}.json`, chunk.toString(), err => {
				if (err) throw err;
			});
			res.writeHead(201, { 'Content-type': 'text/json' });
			res.write(JSON.stringify({ status: 'success', user: { username, telephone, password, email } }));
			res.end();
		} else {
			res.writeHead(400);
			res.write('One of fields is empty');
			res.end();
		}
	});
};

module.exports = signUp;
