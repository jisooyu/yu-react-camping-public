import CampingDetail from './CampingDetail';

function CampingDisplay({ campingData }) {
	<div className='container mx-auto flex flex-col items-center mt-3'>
		<h2 className='text-2xl font-bold mb-4'>Go Camping Information</h2>

		{campingData.map((campingItem) => {
			return <CampingDetail campingItem={campingItem} />;
		})}
	</div>;
}

export default CampingDisplay;
