const http = require('http');
const requestServer = require('./requestHandlers/requestHandler');

const serverStart = port => {
	const server = http.createServer(requestServer);

	server.listen(port, err => {
		if (err) {
			throw err;
		}
		console.log(`Server is listnening on port ${port}`);
	});
};

module.exports = serverStart;
