const axios = require('axios');
const key = require('../config/serviceKey');
const url = require('../config/url');

const fetchData = async () => {
	try {
		return await axios.get(url.goCampingUrl, {
			params: {
				serviceKey: key.serviceKey,
				numOfRows: '40',
				pageNo: '1',
				MobileOS: 'IOS',
				MobileApp: 'AppTest',
				_type: 'json',
			},
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports = fetchData;
