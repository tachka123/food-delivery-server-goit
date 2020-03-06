const { port } = require('./config');
const serverStart = require('./src/server');

serverStart(port);
