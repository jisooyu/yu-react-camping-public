import { Carousel, Card } from '@material-tailwind/react';

function CampingDetail({ campingData }) {
	let content;
	content = (
		<>
			<Carousel className='rounded-xl'>
				{campingData.map((campingItem) => (
					<div key={campingItem.contentId}>
						<Card className='w-96'>
							<img
								src={campingItem.firstImageUrl || 'no-image-available.jpeg'}
								alt='campingPicture'
								className='h-4/5 w-full object-cover'
							/>
						</Card>
						<Card className='w-96'>
							<p>캠핑장이름:{campingItem.facltNm}</p>
							<p>캠핑장 주소:{campingItem.addr1}</p>
							<p>펫입장여부:{campingItem.animalCmgCl}</p>
							<p>부대시설:{campingItem.caravInnerFclty || 'N.A.'}</p>
							<p className='mb-5'>
								<b>
									<a
										className='text-blue-500 hover:text-red-500 underline !important'
										// className='customAnchor'
										href={campingItem.homepage}
									>
										Home Page Link
									</a>
								</b>
							</p>
						</Card>
					</div>
				))}
			</Carousel>
		</>
	);
	return <>{content}</>;
}

export default CampingDetail;
