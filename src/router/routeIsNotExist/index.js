const notExist = (req, res, next) => {
	res.status(404).send('Route not exists');
};

module.exports = notExist;
