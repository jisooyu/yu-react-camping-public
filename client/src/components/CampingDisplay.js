import CampingDetail from './CampingDetail';

function CampingDisplay({ campingData }) {
	return (
		<>
			<div className='w-full h-20 bg-cyan-800 '>
				<h2 className='text-2xl text-center font-bold pt-4'>
					Go Camping Information
				</h2>
			</div>
			<CampingDetail campingData={campingData} />
		</>
	);
}

export default CampingDisplay;
