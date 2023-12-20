import React, { useRef, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import '../styles.css';

function CampingDetail({ campingData }) {
	const [slideBegOrNot, handleSlideByState] = useState({
		isFirst: true,
		isLast: false,
	});
	const SlideRef = useRef();

	const handleNext = () => {
		SlideRef.current.swiper.slideNext();
	};

	const handlePrev = () => {
		SlideRef.current.swiper.slidePrev();
	};

	const onSlideChange = (swiper) => {
		handleSlideByState({
			isFirst: swiper.isBeginning,
			isLast: swiper.isEnd,
		});
	};

	const { isLast, isFirst } = slideBegOrNot;
	return (
		<div className='container'>
			<h1 className='heading'>Go Camping Sites</h1>

			<div className='post-box'>
				<div className='bg-left'></div>
				<div className='bg-right'></div>

				<div className='post-heading'>
					<div className='heading-box'>
						<h2 className='second-heading'>Camping Sites</h2>
						<div className='pagination-slide'>
							<p className='swiper-paginations'></p>
							<div className='bs-icons'>
								<BsArrowLeft
									className={`Arrow ${isFirst ? 'disabled' : ''}`}
									onClick={handlePrev}
								/>
								<BsArrowRight
									className={`Arrow ${isLast ? 'disabled' : ''}`}
									onClick={handleNext}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='post-conatin'>
					<Swiper
						slidesPerView={1}
						spaceBetween={0}
						className={'mySwiper'}
						ref={SlideRef}
						onSlideChange={onSlideChange}
						pagination={{
							el: '.swiper-paginations',
							type: 'fraction',
						}}
						navigation={false}
						modules={[Pagination, Navigation]}
						breakpoints={{
							0: {
								slidesPerView: 1,
							},
							390: {
								slidesPerView: 1.5,
							},
							502: {
								slidesPerView: 2,
							},
							802: {
								slidesPerView: 2.5,
							},
							992: {
								slidesPerView: 3,
							},
							1200: {
								slidesPerView: 4,
							},
						}}
					>
						{campingData.map((campingItem) => (
							<SwiperSlide key={campingItem.contentId}>
								<div className='w-full p-2'>
									<img
										src={campingItem.firstImageUrl}
										alt='campingPicture'
										className='object-cover w-96 h-96'
									/>
									<p>{campingItem.addr1}</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
}

export default CampingDetail;
