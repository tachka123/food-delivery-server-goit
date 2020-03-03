const defaultRoute = (req, res) => {
	res.writeHead(404);
	res.write('File not found');
	res.end();
};

module.exports = defaultRoute;
