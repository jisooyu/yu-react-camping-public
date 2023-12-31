import { Typography } from '@material-tailwind/react';

export default function Footer() {
	return (
		<footer
			className='flex w-full  h-40
		 flex-row mt-20 bg-blue-gray-400 py-2 flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-400  text-black text-center md:justify-between shadow-xl shadow-blue-gray-900/50'
		>
			<img
				src='https://docs.material-tailwind.com/img/logo-ct-dark.png'
				alt='logo-ct'
				className='w-10'
			/>
			<ul className='flex flex-wrap items-center gap-y-2 gap-x-8'>
				<li>
					<Typography
						as='a'
						href='#'
						color='white'
						className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
					>
						About Us
					</Typography>
				</li>
				<li>
					<Typography
						as='a'
						href='#'
						color='white'
						className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
					>
						License
					</Typography>
				</li>
				<li>
					<Typography
						as='a'
						href='#'
						color='white'
						className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
					>
						Contribute
					</Typography>
				</li>
				<li>
					<Typography
						as='a'
						href='#'
						color='white'
						className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
					>
						Contact Us
					</Typography>
				</li>
			</ul>
			<hr className='my-8 border-blue-gray-50' />
			<Typography
				color='white'
				className='text-center font-normal mr-5'
			>
				&copy; 2024 Go Camping
			</Typography>
		</footer>
	);
}
