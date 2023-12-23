import { Carousel, Typography } from '@material-tailwind/react';

function CampingDetail({ campingData }) {
	let content;
	content = (
		<>
			<Carousel className='rounded-xl'>
				{campingData.map((campingItem) => (
					<div key={campingItem.contentId}>
						<div className='relative h-full w-full flex justify-center'>
							<img
								src={campingItem.firstImageUrl || 'no-image-available.jpeg'}
								alt='campingPicture'
								className='h-full w-full object-cover'
							/>
						</div>
						<div className='absolute inset-0 grid h-full w-full place-items-center bg-black/75'>
							<div className='w-3/4 text-center md:w-2/4'>
								<div className='p-6 pt-0'>
									<button
										className='align-middle font-sans font-bold text-center uppercase py-3 px-6 rounded-lg bg-gray-900'
										type='button'
									>
										<a
											className='text-blue-500 hover:text-red-500 underline !important'
											href={campingItem.homepage}
										>
											Home Page Link
										</a>
									</button>
								</div>
							</div>
						</div>
						<div className='w-full text-center md:w-2/4'>
							<Typography
								variant='h3'
								color='blue'
								className='mb-4 text-2xl md:text-4xl lg:text-5xl'
							>
								캠핑장:{campingItem.facltNm}
							</Typography>
							<Typography
								variant='lead'
								color='blue'
								className='mb-12 opacity-80'
							>
								캠핑장 주소:{campingItem.addr1}
							</Typography>
							<Typography
								variant='lead'
								color='blue'
								className='mb-12 opacity-80'
							>
								펫입장여부:{campingItem.animalCmgCl}
							</Typography>
							<Typography
								variant='lead'
								color='blue'
								className='mb-12 opacity-80'
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
