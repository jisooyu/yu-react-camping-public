import {
	Carousel,
	Typography,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
} from '@material-tailwind/react';

function CampingDetail({ campingData }) {
	let content;
	content = (
		<Carousel>
			{campingData.map((campingItem) => (
				<div key={campingItem.contentId}>
					<Card className='relative h-full w-full rounded-none'>
						<CardHeader className='relative aspect-ratio-9/9 h-96 w-full flex justify-center object-cover rounded-xl shadow-xl shadow-blue-gray-900/50'>
							<img
								loading='lazy'
								src={campingItem.firstImageUrl || 'no-image-available.jpeg'}
								alt='campingPicture'
							/>
						</CardHeader>
						<CardBody>
							<div className='relative w-full mt-10 mb-20'>
								<div className='mx-auto w-full max-w-7xl px-8'>
									<div className='grid grid-cols-1 justify-between gap-4 md:grid-cols-2'>
										<Typography
											variant='paragraph'
											color='black'
											className='mb-4 '
										>
											캠핑장:{campingItem.facltNm}
										</Typography>
										<Typography
											variant='paragraph'
											color='black'
											className='py-1.5 '
										>
											캠핑장 주소:{campingItem.addr1}
										</Typography>
										<Typography
											variant='paragraph'
											color='black'
											className='py-1.5 '
										>
											펫입장여부:{campingItem.animalCmgCl}
										</Typography>
										<Typography
											variant='paragraph'
											color='black'
											className='py-1.5 '
										>
											부대시설:{campingItem.caravInnerFclty || 'N.A.'}
										</Typography>
									</div>
								</div>
							</div>
						</CardBody>
						<CardFooter className='absolute inset-0 grid h-full w-full place-items-center bg-gray5/7'>
							<div className='w-3/4 text-center md:w-2/4'>
								<div className='p-6 pt-10'>
									<button
										className='align-middle text-center uppercase py-3 px-6 rounded-lg bg-gray-400'
										type='button'
									>
										<a
											className='text-black 
											underline text-xs hover:text-red-500!important'
											href={campingItem.homepage}
										>
											Home Page Link
										</a>
									</button>
								</div>
							</div>
						</CardFooter>
					</Card>
				</div>
			))}
		</Carousel>
	);
	return <>{content}</>;
}

export default CampingDetail;
