const fetchData = require('../utilities/fetchData');

module.exports = (app) => {
	app.get('/camp', async (req, res) => {
		try {
			const response = await fetchData();
			console.log(
				'Array check in api',
				Array.isArray(response.data.response.body.items.item)
			);
			console.log(
				'response.data.response.body.items.item from api',
				response.data.response.body.items.item
			);
			res.send(response.data.response.body.items.item);
		} catch (error) {
			console.log(error);
			res.status(500).send({ message: 'Internal Server Error' });
		}
	});
};
