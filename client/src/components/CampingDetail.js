import React from 'react';
import { TECarouselItem } from 'tw-elements-react';

function CampingDetail({ campingItem }) {
	return (
		<>
			<div className='flex flex-row'>
				<TECarouselItem
					itemID={campingItem.contentId}
					className='relative w-1/2 transition-transform duration-[600ms] ease-in-out'
				>
					<img
						src={campingItem.firstImageUrl}
						alt='campingPicture'
					/>
					<p>{campingItem.addr1}</p>
				</TECarouselItem>
			</div>
		</>
	);
}

export default CampingDetail;
