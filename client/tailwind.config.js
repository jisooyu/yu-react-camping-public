const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
	content: ['./src/**/*. {js,jsx,ts,tsx}'],
	theme: {
		// Define a custom class:
		customAnchor: {
			color: 'green', // Example: set color to green
			textDecoration: 'underline overline', // Example: add both underline and overline
		},
		extend: {
			anchor: {
				color: 'red',
				textDecoration: 'underline',
			},
		},
	},
	plugins: [],
});
