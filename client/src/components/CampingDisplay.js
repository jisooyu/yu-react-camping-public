import CampingDetail from './CampingDetail';

function CampingDisplay({ campingData }) {
	return (
		<>
			<h2 className='text-2xl font-bold mb-4'>Go Camping Information</h2>
			<CampingDetail campingData={campingData} />
		</>
	);
}

export default CampingDisplay;
