const products = require('./products/products');
const signUp = require('./signUp/signUp');
const defaultRoute = require('./default/default');

const routes = {
	'/products': products,
	'/signup': signUp,
	defaultRoute,
};

module.exports = routes;
