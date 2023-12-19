import { useState, useEffect } from 'react';
import axios from 'axios';

// Custom hook for fetching data
const useFetchData = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('/camp');
				if (response.status >= 200 && response.status < 300) {
					setData(response.data);
				} else {
					throw new Error(`Failed to fetch data. Status: ${response.status}`);
				}
			} catch (error) {
				console.error(error); // Log the error for debugging purposes
				console.log({ message: 'fail to fetch data' });
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
		setIsLoading(true);
	}, []);

	return { data, isLoading };
};

export default useFetchData;
