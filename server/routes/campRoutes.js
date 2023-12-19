const fetchData = require('../utilities/fetchData');

module.exports = (app) => {
	app.get('/camp', async (req, res) => {
		try {
			const response = await fetchData();
			res.send(response.data.response.body.items.item);
		} catch (error) {
			console.error(error);
			res.status(500).send({ message: 'Internal Server Error' });
		}
	});
};
