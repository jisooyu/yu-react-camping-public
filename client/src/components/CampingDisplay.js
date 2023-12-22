import CampingDetail from './CampingDetail';
import { TECarousel } from 'tw-elements-react';
function CampingDisplay({ campingData }) {
	return (
		<>
			<h2 className='text-2xl font-bold mb-4'>Go Camping Information</h2>
			<TECarousel
				showControls
				showIndicators
				ride='carousel'
			>
				{campingData.map((campingItem) => (
					<div key={campingItem.contentId}>
						<CampingDetail campingItem={campingItem} />
					</div>
				))}
			</TECarousel>
		</>
	);
}

export default CampingDisplay;
