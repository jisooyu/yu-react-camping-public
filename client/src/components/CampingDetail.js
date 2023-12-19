import React from 'react';

function CampingDetail({ campingData }) {
	let content;
	content = (
		<>
			{campingData.map((campingItem) => (
				<p key={campingItem.contentId}>{campingItem.addr1}</p>
			))}
		</>
	);
	return (
		<div>
			<h2>Go Camping Information</h2>
			{content}
		</div>
	);
}

export default CampingDetail;
