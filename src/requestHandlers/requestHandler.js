const routes = require('../routes/routes');
const url = require('url');

const serverStarted = (req, res) => {
	const parsedUrl = url.parse(req.url);
	const func = routes[parsedUrl.pathname];
	func(req, res);
};

module.exports = serverStarted;
