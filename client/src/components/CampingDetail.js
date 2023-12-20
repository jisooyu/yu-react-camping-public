import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

function CampingDetail({ campingData }) {
	return (
		<div className='container mx-auto'>
			<h1 className='text-4xl font-bold mb-8'>Go Camping Information</h1>
			<Swiper
				spaceBetween={10}
				navigation={true}
				loop={true}
				// pagination={true}
				modules={[
					Navigation,
					// Pagination
				]}
				className='swiper'
				//make styles in css
				//or just use tailwind
				// className="max-w-[500px] mb-20 mt-20"
				breakpoints={{
					450: {
						slidesPerView: 1,
					},
					630: {
						slidesPerView: 2,
					},
					920: {
						slidesPerView: 3,
					},
				}}
			>
				{campingData.map((campingItem) => (
					<SwiperSlide key={campingItem.contentId}>
						<div className='w-full p-2'>
							<p>{campingItem.addr1}</p>
							<div className='aspect-w-4 aspect-h-3'>
								<img
									src={campingItem.firstImageUrl}
									alt='campingPicture'
									className='object-cover w-96 h-96'
								/>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default CampingDetail;
