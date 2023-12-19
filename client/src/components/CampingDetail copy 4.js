import React from 'react';

function CampingDetail({ campingData }) {
	if (!Array.isArray(campingData)) {
		for (let item in campingData) {
			console.log('item, campingData[item]', item, '  ', campingData[item]);
			for (let i in campingData[item]) {
				console.log(campingData[item][i].addr1);
			}
		}
	}
	return (
		<div>
			<h2>Camping Details</h2>
			{/* {Array.isArray(campingData)
				? campingData.map((campingItem) => (
						<p key={campingItem.contentId}>{campingItem.facltNm}</p>
				  ))
				: Object.entries(campingData).map(([key, value]) =>
						value.map((item) => <p key={item.contentId}>{item.facltNm}</p>)
				  )} */}
		</div>
	);
}

export default CampingDetail;
