const fs = require('fs');
const path = require('path');

const result = {
	status: '',
	users: [],
};
const usersPath = path.join(__dirname, '../../', 'db', 'users', 'all-users.json');

const getUserById = (req, res) => {
	const ids = req.params.id.split(',');
	res.type('json');
	try {
		fs.readFile(usersPath, (err, data) => {
			if (err) throw err;
			const arr = JSON.parse(data);
			const filtered = arr.filter(item => ids.includes(item.id));
			if (filtered.length > 0) {
				result.users = filtered;
				result.status = 'success';
				res.send(result);
				res.end();
			} else {
				result.status = 'not found';
				res.send(result);
				res.end;
			}
		});
	} catch {
		res.status(500);
		res.send('Server error');
		res.end();
	}
	result.users = [];
};

module.exports = getUserById;
