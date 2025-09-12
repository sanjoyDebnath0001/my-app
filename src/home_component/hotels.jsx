// src/components/Hotels.jsx

"use client";
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Import the hotel data from the specified path
import { hotelData } from "@/hotelcomponents/hotels";

export default function Hotels() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const numVisible = 3;

	const handleNext = () => {
		setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, hotelData.length - numVisible));
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
	};

	const cardWidth = 320;
	const cardGap = 32;
	const cardTranslateValue = currentIndex * (cardWidth + cardGap);

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 40 },
		show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};


	return (
		<section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col md:flex-row md:items-center justify-between">
					<div className="text-center md:text-left md:w-2/3 lg:w-1/2">
						<span className="text-sm font-semibold text-gray-500 tracking-wider">HOTELS</span>
						<h2 className="mt-2 text-4xl font-bold text-gray-800">
							Comfortable Stays Away
						</h2>
					</div>
					<div className="mt-4 md:mt-0 md:text-right md:w-1/3 lg:w-1/2 flex flex-col md:flex-row justify-end items-center">
						<p className="text-gray-600 mb-2 md:mb-0 md:mr-4 text-center md:text-left">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lorem ut cursusui fringilla eu.
						</p>
						<button className="px-6 py-2 rounded-full text-white font-medium bg-gradient-to-r from-violet-600 to-purple-800 hover:opacity-90 transition-opacity duration-300">
							View All Hotels
						</button>
					</div>
				</div>
			</div>

			<div className="relative mt-12 flex items-center justify-center">
				<button
					onClick={handlePrev}
					disabled={currentIndex === 0}
					className="absolute left-0 lg:left-10 p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-300 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
				>
					<FaChevronLeft className="text-lg text-gray-600" />
				</button>

				<div className="overflow-hidden w-full max-w-[1024px]">
					<div
						className="flex space-x-8 transition-transform duration-500 ease-in-out"
						style={{ transform: `translateX(-${ cardTranslateValue }px)` }}
					>
						{hotelData.map((hotel, index) => (
							<Link href={`/hotels/${hotel.id}`} key={hotel.id}>
						<motion.div
							key={index}
							variants={item}
							className="w-80 flex-shrink-0 bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105"
						>
							<div className="h-64 w-full relative">
								<Image
									src={hotel.image}
									alt={hotel.title}
									layout="fill"
									objectFit="cover"
									className="rounded-t-lg"
								/>
							</div>
							<div className="p-4">
								<h3 className="text-lg font-bold text-gray-800 leading-tight">{hotel.title}</h3>
								<div className="mt-2 text-sm text-gray-600 space-y-1">
									<p><strong>{hotel.location}</strong></p>
									<p>Starts ₹{hotel.price} per night</p>
								</div>
								<div className="flex items-center mt-3 text-sm font-medium">
									<div className="bg-green-500 text-white rounded-md px-2 py-0.5 mr-2">{hotel.rating}</div>
									<div className="flex text-yellow-400">
										{[...Array(5)].map((_, i) => (
											<FaStar key={i} className="text-sm" />
										))}
									</div>
									<span className="ml-2 text-gray-600">{hotel.reviews}</span>
								</div>
							</div>
						</motion.div>
					</Link>
						))}
				</div>
			</div>

			<button
				onClick={handleNext}
				disabled={currentIndex >= hotelData.length - numVisible}
				className="absolute right-0 lg:right-10 p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-300 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
			>
				<FaChevronRight className="text-lg text-gray-600" />
			</button>
		</div>
		</section >
	);
}