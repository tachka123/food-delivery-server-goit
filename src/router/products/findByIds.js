const findByIds = (err, data = [], ids = []) => {
	if (err) throw err;
	const products = JSON.parse(data);
	const result = products.filter(item => ids.includes(item.id));
	return result;
};

module.exports = findByIds;
