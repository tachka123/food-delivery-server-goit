const products = require('./products/products');
const signUp = require('./signUp/signUp');

const routes = {
	'/products': products,
	'/signup': signUp,
};

module.exports = routes;
