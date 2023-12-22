import React from 'react';
import { TECarousel, TECarouselItem } from 'tw-elements-react';

function CampingDetail({ campingData }) {
	let content;
	content = (
		<>
			<TECarousel
				showControls
				showIndicators
				ride='carousel'
			>
				<div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
					{campingData.map((campingItem) => (
						<div key={campingItem.contentId}>
							<TECarouselItem
								itemID={campingItem.contentId}
								className='relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'
							>
								<img
									src={campingItem.firstImageUrl}
									alt='campingPicture'
									className='block w-full'
								/>
								<p>{campingItem.addr1}</p>
							</TECarouselItem>
						</div>
					))}
				</div>
			</TECarousel>
		</>
	);
	return (
		<div className='container mx-auto flex flex-col items-center mt-3'>
			<h2 className='text-2xl font-bold mb-4'>Go Camping Information</h2>
			{content}
		</div>
	);
}

export default CampingDetail;
