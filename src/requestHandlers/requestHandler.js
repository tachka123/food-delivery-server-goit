const routes = require('../routes/routes');
const morgan = require('morgan');

const logger = morgan('combined');

const mainHandler = (req, res) => {
	const { url } = req;
	const func = routes[url] || routes.defaultRoute;
	logger(req, res, (req, res) => func(req, res));
};

module.exports = mainHandler;
