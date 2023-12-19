import CampingDetail from './CampingDetail';

function CampingDisplay({ campingData }) {
	return (
		<div>
			<CampingDetail campingData={campingData} />
		</div>
	);
}

export default CampingDisplay;
