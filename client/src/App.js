import useFetchData from './hooks/fetch-data';
import CampingDisplay from './components/CampingDisplay';

function App() {
	const { data: campingData, isLoading } = useFetchData();
	console.log(campingData);
	return (
		<>
			<CampingDisplay campingData={campingData} />
		</>
	);
}

export default App;
