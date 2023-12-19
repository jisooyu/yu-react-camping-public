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
				console.log('Array check in hook', Array.isArray(response.data));
				if (response) {
					setIsLoading(false);
					setData(response.data);
				}
			} catch (error) {
				console.log(error);
				console.log({ message: 'fail to fetch data' });
				setIsLoading(false);
			}
		};

		fetchData();
		setIsLoading(true);
	}, []);

	return { data, isLoading };
};

export default useFetchData;
