import useFetchData from './hooks/fetch-data';
import CampingDisplay from './components/CampingDisplay';
import { NavbarWithSearch } from './components/Header';
import { FooterWithLogo } from './components/Footer';
function App() {
	const { data: campingData, isLoading } = useFetchData();
	console.log(campingData);
	return (
		<>
			<NavbarWithSearch />
			<CampingDisplay campingData={campingData} />
			<FooterWithLogo />
		</>
	);
}

export default App;
