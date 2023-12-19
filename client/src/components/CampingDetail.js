import React from 'react';

function CampingDetail({ campingData }) {
	let content;
	content = (
		<div className='flex flex-wrap'>
			{campingData.map((campingItem) => (
				<div
					key={campingItem.contentId}
					className='w-full md:w-1/2 lg:w-1/3 p-4 mt-3'
				>
					<p>{campingItem.addr1}</p>
					<img
						src={campingItem.firstImageUrl}
						alt='campingPicture'
						className='object-cover w-full h-full'
					/>
				</div>
			))}
		</div>
	);
	return (
		<div className='container mx-auto flex flex-col items-center mt-3'>
			<h2 className='text-2xl font-bold mb-4'>Go Camping Information</h2>
			{content}
		</div>
	);
}

export default CampingDetail;
