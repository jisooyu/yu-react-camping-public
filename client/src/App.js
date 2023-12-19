import useFetchData from './hooks/fetch-data';
import CampingDisplay from './components/CampingDisplay';

function App() {
	const { data: campingData, isLoading } = useFetchData();
	console.log(campingData);
	return (
		<div className='App'>
			<CampingDisplay campingData={campingData} />
		</div>
	);
}

export default App;
