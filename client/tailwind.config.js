const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		maxWidth: {
			'2xl': '1500px',
		},
		extend: {},
	},
	plugins: [],
});
