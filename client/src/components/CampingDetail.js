import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function CampingDetail({ campingData }) {
	const settings = {
		showThumbs: false,
		infiniteLoop: true,
		showStatus: false,
		centerMode: true,
		centerSlidePercentage: 40, // Adjust this to control the width of each slide
		emulateTouch: true,
		useKeyboardArrows: true,
		autoPlay: true,
		stopOnHover: true,
		swipeable: true,
		dynamicHeight: false, // Adjust this if you want the carousel items to have variable heights
		slidesToShow: 3, // Adjust the number of slides to show in a row
	};

	return (
		<div className='container flex flex-col items-center mt-3'>
			<h2 className='text-2xl font-bold mb-4'>Go Camping Information</h2>
			<Carousel {...settings}>
				{campingData.map((campingItem) => (
					<div
						className='border-8 p-2'
						key={campingItem.contentId}
					>
						<div>
							<img
								src={campingItem.firstImageUrl || 'vlookup-not-working.png'}
								alt='campingPicture'
								className='object-cover w-90 h-80 ' // Set a fixed height for consistent image heights
							/>
						</div>
						<div className='mt-3'>
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
							<b></b>
							<b></b>
						</div>
					</div>
				))}
			</Carousel>
		</div>
	);
}

export default CampingDetail;
