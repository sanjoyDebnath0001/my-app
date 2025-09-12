'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MapPin, Calendar, Users, Search, Play, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Frist() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const cities = ['DARJEELING', 'GANGTOK', 'GOA', 'SHILLONG', 'PURI', 'SRINAGAR', 'MUSSOORIE'];

	// Image data for the slideshow
	const images = [
		{ src: '/images.jpg', alt: 'A serene mountain lake' },
		{ src: '/bg/lake-mountain.jpg', alt: 'A beautiful lake with mountains in the background' },
	];

	// Effect to handle the image slideshow
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 3000); // Change image every 3 seconds

		return () => clearInterval(interval);
	}, [images.length]);

	return (
		<div className="min-h-screen flex flex-col font-sans text-white bg-gray-900">
			{/* Main Hero Section */}
			<div className="relative h-screen flex justify-center p-4">

				{/* Image Slideshow as the Background */}
				<div className="absolute inset-0 z-0 overflow-hidden">
					{images.map((img, index) => (
						<Image
							key={index}
							src={img.src}
							alt={img.alt}
							layout="fill"
							objectFit="cover"
							priority={index === 0}
							className={`transition-opacity duration-2000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
								}`}
						/>
					))}
				</div>

				{/* Dark overlay with a higher z-index to sit on top of the slideshow */}
				<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/30 z-10"></div>

				{/* Hero Content with a higher z-index */}
				<div className=" mt-40 relative z-20 text-left max-w-5xl mx-auto px-4">

					<h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
						Our Story: Making Every Journey Exceptional
					</h1>
					<p className="text-sm sm:text-base md:text-lg max-w-3xl  mb-10 text-gray-200">
						Discover the people, the passion, and the promise behind Ghar Basai.
					</p>
				</div>
			</div>
		</div>
	);
}