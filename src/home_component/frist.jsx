'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MapPin, Calendar, Users, Search, Play, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Frist() {
	const [location, setLocation] = useState('');
	const [checkIn, setCheckIn] = useState('');
	const [checkOut, setCheckOut] = useState('');
	const [guests, setGuests] = useState(1);
	const [currentIndex, setCurrentIndex] = useState(0);

	const cities = ['DARJEELING', 'GANGTOK', 'GOA', 'SHILLONG', 'PURI', 'SRINAGAR', 'MUSSOORIE'];

	// Image data for the slideshow
	const images = [
		{ src: '/images.jpg', alt: 'A serene mountain lake' },
		{ src: '/image2.jpg', alt: 'Sunrise over a tropical beach' },
		{ src: '/image3.jpg', alt: 'A vibrant city street at night' },
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
			{/* Main Hero Section - Now full screen */}
			<div className="relative h-screen w-full flex items-center justify-center p-0">

				{/* Image Slideshow as the Background */}
				<div className="absolute inset-0 z-0 overflow-hidden">
					{images.map((img, index) => (
						<Image
							key={index}
							src={img.src}
							alt={img.alt}
							fill
							priority={index === 0}
							className={`transition-opacity duration-2000 ease-in-out object-cover ${index === currentIndex ? 'opacity-100' : 'opacity-0'
								}`}
						/>
					))}
				</div>

				{/* Dark overlay with a higher z-index to sit on top of the slideshow */}
				<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40 z-10"></div>

				{/* Hero Content with a higher z-index */}
				<div className="relative z-20 text-left w-full max-w-6xl px-4 md:px-8 flex flex-col justify-center">

					<p className="text-sm sm:text-lg tracking-widest uppercase mb-4">
						WELCOME TO GHAR BASAI
					</p>
					<h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
						Discover the World, One Journey at a Time
					</h1>
					<p className="text-sm sm:text-base md:text-lg max-w-3xl mb-10 text-gray-200">
						Lorem ipsum dolor sit amet consectetur. Fermentum nunc proin netus cursus non. Enim
						porttitor pretium augue elit in tristique. Nisl arcu sagittis habitant suscipit nunc
						fames donec sit. Ut faucibus risus fringilla tristique sit a.
					</p>


					<div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
						<div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
							{/* Location */}
							<div className="relative">
								<MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-white" size={20} />
								<input
									type="text"
									placeholder="Where to?"
									className="w-full bg-white/30 text-white rounded-lg pl-10 pr-4 py-3 placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50"
									value={location}
									onChange={(e) => setLocation(e.target.value)}
								/>
							</div>

							{/* Check-in */}
							<div className="relative">
								<Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-white" size={20} />
								<input
									type="date"
									placeholder="Check-in Date"
									className="w-full bg-white/30 text-white rounded-lg pl-10 pr-4 py-3 placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50"
									value={checkIn}
									onChange={(e) => setCheckIn(e.target.value)}
								/>
							</div>

							{/* Check-out */}
							<div className="relative">
								<Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-white" size={20} />
								<input
									type="date"
									placeholder="Check-out Date"
									className="w-full bg-white/30 text-white rounded-lg pl-10 pr-4 py-3 placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50"
									value={checkOut}
									onChange={(e) => setCheckOut(e.target.value)}
								/>
							</div>

							{/* Guests */}
							<div className="relative">
								<Users className="absolute left-3 top-1/2 -translate-y-1/2 text-white" size={20} />
								<input
									type="number"
									className="w-full bg-white/30 text-white rounded-lg pl-10 pr-4 py-3 placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50"
									placeholder="Guests"
									value={guests}
									onChange={(e) => setGuests(parseInt(e.target.value))}
									min="1"
								/>
							</div>
						</div>

						{/* Search Button */}
						<button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 transition-colors duration-200 text-white rounded-lg px-8 py-3 flex items-center justify-center gap-2 font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900">
							<Search size={20} />
							Search
						</button>
					</div>
				</div>

				{/* Video Thumbnail */}
				<div className="absolute bottom-8 right-8 z-20">
					<div className="relative w-40 h-24 rounded-2xl overflow-hidden shadow-lg border-2 border-white/30 cursor-pointer group">
						<Image
							src="/video.jpg"
							alt="Video Thumbnail"
							fill
							className="object-cover group-hover:scale-110 transition-transform duration-300"
						/>
						<div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-2 text-center text-sm font-semibold">
							<Play
								className="text-white/80 group-hover:text-white transition-colors duration-300 mb-1"
								size={32}
							/>
							Watch a Video About Us
						</div>
					</div>
				</div>
			</div>


			{/* Moving City Banner */}
			<div className="relative overflow-hidden bg-blue-800 w-full p-4 sm:p-6 text-sm text-center tracking-widest uppercase">
				<motion.div
					className="absolute left-0 top-3 flex item-center gap-6 sm:gap-10 whitespace-nowrap"
					animate={{ x: ['0%', '-100%'] }}
					transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
				>

					{[...cities, ...cities].map((city, index) => (
						<div key={index} className="flex items-center gap-2 px-4">
							<motion.span
								className="bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent font-bold"
								animate={{
									textShadow: [
										'0px 0px 0px rgba(255,255,255,0.8)',
										'0px 0px 8px rgba(255,255,255,1)',
										'0px 0px 0px rgba(255,255,255,0.8)',
									],
								}}
								transition={{
									duration: 2,
									repeat: Infinity,
									repeatType: 'reverse',
								}}
							>
								{city}
							</motion.span>
							<Star className="text-yellow-400" size={16} fill="currentColor" />
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
}