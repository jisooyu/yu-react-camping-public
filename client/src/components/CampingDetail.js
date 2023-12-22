import { Carousel, Card } from '@material-tailwind/react';

function CampingDetail({ campingData }) {
	let content;
	content = (
		<>
			<Carousel className='rounded-xl'>
				{campingData.map((campingItem) => (
					<Card className='w-96'>
						<div key={campingItem.contentId}>
							<img
								src={campingItem.firstImageUrl || 'no-image-available.jpeg'}
								alt='campingPicture'
								className='h-4/5 w-full object-cover'
							/>
							<p>캠핑장이름:{campingItem.facltNm}</p>
							<p>캠핑장 주소:{campingItem.addr1}</p>
							<p>펫입장여부:{campingItem.animalCmgCl}</p>
							<p>부대시설:{campingItem.caravInnerFclty || 'N.A.'}</p>
							<p className='mb-5'>
								<b>
									<a
										className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'
										href={campingItem.homepage}
									>
										홈페이지 링크
									</a>
								</b>
							</p>
						</div>
					</Card>
				))}
			</Carousel>
		</>
	);
	return <>{content}</>;
}

export default CampingDetail;
