import useFetchData from './hooks/fetch-data';
import LandingPage from './page/LandingPage';
import { Spinner } from '@material-tailwind/react';

function App() {
	const { data: campingData, isLoading } = useFetchData();
	console.log(campingData);
	return (
		<>
			{isLoading ? (
				<div className='fixed top-1/2 left-1/2'>
					<Spinner className='h-12 w-12' />
				</div>
			) : (
				<LandingPage campingData={campingData} />
			)}
		</>
	);
}

export default App;
