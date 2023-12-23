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
			<div class='flex items-center gap-4'>
				<button
					disabled
					class='flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
					type='button'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='2'
						stroke='currentColor'
						aria-hidden='true'
						class='w-4 h-4'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
						></path>
					</svg>
					Previous
				</button>
				<div class='flex items-center gap-2'>
					<button
						class='relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg bg-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
						type='button'
					>
						<span class='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
							1
						</span>
					</button>
					<button
						class='relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
						type='button'
					>
						<span class='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
							2
						</span>
					</button>
					<button
						class='relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
						type='button'
					>
						<span class='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
							3
						</span>
					</button>
					<button
						class='relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
						type='button'
					>
						<span class='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
							4
						</span>
					</button>
					<button
						class='relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
						type='button'
					>
						<span class='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
							5
						</span>
					</button>
				</div>
				<button
					class='flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
					type='button'
				>
					Next
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='2'
						stroke='currentColor'
						aria-hidden='true'
						class='w-4 h-4'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
						></path>
					</svg>
				</button>
			</div>
		</>
	);
	return <>{content}</>;
}

export default CampingDetail;
