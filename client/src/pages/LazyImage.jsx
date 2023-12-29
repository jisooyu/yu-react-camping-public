import React, { useEffect, useRef } from 'react';

const LazyImage = ({ src, alt }) => {
	const imgRef = useRef();

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					imgRef.current.src = src;
					observer.disconnect();
				}
			},
			{ rootMargin: '0px 10px 100px 10px' }
		);
		if (imgRef.current) {
			observer.observe(imgRef.current);
		}

		return () => {
			if (imgRef.current) {
				observer.unobserve(imgRef.current);
			}
		};
	}, [src]);

	return (
		<img
			ref={imgRef}
			alt={alt}
		/>
	);
};

export default LazyImage;
