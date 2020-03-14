const routes = require('../routes/routes');
const morgan = require('morgan');

const logger = morgan('combined');

const mainHandler = (req, res) => {
	const { url } = req;
	const func = routes[url] || routes.defaultRoute;
	try {
		logger(req, res, () => func(req, res));
	} catch {
		res.writeHead(500);
		res.write('Internal server error');
		res.end();
	}
};

module.exports = mainHandler;
