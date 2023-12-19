const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/camp',
		createProxyMiddleware({
			target: 'http://localhost:5000', // Your Express server's address
			changeOrigin: true,
		})
	);
};
