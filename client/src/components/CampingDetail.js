import { Carousel } from '@material-tailwind/react';

function CampingDetail({ campingData }) {
	let content;
	content = (
		<>
			<Carousel className='rounded-xl'>
				{campingData.map((campingItem) => (
					<div key={campingItem.contentId}>
						<div class='relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96'>
							<div class='relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40'>
								<img
									src={campingItem.firstImageUrl || 'no-image-available.jpeg'}
									alt='campingPicture'
									className='h-4/5 w-full object-cover'
								/>
							</div>
						</div>
						<div class='p-6'>
							<p>캠핑장이름:{campingItem.facltNm}</p>
							<p>캠핑장 주소:{campingItem.addr1}</p>
							<p>펫입장여부:{campingItem.animalCmgCl}</p>
							<p>부대시설:{campingItem.caravInnerFclty || 'N.A.'}</p>
						</div>
						<div class='p-6 pt-0'>
							<button
								class='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'
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
				))}
			</Carousel>
		</>
	);
	return <>{content}</>;
}

export default CampingDetail;
