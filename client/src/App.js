import useFetchData from './hooks/fetch-data';
import Header from './components/Header';
import Footer from './components/Footer';
import CampingDisplay from './components/CampingDisplay';

function App() {
	const { data: campingData, isLoading } = useFetchData();
	console.log(campingData);
	return (
		<>
			<Header />
			<CampingDisplay campingData={campingData} />
			<Footer />
		</>
	);
}

export default App;
