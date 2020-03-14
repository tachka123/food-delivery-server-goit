const defaultRoute = (req, res) => {
	res.writeHead(400);
	res.write('Bad request');
	res.end();
};

module.exports = defaultRoute;
