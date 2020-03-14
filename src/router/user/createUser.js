const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

const usersPath = path.join(__dirname, '../../', 'db', 'users', `all-users.json`);
const result = { status: 'success', user: '' };

const createUser = (req, res) => {
	const { username, telephone, password, email } = req.body;
	if ((username, telephone, password, email)) {
		const user = { username, telephone, password, email, id: uuid.v1() };
		fs.readFile(usersPath, (err, data) => {
			if (err) throw err;
			const arr = JSON.parse(data);
			const checkForAlreadeCreatedUser = arr.find(item => item.username === username);
			if (!checkForAlreadeCreatedUser) {
				const newArray = [...arr, user];
				fs.writeFile(usersPath, JSON.stringify(newArray), err => {
					if (err) throw err;
					res.type('json');
					result.user = username;
					res.send(result);
					res.end();
				});
			} else {
				res.send('User with same nickname is created already');
				res.end();
			}
		});
	} else {
		res.status(400).send('Some of field is empty');
		res.end();
	}
};

module.exports = createUser;
