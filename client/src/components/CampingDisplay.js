import CampingDetail from './CampingDetail';

function CampingDisplay({ campingData }) {
	return (
		<>
			<h2 className='text-2xl text-center font-bold'>Go Camping Information</h2>
			<CampingDetail campingData={campingData} />
		</>
	);
}

export default CampingDisplay;
