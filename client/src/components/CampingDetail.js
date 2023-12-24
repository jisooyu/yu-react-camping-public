import { Carousel, Typography } from '@material-tailwind/react';

function CampingDetail({ campingData }) {
	let content;
	content = (
		<>
			<Carousel>
				{campingData.map((campingItem) => (
					<div key={campingItem.contentId}>
						<div className='relative aspect-ratio-9/9 h-96 w-full flex justify-center'>
							<img
								src={campingItem.firstImageUrl || 'no-image-available.jpeg'}
								alt='campingPicture'
								className='h-full w-full object-cover'
							/>
						</div>
						<div className='absolute inset-0 grid h-full w-full place-items-center bg-gray5/7'>
							<div className='w-3/4 text-center md:w-2/4'>
								<div className='p-6 pt-0'>
									<button
										className='align-middle font-sans font-bold text-center uppercase py-3 px-6 rounded-lg bg-gray-400'
										type='button'
									>
										<a
											className='text-black hover:text-red-500 underline !important'
											href={campingItem.homepage}
										>
											Home Page Link
										</a>
									</button>
								</div>
							</div>
						</div>
						<div className=' text-center '>
							<Typography
								variant='lead'
								color='black'
								className='mb-4 '
							>
								캠핑장:{campingItem.facltNm}
							</Typography>
							<Typography
								variant='paragraph'
								color='black'
								className='mb-2 '
							>
								캠핑장 주소:{campingItem.addr1}
							</Typography>
							<Typography
								variant='paragraph'
								color='black'
								className='mb-2 '
							>
								펫입장여부:{campingItem.animalCmgCl}
							</Typography>
							<Typography
								variant='paragraph'
								color='black'
								className='mb-2 '
							>
								부대시설:{campingItem.caravInnerFclty || 'N.A.'}
							</Typography>
						</div>
					</div>
				))}
			</Carousel>
		</>
	);
	return <>{content}</>;
}

export default CampingDetail;
