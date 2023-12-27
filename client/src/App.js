import useFetchData from './hooks/fetch-data';
import CampingDisplay from './components/CampingDisplay';
import { NavbarWithSearch } from './components/Header';
import { FooterWithLogo } from './components/Footer';
import { Spinner } from '@material-tailwind/react';

function App() {
	const { data: campingData, isLoading } = useFetchData();
	console.log(campingData);
	return (
		<>
			{isLoading ? (
				<>
					<div className='fixed top-1/2 left-1/2'>
						<Spinner className='h-12 w-12' />
					</div>
				</>
			) : (
				<>
					<NavbarWithSearch />
					<CampingDisplay campingData={campingData} />
					<FooterWithLogo />
				</>
			)}
		</>
	);
}

export default App;
