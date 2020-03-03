const defaultRoute = (req, res) => {
	res.writeHead(404);
	res.write('File not found');
	res.end();
	console.log('Default route');
};

module.exports = defaultRoute;
