const routes = require('../routes/routes');
const url = require('url');

const mainHandler = (req, res) => {
	const { url } = req;
	const func = routes[url] || routes.defaultRoute;
	func(req, res);
};

module.exports = mainHandler;
