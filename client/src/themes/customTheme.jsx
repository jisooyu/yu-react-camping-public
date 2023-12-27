import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronRight,
	faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

export const customTheme = {
	carousel: {
		defaultProps: {
			prevArrow: ({ loop, handlePrev, firstIndex }) => {
				return (
					<button
						onClick={handlePrev}
						disabled={!loop && firstIndex}
						className='!absolute top-2/4 left-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center'
					>
						<FontAwesomeIcon
							icon={faChevronLeft}
							className='-ml-1 h-7 w-7 text-red-900'
						/>
					</button>
				);
			},
			nextArrow: ({ loop, handleNext, lastIndex }) => (
				<button
					onClick={handleNext}
					disabled={!loop && lastIndex}
					className='!absolute top-2/4 right-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center'
				>
					<FontAwesomeIcon
						icon={faChevronRight}
						className='-ml-1 h-7 w-7 text-red-900'
					/>
				</button>
			),
			navigation: ({ setActiveIndex, activeIndex, length }) => (
				<div className='absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2'>
					{new Array(length).fill('').map((_, i) => (
						<span
							key={i}
							className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
								activeIndex === i ? 'bg-blue-gray-900' : 'bg-blue-gray-100'
							}`}
							onClick={() => setActiveIndex(i)}
						/>
					))}
				</div>
			),
			autoplay: false,
			autoplayDelay: 5000,
			transition: {
				type: 'tween',
				duration: 0.5,
			},
			loop: false,
			className: '',
		},
		styles: {
			base: {
				carousel: {
					position: 'relative',
					width: 'w-full',
					height: 'h-full',
					overflowX: 'overflow-x-hidden',
					display: 'flex',
				},

				slide: {
					width: 'w-full',
					height: 'h-full',
					display: 'inline-block',
					flex: 'flex-none',
				},
			},
		},
	},
	NavbarWithSearch: {
		defaultProps: {
			// Add your custom props here
		},
		styles: {
			// Add your custom styles here
		},
	},
};