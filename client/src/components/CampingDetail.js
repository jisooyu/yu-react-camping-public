import { Carousel } from '@material-tailwind/react';

function CampingDetail({ campingItem }) {
	let content;
	content = (
		<Carousel className='rounded-xl'>
			<p>{campingItem.addr1}</p>
			<img
				src={campingItem.firstImageUrl}
				alt='campingPicture'
				className='object-cover w-full h-full'
			/>
		</Carousel>
	);
	return <>{content}</>;
}

export default CampingDetail;
