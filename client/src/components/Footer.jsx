import React from 'react';

const Footer = () => {
	return (
		<footer className='footer p-10 bg-base-200 text-base-content'>
			<nav>
				<header className='footer-title'>Services</header>
				<a
					href='http://localhost:5000'
					className='link link-hover'
				>
					Branding
				</a>
				<a
					href='http://localhost:5000'
					className='link link-hover'
				>
					Design
				</a>
				<a
					href='http://localhost:5000'
					className='link link-hover'
				>
					Marketing
				</a>
				<a
					href='http://localhost:5000'
					className='link link-hover'
				>
					Advertisement
				</a>
			</nav>
			<nav>
				<header className='footer-title'>Company</header>
				<a
					href='http://localhost:5000'
					className='link link-hover'
				>
					About us
				</a>
				<a
					href='http://localhost:5000'
					className='link link-hover'
				>
					Contact
				</a>
				<a
					href='http://localhost:5000'
					className='link link-hover'
				>
					Jobs
				</a>
				<a
					href='http://localhost:5000'
					className='link link-hover'
				>
					Press kit
				</a>
			</nav>
			<nav>
				<header className='footer-title'>Legal</header>
				<a
					href='http://localhost/5000'
					className='link link-hover'
				>
					Terms of use
				</a>
				<a
					href='http://localhost/5000'
					className='link link-hover'
				>
					Privacy policy
				</a>
				<a
					href='http://localhost/5000'
					className='link link-hover'
				>
					Cookie policy
				</a>
			</nav>
			<form>
				<header className='footer-title'>Newsletter</header>
				<fieldset className='form-control w-80'>
					<label className='label'>
						<span className='label-text'>Enter your email address</span>
					</label>
					<div className='join'>
						<input
							type='text'
							placeholder='username@site.com'
							className='input input-bordered join-item'
						/>
						<button className='btn btn-primary join-item'>Subscribe</button>
					</div>
				</fieldset>
			</form>
		</footer>
	);
};

export default Footer;
