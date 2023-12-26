import React from 'react';

const Header = () => {
	return (
		<div className='navbar bg-base-100'>
			<div className='flex-1'>
				<a
					href='http://localhost:5000'
					className='btn btn-ghost text-xl'
				>
					Go Camping Information
				</a>
			</div>
			<div className='flex-none gap-2'>
				<div className='form-control'>
					<input
						type='text'
						placeholder='Search'
						className='input input-bordered w-24 md:w-auto'
					/>
				</div>
				<div className='dropdown dropdown-end'>
					<div
						tabIndex={0}
						role='button'
						className='btn btn-ghost btn-circle avatar'
					>
						<div className='w-10 rounded-full'>
							<img
								alt='Tailwind CSS Navbar component'
								src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
							/>
						</div>
					</div>
					<ul
						tabIndex={0}
						className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
					>
						<li>
							<a
								href='http://localhost:5000'
								className='justify-between'
							>
								{' '}
								Profile
								<span className='badge'>New</span>
							</a>
						</li>
						<li>
							<a href='http://localhost:5000'>Settings</a>
						</li>
						<li>
							<a href='http://localhost:5000'>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
